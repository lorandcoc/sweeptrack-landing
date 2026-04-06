"use client";

import { useReveal } from "./useReveal";
import ComingSoonButton from "./ComingSoonButton";

export default function CTA() {
  const { ref, visible } = useReveal();

  return (
    <section id="download" className="py-16 md:py-20 overflow-hidden">
      <div ref={ref} className={`max-w-4xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 cta-bg-shift rounded-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/8 blur-[100px] rounded-full" />

          <div className="relative border border-white/8 rounded-3xl p-10 md:p-16 text-center bg-surface/70 backdrop-blur-xl">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Almost There</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Next Find Is{" "}
              <span className="text-accent glow-text">Waiting</span>
            </h2>
            <p className="text-muted text-lg max-w-lg mx-auto mb-2">
              Free to download and use. Pro upgrade unlocks everything.
            </p>
            <p className="text-accent/80 text-sm font-medium mb-6">
              Launching soon on Google Play
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-xs text-muted mb-8">
              {["GPS Tracking", "Detecting Forecast", "Offline Maps", "Cloud Backup", "Night Vision", "Permission Vault", "Track Overlay"].map((f) => (
                <span key={f} className="px-3 py-1 rounded-full border border-white/8 bg-white/[0.03]">{f}</span>
              ))}
            </div>

            <div className="flex justify-center">
              <ComingSoonButton size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
