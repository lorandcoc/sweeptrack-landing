"use client";

import ParallaxPhone from "./ParallaxPhone";
import ComingSoonButton from "./ComingSoonButton";
import { useI18n } from "@/lib/i18n";

const stats = [
  { value: "61", key: "hero.stat_presets" },
  { value: "131", key: "hero.stat_coins" },
  { value: "4", key: "hero.stat_maps" },
] as const;

export default function Hero() {
  const { locale, t } = useI18n();
  const isLong = locale !== "en";

  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-3 items-center">
          <div className="text-center md:text-left">
            <div className="hero-enter flex flex-wrap gap-2 mb-6" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/8 border border-accent/15 text-accent text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {t("hero.pill_free")}
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-muted text-xs font-medium">
                {t("hero.pill_adfree")}
              </span>
            </div>

            <h1 className={`hero-enter font-display leading-[1.08] mb-5 ${isLong ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl" : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"}`} style={{ animationDelay: "0.2s" }}>
              {t("hero.title_line1")}
              <br />
              {t("hero.title_line2")}
              <br />
              <span className="text-accent">{t("hero.title_line3")}</span>
            </h1>

            <p className="hero-enter text-base md:text-lg text-muted max-w-xl mb-6 md:mx-0 mx-auto leading-relaxed" style={{ animationDelay: "0.35s" }}>
              {t("hero.subtitle")}
            </p>

            <div className="hero-enter flex flex-wrap gap-3 justify-center md:justify-start mb-8" style={{ animationDelay: "0.45s" }}>
              {stats.map((s) => (
                <div key={s.key} className="flex items-baseline gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <span className="font-mono text-sm font-semibold text-accent">{s.value}</span>
                  <span className="text-xs text-muted">{t(s.key)}</span>
                </div>
              ))}
            </div>

            <div className="hero-enter flex flex-col sm:flex-row gap-4 justify-center md:justify-start" style={{ animationDelay: "0.55s" }}>
              <ComingSoonButton />
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/10 text-foreground hover:border-white/20 transition-colors text-base"
              >
                {t("hero.cta_secondary")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <p className="hero-enter text-xs text-muted/70 mt-4 flex items-center gap-1.5 justify-center md:justify-start" style={{ animationDelay: "0.65s" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M12 18h.01" />
                <path d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              {t("hero.platform_note")}
            </p>
          </div>

          <div className="hero-enter-phone">
            <ParallaxPhone />
          </div>
        </div>
      </div>
    </section>
  );
}
