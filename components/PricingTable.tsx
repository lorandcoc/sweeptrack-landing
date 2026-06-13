"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import ComingSoonButton from "./ComingSoonButton";
import { useI18n, type TranslationKey } from "@/lib/i18n";

function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href") || "";
  const id = href.replace(/^[/#]+/, "");
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

type FeatureRow = {
  key: string;
  free: boolean | "string";
  freeKey?: TranslationKey;
  pro: boolean | "string";
  proKey?: TranslationKey;
};

type FeatureGroup = {
  labelKey: TranslationKey;
  rows: FeatureRow[];
};

/**
 * Full comparison table, grouped for scanability.
 * Free/Pro splits come from:
 *  - SubscriptionService.kt constants: FREE_PRESET_LIMIT=1, FREE_VAULT_ENTRY_LIMIT=1
 *  - PaywallScreen.kt features list (the in-app Premium highlight list)
 *  - HomeScreenLayers.kt `gate(...)` wrappers for map overlays
 *
 * Rows with string values use freeKey/proKey for translated values.
 * Boolean rows (true/false) render checkmarks/dashes directly.
 */
const groups: FeatureGroup[] = [
  {
    labelKey: "pricing.group_map",
    rows: [
      { key: "gps", free: "string", freeKey: "pricing.feat_gps_free", pro: "string", proKey: "pricing.feat_gps_pro" },
      { key: "offline", free: false, pro: true },
      { key: "historicalmap", free: false, pro: true },
      { key: "track", free: false, pro: true },
      { key: "heatmap", free: false, pro: true },
    ],
  },
  {
    labelKey: "pricing.group_field",
    rows: [
      { key: "perimeter", free: false, pro: true },
      { key: "compass", free: true, pro: true },
      { key: "ruler", free: true, pro: true },
      // Back-to-Start (Road Back) was free; now gated alongside Heatmap / Guard / Tracks.
      { key: "backtostart", free: false, pro: true },
      { key: "hud", free: true, pro: true },
      { key: "units", free: true, pro: true },
      // Measure: live readout / drop / undo / clear are free; Save-to-Library,
      // Share, and Convert-to-Guard route to the paywall (HomeScreenLayers).
      { key: "measure", free: "string", freeKey: "pricing.feat_measure_free", pro: "string", proKey: "pricing.feat_measure_pro" },
    ],
  },
  {
    labelKey: "pricing.group_finds",
    rows: [
      // Finds — all free (no isPremium check in MediaCapture or the gallery / search screens)
      { key: "findtypes", free: true, pro: true },
      { key: "pindrop", free: true, pro: true },
      { key: "depth", free: true, pro: true },
      { key: "photo", free: true, pro: true },
      { key: "audio", free: true, pro: true },
      { key: "gallery", free: true, pro: true },
      { key: "findsearch", free: true, pro: true },
      { key: "editfinds", free: true, pro: true },
    ],
  },
  {
    labelKey: "pricing.group_research",
    rows: [
      // Forecast: free shows today + tomorrow (2 days); premium shows full 7-day.
      { key: "forecast", free: "string", freeKey: "pricing.feat_forecast_free", pro: "string", proKey: "pricing.feat_forecast_pro" },
      { key: "tidetable", free: true, pro: true },
      // Waypoints — personal saved map pins (11 categories); free for all users, no premium gate
      // (MapFeaturesSheet.kt:310-313 "waypoints are a core map utility, no premium gate").
      { key: "waypoints", free: true, pro: true },
      { key: "coincaliper", free: true, pro: true },
      { key: "detectorlib", free: true, pro: true },
      { key: "locationsearch", free: true, pro: true },
    ],
  },
  {
    labelKey: "pricing.group_sessions",
    rows: [
      { key: "sessions", free: "string", freeKey: "pricing.feat_sessions_free", pro: "string", proKey: "pricing.feat_sessions_pro" },
      { key: "finds", free: "string", freeKey: "pricing.feat_finds_free", pro: "string", proKey: "pricing.feat_finds_pro" },
      // Comparison is premium (full-screen gated). Merge, batch actions,
      // elevation, stats, summary score are all free.
      { key: "sessioncompare", free: false, pro: true },
      { key: "sessionmerge", free: true, pro: true },
      { key: "batchactions", free: true, pro: true },
      { key: "elevation", free: true, pro: true },
      { key: "advancedstats", free: true, pro: true },
      { key: "summaryscore", free: true, pro: true },
      { key: "sharecard", free: true, pro: true },
      { key: "weathersnapshot", free: true, pro: true },
      { key: "autonamed", free: true, pro: true },
    ],
  },
  {
    labelKey: "pricing.group_safety",
    rows: [
      { key: "cloudbackup", free: false, pro: true },
      // Export — JSON is free (the only reimportable format); GPX/KML/CSV are premium.
      { key: "export", free: "string", freeKey: "pricing.feat_export_free", pro: "string", proKey: "pricing.feat_export_pro" },
      // Permissions — calendar reminder works on any vault entry (free), PDF letter is premium.
      { key: "permitreminder", free: true, pro: true },
      { key: "permissionletter", free: false, pro: true },
      { key: "vault", free: "string", freeKey: "pricing.feat_vault_free", pro: "string", proKey: "pricing.feat_vault_pro" },
      // Radar (live group positioning) — joining a group is free for everyone; creating/hosting
      // a group is premium (HomeGroupLayer.kt:732,739 — canCreate routes to paywall when not
      // entitled). Internal keys kept as livegroup_* (no behavior change).
      { key: "livegroup_join", free: true, pro: true },
      { key: "livegroup_host", free: false, pro: true },
    ],
  },
  {
    labelKey: "pricing.group_polish",
    rows: [
      { key: "themes", free: "string", freeKey: "pricing.feat_themes_free", pro: "string", proKey: "pricing.feat_themes_pro" },
      { key: "nightvision", free: false, pro: true },
      { key: "languages", free: true, pro: true },
      { key: "onboarding", free: true, pro: true },
      { key: "aboutfeedback", free: true, pro: true },
      { key: "presets", free: "string", freeKey: "pricing.feat_presets_free", pro: "string", proKey: "pricing.feat_presets_pro" },
    ],
  },
];

/* Collapsed view — the ~10 rows that carry the most emotional weight for a detectorist. */
const highlightKeys = [
  "historicalmap",
  "perimeter",
  "vault",
  "forecast",
  "offline",
  "livegroup_host",
  "coincaliper",
  "export",
  "themes",
  "cloudbackup",
];

const allRows = groups.flatMap((g) => g.rows);
const rowByKey = new Map(allRows.map((r) => [r.key, r]));
const highlightRows = highlightKeys
  .map((k) => rowByKey.get(k))
  .filter((r): r is FeatureRow => Boolean(r));
const totalCount = allRows.length;

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-accent font-bold">&#10003;</span>;
  if (value === false) return <span className="text-white/20">&mdash;</span>;
  return <span className="text-xs text-muted">{value}</span>;
}

export default function PricingTable() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();
  const [expanded, setExpanded] = useState(false);

  function resolveValue(row: FeatureRow, side: "free" | "pro"): boolean | string {
    const val = row[side];
    const key = side === "free" ? row.freeKey : row.proKey;
    if (val === "string" && key) return t(key);
    return val as boolean;
  }

  function renderRow(f: FeatureRow, i: number) {
    return (
      <div
        key={f.key}
        className={`grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px] px-4 py-2.5 ${i % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"}`}
      >
        <div className="text-sm text-white/80">{t(`pricing.feat_${f.key}` as TranslationKey)}</div>
        <div className="text-center"><Cell value={resolveValue(f, "free")} /></div>
        <div className="text-center"><Cell value={resolveValue(f, "pro")} /></div>
      </div>
    );
  }

  return (
    <section id="pricing" className="py-16 md:py-20 cv-auto">
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

        {/* Founder's Lifetime tease — visually continuous with the hero amber pill */}
        <div className="mb-6 pt-3">
          <div className="relative rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-500/[0.08] via-amber-500/[0.04] to-transparent p-5 sm:p-6">
            <span className="prx-founder-badge absolute -top-3 left-4 sm:left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-400/40 text-amber-300 text-[10px] font-mono font-semibold uppercase tracking-wider z-10">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
              </svg>
              {t("pricing.founder_badge")}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-lg bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg sm:text-xl text-amber-200 leading-tight mb-1">
                    {t("pricing.founder_title")}
                  </h3>
                  <p className="text-amber-100/70 text-xs sm:text-sm leading-snug mb-2">{t("pricing.founder_sub")}</p>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">{t("pricing.founder_description")}</p>
                </div>
              </div>
              <a
                href="#community"
                onClick={scrollToHash}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 text-[#0A0A1A] text-sm font-semibold hover:bg-amber-300 transition-colors shrink-0 self-start sm:self-auto"
              >
                {t("pricing.founder_cta")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Spots bar — static visual promise. The offer opens at launch, so all
                1,000 spots are still available: the bar renders full, not as a fake
                live counter. */}
            <div className="mt-5 pt-4 border-t border-amber-400/10">
              <div className="flex items-center justify-between gap-3 mb-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider">
                <span className="text-amber-300/90">{t("pricing.founder_badge")}</span>
                <span className="text-amber-200/80">1,000 / 1,000</span>
              </div>
              <div className="prx-spots-track" aria-hidden="true">
                <span className="prx-spots-fill" />
              </div>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          {/* Free */}
          <div className="rounded-2xl border border-white/8 bg-surface/50 p-6">
            <div className="text-sm font-semibold text-muted uppercase tracking-wider mb-1">{t("pricing.free_label")}</div>
            <div className="text-3xl font-bold mb-1">{t("pricing.free_price")}</div>
            <div className="text-xs text-muted mb-4">{t("pricing.free_sublabel")}</div>
            <div className="text-sm text-muted">{t("pricing.free_description")}</div>
          </div>
          {/* Pro */}
          <div className="plan-pro sweep-outline rounded-2xl p-6 relative">
            <span className="absolute -top-3 right-4 text-[10px] font-bold uppercase tracking-wider bg-accent text-[#0A0A1A] px-3 py-1 rounded-full shadow-[0_4px_12px_rgba(0,255,106,0.4)]">{t("pricing.pro_badge")}</span>
            <div className="relative z-10">
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">{t("pricing.pro_label")}</div>
              <div className="text-3xl font-bold mb-1">{t("pricing.pro_price")}<span className="text-base font-normal text-muted">{t("pricing.pro_frequency")}</span></div>
              <div className="text-xs text-muted mb-4">{t("pricing.pro_sublabel")}</div>
              <div className="text-sm text-muted">{t("pricing.pro_description")}</div>
            </div>
          </div>
        </div>

        {/* Reassurance row — one line of relief under both cards */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 text-sm text-white/75">
          {t("pricing.reassurance").split(" · ").map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-accent shrink-0">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {item}
            </span>
          ))}
        </div>

        {/* Feature comparison */}
        <div className="rounded-2xl border border-white/5 overflow-hidden">
          <div className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px] bg-surface/80 px-4 py-3 border-b border-white/5">
            <div className="text-xs font-semibold text-muted uppercase tracking-wider">{t("pricing.col_feature")}</div>
            <div className="text-xs font-semibold text-muted uppercase tracking-wider text-center">{t("pricing.col_free")}</div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider text-center">{t("pricing.col_pro")}</div>
          </div>

          {expanded
            ? groups.map((g) => (
                <div key={g.labelKey}>
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-surface/80 border-b border-white/5">
                    <span className="w-1 h-1 rounded-[1px] bg-accent/80 shrink-0" aria-hidden="true" />
                    <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
                      {t(g.labelKey)}
                    </span>
                  </div>
                  {g.rows.map((f, i) => renderRow(f, i))}
                </div>
              ))
            : highlightRows.map((f, i) => renderRow(f, i))}

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
