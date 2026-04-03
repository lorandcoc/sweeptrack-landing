"use client";

import Image from "next/image";
import { useReveal } from "./useReveal";

const showcaseFeatures = [
  {
    tag: "Intelligence",
    title: "Know Before You Go",
    description: "Weather-based detecting score tells you if conditions are right. Soil moisture, wind, temperature, and precipitation — all analyzed into a single score so you never waste a trip.",
    screenshot: "/screenshots/forecast.png",
    alt: "Detecting Forecast showing 96% Excellent score",
    highlight: "96% Excellent",
    side: "right" as const,
  },
  {
    tag: "Navigation",
    title: "Never Lose Signal",
    description: "Download offline maps in 4 formats — Street, Satellite, Terrain, and Historical Topographic. Hunt confidently in areas with zero cell coverage. Your maps stay on device.",
    screenshot: "/screenshots/offline_maps.png",
    alt: "Offline Maps with 4 tile sources and download area",
    highlight: "4 Map Sources",
    side: "left" as const,
  },
  {
    tag: "Discovery",
    title: "History Is Closer Than You Think",
    description: "Find nearby historic sites and Wikipedia landmarks around your position. Every old church, monument, and battlefield is a potential goldmine. Distance and directions included.",
    screenshot: "/screenshots/nearby.png",
    alt: "Nearby Sites showing historic locations on map",
    highlight: "Historic POIs",
    side: "right" as const,
  },
  {
    tag: "Arsenal",
    title: "Your Detector Settings. Organized.",
    description: "Save, organize, and share your detector presets across 57 models from 12 brands. Keep up to 10 configurations ready and share them with hunting buddies via QR code. Never forget your sweet settings again.",
    screenshot: "/screenshots/presets.png",
    alt: "Machine Presets for organizing detector settings",
    highlight: "12 Brands",
    side: "left" as const,
  },
  {
    tag: "Legal",
    title: "Stay on the Right Side of the Law",
    description: "Track landowner permissions with approval status, expiry alerts, boundary maps, and automatic permission letters. The Permission Vault keeps you detecting legally.",
    screenshot: "/screenshots/permission_vault.png",
    alt: "Permission Vault with approved and expiring permits",
    highlight: "Permission Vault",
    side: "right" as const,
  },
  {
    tag: "Safety",
    title: "Your Data. Backed Up. Always.",
    description: "One-tap Google Drive backup for all sessions, presets, permits, and settings. Restore on any device. Lost phone? Broken phone? Your detecting history survives.",
    screenshot: "/screenshots/cloud_backup.png",
    alt: "Cloud Backup connected to Google Drive",
    highlight: "Cloud Backup",
    side: "left" as const,
  },
];

function FeatureRow({
  feature,
  index,
}: {
  feature: (typeof showcaseFeatures)[0];
  index: number;
}) {
  const { ref, visible } = useReveal(0.15);
  const isLeft = feature.side === "left";

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
        index > 0 ? "mt-16 md:mt-20" : ""
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
  return (
    <section id="features" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Why Detectorists Love It</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools That Actually{" "}
            <span className="text-accent accent-underline">Find More</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Every feature is built by a detectorist, for detectorists. No fluff.
            No generic GPS tracker pretending to be useful in the field.
          </p>
        </div>

        {showcaseFeatures.map((feature, i) => (
          <FeatureRow key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
