"use client";

import { useState } from "react";
import Image from "next/image";
import { useReveal } from "./useReveal";
import TiltCard from "./TiltCard";
import { useI18n, type TranslationKey } from "@/lib/i18n";

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
  guideLabel,
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
  guideLabel?: string;
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
              {guideLabel} &rarr;
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
  guideLabel,
}: {
  title: string;
  subtitle: string;
  tag: string;
  tagColor?: string;
  description: string;
  bullets: string[];
  guide?: string;
  guideLabel?: string;
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
              {guideLabel} &rarr;
            </a>
          )}
        </div>
      </div>
    </TiltCard>
  );
}

/* ─── SECONDARY FEATURE ICONS ─── */

const secondaryIcons = [
  /* findlogger */    <svg key="findlogger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2" /></svg>,
  /* pindrop */       <svg key="pindrop" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>,
  /* backtostart */   <svg key="backtostart" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  /* sessioncompare */<svg key="sessioncompare" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>,
  /* presetslots */   <svg key="presetslots" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
  /* export */        <svg key="export" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
  /* nightvision */   <svg key="nightvision" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>,
  /* compass */       <svg key="compass" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49M20.49 3.51a12 12 0 010 16.97M3.51 20.49a12 12 0 010-16.97" /></svg>,
  /* ruler */         <svg key="ruler" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>,
  /* forecast */      <svg key="forecast" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 19M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6" /><line x1="2" y1="20" x2="2.01" y2="20" /></svg>,
  /* tidetable */     <svg key="tidetable" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 19h20L12 2z" /><line x1="12" y1="9" x2="12" y2="13" /><circle cx="12" cy="16" r="0.5" fill="currentColor" /></svg>,
  /* coincaliper */   <svg key="coincaliper" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  /* nearbysites */   <svg key="nearbysites" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  /* heatmap */       <svg key="heatmap" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><rect x="7" y="7" width="3" height="9" rx="1" fill="currentColor" opacity="0.3" /><rect x="14" y="5" width="3" height="11" rx="1" fill="currentColor" opacity="0.5" /></svg>,
  /* careerstats */   <svg key="careerstats" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.2" /></svg>,
  /* permissionletter */ <svg key="permissionletter" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22 6 12 13 2 6" /></svg>,
  /* sharecard */     <svg key="sharecard" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>,
  /* summaryscore */  <svg key="summaryscore" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6z" /></svg>,
  /* colorpins */     <svg key="colorpins" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="3" /><circle cx="17" cy="7" r="3" /><circle cx="7" cy="17" r="3" /><circle cx="17" cy="17" r="3" /></svg>,
  /* sessionmerge */  <svg key="sessionmerge" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" /><path d="M12 8v8M8 12h8" /></svg>,
  /* findsearch */    <svg key="findsearch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  /* elevation */     <svg key="elevation" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></svg>,
  /* permitreminders */ <svg key="permitreminders" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><circle cx="12" cy="15" r="1.5" fill="currentColor" /></svg>,
  /* photogallery */  <svg key="photogallery" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>,
  /* weathersnapshot */ <svg key="weathersnapshot" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /></svg>,
  /* autonamed */     <svg key="autonamed" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  /* batchactions */  <svg key="batchactions" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
  /* editfinds */     <svg key="editfinds" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>,
  /* locationsearch */ <svg key="locationsearch" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><path d="M11 8v6M8 11h6" /></svg>,
  /* onboarding */    <svg key="onboarding" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9 9h.01M15 9h.01M8 14s1.5 2 4 2 4-2 4-2" /></svg>,
  /* languages */     <svg key="languages" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
  /* unitstoggle */   <svg key="unitstoggle" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="8" width="20" height="8" rx="4" /><circle cx="16" cy="12" r="3" fill="currentColor" /></svg>,
  /* colorthemes */   <svg key="colorthemes" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="8" r="1.5" fill="currentColor" /><circle cx="6" cy="8" r="1.5" fill="currentColor" /><circle cx="18" cy="16" r="1.5" fill="currentColor" /><circle cx="6" cy="16" r="1.5" fill="currentColor" /></svg>,
  /* detectorlib */   <svg key="detectorlib" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>,
  /* about */         <svg key="about" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>,
  /* feedback */      <svg key="feedback" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
];

const secondaryKeys = [
  "findlogger", "pindrop", "backtostart", "sessioncompare", "presetslots",
  "export", "nightvision", "compass", "ruler", "forecast", "tidetable",
  "coincaliper", "nearbysites", "heatmap", "careerstats", "permissionletter",
  "sharecard", "summaryscore", "colorpins", "sessionmerge", "findsearch",
  "elevation", "permitreminders", "photogallery", "weathersnapshot", "autonamed",
  "batchactions", "editfinds", "locationsearch", "onboarding", "languages",
  "unitstoggle", "colorthemes", "detectorlib", "about", "feedback",
];

