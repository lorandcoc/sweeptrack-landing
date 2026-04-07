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
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">From the Builder</p>

            <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              &ldquo;I built SweepTrack because I got tired of losing track of where I&apos;d already swept. I&apos;d come home, look at my phone, and have nothing to show for 4 hours in a field — no map, no stats, no record of what I covered. Every &lsquo;GPS app&rsquo; I tried was built for hikers, not detectorists. So I built my own.&rdquo;
            </blockquote>

            <p className="text-muted text-sm leading-relaxed mb-6">
              SweepTrack Pro started as a personal tool and grew into something I think every detectorist deserves to have. The historical map overlays, the permission vault, the detecting forecast — those all came from real problems I ran into in the field. This isn&apos;t a Silicon Valley app. It&apos;s made by someone who actually swings a coil.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold text-lg">
                L
              </div>
              <div>
                <div className="font-semibold text-sm">Lorand</div>
                <div className="text-xs text-muted">Builder of SweepTrack &middot; Detectorist &middot; Romania</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
