import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limiter (per serverless instance)
const recentRequests = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 requests per minute per IP

// Override via RESEND_FROM_EMAIL once the sweeptrack.pro domain is verified in Resend.
// Default keeps the existing onboarding sender so deploys don't break before DNS lands.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "SweepTrack Waitlist <onboarding@resend.dev>";
const NOTIFY_TO = "support@sweeptrack.pro";

const WELCOME_SUBJECT = "You're on the SweepTrack Pro launch list.";
const WELCOME_BODY = `Hi —

You're on the list.

When SweepTrack Pro lands in the Google Play Store, the link comes to you first — before any social post, before any Reddit announcement. That's the deal.

A few things to expect:
— Between now and launch I'll walk you through what the app does. Feature by feature.
— The Founder's Lifetime opens the day Play approves us. First 1,000 detectorists. One payment, never offered again.
— No ads. No servers. No analytics. Everything lives on your phone unless you opt into Google Drive backup — to your Drive, not mine.

Full feature list and screenshots: https://sweeptrack.pro

If you'd rather not be on the list, reply with "remove" and you're off. No hard feelings.

— Lorand
SweepTrack Pro
`;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = recentRequests.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  recentRequests.set(ip, recent);
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "too many requests" }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || !EMAIL_RE.test(email) || email.length > 254) {
      return NextResponse.json({ error: "invalid email" }, { status: 400 });
    }

    // Sanitize for safe inclusion in email text
    const safeEmail = email.replace(/[<>&"']/g, "");

    const resend = new Resend(apiKey);

    // Fire both emails in parallel. allSettled so one failure doesn't drop the other.
    const [notifyRes, welcomeRes] = await Promise.allSettled([
      resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFY_TO,
        subject: `New waitlist signup: ${safeEmail}`,
        text: `Someone just joined the SweepTrack Pro waitlist.\n\nEmail: ${safeEmail}\nTime: ${new Date().toISOString()}\n\nView all signups: https://supabase.com/dashboard/project/vntuabtcrllroulgqhwf/editor`,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: WELCOME_SUBJECT,
        text: WELCOME_BODY,
        headers: {
          "List-Unsubscribe": `<mailto:${NOTIFY_TO}?subject=remove>`,
        },
      }),
    ]);

    return NextResponse.json({
      ok: true,
      notifyError: notifyRes.status === "rejected",
      welcomeError: welcomeRes.status === "rejected",
    });
  } catch {
    return NextResponse.json({ ok: true, notifyError: true });
  }
}
