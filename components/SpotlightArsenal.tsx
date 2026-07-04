"use client";

import { useEffect, useState } from "react";
import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Detector Arsenal spotlight — preset card that cycles through four real
 * machines (re-tuning its sliders on each switch) plus a stylized QR share
 * tile. All brand names, control labels and numeric ranges below are taken
 * from the manufacturers' published manuals — they are universal hardware
 * terminology and intentionally not translated.
 */

type SliderRow = {
  label: string; // control name as printed on the machine / in its manual
  value: string; // current value · published range
  fill: number; // 0..1 — slider fill position
};

type Machine = {
  brand: string;
  model: string;
  color: string;
  slot: string;
  rows: [SliderRow, SliderRow, SliderRow];
};

const MACHINES: Machine[] = [
  {
    brand: "Minelab",
    model: "Manticore",
    color: "#0073CF",
    slot: "01",
    rows: [
      { label: "Sensitivity", value: "25 · 1–35", fill: 0.71 },
      { label: "Recovery Speed", value: "6 · 0–8", fill: 0.75 },
      { label: "Ferrous Limits", value: "8", fill: 0.57 },
    ],
  },
  {
    brand: "XP",
    model: "Deus II",
    color: "#FF6B00",
    slot: "02",
    rows: [
      { label: "Disc.", value: "6.2 · −6.4–99", fill: 0.13 },
      { label: "Sensitivity", value: "90 · 0–99", fill: 0.91 },
      { label: "Reactivity", value: "2.5", fill: 0.5 },
    ],
  },
  {
    brand: "Garrett",
    model: "AT Max",
    color: "#FFB000",
    slot: "03",
    rows: [
      { label: "Sensitivity", value: "7 · 1–8", fill: 0.86 },
      { label: "Iron Disc.", value: "22 · 0–44", fill: 0.5 },
      { label: "Frequency", value: "13.6 kHz", fill: 0.35 },
    ],
  },
  {
    brand: "Nokta",
    model: "Legend",
    color: "#00A651",
    slot: "04",
    rows: [
      { label: "Recovery", value: "5 · 1–8", fill: 0.57 },
      { label: "Sensitivity", value: "25 · 1–30", fill: 0.8 },
      { label: "Iron Filter", value: "4", fill: 0.44 },
    ],
  },
];

/*
 * Deterministic decorative 9x9 module pattern — deliberately NOT a scannable
 * QR code, just the visual idea of one (three finder squares + scatter).
 */
const QR_PATTERN = [
  "111010111",
  "101000101",
  "111010111",
  "000101000",
  "101011101",
  "010100010",
  "111001011",
  "101010100",
  "111010101",
];

function QrTile() {
  const cell = 11; // module pitch in viewBox units (9px module + 2px gap)
  return (
    <div
      aria-hidden="true"
      className="relative w-[88px] h-[88px] shrink-0 rounded-xl border border-white/10 bg-[#0A0A18] p-2 overflow-hidden"
    >
      <svg viewBox="0 0 99 99" className="w-full h-full" aria-hidden="true">
        {QR_PATTERN.flatMap((row, r) =>
          row.split("").map((on, c) =>
            on === "1" ? (
              <rect
                key={`${r}-${c}`}
                x={c * cell}
                y={r * cell}
                width={9}
                height={9}
                rx={1.5}
                fill="rgba(232,232,240,0.92)"
              />
            ) : null
          )
        )}
      </svg>
      <span className="sax-scan" aria-hidden="true" />
    </div>
  );
}

function PresetCard({ active }: { active: number }) {
  const m = MACHINES[active];
  return (
    <div
      aria-hidden="true"
      className="relative rounded-2xl border border-white/[0.08] bg-[#0E0E1F] overflow-hidden"
    >
      {/* Brand-colored left edge */}
      <span
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: m.color, boxShadow: `0 0 14px ${m.color}80` }}
      />

      <div className="p-5 pl-6">
        {/* Header: brand + model, slot index */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div key={`head-${active}`} className="sax-swapin">
            <p
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] mb-1"
              style={{ color: m.color }}
            >
              {m.brand}
            </p>
            <p className="font-display text-xl text-white leading-none">{m.model}</p>
          </div>
          <span className="font-mono text-[10px] text-white/40 pt-1 tabular-nums">
            {m.slot}&thinsp;/&thinsp;10
          </span>
        </div>

        {/* Three slider rows — fills re-tune between machines */}
        <div className="space-y-4">
          {m.rows.map((row, i) => (
            <div key={i}>
              <div
                key={`label-${active}-${i}`}
                className="sax-swapin flex items-baseline justify-between gap-3 mb-1.5"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="font-mono text-[11px] text-white/55">{row.label}</span>
                <span className="font-mono text-[11px] text-white/85 tabular-nums">
                  {row.value}
                </span>
              </div>
              <div className="relative h-[3px] rounded-full bg-white/[0.08]">
                <span
                  className="sax-fill absolute inset-0 rounded-full"
                  style={{ transform: `scaleX(${row.fill})`, background: m.color }}
                />
                <span
                  className="sax-thumb-rail absolute inset-0"
                  style={{ transform: `translateX(${row.fill * 100}%)` }}
                >
                  <span
                    className="absolute top-1/2 -translate-y-1/2 -ml-1 w-2 h-2 rounded-full bg-white"
                    style={{ boxShadow: `0 0 8px ${m.color}` }}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Cycle position dots */}
        <div className="mt-5 flex items-center gap-1.5">
          {MACHINES.map((_, i) => (
            <span
              key={i}
              className="h-1 rounded-full"
              style={{
                width: i === active ? 16 : 6,
                backgroundColor: i === active ? m.color : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SpotlightArsenal() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();
  const [active, setActive] = useState(0);

  // Cycle machines every ~3s once revealed; stay on the Manticore for
  // prefers-reduced-motion users (static final state, still legible).
  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % MACHINES.length),
      3000
    );
    return () => window.clearInterval(id);
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} grid md:grid-cols-2 gap-10 items-center`}
    >
      {/* Demo — left on desktop, below copy on mobile */}
      <div className="order-2 md:order-1">
        <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-7">
          <PresetCard active={active} />

          {/* QR share tile + caption */}
          <div className="mt-5 flex items-center gap-4">
            <QrTile />
            <div className="min-w-0">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-1">
                {t("spotlight.arsenal_demo_share")}
              </p>
              <p className="font-mono text-[11px] text-white/40">
                SweepTrack &middot; v2 &middot; 412 B
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copy — first on mobile, right on desktop */}
      <div className="order-1 md:order-2">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-3">
          {t("spotlight.arsenal_kicker")}
        </p>
        <h3 className="font-display text-2xl md:text-[2rem] leading-tight mb-4 [text-wrap:balance]">
          {t("spotlight.arsenal_title")}
        </h3>
        <p className="text-muted text-base leading-relaxed mb-6">
          {t("spotlight.arsenal_desc")}
        </p>
        <ul className="space-y-3">
          {([1, 2, 3, 4] as const).map((n) => (
            <li key={n} className="flex items-start gap-3">
              <span
                className="mt-0.5 w-[18px] h-[18px] rounded-[5px] border border-accent/30 bg-accent/10 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--st-accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 12l5 5L20 7" />
                </svg>
              </span>
              <span className="text-sm md:text-[15px] text-foreground/90 leading-relaxed">
                {t(`spotlight.arsenal_b${n}` as TranslationKey)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
