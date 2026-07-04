"use client";

import { Fragment, useEffect, useState } from "react";
import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Detecting Forecast spotlight — score-dial demo.
 * Semicircular SVG dial counts 0→92; four weighted factor bars fill in
 * staggered; a GO verdict stamps in once the score passes 60.
 * Plays once on reveal (~3 s). Reduced motion: final state immediately.
 */

const ARC_LEN = 251.33; // π × r80 semicircle
const TARGET = 92;
const GO_AT = 60;
const COUNT_MS = 2200;

/* Factor weights mirror the real score: soil 40 · wind 25 · temp 20 · rain 15.
 * Track width is proportional to the weight, fill is value/weight. */
const factors = [
  { key: "soil", val: 38, max: 40 },
  { key: "wind", val: 22, max: 25 },
  { key: "temp", val: 18, max: 20 },
  { key: "rain", val: 14, max: 15 },
] as const;

function easeInOutCubic(p: number) {
  return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
}

export default function SpotlightForecast() {
  const { t } = useI18n();
  const { ref, visible } = useReveal(0.3);
  const [score, setScore] = useState(0);

  /* Count-up driven by the reveal — interval for the number only,
   * cleared on completion and on unmount. */
  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setScore(TARGET);
      return;
    }
    const start = Date.now();
    const id = window.setInterval(() => {
      const p = Math.min((Date.now() - start) / COUNT_MS, 1);
      setScore(Math.round(TARGET * easeInOutCubic(p)));
      if (p >= 1) window.clearInterval(id);
    }, 40);
    return () => window.clearInterval(id);
  }, [visible]);

  const go = score >= GO_AT;

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-10 items-center reveal ${visible ? "visible" : ""}`}
    >
      {/* ── Copy (left) ── */}
      <div>
        <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-accent mb-3">
          {t("spotlight.forecast_kicker")}
        </p>
        <h3 className="font-display text-2xl md:text-3xl leading-snug mb-4 [text-wrap:balance]">
          {t("spotlight.forecast_title")}
        </h3>
        <p className="text-muted text-base leading-relaxed mb-6">
          {t("spotlight.forecast_desc")}
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
              {t(`spotlight.forecast_${b}` as TranslationKey)}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Demo: instrument panel (right) ── */}
      <div
        className={`sfx-panel relative rounded-2xl border border-white/[0.08] bg-[var(--st-bg-elev)] p-6 md:p-8 overflow-hidden ${visible ? "sfx-on" : ""} ${go ? "sfx-go" : ""}`}
      >
        <div
          className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_center,rgba(0,255,106,0.05),transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Panel header: mono coordinates */}
        <div className="relative z-[1] flex items-center justify-between gap-3 mb-5">
          <span className="font-mono text-[10px] tracking-[0.14em] text-white/40">
            47°41′N 23°34′E · +24 H
          </span>
        </div>

        {/* Score dial */}
        <div className="sfx-dial relative z-[1]">
          <svg viewBox="0 0 200 112" className="block w-full h-auto" aria-hidden="true">
            {/* track */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* grey fill — visible while the score is still below 60 */}
            <path
              className="sfx-dial__arc"
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* green fill — crossfades in when the score passes 60 */}
            <path
              className="sfx-dial__arc-go"
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* GO threshold tick at 60 */}
            <line
              x1="126.6"
              y1="18.2"
              x2="129"
              y2="10.6"
              stroke="var(--st-amber)"
              strokeOpacity="0.6"
              strokeWidth="1.5"
            />
            <text x="131.5" y="13" fontSize="8" fill="rgba(255,176,0,0.55)" className="font-mono">
              60
            </text>
            {/* scale end labels */}
            <text x="20" y="111" fontSize="9" textAnchor="middle" fill="rgba(255,255,255,0.35)" className="font-mono">
              0
            </text>
            <text x="180" y="111" fontSize="9" textAnchor="middle" fill="rgba(255,255,255,0.35)" className="font-mono">
              100
            </text>
          </svg>
          <div className="sfx-dial__center">
            <span className="sfx-dial__num">{score}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
              {t("spotlight.forecast_demo_score_label" as TranslationKey)}
            </span>
          </div>
        </div>

        {/* Verdict: GO chip + permit-check glyphs (check + open lock) */}
        <div
          className="sfx-verdict relative z-[1] flex items-center justify-center gap-3 mt-4 mb-5"
          aria-live="polite"
        >
          {go && (
            <>
              <span className="sfx-go-chip inline-flex items-center px-4 py-1.5 rounded-lg bg-accent text-[#050510] font-display font-bold text-sm tracking-[0.18em] shadow-[0_0_24px_rgba(0,255,106,0.35)]">
                {t("spotlight.forecast_demo_go")}
              </span>
              <span
                className="sfx-permit inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-[rgba(0,255,106,0.25)] bg-[rgba(0,255,106,0.08)] text-accent"
                aria-hidden="true"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 017.9-1" />
                </svg>
              </span>
            </>
          )}
        </div>

        {/* Factor bars — track width = weight, fill = value/weight */}
        <div className="relative z-[1] border-t border-white/[0.06] pt-5">
          <div className="sfx-factors">
            {factors.map((f, i) => (
              <Fragment key={f.key}>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/60 leading-tight">
                  {t(`spotlight.forecast_${f.key}` as TranslationKey)}
                </span>
                <div>
                  <div className="sfx-bar__track" style={{ width: `${(f.max / 40) * 100}%` }}>
                    <div
                      className="sfx-bar__fill"
                      style={{
                        width: `${(f.val / f.max) * 100}%`,
                        animationDelay: `${0.25 + i * 0.18}s`,
                      }}
                    />
                  </div>
                </div>
                <span className="font-mono text-[11px] text-white/70 tabular-nums">
                  {f.val}/{f.max}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
