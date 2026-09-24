"use client";

import { useState } from "react";
import GooglePlayButton from "./GooglePlayButton";
import { useI18n, type TranslationKey } from "@/lib/i18n";

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
      // Pro 2.0 split: free find logging is basic (type, name, notes, 1 photo).
      // The rich record fields (depth, value, weight, signal/VDI, soil, audio,
      // video, multi-photo) are Pro.
      { key: "findtypes", free: true, pro: true },
      { key: "pindrop", free: true, pro: true },
      { key: "photo", free: true, pro: true }, // 1 photo free; multi-photo is Pro
      { key: "depth", free: false, pro: true },
      { key: "audio", free: false, pro: true },
      { key: "findsintel", free: false, pro: true }, // NEW · Finds Intelligence dashboard
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
      // Tides are Pro in 2.0.
      { key: "tidetable", free: false, pro: true },
      // Waypoints — personal saved map pins (11 categories). 2.0 caps free at 5; Pro is unlimited.
      { key: "waypoints", free: "string", freeKey: "pricing.feat_waypoints_free", pro: "string", proKey: "pricing.feat_waypoints_pro" },
      // Map Overlays — import your own map/aerial and align it. Pro-only (SubscriptionService FREE_OVERLAY_LIMIT = 0); unlimited with Pro.
      { key: "mapoverlay", free: false, pro: true },
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
      // Basic lifetime totals stay free; advanced stats (trends, deltas, top sites, insights) are Pro.
      { key: "advancedstats", free: false, pro: true },
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
      // Export — Pro 2.0 re-tier: all formats (JSON/GPX/KML/CSV) are Pro; free tier has no export.
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

/* Collapsed view: the ~10 rows that matter most to a detectorist deciding
 * between Free and Pro. Leads with the Pro 2.0 split (sessions, finds) and the
 * two newest Pro features, then the rest of the paid tools. */
const highlightKeys = [
  "sessions",
  "finds",
  "findsintel",
  "mapoverlay",
  "historicalmap",
  "perimeter",
  "forecast",
  "tidetable",
  "export",
  "cloudbackup",
];

const allRows = groups.flatMap((g) => g.rows);
const rowByKey = new Map(allRows.map((r) => [r.key, r]));
const highlightRows = highlightKeys
  .map((k) => rowByKey.get(k))
  .filter((r): r is FeatureRow => Boolean(r));
const totalCount = allRows.length;

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-accent">&#10003;</span>;
  if (value === false) return <span className="text-white/25">&ndash;</span>;
  return <span className="text-xs text-muted">{value}</span>;
}

export default function PricingTable({ heading = true }: { heading?: boolean }) {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);

  function resolveValue(row: FeatureRow, side: "free" | "pro"): boolean | string {
    const val = row[side];
    const key = side === "free" ? row.freeKey : row.proKey;
    if (val === "string" && key) return t(key);
    return val as boolean;
  }

  function renderRow(f: FeatureRow) {
    return (
      <div
        key={f.key}
        className="grid grid-cols-[1fr_76px_76px] sm:grid-cols-[1fr_120px_120px] items-baseline px-4 sm:px-5 py-3 border-t border-white/[0.06]"
      >
        <div className="text-sm text-foreground/85">{t(`pricing.feat_${f.key}` as TranslationKey)}</div>
        <div className="text-center"><Cell value={resolveValue(f, "free")} /></div>
        <div className="text-center"><Cell value={resolveValue(f, "pro")} /></div>
      </div>
    );
  }

  return (
    <section id="pricing" className={heading ? "st-rule py-20 md:py-28" : "pb-20 md:pb-28"}>
      <div className="max-w-6xl mx-auto px-6">
        {heading && <h2 className="font-display st-h2 mb-10 md:mb-14">{t("pricing.heading")}</h2>}

        <div className="max-w-4xl">
          {/* Plans */}
          <div className="grid md:grid-cols-2 border border-white/10 rounded-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="font-semibold text-muted">{t("pricing.free_label")}</div>
              <div className="mt-2 text-4xl font-semibold tracking-tight">{t("pricing.free_price")}</div>
              <div className="mt-2 text-sm text-muted">{t("pricing.free_sublabel")}</div>
              <p className="mt-5 text-[15px] text-foreground/80 leading-relaxed">{t("pricing.free_description")}</p>
            </div>
            <div className="p-6 sm:p-8 border-t md:border-t-0 md:border-l border-white/10 bg-white/[0.02] shadow-[inset_0_2px_0_0_var(--accent)]">
              <div className="font-semibold text-accent">{t("pricing.pro_label")}</div>
              <div className="mt-2 text-4xl font-semibold tracking-tight">
                {t("pricing.pro_price")}
                <span className="text-lg font-normal text-muted">{t("pricing.pro_frequency")}</span>
              </div>
              <div className="mt-2 text-sm text-muted">{t("pricing.pro_sublabel")}</div>
              <p className="mt-5 text-[15px] text-foreground/80 leading-relaxed">{t("pricing.pro_description")}</p>
            </div>
          </div>

          {/* Founder's Lifetime: one quiet line, not a banner */}
          <p className="mt-6 text-[15px] leading-relaxed text-muted max-w-3xl">
            <span className="font-semibold text-amber-200">{t("pricing.founder_title")}.</span>{" "}
            {t("pricing.founder_description")}
          </p>

          {/* Feature comparison */}
          <div className="mt-12 rounded-xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-[1fr_76px_76px] sm:grid-cols-[1fr_120px_120px] px-4 sm:px-5 py-3 bg-white/[0.03] text-sm font-semibold">
              <div className="text-muted">{t("pricing.col_feature")}</div>
              <div className="text-center text-muted">{t("pricing.col_free")}</div>
              <div className="text-center text-accent">{t("pricing.col_pro")}</div>
            </div>

            {expanded
              ? groups.map((g) => (
                  <div key={g.labelKey}>
                    <div className="px-4 sm:px-5 pt-6 pb-2 border-t border-white/10 text-sm font-semibold text-foreground">
                      {t(g.labelKey)}
                    </div>
                    {g.rows.map((f) => renderRow(f))}
                  </div>
                ))
              : highlightRows.map((f) => renderRow(f))}

            <button
              onClick={() => setExpanded((e) => !e)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-foreground hover:bg-white/[0.03] transition-colors border-t border-white/10"
              aria-expanded={expanded}
            >
              {expanded ? t("pricing.show_less") : t("pricing.show_all").replace("{count}", String(totalCount))}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                aria-hidden
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          <div className="mt-10">
            <GooglePlayButton />
          </div>
        </div>
      </div>
    </section>
  );
}
