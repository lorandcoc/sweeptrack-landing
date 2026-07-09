"use client";

import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Outcomes — the homepage hub. Five outcome cards, each routing to a dedicated
 * feature page (the spokes). This replaces the old long-scroll feature dump:
 * the homepage introduces the jobs, the spoke pages do the deep selling.
 */

type Card = { key: string; href: string; accent: string; icon: React.ReactNode };

const CARDS: Card[] = [
  {
    key: "coverage",
    href: "/coverage",
    accent: "#00FF6A",
    icon: (
      <>
        <path d="M4 18c3-8 5-8 8 0s5 8 8 0" />
        <circle cx="4" cy="18" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="20" cy="18" r="1.4" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    key: "overlays",
    href: "/overlays",
    accent: "#00DDFF",
    icon: (
      <>
        <path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3V7z" />
        <path d="M9 4v13m6-10v13" />
      </>
    ),
  },
  {
    key: "finds",
    href: "/finds-intelligence",
    accent: "#FFB000",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3M11 8v6m-3-3h6" />
      </>
    ),
  },
  {
    key: "radar",
    href: "/radar",
    accent: "#A78BFA",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    key: "permissions",
    href: "/permissions",
    accent: "#FF6B4A",
    icon: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

function OutcomeCard({ card, index }: { card: Card; index: number }) {
  const { t } = useI18n();
  return (
    <a
      href={card.href}
      className="group h-full flex flex-col p-6 rounded-2xl bg-surface/50 border border-white/[0.06] hover:border-white/[0.16] hover:bg-surface/80 transition-all hover:-translate-y-0.5 starting:opacity-0 starting:scale-95 duration-300"
      style={{ transitionDelay: `${Math.min(index * 50, 250)}ms` }}
    >
      <span
        className="inline-flex items-center justify-center w-11 h-11 rounded-xl border mb-4"
        style={{ color: card.accent, borderColor: `${card.accent}40`, background: `${card.accent}14` }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {card.icon}
        </svg>
      </span>
      <h3 className="font-display text-xl mb-2">{t(`outcomes.${card.key}_title` as TranslationKey)}</h3>
      <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{t(`outcomes.${card.key}_desc` as TranslationKey)}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: card.accent }}>
        {t("outcomes.link")}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  );
}

export default function Outcomes() {
  const { ref, visible } = useReveal();
  const { t } = useI18n();
  return (
    <section id="outcomes" className="py-20 md:py-28 cv-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-14 md:mb-16 reveal ${visible ? "visible" : ""}`}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">{t("outcomes.kicker")}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight [text-wrap:balance] mb-5">
            {t("outcomes.heading_prefix")}
            <span className="text-accent">{t("outcomes.heading_accent")}</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">{t("outcomes.description")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CARDS.map((card, i) => (
            <OutcomeCard key={card.key} card={card} index={i} />
          ))}
          {/* Sixth cell: catch-all to the full feature list */}
          <a
            href="/features"
            className="group h-full flex flex-col justify-center p-6 rounded-2xl border border-dashed border-white/[0.12] hover:border-accent/40 hover:bg-surface/40 transition-all text-center starting:opacity-0 starting:scale-95 duration-300"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="font-display text-xl mb-1">{t("outcomes.more_title")}</span>
            <span className="text-muted text-sm mb-3">{t("outcomes.more_desc")}</span>
            <span className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-accent">
              {t("outcomes.more_link")}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
