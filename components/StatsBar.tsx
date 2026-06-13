"use client";

import { useEffect, useState } from "react";
import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/**
 * Five-tile stats strip — real, falsifiable numbers instead of slogan words.
 * Each value counts up from 0 when the strip scrolls into view (staggered
 * 120ms per tile). The "0" tile is the punchline: it scrambles DOWN
 * (7 → 3 → 1 → 0) and lands on zero with a green flash — zero ads, zero
 * trackers, zero compromises.
 *
 * SSR/no-JS renders the final values, so the numbers are always present in
 * the HTML for crawlers and reduced-motion users.
 */
const TILES = [
  { valueKey: "statsbar.s1_value", labelKey: "statsbar.s1_label" },
  { valueKey: "statsbar.s2_value", labelKey: "statsbar.s2_label" },
  { valueKey: "statsbar.s3_value", labelKey: "statsbar.s3_label" },
  { valueKey: "statsbar.s4_value", labelKey: "statsbar.s4_label" },
  { valueKey: "statsbar.s5_value", labelKey: "statsbar.s5_label" },
] as const;

const COUNT_MS = 1200; // count-up duration per tile
const TICK_MS = 40; // setInterval step (~30 frames over 1.2s)
const STAGGER_MS = 120; // delay between tiles
const ZERO_STEPS = [7, 3, 1, 0]; // the "0" tile counts down through these
const ZERO_STEP_MS = 200;

function StatTile({
  raw,
  label,
  index,
  start,
  isLast,
}: {
  raw: string;
  label: string;
  index: number;
  start: boolean;
  isLast: boolean;
}) {
  // Parse leading number; anything after it ("+") is a static suffix.
  const match = /^(\d+)(.*)$/.exec(raw);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  // Initial state = final value, so SSR markup is complete. The client
  // resets to 0 on mount (unless reduced motion) and counts on reveal.
  const [shown, setShown] = useState<number | null>(target);
  const [landed, setLanded] = useState(false); // zero tile touchdown flash

  useEffect(() => {
    if (target === null) return; // non-numeric value: render as-is
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return; // keep the final value, no count
    }

    if (!start) {
      setShown(0);
      return;
    }

    let interval: ReturnType<typeof setInterval> | undefined;
    const delay = setTimeout(() => {
      if (target === 0) {
        // Scramble countdown: 7 → 3 → 1 → 0, then flash green.
        let step = 0;
        setShown(ZERO_STEPS[0]);
        interval = setInterval(() => {
          step += 1;
          setShown(ZERO_STEPS[step]);
          if (step >= ZERO_STEPS.length - 1) {
            clearInterval(interval);
            setLanded(true);
          }
        }, ZERO_STEP_MS);
      } else {
        // Eased count-up 0 → target.
        const steps = Math.round(COUNT_MS / TICK_MS);
        let frame = 0;
        interval = setInterval(() => {
          frame += 1;
          if (frame >= steps) {
            clearInterval(interval);
            setShown(target);
          } else {
            const eased = 1 - Math.pow(1 - frame / steps, 3);
            setShown(Math.round(target * eased));
          }
        }, TICK_MS);
      }
    }, index * STAGGER_MS);

    return () => {
      clearTimeout(delay);
      if (interval) clearInterval(interval);
    };
  }, [start, target, index]);

  return (
    <div className={isLast ? "stx-tile-zero" : undefined}>
      {/* Static value for screen readers; the animated copy is decorative. */}
      <span className="sr-only">{raw}</span>
      <span
        aria-hidden="true"
        className={`stx-value font-display stat-glow${landed ? " stx-zero-hit" : ""}`}
      >
        {shown === null ? raw : shown}
        {suffix ? <span className="stx-suffix">{suffix}</span> : null}
      </span>
      <div className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white/60 leading-relaxed">
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const { t } = useI18n();
  const { ref, visible } = useReveal(0.35);

  return (
    <section className="stats-bar" aria-label={t("statsbar.aria_label" as TranslationKey)}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 stats-bar__grid">
        {TILES.map((tile, i) => (
          <StatTile
            key={tile.valueKey}
            raw={t(tile.valueKey)}
            label={t(tile.labelKey)}
            index={i}
            start={visible}
            isLast={i === TILES.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
