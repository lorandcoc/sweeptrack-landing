"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/* `tag` and `thumbnail` are kept for reference but not shown: the category
 * already says what `tag` says, and the thumbnails were cropped app headers,
 * several of them placeholder or retired screens. */
const posts = [
  // ── GUIDES ──
  { slug: "how-to-use-old-maps-for-metal-detecting", title: "How to Use Old Maps to Find Better Detecting Spots", excerpt: "Historical topographic maps from USGS reveal old homesteads, vanished roads, and forgotten settlements.", tag: "Guide", category: "guides", readTime: "5 min", thumbnail: "/screenshots/offline_maps.jpg", featured: true },
  { slug: "metal-detecting-permission-letter-template", title: "Permission Letter Template + How to Approach Landowners", excerpt: "A free template that works, plus tips on what to say at the door and how to track your permissions.", tag: "Guide", category: "guides", readTime: "6 min", thumbnail: "/screenshots/permission_vault.jpg" },
  { slug: "how-to-track-metal-detecting-sessions-gps", title: "How to Track Your Detecting Sessions with GPS", excerpt: "Stop wondering where you already walked. GPS tracking shows your path and lets you overlay past sessions.", tag: "Guide", category: "guides", readTime: "4 min", thumbnail: "/screenshots/home.jpg" },
  { slug: "detecting-as-a-group-with-radar", title: "Detecting as a Group: Live Positions with Radar", excerpt: "See your detecting buddies on one live map, with distance, shared waypoints, an SOS, and a shared base point.", tag: "Guide", category: "guides", readTime: "4 min", thumbnail: "/screenshots/radar.jpg" },
  { slug: "metal-detecting-for-beginners", title: "Metal Detecting for Beginners: What You Need to Know", excerpt: "From picking your first detector to digging your first target, without the overwhelm.", tag: "Beginners", category: "beginners", readTime: "7 min", thumbnail: "/screenshots/home.jpg" },

  // ── TIPS ──
  { slug: "best-weather-conditions-for-metal-detecting", title: "Best Weather for Detecting (And When to Stay Home)", excerpt: "Soil moisture, temperature, wind, and pressure all affect your detector. Learn what conditions are ideal.", tag: "Tips", category: "tips", readTime: "4 min", thumbnail: "/screenshots/forecast.jpg" },

  // ── BEACH ──
  { slug: "beach-metal-detecting-tide-timing", title: "Beach Detecting: Tide Timing & Where to Search", excerpt: "Low tide is when the gold comes out. Learn how to time your sessions and where to swing.", tag: "Beach", category: "beach", readTime: "5 min", thumbnail: "/screenshots/forecast.jpg" },

  // ── APP TUTORIALS ──
  { slug: "detecting-forecast-guide", title: "Detecting Forecast: Plan Every Session by the Numbers", excerpt: "0-100 Detecting Score for any location, any day up to a week ahead. Soil moisture, wind, temp, humidity, and smart tips.", tag: "Tutorial", category: "tutorials", readTime: "4 min", thumbnail: "/screenshots/forecast.jpg" },
  { slug: "setting-up-perimeter-guard", title: "Setting Up Perimeter Guard: Stay Within Your Zone", excerpt: "Draw a boundary on the map. Get vibration alerts when you approach and audio when you cross it.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/permission_vault.jpg" },
  { slug: "using-the-permission-vault", title: "Using the Permission Vault to Manage Permissions", excerpt: "Track landowner approvals, draw site boundaries, set expiry alerts, and generate PDF permission letters.", tag: "Tutorial", category: "tutorials", readTime: "5 min", thumbnail: "/screenshots/permission_vault.jpg" },
  { slug: "downloading-offline-maps", title: "Downloading Offline Maps for Areas Without Cell Service", excerpt: "4 tile sources. Pan, zoom, download. Detect confidently with zero cell coverage.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/offline_maps.jpg" },
  { slug: "using-track-overlay", title: "Using Track Overlay to See Where You Already Walked", excerpt: "Load past sessions onto the live map as color-coded overlay paths. Ten cycling colors make coverage gaps obvious.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/home.jpg" },
  { slug: "cloud-backup-google-drive", title: "Cloud Backup: Never Lose Your Detecting Data", excerpt: "One tap to back up sessions, finds, permissions, and settings to Google Drive.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/cloud_backup.jpg" },
  { slug: "night-vision-mode", title: "Night Vision Mode for Dawn and Dusk Detecting", excerpt: "Red-on-black display preserves your eyes. Toggle it for early morning and late evening sessions.", tag: "Tutorial", category: "tutorials", readTime: "2 min", thumbnail: "/screenshots/night_vision.jpg" },
  { slug: "logging-finds-photo-video-audio", title: "Logging Finds with Photos and Audio Notes", excerpt: "Six find types plus a one-tap Unsorted drop. Pin depth, value, weight, photos, and audio notes to every find.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/stats.jpg" },
  { slug: "comparing-sessions-overlay-split", title: "Comparing Sessions: Overlay and Split View", excerpt: "Stack past sessions or compare side by side to track your progress over time.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/stats.jpg" },
  { slug: "exporting-sessions-gpx-kml-csv", title: "Exporting Sessions as GPX, KML, or CSV", excerpt: "Full Google Earth support. Export individual or multiple sessions in the format you need.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/cloud_backup.jpg" },
  { slug: "understanding-session-statistics", title: "Understanding Your Session Statistics and Personal Bests", excerpt: "Distance, finds, duration, averages, personal bests, top sessions, and weather insights.", tag: "Tutorial", category: "tutorials", readTime: "4 min", thumbnail: "/screenshots/stats.jpg" },
  { slug: "share-card", title: "Share Card: Show Off Your Session on Social Media", excerpt: "Shareable PNG session summary with path preview, stats, find breakdown, and weather.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/stats.jpg" },
  { slug: "import-and-georeference-your-own-maps", title: "Import and Align Your Own Maps Over Satellite", excerpt: "Pin a scanned old map, plat, or aerial photo onto the live satellite map at true scale, by hand or with control points.", tag: "Tutorial", category: "tutorials", readTime: "4 min", thumbnail: "/screenshots/offline_maps.jpg" },
  { slug: "finds-intelligence-dashboard", title: "Finds Intelligence: See What Your Data Tells You", excerpt: "A Pro dashboard that reads your logged finds to show your best ground, your best hours, and your best detector.", tag: "Tutorial", category: "tutorials", readTime: "4 min", thumbnail: "/screenshots/stats.jpg" },
  { slug: "using-the-tide-table", title: "Using the Tide Table to Time Beach Sessions", excerpt: "Read high and low tides from the nearest NOAA station so you reach the wet sand at the right hour.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/tide.jpg" },
  { slug: "marking-sites-with-waypoints", title: "Marking Sites with Waypoints", excerpt: "Drop, categorize, and navigate back to named map pins for promising sites, with GPX, KML, and CSV export.", tag: "Tutorial", category: "tutorials", readTime: "4 min", thumbnail: "/screenshots/waypoints.jpg" },
  { slug: "reading-session-elevation-profiles", title: "Reading a Session's Elevation Profile", excerpt: "Turn a recorded session into a smoothed elevation chart with ascent, descent, and range over the ground you covered.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/history.jpg" },
  { slug: "browsing-your-finds-photo-gallery", title: "Browsing Every Find Photo in One Gallery", excerpt: "Every photo, video, and audio note from all your finds in one date-grouped gallery you can filter and zoom.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/gallery.jpg" },

  // ── LOCATION ──
  { slug: "best-places-to-metal-detect-in-texas", title: "Best Places to Metal Detect in Texas", excerpt: "Gulf Coast beaches, Spanish mission areas, river beds, ghost towns, and ranches. Texas detecting rules explained.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/nearby.jpg" },
  { slug: "best-places-to-metal-detect-in-florida", title: "Best Places to Metal Detect in Florida", excerpt: "Treasure Coast beaches, old Spanish shipwreck areas, freshwater holes, and state forest rules.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/nearby.jpg" },
  { slug: "best-places-to-metal-detect-in-ohio", title: "Best Places to Metal Detect in Ohio", excerpt: "Civil War sites, canal towpaths, Lake Erie beaches, farmland, and old schoolhouse locations.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/nearby.jpg" },
  { slug: "best-places-to-metal-detect-in-virginia", title: "Best Places to Metal Detect in Virginia", excerpt: "Colonial homesteads, river fords, and tavern sites. ARPA warnings for federal battlefield areas.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/nearby.jpg" },
  { slug: "best-places-to-metal-detect-in-california", title: "Best Places to Metal Detect in California", excerpt: "Gold Rush sites, SoCal and NorCal beaches, mining towns, desert ghost towns, and BLM land rules.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/nearby.jpg" },
  { slug: "metal-detecting-laws-in-the-uk", title: "Metal Detecting Laws in the UK", excerpt: "Treasure Act 1996, Portable Antiquities Scheme, Scheduled Monuments, and the Code of Practice explained.", tag: "Location", category: "location", readTime: "6 min", thumbnail: "/screenshots/permission_vault.jpg" },
  { slug: "metal-detecting-laws-in-the-us", title: "Metal Detecting Laws in the US", excerpt: "ARPA, National Parks, BLM land, state parks, beaches, and the state-by-state patchwork explained.", tag: "Location", category: "location", readTime: "6 min", thumbnail: "/screenshots/permission_vault.jpg" },
  { slug: "metal-detecting-laws-in-australia", title: "Metal Detecting Laws in Australia", excerpt: "State heritage acts, Aboriginal heritage protection, Crown land rules, and gold prospecting overlap.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/permission_vault.jpg" },
  { slug: "where-to-metal-detect-near-me", title: "Where to Metal Detect Near Me", excerpt: "How to find detecting spots anywhere: old maps, school yards, churches, fairgrounds, river access, and more.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/offline_maps.jpg" },

  // ── GEAR ──
  { slug: "best-metal-detectors-under-500", title: "Best Metal Detectors Under $500 in 2026", excerpt: "Nokta Simplex+, Minelab Vanquish, Garrett Ace 400, XP ORX, Fisher F44, and Nokta Legend compared.", tag: "Gear", category: "gear", readTime: "7 min", thumbnail: "/screenshots/history.jpg" },
];

