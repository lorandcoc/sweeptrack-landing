"use client";

import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";
import GooglePlayButton from "./GooglePlayButton";
import CoinEasterEgg from "./CoinEasterEgg";

export default function CTA() {
  const { ref, visible } = useReveal();
  const { t } = useI18n();

  return (
    <section id="download" className="py-20 md:py-28">
      <div ref={ref} className={`max-w-4xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="ctx-stage relative border border-white/[0.06] rounded-3xl p-10 md:p-16 text-center bg-surface/50 overflow-hidden">
          {/* Slow conic sonar sweep — one rotating low-opacity beam. */}
          <div className="ctx-sweep" aria-hidden="true">
            <span className="ctx-sweep__beam" />
            <span className="ctx-sweep__core" />
          </div>

          <div className="relative z-[2]">
            <p className="text-muted text-sm font-medium tracking-wider uppercase mb-4">{t("cta.label")}</p>
            <div className="accent-rule" />
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              {t("cta.heading_prefix")}
              <span className="text-accent">{t("cta.heading_accent")}</span>
            </h2>
            <p className="text-muted text-lg max-w-lg mx-auto mb-2">
              {t("cta.description")}
            </p>
            <p className="text-accent/70 text-sm font-medium mb-6">
              {t("cta.sublabel")}
            </p>

            {/* Founder pill — amber, signals scarcity. */}
            <div className="flex justify-center mb-8">
              <span className="ctx-founder-pill font-mono">
                <span className="ctx-founder-pill__dot" aria-hidden="true" />
                {t("hero.pill_founder")}
              </span>
            </div>

            <div className="flex justify-center mb-10">
              <GooglePlayButton size="large" />
            </div>

            <p className="ctx-closing font-display text-lg md:text-xl max-w-xl mx-auto">
              {t("cta.closing")}
            </p>
          </div>

          {/* Mounted inside this position:relative card so it anchors bottom-right. */}
          <CoinEasterEgg />
        </div>
      </div>
    </section>
  );
}
