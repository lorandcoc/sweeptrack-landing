"use client";

import Image from "next/image";
import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/* Four field-useful pillars of live group positioning. Each maps to a radar.feat_* key pair. */
const pillars: { key: string; icon: React.ReactNode }[] = [
  {
    key: "safety",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    key: "invite",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 2a8 8 0 00-8 8c0 4.5 8 12 8 12s8-7.5 8-12a8 8 0 00-8-8z" />
      </svg>
    ),
  },
  {
    key: "private",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="11" width="16" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 018 0v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
  },
];

function AppCard({
  tag,
  tagColor,
  title,
  desc,
}: {
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="featured-card rounded-2xl p-5 bg-surface border border-white/[0.08] hover:border-white/[0.14] transition-colors relative overflow-hidden h-full">
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3 className="font-bold text-base leading-tight">{title}</h3>
          <span
            className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border shrink-0"
            style={{ color: `${tagColor}cc`, background: `${tagColor}0f`, borderColor: `${tagColor}30` }}
          >
            {tag}
          </span>
        </div>
        <p className="text-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function RadarSection() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();

  return (
    <section id="radar" className="py-16 md:py-24 relative overflow-hidden cv-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" aria-hidden="true" />

      <div ref={ref} className={`max-w-6xl mx-auto px-6 relative reveal ${visible ? "visible" : ""}`}>
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">{t("radar.label")}</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {t("radar.heading_prefix")}
            <span className="text-accent accent-underline">{t("radar.heading_accent")}</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{t("radar.description")}</p>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">
          {/* Phone visual with radar rings */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="radar-rings" aria-hidden="true">
                <span className="radar-ring" />
                <span className="radar-ring" />
                <span className="radar-ring" />
                <span className="radar-ring" />
                <span className="radar-pin" />
              </div>
              <div className="phone-frame w-[210px] sm:w-[240px] aspect-[320/693] relative z-[1]">
                <Image
                  src="/screenshots/live_group.jpg"
                  alt={t("screenshots.alt_livegroup")}
                  width={320}
                  height={693}
                  sizes="(max-width: 640px) 70vw, 240px"
                  className="w-full h-auto screenshot-crop"
                />
              </div>
            </div>
          </div>

          {/* Copy + cards */}
          <div className="order-1 lg:order-2">
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <AppCard
                tag={t("radar.builtin_tag")}
                tagColor="#00FF6A"
                title={t("radar.builtin_title")}
                desc={t("radar.builtin_desc")}
              />
              <AppCard
                tag={t("radar.coapp_tag")}
                tagColor="#00DDFF"
                title={t("radar.coapp_title")}
                desc={t("radar.coapp_desc")}
              />
            </div>

            {/* Four pillars */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {pillars.map((p) => (
                <div
                  key={p.key}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/8 flex items-center justify-center text-accent shrink-0">
                    {p.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm text-white/90 mb-0.5">
                      {t(`radar.feat_${p.key}_title` as TranslationKey)}
                    </h4>
                    <p className="text-muted text-xs leading-relaxed">
                      {t(`radar.feat_${p.key}_desc` as TranslationKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA + pill */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
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
        </div>
      </div>
    </section>
  );
}
