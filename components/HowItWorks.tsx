"use client";

import { useReveal } from "./useReveal";

const steps = [
  {
    num: "01",
    title: "Record",
    description: "Hit record and start sweeping. GPS tracks your every move in real-time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Track",
    description: "See your path, heatmap, and grid coverage build up as you detect.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Analyze",
    description: "Review stats, compare sessions, export data, and plan your next hunt.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.2" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal(0.2);

  return (
    <section className="py-20 md:py-28 relative">
      <div ref={ref} className={`max-w-5xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Three Steps to <span className="text-accent">Better Hunts</span>
          </h2>
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
                  <stop offset="0%" stopColor="#00FF6A" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#00DDFF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#B44AFF" stopOpacity="0.5" />
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
                  <div className="w-[104px] h-[104px] rounded-full bg-surface border border-accent/20 flex items-center justify-center text-accent">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 text-[11px] font-bold text-accent bg-accent/15 border border-accent/30 px-2 py-0.5 rounded-full">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted text-sm max-w-[240px] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
