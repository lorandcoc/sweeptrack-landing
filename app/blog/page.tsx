"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const posts = [
  // ── GUIDES ──
  { slug: "how-to-use-old-maps-for-metal-detecting", title: "How to Use Old Maps to Find Better Detecting Spots", excerpt: "Historical topographic maps from USGS reveal old homesteads, vanished roads, and forgotten settlements.", tag: "Guide", category: "guides", readTime: "5 min", thumbnail: "/screenshots/offline_maps.png", featured: true },
  { slug: "metal-detecting-permission-letter-template", title: "Permission Letter Template + How to Approach Landowners", excerpt: "A free template that works, plus tips on what to say at the door and how to track your permissions.", tag: "Guide", category: "guides", readTime: "6 min", thumbnail: "/screenshots/permission_vault.png" },
  { slug: "how-to-track-metal-detecting-sessions-gps", title: "How to Track Your Detecting Sessions with GPS", excerpt: "Stop wondering where you already walked. GPS tracking shows your path and lets you overlay past sessions.", tag: "Guide", category: "guides", readTime: "4 min", thumbnail: "/screenshots/home.png" },
  { slug: "metal-detecting-for-beginners", title: "Metal Detecting for Beginners: What You Need to Know", excerpt: "From picking your first detector to digging your first target, without the overwhelm.", tag: "Beginners", category: "beginners", readTime: "7 min", thumbnail: "/screenshots/presets.png" },

  // ── TIPS ──
  { slug: "best-weather-conditions-for-metal-detecting", title: "Best Weather for Detecting (And When to Stay Home)", excerpt: "Soil moisture, temperature, wind, and pressure all affect your detector. Learn what conditions are ideal.", tag: "Tips", category: "tips", readTime: "4 min", thumbnail: "/screenshots/forecast.png" },
  { slug: "organize-metal-detector-presets-settings", title: "How to Organize Your Detector Settings and Presets", excerpt: "Different fields need different settings. Save, name, and share your configurations.", tag: "Tips", category: "tips", readTime: "3 min", thumbnail: "/screenshots/presets.png" },

  // ── BEACH ──
  { slug: "beach-metal-detecting-tide-timing", title: "Beach Detecting: Tide Timing & Where to Search", excerpt: "Low tide is when the gold comes out. Learn how to time your hunts and where to swing.", tag: "Beach", category: "beach", readTime: "5 min", thumbnail: "/screenshots/forecast.png" },

  // ── APP TUTORIALS ──
  { slug: "detecting-forecast-guide", title: "Detecting Forecast: Plan Every Hunt by the Numbers", excerpt: "0-100 Detecting Score for any location, any day up to a week ahead. Soil moisture, wind, temp, humidity, and smart tips.", tag: "Tutorial", category: "tutorials", readTime: "4 min", thumbnail: "/screenshots/forecast.png" },
  { slug: "setting-up-perimeter-guard", title: "Setting Up Perimeter Guard: Stay Within Your Zone", excerpt: "Draw a boundary on the map. Get vibration alerts when you approach and audio when you cross it.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/permission_vault.png" },
  { slug: "using-the-permission-vault", title: "Using the Permission Vault to Manage Permissions", excerpt: "Track landowner approvals, draw site boundaries, set expiry alerts, and generate PDF permission letters.", tag: "Tutorial", category: "tutorials", readTime: "5 min", thumbnail: "/screenshots/permission_vault.png" },
  { slug: "downloading-offline-maps", title: "Downloading Offline Maps for Areas Without Cell Service", excerpt: "4 tile sources. Pan, zoom, download. Hunt confidently with zero cell coverage.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/offline_maps.png" },
  { slug: "using-track-overlay", title: "Using Track Overlay to See Where You Already Walked", excerpt: "Load past sessions onto the live map as color-coded overlay paths. Five cycling colors make coverage gaps obvious.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/home.png" },
  { slug: "cloud-backup-google-drive", title: "Cloud Backup: Never Lose Your Detecting Data", excerpt: "One tap to back up sessions, presets, permissions, and settings to Google Drive.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/cloud_backup.png" },
  { slug: "night-vision-mode", title: "Night Vision Mode for Dawn and Dusk Detecting", excerpt: "Red-on-black display preserves your eyes. Toggle it for early morning and late evening hunts.", tag: "Tutorial", category: "tutorials", readTime: "2 min", thumbnail: "/screenshots/night_vision.png" },
  { slug: "logging-finds-photo-video-audio", title: "Logging Finds with Photos and Audio Notes", excerpt: "6 find types (Treasure, Gold, Coin, Relic, Jewelry, Trash), quick pin drop, depth 0-40 cm, value, weight, a photo and an audio recording per find.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/stats.png" },
  { slug: "using-coin-caliper", title: "Using the Coin Caliper to Identify Dirty or Worn Coins", excerpt: "Place the coin on screen, adjust the slider, and the app matches it by diameter.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/presets.png" },
  { slug: "finding-historic-sites-nearby", title: "Finding Historic Sites and Landmarks Near You", excerpt: "Historical POIs and Wikipedia articles around your location. Distance and directions included.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/nearby.png" },
  { slug: "comparing-sessions-overlay-split", title: "Comparing Sessions: Overlay and Split View", excerpt: "Stack past sessions or compare side by side to track your progress over time.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/stats.png" },
  { slug: "exporting-sessions-gpx-kml-csv", title: "Exporting Sessions as GPX, KML, or CSV", excerpt: "Full Google Earth support. Export individual or multiple sessions in the format you need.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/cloud_backup.png" },
  { slug: "understanding-session-statistics", title: "Understanding Your Session Statistics and Personal Bests", excerpt: "Distance, finds, duration, averages, personal bests, top sessions, and weather insights.", tag: "Tutorial", category: "tutorials", readTime: "4 min", thumbnail: "/screenshots/stats.png" },
  { slug: "share-card", title: "Share Card: Show Off Your Session on Social Media", excerpt: "Shareable PNG session summary with path preview, stats, find breakdown, and weather.", tag: "Tutorial", category: "tutorials", readTime: "3 min", thumbnail: "/screenshots/stats.png" },

  // ── LOCATION ──
  { slug: "best-places-to-metal-detect-in-texas", title: "Best Places to Metal Detect in Texas", excerpt: "Gulf Coast beaches, Spanish mission areas, river beds, ghost towns, and ranches. Texas detecting rules explained.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/nearby.png" },
  { slug: "best-places-to-metal-detect-in-florida", title: "Best Places to Metal Detect in Florida", excerpt: "Treasure Coast beaches, old Spanish shipwreck areas, freshwater holes, and state forest rules.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/nearby.png" },
  { slug: "best-places-to-metal-detect-in-ohio", title: "Best Places to Metal Detect in Ohio", excerpt: "Civil War sites, canal towpaths, Lake Erie beaches, farmland, and old schoolhouse locations.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/nearby.png" },
  { slug: "best-places-to-metal-detect-in-virginia", title: "Best Places to Metal Detect in Virginia", excerpt: "Colonial homesteads, river fords, and tavern sites. ARPA warnings for federal battlefield areas.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/nearby.png" },
  { slug: "best-places-to-metal-detect-in-california", title: "Best Places to Metal Detect in California", excerpt: "Gold Rush sites, SoCal and NorCal beaches, mining towns, desert ghost towns, and BLM land rules.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/nearby.png" },
  { slug: "metal-detecting-laws-in-the-uk", title: "Metal Detecting Laws in the UK", excerpt: "Treasure Act 1996, Portable Antiquities Scheme, Scheduled Monuments, and the Code of Practice explained.", tag: "Location", category: "location", readTime: "6 min", thumbnail: "/screenshots/permission_vault.png" },
  { slug: "metal-detecting-laws-in-the-us", title: "Metal Detecting Laws in the US", excerpt: "ARPA, National Parks, BLM land, state parks, beaches, and the state-by-state patchwork explained.", tag: "Location", category: "location", readTime: "6 min", thumbnail: "/screenshots/permission_vault.png" },
  { slug: "metal-detecting-laws-in-australia", title: "Metal Detecting Laws in Australia", excerpt: "State heritage acts, Aboriginal heritage protection, Crown land rules, and gold prospecting overlap.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/permission_vault.png" },
  { slug: "where-to-metal-detect-near-me", title: "Where to Metal Detect Near Me", excerpt: "How to find detecting spots anywhere: old maps, school yards, churches, fairgrounds, river access, and more.", tag: "Location", category: "location", readTime: "5 min", thumbnail: "/screenshots/offline_maps.png" },

  // ── GEAR ──
  { slug: "best-metal-detectors-under-500", title: "Best Metal Detectors Under $500 in 2026", excerpt: "Nokta Simplex+, Minelab Vanquish, Garrett Ace 400, XP ORX, Fisher F44, and Nokta Legend compared.", tag: "Gear", category: "gear", readTime: "7 min", thumbnail: "/screenshots/presets.png" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "tutorials", label: "App Tutorials" },
  { id: "guides", label: "Guides" },
  { id: "tips", label: "Tips" },
  { id: "location", label: "Locations & Laws" },
  { id: "beach", label: "Beach" },
  { id: "beginners", label: "Beginners" },
  { id: "gear", label: "Gear" },
];

