import type { Metadata } from "next";
import { LOCALES, localeUrl, type LocaleCode } from "./getDictionary";

/**
 * Open Graph locale tag for each supported language. Used in the og:locale meta.
 */
const OG_LOCALE: Record<LocaleCode, string> = {
  en: "en_US",
  ro: "ro_RO",
  de: "de_DE",
  es: "es_ES",
  fr: "fr_FR",
  nl: "nl_NL",
  pl: "pl_PL",
  it: "it_IT",
  pt: "pt_PT",
  sv: "sv_SE",
  tr: "tr_TR",
  da: "da_DK",
  hu: "hu_HU",
  ru: "ru_RU",
};

const SHARED_DESCRIPTION =
  "Metal detecting app for Android. GPS tracking, USGS historical and import-your-own map overlays, Finds Intelligence, offline maps, Waypoints, Radar live group positioning, Permission Vault, and Detecting Forecast. Free download, ad-free.";

const SHARED_OG_DESCRIPTION =
  "Metal detecting app for Android. GPS tracking, USGS historical and custom map overlays, Finds Intelligence, offline maps, Waypoints, Radar live group positioning, Permission Vault, and Cloud Backup. Free download, ad-free.";

const SHARED_TWITTER_DESCRIPTION =
  "GPS tracking, USGS Historical Topo overlay, offline maps, Waypoints, Radar live group positioning, Perimeter Guard, Permission Vault, and Detecting Forecast. Android, ad-free.";

const SHARED_TITLE = "Metal Detecting App for Android | SweepTrack Pro";

/**
 * Build per-locale metadata for the landing page. Each locale advertises its
 * own URL as canonical and lists every supported locale (plus x-default → /)
 * via hreflang, so Google understands the translated routes are siblings of
 * each other rather than duplicates.
 *
 * Title/description still ship in English here — translating them is a
 * separate copywriting pass. Body content already renders in the visitor's
 * language thanks to the SSR'd dictionary.
 */
export function landingMetadata(locale: LocaleCode): Metadata {
  const url = localeUrl(locale);

  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[l] = localeUrl(l);
  }
  languages["x-default"] = localeUrl("en");

  return {
    title: SHARED_TITLE,
    description: SHARED_DESCRIPTION,
    alternates: {
      canonical: url,
      languages,
      types: { "application/rss+xml": "https://sweeptrack.pro/blog/feed.xml" },
    },
    openGraph: {
      title: "SweepTrack Pro: Metal Detecting App for Android",
      description: SHARED_OG_DESCRIPTION,
      url,
      siteName: "SweepTrack Pro",
      type: "website",
      locale: OG_LOCALE[locale],
    },
    twitter: {
      card: "summary_large_image",
      title: SHARED_TITLE,
      description: SHARED_TWITTER_DESCRIPTION,
    },
  };
}
