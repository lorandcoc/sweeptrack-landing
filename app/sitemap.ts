import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { LOCALES, NON_EN_LOCALES, localeUrl } from "@/lib/getDictionary";

const BASE = "https://sweeptrack.pro";

// Date the landing page itself was last meaningfully refreshed. Bump when the
// homepage copy or sections change. Blog post dates come from POSTS.
const SITE_LAST_MODIFIED = "2026-07-09";

// hreflang alternates for the homepage across all 14 locales (English at /,
// others at /<code>), plus x-default → English. The locale homepages are
// server-rendered routes, so they belong in the sitemap as crawlable siblings.
const homeLanguages: Record<string, string> = Object.fromEntries([
  ...LOCALES.map((l) => [l, localeUrl(l)]),
  ["x-default", localeUrl("en")],
]);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: SITE_LAST_MODIFIED, changeFrequency: "weekly", priority: 1, alternates: { languages: homeLanguages } },
    ...NON_EN_LOCALES.map((loc) => ({
      url: localeUrl(loc),
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: { languages: homeLanguages },
    })),
    { url: `${BASE}/radar`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/overlays`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/clubs`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    ...POSTS.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.publishedDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${BASE}/trust`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/privacy-radar`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/data-deletion`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
  ];
}
