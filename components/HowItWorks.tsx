"use client";

import Image, { type StaticImageData } from "next/image";
import forecastShot from "@/public/screenshots/forecast.jpg";
import measureShot from "@/public/screenshots/measure2.jpg";
import historyShot from "@/public/screenshots/history.jpg";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * One detecting trip in three steps, each shown with the actual app screen
 * you'd be looking at: the forecast before you go, the map in the field, and
 * your session history afterwards.
 */
const STEPS: { n: 1 | 2 | 3; shot: StaticImageData; alt: TranslationKey }[] = [
  { n: 1, shot: forecastShot, alt: "screenshots.alt_forecast" },
  { n: 2, shot: measureShot, alt: "screenshots.alt_measure" },
  { n: 3, shot: historyShot, alt: "screenshots.alt_history" },
];

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <section className="st-rule py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display st-h2 max-w-2xl mb-12 md:mb-16">{t("howitworks.heading")}</h2>

        <ol className="grid gap-12 md:grid-cols-3 md:gap-10">
          {STEPS.map((step) => (
            <li key={step.n} className="grid grid-cols-[112px_minmax(0,1fr)] gap-5 md:block">
              <div className="phone-frame phone-frame--small md:w-[220px] md:mb-7">
                <Image
                  src={step.shot}
                  alt={t(step.alt)}
                  className="block w-full h-auto"
                  placeholder="blur"
                  sizes="(max-width: 768px) 112px, 220px"
                />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl leading-tight">
                  {t(`howitworks.step${step.n}_title` as TranslationKey)}
                </h3>
                <p className="mt-3 text-muted leading-relaxed text-[15px] md:text-base">
                  {t(`howitworks.step${step.n}_description` as TranslationKey)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
