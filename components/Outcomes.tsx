"use client";

import Link from "next/link";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * The homepage hub: the five main parts of the app as a ruled list, each row
 * linking to its own page. Title and summary on the left, four specifics on
 * the right. The last row points to the full feature list.
 */

const AREAS = [
  { key: "coverage", href: "/coverage" },
  { key: "overlays", href: "/overlays" },
  { key: "finds", href: "/finds-intelligence" },
  { key: "radar", href: "/radar" },
  { key: "permissions", href: "/permissions" },
] as const;

const BULLETS = ["b1", "b2", "b3", "b4"] as const;

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Outcomes() {
  const { t } = useI18n();

  return (
    <section id="outcomes" className="st-rule py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display st-h2 mb-10 md:mb-14">{t("outcomes.heading")}</h2>

        <ul className="border-t border-white/10">
          {AREAS.map((area) => (
            <li key={area.key} className="border-b border-white/10">
              <Link
                href={area.href}
                className="group grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] gap-x-12 gap-y-4 py-8 md:py-10"
              >
                <div>
                  <h3 className="font-display text-2xl md:text-[1.7rem] leading-tight group-hover:underline decoration-1 underline-offset-[6px] decoration-white/40">
                    {t(`outcomes.${area.key}_title` as TranslationKey)}
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed max-w-md">
                    {t(`outcomes.${area.key}_desc` as TranslationKey)}
                  </p>
                </div>
                <ul className="space-y-2 text-[15px] text-foreground/85 leading-snug md:pt-1.5">
                  {BULLETS.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[0.5em] h-[5px] w-[5px] shrink-0 bg-white/40" aria-hidden="true" />
                      {t(`outcomes.${area.key}_${b}` as TranslationKey)}
                    </li>
                  ))}
                </ul>
                <div className="hidden md:block pt-2">
                  <Arrow />
                </div>
              </Link>
            </li>
          ))}

          <li className="border-b border-white/10">
            <Link
              href="/features"
              className="group grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] gap-x-12 gap-y-3 py-8 md:py-10"
            >
              <h3 className="font-display text-2xl md:text-[1.7rem] leading-tight group-hover:underline decoration-1 underline-offset-[6px] decoration-white/40">
                {t("outcomes.more_title")}
              </h3>
              <p className="text-muted leading-relaxed md:pt-1.5">
                {t("outcomes.more_desc")}{" "}
                <span className="text-foreground whitespace-nowrap">{t("outcomes.more_link")}</span>
              </p>
              <div className="hidden md:block pt-2">
                <Arrow />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
