"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import ComingSoonButton from "./ComingSoonButton";

type FeatureRow = {
  name: string;
  free: boolean | string;
  pro: boolean | string;
};

/**
 * Always-visible comparison rows.
 * Free/Pro splits for these come from:
 *  - SubscriptionService.kt constants: FREE_FIND_LIMIT=5, FREE_HISTORY_LIMIT=10, FREE_PRESET_LIMIT=1
 *  - PaywallScreen.kt lines 58-73 (the in-app Premium features list)
 */
const features: FeatureRow[] = [
  { name: "GPS Tracking", free: "3 map types", pro: "4 (+ USGS Historical)" },
  { name: "Sessions", free: "10", pro: "Unlimited" },
  { name: "Find Logging", free: "5 finds", pro: "Unlimited" },
  { name: "Detector Presets", free: "1 slot", pro: "10 slots + JSON import/export" },
  { name: "Track Overlay", free: false, pro: true },
  { name: "Perimeter Guard", free: false, pro: true },
  { name: "Permission Vault + PDF Letter", free: false, pro: true },
  { name: "Historical Map Overlay", free: false, pro: true },
  { name: "Offline Maps (4 sources)", free: false, pro: true },
  { name: "Detecting Forecast", free: false, pro: true },
  { name: "Cloud Backup (Google Drive)", free: false, pro: true },
];

/**
 * Shown when "See all features" is expanded.
 * Pro-only claims below are sourced directly from PaywallScreen.kt:
 *   Historical Map Overlay, Perimeter Guard, Offline Map Packs,
 *   Multi Detector Presets, Cloud Backup, Night Vision Mode,
 *   Advanced Statistics, Artifact Caliper (Coin Caliper),
 *   Unlimited Finds, All 12 Themes, GPX & KML Export,
 *   Full Session History, Audio Recording, Photo Gallery
 * Everything else below is confirmed present in the Kotlin source
 * and is available in both Free and Pro.
 */
