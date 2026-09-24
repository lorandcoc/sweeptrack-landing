"use client";

import { useState } from "react";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/* ─── Categories ───
 * Every tile maps to exactly one category; the chips filter by category.
 */

type CategoryId = "map" | "finds" | "research" | "sessions" | "polish";


const CATEGORIES: {
  id: CategoryId;
  labelKey: TranslationKey;
  keys: string[];
}[] = [
  {
    id: "map",
    labelKey: "featuresall.cat_map",
    keys: ["mapoverlay", "oldmap", "heatmap", "nightvision", "compass", "backtostart", "ruler"],
  },
  {
    id: "finds",
    labelKey: "featuresall.cat_finds",
    keys: [
      "findlogger", "findsintel", "pindrop", "colorpins", "photogallery",
      "editfinds", "findsearch", "signaldiary",
    ],
  },
  {
    id: "research",
    labelKey: "featuresall.cat_research",
    keys: [
      "forecast", "verdict", "moon", "tidetable", "waypoints",
      "locationsearch", "permissionletter",
      "calendarreminder", "permitreminders",
    ],
  },
  {
    id: "sessions",
    labelKey: "featuresall.cat_sessions",
    keys: [
      "careerstats", "sessioncompare", "sessionmerge", "batchactions",
      "elevation", "summaryscore", "sharecard", "weathersnapshot",
      "autonamed", "sessiontags", "rankladder",
    ],
  },
  {
    id: "polish",
    labelKey: "featuresall.cat_polish",
    keys: [
      "languages", "colorthemes", "unitstoggle", "export",
      "onboarding", "greetings", "oemrationale", "atomicrestore",
      "about", "feedback",
    ],
  },
];

const TOTAL_COUNT = CATEGORIES.reduce((n, c) => n + c.keys.length, 0);

/* Collapsed default — the strongest tiles, leading with the two new Pro features */
const TOP_PICKS = [
  "findsintel", "mapoverlay", "findlogger", "forecast", "heatmap",
  "careerstats", "nightvision", "sessioncompare", "permissionletter",
];

/* Tiles with a matching blog guide keep their link */
const GUIDES: Record<string, string> = {
  mapoverlay: "/blog/import-and-georeference-your-own-maps",
  oldmap: "/blog/how-to-use-old-maps-for-metal-detecting",
  findlogger: "/blog/logging-finds-photo-video-audio",
  pindrop: "/blog/logging-finds-photo-video-audio",
  backtostart: "/blog/how-to-track-metal-detecting-sessions-gps",
  sessioncompare: "/blog/comparing-sessions-overlay-split",
  export: "/blog/exporting-sessions-gpx-kml-csv",
  nightvision: "/blog/night-vision-mode",
  forecast: "/blog/detecting-forecast-guide",
  tidetable: "/blog/beach-metal-detecting-tide-timing",
  heatmap: "/blog/how-to-track-metal-detecting-sessions-gps",
  careerstats: "/blog/understanding-session-statistics",
  permissionletter: "/blog/metal-detecting-permission-letter-template",
  sharecard: "/blog/share-card",
};

/* ─── Tiles ─── */

function Tile({ featureKey, guideLabel }: { featureKey: string; guideLabel: string }) {
  const { t } = useI18n();
  const title = t(`featuresall.sec_${featureKey}_title` as TranslationKey);
  const desc = t(`featuresall.sec_${featureKey}_desc` as TranslationKey);
  const guide = GUIDES[featureKey];

  return (
    <div className="h-full border-t border-white/10 pt-5">
      <h3 className="font-semibold text-foreground leading-snug">{title}</h3>
      <p className="mt-2 text-muted text-[15px] leading-relaxed">{desc}</p>
      {guide && (
        <a
          href={guide}
          className="mt-3 inline-block text-sm text-foreground underline decoration-white/30 underline-offset-4 hover:decoration-foreground transition-colors"
        >
          {guideLabel}
        </a>
      )}
    </div>
  );
}

function TileGrid({ keys, guideLabel }: { keys: string[]; guideLabel: string }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
      {keys.map((key) => (
        <Tile key={key} featureKey={key} guideLabel={guideLabel} />
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

  const chips: { id: CategoryId | "all"; label: string; count?: number }[] = [
    { id: "all", label: t("blog.cat_all") },
    ...CATEGORIES.map((c) => ({ id: c.id, label: t(c.labelKey), count: c.keys.length })),
  ];

  const selected = activeCat === "all" ? null : CATEGORIES.find((c) => c.id === activeCat) ?? null;

  return (
    <section id="features" className="st-rule py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display st-h2">
            {t("featuresall.heading_prefix")}
            {t("featuresall.heading_accent")}
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">{t("featuresall.description")}</p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label={t("featuresall.label")}>
          {chips.map((chip) => {
            const active = activeCat === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCat(chip.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-sm border transition-colors ${
                  active
                    ? "bg-white/[0.08] border-white/25 text-foreground"
                    : "border-white/10 text-muted hover:text-foreground hover:border-white/20"
                }`}
              >
                {chip.label}
                {typeof chip.count === "number" && <span className="text-xs tabular-nums text-muted/70">{chip.count}</span>}
              </button>
            );
          })}
        </div>

        {selected ? (
          <TileGrid keys={selected.keys} guideLabel={guideLabel} />
        ) : expanded ? (
          <div className="space-y-14">
            {CATEGORIES.map((cat) => (
              <div key={cat.id}>
                <h3 className="font-display text-xl mb-6">
                  {t(cat.labelKey)} <span className="text-muted text-base font-normal tabular-nums">{cat.keys.length}</span>
                </h3>
                <TileGrid keys={cat.keys} guideLabel={guideLabel} />
              </div>
            ))}
          </div>
        ) : (
          <TileGrid keys={TOP_PICKS} guideLabel={guideLabel} />
        )}

        {/* Expander, only meaningful in the "All" view */}
        {!selected && (
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-white/15 text-sm text-foreground font-semibold hover:border-white/30 transition-colors"
            >
              {expanded ? t("featuresall.show_less") : t("featuresall.show_all").replace("{count}", String(TOTAL_COUNT))}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
