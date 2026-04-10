"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

const faqs = [
  {
    q: "Does SweepTrack work offline?",
    a: "Yes. You can download offline maps (Street, Satellite, Terrain, and Historical Topo) for any area. GPS tracking works without cell service. Weather, tide, and nearby sites features need an internet connection.",
  },
  {
    q: "Does it drain my battery?",
    a: "SweepTrack uses Android's efficient foreground location service. On most phones you'll lose around 10-15% battery per hour of active tracking, similar to Google Maps navigation. Night Vision mode helps save battery on OLED screens.",
  },
  {
    q: "What metal detectors are supported?",
    a: "The app has 57 preset templates across 12 brands: Minelab, XP, Nokta, Garrett, Fisher, Teknetics, Bounty Hunter, Quest, White's, Tesoro, Detech, and Rutus. You can also create custom presets for any detector.",
  },
  {
    q: "Is my data private?",
    a: "All data is stored locally on your device. We don't operate any servers, don't collect analytics, don't show ads, and don't track your behavior. Optional Google Drive backup puts an encrypted copy in your own Drive account. We never see your data.",
  },
  {
    q: "Can I use it outside the US?",
    a: "Absolutely. GPS tracking, offline maps, cloud backup, presets, and most features work worldwide. The USGS Historical Map overlay is US-only. Tide tables cover US coastal stations via NOAA. The detecting forecast works globally via Open-Meteo.",
  },
  {
    q: "What's the difference between Free and Pro?",
    a: "Free gives you core GPS tracking, 10 sessions, 5 finds, 1 preset, and basic features. Pro unlocks everything: unlimited sessions and finds, 10 presets, track overlay, heatmap, perimeter guard, permission vault, historical maps, offline maps, detecting forecast, tide table, cloud backup, night vision, map comparison, coin caliper, and all 12 themes.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. Export individual or multiple sessions as GPX (for Google Earth, Garmin), KML, CSV, or SweepTrack JSON (full data with finds, weather, and stats). You can also share detector presets via QR code or file export.",
  },
  {
    q: "What's the historical map overlay?",
    a: "It overlays real USGS Historical Topographic Maps from the ArcGIS collection onto your modern map. You can see where old roads, buildings, settlements, and landmarks used to be — perfect for finding productive detecting spots that no longer exist on modern maps.",
  },
  {
    q: "How does the Detecting Forecast work?",
    a: "It analyzes soil moisture, wind speed, temperature, humidity, and precipitation to generate a Detecting Score from 0-100 with a one-word verdict (Excellent, Good, Fair, Poor, or Bad). Pick any day up to a week ahead, or search any location on Earth. High soil moisture + low wind + moderate temperature = excellent conditions. Contextual tips appear based on what the weather actually looks like.",
  },
  {
    q: "Is there an iOS version?",
    a: "Not yet. SweepTrack Pro is Android-only for now. An iOS version may come in the future depending on demand.",
  },
];

// Generate FAQ schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm md:text-base font-medium text-foreground/90 group-hover:text-white transition-colors pr-4">
          {q}
        </span>
        <span className={`text-accent shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] pb-5" : "max-h-0"}`}>
        <p className="text-sm text-muted leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, visible } = useReveal();

  return (
    <section id="faq" className="py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div ref={ref} className={`max-w-3xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Got <span className="text-accent">Questions</span>?
          </h2>
        </div>

        <div className="rounded-2xl border border-white/5 bg-surface/30 px-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