const extraFeatures: FeatureRow[] = [
  // Map & field overlays
  { name: "Coverage Heatmap Overlay", free: false, pro: true },
  { name: "Night Vision Mode", free: false, pro: true },
  { name: "Grid Search Mode (2/5/10 m cells)", free: true, pro: true },
  { name: "On-Screen Compass + Return Bearing", free: true, pro: true },
  { name: "On-Screen Ruler (10 cm / 4 in)", free: true, pro: true },
  { name: "Back-to-Start Line", free: true, pro: true },
  { name: "Camera Follow Toggle", free: true, pro: true },
  { name: "Metric / Imperial Toggle", free: true, pro: true },
  { name: "Tactical HUD (time, dist, speed, alt, finds)", free: true, pro: true },

  // Finds
  { name: "4 Find Types (Treasure / Gold / Trash / Void)", free: true, pro: true },
  { name: "Quick Pin Drop", free: true, pro: true },
  { name: "Depth Logging (0–40 cm)", free: true, pro: true },
  { name: "Photo on Finds", free: false, pro: true },
  { name: "Audio Recording on Finds", free: false, pro: true },
  { name: "Photo Gallery of All Finds", free: false, pro: true },
  { name: "Find Search (name / type / session)", free: true, pro: true },
  { name: "Edit Finds Anytime", free: true, pro: true },

  // Research & intel
  { name: "NOAA Tide Table (3 / 7 / 14 day)", free: false, pro: true },
  { name: "Nearby Sites (POI + Wikipedia)", free: true, pro: true },
  { name: "Coin Caliper (71 coins, 9 regions)", free: false, pro: true },
  { name: "57 Detector Reference Library", free: true, pro: true },
  { name: "Location Search Worldwide", free: true, pro: true },

  // Analysis & history
  { name: "Session Comparison (up to 5)", free: true, pro: true },
  { name: "Session Replay (0.5× / 1× / 2× / 4×)", free: true, pro: true },
  { name: "Session Merging", free: true, pro: true },
  { name: "Session Rename & Batch Actions", free: true, pro: true },
  { name: "Elevation Profile per Session", free: true, pro: true },
  { name: "Advanced Statistics", free: false, pro: true },
  { name: "Session Summary + Animated Score", free: true, pro: true },
  { name: "Share Card (800×500 PNG)", free: true, pro: true },
  { name: "Weather Snapshot per Session", free: true, pro: true },
  { name: "Auto-Named Sessions (reverse geocode)", free: true, pro: true },
  { name: "Calendar Heatmap on History", free: true, pro: true },

  // Export
  { name: "GPX / KML / CSV / JSON Export", free: false, pro: true },

  // Permissions
  { name: "Permit Expiry Calendar Reminder", free: false, pro: true },
  { name: "Permission Letter Generator", free: false, pro: true },

  // Profile & progression
  { name: "Profile (12 avatars)", free: true, pro: true },
  { name: "5-Rank XP System (Rookie → Legend)", free: true, pro: true },
  { name: "Achievements (Bronze / Silver / Gold)", free: true, pro: true },
  { name: "5 Personal Challenges", free: true, pro: true },
  { name: "Streaks, Leaderboard, This Day in History", free: true, pro: true },

  // Polish
  { name: "Color Themes", free: "2 themes", pro: "All 12 themes" },
  { name: "English + Romanian", free: true, pro: true },
  { name: "5-Slide Onboarding", free: true, pro: true },
  { name: "About + Feedback Screens", free: true, pro: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-accent font-bold">&#10003;</span>;
  if (value === false) return <span className="text-white/20">&mdash;</span>;
  return <span className="text-xs text-muted">{value}</span>;
}

export default function PricingTable() {
  const { ref, visible } = useReveal();
  const [expanded, setExpanded] = useState(false);

  const rows = expanded ? [...features, ...extraFeatures] : features;
  const totalCount = features.length + extraFeatures.length;

  return (
    <section id="pricing" className="py-16 md:py-20">
      <div ref={ref} className={`max-w-3xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Free to Start. <span className="text-accent">Pro When You&apos;re Ready.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Use the core features forever at no cost. Upgrade to Pro to unlock the full arsenal.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {/* Free */}
          <div className="rounded-2xl border border-white/8 bg-surface/50 p-6">
            <div className="text-sm font-semibold text-muted uppercase tracking-wider mb-1">Free</div>
            <div className="text-3xl font-bold mb-1">$0</div>
            <div className="text-xs text-muted mb-4">Forever. No credit card.</div>
            <div className="text-sm text-muted">Core GPS tracking, 10 sessions, 5 finds, 1 preset, basic features.</div>
          </div>
          {/* Pro */}
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 relative">
            <span className="absolute -top-3 right-4 text-[10px] font-bold uppercase tracking-wider bg-accent text-[#0A0A1A] px-3 py-1 rounded-full">Recommended</span>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">Pro</div>
            <div className="text-3xl font-bold mb-1">$19.99<span className="text-base font-normal text-muted">/year</span></div>
            <div className="text-xs text-muted mb-4">Save 44% vs monthly ($2.99/mo). 7-day free trial.</div>
            <div className="text-sm text-muted">Everything. Unlimited. No ads. No limits.</div>
          </div>
        </div>

        {/* Feature comparison */}
        <div className="rounded-2xl border border-white/5 overflow-hidden">
          <div className="grid grid-cols-[1fr_80px_80px] bg-surface/80 px-4 py-3 border-b border-white/5">
            <div className="text-xs font-semibold text-muted uppercase tracking-wider">Feature</div>
            <div className="text-xs font-semibold text-muted uppercase tracking-wider text-center">Free</div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider text-center">Pro</div>
          </div>
          {rows.map((f, i) => (
            <div
              key={f.name}
              className={`grid grid-cols-[1fr_80px_80px] px-4 py-2.5 ${i % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"}`}
            >
              <div className="text-sm text-white/80">{f.name}</div>
              <div className="text-center"><Cell value={f.free} /></div>
              <div className="text-center"><Cell value={f.pro} /></div>
            </div>
          ))}

          {/* Expand / collapse toggle */}
          <button
            onClick={() => setExpanded((e) => !e)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-accent hover:bg-accent/5 transition-colors border-t border-white/5 group"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : `See all ${totalCount} features`}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              aria-hidden
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <ComingSoonButton />
        </div>
      </div>
    </section>
  );
}
