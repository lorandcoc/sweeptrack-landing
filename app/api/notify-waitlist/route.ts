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

const WELCOME_SUBJECT = "On the list.";
const WELCOME_BODY = `You'll get the Play Store link the morning SweepTrack Pro goes live — before any social post or Reddit thread.

The first 1,000 in get a one-time Founder's Lifetime: one payment, no renewal. After that, a regular trial + subscription.

Reply "remove" anytime.

— Lorand
sweeptrack.pro
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
