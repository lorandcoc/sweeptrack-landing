"use client";

import { useReveal } from "./useReveal";

export default function FounderNote() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-16 md:py-20">
      <div ref={ref} className={`max-w-3xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="rounded-2xl border border-white/5 bg-surface/50 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold text-lg">
                L
              </div>
              <div>
                <div className="font-semibold text-sm">Lorand</div>
                <div className="text-xs text-muted">Builder &middot; Detectorist &middot; <a href="https://lorand.cc/" target="_blank" rel="noopener noreferrer" className="text-accent/70 hover:text-accent transition-colors">lorand.cc</a></div>
              </div>
            </div>

            <p className="text-foreground/90 leading-relaxed mb-4">
              I kept coming back from 4-hour sessions with nothing to show — no map of where I walked, no record of what I covered. Every app I tried was made for hikers. So I made one for detecting.
            </p>

            <p className="text-muted text-sm leading-relaxed">
              The historical map overlays, the permission vault, the detecting forecast — those came from real problems in the field. SweepTrack is what I wished existed when I started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
