import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";

const BASE = "https://sweeptrack.pro";

// Date the landing page itself was last meaningfully refreshed. Bump when the
// homepage copy or sections change. Blog post dates come from POSTS.
const SITE_LAST_MODIFIED = "2026-06-09";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: SITE_LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/radar`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    ...POSTS.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.publishedDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${BASE}/privacy`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: SITE_LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
  ];
}
