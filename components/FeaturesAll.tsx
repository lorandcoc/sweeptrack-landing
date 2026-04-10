"use client";

import { useState } from "react";
import Image from "next/image";
import { useReveal } from "./useReveal";
import TiltCard from "./TiltCard";

/* ─── FEATURED CARD WITH REAL SCREENSHOT ─── */

function FeaturedWithScreenshot({
  title,
  subtitle,
  tag,
  tagColor = "accent",
  screenshot,
  alt,
  description,
  guide,
  children,
}: {
  title: string;
  subtitle: string;
  tag: string;
  tagColor?: string;
  screenshot: string;
  alt: string;
  description: string;
  guide?: string;
  children?: React.ReactNode;
}) {
  const colors: Record<string, string> = {
    accent: "#00FF6A",
    blue: "#4285F4",
    cyan: "#00DDFF",
    orange: "#FF6B4A",
    amber: "#FFB000",
  };
  const c = colors[tagColor] || colors.accent;

  return (
    <TiltCard className="h-full">
      <div className="featured-card hover-radar rounded-2xl p-5 bg-surface relative overflow-hidden group h-full flex flex-col border border-white/5 transition-colors">
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-10" style={{ background: c }} />
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${c}18` }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l2 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">{title}</h3>
                <p className="text-muted text-[11px]">{subtitle}</p>
              </div>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ color: `${c}cc`, background: `${c}15` }}>{tag}</span>
          </div>

          {/* Real screenshot */}
          <div className="rounded-xl overflow-hidden border border-white/8 flex-1 min-h-[160px] relative bg-black">
            <Image
              src={screenshot}
              alt={alt}
              fill
              className="object-cover object-top screenshot-crop"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <p className="text-muted text-xs mt-3 leading-relaxed">{description}</p>
          {guide && (
            <a href={guide} className="text-accent text-xs font-medium mt-2 inline-flex items-center gap-1 hover:underline">
              Learn more &rarr;
            </a>
          )}
          {children}
        </div>
      </div>
    </TiltCard>
  );
}

/* ─── FEATURED CARD TEXT-ONLY (for features without screenshots) ─── */

function FeaturedTextCard({
  title,
  subtitle,
  tag,
  tagColor = "accent",
  description,
  bullets,
  guide,
}: {
  title: string;
  subtitle: string;
  tag: string;
  tagColor?: string;
  description: string;
  bullets: string[];
  guide?: string;
}) {
  const colors: Record<string, string> = {
    accent: "#00FF6A",
    blue: "#4285F4",
    cyan: "#00DDFF",
    orange: "#FF6B4A",
    amber: "#FFB000",
  };
  const c = colors[tagColor] || colors.accent;

  return (
    <TiltCard className="h-full">
      <div className="featured-card hover-radar rounded-2xl p-5 bg-surface relative overflow-hidden group h-full flex flex-col border border-white/5 transition-colors">
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-10" style={{ background: c }} />
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${c}18` }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l2 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">{title}</h3>
                <p className="text-muted text-[11px]">{subtitle}</p>
              </div>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ color: `${c}cc`, background: `${c}15` }}>{tag}</span>
          </div>

          <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>

          <div className="space-y-2 flex-1">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-2.5 px-3 py-2 rounded-lg bg-black/20 border border-white/[0.04]">
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: c }} />
                <span className="text-xs text-white/70 leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
          {guide && (
            <a href={guide} className="text-xs font-medium mt-3 inline-flex items-center gap-1 hover:underline" style={{ color: `${c}cc` }}>
              Learn more &rarr;
            </a>
          )}
        </div>
      </div>
    </TiltCard>
  );
}

/* ─── SECONDARY FEATURE CARDS ─── */

