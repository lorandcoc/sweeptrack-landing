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
        <div className="max-w-2xl">
          <h2 className="font-display text-[2.1rem] leading-[1.08] sm:text-5xl sm:leading-[1.05] [text-wrap:balance]">
            {t("cta.heading")}
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed [text-wrap:pretty]">{t("cta.description")}</p>
          <div className="mt-9">
            <GooglePlayButton size="large" />
          </div>
          <p className="mt-10 text-muted">
            {t("community.socials_heading")}:{" "}
            {SOCIALS.map((s, i) => (
              <span key={s.name}>
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
    </section>
  );
}
