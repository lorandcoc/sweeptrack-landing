"use client";

import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

const STEP_COLORS = ["#FFB000", "#00FF6A", "#00DDFF"] as const;

/* ── Step 1 vignette: forecast dial arc filling to 92 + a GO chip ── */
function ForecastVignette({ color }: { color: string }) {
  // Arc geometry: 180deg sweep over the top, radius 46, centred at (60,58).
  // Path length for the visible arc ≈ π·r ≈ 144.5; we draw it via dashoffset.
  const len = 144.5;
  return (
    <svg viewBox="0 0 120 78" className="hiwx-svg" role="img" aria-hidden="true">
      <path
        className="hiwx-dial-track"
        d="M14 58 A46 46 0 0 1 106 58"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        className="hiwx-dial-fill"
        d="M14 58 A46 46 0 0 1 106 58"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        style={{ strokeDasharray: len, strokeDashoffset: len }}
      />
      {/* Needle ticks */}
      <g className="hiwx-dial-ticks" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
        <line x1="60" y1="14" x2="60" y2="20" />
        <line x1="32" y1="22" x2="36" y2="27" />
        <line x1="88" y1="22" x2="84" y2="27" />
      </g>
      <text x="60" y="52" className="hiwx-dial-num" fill={color} textAnchor="middle">92</text>
      <g className="hiwx-go-chip">
        <rect x="46" y="60" width="28" height="14" rx="7" fill={color} />
        <text x="60" y="70" className="hiwx-go-label" textAnchor="middle">GO</text>
      </g>
    </svg>
  );
}

/* ── Step 2 vignette: a sweep-lane track drawing itself + a find pin popping ── */
function SessionVignette({ color }: { color: string }) {
  // Serpentine sweep-lane path; ~310 units long.
  const len = 310;
  return (
    <svg viewBox="0 0 120 78" className="hiwx-svg" role="img" aria-hidden="true">
      <g className="hiwx-lane-grid" stroke={color} strokeWidth="0.5" opacity="0.12">
        <line x1="10" y1="20" x2="110" y2="20" />
        <line x1="10" y1="39" x2="110" y2="39" />
        <line x1="10" y1="58" x2="110" y2="58" />
      </g>
      <path
        className="hiwx-lane"
        d="M14 16 H100 Q108 16 108 26 Q108 35 100 35 H20 Q12 35 12 45 Q12 54 20 54 H102"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ strokeDasharray: len, strokeDashoffset: len }}
      />
      <g className="hiwx-find-pin">
        <circle cx="78" cy="54" r="9" fill="none" stroke={color} strokeWidth="1.5" opacity="0.5" />
        <circle cx="78" cy="54" r="4" fill={color} />
      </g>
    </svg>
  );
}

/* ── Step 3 vignette: two overlapping translucent tracks + a highlighted missed strip ── */
function ProofVignette({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 120 78" className="hiwx-svg" role="img" aria-hidden="true">
      {/* First visit */}
      <path
        className="hiwx-track hiwx-track--a"
        d="M22 18 H78 V40 H22 Z"
        fill={`${color}1f`}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Second visit, offset */}
      <path
        className="hiwx-track hiwx-track--b"
        d="M42 32 H98 V60 H42 Z"
        fill={`${color}1f`}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* The missed strip between them */}
      <rect className="hiwx-missed" x="22" y="40" width="20" height="20" rx="2" />
      <line
        className="hiwx-missed-x"
        x1="26" y1="44" x2="38" y2="56"
        stroke="#FF6B4A" strokeWidth="1.5" strokeLinecap="round"
      />
      <line
        className="hiwx-missed-x"
        x1="38" y1="44" x2="26" y2="56"
        stroke="#FF6B4A" strokeWidth="1.5" strokeLinecap="round"
      />
    </svg>
  );
}

const VIGNETTES = [ForecastVignette, SessionVignette, ProofVignette] as const;

export default function HowItWorks() {
  const { ref, visible } = useReveal(0.2);
  const { t } = useI18n();

  const steps = [1, 2, 3].map((n) => ({
    num: n,
    kicker: t(`howitworks.step${n}_kicker` as TranslationKey),
    title: t(`howitworks.step${n}_title` as TranslationKey),
    description: t(`howitworks.step${n}_description` as TranslationKey),
    color: STEP_COLORS[n - 1],
  }));

  return (
    <section className="py-16 md:py-20 relative">
      <div
        ref={ref}
        className={`hiwx-root max-w-5xl mx-auto px-6 reveal ${visible ? "visible" : ""} ${visible ? "hiwx-go" : ""}`}
      >
        <div className="text-center mb-14">
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">{t("howitworks.label")}</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {t("howitworks.heading_prefix")}
            <span className="text-accent">{t("howitworks.heading_accent")}</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">{t("howitworks.description")}</p>
        </div>

        <div className="relative">
          {/* Connecting rail: draws left→right (desktop) / top→bottom (mobile) as the section reveals */}
          <svg
            className="hiwx-rail hiwx-rail--h"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              className="hiwx-rail-line"
              x1="2" y1="2" x2="998" y2="2"
              stroke="url(#hiwx-rail-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={1000}
              style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
            />
            <defs>
              <linearGradient id="hiwx-rail-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFB000" />
                <stop offset="50%" stopColor="#00FF6A" />
                <stop offset="100%" stopColor="#00DDFF" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
            {steps.map((step, i) => (
              <article
                key={step.num}
                className="hiwx-card relative flex flex-col"
                style={
                  {
                    "--hiwx-color": step.color,
                    "--hiwx-delay": `${i * 320 + 120}ms`,
                  } as React.CSSProperties
                }
              >
                {/* Step number badge — lights as the rail passes it */}
                <span className="hiwx-num" aria-hidden="true">
                  <span className="hiwx-num__digit">{step.num}</span>
                </span>

                {/* Animated SVG vignette */}
                <div className="hiwx-vignette">{VIGNETTES[i]({ color: step.color })}</div>

                <p className="hiwx-kicker font-mono">{step.kicker}</p>
                <h3 className="hiwx-title font-display">{step.title}</h3>
                <p className="hiwx-desc text-sm">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
