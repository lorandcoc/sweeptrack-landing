import { NextRequest, NextResponse } from "next/server";

/**
 * Map country codes to supported language codes.
 * Visitor's country comes from Vercel's x-vercel-ip-country header (free, automatic).
 * If the country's language isn't supported, we fall back to English.
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
const SUPPORTED_LANGS = new Set([
  "en", "ro", "de", "es", "fr", "nl", "pl", "it", "pt", "sv", "tr", "da", "hu", "ru",
]);

function resolveLocale(request: NextRequest): string {
  const cookieValue = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieValue && SUPPORTED_LANGS.has(cookieValue)) return cookieValue;
  const country = request.headers.get("x-vercel-ip-country") || "";
  return COUNTRY_TO_LANG[country] || "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = resolveLocale(request);

  // First-segment shortcut: pull out the first path piece (e.g. "/de/foo" → "de")
  const firstSegment = pathname.split("/", 2)[1] || "";

  // Visitor landed on `/` and their locale is non-English → bounce to the
  // localized URL so the SSR'd HTML, canonical, and hreflang all line up
  // with what their browser displays.
  if (pathname === "/" && locale !== "en") {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    const response = NextResponse.redirect(url);
    response.cookies.set(COOKIE_NAME, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  // Visitor browsed straight to `/<locale>` (e.g. opened a German Google
  // result) → trust the URL and persist that as their preference so future
  // visits to `/` don't bounce them away from it.
  if (SUPPORTED_LANGS.has(firstSegment) && firstSegment !== "en") {
    const response = NextResponse.next();
    if (request.cookies.get(COOKIE_NAME)?.value !== firstSegment) {
      response.cookies.set(COOKIE_NAME, firstSegment, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }
    return response;
  }

  // Otherwise — root with cookie==en, blog routes, privacy, terms, etc. Just
  // ensure the cookie is set for future visits (so the geo detection runs
  // once, not on every request).
  const response = NextResponse.next();
  if (!request.cookies.get(COOKIE_NAME)) {
    response.cookies.set(COOKIE_NAME, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }
  return response;
}

export const config = {
  // Run on real pages only. Skip:
  //   - Next.js internals (_next/...)
  //   - API routes
  //   - All static assets in /public (icons, screenshots, maps)
  //   - Metadata routes that should be canonical regardless of visitor locale
  //     (sitemap.xml, robots.txt, manifest.webmanifest, opengraph-image,
  //     feed.xml, plus any *.png|jpg|jpeg|webp|svg|ico|xml|txt|webmanifest)
  //
  // Note: keeping this in a single negative-lookahead pattern is intentional.
  // A more granular allow-list ("only run on / and /<locale>") confuses
  // Next.js 16's static analyzer and tanks SSG for unrelated pages.
  matcher: [
    "/((?!_next|api|opengraph-image|sitemap\\.xml|robots\\.txt|manifest\\.webmanifest|screenshots|maps|.*\\.(?:png|jpg|jpeg|webp|svg|ico|xml|txt|webmanifest)$).*)",
  ],
};
