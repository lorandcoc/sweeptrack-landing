/**
 * Launch / early-access email sender (Resend).
 *
 * Reuses the template in app/api/notify-waitlist/launchEmail.ts so the test and
 * the real broadcast are byte-identical to what you reviewed.
 *
 * Usage (run from the sweeptrack-landing/ root):
 *
 *   # one test send to yourself
 *   npx tsx scripts/sendLaunchEmail.ts --test lorand.83@gmail.com --link "https://play.google.com/apps/internaltest/XXXX"
 *
 *   # send to specific addresses, comma-separated (needs a verified-domain sender)
 *   npx tsx scripts/sendLaunchEmail.ts --emails "a@x.com,b@y.com" --link "https://play.google.com/apps/internaltest/XXXX"
 *
 *   # real batch send to a list (one email per line in recipients.txt)
 *   npx tsx scripts/sendLaunchEmail.ts --file recipients.txt --link "https://play.google.com/apps/internaltest/XXXX"
 *
 * Requires RESEND_API_KEY. The script auto-loads it from .env.local if present,
 * otherwise reads it from the shell environment. RESEND_FROM_EMAIL is optional
 * (defaults to the onboarding sender until your domain is verified in Resend).
 */
import { readFileSync, existsSync } from "node:fs";
import { Resend } from "resend";
import { LAUNCH_SUBJECT, LAUNCH_BODY, LAUNCH_BODY_HTML } from "../app/api/notify-waitlist/launchEmail";

// ── Minimal .env.local loader (no dotenv dependency) ──────────────────────────
// Only sets vars that aren't already present in the real environment.
function loadEnvLocal() {
  const path = ".env.local";
  if (!existsSync(path)) return;
  for (const raw of readFileSync(path, "utf8").split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
}

// ── CLI args ──────────────────────────────────────────────────────────────────
function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 ? process.argv[i + 1] : undefined;
}

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,24}$/;
const UNSUB = "support@sweeptrack.pro";

async function main() {
  loadEnvLocal();

  // Resolve the sender AFTER loadEnvLocal() so a RESEND_FROM_EMAIL that lives only
  // in .env.local is honored (not just one exported in the shell). The shared sandbox
  // sender (onboarding@resend.dev) only delivers to the account owner's own address;
  // a real send needs a verified-domain sender via RESEND_FROM_EMAIL, so we guard on it.
  const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "SweepTrack Pro <onboarding@resend.dev>";
  const usingSandbox = FROM_EMAIL.includes("onboarding@resend.dev");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("✗ RESEND_API_KEY not found. Put it in .env.local or export it, then re-run.");
    process.exit(1);
  }

  const link = arg("link");
  if (!link) {
    console.error('✗ --link is required (the Play internal-test opt-in URL). Pass --link "https://play.google.com/apps/internaltest/XXXX".');
    process.exit(1);
  }

  const testTo = arg("test");
  const file = arg("file");
  const emails = arg("emails");
  if (!testTo && !file && !emails) {
    console.error("✗ Provide --test <email>, --emails <a@x.com,b@y.com>, or --file <path-to-list>.");
    process.exit(1);
  }

  // Build recipient list
  let recipients: string[];
  if (testTo) {
    recipients = [testTo.trim().toLowerCase()];
  } else if (emails) {
    recipients = emails
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter((e) => e.length > 0);
  } else {
    recipients = readFileSync(file!, "utf8")
      .split(/\r?\n/)
      .map((l) => l.trim().toLowerCase())
      .filter((l) => l.length > 0 && !l.startsWith("#"));
  }
  const bad = recipients.filter((e) => !EMAIL_RE.test(e));
  if (bad.length) {
    console.error(`✗ ${bad.length} invalid address(es), e.g. "${bad[0]}". Fix the list and re-run.`);
    process.exit(1);
  }
  recipients = [...new Set(recipients)]; // dedupe

  if (usingSandbox && !(testTo && recipients.length === 1)) {
    console.error("✗ Using the onboarding@resend.dev sandbox sender, which only delivers to your own");
    console.error("  account address. Set RESEND_FROM_EMAIL to a verified-domain sender before a batch send.");
    process.exit(1);
  }

  const html = LAUNCH_BODY_HTML.replaceAll("{{OPT_IN_LINK}}", link);
  const text = LAUNCH_BODY.replaceAll("{{OPT_IN_LINK}}", link);
  const resend = new Resend(apiKey);

  console.log(`→ Sending "${LAUNCH_SUBJECT}" from ${FROM_EMAIL}`);
  console.log(`→ Opt-in link: ${link}`);
  console.log(`→ ${recipients.length} recipient(s)${testTo ? " (TEST)" : ""}\n`);

  let ok = 0;
  let fail = 0;
  // Send sequentially with a small gap to stay under Resend's rate limit.
  for (const to of recipients) {
    try {
      const res = await resend.emails.send({
        from: FROM_EMAIL,
        to,
        subject: LAUNCH_SUBJECT,
        text,
        html,
        headers: {
          "List-Unsubscribe": `<mailto:${UNSUB}?subject=remove>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        },
      });
      if (res.error) {
        fail++;
        console.error(`  ✗ ${to} — ${res.error.message}`);
      } else {
        ok++;
        console.log(`  ✓ ${to} — ${res.data?.id ?? "sent"}`);
      }
    } catch (err) {
      fail++;
      console.error(`  ✗ ${to} — ${(err as Error).message}`);
    }
    if (recipients.length > 1) await new Promise((r) => setTimeout(r, 600));
  }

  console.log(`\nDone. ${ok} sent, ${fail} failed.`);
  if (fail) process.exit(1);
}

main().catch((err) => {
  console.error("✗ Send failed:", (err as Error).message);
  process.exit(1);
});