const secondaryFeatures = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2" /></svg>,
    title: "Log Finds with Media",
    description: "Log finds with photo, video, and audio notes. Full find details — name, value, weight, type.",
    guide: "/blog/logging-finds-photo-video-audio",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>,
    title: "Quick Pin Drop",
    description: "One-tap find logging. Drop a pin instantly, add details later when you have time.",
    guide: "/blog/logging-finds-photo-video-audio",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    title: "Road Back Indicator",
    description: "Dotted straight line to your session start with live distance readout. Never get lost.",
    guide: "/blog/how-to-track-metal-detecting-sessions-gps",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>,
    title: "Map Comparison",
    description: "Overlay up to 4 sessions or use split view side-by-side to track progress.",
    guide: "/blog/comparing-sessions-overlay-split",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
    title: "10 Detector Presets",
    description: "Keep 10 configurations ready with QR code sharing, import & export. One tap to switch.",
    guide: "/blog/organize-metal-detector-presets-settings",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
    title: "Export / Import Tracks",
    description: "Individual or batch export of paths. GPX, KML, CSV. Full Google Earth support.",
    guide: "/blog/exporting-sessions-gpx-kml-csv",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>,
    title: "Night Vision Mode",
    description: "Full red-light display for late dusk and early dawn detecting. Eyes stay adapted.",
    guide: "/blog/night-vision-mode",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49M20.49 3.51a12 12 0 010 16.97M3.51 20.49a12 12 0 010-16.97" /></svg>,
    title: "On-Screen Compass",
    description: "Live magnetic compass with a pointer back to your start point. Know your heading and follow the arrow home.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>,
    title: "On-Screen Ruler",
    description: "10cm / 4in ruler displayed on screen. Measure finds right in the field.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 19M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6" /><line x1="2" y1="20" x2="2.01" y2="20" /></svg>,
    title: "Detecting Forecast",
    description: "0-100 Detecting Score for any location, any day up to a week ahead. Soil moisture, wind, temp, humidity, and smart tips in one screen.",
    guide: "/blog/detecting-forecast-guide",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 19h20L12 2z" /><line x1="12" y1="9" x2="12" y2="13" /><circle cx="12" cy="16" r="0.5" fill="currentColor" /></svg>,
    title: "Tide Table",
    description: "Built-in tidal data for beach hunters. Know when to hit the low tide gold zones.",
    guide: "/blog/beach-metal-detecting-tide-timing",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
    title: "Coin Caliper",
    description: "Put a coin on screen, adjust slider to identify it by diameter. Works on dirty or corroded coins.",
    guide: "/blog/using-coin-caliper",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    title: "Nearby Sites",
    description: "Historical landmarks, old settlements, and notable sites around your current position.",
    guide: "/blog/finding-historic-sites-nearby",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><rect x="7" y="7" width="3" height="9" rx="1" fill="currentColor" opacity="0.3" /><rect x="14" y="5" width="3" height="11" rx="1" fill="currentColor" opacity="0.5" /></svg>,
    title: "Heatmap",
    description: "Rainbow gradient density overlay showing exactly where you've covered ground and where gaps remain.",
    guide: "/blog/how-to-track-metal-detecting-sessions-gps",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.2" /></svg>,
    title: "Session History & Stats",
    description: "Per-session and overall career stats. Distance, finds, duration, averages, and personal bests.",
    guide: "/blog/understanding-session-statistics",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2" fill="currentColor" opacity="0.5" /></svg>,
    title: "Find Heatmap",
    description: "Gold-amber heatmap showing where your finds cluster. Filter by type — treasure, gold, coin, relic, jewelry.",
    guide: "/blog/find-heatmap",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>,
    title: "Find-to-Preset Intelligence",
    description: "Every find is tagged with the preset that found it. See which settings find the most gold, coins, or relics.",
    guide: "/blog/find-to-preset-intelligence",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    title: "Signal Diary",
    description: "Log the VDI number and signal strength with every find. Learn what your detector sounds like on real targets.",
    guide: "/blog/signal-diary",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" /><circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" /></svg>,
    title: "Site Productivity Heatmap",
    description: "Map overlay of ALL finds across ALL sessions. See your most productive ground at a glance. Filter by find type.",
    guide: "/blog/site-productivity-heatmap",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><circle cx="9" cy="13" r="2" /><circle cx="15" cy="8" r="2" /><circle cx="12" cy="16" r="2" /></svg>,
    title: "Depth Chart",
    description: "Scatter plot of find depths per site over time. Spot trends — are your finds getting deeper or shallower?",
    guide: "/blog/depth-chart",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22 6 12 13 2 6" /></svg>,
    title: "Request & Thank-You Letters",
    description: "Generate a permission request letter or a thank-you note for landowners. Copy or share as PDF.",
    guide: "/blog/permission-request-thank-you-letters",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>,
    title: "Share Card",
    description: "Instagram-ready session summary card (1080×1920). Path map, stats, find breakdown, weather, and detector info.",
    guide: "/blog/share-card",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>,
    title: "Crash-Proof Autosave",
    description: "Your session is saved continuously in the background. Phone dies or app crashes — pick up exactly where you left off.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M4 8l4 4-4 4" /><path d="M20 8l-4 4 4 4" /></svg>,
    title: "Find Depth Tracking",
    description: "Log every recovery depth in cm or inches. See how deep your site is producing and when shallow targets are hunted out.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="3" /><circle cx="17" cy="7" r="3" /><circle cx="7" cy="17" r="3" /><circle cx="17" cy="17" r="3" /></svg>,
    title: "Color-Coded Find Markers",
    description: "Finds drop as pins color-coded by type — gold, treasure, coin, relic, jewelry, trash. Your productive zones at a glance.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="9" x2="3" y2="15" /><line x1="7" y1="10" x2="7" y2="14" /><line x1="11" y1="10" x2="11" y2="14" /><line x1="15" y1="10" x2="15" y2="14" /><line x1="19" y1="9" x2="19" y2="15" /><line x1="21" y1="9" x2="21" y2="15" /></svg>,
    title: "Live Scale Bar",
    description: "Dynamic scale bar updates as you zoom and pan. Metric or imperial. Instantly see the size of your search area.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" /><path d="M12 8v8M8 12h8" /></svg>,
    title: "Session Merging",
    description: "Combine multiple hunts on the same site into a single unified record with consolidated stats.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
    title: "Full-Text Find Search",
    description: "Search every find you've ever logged by name, notes, type, or session.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></svg>,
    title: "Elevation Profile",
    description: "See the terrain profile of every hunt — slopes, ridges, valleys — per session.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><circle cx="12" cy="15" r="1.5" fill="currentColor" /></svg>,
    title: "Calendar Sync for Permits",
    description: "Permit expiration dates auto-sync to your phone's calendar. Never get caught with expired permission.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>,
    title: "Photo Gallery",
    description: "Browse every find photo you've ever taken in a visual grid with filters and quick-view.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6z" /></svg>,
    title: "Top Sessions Ranking",
    description: "Your best hunts ranked by find count, distance, or duration. Tap to jump to any session.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" /><path d="M8 10h8M12 6v8" /></svg>,
    title: "Top Locations Ranking",
    description: "Which sites produce the most finds — your personal hot-spot leaderboard.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6-6 6 6M6 15l6 6 6-6" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>,
    title: "Detector Titles",
    description: "Earn automatic titles based on your hunting activity — up to Master Detectorist at 100+ sessions.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="3" height="3" /><rect x="18" y="14" width="3" height="3" /><rect x="14" y="18" width="3" height="3" /></svg>,
    title: "QR Code Sharing",
    description: "Share sessions, presets, or permits as QR codes. Scan to transfer — no cloud, no accounts needed.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /></svg>,
    title: "Weather Snapshot",
    description: "Weather at the start and end of every hunt is captured automatically and stored with the session.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    title: "Reverse Geocoded Names",
    description: "Sessions are auto-named with human-readable location labels instead of raw coordinates.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
    title: "Session Rename",
    description: "Override auto-generated session names with your own descriptive titles.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>,
    title: "Edit Finds Later",
    description: "Forgot a note? Wrong type? Every field on every find is editable forever.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><path d="M11 8v6M8 11h6" /></svg>,
    title: "Location Picker",
    description: "Plan hunts for any location on Earth in Planner or Forecast. Search any city, address, or coordinates.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9 9h.01M15 9h.01M8 14s1.5 2 4 2 4-2 4-2" /></svg>,
    title: "Interactive Onboarding",
    description: "A friendly 5-slide walkthrough of key features for first-time users.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
    title: "Romanian Translations",
    description: "Full Romanian localization — rare in detecting apps. Switch on the fly.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="8" width="20" height="8" rx="4" /><circle cx="16" cy="12" r="3" fill="currentColor" /></svg>,
    title: "Metric / Imperial Toggle",
    description: "Switch between cm/inches, km/miles, °C/°F anywhere. Everything updates instantly.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>,
    title: "Camera Follow Toggle",
    description: "Lock the map camera to your position, or let it roam while you review the map.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="8" r="1.5" fill="currentColor" /><circle cx="6" cy="8" r="1.5" fill="currentColor" /><circle cx="18" cy="16" r="1.5" fill="currentColor" /><circle cx="6" cy="16" r="1.5" fill="currentColor" /></svg>,
    title: "12 Color Themes",
    description: "Tactical, Amber, Cobalt, Coral, Fuchsia, Slate, Navy, Operator and more. Pick your vibe.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>,
    title: "61 Detector Reference Library",
    description: "Pre-loaded specs and settings for 61 detector models across 12 major brands — Minelab, XP, Nokta, Garrett, Fisher and more.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>,
    title: "About & Credits",
    description: "App version, credits, and licensing info in one place.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
    title: "In-App Feedback",
    description: "Send bug reports and feature requests directly from the app.",
  },
];

