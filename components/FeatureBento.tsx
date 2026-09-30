"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, BarChart3, Map as MapIcon, Radio, Route, ShieldCheck } from "lucide-react";
import oldMapImg from "@/public/maps/old_map.jpg";
import trackImg from "@/public/screenshots/home.jpg";
import Reveal from "./Reveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * The homepage feature hierarchy, after the old-map comparison:
 *   two large image cards: tracking and map overlays;
 *   three cards: Finds Intelligence, Radar, permissions;
 *   every other tool as a chip strip linking to /features.
 * Each feature keeps one colour across the site (lib/accent.ts). Badges follow
 * the Free / Pro split in components/PricingTable.tsx.
 */
type Accent = { color: string; faint: string; edge: string };
const GOLD: Accent = { color: "var(--st-gold)", faint: "var(--st-gold-faint)", edge: "var(--st-gold-edge)" };
const GREEN: Accent = { color: "var(--accent)", faint: "var(--st-accent-faint)", edge: "var(--st-accent-edge)" };
const CYAN: Accent = { color: "var(--st-cyan)", faint: "var(--st-cyan-faint)", edge: "var(--st-cyan-edge)" };
const SKY: Accent = { color: "var(--st-sky)", faint: "var(--st-sky-faint)", edge: "var(--st-sky-edge)" };
const ORANGE: Accent = { color: "var(--st-orange)", faint: "var(--st-orange-faint)", edge: "var(--st-orange-edge)" };

type Card = {
  key: "overlays" | "coverage" | "finds" | "radar" | "permissions";
  href: string;
  accent: Accent;
  icon: ReactNode;
  /** One key, or two joined with " · " (a tier and its limit). */
  badge: TranslationKey[];
  premium: boolean;
  image?: { src: StaticImageData; alt: TranslationKey; position?: string };
};

const BIG: Card[] = [
  {
    key: "coverage",
    href: "/coverage",
    accent: GREEN,
    icon: <Route size={20} />,
    badge: ["bento.badge_free_track"],
    premium: false,
    image: { src: trackImg, alt: "screenshots.alt_livemap", position: "center 47%" },
  },
  {
    key: "overlays",
    href: "/overlays",
    accent: GOLD,
    icon: <MapIcon size={20} />,
    badge: ["pricing.pro_label"],
    premium: true,
    image: { src: oldMapImg, alt: "mapcompare.alt_historical", position: "center 34%" },
  },
];

const MID: Card[] = [
  { key: "finds", href: "/finds-intelligence", accent: CYAN, icon: <BarChart3 size={20} />, badge: ["pricing.pro_label"], premium: true },
  { key: "radar", href: "/radar", accent: SKY, icon: <Radio size={20} />, badge: ["radar.pill"], premium: false },
  { key: "permissions", href: "/permissions", accent: ORANGE, icon: <ShieldCheck size={20} />, badge: ["pricing.free_label", "pricing.feat_vault_free"], premium: false },
];

const TOOLS: TranslationKey[] = [
  "featuretag.offline",
  "featuretag.cloud",
  "featuretag.perimeter",
  "featuretag.forecast",
  "featuretag.tide",
  "featuretag.waypoints",
  "featuretag.compare",
  "featuretag.heatmap",
  "featuretag.nightvision",
  "featuretag.export",
  "featuretag.languages",
];

/* Like components/Badge.tsx, but free to wrap: "Free to join · Pro to host"
 * runs to two lines in the longer locales. */
function TierBadge({ label, premium }: { label: string; premium: boolean }) {
  const tone = premium
    ? "text-[var(--st-gold)] bg-[var(--st-gold-faint)] border-[var(--st-gold-edge)]"
    : "text-accent bg-[var(--st-accent-faint)] border-[var(--st-accent-edge)]";
  return (
    <span className={`rounded-2xl border px-2.5 py-0.5 text-right text-[11px] font-bold uppercase leading-snug tracking-wider ${tone}`}>
      {label}
    </span>
  );
}

function FeatureCard({ card, big }: { card: Card; big?: boolean }) {
  const { t } = useI18n();
  const vars = { "--c-edge": card.accent.edge, "--c-glow": card.accent.color } as CSSProperties;
  return (
    <Link
      href={card.href}
      style={vars}
      className="fcard group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a18]"
    >
      {card.image && (
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={card.image.src}
            alt={t(card.image.alt)}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="fcard-img object-cover"
            style={{ objectPosition: card.image.position }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a18] via-[#0a0a18]/20 to-transparent" />
        </div>
      )}
      <div className={`flex flex-1 flex-col ${big ? "p-7" : "p-6"}`}>
        <div className="flex items-center justify-between gap-3">
          <span
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
            style={{ color: card.accent.color, background: card.accent.faint, borderColor: card.accent.edge }}
          >
            {card.icon}
          </span>
          <TierBadge label={card.badge.map((k) => t(k)).join(" · ")} premium={card.premium} />
        </div>
        <h3 className={`mt-5 font-display leading-tight ${big ? "text-[1.9rem]" : "text-2xl"}`}>
          {t(`outcomes.${card.key}_title` as TranslationKey)}
        </h3>
        <p className="mt-3 text-muted leading-relaxed">{t(`outcomes.${card.key}_desc` as TranslationKey)}</p>
        <ul className="mt-5 space-y-2 text-[15px] text-foreground/85 leading-snug">
          {(["b1", "b2", "b3", "b4"] as const).slice(0, big ? 4 : 3).map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: card.accent.color }} aria-hidden="true" />
              {t(`outcomes.${card.key}_${b}` as TranslationKey)}
            </li>
          ))}
        </ul>
        <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: card.accent.color }}>
          {t("featuresall.learn_more")}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function FeatureBento() {
  const { t } = useI18n();
  return (
    <section id="outcomes" className="st-rule py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="font-display st-h2 max-w-2xl">{t("outcomes.heading")}</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">{t("features.description")}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {BIG.map((c, i) => (
            <Reveal key={c.key} delay={i * 120}>
              <FeatureCard card={c} big />
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {MID.map((c, i) => (
            <Reveal key={c.key} delay={i * 120}>
              <FeatureCard card={c} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5">
          <Link
            href="/features"
            className="fcard group flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#0a0a18] p-6 md:flex-row md:items-center md:justify-between"
            style={{ "--c-edge": "rgba(255,255,255,0.25)", "--c-glow": "rgba(255,255,255,0.25)" } as CSSProperties}
          >
            <div className="md:max-w-xs">
              <h3 className="font-display text-2xl leading-tight">{t("outcomes.more_title")}</h3>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                {t("outcomes.more_link")}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <ul className="flex flex-wrap gap-2 md:justify-end">
              {TOOLS.map((k) => (
                <li key={k} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/85">
                  {t(k)}
                </li>
              ))}
            </ul>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
