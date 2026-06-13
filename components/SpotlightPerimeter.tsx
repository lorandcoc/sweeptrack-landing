"use client";

import type { CSSProperties } from "react";
import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Perimeter Guard spotlight — copy left, live boundary demo right.
 * The demo loops ~10s: the detectorist dot sweeps inside the drawn
 * boundary, drifts toward the east edge, escalates SAFE → CAUTION →
 * WARNING → TURN BACK, then retreats and the chip returns to SAFE.
 * All motion is CSS keyframes driven (offset-path motion path for the
 * dot, stroke-dashoffset for the painted track); the .spx-on class
 * added by the IntersectionObserver starts the timeline.
 */

/* The dot's wander route in SVG user units. Shared by the painted
   track <path d=…> and the dot's CSS motion path so they stay in sync. */
const WALK_PATH =
  "M150 150 C130 115 175 92 215 105 C255 118 240 168 200 185 C168 198 140 185 150 158 C165 130 230 120 268 130 C300 138 322 118 337 105 C320 130 280 160 240 170 C205 178 165 170 150 150";

/* Slightly irregular pentagon — the boundary drawn around the permitted field. */
const BOUNDARY_POINTS = "80,52 320,40 368,170 240,268 56,232";
const VERTICES: [number, number][] = [
  [80, 52],
  [320, 40],
  [368, 170],
  [240, 268],
  [56, 232],
];

const ZONES: {
  id: "safe" | "caution" | "warning" | "danger";
  labelKey: TranslationKey;
  dist: string | null;
}[] = [
  { id: "safe", labelKey: "spotlight.perim_zone_safe", dist: null },
  { id: "caution", labelKey: "spotlight.perim_zone_caution", dist: "15 m" },
  { id: "warning", labelKey: "spotlight.perim_zone_warning", dist: "8 m" },
  { id: "danger", labelKey: "spotlight.perim_zone_danger", dist: "0 m" },
];

const BULLETS: TranslationKey[] = [
  "spotlight.perim_b1",
  "spotlight.perim_b2",
  "spotlight.perim_b3",
  "spotlight.perim_b4",
];

/* Two staggered arc rings = the haptic "tap" radiating from the dot. */
function HapticArcs({ tone }: { tone: "warn" | "danger" }) {
  return (
    <g className={`spx-arcs spx-arcs--${tone}`}>
      <circle className="spx-arc" r="9" pathLength={100} strokeDasharray="16 34" strokeDashoffset="8" />
      <circle className="spx-arc spx-arc--2" r="13" pathLength={100} strokeDasharray="16 34" strokeDashoffset="33" />
    </g>
  );
}

export default function SpotlightPerimeter() {
  const { t } = useI18n();
  const { ref, visible } = useReveal(0.15);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible spx-on" : ""} grid md:grid-cols-2 gap-10 items-center`}
    >
      {/* ── Copy column ── */}
      <div className="order-1">
        <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] text-accent mb-3">
          {t("spotlight.perim_kicker")}
        </p>
        <h3 className="font-display text-2xl md:text-3xl leading-tight mb-4 [text-wrap:balance]">
          {t("spotlight.perim_title")}
        </h3>
        <p className="text-muted text-base leading-relaxed mb-6">{t("spotlight.perim_desc")}</p>
        <ul className="space-y-3">
          {BULLETS.map((k) => (
            <li key={k} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3.5 8.5l3 3 6-7" stroke="var(--st-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm md:text-[15px] text-muted leading-relaxed">{t(k)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Demo column ── */}
      <div className="order-2">
        <div className="spx-demo spx-panel relative rounded-2xl overflow-hidden">
          <svg
            className="spx-svg block w-full h-auto"
            viewBox="0 0 400 300"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <pattern id="spx-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0v28" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
              </pattern>
            </defs>

            {/* field background */}
            <rect width="400" height="300" fill="url(#spx-grid)" />
            <path d="M-10 70 C60 40 130 78 200 52 C260 32 320 60 410 38" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <path d="M252 224 C282 202 332 212 342 240 C350 264 304 282 272 268 C246 257 230 240 252 224 Z" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <path d="M-10 256 C60 236 110 262 170 248" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

            {/* boundary: soft glow underlay + dashed drawn line + vertices */}
            <polygon points={BOUNDARY_POINTS} fill="rgba(0,255,106,0.035)" stroke="rgba(0,255,106,0.12)" strokeWidth="5" strokeLinejoin="round" />
            <polygon className="spx-bound" points={BOUNDARY_POINTS} fill="none" stroke="var(--st-accent)" strokeWidth="1.5" strokeDasharray="7 5" strokeLinejoin="round" />
            {VERTICES.map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#050510" stroke="var(--st-accent)" strokeWidth="1.2" />
            ))}

            {/* the edge segment that flashes red at TURN BACK */}
            <line className="spx-edge" x1="320" y1="40" x2="368" y2="170" stroke="#FF4D4D" strokeWidth="2.5" strokeLinecap="round" />

            {/* track painting itself behind the dot */}
            <path
              className="spx-track"
              d={WALK_PATH}
              pathLength={100}
              fill="none"
              stroke="rgba(0,255,106,0.28)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="100"
              strokeDashoffset="100"
            />

            {/* HUD furniture: scale bar, coordinates, compass arrow */}
            <g className="spx-microtext">
              <line x1="18" y1="281" x2="58" y2="281" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="18" y1="277" x2="18" y2="285" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="58" y1="277" x2="58" y2="285" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <text x="66" y="284">15 m</text>
              <text x="386" y="284" textAnchor="end">47°41′22″N · 23°05′08″E</text>
              <line x1="22" y1="42" x2="22" y2="26" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <path d="M22 20l-4.5 9 4.5-3 4.5 3z" fill="rgba(255,255,255,0.3)" />
            </g>

            {/* detectorist dot + haptic arcs, moved along WALK_PATH via CSS motion path */}
            <g
              className="spx-dot"
              style={{ offsetPath: `path("${WALK_PATH}")`, offsetRotate: "0deg" } as CSSProperties}
            >
              <HapticArcs tone="warn" />
              <HapticArcs tone="danger" />
              <circle className="spx-dotGlow" r="9" />
              <circle className="spx-dotCore" r="3.5" />
            </g>
          </svg>

          {/* zone chip stack — exactly one visible per phase (decorative, flips too fast for AT) */}
          <div className="spx-chips" aria-hidden="true">
            {ZONES.map((z) => (
              <span key={z.id} className={`spx-chip spx-chip--${z.id}`}>
                <span className="spx-chip__dot" />
                <span>{t(z.labelKey)}</span>
                {z.dist && <span className="spx-chip__dist">{z.dist}</span>}
              </span>
            ))}
          </div>

          {/* live-demo badge */}
          <span className="spx-badge">
            <span className="spx-badge__dot" aria-hidden="true" />
            {t("spotlight.demo_badge")}
          </span>
        </div>
      </div>
    </div>
  );
}
