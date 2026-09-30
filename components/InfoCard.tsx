import type { CSSProperties } from "react";
import Badge from "./Badge";

/*
 * Feature cards for the feature pages: a card with a stripe in the page's
 * accent (--pa), the tier as a coloured pill (Free green, Pro gold, New cyan)
 * and a lift on hover. Presentational only (no hooks), so it renders inside
 * server pages.
 */
type Tier = "Free" | "Pro" | "New";

const TIER_TONE: Record<Tier, "free" | "premium" | "new"> = {
  Free: "free",
  Pro: "premium",
  New: "new",
};

const HOVER = { "--c-edge": "var(--pa-edge)", "--c-glow": "var(--pa)" } as CSSProperties;

export default function InfoCard({ title, body, tier }: { title: string; body: string; tier?: Tier }) {
  return (
    <div className="fcard relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a18] p-6" style={HOVER}>
      <span className="absolute inset-x-0 top-0 h-[3px] opacity-80" style={{ background: "var(--pa)" }} aria-hidden="true" />
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-foreground text-[17px] leading-snug">{title}</h3>
        {tier && <Badge tone={TIER_TONE[tier]}>{tier}</Badge>}
      </div>
      <p className="mt-3 text-muted text-[15px] leading-relaxed">{body}</p>
    </div>
  );
}

export function StepCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="fcard relative h-full rounded-2xl border border-white/10 bg-[#0a0a18] p-6" style={HOVER}>
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-full font-mono text-base font-bold text-[#050510]"
        style={{ background: "var(--pa)" }}
        aria-hidden="true"
      >
        {n}
      </span>
      <h3 className="mt-4 font-display text-xl leading-tight">{title}</h3>
      <p className="mt-2 text-muted text-[15px] leading-relaxed">{body}</p>
    </div>
  );
}
