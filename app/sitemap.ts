import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sweeptrack.pro";
  const now = new Date().toISOString();

  const blogSlugs = [
    "how-to-use-old-maps-for-metal-detecting",
    "metal-detecting-permission-letter-template",
    "best-weather-conditions-for-metal-detecting",
    "beach-metal-detecting-tide-timing",
    "how-to-track-metal-detecting-sessions-gps",
    "metal-detecting-for-beginners",
    "organize-metal-detector-presets-settings",
    "how-to-use-detecting-forecast",
    "setting-up-perimeter-guard",
    "using-the-permission-vault",
    "downloading-offline-maps",
    "using-track-overlay",
    "cloud-backup-google-drive",
    "night-vision-mode",
    "logging-finds-photo-video-audio",
    "using-coin-caliper",
    "finding-historic-sites-nearby",
    "comparing-sessions-overlay-split",
    "exporting-sessions-gpx-kml-csv",
    "understanding-session-statistics",
  ];

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];
}
