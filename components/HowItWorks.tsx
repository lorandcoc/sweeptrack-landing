"use client";

import { useReveal } from "./useReveal";

const steps = [
  {
    num: "01",
    title: "Scout",
    description: "Check the detecting forecast for soil conditions. Pull up USGS historical maps to find old roads and buildings. Browse nearby sites for leads.",
    bullets: ["Detecting Forecast", "Historical Map Overlay", "Nearby Sites", "Tide Table"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    color: "#FFB000",
  },
  {
    num: "02",
    title: "Detect",
    description: "GPS tracks your every step across 4 map types. Perimeter guard keeps you inside your permitted zone. Log finds with photos and notes as you go.",
    bullets: ["GPS Tracking", "Perimeter Guard", "Find Logging", "Permission Vault"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    color: "#00FF6A",
  },
  {
    num: "03",
    title: "Review",
    description: "Overlay up to 7 past tracks to see exactly where you missed. Compare sessions side by side. Export your data. Back everything up to Google Drive.",
    bullets: ["Track Overlay (7)", "Session Compare", "GPX/KML Export", "Cloud Backup"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    color: "#00DDFF",
  },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal(0.2);

  return (
    <section className="py-16 md:py-20 relative">
      <div ref={ref} className={`max-w-5xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Your Workflow</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Before, During, and <span className="text-accent">After the Hunt</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            SweepTrack covers every phase — not just the tracking part.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[52px] left-[16.66%] right-[16.66%] h-[2px]">
            <svg width="100%" height="2" className="overflow-visible">
              <line
                x1="0" y1="1" x2="100%" y2="1"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                className={`step-line ${visible ? "drawn" : ""}`}
              />
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFB000" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#00FF6A" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#00DDFF" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`step-circle ${visible ? "visible" : ""} flex flex-col items-center text-center`}
                style={{ transitionDelay: visible ? `${i * 300 + 200}ms` : "0ms" }}
              >
                {/* Step circle */}
                <div className="relative mb-5">
                  <div
                    className="w-[104px] h-[104px] rounded-full bg-surface flex items-center justify-center"
                    style={{ border: `1.5px solid ${step.color}30`, color: step.color }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="absolute -top-2 -right-2 text-[11px] font-bold px-2 py-0.5 rounded-full"
                    style={{ color: step.color, background: `${step.color}18`, border: `1px solid ${step.color}35` }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2" style={{ color: step.color }}>{step.title}</h3>
                <p className="text-muted text-sm max-w-[280px] leading-relaxed mb-4">{step.description}</p>

                {/* Feature pills */}
                <div className="flex flex-wrap justify-center gap-1.5">
                  {step.bullets.map((b) => (
                    <span
                      key={b}
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                      style={{ color: `${step.color}cc`, background: `${step.color}10`, border: `1px solid ${step.color}20` }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
