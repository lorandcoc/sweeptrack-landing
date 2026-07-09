"use client";

import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Precision Align spotlight — control-point georeferencing demo.
 * Two source points (orange) ride with an imported map that drifts in offset,
 * rotated and over-scaled, then settles square onto the real map so each source
 * point lands on its target (green) on the ground. An accuracy chip resolves to
 * "1.8 m" and a "Locked to ground" caption confirms the fit.
 * Pure CSS, plays once on reveal. Reduced motion: aligned end state.
 *
 * Mirrors the app's real precision align: tap a feature on your image, tap its
 * true real-world spot, a similarity transform is fit with an RMS readout in
 * meters. Not rubber-sheet warp — move/scale/rotate only.
 */

export default function SpotlightPrecisionAlign() {
  const { t } = useI18n();
  const { ref, visible } = useReveal(0.3);

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-10 items-center reveal ${visible ? "visible" : ""}`}
    >
      {/* ── Copy (left on desktop) ── */}
      <div>
        <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-accent mb-3">
          {t("spotlight.precision_kicker")}
        </p>
        <h3 className="font-display text-2xl md:text-3xl leading-snug mb-4 [text-wrap:balance]">
          {t("spotlight.precision_title")}
        </h3>
        <p className="text-muted text-base leading-relaxed mb-6">
          {t("spotlight.precision_desc")}
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
              {t(`spotlight.precision_${b}` as TranslationKey)}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Demo: control-point align (right on desktop) ── */}
      <div
        className={`spa-panel relative rounded-2xl border border-white/[0.08] bg-[var(--st-bg-elev)] p-6 md:p-8 overflow-hidden ${visible ? "spa-on" : ""}`}
      >
        <div
          className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_center,rgba(0,255,106,0.05),transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Panel header */}
        <div className="relative z-[1] flex items-center justify-between gap-3 mb-5">
          <span className="font-mono text-[10px] tracking-[0.14em] text-white/40">
            PRECISION · 2 control points
          </span>
        </div>

        {/* Align stage */}
        <div className="spa-stage relative z-[1]" aria-hidden="true">
          {/* Real map base */}
          <div className="spa-base">
            <span className="spa-tag spa-tag--ground">{t("spotlight.precision_demo_ground")}</span>
          </div>

          {/* Imported map with source points that ride into place */}
          <div className="spa-overlay">
            <span className="spa-cp spa-cp--src spa-cp--s1" />
            <span className="spa-cp spa-cp--src spa-cp--s2" />
            <span className="spa-tag spa-tag--your">{t("spotlight.precision_demo_yourmap")}</span>
          </div>

          {/* Real-world target points, kept on top so they stay crisp */}
          <span className="spa-cp spa-cp--tgt spa-cp--t1" />
          <span className="spa-cp spa-cp--tgt spa-cp--t2" />

          {/* Locked caption */}
          <span className="spa-locked font-mono">{t("spotlight.precision_demo_locked")}</span>
        </div>

        {/* Accuracy readout */}
        <div className="relative z-[1] flex items-center gap-3 mt-5 pt-4 border-t border-white/[0.06]">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55 shrink-0">
            {t("spotlight.precision_demo_rms")}
          </span>
          <div className="spa-meter">
            <span className="spa-meter__fill" />
          </div>
          <span className="spa-rms font-mono text-[11px] text-accent tabular-nums shrink-0">1.8 m</span>
        </div>
      </div>
    </div>
  );
}
