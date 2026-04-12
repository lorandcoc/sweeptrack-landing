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
      <div className="featured-card rounded-2xl p-5 bg-surface relative overflow-hidden group h-full flex flex-col border border-white/[0.08] hover:border-white/[0.14] transition-colors">
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-base leading-tight">{title}</h3>
              <p className="text-muted text-[11px]">{subtitle}</p>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
              style={{ color: `${c}cc`, background: `${c}0a`, borderColor: `${c}25` }}>{tag}</span>
          </div>

          {/* Real screenshot */}
          <div className="rounded-xl overflow-hidden border border-white/[0.06] flex-1 min-h-[160px] relative bg-black">
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
      <div className="featured-card rounded-2xl p-5 bg-surface relative overflow-hidden group h-full flex flex-col border border-white/[0.08] hover:border-white/[0.14] transition-colors">
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-base leading-tight">{title}</h3>
              <p className="text-muted text-[11px]">{subtitle}</p>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
              style={{ color: `${c}cc`, background: `${c}0a`, borderColor: `${c}25` }}>{tag}</span>
          </div>

          <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>

          <div className="space-y-2 flex-1">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-2.5 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: c }} />
                <span className="text-xs text-white/65 leading-relaxed">{b}</span>
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
    title: "Find Logger with Photo & Audio",
    description: "Log every find with name, one of 6 types (Treasure, Gold, Coin, Relic, Jewelry, Trash), depth (0-40 cm slider), value, weight, notes, a photo, and an audio recording.",
    guide: "/blog/logging-finds-photo-video-audio",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>,
    title: "Quick Pin Drop",
    description: "One tap drops a find pin at your current GPS position. Fill in the details later from the Finds list.",
    guide: "/blog/logging-finds-photo-video-audio",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    title: "Back-to-Start Line",
    description: "Toggle a line from your current position to your session start. The compass overlay adds a return-bearing arrow so you can walk it home.",
    guide: "/blog/how-to-track-metal-detecting-sessions-gps",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>,
    title: "Session Comparison",
    description: "Pick past sessions and compare them — overlay mode with a blend slider, or split view side by side.",
    guide: "/blog/comparing-sessions-overlay-split",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
    title: "10 Machine Preset Slots",
    description: "Save up to 10 custom detector configurations and tap to activate. JSON import and export for sharing with friends.",
    guide: "/blog/organize-metal-detector-presets-settings",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
    title: "Export Sessions",
    description: "Export any session individually or in batch as GPX, KML, CSV, or SweepTrack JSON. Share or save to Downloads.",
    guide: "/blog/exporting-sessions-gpx-kml-csv",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>,
    title: "Night Vision Mode",
    description: "One-tap red monochromatic override on top of any theme. Preserves dark adaptation for dawn and dusk hunts.",
    guide: "/blog/night-vision-mode",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49M20.49 3.51a12 12 0 010 16.97M3.51 20.49a12 12 0 010-16.97" /></svg>,
    title: "On-Screen Compass",
    description: "Rotating compass dial with degrees, cardinal directions, and an optional green return-bearing arrow pointing back to your session start.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>,
    title: "On-Screen Ruler",
    description: "10 cm or 4 inch ruler along the screen edge with a 70-130% calibration slider so markings match your phone's real DPI.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 19M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6" /><line x1="2" y1="20" x2="2.01" y2="20" /></svg>,
    title: "Detecting Forecast",
    description: "0-100 Detecting Score for any location, any day up to a week ahead. Soil moisture, wind, temp, humidity, and smart tips in one screen.",
    guide: "/blog/detecting-forecast-guide",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 19h20L12 2z" /><line x1="12" y1="9" x2="12" y2="13" /><circle cx="12" cy="16" r="0.5" fill="currentColor" /></svg>,
    title: "NOAA Tide Table",
    description: "Tide predictions from the nearest NOAA station. Pick 3, 7, or 14 day ranges. High/low times and heights grouped by day.",
    guide: "/blog/beach-metal-detecting-tide-timing",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
    title: "Coin Caliper",
    description: "On-screen measuring ring with DPI calibration. Matches against a built-in database of 131 coins across 9 regions — US, UK, Europe, Romania, Kreuzer, Asia, MEA, LATAM, Oceania.",
    guide: "/blog/using-coin-caliper",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    title: "Nearby Sites",
    description: "Historic POIs from OpenStreetMap and Wikipedia landmarks around your position. Split map + list view with distance and direct links to open them.",
    guide: "/blog/finding-historic-sites-nearby",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><rect x="7" y="7" width="3" height="9" rx="1" fill="currentColor" opacity="0.3" /><rect x="14" y="5" width="3" height="11" rx="1" fill="currentColor" opacity="0.5" /></svg>,
    title: "Coverage Heatmap",
    description: "Rainbow density overlay of your current track. See which patches you've already covered and where the gaps are.",
    guide: "/blog/how-to-track-metal-detecting-sessions-gps",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.2" /></svg>,
    title: "Career Stats",
    description: "Filter by 1mo / 3mo / 6mo / 1yr / all-time. Sessions, finds, distance, duration, averages, personal bests, and a Top Sessions ranked list.",
    guide: "/blog/understanding-session-statistics",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22 6 12 13 2 6" /></svg>,
    title: "Permission Letter Generator",
    description: "Fill in your name and pick a permission entry — the app drafts a polite permission request letter to the landowner that you can copy or share.",
    guide: "/blog/metal-detecting-permission-letter-template",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>,
    title: "Share Card",
    description: "Generate a shareable PNG session card with path preview, stats, and find breakdown.",
    guide: "/blog/share-card",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6z" /></svg>,
    title: "Session Summary Score",
    description: "Every session ends with an animated 0-to-score counter, path preview, and the weather snapshot captured during the hunt.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="3" /><circle cx="17" cy="7" r="3" /><circle cx="7" cy="17" r="3" /><circle cx="17" cy="17" r="3" /></svg>,
    title: "Color-Coded Find Pins",
    description: "Find markers are color-coded by type on the map: Treasure (amber), Gold (yellow), Coin (blue), Relic (brown), Jewelry (magenta), Trash (grey).",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" /><path d="M12 8v8M8 12h8" /></svg>,
    title: "Session Merging",
    description: "Select multiple sessions in the History screen and merge them into a single unified record with combined stats.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
    title: "Find Search",
    description: "Text search across every find you've logged by name, notes, type, or session. Filter chips for all 6 find types.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></svg>,
    title: "Elevation Profile",
    description: "Per-session terrain chart with min, max, range, ascent, descent, and average elevation in meters or feet.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><circle cx="12" cy="15" r="1.5" fill="currentColor" /></svg>,
    title: "Permit Expiry Reminders",
    description: "Add any permission's expiry date to your phone's calendar with one tap from the Permission Vault.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>,
    title: "Photo Gallery",
    description: "3-column grid of every find photo you've taken. Tap for a full-screen viewer with find name and type.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /></svg>,
    title: "Weather Snapshot per Session",
    description: "Temperature, humidity, wind, and soil moisture are captured with every session and shown on the summary and share card.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    title: "Auto-Named Sessions",
    description: "Sessions are automatically named with a reverse-geocoded place label instead of raw GPS coordinates.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
    title: "Session Rename & Batch Actions",
    description: "Multi-select sessions in History to rename (40-char limit), export, merge, compare, or delete in batches.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>,
    title: "Edit Finds Later",
    description: "Every field on every find is editable — type, name, depth, value, weight, notes. Audio and photo playback in the detail view.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><path d="M11 8v6M8 11h6" /></svg>,
    title: "Location Search",
    description: "Search any city, address, or place name from the Forecast, Nearby Sites, and Tide screens to plan hunts anywhere.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9 9h.01M15 9h.01M8 14s1.5 2 4 2 4-2 4-2" /></svg>,
    title: "5-Slide Onboarding",
    description: "First-time walkthrough across Welcome, Intel, Field, Share, and Premium slides. Skip anytime.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
    title: "English + Romanian",
    description: "Full UI in English or Romanian. Switch languages on the fly from Settings.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="8" width="20" height="8" rx="4" /><circle cx="16" cy="12" r="3" fill="currentColor" /></svg>,
    title: "Metric / Imperial Toggle",
    description: "Switch distance, speed, altitude, and depth between metric (m/km/km/h/cm) and imperial (ft/mi/mph/in) from the home screen.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="8" r="1.5" fill="currentColor" /><circle cx="6" cy="8" r="1.5" fill="currentColor" /><circle cx="18" cy="16" r="1.5" fill="currentColor" /><circle cx="6" cy="16" r="1.5" fill="currentColor" /></svg>,
    title: "12 Color Themes",
    description: "Tactical, Amber, Cobalt, Coral, Fuchsia, Slate, Navy, Operator, Monochrome, Neon Plasma, Neon Toxic, and Neon Laser — grouped into Neutral, Feminine, Masculine, and Neon palettes.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>,
    title: "61 Detector Reference Library",
    description: "Built-in templates for 61 detector models across 12 brands — Minelab, XP, Nokta, Garrett, Fisher, Teknetics, Bounty Hunter, Quest, White's, Tesoro, Detech, Rutus.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>,
    title: "About Screen",
    description: "App version and built-with credits (Kotlin, Jetpack Compose, Google Maps, Open-Meteo, NOAA, Overpass/OSM).",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
    title: "In-App Feedback",
    description: "Send a bug report or feature request from Settings — opens a pre-filled email to support.",
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
              subtitle="Load past tracks on your live map"
              tag="Field"
              tagColor="cyan"
              description="Load any of your past sessions onto the live map to see exactly which patches you already covered. Each track gets its own color so gaps are instantly visible."
              bullets={[
                "5 cycling colors — blue, orange, purple, yellow, teal",
                "Add and remove tracks individually",
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

        {/* ── Row 2.5 — Measure Tool (new killer feature) ── */}
        <div className="grid md:grid-cols-5 gap-4 mb-4">
          <RevealSection delay={0} className="md:col-span-3 min-h-[320px] h-full">
            <FeaturedWithScreenshot
              title="Measure"
              subtitle="Distance · Area · Live labels"
              tag="New"
              screenshot="/screenshots/measure2.jpg"
              alt="Metal detecting measure tool in area mode showing a closed polygon with perimeter 606 m and area 2.14 ha on a satellite view of a field"
              description="Tap the map or drop a point at your GPS position to lay out a line. Tap point 1 again to close it into a polygon — perimeter and area are calculated instantly in hectares or acres using real spherical geometry. Drag any vertex to edit, tap a segment to insert a point, and undo or clear without leaving the map."
            />
          </RevealSection>
          <RevealSection delay={150} className="md:col-span-2 h-full">
            <FeaturedTextCard
              title="Save & Guard"
              subtitle="Library · Haptic/audio fence"
              tag="Reuse"
              tagColor="orange"
              description="Save any measurement to the Library with a reverse-geocoded location name, or turn the drawn polygon into a Perimeter Guard in one tap — the measured shape becomes a haptic and audio fence while you detect."
              bullets={[
                "Save with reverse-geocoded location",
                "Reopen and edit any measurement",
                "One tap → Perimeter Guard",
                "Haptic vibration near the edge",
                "Audio alarm when outside the zone",
              ]}
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
            <div className="h-full px-4 py-4 rounded-xl bg-surface/50 border border-white/[0.05] hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
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
