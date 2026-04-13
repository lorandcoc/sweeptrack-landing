"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

const faqs = [
  {
    q: "How does the Permission Vault keep me from trespassing?",
    a: "You add each landowner permission with their name, contact, approval status, expiry date, and the exact site boundary drawn on the map. The app shows which permissions are active, expiring, or expired. You can generate a PDF permission letter to share with landowners, and set calendar reminders before permits expire. Combined with Perimeter Guard, you get vibration and audio alerts if you wander outside your approved boundary.",
  },
  {
    q: "How do historical maps help me find better spots?",
    a: "The app overlays genuine USGS topographic survey maps from the 1800s onto your modern satellite view. You can see where old homesteads, schools, churches, roads, and settlements used to be — places that no longer exist on modern maps. These are prime detecting spots because people lived there, dropped things, and the sites are now empty fields. Adjust the overlay opacity to blend old and new.",
  },
  {
    q: "What does the Detecting Forecast actually measure?",
    a: "It pulls real-time weather data and generates a Detecting Score from 0 to 100 with a verdict: Excellent, Good, Fair, Poor, or Bad. The score factors in soil moisture (wet soil conducts signals deeper), wind speed, temperature, humidity, and precipitation. You can check any day up to a week ahead and search any location. Contextual tips explain why conditions are good or bad.",
  },
  {
    q: "How do I know if I've already covered an area?",
    a: "Three ways. The coverage heatmap shows a color-coded density overlay of your current session — green means lightly walked, red means hammered, empty means you missed it. Track overlay lets you load past sessions onto the live map so you can see exactly which strips you covered on previous visits. And session comparison lets you stack multiple visits to the same field and spot the gaps instantly.",
  },
  {
    q: "What does the Measure tool do?",
    a: "Tap the map to drop points and measure distance along a path with per-segment labels. Tap point 1 again to close it into a polygon — the app calculates perimeter and area in hectares or acres using real spherical geometry. You can drag vertices to edit, save measurements to the Library with a reverse-geocoded name, and convert any polygon into a Perimeter Guard boundary with one tap.",
  },
  {
    q: "How does find logging work?",
    a: "When you dig a target, tap the find button to drop a GPS-pinned marker. Pick one of 6 types (Treasure, Gold, Coin, Relic, Jewelry, Trash), set the depth on a 0-40 cm slider, and optionally add a name, value, weight, notes, a photo, and an audio recording. Every find is editable later. The photo gallery shows all your find photos in a grid, and find search lets you filter across sessions by name, type, or notes.",
  },
  {
    q: "Does the app support my specific detector?",
    a: "SweepTrack works with any metal detector — it's a GPS tracker and field toolkit, not a detector controller. As a bonus, it includes 61 preset templates across 12 brands (Minelab, XP, Nokta, Garrett, Fisher, Teknetics, Bounty Hunter, Quest, White's, Tesoro, Detech, Rutus). Save up to 10 custom configurations and share them via JSON export or QR code.",
  },
  {
    q: "What's the difference between Free and Pro?",
    a: "Free gives you GPS tracking on 3 map types, 10 sessions, 5 finds, 1 preset, and basic tools like the compass, ruler, and measure tool. Pro unlocks everything: unlimited sessions and finds, 10 presets, track overlay, heatmap, perimeter guard, permission vault, historical maps, offline maps, detecting forecast, tide tables, cloud backup, night vision, coin caliper, all 12 themes, and full export. $19.99/year or $2.99/month with a 7-day free trial.",
  },
  {
    q: "Does it work when I have no cell service?",
    a: "Yes. Download map tiles before you leave home — Street, Satellite, Terrain, and Historical Topo are all available for offline use. GPS tracking runs entirely on your phone's hardware with zero internet needed. The only features that require a connection are the weather forecast, tide tables, and nearby sites lookup.",
  },
  {
    q: "Is my detecting data private and safe?",
    a: "All data lives on your device. No servers, no analytics, no ads, no tracking. Optional Google Drive backup stores an encrypted copy in your own Drive account — we never see it. Export your data as GPX, KML, CSV, or JSON anytime. You own everything.",
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
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
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
