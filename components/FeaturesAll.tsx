"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/* ─── Categories ───
 * Every tile maps to exactly one category. Colors reuse the site palette
 * (accent / amber / cyan / blue / orange) already used for feature tags.
 */

type CategoryId = "map" | "finds" | "research" | "sessions" | "polish";

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
    keys: ["heatmap", "nightvision", "compass", "backtostart", "ruler"],
  },
  {
    id: "finds",
    labelKey: "featuresall.cat_finds",
    color: "#FFB000",
    keys: [
      "findlogger", "pindrop", "colorpins", "photogallery",
      "editfinds", "findsearch", "signaldiary",
    ],
  },
  {
    id: "research",
    labelKey: "featuresall.cat_research",
    color: "#00DDFF",
    keys: [
      "forecast", "verdict", "moon", "tidetable", "waypoints",
      "locationsearch", "coincaliper", "permissionletter",
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
for (const c of CATEGORIES) for (const k of c.keys) COLOR_BY_KEY[k] = c.color;

/* Collapsed default — the ten strongest tiles, two per category */
const TOP_PICKS = [
  "findlogger", "forecast", "heatmap", "coincaliper", "careerstats",
  "nightvision", "photogallery", "sessioncompare", "colorthemes", "detectorlib",
];

/* Tiles with a matching blog guide keep their link */
const GUIDES: Record<string, string> = {
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

/* ─── Compact tile ───
 * The outer wrapper owns the entry fade/scale (CSS transition via
 * @starting-style — fires on mount, zeroed out by the global
 * prefers-reduced-motion rule). The inner card owns hover transitions,
 * so the staggered entry delay never bleeds into hover.
 */

function Tile({
  featureKey,
  index,
  guideLabel,
}: {
  featureKey: string;
  index: number;
  guideLabel: string;
}) {
  const { t } = useI18n();
  const title = t(`featuresall.sec_${featureKey}_title` as TranslationKey);
  const desc = t(`featuresall.sec_${featureKey}_desc` as TranslationKey);
  const guide = GUIDES[featureKey];
  const color = COLOR_BY_KEY[featureKey];

  const card = (
    <div className="h-full px-4 py-3.5 rounded-xl bg-surface/50 border border-white/[0.05] hover:border-white/[0.14] hover:bg-surface/80 transition-colors duration-300 group">
      <div className="flex items-start gap-2.5">
        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0" style={{ background: color }} />
        <div className="min-w-0">
          <h3 className="font-semibold text-sm leading-snug text-white/90 group-hover:text-white transition-colors">{title}</h3>
          <p className="text-muted text-sm leading-snug mt-1 line-clamp-2">{desc}</p>
          {guide && (
            <span className="text-accent text-xs font-medium mt-1.5 inline-flex items-center gap-1 group-hover:underline">
              {guideLabel} &rarr;
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="h-full transition-all duration-300 starting:opacity-0 starting:scale-95"
      style={{ transitionDelay: `${Math.min(index * 20, 200)}ms` }}
    >
      {guide ? (
        <a href={guide} className="block h-full">{card}</a>
      ) : (
        <div className="h-full cursor-default">{card}</div>
      )}
    </div>
  );
}

function TileGrid({ keys, guideLabel }: { keys: string[]; guideLabel: string }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {t("featuresall.description")}
            </p>
          </div>
        </RevealSection>

        {/* Category filter chips */}
        <RevealSection delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label={t("featuresall.label")}>
            {chips.map((chip) => {
              const active = activeCat === chip.id;
              return (
                <button
                  key={chip.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveCat(chip.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200 ${
                    active
                      ? "bg-accent/10 border-accent/40 text-accent"
                      : "bg-white/[0.03] border-white/[0.08] text-muted hover:text-white hover:border-white/[0.18]"
                  }`}
                >
                  {chip.color && (
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: chip.color }} />
                  )}
                  {chip.label}
                  {typeof chip.count === "number" && (
                    <span className={`text-xs tabular-nums ${active ? "text-accent/60" : "text-white/35"}`}>{chip.count}</span>
                  )}
                </button>
              );
            })}
          </div>
        </RevealSection>

        {/* Tile grid — keyed by view so switching filters remounts tiles
            and replays the entry fade/scale */}
        <RevealSection delay={150}>
          {selected ? (
            <div key={selected.id}>
              <TileGrid keys={selected.keys} guideLabel={guideLabel} />
            </div>
          ) : expanded ? (
            <div key="all-expanded" className="space-y-10">
              {CATEGORIES.map((cat) => (
                <div key={cat.id}>
                  <p className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">
                    <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: cat.color }} />
                    {t(cat.labelKey)}
                    <span className="text-white/30 tabular-nums normal-case tracking-normal">{cat.keys.length}</span>
                  </p>
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
            <div className="flex justify-center mt-8">
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="text-sm text-accent font-medium hover:text-accent-dim transition-colors flex items-center gap-1.5"
              >
                {expanded
                  ? t("featuresall.show_less")
                  : t("featuresall.show_all").replace("{count}", String(TOTAL_COUNT))}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
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
