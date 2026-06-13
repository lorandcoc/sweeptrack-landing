"use client";

import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";
import SpotlightPerimeter from "./SpotlightPerimeter";
import SpotlightVault from "./SpotlightVault";
import SpotlightForecast from "./SpotlightForecast";
import SpotlightArsenal from "./SpotlightArsenal";
import SpotlightEngine from "./SpotlightEngine";

const ROWS = [
  { key: "perim", Component: SpotlightPerimeter, dir: "reveal-left" },
  { key: "vault", Component: SpotlightVault, dir: "reveal-right" },
  { key: "forecast", Component: SpotlightForecast, dir: "reveal-left" },
  { key: "arsenal", Component: SpotlightArsenal, dir: "reveal-right" },
  { key: "engine", Component: SpotlightEngine, dir: "reveal-left" },
] as const;

function SpotlightRow({
  Component,
  dir,
}: {
  Component: React.ComponentType;
  dir: string;
}) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div ref={ref} className={`${dir} ${visible ? "visible" : ""}`}>
      <Component />
    </div>
  );
}

export default function ForteSpotlights() {
  const { ref, visible } = useReveal();
  const { t } = useI18n();

  return (
    <section id="forte" className="py-20 md:py-28 cv-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 md:mb-24 reveal ${visible ? "visible" : ""}`}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("spotlight.kicker")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight [text-wrap:balance] mb-5">
            {t("spotlight.heading_prefix")}
            <span className="text-accent">{t("spotlight.heading_accent")}</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            {t("spotlight.description")}
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {ROWS.map(({ key, Component, dir }) => (
            <SpotlightRow key={key} Component={Component} dir={dir} />
          ))}
        </div>
      </div>
    </section>
  );
}
