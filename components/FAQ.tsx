"use client";

import { useI18n, type TranslationKey } from "@/lib/i18n";
import en from "@/dictionaries/en.json";

const enDict = en as Record<string, string>;

// Questions ranked by objection weight: the doubts most likely to stall a
// download (battery, beginner fit, offline, privacy, price, iPhone, group
// live map, Radar) lead; feature walk-throughs follow.
const FAQ_ORDER = [11, 12, 9, 10, 8, 13, 15, 16, 1, 2, 3, 4, 14, 7, 5, 6];

// Safety net: any faq.qN present in the dictionary but missing from the
// ranking above is appended at the end, so new entries never silently
// disappear (q11–q13 once did, when the count was hardcoded).
const unranked = Object.keys(enDict)
  .map((k) => /^faq\.q(\d+)$/.exec(k))
  .filter((m): m is RegExpExecArray => m !== null)
  .map((m) => Number(m[1]))
  .filter((n) => !FAQ_ORDER.includes(n))
  .sort((a, b) => a - b);

const faqKeys = [...FAQ_ORDER, ...unranked];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqKeys.map((i) => ({
    "@type": "Question",
    name: enDict[`faq.q${i}`],
    acceptedAnswer: {
      "@type": "Answer",
      text: enDict[`faq.a${i}`],
    },
  })),
};

const SUPPORT_EMAIL = "support@sweeptrack.pro";

export default function FAQ() {
  const { t } = useI18n();
  // The outro carries an {email} placeholder so each locale can put the
  // address wherever its grammar wants it.
  const [outroBefore, outroAfter = ""] = t("faq.outro").split("{email}");

  return (
    <section id="faq" className="st-rule py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16">
        <div>
          <h2 className="font-display st-h2">{t("faq.heading")}</h2>
          <p className="mt-5 text-muted leading-relaxed max-w-sm">
            {outroBefore}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-foreground underline decoration-white/30 underline-offset-4 hover:decoration-foreground transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
            {outroAfter}
          </p>
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
