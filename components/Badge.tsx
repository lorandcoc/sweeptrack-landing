import type { ReactNode } from "react";

/*
 * Small uppercase pill. "free" and "premium" follow the site-wide tier
 * colours (green / gold); "accent" takes the page's own colour (--pa).
 * Presentational only, so it renders inside server pages.
 */
type Tone = "free" | "premium" | "accent" | "new";

const TONES: Record<Tone, string> = {
  free: "text-accent bg-[var(--st-accent-faint)] border-[var(--st-accent-edge)]",
  premium: "text-[var(--st-gold)] bg-[var(--st-gold-faint)] border-[var(--st-gold-edge)]",
  accent: "text-[var(--pa)] bg-[var(--pa-faint)] border-[var(--pa-edge)]",
  new: "text-[var(--st-cyan)] bg-[var(--st-cyan-faint)] border-[var(--st-cyan-edge)]",
};

export default function Badge({ tone, children }: { tone: Tone; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${TONES[tone]}`}>
      {children}
    </span>
  );
}
