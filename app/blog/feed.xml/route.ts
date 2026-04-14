const posts = [
  { slug: "how-to-use-old-maps-for-metal-detecting", title: "How to Use Old Maps to Find Better Detecting Spots" },
  { slug: "metal-detecting-permission-letter-template", title: "Permission Letter Template + How to Approach Landowners" },
  { slug: "best-weather-conditions-for-metal-detecting", title: "Best Weather for Detecting (And When to Stay Home)" },
  { slug: "beach-metal-detecting-tide-timing", title: "Beach Detecting: Tide Timing & Where to Search" },
  { slug: "how-to-track-metal-detecting-sessions-gps", title: "How to Track Your Detecting Sessions with GPS" },
  { slug: "metal-detecting-for-beginners", title: "Metal Detecting for Beginners: What You Need to Know" },
  { slug: "organize-metal-detector-presets-settings", title: "How to Organize Your Detector Settings and Presets" },
  { slug: "detecting-forecast-guide", title: "Detecting Forecast: Plan Every Session by the Numbers" },
  { slug: "setting-up-perimeter-guard", title: "Setting Up Perimeter Guard: Stay Within Your Zone" },
  { slug: "using-the-permission-vault", title: "Using the Permission Vault to Manage Permissions" },
  { slug: "downloading-offline-maps", title: "Downloading Offline Maps for Areas Without Cell Service" },
  { slug: "using-track-overlay", title: "Using Track Overlay to See Where You Already Walked" },
  { slug: "cloud-backup-google-drive", title: "Cloud Backup: Never Lose Your Detecting Data" },
  { slug: "night-vision-mode", title: "Night Vision Mode for Dawn and Dusk Detecting" },
  { slug: "logging-finds-photo-video-audio", title: "Logging Finds with Photo, Video, and Audio Notes" },
  { slug: "using-coin-caliper", title: "Using the Coin Caliper to Identify Dirty or Worn Coins" },
  { slug: "finding-historic-sites-nearby", title: "Finding Historic Sites and Landmarks Near You" },
  { slug: "comparing-sessions-overlay-split", title: "Comparing Sessions: Overlay and Split View" },
  { slug: "exporting-sessions-gpx-kml-csv", title: "Exporting Sessions as GPX, KML, or CSV" },
  { slug: "understanding-session-statistics", title: "Understanding Your Session Statistics and Personal Bests" },
  { slug: "best-places-to-metal-detect-in-texas", title: "Best Places to Metal Detect in Texas" },
  { slug: "best-places-to-metal-detect-in-florida", title: "Best Places to Metal Detect in Florida" },
  { slug: "best-places-to-metal-detect-in-ohio", title: "Best Places to Metal Detect in Ohio" },
  { slug: "best-places-to-metal-detect-in-virginia", title: "Best Places to Metal Detect in Virginia" },
  { slug: "best-places-to-metal-detect-in-california", title: "Best Places to Metal Detect in California" },
  { slug: "metal-detecting-laws-in-the-uk", title: "Metal Detecting Laws in the UK" },
  { slug: "metal-detecting-laws-in-the-us", title: "Metal Detecting Laws in the US" },
  { slug: "metal-detecting-laws-in-australia", title: "Metal Detecting Laws in Australia" },
  { slug: "where-to-metal-detect-near-me", title: "Where to Metal Detect Near Me" },
  { slug: "best-metal-detectors-under-500", title: "Best Metal Detectors Under $500 in 2026" },
];

export async function GET() {
  const base = "https://sweeptrack.pro";
  const now = new Date().toUTCString();

  const items = posts
    .map(
      (p) => `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${base}/blog/${p.slug}</link>
      <guid isPermaLink="true">${base}/blog/${p.slug}</guid>
      <pubDate>${now}</pubDate>
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SweepTrack Pro — Guides &amp; Tips</title>
    <link>${base}/blog</link>
    <description>Metal detecting guides, tips, tutorials, and location guides from SweepTrack Pro.</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${base}/blog/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
