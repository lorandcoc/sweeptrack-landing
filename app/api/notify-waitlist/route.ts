import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Silently skip — waitlist insert already succeeded client-side
    return NextResponse.json({ ok: true, skipped: true });
  }

  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "missing email" }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "SweepTrack Waitlist <onboarding@resend.dev>",
      to: "support@sweeptrack.pro",
      subject: `New waitlist signup: ${email}`,
      text: `Someone just joined the SweepTrack Pro waitlist.\n\nEmail: ${email}\nTime: ${new Date().toISOString()}\n\nView all signups: https://supabase.com/dashboard/project/vntuabtcrllroulgqhwf/editor`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    // Don't fail the user experience over a notification error
    return NextResponse.json({ ok: true, notifyError: true });
  }
}
