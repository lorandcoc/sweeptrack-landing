"use client";

import ParallaxPhone from "./ParallaxPhone";
import ComingSoonButton from "./ComingSoonButton";
import { useI18n } from "@/lib/i18n";

// Smooth-scroll without writing to window.location.hash so the back button
// still leaves the site instead of popping to the previous in-page anchor.
function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href") || "";
  const id = href.replace(/^[/#]+/, "");
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const { locale, t } = useI18n();
  const isLong = locale !== "en";

  return (
    <section className="relative pt-12 pb-12 md:pt-20 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-3 items-center">
          <div className="text-center md:text-left">
            <div className="hero-enter flex flex-wrap gap-2 mb-6 justify-center md:justify-start" style={{ animationDelay: "0.1s" }}>
              <a href="#community" onClick={scrollToHash} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-medium hover:bg-amber-500/15 hover:border-amber-400/50 transition-colors">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6z" /></svg>
                {t("hero.pill_founder")}
              </a>
            </div>

            <h1 className={`hero-enter font-display leading-[1.08] mb-5 ${isLong ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl" : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"}`} style={{ animationDelay: "0.2s" }}>
              <span className="block [text-wrap:balance]">{t("hero.title_line1")}</span>
              <span className="block [text-wrap:balance]">
                {t("hero.title_line2_lead")} <span className="text-accent">{t("hero.title_line2_accent")}</span>
              </span>
            </h1>

            <p className="hero-enter text-base md:text-lg text-muted max-w-xl mb-3 md:mx-0 mx-auto leading-relaxed" style={{ animationDelay: "0.35s" }}>
              {t("hero.subtitle")}
            </p>

            <p className="hero-enter font-mono text-[11px] md:text-xs text-muted/80 max-w-xl mb-6 md:mx-0 mx-auto" style={{ animationDelay: "0.4s" }}>
              {t("hero.price_anchor")}
            </p>

            <div className="hero-enter flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8" style={{ animationDelay: "0.55s" }}>
              <ComingSoonButton />
              <a
                href="#features"
                onClick={scrollToHash}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/10 text-foreground hover:border-white/20 transition-colors text-base"
              >
                {t("hero.cta_secondary")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <p className="hero-enter text-xs text-muted/70 mt-4 flex items-center gap-1.5 justify-center md:justify-start" style={{ animationDelay: "0.65s" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
                <path d="M17.523 15.341c-.551 0-.999-.449-.999-1.0 0-.553.448-1.0.999-1.0s.999.447.999 1.0c0 .551-.448 1.0-.999 1.0m-11.046 0c-.551 0-.999-.449-.999-1.0 0-.553.448-1.0.999-1.0s.999.447.999 1.0c0 .551-.448 1.0-.999 1.0m11.405-6.02 1.997-3.459a.416.416 0 0 0-.152-.568.416.416 0 0 0-.568.152l-2.022 3.503C15.59 8.244 13.853 7.851 12 7.851s-3.59.393-5.137 1.101L4.841 5.449a.416.416 0 0 0-.568-.152.416.416 0 0 0-.152.568l1.997 3.459C2.689 11.187.343 14.659 0 18.761h24c-.343-4.102-2.689-7.574-6.118-9.44" />
              </svg>
              {t("hero.platform_note")}
            </p>
          </div>

          <div className="hero-enter-phone flex justify-center md:justify-end">
            <div className="hero-phone-stage">
              <div className="hero-phone-rings" aria-hidden="true">
                <span className="hero-phone-ring" />
                <span className="hero-phone-ring" />
                <span className="hero-phone-ring" />
                <span className="hero-phone-ring" />
              </div>
              <div className="hero-hud-1 hidden md:flex">
                <span className="st-hud">
                  <span className="st-hud__dot" />
                  <span style={{ fontSize: 11 }}>47°41′22″N</span>
                </span>
              </div>
              <div className="hero-hud-3 hidden md:flex">
                <span className="st-hud" style={{ background: "rgba(0,255,106,0.12)", borderColor: "var(--st-accent-edge)", color: "var(--st-accent)" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8" /></svg>
                  <span style={{ fontSize: 11, fontWeight: 600 }}>+1 find · 18 cm</span>
                </span>
              </div>
              <div className="hero-hud-2 hidden md:flex">
                <span className="st-hud" style={{ background: "rgba(255,176,0,0.18)", borderColor: "var(--st-amber-edge)", color: "var(--st-amber)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} />
                  <span style={{ fontSize: 11, fontWeight: 600 }}>Score 96</span>
                </span>
              </div>
              <div className="relative z-[1]">
                <ParallaxPhone />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
