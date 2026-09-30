"use client";

import { useState, type ReactNode } from "react";
import { Check, Crown } from "lucide-react";
import { useSitePlayUrl } from "./GooglePlayButton";
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
 *  - SubscriptionService.kt constants: FREE_VAULT_ENTRY_LIMIT=1
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

/* ── Plan cards ───────────────────────────────────────────────
 * The three offers the app's paywall shows: a plain free card, the Pro
 * subscription in green with an annual / monthly switch, and the Founder's
 * Lifetime card with a turning gold border. The Free and Pro lists reuse the
 * comparison rows below (label, plus the tier's value where the row has one),
 * so a card can't drift from the table. Prices come from the dictionaries
 * (pricing.pro_price, pricing.price_monthly, pricing.founder_price) and must
 * match Google Play; the Founder price was confirmed by the owner on
 * 2026-09-30. The annual plan is labelled "Recommended", never "Most
 * popular", which the site cannot back up.
 */
type PlanItem = { label: TranslationKey; value?: TranslationKey };

const FREE_ITEMS: PlanItem[] = [
  { label: "pricing.feat_gps", value: "pricing.feat_gps_free" },
  { label: "pricing.feat_sessions", value: "pricing.feat_sessions_free" },
  { label: "pricing.feat_finds", value: "pricing.feat_finds_free" },
  { label: "featuretag.waypoints", value: "pricing.feat_waypoints_free" },
  { label: "pricing.feat_vault", value: "pricing.feat_vault_free" },
  { label: "pricing.feat_livegroup_join" },
];
const PRO_ITEMS: PlanItem[] = [
  { label: "pricing.feat_sessions", value: "pricing.feat_sessions_pro" },
  { label: "pricing.feat_finds", value: "pricing.feat_finds_pro" },
  { label: "pricing.feat_findsintel" },
  { label: "pricing.feat_mapoverlay" },
  { label: "pricing.feat_historicalmap" },
  { label: "pricing.feat_offline" },
  { label: "pricing.feat_perimeter" },
  { label: "pricing.feat_cloudbackup" },
  { label: "pricing.feat_livegroup_host" },
];
const FOUNDER_ITEMS: PlanItem[] = [
  { label: "pricing.plan_founder_1" },
  { label: "pricing.plan_founder_2" },
  { label: "pricing.plan_founder_3" },
];

function PlanList({ items, color }: { items: PlanItem[]; color: string }) {
  const { t } = useI18n();
  return (
    <ul className="mt-7 mb-8 space-y-3 text-[15px] text-foreground/90 leading-snug">
      {items.map((item) => (
        <li key={item.label} className="flex gap-3">
          <Check size={18} className="mt-0.5 shrink-0" style={{ color }} aria-hidden="true" />
          <span>
            {t(item.label)}
            {item.value && <span className="text-muted"> · {t(item.value)}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Pill({ children, tone }: { children: ReactNode; tone: "green" | "gold" | "goldSolid" }) {
  const cls = {
    green: "bg-accent text-[#050510]",
    gold: "border border-[var(--st-gold-edge)] bg-[var(--st-gold-faint)] text-[var(--st-gold)]",
    goldSolid: "bg-[var(--st-gold)] text-[#1a1405]",
  }[tone];
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${cls}`}>{children}</span>;
}

function PlanCards() {
  const { t } = useI18n();
  const playUrl = useSitePlayUrl();
  const [annual, setAnnual] = useState(true);
  const btn = "inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 font-semibold transition-colors";

  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
      {/* Free */}
      <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0a0a18] p-7 lg:mt-8">
        <div className="text-sm font-semibold uppercase tracking-wider text-muted">{t("pricing.free_label")}</div>
        <div className="mt-5 font-mono text-5xl font-semibold tracking-tight">{t("pricing.free_price")}</div>
        <div className="mt-1.5 text-sm text-muted">{t("pricing.free_sublabel")}</div>
        <PlanList items={FREE_ITEMS} color="var(--accent)" />
        <a href={playUrl} target="_blank" rel="noopener noreferrer" className={`${btn} mt-auto border border-white/20 text-foreground hover:border-white/40`}>
          {t("pricing.cta_free")}
        </a>
      </div>

      {/* Pro */}
      <div className="premium-card relative flex flex-col rounded-2xl bg-gradient-to-b from-[#0b2016] to-[#08120d] p-7">
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="green">{t("pricing.badge_recommended")}</Pill>
          {annual && <Pill tone="gold">{t("pricing.badge_save")}</Pill>}
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">{t("pricing.pro_label")}</div>
          <div className="inline-flex rounded-full border border-white/15 bg-black/30 p-1 text-xs font-semibold" role="group" aria-label={t("pricing.period_aria")}>
            {[true, false].map((isAnnual) => (
              <button
                key={String(isAnnual)}
                type="button"
                onClick={() => setAnnual(isAnnual)}
                aria-pressed={annual === isAnnual}
                className={`rounded-full px-3 py-1.5 transition-colors ${annual === isAnnual ? "bg-accent text-[#050510]" : "text-muted hover:text-foreground"}`}
              >
                {t(isAnnual ? "pricing.period_annual" : "pricing.period_monthly")}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-mono text-5xl font-semibold tracking-tight">{t(annual ? "pricing.pro_price" : "pricing.price_monthly")}</span>
          <span className="text-lg text-muted">{t(annual ? "pricing.pro_frequency" : "pricing.per_month")}</span>
        </div>
        <div className="mt-1.5 text-sm text-muted">{t(annual ? "pricing.pro_sublabel" : "pricing.note_monthly")}</div>
        <PlanList items={PRO_ITEMS} color="var(--accent)" />
        <a href={playUrl} target="_blank" rel="noopener noreferrer" className={`${btn} mt-auto bg-accent text-[#050510] hover:bg-accent-dim`}>
          {t("pricing.cta_pro")}
        </a>
      </div>

      {/* Founder's Lifetime */}
      <div className="founder-card flex flex-col rounded-2xl bg-gradient-to-b from-[#1c1608] to-[#0f0c06] p-7 lg:mt-8">
        <div>
          <Pill tone="goldSolid">{t("pricing.badge_limited")}</Pill>
        </div>
        <div className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--st-gold)]">
          <Crown size={16} aria-hidden="true" />
          {t("pricing.founder_title")}
        </div>
        <div className="mt-4 font-mono text-5xl font-semibold tracking-tight">{t("pricing.founder_price")}</div>
        <div className="mt-1.5 text-sm text-muted">{t("pricing.note_founder")}</div>
        <PlanList items={FOUNDER_ITEMS} color="var(--st-gold)" />
        <a href={playUrl} target="_blank" rel="noopener noreferrer" className={`${btn} mt-auto bg-[var(--st-gold)] text-[#1a1405] hover:brightness-110`}>
          {t("pricing.cta_founder")}
        </a>
      </div>
    </div>
  );
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

        <PlanCards />

        <div className="max-w-4xl mt-16 md:mt-20">
          <h3 className="font-display text-2xl md:text-3xl mb-6">{t("pricing.compare_heading")}</h3>
          {/* Feature comparison */}
          <div className="rounded-xl border border-white/10 overflow-hidden">
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
        </div>
      </div>
    </section>
  );
}
