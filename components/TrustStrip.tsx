"use client";

import Link from "next/link";
import { EyeOff, Lock, Smartphone, TimerOff } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const POINTS = [
  { titleKey: "trust.chip1_title", descKey: "trust.chip1_desc", icon: Smartphone, color: "var(--accent)" },
  { titleKey: "trust.chip2_title", descKey: "trust.chip2_desc", icon: Lock, color: "var(--st-gold)" },
  { titleKey: "trust.chip3_title", descKey: "trust.chip3_desc", icon: EyeOff, color: "var(--st-cyan)" },
  { titleKey: "trust.chip4_title", descKey: "trust.chip4_desc", icon: TimerOff, color: "var(--st-sky)" },
] as const;

export default function TrustStrip() {
  const { t } = useI18n();

  return (
    <section id="privacy" className="st-rule py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16">
        <div>
          <h2 className="font-display st-h2">{t("trust.heading")}</h2>
          <p className="mt-5">
            <Link
              href="/trust"
              className="text-muted underline decoration-white/30 underline-offset-4 hover:text-foreground hover:decoration-foreground transition-colors"
            >
              {t("footer.trust")}
            </Link>
          </p>
        </div>
        <dl className="grid sm:grid-cols-2 gap-x-10">
          {POINTS.map((p) => (
            <div key={p.titleKey} className="border-t border-white/10 py-6">
              <p.icon size={22} className="mb-3" style={{ color: p.color }} aria-hidden="true" />
              <dt className="font-semibold text-foreground">{t(p.titleKey)}</dt>
              <dd className="mt-2 text-muted leading-relaxed text-[15px]">{t(p.descKey)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
