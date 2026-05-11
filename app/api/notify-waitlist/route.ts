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

const WELCOME_SUBJECT = "Thanks for signing up.";

const WELCOME_BODY = `Hey —

Just a quick note to say thanks for being on the list. Means a lot.

You will receive the link the moment SweepTrack Pro is live. Until then, good luck out there.

— Lorand
sweeptrack.pro

P.S. There are 1,000 Founder's Lifetime spots — one payment, never renews. A small thank-you for showing up early. After those are gone, just the regular trial + subscription.
`;

// HTML version — dark, tactical, matches the app's color system from globals.css.
// All CSS inlined so it renders in Gmail/Outlook/Apple Mail without a <style> block.
const WELCOME_BODY_HTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="x-apple-disable-message-reformatting" />
<meta name="color-scheme" content="dark light" />
<meta name="supported-color-schemes" content="dark light" />
<title>Thanks for signing up.</title>
</head>
<body style="margin:0;padding:0;background-color:#050510;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#E8E8F0;-webkit-font-smoothing:antialiased;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">Welcome to the SweepTrack Pro launch list. You will receive the link when we go live.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#050510;min-width:100%;">
<tr>
<td align="center" style="padding:48px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">

<tr>
<td align="center" style="padding-bottom:28px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
<tr>
<td valign="middle" style="padding-right:12px;">
<img src="https://sweeptrack.pro/icon.svg" width="36" height="36" alt="" style="display:block;border-radius:8px;" />
</td>
<td valign="middle">
<span style="color:#E8E8F0;font-size:18px;font-weight:700;letter-spacing:-0.02em;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">SweepTrack <span style="color:#00FF6A;">Pro</span></span>
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td style="background-color:#0C0C1C;border:1px solid rgba(0,255,106,0.12);border-radius:16px;padding:40px 32px;">

<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
<tr>
<td style="width:6px;background-color:#00FF6A;border-radius:3px;font-size:0;line-height:0;">&nbsp;</td>
<td style="padding-left:12px;color:#00FF6A;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">Launch list &middot; confirmed</td>
</tr>
</table>

<p style="margin:0 0 20px;color:#E8E8F0;font-size:16px;line-height:1.65;">Hey &mdash;</p>
<p style="margin:0 0 20px;color:#E8E8F0;font-size:16px;line-height:1.65;">Just a quick note to say thanks for being on the list. Means a lot.</p>
<p style="margin:0 0 20px;color:#E8E8F0;font-size:16px;line-height:1.65;">You will receive the link the moment SweepTrack Pro is live. Until then, good luck out there.</p>

<p style="margin:32px 0 4px;color:#E8E8F0;font-size:16px;line-height:1.5;">&mdash; Lorand</p>
<p style="margin:0;font-size:14px;"><a href="https://sweeptrack.pro" style="color:#00FF6A;text-decoration:none;font-weight:500;">sweeptrack.pro</a></p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:32px 0;">
<tr>
<td style="border-top:1px solid rgba(0,255,106,0.10);height:1px;font-size:0;line-height:0;">&nbsp;</td>
</tr>
</table>

<p style="margin:0;color:#B0B0CC;font-size:14px;line-height:1.65;"><span style="color:#00FF6A;font-weight:700;">P.S.</span> There are 1,000 Founder's Lifetime spots &mdash; one payment, never renews. A small thank-you for showing up early. After those are gone, just the regular trial + subscription.</p>

</td>
</tr>

<tr>
<td align="center" style="padding-top:24px;">
<p style="margin:0;color:rgba(232,232,240,0.4);font-size:12px;line-height:1.5;">SweepTrack Pro &middot; by Loriba</p>
</td>
</tr>

</table>
</td>
</tr>
</table>
</body>
</html>`;

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
        html: WELCOME_BODY_HTML,
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
