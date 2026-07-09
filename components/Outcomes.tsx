"use client";

import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Outcomes — the homepage hub. A 2-up grid of feature cards, each with a live
 * looping visual header + a bulleted detail list, routing to a spoke page.
 * Visuals are aspect-robust (mostly %/centered; the line/polygon SVGs stretch
 * with preserveAspectRatio="none"), so nothing crops in a landscape header.
 */

/* ─── per-card looping visuals (pure CSS/SVG, accent-driven via --ocv) ─── */

function CoverageViz() {
  return (
    <div className="ocv-fill" aria-hidden="true">
      <svg className="ocv-svg" viewBox="0 0 300 130" fill="none" preserveAspectRatio="none">
        <path className="ocv-cov" d="M0 100 C45 30 75 30 120 100 S195 30 240 100 S300 70 300 70" />
      </svg>
      <span className="ocv-covpin" style={{ left: "20%", top: "38%" }} />
      <span className="ocv-covpin ocv-covpin--2" style={{ left: "60%", top: "38%" }} />
    </div>
  );
}

function OverlaysViz() {
  return (
    <div className="ocv-fill" aria-hidden="true">
      <span className="ocv-ovbase" />
      <span className="ocv-ovtile" />
    </div>
  );
}

const FIND_DOTS = [
  { x: 20, y: 30 }, { x: 40, y: 66 }, { x: 64, y: 38, hot: true }, { x: 72, y: 58, hot: true },
  { x: 30, y: 80 }, { x: 84, y: 28 }, { x: 52, y: 72 }, { x: 58, y: 48, hot: true }, { x: 15, y: 52 },
];

function FindsViz() {
  return (
    <div className="ocv-fill" aria-hidden="true">
      <span className="ocv-hotring" />
      {FIND_DOTS.map((d, i) => (
        <span key={i} className={`ocv-finddot${d.hot ? " ocv-finddot--hot" : ""}`} style={{ left: `${d.x}%`, top: `${d.y}%` }} />
      ))}
    </div>
  );
}

function RadarViz() {
  return (
    <div className="ocv-fill" aria-hidden="true">
      <span className="ocv-rring" />
      <span className="ocv-rring" />
      <span className="ocv-rring" />
      <span className="ocv-rsweep" />
      <span className="ocv-rcore" />
      <span className="ocv-rmember ocv-rmember--1" />
      <span className="ocv-rmember ocv-rmember--2" />
    </div>
  );
}

function PermissionsViz() {
  return (
    <div className="ocv-fill" aria-hidden="true">
      <svg className="ocv-svg" viewBox="0 0 240 150" fill="none" preserveAspectRatio="none">
        <polygon className="ocv-poly" points="45,30 200,42 210,120 65,132 32,80" />
      </svg>
      <span className="ocv-walker" />
      <span className="ocv-alert" />
    </div>
  );
}

const VIZ: Record<string, React.ReactNode> = {
  coverage: <CoverageViz />,
  overlays: <OverlaysViz />,
  finds: <FindsViz />,
  radar: <RadarViz />,
  permissions: <PermissionsViz />,
};

type Card = { key: string; href: string; accent: string; icon: React.ReactNode };

const CARDS: Card[] = [
  { key: "coverage", href: "/coverage", accent: "#00FF6A", icon: (<><path d="M4 18c3-8 5-8 8 0s5 8 8 0" /><circle cx="4" cy="18" r="1.6" fill="currentColor" stroke="none" /><circle cx="20" cy="18" r="1.6" fill="currentColor" stroke="none" /></>) },
  { key: "overlays", href: "/overlays", accent: "#00DDFF", icon: (<><path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3V7z" /><path d="M9 4v13m6-10v13" /></>) },
  { key: "finds", href: "/finds-intelligence", accent: "#FFB000", icon: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v6m-3-3h6" /></>) },
  { key: "radar", href: "/radar", accent: "#A78BFA", icon: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" /></>) },
  { key: "permissions", href: "/permissions", accent: "#FF6B4A", icon: (<><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></>) },
];

const BULLETS = ["b1", "b2", "b3", "b4"] as const;

function OutcomeCard({ card, index }: { card: Card; index: number }) {
  const { t } = useI18n();
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={`h-full reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: visible ? `${Math.min(index * 70, 280)}ms` : "0ms" }}
    >
      <a
        href={card.href}
        className="group flex flex-col h-full rounded-3xl border border-white/[0.07] bg-surface/40 overflow-hidden transition-all hover:-translate-y-1 hover:border-white/[0.16] hover:bg-surface/70"
      >
        {/* Visual header */}
        <div className="ocv-panel h-36 md:h-40 shrink-0" style={{ ["--ocv" as string]: card.accent }}>
          {VIZ[card.key]}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 md:p-7">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl border shrink-0"
              style={{ color: card.accent, borderColor: `${card.accent}45`, background: `${card.accent}16` }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {card.icon}
              </svg>
            </span>
            <h3 className="font-display text-xl md:text-2xl leading-tight">
              {t(`outcomes.${card.key}_title` as TranslationKey)}
            </h3>
          </div>
          <p className="text-muted text-sm leading-relaxed mb-4">
            {t(`outcomes.${card.key}_desc` as TranslationKey)}
          </p>
          <ul className="space-y-2 mb-5">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-white/85 leading-relaxed">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[3px]" style={{ color: card.accent }} aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {t(`outcomes.${card.key}_${b}` as TranslationKey)}
              </li>
            ))}
          </ul>
          <span className="mt-auto inline-flex items-center gap-2 text-[15px] font-semibold" style={{ color: card.accent }}>
            {t("outcomes.link")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </a>
    </div>
  );
}

export default function Outcomes() {
  const { ref, visible } = useReveal();
  const { t } = useI18n();
  return (
    <section id="outcomes" className="py-20 md:py-28 cv-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-12 md:mb-16 reveal ${visible ? "visible" : ""}`}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">{t("outcomes.kicker")}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight [text-wrap:balance] mb-5">
            {t("outcomes.heading_prefix")}
            <span className="text-accent">{t("outcomes.heading_accent")}</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">{t("outcomes.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          {CARDS.map((card, i) => (
            <OutcomeCard key={card.key} card={card} index={i} />
          ))}

          {/* Everything else — fills the sixth cell */}
          <a
            href="/features"
            className="group flex flex-col items-center justify-center text-center h-full min-h-[220px] rounded-3xl border border-dashed border-white/[0.14] p-8 hover:border-accent/40 hover:bg-surface/40 transition-all"
          >
            <span className="font-display text-2xl mb-2">{t("outcomes.more_title")}</span>
            <span className="text-muted text-sm md:text-base mb-4">{t("outcomes.more_desc")}</span>
            <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-accent">
              {t("outcomes.more_link")}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
