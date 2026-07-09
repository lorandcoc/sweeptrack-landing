"use client";

import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * LayerGrid — the six map layers of SweepTrack's map system, at a glance.
 * Gives the layers that were previously table-only (heatmap, tracks, offline)
 * a visual home alongside the flagship overlay features. Every claim is
 * code-verified against the app: base maps are free; everything else is Pro.
 */

type Layer = { key: string; tier: "free" | "pro"; icon: React.ReactNode };

const LAYERS: Layer[] = [
  {
    key: "base",
    tier: "free",
    icon: (
      <path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3V7zm6-3v13m6-10v13" />
    ),
  },
  {
    key: "historical",
    tier: "pro",
    icon: (
      <>
        <path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-8 5" />
        <path d="M3 4v4h4M12 8v4l3 2" />
      </>
    ),
  },
  {
    key: "import",
    tier: "pro",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 15l5-4 4 3 3-2 6 5" />
        <path d="M12 2v5m0 0l-2-2m2 2l2-2" />
      </>
    ),
  },
  {
    key: "precision",
    tier: "pro",
    icon: (
      <>
        <circle cx="12" cy="12" r="7" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    key: "coverage",
    tier: "pro",
    icon: (
      <path d="M3 17l4-6 3 3 4-7 3 5 4-4M3 21h18" />
    ),
  },
  {
    key: "offline",
    tier: "pro",
    icon: (
      <path d="M12 3v11m0 0l-4-4m4 4l4-4M5 21h14a2 2 0 0 0 2-2v-2" />
    ),
  },
];

function LayerCard({ layer, index }: { layer: Layer; index: number }) {
  const { t } = useI18n();
  const tierLabel = t(layer.tier === "free" ? "maps.tier_free" : "maps.tier_pro");
  return (
    <div
      className="h-full transition-all duration-300 starting:opacity-0 starting:scale-95"
      style={{ transitionDelay: `${Math.min(index * 40, 200)}ms` }}
    >
      <div className="h-full p-5 rounded-2xl bg-surface/50 border border-white/[0.06] hover:border-white/[0.14] hover:bg-surface/80 transition-colors">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-accent/25 bg-accent/10 text-accent">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {layer.icon}
            </svg>
          </span>
          <span
            className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
              layer.tier === "free"
                ? "text-accent/90 border-accent/30 bg-accent/[0.06]"
                : "text-amber-300/90 border-amber-400/30 bg-amber-400/[0.06]"
            }`}
          >
            {tierLabel}
          </span>
        </div>
        <h3 className="font-semibold text-base text-white/90 mb-1.5">
          {t(`maps.layer_${layer.key}_title` as TranslationKey)}
        </h3>
        <p className="text-muted text-sm leading-relaxed">
          {t(`maps.layer_${layer.key}_desc` as TranslationKey)}
        </p>
      </div>
    </div>
  );
}

export default function LayerGrid() {
  const { ref, visible } = useReveal(0.15);
  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {LAYERS.map((layer, i) => (
          <LayerCard key={layer.key} layer={layer} index={i} />
        ))}
      </div>
    </div>
  );
}
