// Server-safe single source for the Google Play listing URL and its
// campaign-tagged variants. Deliberately framework-agnostic (no "use client")
// so it can be imported from Server Components, route handlers, and client
// components alike.
//
// Links on this site use sitePlayUrl() so Play Console can attribute installs
// to the page they came from. Only structured data (JSON-LD downloadUrl) keeps
// the bare PLAY_URL. Client components get the current page's URL from
// useSitePlayUrl() in components/GooglePlayButton.tsx.

export const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.sweeptrack.native";

/**
 * Play URL for a link on sweeptrack.pro, tagged with the page it sits on.
 * Play Console -> Acquisition reports then show installs per utm_campaign
 * (e.g. "home", "pricing", "blog-metal-detecting-permission-letter-template").
 */
export function sitePlayUrl(campaign: string): string {
  const referrer = `utm_source=sweeptrack.pro&utm_medium=website&utm_campaign=${campaign}`;
  return `${PLAY_URL}&referrer=${encodeURIComponent(referrer)}`;
}

/** Campaign name for a site path: "/" -> "home", "/ro" -> "ro", "/blog/a-post" -> "blog-a-post". */
export function playCampaignForPath(pathname: string | null | undefined): string {
  const slug = (pathname ?? "")
    .toLowerCase()
    .replace(/^\/+|\/+$/g, "")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .slice(0, 80);
  return slug || "home";
}

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

/* ────────────────────────── SweepTrack Radar ────────────────────────── */

/** Google Play listing for the free companion app, SweepTrack Radar. */
export const RADAR_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.sweeptrack.radar";

/**
 * Deep link the Radar app registers (AndroidManifest intent-filter):
 * `sweeptrackradar://join/{CODE}`.
 */
export function radarJoinDeepLink(code: string): string {
  return `sweeptrackradar://join/${code}`;
}

/**
 * Campaign-attributed Play URL for a Radar invite link — same Install Referrer
 * trick as {@link bandReferrerUrl}, so invite-driven installs show up per-code
 * in Play Console with no backend.
 */
export function radarInviteReferrerUrl(
  code: string,
  source = "invite",
  medium = "link",
): string {
  const referrer = `utm_source=${source}&utm_medium=${medium}&utm_campaign=${code}`;
  return `${RADAR_PLAY_URL}&referrer=${encodeURIComponent(referrer)}`;
}

/**
 * Radar hunt codes: 8 chars from a 32-symbol Crockford-style alphabet (no
 * I/L/O/U). Mirrors the app's `GroupCode` object exactly — same alphabet, same
 * look-alike mapping — so a code that the app would accept is exactly the code
 * this site deep-links.
 */
const RADAR_CODE_ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
export const RADAR_CODE_LENGTH = 8;

/** Uppercase, map common look-alikes (I/L→1, O→0, U→V), strip junk. */
export function normalizeRadarCode(raw: string | undefined | null): string {
  let out = "";
  for (const c of (raw ?? "").trim().toUpperCase()) {
    const mapped =
      c === "I" || c === "L" ? "1" : c === "O" ? "0" : c === "U" ? "V" : c;
    if (RADAR_CODE_ALPHABET.includes(mapped)) out += mapped;
    if (out.length >= 32) break; // sanity cap on garbled input
  }
  return out;
}

export function isValidRadarCode(code: string): boolean {
  return (
    code.length === RADAR_CODE_LENGTH &&
    [...code].every((c) => RADAR_CODE_ALPHABET.includes(c))
  );
}
