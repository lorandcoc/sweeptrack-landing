"use client";

import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";

/*
 * Tracking-engine spotlight: the same sweep-lane walk recorded twice.
 * Left half  — raw GPS: jitter, spikes, two teleport jumps, start-knot scribble.
 * Right half — SweepTrack: clean serpentine lanes from one crisp start dot.
 * The noise is baked into hand-written path data; both halves draw together
 * via stroke-dashoffset (6s draw + 3s hold, looped — see sex-* CSS).
 */

/* Clean serpentine sweep lanes — 5 passes with rounded turns. */
const CLEAN_PATH =
  "M 30 30 L 162 30 Q 170 30 170 38 L 170 48 Q 170 56 162 56 " +
  "L 38 56 Q 30 56 30 64 L 30 74 Q 30 82 38 82 " +
  "L 162 82 Q 170 82 170 90 L 170 100 Q 170 108 162 108 " +
  "L 38 108 Q 30 108 30 116 L 30 126 Q 30 134 38 134 L 162 134";

/* Raw recording, split into sequenced segments so the two teleport
 * jumps can be styled dimmer while staying one continuous timeline. */
const RAW_KNOT =
  "M 30 30 C 24 22 36 18 38 26 C 40 33 28 35 25 28 C 22 21 33 17 35 24 C 37 30 30 33 31 30";
const RAW_SEG_A =
  "M 31 30 L 40 27 L 49 33 L 57 26 L 66 32 L 74 16 L 83 31 L 91 27 L 99 34 " +
  "L 107 26 L 116 33 L 124 28 L 133 35 L 141 27 L 150 32 L 158 27 L 166 33 " +
  "L 171 41 L 167 50 L 158 54 L 149 59 L 140 53 L 131 66 L 122 54 L 113 60 L 104 54 L 100 57";
const RAW_TELEPORT_1 = "M 100 57 L 178 12 L 108 60";
const RAW_SEG_B =
  "M 108 60 L 98 55 L 89 61 L 80 54 L 71 62 L 62 55 L 53 61 L 44 55 L 36 61 " +
  "L 29 67 L 31 76 L 39 83 L 48 79 L 57 86 L 66 79 L 75 87 L 84 80 L 93 96 " +
  "L 102 80 L 111 87 L 120 81 L 129 88 L 138 80 L 147 87 L 156 81 L 165 86 " +
  "L 171 94 L 168 102 L 159 107 L 150 112 L 141 105 L 132 112 L 123 118 " +
  "L 114 111 L 105 105 L 96 112 L 87 106 L 78 111 L 70 108";
const RAW_TELEPORT_2 = "M 70 108 L 10 152 L 62 112";
const RAW_SEG_C =
  "M 62 112 L 53 105 L 44 112 L 36 106 L 29 113 L 27 122 L 33 130 L 42 137 " +
  "L 51 131 L 60 138 L 69 130 L 78 137 L 87 131 L 96 146 L 105 130 L 114 137 " +
  "L 123 132 L 132 139 L 141 130 L 150 137 L 158 131 L 164 136";

const BULLET_KEYS = [
  "spotlight.engine_b1",
  "spotlight.engine_b2",
  "spotlight.engine_b3",
  "spotlight.engine_b4",
] as const;

const RAW_LABEL_COLOR = "#FF8585";
const RAW_READOUT_COLOR = "#FF7A7A";

export default function SpotlightEngine() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-10 items-center reveal ${visible ? "visible" : ""}`}
    >
      {/* ── Copy (left on desktop) ── */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
          {t("spotlight.engine_kicker")}
        </p>
        <h3 className="font-display text-2xl md:text-3xl leading-tight mb-4 [text-wrap:balance]">
          {t("spotlight.engine_title")}
        </h3>
        <p className="text-muted text-base leading-relaxed mb-6">
          {t("spotlight.engine_desc")}
        </p>
        <ul className="space-y-3">
          {BULLET_KEYS.map((key) => (
            <li
              key={key}
              className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed"
            >
              <span
                className="mt-0.5 w-5 h-5 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent"
                aria-hidden="true"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {t(key)}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Demo (right on desktop) ── */}
      <div>
        <div className="relative">
          <div
            className={`sex-demo rounded-2xl border border-white/[0.08] bg-[#0A0A18] overflow-hidden ${visible ? "sex-run" : ""}`}
          >
            <div className="sex-grid grid grid-cols-2">
              {/* Raw GPS half */}
              <div className="px-3 pt-4 pb-4 sm:px-5">
                <p
                  className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] mb-3 flex items-center gap-2"
                  style={{ color: RAW_LABEL_COLOR }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#FF5C5C" }}
                    aria-hidden="true"
                  />
                  {t("spotlight.engine_demo_raw")}
                </p>
                <svg viewBox="0 0 200 164" className="w-full h-auto" aria-hidden="true">
                  <path d={RAW_KNOT} pathLength={1} className="sex-path sex-raw sex-k" />
                  <path d={RAW_SEG_A} pathLength={1} className="sex-path sex-raw sex-a" />
                  <path d={RAW_TELEPORT_1} pathLength={1} className="sex-path sex-raw-dim sex-t1" />
                  <path d={RAW_SEG_B} pathLength={1} className="sex-path sex-raw sex-b" />
                  <path d={RAW_TELEPORT_2} pathLength={1} className="sex-path sex-raw-dim sex-t2" />
                  <path d={RAW_SEG_C} pathLength={1} className="sex-path sex-raw sex-c" />
                </svg>
                <p
                  className="sex-readout font-mono font-semibold text-base sm:text-lg text-center mt-3"
                  style={{ color: RAW_READOUT_COLOR }}
                >
                  5.8 km
                </p>
              </div>

              {/* SweepTrack half */}
              <div className="px-3 pt-4 pb-4 sm:px-5 border-l border-white/[0.08]">
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-accent mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-accent" aria-hidden="true" />
                  {t("spotlight.engine_demo_filtered")}
                </p>
                <svg viewBox="0 0 200 164" className="w-full h-auto" aria-hidden="true">
                  <circle cx="30" cy="30" r="3" fill="var(--st-accent)" />
                  <circle
                    cx="30"
                    cy="30"
                    r="6.5"
                    fill="none"
                    stroke="var(--st-accent)"
                    strokeOpacity="0.35"
                    strokeWidth="1"
                  />
                  <path d={CLEAN_PATH} pathLength={1} className="sex-path sex-clean sex-cl" />
                </svg>
                <p className="sex-readout font-mono font-semibold text-base sm:text-lg text-center mt-3 text-accent stat-glow">
                  4.2 km
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="font-mono text-xs text-muted text-center mt-4 tracking-wide">
          {t("spotlight.engine_demo_label")}
        </p>
      </div>
    </div>
  );
}
