"use client";

import { useEffect, useState } from "react";
import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Finds Intelligence spotlight — value-weighted hot-zone demo.
 * A scatter of logged finds fades in over a map grid; a pulsing hot-zone ring
 * settles over the high-value (gold) cluster; three metric chips rise; the
 * collection-value figure counts up 0→1,240. Plays once on reveal (~2.4 s).
 * Reduced motion: final state immediately.
 */

const VALUE_TARGET = 1240;
const COUNT_MS = 2000;

/* Scattered finds — % positions in the map box. `gold` marks the high-value
 * cluster the hot-zone ring weights toward. */
const finds = [
  { x: 18, y: 32, gold: false },
  { x: 33, y: 64, gold: false },
  { x: 50, y: 26, gold: false },
  { x: 24, y: 82, gold: false },
  { x: 60, y: 50, gold: false },
  { x: 86, y: 44, gold: false },
  { x: 68, y: 28, gold: true },
  { x: 77, y: 34, gold: true },
  { x: 72, y: 41, gold: true },
] as const;

const metrics = [
  { labelKey: "spotlight.findsintel_demo_perhour", value: "2.4" },
  { labelKey: "spotlight.findsintel_demo_besttime", valueKey: "spotlight.findsintel_demo_besttime_val" },
  { labelKey: "spotlight.findsintel_demo_topsite", valueKey: "spotlight.findsintel_demo_topsite_val" },
] as const;

function easeInOutCubic(p: number) {
  return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
}

export default function SpotlightFindsIntel() {
  const { t } = useI18n();
  const { ref, visible } = useReveal(0.3);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(VALUE_TARGET);
      return;
    }
    const start = Date.now();
    const id = window.setInterval(() => {
      const p = Math.min((Date.now() - start) / COUNT_MS, 1);
      setValue(Math.round(VALUE_TARGET * easeInOutCubic(p)));
      if (p >= 1) window.clearInterval(id);
    }, 40);
    return () => window.clearInterval(id);
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-10 items-center reveal ${visible ? "visible" : ""}`}
    >
      {/* ── Copy (left) ── */}
      <div>
        <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-accent mb-3">
          {t("spotlight.findsintel_kicker")}
        </p>
        <h3 className="font-display text-2xl md:text-3xl leading-snug mb-4 [text-wrap:balance]">
          {t("spotlight.findsintel_title")}
        </h3>
        <p className="text-muted text-base leading-relaxed mb-6">
          {t("spotlight.findsintel_desc")}
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
              {t(`spotlight.findsintel_${b}` as TranslationKey)}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Demo: hot-zone panel (right) ── */}
      <div
        className={`sfi-panel relative rounded-2xl border border-white/[0.08] bg-[var(--st-bg-elev)] p-6 md:p-8 overflow-hidden ${visible ? "sfi-on" : ""}`}
      >
        <div
          className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_center,rgba(255,176,0,0.05),transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Panel header */}
        <div className="relative z-[1] flex items-center justify-between gap-3 mb-5">
          <span className="font-mono text-[10px] tracking-[0.14em] text-white/40">
            FIND LOG · 142 finds
          </span>
          <span className="st-hud">
            <span className="st-hud__dot" />
            {t("spotlight.demo_badge")}
          </span>
        </div>

        {/* Hot-zone map */}
        <div className="sfi-map relative z-[1]" aria-hidden="true">
          {finds.map((f, i) => (
            <span
              key={i}
              className={`sfi-find${f.gold ? " sfi-find--gold" : ""}`}
              style={{ left: `${f.x}%`, top: `${f.y}%`, animationDelay: `${0.1 + i * 0.08}s` }}
            />
          ))}
          <span className="sfi-hot" style={{ left: "72%", top: "34%" }}>
            <span className="sfi-hot__label">{t("spotlight.findsintel_demo_hotzone")}</span>
          </span>
        </div>

        {/* Metric chips */}
        <div className="sfi-metrics relative z-[1]">
          {metrics.map((m, i) => (
            <div key={m.labelKey} className="sfi-metric" style={{ animationDelay: `${0.5 + i * 0.12}s` }}>
              <span className="sfi-metric__val font-display">
                {"value" in m ? m.value : t(m.valueKey as TranslationKey)}
              </span>
              <span className="sfi-metric__label font-mono">{t(m.labelKey as TranslationKey)}</span>
            </div>
          ))}
        </div>

        {/* Collection value count-up */}
        <div className="relative z-[1] flex items-baseline justify-between border-t border-white/[0.06] mt-5 pt-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">
            {t("spotlight.findsintel_demo_value")}
          </span>
          <span className="sfi-value font-display tabular-nums">
            ${value.toLocaleString("en-US")}
          </span>
        </div>
      </div>
    </div>
  );
}