const categoryKeys: { id: string; labelKey: TranslationKey }[] = [
  { id: "all", labelKey: "blog.cat_all" },
  { id: "tutorials", labelKey: "blog.cat_tutorials" },
  { id: "guides", labelKey: "blog.cat_guides" },
  { id: "tips", labelKey: "blog.cat_tips" },
  { id: "location", labelKey: "blog.cat_location" },
  { id: "beach", labelKey: "blog.cat_beach" },
  { id: "beginners", labelKey: "blog.cat_beginners" },
  { id: "gear", labelKey: "blog.cat_gear" },
];

export default function GuidesIndex() {
  const { t, locale } = useI18n();
  const [filter, setFilter] = useState("all");

  // Hide location/law posts for non-English visitors (they're US/UK/AU specific)
  const isEnglish = locale === "en";
  const visiblePosts = isEnglish ? posts : posts.filter((p) => p.category !== "location");
  const categories = isEnglish ? categoryKeys : categoryKeys.filter((c) => c.id !== "location");

  const featured = visiblePosts.find((p) => p.featured);
  const filtered = visiblePosts.filter((p) => filter === "all" || p.category === filter);
  const list = filter === "all" ? filtered.filter((p) => !p.featured) : filtered;
  const categoryLabel = (id: string) => t(`blog.cat_${id}` as TranslationKey);
  const readLabel = (readTime: string) => `${readTime} ${t("blog.read_suffix")}`;

  return (
    <main className="px-6 pt-10 pb-24 md:pt-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
          &larr; {t("blog.back")}
        </Link>

        <h1 className="mt-8 font-display text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.1rem]">
          {t("blog.title")}
        </h1>
        <p className="mt-4 text-lg text-muted">{t("blog.subtitle").replace("{count}", String(visiblePosts.length))}</p>

        {/* Featured: the first thing to read, set larger, no card */}
        {featured && filter === "all" && (
          <Link href={`/blog/${featured.slug}`} className="group mt-12 block border-t border-white/10 pt-8 max-w-3xl">
            <h2 className="font-display text-[1.75rem] leading-[1.15] sm:text-[2.1rem] [text-wrap:balance] underline decoration-transparent underline-offset-[6px] group-hover:decoration-white/40 transition-colors">
              {featured.title}
            </h2>
            <p className="mt-3 text-lg text-muted leading-relaxed">{featured.excerpt}</p>
            <p className="mt-4 text-sm text-muted">
              <span className="text-foreground">{t("blog.featured")}</span>
              <span className="mx-2" aria-hidden="true">·</span>
              {categoryLabel(featured.category)}
              <span className="mx-2" aria-hidden="true">·</span>
              {readLabel(featured.readTime)}
            </p>
          </Link>
        )}

        {/* Category filter */}
        <div className="mt-14 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const active = filter === cat.id;
            const count = visiblePosts.filter((p) => cat.id === "all" || p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-sm border transition-colors ${
                  active
                    ? "bg-white/[0.08] border-white/25 text-foreground"
                    : "border-white/10 text-muted hover:text-foreground hover:border-white/20"
                }`}
              >
                {t(cat.labelKey)}
                <span className="text-xs tabular-nums text-muted/70">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Every guide, title and excerpt in full */}
        <ul className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {list.map((post) => (
            <li key={post.slug} className="border-t border-white/10 pt-5">
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="font-display text-xl leading-snug [text-wrap:balance] underline decoration-transparent underline-offset-4 group-hover:decoration-white/40 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-[15px] text-muted leading-relaxed">{post.excerpt}</p>
                <p className="mt-3 text-sm text-muted/80">
                  {filter === "all" && (
                    <>
                      {categoryLabel(post.category)}
                      <span className="mx-2" aria-hidden="true">·</span>
                    </>
                  )}
                  {readLabel(post.readTime)}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-muted">
          {t("blog.cta_beginners")}{" "}
          <Link
            href="/blog/metal-detecting-for-beginners"
            className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent transition-colors"
          >
            {t("blog.cta_link")}
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
