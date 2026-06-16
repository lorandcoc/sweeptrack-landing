// Launch / early-access email for the waitlist — offers Google Play internal
// testing access PLUS a full 365 days free on whichever plan they pick
// (annual or monthly), for everyone who opted in to be notified at launch.
//
// Same visual system as WELCOME_BODY_HTML in route.ts (dark tactical card,
// #050510 bg / #0C0C1C card / #00FF6A accent, "by Loriba" footer) plus a
// green CTA button for the Play internal-test opt-in link and a highlighted
// "free year" offer box.
//
// {{OPT_IN_LINK}} is a placeholder — replace it with your real opt-in URL from
// Play Console → Test and release → Testing → Internal testing → Testers tab →
// "Copy link" (looks like https://play.google.com/apps/internaltest/XXXXXXXXXX).
// Reuse the same List-Unsubscribe headers as the welcome send if you send via API.

export const LAUNCH_SUBJECT = "You're in - early access, and a free year of SweepTrack Pro";

export const LAUNCH_BODY = `Hey,

SweepTrack Pro is in internal testing - and because you're on the list, you get in first.

Here's the deal: join the test, then start whichever plan you like - annual or monthly - and your first 365 days are completely free. The full app, everything unlocked, for a whole year.

How to get in:

1. Tap your invite link to accept:
   {{OPT_IN_LINK}}
2. Tap "Become a tester", then open SweepTrack Pro on Google Play and install it.
3. Open the app, start a trial - annual or monthly, your call - and your 365 days free kick in.

Two things worth knowing:
- Android only for now, and Google Play testing needs a Google (Gmail) account. If the address you signed up with isn't Gmail, just reply with your Gmail, and I'll add you.
- This is an early build. If anything feels off, hit reply and tell me - that feedback shapes what ships.

Thanks for showing up early. Good luck out there.

Lorand
sweeptrack.pro

P.S. Want to own it for good instead? The 1,000 Founder's Lifetime spots are still open - one payment, never renews.
`;

// HTML version — all CSS inlined so it renders in Gmail/Outlook/Apple Mail
// without a <style> block. Mirrors the welcome email's structure.
export const LAUNCH_BODY_HTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="x-apple-disable-message-reformatting" />
<meta name="color-scheme" content="dark light" />
<meta name="supported-color-schemes" content="dark light" />
<title>You're in - early access, and a free year of SweepTrack Pro</title>
</head>
<body style="margin:0;padding:0;background-color:#050510;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#E8E8F0;-webkit-font-smoothing:antialiased;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">Internal testing is live - join now and start either trial for a full 365 days free.</div>
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
<td style="padding-left:12px;color:#00FF6A;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">Early access &middot; a free year</td>
</tr>
</table>

<p style="margin:0 0 20px;color:#E8E8F0;font-size:16px;line-height:1.65;">Hey,</p>
<p style="margin:0 0 20px;color:#E8E8F0;font-size:16px;line-height:1.65;">SweepTrack Pro is in <strong style="color:#E8E8F0;">internal testing</strong> - and because you're on the list, you get in first.</p>
<p style="margin:0 0 24px;color:#E8E8F0;font-size:16px;line-height:1.65;">Before the public launch, I'm opening early access to a small group of testers through Google Play's internal testing track. It's the full app, and I'm making it worth your while.</p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;">
<tr>
<td style="background-color:#0A1A10;border:1px solid rgba(0,255,106,0.30);border-radius:12px;padding:20px 22px;">
<p style="margin:0 0 6px;color:#00FF6A;font-size:13px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;">Your first year - free</p>
<p style="margin:0;color:#E8E8F0;font-size:16px;line-height:1.6;">Join the test, then start <strong style="color:#E8E8F0;">either plan - annual or monthly</strong>. Your first <strong style="color:#00FF6A;">365 days are completely free</strong>. The full app, everything unlocked, for a whole year.</p>
</td>
</tr>
</table>

<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;">
<tr>
<td valign="top" style="padding:0 12px 14px 0;color:#00FF6A;font-size:16px;font-weight:700;line-height:1.5;">1</td>
<td valign="top" style="padding:0 0 14px;color:#E8E8F0;font-size:16px;line-height:1.5;">Tap the button below to accept your invite.</td>
</tr>
<tr>
<td valign="top" style="padding:0 12px 14px 0;color:#00FF6A;font-size:16px;font-weight:700;line-height:1.5;">2</td>
<td valign="top" style="padding:0 0 14px;color:#E8E8F0;font-size:16px;line-height:1.5;">Tap <strong style="color:#E8E8F0;">"Become a tester"</strong>, then open SweepTrack Pro on Google Play and install it.</td>
</tr>
<tr>
<td valign="top" style="padding:0 12px 0 0;color:#00FF6A;font-size:16px;font-weight:700;line-height:1.5;">3</td>
<td valign="top" style="color:#E8E8F0;font-size:16px;line-height:1.5;">Open the app and start a trial - <strong style="color:#E8E8F0;">annual or monthly</strong>, your call - and your <strong style="color:#00FF6A;">365 days free</strong> kick in.</td>
</tr>
</table>

<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;">
<tr>
<td align="center" bgcolor="#00FF6A" style="border-radius:12px;">
<a href="{{OPT_IN_LINK}}" target="_blank" style="display:inline-block;padding:15px 36px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:16px;font-weight:700;color:#050510;text-decoration:none;border-radius:12px;letter-spacing:-0.01em;">Join the test &rarr;</a>
</td>
</tr>
</table>

<p style="margin:0 0 10px;color:#B0B0CC;font-size:14px;line-height:1.65;"><span style="color:#00FF6A;font-weight:700;">&bull;</span> Android only for now, and Google Play testing needs a Google (Gmail) account. If the address you signed up with isn't Gmail, just reply with your Gmail, and I'll add you.</p>
<p style="margin:0;color:#B0B0CC;font-size:14px;line-height:1.65;"><span style="color:#00FF6A;font-weight:700;">&bull;</span> This is an early build. If anything feels off, hit reply and tell me - that feedback shapes what ships.</p>

<p style="margin:32px 0 4px;color:#E8E8F0;font-size:16px;line-height:1.5;">Thanks for showing up early. Good luck out there.</p>
<p style="margin:16px 0 4px;color:#E8E8F0;font-size:16px;line-height:1.5;">Lorand</p>
<p style="margin:0;font-size:14px;"><a href="https://sweeptrack.pro" style="color:#00FF6A;text-decoration:none;font-weight:500;">sweeptrack.pro</a></p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:32px 0;">
<tr>
<td style="border-top:1px solid rgba(0,255,106,0.10);height:1px;font-size:0;line-height:0;">&nbsp;</td>
</tr>
</table>

<p style="margin:0;color:#B0B0CC;font-size:14px;line-height:1.65;"><span style="color:#00FF6A;font-weight:700;">P.S.</span> Want to own it for good instead? The 1,000 Founder's Lifetime spots are still open - one payment, never renews.</p>

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
