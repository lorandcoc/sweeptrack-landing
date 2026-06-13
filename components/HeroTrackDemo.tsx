"use client";

/**
 * HeroTrackDemo — absolutely-positioned SVG overlay that draws a realistic
 * detectorist sweep pattern on top of the phone screenshot. Tight overlapping
 * S-curves, the way you'd grid a field lane by lane. The line draws itself via
 * stroke-dashoffset (~12s loop), a brighter head dot leads it, and three find
 * pins pop with a ping ripple as the line passes them. Pointer-events-none so
 * it never blocks the phone parallax beneath it.
 *
 * Coordinate system: 300×600 viewBox mapped onto the phone frame (inset-0).
 * The path data is hand-authored to read as deliberate gridding, not noise.
 */

// Hand-authored gridding path: descending overlapping S-curves (serpentine
// lanes) covering the field, then a short return sweep up the right edge.
const SWEEP_PATH =
  "M 70 120 " +
  "C 110 110, 150 130, 190 120 " +
  "C 222 112, 236 142, 214 162 " +
  "C 178 178, 120 168, 80 178 " +
  "C 54 184, 52 214, 78 222 " +
  "C 128 232, 184 220, 220 232 " +
  "C 244 240, 244 270, 216 280 " +
  "C 170 292, 110 280, 74 292 " +
  "C 52 300, 54 328, 82 336 " +
  "C 134 346, 190 334, 224 346 " +
  "C 248 354, 244 384, 214 392 " +
  "C 168 402, 112 392, 80 404 " +
  "C 60 412, 62 438, 88 446 " +
  "C 140 456, 196 446, 226 458";

// Find pins, placed directly on the swept lanes so the head dot crosses them.
// `at` = fraction of the path length where the pin should pop (drives delay).
const PINS = [
  { x: 206, y: 156, at: 0.16, label: "Coin" },
  { x: 82, y: 332, at: 0.55, label: "Relic" },
  { x: 220, y: 454, at: 0.92, label: "Jewelry" },
];

const DUR = 12; // seconds for one full sweep

export default function HeroTrackDemo() {
  return (
    <div className="herox-overlay" aria-hidden="true">
      <svg
        viewBox="0 0 300 600"
        preserveAspectRatio="xMidYMid slice"
        className="herox-svg"
      >
        <defs>
          <filter id="herox-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="herox-head" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CFFFE0" stopOpacity="1" />
            <stop offset="40%" stopColor="#00FF6A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#00FF6A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Faint full-path ghost so the covered ground reads even before the
            line redraws on each loop. */}
        <path
          d={SWEEP_PATH}
          className="herox-ghost"
          fill="none"
          stroke="#00FF6A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* The animated sweep line — drawn via stroke-dashoffset. Also the
            single source of truth for the head-dot motion path (mpath ref). */}
        <path
          id="herox-track"
          d={SWEEP_PATH}
          className="herox-line"
          fill="none"
          stroke="#00FF6A"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#herox-glow)"
        />

        {/* Head dot riding the exact same path via SMIL animateMotion, kept in
            sync with the stroke draw. SMIL ignores prefers-reduced-motion, so
            the head group is hidden in that case via CSS on .herox-head-g. */}
        {/* keyTimes 0;0.88;1 + keyPoints 0;1;1 makes the dot reach the path
            end exactly when the stroke finishes drawing (88% of the loop), then
            hold at the end through the fade so it never runs ahead of the line. */}
        <g className="herox-head-g">
          <circle r="6" className="herox-headdot" fill="url(#herox-head)">
            <animateMotion dur={`${DUR}s`} repeatCount="indefinite" rotate="auto" keyPoints="0;1;1" keyTimes="0;0.88;1" calcMode="linear">
              <mpath href="#herox-track" />
            </animateMotion>
          </circle>
          <circle r="2.4" className="herox-headcore" fill="#EAFFF2">
            <animateMotion dur={`${DUR}s`} repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.88;1" calcMode="linear">
              <mpath href="#herox-track" />
            </animateMotion>
          </circle>
        </g>

        {/* Find pins — pop + ping ripple as the line reaches them. The pop
            timing for each pin lives in CSS (herox-pin--1/2/3), authored to
            match each pin's position along the 12s sweep. */}
        {PINS.map((p, i) => (
          <g
            key={i}
            className={`herox-pin herox-pin--${i + 1}`}
            transform={`translate(${p.x} ${p.y})`}
          >
            <circle className="herox-ping" r="6" fill="none" stroke="#00FF6A" strokeWidth="1.5" />
            <circle className="herox-pin-dot" r="5.5" fill="#00FF6A" />
            <circle className="herox-pin-core" r="2" fill="#06210F" />
          </g>
        ))}
      </svg>
    </div>
  );
}
