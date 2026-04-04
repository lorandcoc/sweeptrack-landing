"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useReveal } from "./useReveal";
import { Play, Filter } from "lucide-react";

// Mock data for YouTube shorts animations
const shortsData = [
  { id: "1", category: "tracking", title: "Master the Tactical HUD", thumb: "/screenshots/home.png", color: "from-green-500/20" },
  { id: "2", category: "tracking", title: "Heatmap Grid Search Tricks", thumb: "/screenshots/stats.png", color: "from-blue-500/20" },
  { id: "3", category: "tools", title: "Downloading Offline Maps", thumb: "/screenshots/offline_maps.png", color: "from-purple-500/20" },
  { id: "4", category: "tools", title: "How to use Tide Tables", thumb: "/screenshots/forecast.png", color: "from-yellow-500/20" },
  { id: "5", category: "vault", title: "Drawing Permission Boundaries", thumb: "/screenshots/permission_vault.png", color: "from-red-500/20" },
  { id: "6", category: "vault", title: "Compare Past Sessions", thumb: "/screenshots/cloud_backup.png", color: "from-indigo-500/20" },
  { id: "7", category: "settings", title: "Switch to Night Vision", thumb: "/screenshots/night_vision.png", color: "from-rose-500/20" },
  { id: "8", category: "settings", title: "Selecting Your Detector", thumb: "/screenshots/presets.png", color: "from-orange-500/20" },
];

const categories = [
  { id: "all", label: "All Shorts" },
  { id: "tracking", label: "Tracking & GPS" },
  { id: "tools", label: "Tools & Maps" },
  { id: "vault", label: "Vault & Stats" },
  { id: "settings", label: "Settings" }
];

export default function Tutorials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref: sectionRef, visible } = useReveal();
  
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const filteredShorts = shortsData.filter(
    (short) => activeFilter === "all" || short.category === activeFilter
  );

  useEffect(() => {
    // Reset scroll when filter changes
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeFilter]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    hasDragged.current = false;
    if (scrollRef.current) {
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
      scrollRef.current.style.scrollSnapType = 'none';
      scrollRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasDragged.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.scrollSnapType = '';
      scrollRef.current.style.cursor = '';
    }
  };

  return (
    <section id="tutorials" className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-orbs opacity-30" />

      <div ref={sectionRef} className={`relative reveal ${visible ? "visible" : ""} z-10`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="text-left">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 flex items-center gap-2">
                <Play className="w-4 h-4 fill-accent" /> SweepTrack Academy
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Master Every <span className="text-accent accent-underline">Feature</span>
              </h2>
              <p className="text-muted text-lg max-w-xl">
                Quick, 60-second shorts explaining exactly how to get the most out of your detector and the app.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex bg-surface-variant/50 p-1.5 rounded-full border border-white/5 overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeFilter === cat.id
                      ? "bg-accent text-[#0A0A1A] shadow-[0_0_15px_rgba(0,255,106,0.3)]"
                      : "text-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Shorts Carousel */}
        <div className="relative w-full">
          {/* Gradient Fades for edges */}
          <div className="absolute top-0 bottom-0 left-0 w-8 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-12 pt-4 px-[max(1.5rem,calc((100vw-1100px)/2))] screenshot-scroll snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
          >
            {filteredShorts.map((short) => (
              <div
                key={short.id}
                className="flex-shrink-0 snap-center w-[180px] md:w-[240px] group"
              >
                {/* Video Card */}
                <div className="relative aspect-[9/16] rounded-2xl md:rounded-[32px] overflow-hidden border border-white/10 bg-surface-variant/30 shadow-2xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:border-accent/40 group-hover:shadow-[0_20px_40px_rgba(0,255,106,0.15)]">
                  {/* Backdrop glowing gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${short.color} to-transparent opacity-50 mix-blend-overlay`} />
                  
                  {/* Dummy Video Background (using screenshots as fallback) */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-105 group-hover:scale-100"
                    style={{ backgroundImage: `url(${short.thumb})` }}
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <Play className="w-6 h-6 text-white ml-1 group-hover:text-[#0A0A1A] transition-colors" />
                    </div>
                  </div>

                  {/* Bottom Info Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="text-white font-semibold leading-tight line-clamp-2 shadow-sm">
                      {short.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Empty spacer block to allow scrolling to the end smoothly */}
            <div className="flex-shrink-0 w-4 md:w-8" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
