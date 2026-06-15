"use client";

import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";
import SpotlightFindsIntel from "./SpotlightFindsIntel";
import SpotlightMapOverlay from "./SpotlightMapOverlay";

/*
 * "New in Pro" section — the two Pro 2.0 features (Finds Intelligence and
 * Map Overlays), each shown with a live in-product demo. Mirrors the
 * ForteSpotlights layout: a centred heading, then alternating reveal rows.
 */

const ROWS = [
  { key: "findsintel", Component: SpotlightFindsIntel, dir: "reveal-right" },
  { key: "mapoverlay", Component: SpotlightMapOverlay, dir: "reveal-left" },
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

export default function ProSpotlights() {
  const { ref, visible } = useReveal();
  const { t } = useI18n();

  return (
    <section id="new-in-pro" className="py-20 md:py-28 cv-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 md:mb-24 reveal ${visible ? "visible" : ""}`}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("prospot.kicker")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight [text-wrap:balance] mb-5">
            {t("prospot.heading_prefix")}
            <span className="text-accent">{t("prospot.heading_accent")}</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            {t("prospot.description")}
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