const secondaryGuides: Record<string, string> = {
  findlogger: "/blog/logging-finds-photo-video-audio",
  pindrop: "/blog/logging-finds-photo-video-audio",
  backtostart: "/blog/how-to-track-metal-detecting-sessions-gps",
  sessioncompare: "/blog/comparing-sessions-overlay-split",
  presetslots: "/blog/organize-metal-detector-presets-settings",
  export: "/blog/exporting-sessions-gpx-kml-csv",
  nightvision: "/blog/night-vision-mode",
  forecast: "/blog/detecting-forecast-guide",
  tidetable: "/blog/beach-metal-detecting-tide-timing",
  coincaliper: "/blog/using-coin-caliper",
  nearbysites: "/blog/finding-historic-sites-nearby",
  heatmap: "/blog/how-to-track-metal-detecting-sessions-gps",
  careerstats: "/blog/understanding-session-statistics",
  permissionletter: "/blog/metal-detecting-permission-letter-template",
  sharecard: "/blog/share-card",
};

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
  const { t } = useI18n();
  const learnMore = t("featuresall.learn_more");
  const guideLabel = t("featuresall.guide");

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <RevealSection>
          <div className="text-center mb-14">
            <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">{t("featuresall.label")}</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              {t("featuresall.heading_prefix")}
              <span className="text-accent">{t("featuresall.heading_accent")}</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {t("featuresall.description")}
            </p>
          </div>
        </RevealSection>

        {/* ── Row 1 — GPS (large) + Cloud Backup ── */}
        <div className="grid md:grid-cols-5 gap-4 mb-4">
          <RevealSection delay={0} className="md:col-span-3 min-h-[240px] sm:min-h-[320px] h-full">
            <FeaturedWithScreenshot
              title={t("featuresall.gps_title")}
              subtitle={t("featuresall.gps_subtitle")}
              tag={t("featuresall.gps_tag")}
              screenshot="/screenshots/home.png"
              alt="Metal detecting GPS tracking app with satellite map view and real-time HUD overlay"
              description={t("featuresall.gps_description")}
              guide="/blog/how-to-track-metal-detecting-sessions-gps"
              guideLabel={learnMore}
            />
          </RevealSection>
          <RevealSection delay={150} className="md:col-span-2 min-h-[240px] sm:min-h-[320px] h-full">
            <FeaturedWithScreenshot
              title={t("featuresall.cloud_title")}
              subtitle={t("featuresall.cloud_subtitle")}
              tag={t("featuresall.cloud_tag")}
              tagColor="blue"
              screenshot="/screenshots/cloud_backup.png"
              alt="Metal detecting cloud backup to Google Drive — sessions, finds, presets, and permissions"
              description={t("featuresall.cloud_description")}
              guide="/blog/cloud-backup-google-drive"
              guideLabel={learnMore}
            />
          </RevealSection>
        </div>

        {/* ── Row 2 — Track Overlay + Perimeter Guard ── */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <RevealSection delay={0} className="h-full">
            <FeaturedTextCard
              title={t("featuresall.track_title")}
              subtitle={t("featuresall.track_subtitle")}
              tag={t("featuresall.track_tag")}
              tagColor="cyan"
              description={t("featuresall.track_description")}
              bullets={[
                t("featuresall.track_bullet1"),
                t("featuresall.track_bullet2"),
                t("featuresall.track_bullet3"),
                t("featuresall.track_bullet4"),
              ]}
              guide="/blog/using-track-overlay"
              guideLabel={learnMore}
            />
          </RevealSection>
          <RevealSection delay={150} className="h-full">
            <FeaturedTextCard
              title={t("featuresall.perimeter_title")}
              subtitle={t("featuresall.perimeter_subtitle")}
              tag={t("featuresall.perimeter_tag")}
              tagColor="orange"
              description={t("featuresall.perimeter_description")}
              bullets={[
                t("featuresall.perimeter_bullet1"),
                t("featuresall.perimeter_bullet2"),
                t("featuresall.perimeter_bullet3"),
                t("featuresall.perimeter_bullet4"),
              ]}
              guide="/blog/setting-up-perimeter-guard"
              guideLabel={learnMore}
            />
          </RevealSection>
        </div>

        {/* ── Row 2.5 — Measure Tool (new killer feature) ── */}
        <div className="grid md:grid-cols-5 gap-4 mb-4">
          <RevealSection delay={0} className="md:col-span-3 min-h-[240px] sm:min-h-[320px] h-full">
            <FeaturedWithScreenshot
              title={t("featuresall.measure_title")}
              subtitle={t("featuresall.measure_subtitle")}
              tag={t("featuresall.measure_tag")}
              screenshot="/screenshots/measure2.jpg"
              alt="Metal detecting measure tool in area mode showing a closed polygon with perimeter 606 m and area 2.14 ha on a satellite view of a field"
              description={t("featuresall.measure_description")}
            />
          </RevealSection>
          <RevealSection delay={150} className="md:col-span-2 h-full">
            <FeaturedTextCard
              title={t("featuresall.saveguard_title")}
              subtitle={t("featuresall.saveguard_subtitle")}
              tag={t("featuresall.saveguard_tag")}
              tagColor="orange"
              description={t("featuresall.saveguard_description")}
              bullets={[
                t("featuresall.saveguard_bullet1"),
                t("featuresall.saveguard_bullet2"),
                t("featuresall.saveguard_bullet3"),
                t("featuresall.saveguard_bullet4"),
                t("featuresall.saveguard_bullet5"),
              ]}
            />
          </RevealSection>
        </div>

        {/* ── Row 3 — Permission Manager + Old Map + Offline Maps ── */}
        <div className="grid md:grid-cols-3 gap-4 mb-14">
          <RevealSection delay={0} className="min-h-[240px] sm:min-h-[320px] h-full">
            <FeaturedWithScreenshot
              title={t("featuresall.permission_title")}
              subtitle={t("featuresall.permission_subtitle")}
              tag={t("featuresall.permission_tag")}
              screenshot="/screenshots/permission_vault.png"
              alt="Metal detecting permission vault tracking landowner approvals, expiry dates, and site boundaries"
              description={t("featuresall.permission_description")}
              guide="/blog/using-the-permission-vault"
              guideLabel={learnMore}
            />
          </RevealSection>
          <RevealSection delay={150} className="h-full">
            <FeaturedTextCard
              title={t("featuresall.oldmap_title")}
              subtitle={t("featuresall.oldmap_subtitle")}
              tag={t("featuresall.oldmap_tag")}
              tagColor="amber"
              description={t("featuresall.oldmap_description")}
              bullets={[
                t("featuresall.oldmap_bullet1"),
                t("featuresall.oldmap_bullet2"),
                t("featuresall.oldmap_bullet3"),
                t("featuresall.oldmap_bullet4"),
              ]}
              guide="/blog/how-to-use-old-maps-for-metal-detecting"
              guideLabel={learnMore}
            />
          </RevealSection>
          <RevealSection delay={300} className="min-h-[240px] sm:min-h-[320px] h-full">
            <FeaturedWithScreenshot
              title={t("featuresall.offline_title")}
              subtitle={t("featuresall.offline_subtitle")}
              tag={t("featuresall.offline_tag")}
              tagColor="cyan"
              screenshot="/screenshots/offline_maps.png"
              alt="Download offline maps for metal detecting — Street, Satellite, Terrain, and Historical Topographic tiles"
              description={t("featuresall.offline_description")}
              guide="/blog/downloading-offline-maps"
              guideLabel={learnMore}
            />
          </RevealSection>
        </div>

        {/* ── Secondary features: compact grid with expand ── */}
        <div className="text-center mb-8">
          <p className="text-muted text-sm uppercase tracking-widest font-semibold">{t("featuresall.plus_label")}</p>
          <h3 className="text-xl font-bold mt-2">{t("featuresall.plus_heading")}</h3>
        </div>

        <SecondaryFeaturesGrid
          keys={secondaryKeys}
          icons={secondaryIcons}
          guides={secondaryGuides}
          guideLabel={guideLabel}
        />
      </div>
    </section>
  );
}

