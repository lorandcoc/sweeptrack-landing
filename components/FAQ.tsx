"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";
import en from "@/dictionaries/en.json";

const faqKeys = Array.from({ length: 10 }, (_, i) => i + 1);

// Schema uses English strings (for Google)
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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm md:text-base font-medium text-foreground/90 group-hover:text-white transition-colors pr-4">
          {q}
        </span>
        <span className={`text-accent shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] pb-5" : "max-h-0"}`}>
        <p className="text-sm text-muted leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
}

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

        <div className="rounded-2xl border border-white/5 bg-surface/30 px-6">
          {faqKeys.map((i) => (
            <FAQItem key={i} q={t(`faq.q${i}`)} a={t(`faq.a${i}`)} />
          ))}
        </div>
      </div>
    </section>
  );
}
