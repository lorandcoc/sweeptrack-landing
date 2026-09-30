"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Four figures the rest of the site already states: the 45+ tools
 * (footer.description), the 14 app languages, the 4 offline tile sources
 * (pricing.feat_offline) and the free tier's price. Change a number here only
 * together with the copy it comes from.
 *
 * The server HTML carries the final values (no-JS visitors and crawlers see
 * real numbers). If the band starts off-screen, the numbers reset to zero
 * while hidden and count up once it scrolls into view; if it is already on
 * screen at load, it simply stays put, so nothing flashes.
 */
const STATS: { value: number; prefix?: string; suffix?: string; color: string; labelKey: TranslationKey }[] = [
  { value: 45, suffix: "+", color: "var(--accent)", labelKey: "stats.tools" },
  { value: 14, color: "var(--st-gold)", labelKey: "stats.languages" },
  { value: 4, color: "var(--st-cyan)", labelKey: "stats.offline" },
  { value: 0, prefix: "$", color: "var(--st-sky)", labelKey: "pricing.free_sublabel" },
];

type Phase = "static" | "armed" | "running";

function useCountUp(target: number, phase: Phase, ms = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (phase !== "running") return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / ms);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase, target, ms]);
  return phase === "static" ? target : phase === "armed" ? 0 : n;
}

function Stat({ stat, phase }: { stat: (typeof STATS)[number]; phase: Phase }) {
  const { t } = useI18n();
  const n = useCountUp(stat.value, phase);
  return (
    <div className="px-2 py-6 md:py-2 md:px-8 first:md:pl-0">
      <div className="font-mono text-4xl md:text-5xl font-semibold tracking-tight" style={{ color: stat.color }}>
        {stat.prefix}
        {n}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm text-muted leading-snug max-w-[16rem]">{t(stat.labelKey)}</div>
    </div>
  );
}

export default function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // The observer's first callback reports where the band is at load.
    let first = true;
    let armed = false;
    const io = new IntersectionObserver(
      ([e]) => {
        if (first) {
          first = false;
          const r = e.boundingClientRect;
          if (r.top < window.innerHeight && r.bottom > 0) return io.disconnect(); // on screen at load: keep the real values
          armed = true;
          setPhase("armed");
        }
        if (armed && e.isIntersecting) {
          setPhase("running");
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="st-rule">
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 md:divide-x divide-white/10">
        {STATS.map((s) => (
          <Stat key={s.labelKey} stat={s} phase={phase} />
        ))}
      </div>
    </section>
  );
}
