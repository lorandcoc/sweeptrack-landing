import type { ReactNode } from "react";

/*
 * Shared, polished card primitives used across the feature pages. Icon in an
 * accent-tinted square, optional tier badge, and on hover a lift + accent glow +
 * top accent line + accent border. Presentational only (no hooks), so it renders
 * fine inside the server feature pages.
 */

type Tier = "Free" | "Pro" | "New";

function badgeClass(tier: Tier) {
  if (tier === "Free") return "text-accent/90 border-accent/30 bg-accent/[0.06]";
  if (tier === "New") return "text-cyan-300/90 border-cyan-400/30 bg-cyan-400/[0.06]";
  return "text-amber-300/90 border-amber-400/30 bg-amber-400/[0.06]";
}

export default function InfoCard({
  icon,
  title,
  body,
  tier,
  accent = "#00FF6A",
}: {
  icon?: ReactNode;
  title: string;
  body: string;
  tier?: Tier;
  accent?: string;
}) {
  return (
    <div
      className="ic-card group relative h-full rounded-2xl border border-white/[0.07] bg-surface/40 p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-surface/70"
      style={{ ["--ic" as string]: accent }}
    >
      <span className="ic-glow" aria-hidden="true" />
      <span className="ic-topline" aria-hidden="true" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3 mb-4">
          {icon ? (
            <span
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl border shrink-0"
              style={{ color: accent, borderColor: `${accent}40`, background: `${accent}14` }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {icon}
              </svg>
            </span>
          ) : (
            <span />
          )}
          {tier && (
            <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${badgeClass(tier)}`}>
              {tier}
            </span>
          )}
        </div>
        <h3 className="font-semibold text-base mb-1.5">{title}</h3>
        <p className="text-muted text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export function StepCard({
  n,
  title,
  body,
  accent = "#00FF6A",
}: {
  n: string;
  title: string;
  body: string;
  accent?: string;
}) {
  return (
    <div
      className="ic-card group relative h-full rounded-2xl border border-white/[0.07] bg-surface/40 p-6 text-center overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-surface/70"
      style={{ ["--ic" as string]: accent }}
    >
      <span className="ic-glow" aria-hidden="true" />
      <div className="relative">
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-full border font-display text-xl mb-4"
          style={{ color: accent, borderColor: `${accent}45`, background: `${accent}12` }}
        >
          {n}
        </div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-muted text-sm leading-relaxed max-w-[300px] mx-auto">{body}</p>
      </div>
    </div>
  );
}
