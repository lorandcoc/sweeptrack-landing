/**
 * Canonical blog post list — single source of truth for slug, SEO title, and
 * published date. Imported by:
 *   - app/blog/feed.xml/route.ts  (RSS feed)
 *   - app/sitemap.ts              (XML sitemap)
 *   - app/blog/page.tsx           (index, for the slug list — UI titles/excerpts
 *                                  stay local to the index since cards use shorter
 *                                  card-friendly variants)
 *
 * Title and publishedDate here MUST match the TITLE and PUBLISHED constants
 * inside each app/blog/<slug>/page.tsx so feed and sitemap stay in lockstep
 * with what the post page actually renders.
 */

export type BlogCategory =
  | "tutorials"
  | "guides"
  | "tips"
  | "location"
  | "beach"
  | "beginners"
  | "gear";

export interface PostMeta {
  slug: string;
  title: string;
  publishedDate: string;
  category: BlogCategory;
}

export const POSTS: readonly PostMeta[] = [
  // Guides
  { slug: "how-to-use-old-maps-for-metal-detecting", title: "How to Use Old Maps to Find Better Metal Detecting Spots", publishedDate: "2026-02-28", category: "guides" },
  { slug: "metal-detecting-permission-letter-template", title: "Metal Detecting Permission Letter: Free Template + What to Include", publishedDate: "2026-03-18", category: "guides" },
  { slug: "how-to-track-metal-detecting-sessions-gps", title: "How to Track Your Metal Detecting Sessions with GPS", publishedDate: "2026-02-25", category: "guides" },
  { slug: "detecting-as-a-group-with-radar", title: "Detecting as a Group: Live Positions with Radar", publishedDate: "2026-06-24", category: "guides" },

  // Beginners
  { slug: "metal-detecting-for-beginners", title: "Metal Detecting for Beginners: What You Need to Know", publishedDate: "2026-03-06", category: "beginners" },

  // Tips
  { slug: "best-weather-conditions-for-metal-detecting", title: "Best Weather Conditions for Metal Detecting (And When to Stay Home)", publishedDate: "2026-02-04", category: "tips" },
  { slug: "organize-metal-detector-presets-settings", title: "How to Organize Your Metal Detector Settings and Presets", publishedDate: "2026-03-24", category: "tips" },

  // Beach
  { slug: "beach-metal-detecting-tide-timing", title: "Beach Metal Detecting: Tide Timing & Where to Search", publishedDate: "2026-01-14", category: "beach" },

  // Tutorials
  { slug: "detecting-forecast-guide", title: "Detecting Forecast: Plan Every Session by the Numbers", publishedDate: "2026-02-13", category: "tutorials" },
  { slug: "setting-up-perimeter-guard", title: "Setting Up Perimeter Guard: Stay Within Your Permitted Zone", publishedDate: "2026-03-27", category: "tutorials" },
  { slug: "using-the-permission-vault", title: "Using the Permission Vault to Manage Landowner Permissions", publishedDate: "2026-04-08", category: "tutorials" },
  { slug: "downloading-offline-maps", title: "Downloading Offline Maps for Metal Detecting Without Cell Service", publishedDate: "2026-02-16", category: "tutorials" },
  { slug: "using-track-overlay", title: "Using Track Overlay to See Where You Already Walked", publishedDate: "2026-04-11", category: "tutorials" },
  { slug: "cloud-backup-google-drive", title: "Cloud Backup: Never Lose Your Detecting Data", publishedDate: "2026-02-07", category: "tutorials" },
  { slug: "night-vision-mode", title: "Night Vision Mode for Dawn and Dusk Detecting", publishedDate: "2026-03-21", category: "tutorials" },
  { slug: "logging-finds-photo-video-audio", title: "Logging Finds with Photos, Videos, and Audio Notes", publishedDate: "2026-03-03", category: "tutorials" },
  { slug: "comparing-sessions-overlay-split", title: "Comparing Sessions: Overlay and Split View", publishedDate: "2026-02-10", category: "tutorials" },
  { slug: "exporting-sessions-gpx-kml-csv", title: "Exporting Sessions as GPX, KML, or CSV", publishedDate: "2026-02-19", category: "tutorials" },
  { slug: "understanding-session-statistics", title: "Understanding Your Session Statistics", publishedDate: "2026-04-02", category: "tutorials" },
  { slug: "share-card", title: "Share Card: A Vertical Summary of Your Session", publishedDate: "2026-03-30", category: "tutorials" },
  { slug: "import-and-georeference-your-own-maps", title: "Import and Align Your Own Maps Over Satellite", publishedDate: "2026-06-24", category: "tutorials" },
  { slug: "finds-intelligence-dashboard", title: "Finds Intelligence: See What Your Data Is Telling You", publishedDate: "2026-06-24", category: "tutorials" },
  { slug: "using-the-tide-table", title: "Using the Tide Table to Time Beach Sessions", publishedDate: "2026-06-24", category: "tutorials" },
  { slug: "marking-sites-with-waypoints", title: "Marking Sites with Waypoints You Can Navigate Back To", publishedDate: "2026-06-24", category: "tutorials" },
  { slug: "reading-session-elevation-profiles", title: "Reading the Elevation Profile of a Session", publishedDate: "2026-06-24", category: "tutorials" },
  { slug: "browsing-your-finds-photo-gallery", title: "Browsing Every Find Photo in One Gallery", publishedDate: "2026-06-24", category: "tutorials" },

  // Location / Laws
  { slug: "best-places-to-metal-detect-in-texas", title: "Best Places to Metal Detect in Texas", publishedDate: "2026-01-29", category: "location" },
  { slug: "best-places-to-metal-detect-in-florida", title: "Best Places to Metal Detect in Florida", publishedDate: "2026-01-23", category: "location" },
  { slug: "best-places-to-metal-detect-in-ohio", title: "Best Places to Metal Detect in Ohio", publishedDate: "2026-01-26", category: "location" },
  { slug: "best-places-to-metal-detect-in-virginia", title: "Best Places to Metal Detect in Virginia", publishedDate: "2026-02-01", category: "location" },
  { slug: "best-places-to-metal-detect-in-california", title: "Best Places to Metal Detect in California", publishedDate: "2026-01-20", category: "location" },
  { slug: "metal-detecting-laws-in-the-uk", title: "Metal Detecting Laws in the UK", publishedDate: "2026-03-12", category: "location" },
  { slug: "metal-detecting-laws-in-the-us", title: "Metal Detecting Laws in the US", publishedDate: "2026-03-15", category: "location" },
  { slug: "metal-detecting-laws-in-australia", title: "Metal Detecting Laws in Australia", publishedDate: "2026-03-09", category: "location" },
  { slug: "where-to-metal-detect-near-me", title: "Where to Metal Detect Near Me: Finding Good Spots Anywhere", publishedDate: "2026-04-14", category: "location" },

  // Gear
  { slug: "best-metal-detectors-under-500", title: "Best Metal Detectors Under $500 in 2026", publishedDate: "2026-01-17", category: "gear" },
];

export const POSTS_BY_SLUG: ReadonlyMap<string, PostMeta> = new Map(
  POSTS.map((p) => [p.slug, p]),
);
