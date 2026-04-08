"use client";

import { useReveal } from "./useReveal";

export default function FounderNote() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-16 md:py-20">
      <div ref={ref} className={`max-w-3xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="rounded-2xl border border-white/5 bg-surface/50 px-8 py-6 md:px-10 md:py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold text-base">
              L
            </div>
            <div>
              <span className="font-semibold text-sm">Lorand</span>
              <span className="text-muted text-xs ml-2">
                <a href="https://lorand.cc/" target="_blank" rel="noopener noreferrer" className="text-accent/60 hover:text-accent transition-colors">lorand.cc</a>
              </span>
            </div>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            I&apos;m a detectorist and a designer who picked up coding along the way. After too many hunts where I couldn&apos;t remember which parts of a field I&apos;d already covered, I wanted an app that actually got what detecting is about — not another hiking tracker with a different icon. So I started building one for myself. Figured if I&apos;d use it every hunt, someone else might too.
          </p>
        </div>
      </div>
    </section>
  );
}
