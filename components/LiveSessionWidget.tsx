"use client";

import { useEffect, useState } from "react";

/**
 * HUD sample that mirrors the layout of the real in-app TacticalHUD
 * (app/src/main/java/com/sweeptrack/pro/ui/components/TacticalHUD.kt).
 *
 * Real HUD structure:
 *   Primary row:   [● dot]  TIME  │  DIST  │  KPH
 *   Expanded row:  ALT  │  FINDS  │  HDG  │  ACC   (│  COV if grid on)
 *
 * Labels come from Strings.kt (EN map, lines 51-53):
 *   hud_time "TIME", hud_dist "DIST", hud_kph "KPH",
 *   hud_alt "ALT", hud_finds "FINDS", hud_hdg "HDG",
 *   hud_acc "ACC", hud_cov "COV"
 *
 * Values here are a seeded sample session — not a real capture —
 * but every field shown is a real field that the in-app HUD displays.
 * No fabricated cells (no score, no soil, no forecast, no sat count).
 */

const START_TIME_S = 47 * 60 + 23; // 00:47:23
const START_DISTANCE_M = 2470;
const START_FINDS = 3;

function formatTime(total: number) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function formatDistance(meters: number) {
  if (meters >= 1000) return `${(meters / 1000).toFixed(2)} km`;
  return `${meters} m`;
}

export default function LiveSessionWidget() {
  const [time, setTime] = useState(START_TIME_S);
  const [distance, setDistance] = useState(START_DISTANCE_M);
  const [finds, setFinds] = useState(START_FINDS);

  useEffect(() => {
    const tick = setInterval(() => {
      setTime((t) => t + 1);
      setDistance((d) => d + 1 + Math.floor(Math.random() * 2));
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    const find = setInterval(() => setFinds((f) => f + 1), 45000);
    return () => clearInterval(find);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="hud-glass inline-flex flex-col rounded-xl px-4 md:px-5 py-3 md:py-3.5 gap-2.5">
        {/* Primary row — dot · TIME · DIST · KPH */}
        <div className="flex items-center gap-3 md:gap-4">
          <span className="hud-rec-dot" aria-hidden />
          <HudCell value={formatTime(time)} label="TIME" />
          <HudDiv />
          <HudCell value={formatDistance(distance)} label="DIST" />
          <HudDiv />
          <HudCell value="3.8" label="KPH" />
        </div>

        {/* Expanded row — ALT · FINDS · HDG · ACC · COV */}
        <div className="flex items-center gap-3 md:gap-4 border-t border-white/10 pt-2.5">
          <HudCell value="312" label="ALT" />
          <HudDiv />
          <HudCell value={finds.toString()} label="FINDS" accent />
          <HudDiv />
          <HudCell value="314°" label="HDG" />
          <HudDiv />
          <HudCell value="4" label="ACC" success />
          <HudDiv />
          <HudCell value="84%" label="COV" accent />
        </div>
      </div>
    </div>
  );
}

function HudCell({
  value,
  label,
  accent,
  success,
}: {
  value: string;
  label: string;
  accent?: boolean;
  success?: boolean;
}) {
  const valueColor = accent
    ? "text-accent"
    : success
    ? "text-emerald-400"
    : "text-white/90";
  return (
    <div className="flex flex-col items-center min-w-[56px] md:min-w-[70px]">
      <span className={`font-mono font-black text-lg md:text-xl tabular-nums leading-none ${valueColor}`}>
        {value}
      </span>
      <span className="font-mono font-bold text-[9px] md:text-[10px] text-white/40 tracking-[0.15em] mt-1">
        {label}
      </span>
    </div>
  );
}

function HudDiv() {
  return <div className="w-px h-8 md:h-10 bg-white/10 shrink-0" aria-hidden />;
}
