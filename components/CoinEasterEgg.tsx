"use client";

import { useState, useRef, useCallback } from "react";
import { useI18n } from "@/lib/i18n";

/**
 * A faint half-buried coin tucked in the bottom-right of its parent. Mostly
 * decorative — a reward for the curious. Hover sends a specular glint across
 * the worn face; click pings a ripple and surfaces a mono "find" toast for 4s.
 *
 * Mount this inside a position:relative wrapper (the CTA section). It's an
 * absolutely-positioned <button>, so it needs a positioned ancestor to anchor
 * to the bottom-right corner.
 */
export default function CoinEasterEgg() {
  const { t } = useI18n();
  const [toast, setToast] = useState(false);
  const [pinging, setPinging] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const dig = useCallback(() => {
    // Reset any in-flight timers so rapid clicks restart the sequence cleanly.
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setPinging(false);
    // Force a reflow-friendly restart of the ping ripple.
    requestAnimationFrame(() => setPinging(true));
    setToast(true);
    timers.current.push(setTimeout(() => setToast(false), 4000));
    timers.current.push(setTimeout(() => setPinging(false), 900));
  }, []);

  return (
    <button
      type="button"
      onClick={dig}
      aria-label={t("egg.aria")}
      className="ctx-coin"
    >
      {pinging && <span className="ctx-coin__ping" aria-hidden="true" />}

      {/* Worn coin profile — low opacity, slight tilt, suggests it's half in the dirt. */}
      <svg
        className="ctx-coin__disc"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ctxCoinFace" cx="38%" cy="34%" r="75%">
            <stop offset="0%" stopColor="#FFD98A" />
            <stop offset="55%" stopColor="#C9971F" />
            <stop offset="100%" stopColor="#7A5A11" />
          </radialGradient>
        </defs>
        <circle cx="14" cy="14" r="12.5" fill="url(#ctxCoinFace)" stroke="#5C420C" strokeWidth="1" />
        <circle cx="14" cy="14" r="9.5" fill="none" stroke="#5C420C" strokeWidth="0.8" opacity="0.55" />
        {/* Worn profile suggestion — a faded raised bust + a couple of wear marks. */}
        <path
          d="M14 8.5c2.1 0 3.6 1.7 3.6 3.8 0 1.5-.8 2.7-2 3.4 2 .5 3.2 1.7 3.6 3.3-1.5 1-3.3 1.4-5.2 1.4s-3.7-.4-5.2-1.4c.4-1.6 1.6-2.8 3.6-3.3-1.2-.7-2-1.9-2-3.4 0-2.1 1.5-3.8 3.6-3.8z"
          fill="#6B4E0E"
          opacity="0.5"
        />
        <path d="M9 11.5l1.6 .6M19 11.5l-1.6 .6" stroke="#5C420C" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
        {/* Glint sweep — masked to the coin face, driven on hover. */}
        <g className="ctx-coin__glint">
          <rect x="-14" y="-2" width="8" height="32" fill="#FFFBE6" opacity="0.85" transform="rotate(18 14 14)" />
        </g>
      </svg>

      {toast && (
        <span className="ctx-coin__toast font-mono" role="status">
          {t("egg.toast")}
        </span>
      )}
    </button>
  );
}
