"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    slug: "how-to-use-old-maps-for-metal-detecting",
    title: "How to Use Old Maps to Find Better Detecting Spots",
    excerpt: "Historical topographic maps from USGS can reveal old homesteads, vanished roads, and forgotten settlements. Here's how to read them and detect on coordinates.",
    date: "April 2026",
    tag: "Guide",
    category: "guides",
    readTime: "5 min",
    thumbnail: "/screenshots/offline_maps.png",
    featured: true,
  },
  {
    slug: "metal-detecting-permission-letter-template",
    title: "Permission Letter Template + How to Approach Landowners",
    excerpt: "Getting permission is the #1 rule. Here's a free template that works, plus tips on what to say at the door and how to track your permissions.",
    date: "April 2026",
    tag: "Guide",
    category: "guides",
    readTime: "6 min",
    thumbnail: "/screenshots/permission_vault.png",
  },
  {
    slug: "best-weather-conditions-for-metal-detecting",
    title: "Best Weather for Detecting (And When to Stay Home)",
    excerpt: "Soil moisture, temperature, wind, and barometric pressure all affect your detector. Learn what conditions are ideal and how a detecting forecast score works.",
    date: "April 2026",
    tag: "Tips",
    category: "tips",
    readTime: "4 min",
    thumbnail: "/screenshots/forecast.png",
  },
  {
    slug: "beach-metal-detecting-tide-timing",
    title: "Beach Detecting: Tide Timing & Where to Search",
    excerpt: "Low tide is when the gold comes out. Learn how to time your beach hunts, read tide charts, and know exactly where to swing on the wet sand.",
    date: "April 2026",
    tag: "Beach",
    category: "beach",
    readTime: "5 min",
    thumbnail: "/screenshots/forecast.png",
  },
  {
    slug: "how-to-track-metal-detecting-sessions-gps",
    title: "How to Track Your Detecting Sessions with GPS",
    excerpt: "Stop wondering where you already walked. GPS tracking shows your exact path, lets you overlay past sessions, and helps you cover ground systematically.",
    date: "April 2026",
    tag: "Guide",
    category: "guides",
    readTime: "4 min",
    thumbnail: "/screenshots/home.png",
  },
  {
    slug: "metal-detecting-for-beginners",
    title: "Metal Detecting for Beginners: What You Need to Know",
    excerpt: "Brand new to detecting? Here's everything from picking your first machine to digging your first target, without the overwhelm.",
    date: "April 2026",
    tag: "Beginners",
    category: "beginners",
    readTime: "7 min",
    thumbnail: "/screenshots/presets.png",
  },
  {
    slug: "organize-metal-detector-presets-settings",
    title: "How to Organize Your Detector Settings and Presets",
    excerpt: "Different fields need different settings. Learn how to save, name, and share your detector configurations so you're always ready.",
    date: "April 2026",
    tag: "Tips",
    category: "tips",
    readTime: "3 min",
    thumbnail: "/screenshots/presets.png",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "guides", label: "Guides" },
  { id: "tips", label: "Tips" },
  { id: "beach", label: "Beach" },
  { id: "beginners", label: "Beginners" },
];

export default function GuidesIndex() {
  const [filter, setFilter] = useState("all");
  const featured = posts.find((p) => p.featured);
  const filtered = posts.filter((p) => filter === "all" || p.category === filter);

  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm"
        >
          &larr; Back to home
        </Link>

        <h1 className="text-3xl font-bold mb-2">Guides & Tips</h1>
        <p className="text-muted mb-8">Practical advice for getting more out of every hunt.</p>

        {/* Featured post */}
        {featured && filter === "all" && (
          <Link
            href={`/blog/${featured.slug}`}
            className="block rounded-2xl border border-accent/20 bg-accent/5 overflow-hidden mb-8 group hover:border-accent/40 transition-all"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-48 md:h-auto overflow-hidden">
                <Image
                  src={featured.thumbnail}
                  alt={featured.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 screenshot-crop"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/15 px-2 py-0.5 rounded-full">Featured</span>
                  <span className="text-xs text-muted">{featured.readTime} read</span>
                </div>
                <h2 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-3">
                  {featured.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed">{featured.excerpt}</p>
              </div>
            </div>
          </Link>
        )}

        {/* Category filters */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id
                  ? "bg-accent text-[#0A0A1A]"
                  : "text-muted bg-surface/50 border border-white/5 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Post grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {filtered
            .filter((p) => !(filter === "all" && p.featured))
            .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-white/5 bg-surface/50 overflow-hidden hover:border-accent/20 hover:bg-surface/80 transition-all"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover object-top opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 screenshot-crop"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    {post.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 text-[10px] text-white/60 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  {post.readTime}
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-xs text-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-10">More guides coming soon. Follow us for updates.</p>
      </div>
    </main>
  );
}
