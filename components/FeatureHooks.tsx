"use client";

import { useState, useEffect } from "react";
import { Search, Map, Palette, CheckCircle2, Navigation } from "lucide-react";
import { useReveal } from "./useReveal";

const themes = [
  { id: "tactical", name: "Tactical", color: "#00FF6A" },
  { id: "amber", name: "Amber", color: "#FFD000" },
  { id: "cobalt", name: "Cobalt", color: "#00DDFF" },
  { id: "coral", name: "Coral", color: "#FF6B4A" },
  { id: "fuchsia", name: "Fuchsia", color: "#FF22BB" },
  { id: "neon_toxic", name: "Neon Toxic", color: "#39FF14" },
];

const brands = ["Minelab", "XP", "Nokta", "Garrett", "Fisher", "Quest", "Bounty Hunter"];

export default function FeatureHooks() {
  const { ref: hooksRef, visible } = useReveal();
  
  // Theme Switcher State
  const [activeTheme, setActiveTheme] = useState(themes[0]);
  
  // Detector Search State
  const [searchQuery, setSearchQuery] = useState("");
  const [searchStatus, setSearchStatus] = useState<"idle" | "searching" | "found">("idle");

  useEffect(() => {
    if (searchQuery.length > 2) {
      setSearchStatus("searching");
      const timer = setTimeout(() => {
        setSearchStatus("found");
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setSearchStatus("idle");
    }
  }, [searchQuery]);

  return (
    <section className="py-20 bg-background relative overflow-hidden hidden md:block">
      {/* Decorative gradient based on active theme */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-10 transition-colors duration-700 mix-blend-screen pointer-events-none"
        style={{ backgroundColor: activeTheme.color }}
      />
      
      <div className="max-w-6xl mx-auto px-6" ref={hooksRef}>
        <div className={`reveal ${visible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              More than just a <span className="shimmer-text">GPS</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              SweepTrack replaces your notebooks, maps, and spreadsheets. Built strictly for the demands of the modern detectorist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* HOOK A: Theme Switcher */}
            <div className="rounded-[32px] border border-white/5 bg-surface/40 p-8 backdrop-blur-sm relative overflow-hidden group">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" 
                style={{ backgroundColor: activeTheme.color }}
              />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <Palette className="w-6 h-6 text-muted" />
                <h3 className="text-xl font-bold">12 Tactical Themes</h3>
              </div>
              <p className="text-muted text-sm mb-8 relative z-10">
                Match your app to your machine or your environment. Night vision included for dawn & dusk hunts.
              </p>
              
              {/* Fake App HUD */}
              <div 
                className="w-full h-40 rounded-2xl border border-white/10 bg-black/50 p-6 flex flex-col justify-between relative z-10 transition-colors duration-500 shadow-inner"
                style={{ boxShadow: `inset 0 0 40px ${activeTheme.color}15` }}
              >
                 <div className="flex justify-between items-center">
                   <div className="h-4 w-24 rounded bg-white/10" />
                   <div 
                     className="h-6 w-16 rounded-full transition-colors duration-500 flex items-center px-2"
                     style={{ backgroundColor: `${activeTheme.color}20`, border: `1px solid ${activeTheme.color}50` }}
                   >
                     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: activeTheme.color }} />
                     <span className="ml-1 text-[10px] font-bold" style={{ color: activeTheme.color }}>GPS FIX</span>
                   </div>
                 </div>
                 
                 <div className="flex justify-between items-end">
                   <div>
                     <h4 className="text-4xl font-black tabular-nums transition-colors duration-500" style={{ color: activeTheme.color, textShadow: `0 0 20px ${activeTheme.color}80` }}>
                       14.2<span className="text-lg opacity-50">km</span>
                     </h4>
                     <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Distance Covered</p>
                   </div>
                   <div 
                     className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500"
                     style={{ backgroundColor: activeTheme.color, boxShadow: `0 0 20px ${activeTheme.color}60` }}
                   >
                     <Navigation className="w-5 h-5 text-black" fill="currentColor" />
                   </div>
                 </div>
              </div>

              {/* Theme Selector */}
              <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                {themes.map(theme => (
                  <button
                    key={theme.id}
                    onClick={() => setActiveTheme(theme)}
                    className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${activeTheme.id === theme.id ? 'scale-110 border-white' : 'border-transparent'}`}
                    style={{ backgroundColor: theme.color, boxShadow: activeTheme.id === theme.id ? `0 0 15px ${theme.color}80` : 'none' }}
                    aria-label={`Select ${theme.name} theme`}
                  />
                ))}
              </div>
            </div>

            {/* HOOK B: Detector Search */}
            <div className="rounded-[32px] border border-white/5 bg-surface/40 p-8 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Search className="w-48 h-48" />
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold">61 Auto-Presets</h3>
              </div>
              <p className="text-muted text-sm mb-8 relative z-10">
                SweepTrack comes pre-loaded with custom setups for 61 metal detectors out of the box. Check if yours is ready.
              </p>

              <div className="relative z-10 max-w-sm mt-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-muted" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-11 pr-4 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="E.g., Equinox 800, Deus II..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                {/* Search Feedback */}
                <div className="h-20 mt-4 px-2">
                  {searchStatus === "searching" && (
                    <p className="text-muted text-sm animate-pulse flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                      Scanning presest database...
                    </p>
                  )}
                  {searchStatus === "found" && (
                    <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 flex items-start gap-3 animate-fade-in">
                      <div className="mt-0.5 glow-accent rounded-full bg-accent/20">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">Yes! Found native presets.</p>
                        <p className="text-accent text-xs mt-1">Ready to log settings for {searchQuery}.</p>
                      </div>
                    </div>
                  )}
                  {searchStatus === "idle" && (
                    <div className="flex flex-wrap gap-2 opacity-50">
                      {brands.map(brand => (
                        <span key={brand} className="text-[10px] uppercase border border-white/10 px-2 py-1 rounded bg-black/20">
                          {brand}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* HOOK C: Heatmap Grid Visualizer (Spans full width) */}
            <div className="rounded-[32px] border border-white/5 bg-surface/40 p-8 backdrop-blur-sm lg:col-span-2 relative overflow-hidden group min-h-[300px] flex flex-col justify-end">
              {/* Animated Map Background */}
              <div className="absolute inset-0 bg-[#0A1118] opacity-80 z-0">
                {/* Grid container */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                {/* Faked Heatmap sweeping path */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path 
                    d="M 100,50 L 100,250 L 150,250 L 150,50 L 200,50 L 200,250 L 250,250 L 250,50 L 300,50 L 300,250 L 350,250 L 350,50" 
                    fill="none" 
                    stroke="url(#heatmapGrad)" 
                    strokeWidth="30" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="step-line"
                    style={{ animation: 'drawMap 8s ease-in-out infinite alternate', strokeDasharray: 2000, strokeDashoffset: 2000 }}
                  />
                  <defs>
                    <linearGradient id="heatmapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00FF6A" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#FFB000" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#FF4444" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <style>
                    {`@keyframes drawMap { 0% { stroke-dashoffset: 2000; } 100% { stroke-dashoffset: 0; } }`}
                  </style>
                </svg>
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              </div>

              <div className="relative z-20 max-w-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Map className="w-6 h-6 text-[#FFB000]" />
                  <h3 className="text-2xl font-bold">Coverage Heatmap</h3>
                </div>
                <p className="text-muted text-sm md:text-base mb-6">
                  Never miss an inch of ground. SweepTrack generates a live colored heatmap based on your walking density, ensuring you thoroughly cover every permission.
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-white/50">
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#00FF6A]" /> Low Density</div>
                  <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#FF4444]" /> High Density</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
