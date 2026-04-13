"use client";

import { useReveal } from "./useReveal";
import TiltCard from "./TiltCard";
import { useI18n } from "@/lib/i18n";

const spotlightIcons = [
  (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
      <path d="M2 12h20" />
    </svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
];

const featureIcons = [
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 110-14h8.5" />
      <path d="M21 12h-4M21 12l-3-3M21 12l-3 3" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.2" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 00-6 6v2a6 6 0 006 6h0a6 6 0 006-6V9a6 6 0 00-6-6z" />
      <path d="M12 17v4M8 21h8" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
      <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
];

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

export default function Features() {
  const { t } = useI18n();

  const spotlightFeatures = [
    { icon: spotlightIcons[0], title: t("features.gps_title"), description: t("features.gps_description"), tag: t("features.gps_tag") },
    { icon: spotlightIcons[1], title: t("features.heatmap_title"), description: t("features.heatmap_description"), tag: t("features.heatmap_tag") },
    { icon: spotlightIcons[2], title: t("features.oldmap_title"), description: t("features.oldmap_description"), tag: t("features.oldmap_tag") },
  ];

  const features = [
    { icon: featureIcons[0], title: t("features.presets_title"), description: t("features.presets_description") },
    { icon: featureIcons[1], title: t("features.offline_title"), description: t("features.offline_description") },
    { icon: featureIcons[2], title: t("features.perimeter_title"), description: t("features.perimeter_description") },
    { icon: featureIcons[3], title: t("features.analytics_title"), description: t("features.analytics_description") },
    { icon: featureIcons[4], title: t("features.export_title"), description: t("features.export_description") },
    { icon: featureIcons[5], title: t("features.weather_title"), description: t("features.weather_description") },
    { icon: featureIcons[6], title: t("features.sites_title"), description: t("features.sites_description") },
    { icon: featureIcons[7], title: t("features.compare_title"), description: t("features.compare_description") },
    { icon: featureIcons[8], title: t("features.backup_title"), description: t("features.backup_description") },
  ];

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <RevealSection>
          <div className="text-center mb-16">
            <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">{t("features.label")}</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              {t("features.heading_prefix")}<span className="text-accent">{t("features.heading_accent")}</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {t("features.description")}
            </p>
          </div>
        </RevealSection>

        {/* Spotlight Features — bento grid */}
        <RevealSection>
          <div className="bento-grid mb-6">
            {spotlightFeatures.map((feature, i) => (
              <TiltCard key={feature.title} className={i === 0 ? "bento-hero" : ""}>
                <div className="spotlight-card rounded-2xl p-7 bg-surface border border-white/[0.06] hover:border-white/[0.14] h-full transition-colors">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/8 flex items-center justify-center text-accent">
                      {feature.icon}
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-accent/60 border border-accent/15 px-2.5 py-1 rounded-full">
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </RevealSection>

        {/* Remaining features — clean grid */}
        <RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card rounded-xl p-5 bg-surface/60 border border-white/[0.05] hover:border-white/[0.12] h-full transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/6 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[15px] mb-1">{feature.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
