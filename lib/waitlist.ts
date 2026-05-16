/**
 * Shared waitlist signup helper. Both the hero `ComingSoonButton` and the
 * community section's `NewsletterForm` call this — keeps the Supabase
 * endpoint, anon key, honeypot handling, and notify-route call in one place
 * so the two signup paths can't drift apart.
 *
 * The anon key is intentionally public (it always is on the client). What
 * keeps the table safe is the RLS policy on Supabase: insert-only for anon,
 * select denied. See the waitlist policies in the Supabase dashboard if
 * anything ever looks off.
 */

const SUPABASE_URL = "https://vntuabtcrllroulgqhwf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZudHVhYnRjcmxscm91bGdxaHdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMjYwNTIsImV4cCI6MjA4ODkwMjA1Mn0.WXVRYyUqt98tMe8g_yiFkP7puJUNyaQiQsz6SySKor4";

export type JoinResult = "ok" | "duplicate" | "invalid" | "error";

export async function joinWaitlist(
  rawEmail: string,
  honeypot: string,
): Promise<JoinResult> {
  // If the honeypot was filled, the submission is a bot. Don't hit Supabase —
  // pretend success on the client so the bot can't tell it was caught. Keeps
  // the table clean and avoids tipping off whoever is probing.
  if (honeypot.trim().length > 0) return "ok";

  const email = rawEmail.trim().toLowerCase();
  if (!email || email.length > 254) return "invalid";

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      // Fire-and-forget notification + welcome email. Never blocks the user.
      // We forward the honeypot value so the server-side route can also catch
      // any bot that bypassed the client-side check.
      fetch("/api/notify-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: honeypot }),
      }).catch(() => {});
      return "ok";
    }
    if (res.status === 409) return "duplicate";
    return "error";
  } catch {
    return "error";
  }
}
