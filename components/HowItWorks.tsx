"use client";

import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";

const stepIcons = [
  (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </svg>
  ),
];

const stepColors = ["#FFB000", "#00FF6A", "#00DDFF"];

export default function HowItWorks() {
  const { ref, visible } = useReveal(0.2);
  const { t } = useI18n();

  const steps = [
    {
      num: "01",
      title: t("howitworks.step1_title"),
      description: t("howitworks.step1_description"),
      bullets: [t("featuretag.forecast"), t("featuretag.oldmap"), t("featuretag.nearby"), t("featuretag.tide")],
      icon: stepIcons[0],
      color: stepColors[0],
    },
    {
      num: "02",
      title: t("howitworks.step2_title"),
      description: t("howitworks.step2_description"),
      bullets: [t("featuretag.gps"), t("featuretag.perimeter"), t("featuretag.findlog"), t("featuretag.permission")],
      icon: stepIcons[1],
      color: stepColors[1],
    },
    {
      num: "03",
      title: t("howitworks.step3_title"),
      description: t("howitworks.step3_description"),
      bullets: [t("featuretag.track"), t("featuretag.compare"), t("featuretag.export"), t("featuretag.cloud")],
      icon: stepIcons[2],
      color: stepColors[2],
    },
  ];

  return (
    <section className="py-16 md:py-20 relative">
      <div ref={ref} className={`max-w-5xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-14">
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">{t("howitworks.label")}</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {t("howitworks.heading_prefix")}<span className="text-accent">{t("howitworks.heading_accent")}</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            {t("howitworks.description")}
          </p>
        </div>

        <div className="relative">
          {/* Gradient rail (amber → green → cyan), desktop only */}
          <div className="how-rail" aria-hidden="true" />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`step-circle ${visible ? "visible" : ""} relative flex flex-col items-center text-center`}
                style={{ transitionDelay: visible ? `${i * 300 + 200}ms` : "0ms" }}
              >
                {/* Big translucent step number — sits behind the circle */}
                <span className="how-bignum" style={{ color: step.color }} aria-hidden="true">{step.num}</span>

                {/* Step circle */}
                <div className="relative mb-5">
                  <div
                    className="w-[80px] h-[80px] md:w-[104px] md:h-[104px] rounded-full bg-surface flex items-center justify-center"
                    style={{ border: `1.5px solid ${step.color}30`, color: step.color, boxShadow: `0 0 0 4px ${step.color}10` }}
                  >
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2" style={{ color: step.color }}>{step.title}</h3>
                <p className="text-muted text-sm max-w-[280px] leading-relaxed mb-4">{step.description}</p>

                {/* Feature pills */}
                <div className="flex flex-wrap justify-center gap-1.5">
                  {step.bullets.map((b) => (
                    <span
                      key={b}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                      style={{ color: `${step.color}cc`, background: `${step.color}10`, border: `1px solid ${step.color}20` }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
