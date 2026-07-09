"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/* ─── Categories ───
 * Every tile maps to exactly one category. Colors + icons give each category
 * its own identity across the chips and the tiles.
 */

type CategoryId = "map" | "finds" | "research" | "sessions" | "polish";

const CAT_ICON: Record<CategoryId, React.ReactNode> = {
  map: (<><path d="M9 3L3 6v15l6-3 6 3 6-3V3l-6 3-6-3z" /><path d="M9 3v15M15 6v15" /></>),
  finds: (<><rect x="3" y="7" width="18" height="13" rx="2" /><circle cx="12" cy="13.5" r="3.5" /><path d="M8 7l1.5-3h5L16 7" /></>),
  research: (<><circle cx="12" cy="12" r="9" /><polygon points="14.5 9.5 9.5 11.5 9.5 14.5 14.5 12.5" fill="currentColor" stroke="none" /></>),
  sessions: (<><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></>),
  polish: (<><path d="M12 3l1.4 4.2L18 9l-4.6 1.8L12 15l-1.4-4.2L6 9l4.6-1.8z" /><path d="M18.5 14l.6 1.9 1.9.6-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.6z" /></>),
};

const CATEGORIES: {
  id: CategoryId;
  labelKey: TranslationKey;
  color: string;
  keys: string[];
}[] = [
  {
    id: "map",
    labelKey: "featuresall.cat_map",
    color: "#00FF6A",
    keys: ["mapoverlay", "oldmap", "heatmap", "nightvision", "compass", "backtostart", "ruler"],
  },
  {
    id: "finds",
    labelKey: "featuresall.cat_finds",
    color: "#FFB000",
    keys: [
      "findlogger", "findsintel", "pindrop", "colorpins", "photogallery",
      "editfinds", "findsearch", "signaldiary",
    ],
  },
  {
    id: "research",
    labelKey: "featuresall.cat_research",
    color: "#00DDFF",
    keys: [
      "forecast", "verdict", "moon", "tidetable", "waypoints",
      "locationsearch", "permissionletter",
      "calendarreminder", "permitreminders",
    ],
  },
  {
    id: "sessions",
    labelKey: "featuresall.cat_sessions",
    color: "#4285F4",
    keys: [
      "careerstats", "sessioncompare", "sessionmerge", "batchactions",
      "elevation", "summaryscore", "sharecard", "weathersnapshot",
      "autonamed", "sessiontags", "rankladder",
    ],
  },
  {
    id: "polish",
    labelKey: "featuresall.cat_polish",
    color: "#FF6B4A",
    keys: [
      "languages", "colorthemes", "unitstoggle", "detectorlib",
      "presetslots", "export", "onboarding", "greetings", "brandcolors",
      "oemrationale", "atomicrestore", "about", "feedback",
    ],
  },
];

const TOTAL_COUNT = CATEGORIES.reduce((n, c) => n + c.keys.length, 0);

const COLOR_BY_KEY: Record<string, string> = {};
const ICON_BY_KEY: Record<string, React.ReactNode> = {};
for (const c of CATEGORIES) for (const k of c.keys) { COLOR_BY_KEY[k] = c.color; ICON_BY_KEY[k] = CAT_ICON[c.id]; }

/* Collapsed default — the strongest tiles, leading with the two new Pro features */
const TOP_PICKS = [
  "findsintel", "mapoverlay", "findlogger", "forecast", "heatmap",
  "careerstats", "nightvision", "sessioncompare", "detectorlib",
];

