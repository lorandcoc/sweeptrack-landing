"use client";

import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Outcomes — the homepage hub. Five large, full-width feature panels, each with
 * a live looping mini-visual + a bulleted detail list, alternating left/right,
 * routing to a dedicated spoke page. The energy of the old spotlight rows, but
 * the deep demos still live on the linked pages.
 */

/* ─── per-card looping visuals (pure CSS/SVG, accent-driven via --ocv) ─── */

function CoverageViz() {
  return (
    <svg className="ocv-svg" viewBox="0 0 240 170" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="ocv-grid" strokeWidth="1">
        <path d="M0 45H240M0 85H240M0 125H240" />
      </g>
      <path className="ocv-cov" d="M18 138 C48 42 78 42 108 138 S168 42 198 138 S240 98 240 98" strokeLinecap="round" fill="none" />
      <circle className="ocv-covpin ocv-covpin--1" cx="63" cy="60" r="4" />
      <circle className="ocv-covpin ocv-covpin--2" cx="153" cy="60" r="4" />
    </svg>
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
  { x: 20, y: 32 }, { x: 40, y: 64 }, { x: 66, y: 40, hot: true }, { x: 72, y: 55, hot: true },
  { x: 30, y: 80 }, { x: 82, y: 30 }, { x: 55, y: 70 }, { x: 60, y: 46, hot: true }, { x: 16, y: 54 },
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
      <svg className="ocv-svg" viewBox="0 0 240 170" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <polygon className="ocv-poly" points="55,35 195,50 205,130 70,140 40,90" />
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

function OutcomePanel({ card, index }: { card: Card; index: number }) {
  const { t } = useI18n();
  const { ref, visible } = useReveal(0.12);
  const flip = index % 2 === 1;
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: visible ? `${Math.min(index * 70, 300)}ms` : "0ms" }}
    >
      <a
        href={card.href}
        className="group block rounded-3xl border border-white/[0.07] bg-surface/40 overflow-hidden transition-all hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-surface/70"
      >
        <div className="grid md:grid-cols-2 items-stretch">
          {/* Content */}
          <div className={`p-7 md:p-10 flex flex-col justify-center ${flip ? "md:order-2" : ""}`}>
            <span
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border mb-5"
              style={{ color: card.accent, borderColor: `${card.accent}45`, background: `${card.accent}16` }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {card.icon}
              </svg>
            </span>
            <h3 className="font-display text-2xl md:text-3xl leading-tight mb-3 [text-wrap:balance]">
              {t(`outcomes.${card.key}_title` as TranslationKey)}
            </h3>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6 max-w-md">
              {t(`outcomes.${card.key}_desc` as TranslationKey)}
            </p>
            <ul className="space-y-2.5 mb-7">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm md:text-[15px] text-white/85 leading-relaxed">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[3px]" style={{ color: card.accent }} aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {t(`outcomes.${card.key}_${b}` as TranslationKey)}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-2 text-base font-semibold" style={{ color: card.accent }}>
              {t("outcomes.link")}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </div>

          {/* Visual */}
          <div
            className={`ocv-panel ${flip ? "md:order-1" : ""}`}
            style={{ ["--ocv" as string]: card.accent }}
          >
            {VIZ[card.key]}
          </div>
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

        <div className="space-y-5 md:space-y-6">
          {CARDS.map((card, i) => (
            <OutcomePanel key={card.key} card={card} index={i} />
          ))}

          <a
            href="/features"
            className="group flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-dashed border-white/[0.14] px-7 py-6 md:px-10 md:py-7 hover:border-accent/40 hover:bg-surface/40 transition-all text-center sm:text-left"
          >
            <div>
              <span className="font-display text-xl md:text-2xl">{t("outcomes.more_title")}</span>
              <span className="text-muted text-sm md:text-base sm:ml-3 block sm:inline">{t("outcomes.more_desc")}</span>
            </div>
            <span className="inline-flex items-center gap-2 text-base font-semibold text-accent shrink-0">
              {t("outcomes.more_link")}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