/* ─── Section helpers ─── */

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`} style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}>
      {children}
    </div>
  );
}

/* ─── Main export ─── */

export default function FeaturesAll() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <RevealSection>
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">What&apos;s Inside</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tools You&apos;ll Actually{" "}
              <span className="text-accent">Use in the Field</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Every feature exists because it was needed on a real hunt. Nothing here was added to pad a list.
            </p>
          </div>
        </RevealSection>

        {/* ── Row 1 — GPS (large) + Cloud Backup ── */}
        <div className="grid md:grid-cols-5 gap-4 mb-4">
          <RevealSection delay={0} className="md:col-span-3 min-h-[320px] h-full">
            <FeaturedWithScreenshot
              title="GPS Tracking"
              subtitle="4 map types · Real-time HUD"
              tag="Core"
              screenshot="/screenshots/home.png"
              alt="Metal detecting GPS tracking app with satellite map view and real-time HUD overlay"
              description="Real-time satellite map with heading, altitude, speed, and distance overlay. Switch between Satellite, Terrain, Topographic, and Street views."
              guide="/blog/how-to-track-metal-detecting-sessions-gps"
            />
          </RevealSection>
          <RevealSection delay={150} className="md:col-span-2 min-h-[320px] h-full">
            <FeaturedWithScreenshot
              title="Cloud Backup"
              subtitle="Google Drive · One-tap restore"
              tag="Safety"
              tagColor="blue"
              screenshot="/screenshots/cloud_backup.png"
              alt="Metal detecting cloud backup to Google Drive — sessions, finds, presets, and permissions"
              description="One-tap Google Drive backup for all sessions, presets, permits, and settings. Lost phone? Restore everything on any device."
              guide="/blog/cloud-backup-google-drive"
            />
          </RevealSection>
        </div>

        {/* ── Row 2 — Track Overlay + Perimeter Guard ── */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <RevealSection delay={0} className="h-full">
            <FeaturedTextCard
              title="Track Overlay"
              subtitle="Up to 7 past tracks simultaneously"
              tag="Field"
              tagColor="cyan"
              description="Overlay up to 7 past tracks on the same map to see exactly which patches you missed. Each track gets its own color so coverage gaps are instantly visible."
              bullets={[
                "7 color-coded tracks overlaid simultaneously",
                "Toggle individual tracks on/off",
                "See uncovered patches at a glance",
                "Works with all 4 map types",
              ]}
              guide="/blog/using-track-overlay"
            />
          </RevealSection>
          <RevealSection delay={150} className="h-full">
            <FeaturedTextCard
              title="Perimeter Guard"
              subtitle="Vibration + audio boundary alerts"
              tag="Safety"
              tagColor="orange"
              description="Draw any boundary polygon on the map. Get haptic vibration when approaching and an audio signal when you step outside. Stay within your permitted zone."
              bullets={[
                "Draw custom boundary polygons on map",
                "Haptic vibration near the edge",
                "Audio alarm when outside perimeter",
                "Links to Permission Manager sites",
              ]}
              guide="/blog/setting-up-perimeter-guard"
            />
          </RevealSection>
        </div>

        {/* ── Row 3 — Permission Manager + Old Map + Offline Maps ── */}
        <div className="grid md:grid-cols-3 gap-4 mb-14">
          <RevealSection delay={0} className="min-h-[320px] h-full">
            <FeaturedWithScreenshot
              title="Permission Manager"
              subtitle="Boundaries · Calendar · PDF letter"
              tag="Legal"
              screenshot="/screenshots/permission_vault.png"
              alt="Metal detecting permission vault tracking landowner approvals, expiry dates, and site boundaries"
              description="Track landowner permissions with approval status, expiry alerts to your calendar, site boundaries, and automatic PDF permission letters."
              guide="/blog/using-the-permission-vault"
            />
          </RevealSection>
          <RevealSection delay={150} className="h-full">
            <FeaturedTextCard
              title="U.S. Old Map Overlay"
              subtitle="USGS Historical Topographic Collection"
              tag="Research"
              tagColor="amber"
              description="Overlay genuine USGS historical topographic maps from the ArcGIS collection onto your modern map. Find old roads, buildings, and settlements that no longer exist."
              bullets={[
                "Real USGS historical topo tiles",
                "Adjustable overlay opacity",
                "Spot old structures & roads",
                "Available across the U.S.",
              ]}
              guide="/blog/how-to-use-old-maps-for-metal-detecting"
            />
          </RevealSection>
          <RevealSection delay={300} className="min-h-[320px] h-full">
            <FeaturedWithScreenshot
              title="Offline Maps"
              subtitle="4 tile sources · No cell needed"
              tag="Field"
              tagColor="cyan"
              screenshot="/screenshots/offline_maps.png"
              alt="Download offline maps for metal detecting — Street, Satellite, Terrain, and Historical Topographic tiles"
              description="Download map tiles for offline use. Street, Satellite, Terrain, and Historical Topo. Hunt confidently with zero cell coverage."
              guide="/blog/downloading-offline-maps"
            />
          </RevealSection>
        </div>

        {/* ── Secondary features: compact grid with expand ── */}
        <div className="text-center mb-8">
          <p className="text-muted text-sm uppercase tracking-widest font-semibold">Plus</p>
          <h3 className="text-xl font-bold mt-2">All the little things that make a big difference</h3>
        </div>

        <SecondaryFeaturesGrid features={secondaryFeatures} />
      </div>
    </section>
  );
}

function SecondaryFeaturesGrid({ features }: { features: typeof secondaryFeatures }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? features : features.slice(0, 8);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {visible.map((feature) => {
          const inner = (
            <div className="h-full px-4 py-4 rounded-xl bg-surface/50 border border-transparent hover-radar hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-accent/8 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover:bg-accent/15 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-white/90 group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{feature.description}</p>
                  {feature.guide && (
                    <span className="text-accent text-[11px] font-medium mt-1.5 inline-flex items-center gap-1 group-hover:underline">Guide &rarr;</span>
                  )}
                </div>
              </div>
            </div>
          );
          return feature.guide ? (
            <a key={feature.title} href={feature.guide} className="h-full">{inner}</a>
          ) : (
            <div key={feature.title} className="h-full cursor-default">{inner}</div>
          );
        })}
      </div>
      {features.length > 8 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-accent font-medium hover:text-accent-dim transition-colors flex items-center gap-1.5"
          >
            {expanded ? "Show less" : `Show all ${features.length} features`}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
