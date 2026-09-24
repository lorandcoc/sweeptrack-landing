/*
 * Shared list items for the feature pages, in the same ruled style as the
 * homepage: a hairline on top, a title, a short paragraph. The tier (Free,
 * Pro, New) is plain text next to the title rather than a pill.
 * Presentational only (no hooks), so it renders inside server pages.
 */

type Tier = "Free" | "Pro" | "New";

const TIER_CLASS: Record<Tier, string> = {
  Free: "text-accent/90",
  Pro: "text-amber-200/90",
  New: "text-cyan-200/90",
};

export default function InfoCard({ title, body, tier }: { title: string; body: string; tier?: Tier }) {
  return (
    <div className="h-full border-t border-white/10 pt-5">
      <h3 className="font-semibold text-foreground">
        {title}
        {tier && <span className={`ml-2 text-xs font-medium ${TIER_CLASS[tier]}`}>{tier}</span>}
      </h3>
      <p className="mt-2 text-muted text-[15px] leading-relaxed">{body}</p>
    </div>
  );
}

export function StepCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="h-full border-t border-white/10 pt-5">
      <p className="font-mono text-sm text-muted">{n}</p>
      <h3 className="mt-2 font-display text-xl leading-tight">{title}</h3>
      <p className="mt-2 text-muted text-[15px] leading-relaxed">{body}</p>
    </div>
  );
}