/* Tiles with a matching blog guide keep their link */
const GUIDES: Record<string, string> = {
  mapoverlay: "/blog/import-and-georeference-your-own-maps",
  oldmap: "/blog/how-to-use-old-maps-for-metal-detecting",
  findlogger: "/blog/logging-finds-photo-video-audio",
  pindrop: "/blog/logging-finds-photo-video-audio",
  backtostart: "/blog/how-to-track-metal-detecting-sessions-gps",
  sessioncompare: "/blog/comparing-sessions-overlay-split",
  presetslots: "/blog/organize-metal-detector-presets-settings",
  export: "/blog/exporting-sessions-gpx-kml-csv",
  nightvision: "/blog/night-vision-mode",
  forecast: "/blog/detecting-forecast-guide",
  tidetable: "/blog/beach-metal-detecting-tide-timing",
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

function CatIcon({ id, size = 22, color }: { id: CategoryId; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={color ? { color } : undefined}>
      {CAT_ICON[id]}
    </svg>
  );
}

function Tile({ featureKey, index, guideLabel }: { featureKey: string; index: number; guideLabel: string }) {
  const { t } = useI18n();
  const title = t(`featuresall.sec_${featureKey}_title` as TranslationKey);
  const desc = t(`featuresall.sec_${featureKey}_desc` as TranslationKey);
  const guide = GUIDES[featureKey];
  const color = COLOR_BY_KEY[featureKey];
  const icon = ICON_BY_KEY[featureKey];

  const card = (
    <div
      className="ic-card group relative h-full p-5 rounded-2xl border border-white/[0.06] bg-surface/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-surface/70"
      style={{ ["--ic" as string]: color }}
    >
      <span className="ic-glow" aria-hidden="true" />
      <span className="ic-topline" aria-hidden="true" />
      <div className="relative">
        <span
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl border mb-3.5"
          style={{ color, borderColor: `${color}40`, background: `${color}14` }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {icon}
          </svg>
        </span>
        <h3 className="font-semibold text-[15px] leading-snug text-white/90 mb-1.5">{title}</h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-3">{desc}</p>
        {guide && (
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-1.5 transition-all" style={{ color }}>
            {guideLabel} &rarr;
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="h-full transition-all duration-300 starting:opacity-0 starting:scale-95"
      style={{ transitionDelay: `${Math.min(index * 25, 250)}ms` }}
    >
      {guide ? <a href={guide} className="block h-full">{card}</a> : <div className="h-full cursor-default">{card}</div>}
    </div>
  );
}

function TileGrid({ keys, guideLabel }: { keys: string[]; guideLabel: string }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {keys.map((key, i) => (
        <Tile key={key} featureKey={key} index={i} guideLabel={guideLabel} />
      ))}
    </div>
  );
}

/* ─── Main export ─── */

export default function FeaturesAll() {
  const { t } = useI18n();
  const guideLabel = t("featuresall.guide");
  const [activeCat, setActiveCat] = useState<CategoryId | "all">("all");
  const [expanded, setExpanded] = useState(false);

  const chips: { id: CategoryId | "all"; label: string; color?: string; count?: number }[] = [
    { id: "all", label: t("blog.cat_all") },
    ...CATEGORIES.map((c) => ({ id: c.id, label: t(c.labelKey), color: c.color, count: c.keys.length })),
  ];

  const selected = activeCat === "all" ? null : CATEGORIES.find((c) => c.id === activeCat) ?? null;

  return (
    <section id="features" className="py-16 md:py-24 cv-auto">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <RevealSection>
          <div className="text-center mb-10">
            <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">{t("featuresall.label")}</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              {t("featuresall.heading_prefix")}
              <span className="text-accent">{t("featuresall.heading_accent")}</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">{t("featuresall.description")}</p>
          </div>
        </RevealSection>

        {/* Category filter chips */}
        <RevealSection delay={100}>
          <div className="flex flex-wrap justify-center gap-2.5 mb-10" role="group" aria-label={t("featuresall.label")}>
            {chips.map((chip) => {
              const active = activeCat === chip.id;
              const c = chip.color ?? "#00FF6A";
              return (
                <button
                  key={chip.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveCat(chip.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    active ? "" : "bg-white/[0.03] border-white/[0.08] text-muted hover:text-white hover:border-white/[0.2] hover:-translate-y-0.5"
                  }`}
                  style={active ? { color: c, borderColor: `${c}55`, background: `${c}14` } : undefined}
                >
                  {chip.color && (
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: active ? c : chip.color }} />
                  )}
                  {chip.label}
                  {typeof chip.count === "number" && (
                    <span className={`text-xs tabular-nums ${active ? "" : "text-white/35"}`} style={active ? { color: `${c}99` } : undefined}>{chip.count}</span>
                  )}
                </button>
              );
            })}
          </div>
        </RevealSection>

        {/* Tile grid — keyed by view so switching filters replays the entry fade/scale */}
        <RevealSection delay={150}>
          {selected ? (
            <div key={selected.id}>
              <TileGrid keys={selected.keys} guideLabel={guideLabel} />
            </div>
          ) : expanded ? (
            <div key="all-expanded" className="space-y-12">
              {CATEGORIES.map((cat) => (
                <div key={cat.id}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg border shrink-0" style={{ color: cat.color, borderColor: `${cat.color}40`, background: `${cat.color}14` }}>
                      <CatIcon id={cat.id} size={18} />
                    </span>
                    <p className="text-sm font-semibold uppercase tracking-widest text-white/70">{t(cat.labelKey)}</p>
                    <span className="text-white/30 tabular-nums text-sm">{cat.keys.length}</span>
                  </div>
                  <TileGrid keys={cat.keys} guideLabel={guideLabel} />
                </div>
              ))}
            </div>
          ) : (
            <div key="all-top">
              <TileGrid keys={TOP_PICKS} guideLabel={guideLabel} />
            </div>
          )}

          {/* Expander — only meaningful in the "All" view */}
          {!selected && (
            <div className="flex justify-center mt-10">
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/[0.1] text-sm text-accent font-semibold hover:border-accent/40 hover:bg-accent/[0.06] transition-all"
              >
                {expanded ? t("featuresall.show_less") : t("featuresall.show_all").replace("{count}", String(TOTAL_COUNT))}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          )}
        </RevealSection>
      </div>
    </section>
  );
}
