"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A stat tile is either:
 *   - A counted-up integer with optional prefix/suffix (e.g. count 1000, label "FOUNDER LIFETIME SPOTS")
 *   - Or a static text value (e.g. display "USGS", label "OLD MAP OVERLAY — PRO")
 *
 * The bar is intentionally tilted toward conversion: each tile speaks to a
 * reason a Free user would upgrade to Pro (deprivation → unlimited; feature
 * envy → USGS overlay; price reframing → $1.66/mo; urgency → 1,000 spots).
 */
type Stat =
  | { display: string; label: string }
  | { count: number; prefix?: string; suffix?: string; label: string };

const stats: Stat[] = [
  { display: "HEATMAP", label: "COVERAGE DENSITY OVERLAY · PRO" },
  { display: "USGS", label: "OLD MAP OVERLAY · PRO" },
  { display: "$1.66/mo", label: "PRO ANNUAL · 7-DAY FREE TRIAL" },
  { count: 1000, label: "FOUNDER LIFETIME SPOTS" },
];

function StaticValue({ text }: { text: string }) {
  return <span className="stats-bar__value">{text}</span>;
}

function CountUp({ target, prefix, suffix }: { target: number; prefix?: string; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setV(target);
      started.current = true;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1400;
            const t0 = performance.now();
            const step = (t: number) => {
              const p = Math.min((t - t0) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setV(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stats-bar__value">
      {prefix}
      {v}
      {suffix && <sup>{suffix}</sup>}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Why upgrade to Pro">
      <div className="max-w-6xl mx-auto px-6 stats-bar__grid">
        {stats.map((s) => (
          <div key={s.label}>
            {"display" in s ? (
              <StaticValue text={s.display} />
            ) : (
              <CountUp target={s.count} prefix={s.prefix} suffix={s.suffix} />
            )}
            <div className="stats-bar__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
