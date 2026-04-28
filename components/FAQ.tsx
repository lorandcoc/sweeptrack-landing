"use client";

import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";
import en from "@/dictionaries/en.json";

const faqKeys = Array.from({ length: 10 }, (_, i) => i + 1);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqKeys.map((i) => ({
    "@type": "Question",
    name: (en as Record<string, string>)[`faq.q${i}`],
    acceptedAnswer: {
      "@type": "Answer",
      text: (en as Record<string, string>)[`faq.a${i}`],
    },
  })),
};

export default function FAQ() {
  const { ref, visible } = useReveal();
  const { t } = useI18n();

  return (
    <section id="faq" className="py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div ref={ref} className={`max-w-3xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-12">
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">{t("faq.label")}</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {t("faq.heading_prefix")}<span className="text-accent">{t("faq.heading_accent")}</span>?
          </h2>
        </div>

        <div className="faq-list">
          {faqKeys.map((i) => (
            <details key={i}>
              <summary>{t(`faq.q${i}` as TranslationKey)}</summary>
              <p>{t(`faq.a${i}` as TranslationKey)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
