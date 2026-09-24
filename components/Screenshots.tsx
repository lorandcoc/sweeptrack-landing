"use client";

import Image from "next/image";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/* Real screens from the Android app, each with its name and what it's for.
 * radar.jpg and waypoints.jpg are left out on purpose: they are still
 * "screenshot coming soon" placeholders. */
const SHOTS = [
  { src: "/screenshots/home.jpg", altKey: "screenshots.alt_livemap", labelKey: "screenshots.shot_livemap", capKey: "screenshots.cap_livemap" },
  { src: "/screenshots/forecast.jpg", altKey: "screenshots.alt_forecast", labelKey: "screenshots.shot_forecast", capKey: "screenshots.cap_forecast" },
  { src: "/screenshots/measure2.jpg", altKey: "screenshots.alt_measure", labelKey: "screenshots.shot_measure", capKey: "screenshots.cap_measure" },
  { src: "/screenshots/permission_vault.jpg", altKey: "screenshots.alt_permission", labelKey: "screenshots.shot_permission", capKey: "screenshots.cap_permission" },
  { src: "/screenshots/night_vision.jpg", altKey: "screenshots.alt_nightvision", labelKey: "screenshots.shot_nightvision", capKey: "screenshots.cap_nightvision" },
  { src: "/screenshots/stats.jpg", altKey: "screenshots.alt_stats", labelKey: "screenshots.shot_stats", capKey: "screenshots.cap_stats" },
] as const satisfies ReadonlyArray<{
  src: string;
  altKey: TranslationKey;
  labelKey: TranslationKey;
  capKey: TranslationKey;
}>;

export default function Screenshots() {
  const { t } = useI18n();

  return (
    <section id="screenshots" className="st-rule py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display st-h2 mb-10 md:mb-14">
          {t("screenshots.heading")}
          {t("screenshots.heading_accent")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10">
          {SHOTS.map((shot) => (
            <figure key={shot.src}>
              <div className="phone-frame phone-frame--small max-w-[240px]">
                <Image
                  src={shot.src}
                  alt={t(shot.altKey)}
                  width={720}
                  height={1560}
                  sizes="(max-width: 768px) 45vw, 240px"
                  className="block w-full h-auto"
                />
              </div>
              <figcaption className="mt-4 max-w-[260px]">
                <span className="block font-semibold text-foreground">{t(shot.labelKey)}</span>
                <span className="mt-1 block text-sm text-muted leading-relaxed">{t(shot.capKey)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
