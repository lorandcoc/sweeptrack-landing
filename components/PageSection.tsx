import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { accentStyle, type AccentName } from "@/lib/accent";

/*
 * Building blocks for the feature pages (CLAUDE.md "Design Rules"): a colour
 * wash in the page's accent behind the hero, badges above headings, card
 * grids, and sections that reveal on scroll. The page accent comes from --pa
 * (set with accentStyle() on <main> or per section). Presentational only (no
 * hooks), so they render inside the server pages; Reveal is the one client
 * island.
 */

export function PageHero({
  title,
  children,
  actions,
  note,
  aside,
  badges,
}: {
  title: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  note?: ReactNode;
  aside?: ReactNode;
  badges?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20">
      <div className="pa-wash pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className={`relative max-w-6xl mx-auto px-6 ${
          aside ? "grid md:grid-cols-[minmax(0,1fr)_260px] lg:grid-cols-[minmax(0,1fr)_290px] gap-12 lg:gap-20 items-center" : ""
        }`}
      >
        <div className="max-w-2xl">
          {badges && <div className="mb-5 flex flex-wrap gap-2">{badges}</div>}
          <h1 className="font-display text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.1rem] lg:leading-[1.05] [text-wrap:balance]">
            {title}
          </h1>
          <div className="mt-6 space-y-4 text-lg text-muted leading-relaxed [text-wrap:pretty]">{children}</div>
          {actions && <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">{actions}</div>}
          {note && <p className="mt-5 text-sm text-muted">{note}</p>}
        </div>
        {aside}
      </div>
    </section>
  );
}

export function PageSection({
  title,
  intro,
  children,
  id,
  accent,
  badges,
}: {
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  id?: string;
  accent?: AccentName;
  badges?: ReactNode;
}) {
  return (
    <section id={id} className="st-rule py-16 md:py-24" style={accent ? accentStyle(accent) : undefined}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          {title && (
            <div className="max-w-2xl mb-10 md:mb-12">
              {badges && <div className="mb-4 flex flex-wrap gap-2">{badges}</div>}
              <h2 className="font-display st-h2">
                {accent && <span className="mr-3 inline-block h-3 w-3 rounded-full align-middle" style={{ background: "var(--pa)" }} aria-hidden="true" />}
                {title}
              </h2>
              {intro && <p className="mt-4 text-muted text-lg leading-relaxed [text-wrap:pretty]">{intro}</p>}
            </div>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

/** Card grid for InfoCard / StepCard items. */
export function ItemGrid({ children, cols = 4 }: { children: ReactNode; cols?: 2 | 3 | 4 }) {
  const colClass = { 2: "sm:grid-cols-2", 3: "md:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return <div className={`grid ${colClass} gap-5`}>{children}</div>;
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] text-foreground/90 leading-snug">
          <span className="mt-[0.4em] h-2 w-2 shrink-0 rounded-full" style={{ background: "var(--pa)" }} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Two plans side by side: free in neutral, the paid one gold like every Pro badge. */
export function PlanCompare({
  free,
  paid,
  note,
}: {
  free: { label: string; items: string[] };
  paid: { label: string; items: string[] };
  note?: ReactNode;
}) {
  const list = (items: string[], color: string) => (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] text-foreground/90 leading-snug">
          <Check size={18} className="mt-0.5 shrink-0" style={{ color }} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="max-w-4xl grid gap-5 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-[#0a0a18] p-6 sm:p-8">
        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-accent">{free.label}</h3>
        {list(free.items, "var(--accent)")}
      </div>
      <div className="rounded-2xl border border-[var(--st-gold-edge)] bg-gradient-to-b from-[#1c1608] to-[#0f0c06] p-6 sm:p-8 shadow-[0_24px_70px_-30px_rgba(255,197,61,0.45)]">
        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[var(--st-gold)]">{paid.label}</h3>
        {list(paid.items, "var(--st-gold)")}
        {note && <p className="mt-6 pt-5 border-t border-white/10 text-sm text-muted leading-relaxed">{note}</p>}
      </div>
    </div>
  );
}

export function PageClosing({
  title,
  children,
  actions,
}: {
  title: ReactNode;
  children: ReactNode;
  actions: ReactNode;
}) {
  return (
    <section className="st-rule py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b2016] via-[#0a0a18] to-[#1c1608] px-7 py-12 md:px-14 md:py-14">
            <div className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--pa)" }} aria-hidden="true" />
            <div className="pa-wash pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <h2 className="font-display st-h2">{title}</h2>
              <p className="mt-5 text-lg text-muted leading-relaxed [text-wrap:pretty]">{children}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">{actions}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Underlined text link, for secondary actions next to a button. */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const className =
    "text-foreground underline decoration-white/30 underline-offset-[5px] hover:decoration-foreground transition-colors";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/** Solid button for non-Play actions (e.g. an email link), matching GooglePlayButton. */
export function ButtonLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center px-6 py-3.5 text-base rounded-lg bg-accent text-[#050510] font-semibold hover:bg-accent-dim transition-colors"
    >
      {children}
    </a>
  );
}
