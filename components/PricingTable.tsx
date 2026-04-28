"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import ComingSoonButton from "./ComingSoonButton";
import { useI18n, type TranslationKey } from "@/lib/i18n";

type FeatureRow = {
  key: string;
  free: boolean | "string";
  freeKey?: string;
  pro: boolean | "string";
  proKey?: string;
};

/**
 * Always-visible comparison rows.
 * Free/Pro splits for these come from:
 *  - SubscriptionService.kt constants: FREE_FIND_LIMIT=5, FREE_HISTORY_LIMIT=10, FREE_PRESET_LIMIT=1
 *  - PaywallScreen.kt lines 58-73 (the in-app Premium features list)
 *
 * Each row uses a translation key for the feature name.
 * Rows with string values use freeKey/proKey for translated values.
 * Boolean rows (true/false) render checkmarks/dashes directly.
 */
const features: FeatureRow[] = [
  { key: "gps", free: "string", freeKey: "pricing.feat_gps_free", pro: "string", proKey: "pricing.feat_gps_pro" },
  { key: "sessions", free: true, pro: true },
  { key: "finds", free: "string", freeKey: "pricing.feat_finds_free", pro: "string", proKey: "pricing.feat_finds_pro" },
  { key: "presets", free: "string", freeKey: "pricing.feat_presets_free", pro: "string", proKey: "pricing.feat_presets_pro" },
  { key: "measure", free: false, pro: true },
  { key: "track", free: false, pro: true },
  { key: "perimeter", free: false, pro: true },
  { key: "permission", free: false, pro: true },
  { key: "historicalmap", free: false, pro: true },
  { key: "offline", free: false, pro: true },
  { key: "forecast", free: false, pro: true },
  { key: "cloudbackup", free: false, pro: true },
];

const extraFeatures: FeatureRow[] = [
  // Map & field overlays
  { key: "heatmap", free: false, pro: true },
  { key: "nightvision", free: false, pro: true },
  { key: "compass", free: true, pro: true },
  { key: "ruler", free: true, pro: true },
  { key: "backtostart", free: true, pro: true },
  { key: "units", free: true, pro: true },
  { key: "hud", free: true, pro: true },

  // Finds
  { key: "findtypes", free: true, pro: true },
  { key: "pindrop", free: true, pro: true },
  { key: "depth", free: true, pro: true },
  { key: "photo", free: false, pro: true },
  { key: "audio", free: false, pro: true },
  { key: "gallery", free: false, pro: true },
  { key: "findsearch", free: true, pro: true },
  { key: "editfinds", free: true, pro: true },

  // Research & intel
  { key: "tidetable", free: false, pro: true },
  { key: "nearbysites", free: true, pro: true },
  { key: "coincaliper", free: false, pro: true },
  { key: "detectorlib", free: true, pro: true },
  { key: "locationsearch", free: true, pro: true },

  // Analysis & history
  { key: "sessioncompare", free: false, pro: true },
  { key: "sessionmerge", free: false, pro: true },
  { key: "batchactions", free: true, pro: true },
  { key: "elevation", free: true, pro: true },
  { key: "advancedstats", free: false, pro: true },
  { key: "summaryscore", free: true, pro: true },
  { key: "sharecard", free: true, pro: true },
  { key: "weathersnapshot", free: true, pro: true },
  { key: "autonamed", free: true, pro: true },

  // Export
  { key: "export", free: false, pro: true },

  // Permissions
  { key: "permitreminder", free: false, pro: true },
  { key: "permissionletter", free: false, pro: true },

  // Polish
  { key: "themes", free: "string", freeKey: "pricing.feat_themes_free", pro: "string", proKey: "pricing.feat_themes_pro" },
  { key: "languages", free: true, pro: true },
  { key: "onboarding", free: true, pro: true },
  { key: "aboutfeedback", free: true, pro: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-accent font-bold">&#10003;</span>;
  if (value === false) return <span className="text-white/20">&mdash;</span>;
  return <span className="text-xs text-muted">{value}</span>;
}

export default function PricingTable() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();
  const [expanded, setExpanded] = useState(false);

  const allFeatures = expanded ? [...features, ...extraFeatures] : features;
  const totalCount = features.length + extraFeatures.length;

  function resolveValue(row: FeatureRow, side: "free" | "pro"): boolean | string {
    const val = row[side];
    const key = side === "free" ? row.freeKey : row.proKey;
    if (val === "string" && key) return t(key as TranslationKey);
    return val as boolean;
  }

  return (
    <section id="pricing" className="py-16 md:py-20">
      <div ref={ref} className={`max-w-3xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-12">
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">{t("pricing.label")}</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {t("pricing.heading_prefix")}<span className="text-accent">{t("pricing.heading_accent")}</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            {t("pricing.description")}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {/* Free */}
          <div className="rounded-2xl border border-white/8 bg-surface/50 p-6">
            <div className="text-sm font-semibold text-muted uppercase tracking-wider mb-1">{t("pricing.free_label")}</div>
            <div className="text-3xl font-bold mb-1">{t("pricing.free_price")}</div>
            <div className="text-xs text-muted mb-4">{t("pricing.free_sublabel")}</div>
            <div className="text-sm text-muted">{t("pricing.free_description")}</div>
          </div>
          {/* Pro */}
          <div className="plan-pro rounded-2xl p-6 relative">
            <span className="absolute -top-3 right-4 text-[10px] font-bold uppercase tracking-wider bg-accent text-[#0A0A1A] px-3 py-1 rounded-full shadow-[0_4px_12px_rgba(0,255,106,0.4)]">{t("pricing.pro_badge")}</span>
            <div className="relative z-10">
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">{t("pricing.pro_label")}</div>
              <div className="text-3xl font-bold mb-1">{t("pricing.pro_price")}<span className="text-base font-normal text-muted">{t("pricing.pro_frequency")}</span></div>
              <div className="text-xs text-muted mb-4">{t("pricing.pro_sublabel")}</div>
              <div className="text-sm text-muted">{t("pricing.pro_description")}</div>
            </div>
          </div>
        </div>

        {/* Feature comparison */}
        <div className="rounded-2xl border border-white/5 overflow-hidden">
          <div className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px] bg-surface/80 px-4 py-3 border-b border-white/5">
            <div className="text-xs font-semibold text-muted uppercase tracking-wider">{t("pricing.col_feature")}</div>
            <div className="text-xs font-semibold text-muted uppercase tracking-wider text-center">{t("pricing.col_free")}</div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider text-center">{t("pricing.col_pro")}</div>
          </div>
          {allFeatures.map((f, i) => (
            <div
              key={f.key}
              className={`grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px] px-4 py-2.5 ${i % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"}`}
            >
              <div className="text-sm text-white/80">{t(`pricing.feat_${f.key}` as TranslationKey)}</div>
              <div className="text-center"><Cell value={resolveValue(f, "free")} /></div>
              <div className="text-center"><Cell value={resolveValue(f, "pro")} /></div>
            </div>
          ))}

          {/* Expand / collapse toggle */}
          <button
            onClick={() => setExpanded((e) => !e)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-accent hover:bg-accent/5 transition-colors border-t border-white/5 group"
            aria-expanded={expanded}
          >
            {expanded ? t("pricing.show_less") : t("pricing.show_all").replace("{count}", String(totalCount))}
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