function SecondaryFeaturesGrid({
  keys,
  icons,
  guides,
  guideLabel,
}: {
  keys: string[];
  icons: React.ReactNode[];
  guides: Record<string, string>;
  guideLabel: string;
}) {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? keys : keys.slice(0, 8);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {visible.map((key, idx) => {
          const title = t(`featuresall.sec_${key}_title` as TranslationKey);
          const desc = t(`featuresall.sec_${key}_desc` as TranslationKey);
          const guide = guides[key];
          const icon = icons[idx];

          const inner = (
            <div className="h-full px-4 py-4 rounded-xl bg-surface/50 border border-white/[0.05] hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-accent/8 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover:bg-accent/15 transition-colors">
                  {icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-white/90 group-hover:text-white transition-colors">{title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{desc}</p>
                  {guide && (
                    <span className="text-accent text-[11px] font-medium mt-1.5 inline-flex items-center gap-1 group-hover:underline">{guideLabel} &rarr;</span>
                  )}
                </div>
              </div>
            </div>
          );
          return guide ? (
            <a key={key} href={guide} className="h-full">{inner}</a>
          ) : (
            <div key={key} className="h-full cursor-default">{inner}</div>
          );
        })}
      </div>
      {keys.length > 8 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-accent font-medium hover:text-accent-dim transition-colors flex items-center gap-1.5"
          >
            {expanded ? t("featuresall.show_less") : t("featuresall.show_all").replace("{count}", String(keys.length))}
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
