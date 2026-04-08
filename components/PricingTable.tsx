"use client";

import { useReveal } from "./useReveal";
import ComingSoonButton from "./ComingSoonButton";

const features = [
  { name: "GPS Tracking", free: "3 map types", pro: "4 (+ USGS Historical)" },
  { name: "Sessions", free: "10", pro: "Unlimited" },
  { name: "Find Logging", free: "5 finds", pro: "Unlimited" },
  { name: "Detector Presets", free: "1 slot", pro: "10 + QR sharing" },
  { name: "Track Overlay (7 tracks)", free: false, pro: true },
  { name: "Perimeter Guard", free: false, pro: true },
  { name: "Permission Vault + PDF", free: false, pro: true },
  { name: "Historical Map Overlay", free: false, pro: true },
  { name: "Offline Maps (4 sources)", free: false, pro: true },
  { name: "Detecting Forecast + Tides", free: false, pro: true },
  { name: "Cloud Backup", free: false, pro: true },
  { name: "Export, Heatmap, Night Vision, and more", free: false, pro: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-accent font-bold">&#10003;</span>;
  if (value === false) return <span className="text-white/20">&mdash;</span>;
  return <span className="text-xs text-muted">{value}</span>;
}

export default function PricingTable() {
  const { ref, visible } = useReveal();

  return (
    <section id="pricing" className="py-16 md:py-20">
      <div ref={ref} className={`max-w-3xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Free to Start. <span className="text-accent">Pro When You&apos;re Ready.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Use the core features forever at no cost. Upgrade to Pro to unlock the full arsenal.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {/* Free */}
          <div className="rounded-2xl border border-white/8 bg-surface/50 p-6">
            <div className="text-sm font-semibold text-muted uppercase tracking-wider mb-1">Free</div>
            <div className="text-3xl font-bold mb-1">$0</div>
            <div className="text-xs text-muted mb-4">Forever. No credit card.</div>
            <div className="text-sm text-muted">Core GPS tracking, 10 sessions, 5 finds, 1 preset, basic features.</div>
          </div>
          {/* Pro */}
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 relative">
            <span className="absolute -top-3 right-4 text-[10px] font-bold uppercase tracking-wider bg-accent text-[#0A0A1A] px-3 py-1 rounded-full">Recommended</span>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">Pro</div>
            <div className="text-3xl font-bold mb-1">$19.99<span className="text-base font-normal text-muted">/year</span></div>
            <div className="text-xs text-muted mb-4">Save 44% vs monthly ($2.99/mo). 7-day free trial.</div>
            <div className="text-sm text-muted">Everything. Unlimited. No ads. No limits.</div>
          </div>
        </div>

        {/* Feature comparison */}
        <div className="rounded-2xl border border-white/5 overflow-hidden">
          <div className="grid grid-cols-[1fr_80px_80px] bg-surface/80 px-4 py-3 border-b border-white/5">
            <div className="text-xs font-semibold text-muted uppercase tracking-wider">Feature</div>
            <div className="text-xs font-semibold text-muted uppercase tracking-wider text-center">Free</div>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider text-center">Pro</div>
          </div>
          {features.map((f, i) => (
            <div key={f.name} className={`grid grid-cols-[1fr_80px_80px] px-4 py-2.5 ${i % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"} ${!f.free ? "" : ""}`}>
              <div className="text-sm text-white/80">{f.name}</div>
              <div className="text-center"><Cell value={f.free} /></div>
              <div className="text-center"><Cell value={f.pro} /></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <ComingSoonButton />
        </div>
      </div>
    </section>
  );
}
