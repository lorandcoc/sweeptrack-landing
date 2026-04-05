"use client";

import { useReveal } from "./useReveal";

const items = [
  "55 Detector Presets",
  "Live GPS Tracking",
  "Heatmap Visualization",
  "Grid Search Mode",
  "Offline Maps",
  "Cloud Backup",
  "Session Analytics",
  "Night Vision",
  "12 Color Themes",
  "GPX / KML Export",
  "Perimeter Guard",
  "Weather & Tides",
  "Historic Sites",
  "QR Sharing",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="marquee-container py-3">
      <div
        className="marquee-track"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {/* Double the items for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 px-5 py-2 mx-2 rounded-full border border-white/[0.06] bg-surface/60 text-sm text-muted font-medium whitespace-nowrap hover:text-accent hover:border-accent/20 transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-10 md:py-14 overflow-hidden">
      <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
        <p className="text-center text-muted text-xs font-medium tracking-widest uppercase mb-4">All in One App &middot; Ad-Free</p>
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
