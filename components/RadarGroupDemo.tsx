"use client";

import type { CSSProperties } from "react";
import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";

/*
 * Live group map demo — a self-running 15s choreography:
 *   t≈2.1s  amber member drops a "Look here" ping at the NE waypoint
 *   t≈7.2s  second ping at the lower waypoint
 *   t≈9.0s  violet member triggers SOS — the other paths bend toward it
 *   (the convergence is baked into each member's offset-path)
 * Every animated element declares its keyframes + phase on the shared
 * timeline via CSS custom properties consumed by `.rgx-live .rgx-anim`.
 */
const tl = (name: string, delay: string) =>
  ({ "--rgx-anim": name, "--rgx-delay": delay }) as CSSProperties;

export default function RadarGroupDemo() {
  const { t } = useI18n();
  const { ref, visible } = useReveal(0.15);

  return (
    <div ref={ref} className={`rgx-map ${visible ? "rgx-live" : ""}`}>
      <svg viewBox="0 0 640 440" aria-hidden="true" focusable="false">
        {/* Faint terrain contours */}
        <g fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1">
          <path d="M-20 84 C 70 58 150 104 238 82 C 326 60 388 96 472 80 C 544 66 604 88 660 74" />
          <path d="M-20 158 C 84 138 152 184 252 166 C 352 148 420 188 520 172 C 584 162 632 176 660 168" />
          <path d="M-20 244 C 60 224 140 264 232 252 C 330 238 402 274 502 260 C 572 250 624 264 660 254" />
          <path d="M-20 330 C 84 310 168 352 268 338 C 368 324 442 356 542 344 C 602 337 644 346 660 340" />
          <path d="M-20 408 C 90 392 180 424 290 412 C 390 401 470 428 580 416 C 620 412 650 418 660 414" />
          <path d="M60 36 C 130 24 190 52 250 38" stroke="rgba(255,255,255,0.04)" />
          <path d="M380 26 C 450 16 520 40 600 28" stroke="rgba(255,255,255,0.04)" />
        </g>
        {/* Hairline survey grid */}
        <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
          <line x1="213" y1="0" x2="213" y2="440" />
          <line x1="427" y1="0" x2="427" y2="440" />
          <line x1="0" y1="147" x2="640" y2="147" />
          <line x1="0" y1="293" x2="640" y2="293" />
        </g>
        {/* Faint water patch */}
        <ellipse cx="566" cy="402" rx="92" ry="26" fill="rgba(0,221,255,0.045)" />

        {/* Shared waypoint diamonds */}
        <g fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2">
          <rect x="-3.5" y="-3.5" width="7" height="7" transform="translate(505 205) rotate(45)" />
          <rect x="-3.5" y="-3.5" width="7" height="7" transform="translate(450 284) rotate(45)" />
          <rect x="-3.5" y="-3.5" width="7" height="7" transform="translate(320 200) rotate(45)" />
        </g>

        {/* Base point — green flag pin */}
        <g transform="translate(95 350)">
          <circle r="7" fill="none" stroke="rgba(0,255,106,0.3)" strokeWidth="1" />
          <circle r="3" fill="#00FF6A" />
          <line x1="0" y1="-3" x2="0" y2="-24" stroke="#00FF6A" strokeWidth="1.5" />
          <path d="M0 -24 L15 -19.5 L0 -15 Z" fill="#00FF6A" opacity="0.85" />
        </g>

        {/* Ping bloom 1 — three expanding rings at the NE waypoint */}
        <g fill="none" stroke="#FFB000" strokeWidth="1.5">
          <circle className="rgx-ring rgx-anim" style={tl("rgx-ping", "2.1s")} cx="505" cy="205" r="34" />
          <circle className="rgx-ring rgx-anim" style={tl("rgx-ping", "2.45s")} cx="505" cy="205" r="34" />
          <circle className="rgx-ring rgx-anim" style={tl("rgx-ping", "2.8s")} cx="505" cy="205" r="34" />
        </g>
        {/* Ping bloom 2 */}
        <g fill="none" stroke="#FFB000" strokeWidth="1.5">
          <circle className="rgx-ring rgx-anim" style={tl("rgx-ping", "7.2s")} cx="450" cy="284" r="34" />
          <circle className="rgx-ring rgx-anim" style={tl("rgx-ping", "7.55s")} cx="450" cy="284" r="34" />
          <circle className="rgx-ring rgx-anim" style={tl("rgx-ping", "7.9s")} cx="450" cy="284" r="34" />
        </g>
        {/* SOS — red double-pulse rings at the violet member */}
        <g fill="none" stroke="#FF5C5C" strokeWidth="1.6">
          <circle className="rgx-ring rgx-anim" style={tl("rgx-sos", "9s")} cx="460" cy="318" r="42" />
          <circle className="rgx-ring rgx-anim" style={tl("rgx-sos", "9.3s")} cx="460" cy="318" r="42" />
        </g>

        {/* Members — gliding on looping offset-paths (see rgx-mem--* CSS) */}
        <g className="rgx-mem rgx-mem--cyan rgx-anim" style={tl("rgx-travel", "0s")}>
          <circle r="11" fill="none" stroke="rgba(0,221,255,0.3)" strokeWidth="1" />
          <circle r="6.5" fill="#00DDFF" stroke="#050510" strokeWidth="2" />
        </g>
        <g className="rgx-mem rgx-mem--amber rgx-anim" style={tl("rgx-travel", "0s")}>
          <circle r="11" fill="none" stroke="rgba(255,176,0,0.3)" strokeWidth="1" />
          <circle r="6.5" fill="#FFB000" stroke="#050510" strokeWidth="2" />
        </g>
        <g className="rgx-mem rgx-mem--violet rgx-anim" style={tl("rgx-travel", "0s")}>
          <circle r="11" fill="none" stroke="rgba(167,139,250,0.35)" strokeWidth="1" />
          <circle r="6.5" fill="#A78BFA" stroke="#050510" strokeWidth="2" />
        </g>
        {/* You — green dot with heading wedge (offset-rotate: auto turns it) */}
        <g className="rgx-mem rgx-mem--you rgx-anim" style={tl("rgx-travel", "0s")}>
          <circle r="12" fill="none" stroke="rgba(0,255,106,0.35)" strokeWidth="1" />
          <path d="M9 -5 L21 0 L9 5 Z" fill="rgba(0,255,106,0.6)" />
          <circle r="7" fill="#00FF6A" stroke="#050510" strokeWidth="2" />
        </g>
      </svg>

      {/* Daylight chip — top-right */}
      <span className="rgx-chip rgx-chip--day">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 18h16" />
          <path d="M8 18a4 4 0 0 1 8 0" />
          <path d="M12 9V6M6.6 11.6 4.9 9.9M17.4 11.6l1.7-1.7" />
        </svg>
        {t("radar.demo_leaveby")}
      </span>

      {/* Base label */}
      <span className="rgx-chip rgx-chip--base" style={{ left: "14.8%", top: "79.5%" }}>
        {t("radar.demo_base")}
      </span>

      {/* Floating ping chips — timed to the blooms */}
      <span
        className="rgx-chip rgx-chip--ping rgx-float rgx-float--up rgx-anim"
        style={{ left: "78.9%", top: "46.6%", ...tl("rgx-chip-rise", "2.2s") }}
      >
        {t("radar.demo_ping")}
      </span>
      <span
        className="rgx-chip rgx-chip--ping rgx-float rgx-float--up rgx-anim"
        style={{ left: "70.3%", top: "64.5%", ...tl("rgx-chip-rise", "7.3s") }}
      >
        {t("radar.demo_ping")}
      </span>

      {/* SOS chip — sits below the violet member during the alert window */}
      <span
        className="rgx-chip rgx-chip--sos rgx-float rgx-float--down rgx-anim"
        style={{ left: "71.9%", top: "72.3%", ...tl("rgx-chip-sos", "9.05s") }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3 22 20H2Z" />
          <path d="M12 9v5M12 17.5v.01" />
        </svg>
        {t("radar.demo_sos")}
      </span>

      {/* HUD micro-labels — scale bar + coordinates */}
      <span className="rgx-coords" style={{ left: "12px", bottom: "10px" }}>
        <span className="rgx-scale" aria-hidden="true" />
        100 m
      </span>
      <span className="rgx-coords" style={{ right: "12px", bottom: "10px" }}>
        46°46′N · 23°36′E
      </span>
    </div>
  );
}
