import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sweeptrack.pro";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/how-to-use-old-maps-for-metal-detecting`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/best-weather-conditions-for-metal-detecting`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/metal-detecting-permission-letter-template`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];
}
