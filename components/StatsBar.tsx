"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { count: number; suffix?: string; label: string };

const stats: Stat[] = [
  { count: 48, label: "FIELD TOOLS" },
  { count: 61, label: "DETECTOR PRESETS" },
  { count: 131, label: "COINS · 9 REGIONS" },
  { count: 100, suffix: "%", label: "AD-FREE" },
];

function CountUp({ target, suffix }: { target: number; suffix?: string }) {
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
      {v}
      {suffix && <sup>{suffix}</sup>}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="stats-bar" aria-label="At a glance">
      <div className="max-w-6xl mx-auto px-6 stats-bar__grid">
        {stats.map((s) => (
          <div key={s.label}>
            <CountUp target={s.count} suffix={s.suffix} />
            <div className="stats-bar__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
