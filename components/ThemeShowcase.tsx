"use client";

import { useReveal } from "./useReveal";

const themes = [
  { name: "Tactical", accent: "#00FF6A", free: true },
  { name: "Fuchsia", accent: "#FF22BB", free: true },
  { name: "Gunmetal", accent: "#FF8833", free: true },
  { name: "Amber", accent: "#FFB833", free: false },
  { name: "Cobalt", accent: "#00DDFF", free: false },
  { name: "Coral", accent: "#FF6B4A", free: false },
  { name: "Violet", accent: "#B44AFF", free: false },
  { name: "Slate", accent: "#6B9FD4", free: false },
  { name: "Bronze", accent: "#CD8032", free: false },
  { name: "Navy", accent: "#4488DD", free: false },
  { name: "Operator", accent: "#BBDD00", free: false },
  { name: "Ironside", accent: "#DD8833", free: false },
];

export default function ThemeShowcase() {
  const { ref, visible } = useReveal();

  return (
    <section id="themes" className="py-20 md:py-28">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Personalize</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-accent">12 Color Themes</span> + Night Vision
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Make it yours. Every theme transforms the entire interface with its
            own aurora personality. 3 free, 9 with Pro.
          </p>
        </div>

        {/* Theme grid — 6 columns desktop, 4 tablet, 3 mobile */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-5 md:gap-6 justify-items-center">
          {themes.map((theme) => (
            <div key={theme.name} className="group flex flex-col items-center gap-2.5">
              <div
                className="relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg cursor-default"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${theme.accent}50, ${theme.accent}18 60%, #141428)`,
                  border: `1.5px solid ${theme.accent}40`,
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
              className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl transition-all duration-300 group-hover:scale-110 bg-black flex items-center justify-center cursor-default"
              style={{
                border: "1.5px solid rgba(255, 0, 0, 0.4)",
                boxShadow: "inset 0 0 20px rgba(255, 0, 0, 0.15)",
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
