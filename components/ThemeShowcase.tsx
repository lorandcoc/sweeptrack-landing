"use client";

import { useReveal } from "./useReveal";

const themes = [
  { name: "Tactical", accent: "#00FF6A", free: false },
  { name: "Amber", accent: "#FFD000", free: false },
  { name: "Cobalt", accent: "#00DDFF", free: false },
  { name: "Coral", accent: "#FF6B4A", free: false },
  { name: "Fuchsia", accent: "#FF22BB", free: true },
  { name: "Slate", accent: "#6B9FD4", free: false },
  { name: "Navy", accent: "#4488DD", free: false },
  { name: "Operator", accent: "#BBDD00", free: false },
  { name: "Monochrome", accent: "#FFFFFF", free: true },
  { name: "Neon Plasma", accent: "#BF00FF", free: false },
  { name: "Neon Toxic", accent: "#39FF14", free: false },
  { name: "Neon Laser", accent: "#FF003C", free: false },
];

export default function ThemeShowcase() {
  const { ref, visible } = useReveal();

  return (
    <section id="themes" className="py-16 md:py-20">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-14">
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">Personalize</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            <span className="text-accent">12 Color Themes</span> + Night Vision
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Make it yours. Every theme transforms the entire interface with its
            own aurora personality. 2 free, 10 with Pro.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 md:gap-6">
          {themes.map((theme, i) => (
            <div key={theme.name} className="group flex flex-col items-center gap-2.5">
              <div
                className={`relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl group-hover:scale-110 cursor-default swatch-enter ${visible ? "visible" : ""}`}
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${theme.accent}50, ${theme.accent}18 60%, #141428)`,
                  border: `1.5px solid ${theme.accent}40`,
                  transitionDelay: visible ? `${i * 100}ms` : "0ms",
                  boxShadow: visible ? `0 0 20px ${theme.accent}30, inset 0 0 15px ${theme.accent}15` : "none",
                }}
              >
                {theme.free && (
                  <span className="absolute -top-1.5 -right-2 text-[9px] font-bold bg-accent text-[#0A0A1A] px-1.5 py-0.5 rounded-full shadow-sm">
                    FREE
                  </span>
                )}
              </div>
              <span className="text-xs text-muted group-hover:text-foreground transition-colors font-medium">
                {theme.name}
              </span>
            </div>
          ))}

          {/* Night Vision */}
          <div className="group flex flex-col items-center gap-2.5">
            <div
              className={`w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl group-hover:scale-110 bg-black flex items-center justify-center cursor-default swatch-enter ${visible ? "visible" : ""}`}
              style={{
                border: "1.5px solid rgba(255, 0, 0, 0.4)",
                transitionDelay: visible ? `${themes.length * 100}ms` : "0ms",
                boxShadow: visible ? "inset 0 0 20px rgba(255, 0, 0, 0.15), 0 0 20px rgba(255, 0, 0, 0.2)" : "inset 0 0 20px rgba(255, 0, 0, 0.15)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="1.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <span className="text-xs text-muted group-hover:text-foreground transition-colors font-medium">
              Night Vision
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
