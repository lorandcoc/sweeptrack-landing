"use client";

import Image from "next/image";
import homeScreenshot from "@/public/screenshots/home.jpg";
import HeroTrackDemo from "./HeroTrackDemo";
import GooglePlayButton from "./GooglePlayButton";
import { useI18n } from "@/lib/i18n";

// Smooth-scroll without writing to window.location.hash so the back button
// still leaves the site instead of popping to the previous in-page anchor.
function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href") || "";
  const id = href.replace(/^[/#]+/, "");
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[minmax(0,1fr)_280px] lg:grid-cols-[minmax(0,1fr)_310px] gap-12 lg:gap-24 items-center">
        <div>
          <h1 className="font-display text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.1rem] xl:text-[3.4rem] lg:leading-[1.05] max-w-[26ch] [text-wrap:balance]">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-[35rem] [text-wrap:pretty]">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <GooglePlayButton />
            <a
              href="#outcomes"
              onClick={scrollToHash}
              className="text-foreground underline decoration-white/30 underline-offset-[5px] hover:decoration-foreground transition-colors"
            >
              {t("hero.cta_secondary")}
            </a>
          </div>
          <p className="mt-5 text-sm text-muted">{t("hero.platform_note")}</p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative phone-frame w-[220px] sm:w-[250px] md:w-full">
            <Image
              src={homeScreenshot}
              alt={t("screenshots.alt_livemap")}
              className="block w-full h-auto"
              placeholder="blur"
              sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 310px"
              priority
            />
            <HeroTrackDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
