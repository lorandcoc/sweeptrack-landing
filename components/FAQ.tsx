"use client";

import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";
import en from "@/dictionaries/en.json";

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

export default function FAQ() {
  const { ref, visible } = useReveal();
  const { t } = useI18n();

  return (
    <section id="faq" className="py-16 md:py-20 cv-auto">
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

        <p className="mt-10 text-center text-sm text-muted">
          {t("faq.outro")}{" "}
          <a
            href="#community"
            onClick={scrollToHash}
            className="font-mono text-accent hover:underline underline-offset-4 whitespace-nowrap"
          >
            &rarr;&nbsp;#community
          </a>
        </p>
      </div>
    </section>
  );
}
