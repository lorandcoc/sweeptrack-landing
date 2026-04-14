"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

function FeatureRow({
  feature,
  index,
}: {
  feature: {
    tag: string;
    title: string;
    description: string;
    screenshot: string;
    alt: string;
    highlight: string;
    side: "left" | "right";
  };
  index: number;
}) {
  const isLeft = feature.side === "left";

  return (
    <div
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
        index > 0 ? "mt-12 md:mt-16" : ""
      }`}
    >
      {/* Text */}
      <div className={`${isLeft ? "md:order-2" : ""} text-center md:text-left`}>
        <span className="text-accent text-xs font-bold uppercase tracking-widest">{feature.tag}</span>
        <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{feature.title}</h3>
        <p className="text-muted leading-relaxed mb-4">{feature.description}</p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
          {feature.highlight}
        </div>
      </div>

      {/* Screenshot */}
      <div className={`${isLeft ? "md:order-1" : ""} flex justify-center`}>
        <div className="relative">
          <div className="absolute -inset-6 bg-accent/5 blur-[40px] rounded-full" />
          <div className="relative phone-frame w-[220px] md:w-[260px]">
            <Image
              src={feature.screenshot}
              alt={feature.alt}
              width={260}
              height={563}
              className="w-full h-auto screenshot-crop"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureShowcase() {
  const { t } = useI18n();

  const showcaseFeatures = [
    {
      tag: t("showcase.forecast_tag"),
      title: t("showcase.forecast_title"),
      description: t("showcase.forecast_description"),
      screenshot: "/screenshots/forecast.png",
      alt: "Detecting Forecast showing 96% Excellent score",
      highlight: t("showcase.forecast_highlight"),
      side: "right" as const,
    },
    {
      tag: t("showcase.offline_tag"),
      title: t("showcase.offline_title"),
      description: t("showcase.offline_description"),
      screenshot: "/screenshots/offline_maps.png",
      alt: "Offline Maps with 4 tile sources and download area",
      highlight: t("showcase.offline_highlight"),
      side: "left" as const,
    },
    {
      tag: t("showcase.nearby_tag"),
      title: t("showcase.nearby_title"),
      description: t("showcase.nearby_description"),
      screenshot: "/screenshots/nearby.png",
      alt: "Nearby Sites showing historic locations on map",
      highlight: t("showcase.nearby_highlight"),
      side: "right" as const,
    },
    {
      tag: t("showcase.presets_tag"),
      title: t("showcase.presets_title"),
      description: t("showcase.presets_description"),
      screenshot: "/screenshots/presets.png",
      alt: "Machine Presets for organizing detector settings",
      highlight: t("showcase.presets_highlight"),
      side: "left" as const,
    },
    {
      tag: t("showcase.permission_tag"),
      title: t("showcase.permission_title"),
      description: t("showcase.permission_description"),
      screenshot: "/screenshots/permission_vault.png",
      alt: "Permission Vault with approved and expiring permits",
      highlight: t("showcase.permission_highlight"),
      side: "right" as const,
    },
    {
      tag: t("showcase.backup_tag"),
      title: t("showcase.backup_title"),
      description: t("showcase.backup_description"),
      screenshot: "/screenshots/cloud_backup.png",
      alt: "Cloud Backup connected to Google Drive",
      highlight: t("showcase.backup_highlight"),
      side: "left" as const,
    },
  ];

  return (
    <section id="features" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">{t("showcase.label")}</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {t("showcase.heading_prefix")}
            <span className="text-accent accent-underline">{t("showcase.heading_accent")}</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {t("showcase.description")}
          </p>
        </div>

        {showcaseFeatures.map((feature, i) => (
          <FeatureRow key={i} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
