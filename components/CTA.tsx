"use client";

import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";
import ComingSoonButton from "./ComingSoonButton";

export default function CTA() {
  const { ref, visible } = useReveal();
  const { t } = useI18n();

  return (
    <section id="download" className="py-20 md:py-28">
      <div ref={ref} className={`max-w-4xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="border border-white/[0.06] rounded-3xl p-10 md:p-16 text-center bg-surface/50">
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

          <div className="flex flex-wrap justify-center gap-3 text-xs text-muted mb-8">
            {(["featuretag.gps", "featuretag.forecast", "featuretag.offline", "featuretag.cloud", "featuretag.nightvision", "featuretag.permission", "featuretag.track"] as const).map((k) => (
              <span key={k} className="px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">{t(k)}</span>
            ))}
          </div>

          <div className="flex justify-center">
            <ComingSoonButton size="large" />
          </div>
        </div>
      </div>
    </section>
  );
}