export default function GuidesIndex() {
  const [filter, setFilter] = useState("all");
  const featured = posts.find((p) => p.featured);
  const filtered = posts.filter((p) => filter === "all" || p.category === filter);

  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to home</Link>

        <h1 className="text-3xl font-bold mb-2">Guides & Tips</h1>
        <p className="text-muted mb-8">{posts.length} articles covering every feature and technique.</p>

        {/* Featured */}
        {featured && filter === "all" && (
          <Link href={`/blog/${featured.slug}`} className="block rounded-2xl border border-accent/20 bg-accent/5 overflow-hidden mb-8 group hover:border-accent/40 transition-all">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-48 md:h-auto overflow-hidden">
                <Image src={featured.thumbnail} alt={featured.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500 screenshot-crop" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/15 px-2 py-0.5 rounded-full">Featured</span>
                  <span className="text-xs text-muted">{featured.readTime} read</span>
                </div>
                <h2 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-3">{featured.title}</h2>
                <p className="text-sm text-muted leading-relaxed">{featured.excerpt}</p>
              </div>
            </div>
          </Link>
        )}

        {/* Filters */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat.id ? "bg-accent text-[#0A0A1A]" : "text-muted bg-surface/50 border border-white/5 hover:text-white hover:bg-white/5"}`}>
              {cat.label}
              {filter === "all" && <span className="ml-1.5 text-xs opacity-60">({posts.filter(p => cat.id === "all" ? true : p.category === cat.id).length})</span>}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.filter((p) => !(filter === "all" && p.featured)).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-white/5 bg-surface/50 overflow-hidden hover:border-accent/20 hover:bg-surface/80 transition-all">
              <div className="relative h-32 overflow-hidden">
                <Image src={post.thumbnail} alt={post.title} fill className="object-cover object-top opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500 screenshot-crop" />
                <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider text-accent bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full">{post.tag}</span>
                <span className="absolute bottom-2 right-2 text-[10px] text-white/60 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full">{post.readTime}</span>
              </div>
              <div className="p-4">
                <h2 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors mb-1.5 leading-snug line-clamp-2">{post.title}</h2>
                <p className="text-xs text-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-10">More guides coming regularly. New to detecting? Start with <Link href="/blog/metal-detecting-for-beginners" className="text-accent hover:underline">the beginner&apos;s guide</Link>.</p>
      </div>
    </main>
  );
}
