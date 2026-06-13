"use client";

import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";
import RadarGroupDemo from "./RadarGroupDemo";

/* Four field-useful pillars of Radar (live group positioning). Each maps to a
 * radar.feat_* key pair. SAFETY FIRST — order is load-bearing. */
const pillars: { key: string; icon: React.ReactNode }[] = [
  {
    key: "safety",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    key: "invite",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h3v3M21 21v.01M17 21h.01M21 17h.01" />
      </svg>
    ),
  },
  {
    key: "collab",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 2a8 8 0 00-8 8c0 4.5 8 12 8 12s8-7.5 8-12a8 8 0 00-8-8z" />
      </svg>
    ),
  },
  {
    key: "private",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 018 0v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
  },
];

/* A single app in the two-app join diagram: a small phone-glyph chip carrying the
 * app's tag + title, with a caption underneath (who does what). */
function PhoneChip({
  tag,
  tagColor,
  title,
  caption,
}: {
  tag: string;
  tagColor: string;
  title: string;
  caption: string;
}) {
  return (
    <div className="rgx2-node">
      <div
        className="rgx2-phone"
        style={{ ["--rgx2-tint" as string]: tagColor }}
      >
        <span className="rgx2-phone__notch" aria-hidden="true" />
        <span
          className="rgx2-phone__tag"
          style={{ color: `${tagColor}`, background: `${tagColor}14`, borderColor: `${tagColor}40` }}
        >
          {tag}
        </span>
        <span className="rgx2-phone__title">{title}</span>
        <span className="rgx2-phone__pings" aria-hidden="true">
          <i style={{ background: "#00FF6A" }} />
          <i style={{ background: "#FFB000" }} />
          <i style={{ background: "#A78BFA" }} />
        </span>
      </div>
      <p className="rgx2-node__cap">{caption}</p>
    </div>
  );
}

export default function RadarSection() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();

  return (
    <section id="radar" className="py-16 md:py-24 relative overflow-hidden cv-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" aria-hidden="true" />

      <div ref={ref} className={`max-w-5xl mx-auto px-6 relative reveal ${visible ? "visible" : ""}`}>
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">{t("radar.label")}</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {t("radar.heading_prefix")}
            <span className="text-accent">{t("radar.heading_accent")}</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">{t("radar.description")}</p>
        </div>

        {/* Centerpiece — live group map demo */}
        <div className="rgx2-stage mb-12 md:mb-14">
          <RadarGroupDemo />
        </div>

        {/* Two-app join diagram: Pro hosts → code → everyone joins (free) */}
        <div className="rgx2-diagram mb-6">
          <PhoneChip
            tag={t("radar.builtin_tag")}
            tagColor="#00FF6A"
            title={t("radar.builtin_title")}
            caption={t("radar.diagram_host")}
          />

          <div className="rgx2-link" aria-hidden="true">
            <span className="rgx2-link__arrow">
              <svg viewBox="0 0 64 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h54M48 5l9 7-9 7" />
              </svg>
            </span>
            <span className="rgx2-code">
              <span className="rgx2-code__dot" />
              7K2M-XR4P
            </span>
            <span className="rgx2-link__cap">{t("radar.diagram_code")}</span>
          </div>

          <PhoneChip
            tag={t("radar.coapp_tag")}
            tagColor="#00DDFF"
            title={t("radar.coapp_title")}
            caption={t("radar.diagram_join")}
          />
        </div>

        {/* Longer app descriptions — tuck-away detail under each app */}
        <div className="rgx2-notes mb-10 md:mb-12">
          <details className="rgx2-note">
            <summary className="rgx2-note__sum">
              <span className="rgx2-note__key" style={{ ["--rgx2-tint" as string]: "#00FF6A" }} />
              {t("radar.builtin_title")}
              <svg className="rgx2-note__chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p className="rgx2-note__body">{t("radar.builtin_desc")}</p>
          </details>
          <details className="rgx2-note">
            <summary className="rgx2-note__sum">
              <span className="rgx2-note__key" style={{ ["--rgx2-tint" as string]: "#00DDFF" }} />
              {t("radar.coapp_title")}
              <svg className="rgx2-note__chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p className="rgx2-note__body">{t("radar.coapp_desc")}</p>
          </details>
        </div>

        {/* Four pillar rows — compact single-line icon + title + desc */}
        <div className="rgx2-pillars mb-10">
          {pillars.map((p) => (
            <div key={p.key} className="rgx2-pillar">
              <span className="rgx2-pillar__ic" aria-hidden="true">{p.icon}</span>
              <h4 className="rgx2-pillar__title">{t(`radar.feat_${p.key}_title` as TranslationKey)}</h4>
              <p className="rgx2-pillar__desc">{t(`radar.feat_${p.key}_desc` as TranslationKey)}</p>
            </div>
          ))}
        </div>

        {/* CTA + pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/radar"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-accent text-[#050510] font-semibold text-base hover:bg-accent-dim transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {t("radar.cta")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("radar.pill")}
          </span>
        </div>
      </div>
    </section>
  );
}
