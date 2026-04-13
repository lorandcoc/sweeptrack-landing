import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limiter (per serverless instance)
const recentRequests = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 requests per minute per IP

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
    await resend.emails.send({
      from: "SweepTrack Waitlist <onboarding@resend.dev>",
      to: "support@sweeptrack.pro",
      subject: `New waitlist signup: ${safeEmail}`,
      text: `Someone just joined the SweepTrack Pro waitlist.\n\nEmail: ${safeEmail}\nTime: ${new Date().toISOString()}\n\nView all signups: https://supabase.com/dashboard/project/vntuabtcrllroulgqhwf/editor`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true, notifyError: true });
  }
}
