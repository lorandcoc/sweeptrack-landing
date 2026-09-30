"use client";

import type { ReactNode } from "react";
import { useReveal } from "./useReveal";

/**
 * Fades and lifts its children in when they scroll into view (styles: .rv in
 * globals.css). Use it for below-the-fold content only, so nothing above the
 * fold waits on hydration to become visible.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal(0.12);
  return (
    <div ref={ref} className={`rv ${visible ? "rv-in" : ""} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
