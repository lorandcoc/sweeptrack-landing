// Server-safe single source for the Google Play listing URL and its
// campaign-tagged variants. Deliberately framework-agnostic (no "use client")
// so it can be imported from Server Components, route handlers, and client
// components alike.
//
// NOTE: components/GooglePlayButton.tsx still exports its own PLAY_URL for the
// download CTAs. Migrate those imports here when convenient so there is truly
// one source of truth for the listing URL.

export const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.sweeptrack.native";

/**
 * Build a Google Play campaign-attribution URL for a SweepTrack Field Band (or
 * any QR / ambassador / referral) code.
 *
 * The `referrer` value is delivered to the app via the Play Install Referrer
 * API and shows up in Play Console -> Acquisition reports, so every band or
 * ambassador code gets per-install attribution with NO backend of our own.
 *
 * @param code   campaign id (the band / ambassador code)
 * @param source utm_source (default "band")
 * @param medium utm_medium (default "qr")
 */
export function bandReferrerUrl(
  code: string,
  source = "band",
  medium = "qr",
): string {
  const referrer = `utm_source=${source}&utm_medium=${medium}&utm_campaign=${code}`;
  return `${PLAY_URL}&referrer=${encodeURIComponent(referrer)}`;
}

/**
 * Normalize a raw path / QR code segment into a safe campaign id: alphanumerics
 * plus `-` and `_`, capped at 32 chars, upper-cased. Falls back to "BAND" so the
 * redirect never breaks on a garbled scan.
 */
export function sanitizeBandCode(raw: string | undefined | null): string {
  return (
    (raw ?? "")
      .replace(/[^A-Za-z0-9_-]/g, "")
      .slice(0, 32)
      .toUpperCase() || "BAND"
  );
}
