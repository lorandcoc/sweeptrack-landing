"use client";

import { useI18n } from "@/lib/i18n";
import { useSitePlayUrl } from "./GooglePlayButton";

export default function FounderNote() {
  const { t } = useI18n();
  const playUrl = useSitePlayUrl();

  return (
    <section className="st-rule py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-16">
        <h2 className="font-display st-h2">{t("foundernote.heading")}</h2>
        <div className="max-w-2xl">
          <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 [text-wrap:pretty]">
            <p>{t("foundernote.quote")}</p>
          </blockquote>
          <p className="mt-6 text-muted">
            <span className="text-foreground font-semibold">Lorand</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <a
              href="https://lorand.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-4 hover:text-foreground hover:decoration-foreground transition-colors"
            >
              lorand.cc
            </a>
          </p>
          <p className="mt-8">
            <a
              href={playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent transition-colors"
            >
              {t("foundernote.cta")}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
