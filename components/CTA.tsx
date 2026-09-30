"use client";

import { useI18n } from "@/lib/i18n";
import GooglePlayButton from "./GooglePlayButton";

const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/sweeptrackpro/" },
  { name: "YouTube", href: "https://www.youtube.com/@SweepTrackPro" },
  { name: "Instagram", href: "https://www.instagram.com/sweeptrackpro/" },
  { name: "TikTok", href: "https://www.tiktok.com/@sweeptrackpro" },
] as const;

/*
 * Closing section: one last download prompt plus where to follow along.
 * Carries both #download and #community so older in-page links still land.
 */
export default function CTA() {
  const { t } = useI18n();

  return (
    <section id="download" className="st-rule py-20 md:py-32">
      <div id="community" className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b2016] via-[#0a0a18] to-[#1c1608] px-7 py-12 md:px-14 md:py-16">
          <div className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden="true" />
          <div className="wash-green pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-[2.1rem] leading-[1.08] sm:text-5xl sm:leading-[1.05] [text-wrap:balance]">
              {t("cta.heading")}
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed [text-wrap:pretty]">{t("cta.description")}</p>
            <div className="mt-9">
              <GooglePlayButton size="large" />
            </div>
            {/* A flex row, so the links wrap between names on a narrow card. */}
            <p className="mt-10 flex flex-wrap items-baseline gap-y-1 text-muted">
              <span className="mr-1.5">{t("community.socials_heading")}:</span>
              {SOCIALS.map((s, i) => (
                <span key={s.name} className="whitespace-nowrap">
                  {i > 0 && <span className="mx-1.5 text-white/25" aria-hidden="true">/</span>}
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-white/30 underline-offset-4 hover:decoration-foreground transition-colors"
                  >
                    {s.name}
                  </a>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
