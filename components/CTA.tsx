"use client";

import { useReveal } from "./useReveal";
import ComingSoonButton from "./ComingSoonButton";

export default function CTA() {
  const { ref, visible } = useReveal();

  return (
    <section id="download" className="py-20 md:py-28">
      <div ref={ref} className={`max-w-4xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="border border-white/[0.06] rounded-3xl p-10 md:p-16 text-center bg-surface/50">
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-4">Almost There</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Your next find is{" "}
            <span className="text-accent">waiting</span>
          </h2>
          <p className="text-muted text-lg max-w-lg mx-auto mb-2">
            Free to download and use. Pro upgrade unlocks everything.
          </p>
          <p className="text-accent/70 text-sm font-medium mb-6">
            Launching soon on Google Play
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-xs text-muted mb-8">
            {["GPS Tracking", "Detecting Forecast", "Offline Maps", "Cloud Backup", "Night Vision", "Permission Vault", "Track Overlay"].map((f) => (
              <span key={f} className="px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">{f}</span>
            ))}
          </div>

          <div className="flex justify-center">
            <ComingSoonButton size="large" />
          </div>
        </div>
      </div>
    </section>
  );
}
