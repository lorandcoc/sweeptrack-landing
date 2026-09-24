import type { ReactNode } from "react";
import Link from "next/link";

/*
 * Building blocks for the feature pages, in the same editorial style as the
 * homepage: left-aligned serif headings, hairline rules between sections,
 * plain lists. Presentational only (no hooks), so they render inside the
 * server pages.
 */

export function PageHero({
  title,
  children,
  actions,
  note,
  aside,
}: {
  title: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  note?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-20">
      <div
        className={`max-w-6xl mx-auto px-6 ${
          aside ? "grid md:grid-cols-[minmax(0,1fr)_260px] lg:grid-cols-[minmax(0,1fr)_290px] gap-12 lg:gap-20 items-center" : ""
        }`}
      >
        <div className="max-w-2xl">
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
}: {
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="st-rule py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <div className="max-w-2xl mb-10 md:mb-12">
            <h2 className="font-display st-h2">{title}</h2>
            {intro && <p className="mt-4 text-muted text-lg leading-relaxed [text-wrap:pretty]">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/** Ruled grid for InfoCard / StepCard items. */
export function ItemGrid({ children, cols = 4 }: { children: ReactNode; cols?: 2 | 3 | 4 }) {
  const colClass = { 2: "sm:grid-cols-2", 3: "md:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return <div className={`grid ${colClass} gap-x-10 gap-y-8`}>{children}</div>;
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] text-foreground/85 leading-snug">
          <span className="mt-[0.5em] h-[5px] w-[5px] shrink-0 bg-white/40" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Two plans side by side. The paid one gets a thin accent rule on top. */
export function PlanCompare({
  free,
  paid,
  note,
}: {
  free: { label: string; items: string[] };
  paid: { label: string; items: string[] };
  note?: ReactNode;
}) {
  return (
    <div className="max-w-4xl grid md:grid-cols-2 border border-white/10 rounded-xl overflow-hidden">
      <div className="p-6 sm:p-8">
        <h3 className="font-semibold text-muted mb-5">{free.label}</h3>
        <BulletList items={free.items} />
      </div>
      <div className="p-6 sm:p-8 border-t md:border-t-0 md:border-l border-white/10 bg-white/[0.02] shadow-[inset_0_2px_0_0_var(--accent)]">
        <h3 className="font-semibold text-accent mb-5">{paid.label}</h3>
        <BulletList items={paid.items} />
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
        <div className="max-w-2xl">
          <h2 className="font-display st-h2">{title}</h2>
          <p className="mt-5 text-lg text-muted leading-relaxed [text-wrap:pretty]">{children}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">{actions}</div>
        </div>
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
