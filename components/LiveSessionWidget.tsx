"use client";

import { useEffect, useState } from "react";

/**
 * Live-looking tactical session readout for the Hero section.
 * Mirrors the styling of the in-app TacticalHUD so the hero
 * doubles as a preview of what the app looks like in the field.
 */

const START_TIME_S = 47 * 60 + 23; // 00:47:23 — mid-session
const START_DISTANCE_M = 2470;
const START_FINDS = 3;

function formatTime(total: number) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function formatKm(m: number) {
  return (m / 1000).toFixed(2);
}

export default function LiveSessionWidget() {
  const [time, setTime] = useState(START_TIME_S);
  const [distance, setDistance] = useState(START_DISTANCE_M);
  const [finds, setFinds] = useState(START_FINDS);

  useEffect(() => {
    const tick = setInterval(() => {
      setTime((t) => t + 1);
      // ~1 m/s walking pace with occasional bumps
      setDistance((d) => d + 1 + Math.floor(Math.random() * 2));
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  // Occasional "find logged" bump every ~25 s
  useEffect(() => {
    const findTimer = setInterval(() => {
      setFinds((f) => f + 1);
    }, 25000);
    return () => clearInterval(findTimer);
  }, []);

  return (
    <div className="hud-widget relative rounded-2xl border border-accent/25 overflow-hidden">
      {/* Scanline overlay */}
      <div className="hud-scanlines absolute inset-0 pointer-events-none" aria-hidden />

      {/* Corner brackets */}
      <div className="hud-corner hud-corner-tl" aria-hidden />
      <div className="hud-corner hud-corner-tr" aria-hidden />
      <div className="hud-corner hud-corner-bl" aria-hidden />
      <div className="hud-corner hud-corner-br" aria-hidden />

      {/* ── Top bar ─────────────────────────── */}
      <div className="relative z-10 flex items-center justify-between px-4 md:px-5 py-2.5 border-b border-accent/15 text-[10px] uppercase tracking-[0.2em] font-mono">
        <div className="flex items-center gap-2">
          <span className="hud-rec-dot" aria-hidden />
          <span className="text-red-400 font-bold">REC</span>
        </div>
        <div className="hidden sm:block text-accent font-bold" aria-label="Elapsed time">
          {formatTime(time)}
        </div>
        <div className="flex items-center gap-1.5 text-white/50">
          <span>GPS</span>
          <span className="text-accent font-bold">LOCK</span>
          <span className="hidden sm:inline">· 14 SAT</span>
        </div>
      </div>

      {/* ── Main body ───────────────────────── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.35fr_1fr]">
        {/* Left — hero metric */}
        <div className="p-5 md:p-6 md:border-r border-accent/15">
          <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/40 mb-1">
            Distance Covered
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono font-black text-5xl md:text-6xl text-accent stat-glow tabular-nums">
              {formatKm(distance)}
            </span>
            <span className="font-mono text-base text-accent/70">km</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[10px] font-mono uppercase tracking-[0.15em]">
            <div>
              <span className="text-white/40">SPD </span>
              <span className="text-white/90">3.8 km/h</span>
            </div>
            <div>
              <span className="text-white/40">HDG </span>
              <span className="text-white/90">314° NNW</span>
            </div>
            <div>
              <span className="text-white/40">ALT </span>
              <span className="text-white/90">312 m</span>
            </div>
          </div>
          {/* Time shown here on mobile only, since top bar hides it */}
          <div className="sm:hidden mt-3 text-[11px] font-mono text-accent/80">
            ELAPSED <span className="text-accent font-bold">{formatTime(time)}</span>
          </div>
        </div>

        {/* Right — stats grid */}
        <div className="grid grid-cols-2">
          <HudStat label="Finds" value={finds.toString()} accent />
          <HudStat label="Score" value="842" accent />
          <HudStat label="Accuracy" value="4.2 m" last />
          <HudStat label="Soil" value="0.28" last />
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────── */}
      <div className="relative z-10 px-4 md:px-5 py-2.5 border-t border-accent/15 flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] font-mono">
        <span className="text-white/40 shrink-0 hidden sm:inline">GRID COV</span>
        <div className="hud-bar flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden max-w-[240px]">
          <div className="hud-bar-fill h-full bg-accent" style={{ width: "84%" }} />
        </div>
        <span className="text-accent font-bold tabular-nums">84%</span>
        <span className="text-white/20 mx-1 hidden md:inline">│</span>
        <span className="text-white/40 ml-auto md:ml-0 shrink-0">
          FORECAST <span className="text-accent font-bold">82 GOOD</span>
        </span>
      </div>
    </div>
  );
}

function HudStat({
  label,
  value,
  accent,
  last,
}: {
  label: string;
  value: string;
  accent?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`px-4 py-3 border-accent/10 ${
        last ? "" : "border-b"
      } [&:nth-child(odd)]:border-r`}
    >
      <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/40 mb-1">
        {label}
      </div>
      <div
        className={`font-mono font-black text-xl tabular-nums ${
          accent ? "text-accent" : "text-white/90"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
