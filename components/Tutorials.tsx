"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import { Play } from "lucide-react";

const shortsData = [
  { id: "1", category: "tracking", title: "Master the Tactical HUD", thumb: "/screenshots/home.png", duration: "0:58" },
  { id: "2", category: "tracking", title: "Coverage Heatmap Tricks", thumb: "/screenshots/stats.png", duration: "1:12" },
  { id: "3", category: "tools", title: "Downloading Offline Maps", thumb: "/screenshots/offline_maps.png", duration: "0:45" },
  { id: "4", category: "tools", title: "How to Use Tide Tables", thumb: "/screenshots/forecast.png", duration: "0:52" },
  { id: "5", category: "vault", title: "Drawing Permission Boundaries", thumb: "/screenshots/permission_vault.png", duration: "1:05" },
  { id: "6", category: "vault", title: "Compare Past Sessions", thumb: "/screenshots/cloud_backup.png", duration: "0:48" },
  { id: "7", category: "settings", title: "Switch to Night Vision", thumb: "/screenshots/night_vision.png", duration: "0:32" },
  { id: "8", category: "settings", title: "Selecting Your Detector", thumb: "/screenshots/presets.png", duration: "0:55" },
  { id: "9", category: "tracking", title: "Setting Up Perimeter Guard", thumb: "/screenshots/nearby.png", duration: "1:00" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "tracking", label: "Tracking & GPS" },
  { id: "tools", label: "Tools & Maps" },
  { id: "vault", label: "Vault & Data" },
  { id: "settings", label: "Settings" },
];

export default function Tutorials() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref: sectionRef, visible } = useReveal();

  const filtered = shortsData.filter(
    (s) => activeFilter === "all" || s.category === activeFilter
  );

  return (
    <section id="tutorials" className="py-16 md:py-20 relative overflow-hidden">
      <div ref={sectionRef} className={`relative z-10 reveal ${visible ? "visible" : ""}`}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 inline-flex items-center gap-2">
              <Play className="w-4 h-4 fill-accent" /> SweepTrack Academy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn the App in <span className="text-accent">60 Seconds</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Short videos walking you through each feature. No fluff, just what you need to know.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-surface/80 p-1 rounded-full border border-white/5 gap-1 flex-wrap justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeFilter === cat.id
                      ? "bg-accent text-[#0A0A1A] shadow-[0_0_12px_rgba(0,255,106,0.3)]"
                      : "text-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((short) => (
              <a
                key={short.id}
                href="#"
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 bg-surface hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,255,106,0.1)]"
              >
                {/* Thumbnail */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-300 scale-105 group-hover:scale-100"
                  style={{ backgroundImage: `url(${short.thumb})` }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5 group-hover:text-[#0A0A1A]" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {short.duration}
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-accent/20 border border-accent/30 text-accent text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  {categories.find((c) => c.id === short.category)?.label || short.category}
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <p className="text-white text-sm font-semibold leading-tight line-clamp-2">
                    {short.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
