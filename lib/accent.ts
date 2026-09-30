import type { CSSProperties } from "react";

/**
 * One colour per feature, shared by every page (see CLAUDE.md "Design
 * Rules"). A page or section sets --pa / --pa-faint / --pa-edge with
 * accentStyle(), and the shared blocks (PageHero wash, InfoCard stripe and
 * hover, BulletList dots, StepCard numbers, phone glow) read them.
 */
export type AccentName = "green" | "red" | "gold" | "cyan" | "sky" | "orange";

const ACCENTS: Record<AccentName, { c: string; faint: string; edge: string }> = {
  green: { c: "var(--accent)", faint: "var(--st-accent-faint)", edge: "var(--st-accent-edge)" },
  red: { c: "var(--st-red)", faint: "var(--st-red-faint)", edge: "var(--st-red-edge)" },
  gold: { c: "var(--st-gold)", faint: "var(--st-gold-faint)", edge: "var(--st-gold-edge)" },
  cyan: { c: "var(--st-cyan)", faint: "var(--st-cyan-faint)", edge: "var(--st-cyan-edge)" },
  sky: { c: "var(--st-sky)", faint: "var(--st-sky-faint)", edge: "var(--st-sky-edge)" },
  orange: { c: "var(--st-orange)", faint: "var(--st-orange-faint)", edge: "var(--st-orange-edge)" },
};

export function accentStyle(name: AccentName): CSSProperties {
  const a = ACCENTS[name];
  return { "--pa": a.c, "--pa-faint": a.faint, "--pa-edge": a.edge } as CSSProperties;
}
