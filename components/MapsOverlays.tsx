"use client";

import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";
import LayerGrid from "./LayerGrid";
import MapCompareSlider from "./MapCompareSlider";
import SpotlightPrecisionAlign from "./SpotlightPrecisionAlign";

/*
 * Maps & Overlays — the unified home for SweepTrack's layered map system.
 * Intro + the six layers (LayerGrid), then the two flagship layers get room:
 * the historical layer as an interactive slider (MapCompareSlider) and
 * precision align as an animated demo (SpotlightPrecisionAlign). Links to the
 * dedicated /overlays page for the full story.
 */

export default function MapsOverlays() {
  const { ref, visible } = useReveal();
  const { t } = useI18n();

  return (
    <section id="maps" className="pt-20 md:pt-28 cv-auto">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro header */}
        <div ref={ref} className={`text-center mb-12 md:mb-16 reveal ${visible ? "visible" : ""}`}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("maps.kicker")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight [text-wrap:balance] mb-5">
            {t("maps.heading_prefix")}
            <span className="text-accent">{t("maps.heading_accent")}</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            {t("maps.description")}
          </p>
        </div>

        {/* The six layers at a glance */}
        <LayerGrid />
      </div>

      {/* Historical layer, interactive (keeps its own section spacing) */}
      <MapCompareSlider />

      {/* Precision align demo + CTA to the dedicated page */}
      <div className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <SpotlightPrecisionAlign />

        <div className="mt-14 md:mt-20 text-center">
          <a
            href="/overlays"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-accent text-[#050510] font-semibold text-base hover:bg-accent-dim transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {t("maps.cta")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
