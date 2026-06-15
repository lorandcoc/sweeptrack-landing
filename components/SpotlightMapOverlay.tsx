"use client";

import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Map Overlays spotlight — align-your-own-map demo.
 * An imported old-map layer drifts in offset, rotated and over-scaled, then
 * settles square onto the satellite base while its opacity eases down so the
 * ground reads through. Corner handles pulse; an opacity bar fills to ~65%.
 * Pure CSS, plays once on reveal. Reduced motion: aligned end state.
 */

export default function SpotlightMapOverlay() {
  const { t } = useI18n();
  const { ref, visible } = useReveal(0.3);

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-10 items-center reveal ${visible ? "visible" : ""}`}
    >
      {/* ── Copy (right on desktop, first on mobile) ── */}
      <div className="md:order-2">
        <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-accent mb-3">
          {t("spotlight.mapoverlay_kicker")}
        </p>
        <h3 className="font-display text-2xl md:text-3xl leading-snug mb-4 [text-wrap:balance]">
          {t("spotlight.mapoverlay_title")}
        </h3>
        <p className="text-muted text-base leading-relaxed mb-6">
          {t("spotlight.mapoverlay_desc")}
        </p>
        <ul className="space-y-2.5">
          {(["b1", "b2", "b3", "b4"] as const).map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-sm md:text-[15px] text-white/85 leading-relaxed"
            >
              <svg
                className="text-accent shrink-0 mt-[3px]"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {t(`spotlight.mapoverlay_${b}` as TranslationKey)}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Demo: alignment panel (left on desktop) ── */}
      <div
        className={`smo-panel md:order-1 relative rounded-2xl border border-white/[0.08] bg-[var(--st-bg-elev)] p-6 md:p-8 overflow-hidden ${visible ? "smo-on" : ""}`}
      >
        <div
          className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_center,rgba(0,255,106,0.05),transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Panel header */}
        <div className="relative z-[1] flex items-center justify-between gap-3 mb-5">
          <span className="font-mono text-[10px] tracking-[0.14em] text-white/40">
            OVERLAY · parcel_1903.jpg
          </span>
          <span className="st-hud">
            <span className="st-hud__dot" />
            {t("spotlight.demo_badge")}
          </span>
        </div>

        {/* Alignment stage */}
        <div className="smo-stage relative z-[1]" aria-hidden="true">
          {/* Satellite base */}
          <div className="smo-base">
            <span className="smo-tag smo-tag--base">{t("spotlight.mapoverlay_demo_satellite")}</span>
          </div>

          {/* Imported old-map overlay that aligns into place */}
          <div className="smo-overlay">
            <span className="smo-handle smo-handle--tl" />
            <span className="smo-handle smo-handle--tr" />
            <span className="smo-handle smo-handle--bl" />
            <span className="smo-handle smo-handle--br" />
            <span className="smo-tag smo-tag--your">{t("spotlight.mapoverlay_demo_yourmap")}</span>
          </div>

          {/* Status caption */}
          <span className="smo-caption font-mono">{t("spotlight.mapoverlay_demo_label")}</span>
        </div>

        {/* Opacity control */}
        <div className="relative z-[1] flex items-center gap-3 mt-5 pt-4 border-t border-white/[0.06]">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55 shrink-0">
            {t("spotlight.mapoverlay_demo_opacity")}
          </span>
          <div className="smo-opacity__track">
            <div className="smo-opacity__fill" />
          </div>
          <span className="font-mono text-[11px] text-white/70 tabular-nums shrink-0">65%</span>
        </div>
      </div>
    </div>
  );
}
