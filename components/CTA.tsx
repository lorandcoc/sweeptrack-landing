"use client";

import { useReveal } from "./useReveal";

export default function CTA() {
  const { ref, visible } = useReveal();

  return (
    <section id="download" className="py-16 md:py-20 overflow-hidden">
      <div ref={ref} className={`max-w-4xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 cta-bg-shift rounded-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/8 blur-[100px] rounded-full" />

          <div className="relative border border-white/8 rounded-3xl p-10 md:p-16 text-center bg-surface/70 backdrop-blur-xl">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Ready?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Next Find Is{" "}
              <span className="text-accent glow-text">Waiting</span>
            </h2>
            <p className="text-muted text-lg max-w-lg mx-auto mb-2">
              7-day free trial with every feature unlocked.
            </p>
            <p className="text-accent/80 text-sm font-medium mb-6">
              Then $2.99/month or $19.99/year &middot; Cancel anytime
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-xs text-muted mb-8">
              {["GPS Tracking", "Detecting Forecast", "Offline Maps", "Cloud Backup", "Night Vision", "Permission Vault", "Session Analytics"].map((f) => (
                <span key={f} className="px-3 py-1 rounded-full border border-white/8 bg-white/[0.03]">{f}</span>
              ))}
            </div>

            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-accent text-[#0A0A1A] font-semibold hover:bg-accent-dim transition-all text-lg cta-pulse hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              Download Free on Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
