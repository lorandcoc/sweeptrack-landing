"use client";

import { useEffect, useState } from "react";
import ParallaxPhone from "./ParallaxPhone";
import HeroTrackDemo from "./HeroTrackDemo";
import GooglePlayButton from "./GooglePlayButton";
import { useI18n, type TranslationKey } from "@/lib/i18n";

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

// The four-state HUD story that cycles through the floating chip. `tone`
// drives the accent (green for normal, amber for the boundary warning).
const HUD_STORY: { key: TranslationKey; tone: "green" | "amber" }[] = [
  { key: "hero.hud_gps", tone: "green" },
  { key: "hero.hud_find", tone: "green" },
  { key: "hero.hud_score", tone: "green" },
  { key: "hero.hud_boundary", tone: "amber" },
];

function HudChip({ index }: { index: number }) {
  const { t } = useI18n();
  return (
    <span className="herox-hud-stack">
      {HUD_STORY.map((s, i) => (
        <span
          key={s.key}
          className={`herox-hud st-hud ${s.tone === "amber" ? "herox-hud--amber" : "herox-hud--green"} ${i === index ? "is-active" : ""}`}
        >
          <span className="herox-hud-dot" />
          <span style={{ fontSize: 11, fontWeight: 600 }}>{t(s.key)}</span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { locale, t } = useI18n();
  const isLong = locale !== "en";

  // One shared index drives both the desktop floating chip and the mobile
  // compact chip so the story stays in lockstep.
  const [hudIndex, setHudIndex] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => setHudIndex((i) => (i + 1) % HUD_STORY.length), 3000);
    return () => clearInterval(id);
  }, []);

  // Proof strip: split on " · " into spans rendered with middot separators.
  const proofParts = t("hero.proof_line").split(" · ");

  return (
    <section className="relative pt-12 pb-12 md:pt-20 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-3 items-center">
          <div className="text-center md:text-left">
            <h1 className={`hero-enter font-display leading-[1.08] mb-5 ${isLong ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl" : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"}`} style={{ animationDelay: "0.1s" }}>
              <span className="block [text-wrap:balance]">{t("hero.title_line1")}</span>
              <span className="block [text-wrap:balance]">
                {t("hero.title_line2_lead")} <span className="text-accent">{t("hero.title_line2_accent")}</span>
              </span>
            </h1>

            <p className="hero-enter text-base md:text-lg text-muted max-w-xl mb-3 md:mx-0 mx-auto leading-relaxed" style={{ animationDelay: "0.35s" }}>
              {t("hero.subtitle")}
            </p>

            <p className="hero-enter herox-proof font-mono text-[11px] md:text-xs text-muted/80 max-w-xl mb-6 md:mx-0 mx-auto flex flex-wrap justify-center md:justify-start" style={{ animationDelay: "0.4s" }}>
              {proofParts.map((part, i) => (
                <span key={i} className="herox-proof__item inline-flex items-center">
                  {i > 0 && <span className="herox-proof__sep" aria-hidden="true">·</span>}
                  {part}
                </span>
              ))}
            </p>

            <div className="hero-enter flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8" style={{ animationDelay: "0.55s" }}>
              <GooglePlayButton />
              <a
                href="#outcomes"
                onClick={scrollToHash}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/10 text-foreground hover:border-white/20 transition-colors text-base"
              >
                {t("hero.cta_secondary")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <div className="hero-enter mt-5 flex justify-center md:justify-start" style={{ animationDelay: "0.6s" }}>
              <a href="#pricing" onClick={scrollToHash} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-amber-500/12 border border-amber-400/55 text-amber-200 text-sm font-medium hover:bg-amber-500/18 hover:border-amber-400/70 transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6z" /></svg>
                {t("hero.pill_founder")}
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
              {/* Static coordinates chip — always-on field anchor. */}
              <div className="hero-hud-1 hidden md:flex">
                <span className="st-hud">
                  <span className="st-hud__dot" />
                  <span style={{ fontSize: 11 }}>47°41′22″N</span>
                </span>
              </div>
              {/* Cycling story chip (desktop, top-right). */}
              <div className="herox-hud-1 hidden md:flex">
                <HudChip index={hudIndex} />
              </div>
              <div className="relative z-[1]">
                <ParallaxPhone />
                {/* Sweep-pattern overlay sits on top of the screenshot. */}
                <HeroTrackDemo />
              </div>
              {/* Cycling story chip (mobile only) near the phone's bottom edge. */}
              <div className="herox-hud-mobile flex md:hidden">
                <HudChip index={hudIndex} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
