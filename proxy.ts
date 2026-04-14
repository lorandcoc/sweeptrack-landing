import { NextRequest, NextResponse } from "next/server";

/**
 * Map country codes to supported language codes.
 * Visitor's country comes from Vercel's x-vercel-ip-country header (free, automatic).
 * If the country's language isn't supported, we skip the cookie and the client defaults to English.
 */
const COUNTRY_TO_LANG: Record<string, string> = {
  // Romanian
  RO: "ro", MD: "ro",
  // German
  DE: "de", AT: "de", CH: "de", LI: "de",
  // Spanish
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es",
  EC: "es", GT: "es", CU: "es", BO: "es", DO: "es", HN: "es", PY: "es",
  SV: "es", NI: "es", CR: "es", PA: "es", UY: "es",
  // French
  FR: "fr", BE: "fr", LU: "fr", MC: "fr", SN: "fr", CI: "fr", ML: "fr",
  BF: "fr", NE: "fr", TG: "fr", BJ: "fr", GA: "fr", CG: "fr", CM: "fr",
  MG: "fr", HT: "fr",
  // Dutch
  NL: "nl", SR: "nl",
  // Polish
  PL: "pl",
  // Italian
  IT: "it", SM: "it", VA: "it",
  // Portuguese
  BR: "pt", PT: "pt", AO: "pt", MZ: "pt",
  // Swedish
  SE: "sv",
  // Turkish
  TR: "tr", CY: "tr",
  // Hungarian
  HU: "hu",
  // Russian
  RU: "ru", BY: "ru", KZ: "ru", KG: "ru",
  // Danish
  DK: "da", GL: "da",
};

const COOKIE_NAME = "st-geo-lang";

export function proxy(request: NextRequest) {
  // Don't override if the cookie is already set (one-time detection)
  if (request.cookies.has(COOKIE_NAME)) return NextResponse.next();

  const country = request.headers.get("x-vercel-ip-country") || "";
  const lang = COUNTRY_TO_LANG[country] || "en";

  const response = NextResponse.next();
  response.cookies.set(COOKIE_NAME, lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
  });

  return response;
}

export const config = {
  // Run on all pages but skip static assets and API routes
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|screenshots|.*\\.png$|.*\\.jpg$|.*\\.webp$|api).*)"],
};
