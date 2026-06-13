"use client";

import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";

const CHIPS = [
  {
    titleKey: "trust.chip1_title",
    descKey: "trust.chip1_desc",
    icon: (
      // phone with a dot inside — data lives on-device
      <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 14.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM9.5 8.5l2.5 2.5 2.5-2.5" />
    ),
  },
  {
    titleKey: "trust.chip2_title",
    descKey: "trust.chip2_desc",
    icon: (
      // padlock
      <path d="M7 11V8a5 5 0 0 1 10 0v3m-12 0h14v9H5v-9zm7 3v3" />
    ),
  },
  {
    titleKey: "trust.chip3_title",
    descKey: "trust.chip3_desc",
    icon: (
      // crossed-out location pin
      <path d="M12 21s-6-5.2-6-10a6 6 0 0 1 12 0c0 4.8-6 10-6 10zm0-12.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4 4l16 16" />
    ),
  },
  {
    titleKey: "trust.chip4_title",
    descKey: "trust.chip4_desc",
    icon: (
      // clock / timer
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 4v5l3.5 2" />
    ),
  },
] as const;

export default function TrustStrip() {
  const { ref, visible } = useReveal();
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-20 cv-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="text-center mb-10 md:mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
              {t("trust.label")}
            </p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight [text-wrap:balance] mb-4">
              {t("trust.heading_prefix")}
              <span className="text-accent">{t("trust.heading_accent")}</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              {t("trust.description")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {CHIPS.map((chip, i) => (
              <div
                key={chip.titleKey}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-accent/30 transition-colors"
                style={{ transitionDelay: visible ? `${i * 90}ms` : undefined }}
              >
                <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl border border-accent/25 bg-accent/10 text-accent">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {chip.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t(chip.titleKey)}</h3>
                  <p className="text-sm text-muted leading-relaxed">{t(chip.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
