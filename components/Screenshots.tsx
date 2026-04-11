"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { useReveal } from "./useReveal";

const screenshots = [
  { src: "/screenshots/home.png", alt: "SweepTrack Pro metal detecting app GPS tracking on satellite map", label: "Live Map & GPS" },
  { src: "/screenshots/measure2.jpg", alt: "Metal detecting measure tool showing a closed polygon with perimeter 606 m and area 2.14 ha on a satellite view of a field", label: "Measure Tool" },
  { src: "/screenshots/forecast.png", alt: "Metal detecting forecast showing soil moisture, wind, temperature and humidity with Detecting Score", label: "Detecting Forecast" },
  { src: "/screenshots/history.png", alt: "Metal detecting session history with monthly session list and batch actions", label: "Session History" },
  { src: "/screenshots/stats.png", alt: "Metal detecting session statistics with distance, finds, duration, averages and personal bests", label: "Career Stats" },
  { src: "/screenshots/offline_maps.png", alt: "Download offline metal detecting maps from 4 tile sources for areas with no cell coverage", label: "Offline Maps" },
  { src: "/screenshots/permission_vault.png", alt: "Metal detecting permission vault tracking landowner approvals, expiry dates, and site boundaries", label: "Permission Vault" },
  { src: "/screenshots/nearby.png", alt: "Nearby historic sites and Wikipedia landmarks for metal detecting research", label: "Nearby Sites" },
  { src: "/screenshots/gallery.png", alt: "Photo gallery of metal detecting finds in a grid layout", label: "Photo Gallery" },
  { src: "/screenshots/caliper.png", alt: "On-screen coin caliper measuring a coin by diameter against a built-in coin database", label: "Coin Caliper" },
  { src: "/screenshots/cloud_backup.png", alt: "Metal detecting cloud backup to Google Drive with one-tap restore", label: "Cloud Backup" },
  { src: "/screenshots/night_vision.png", alt: "Metal detecting app night vision mode with red monochromatic display for dawn and dusk hunts", label: "Night Vision" },
  { src: "/screenshots/tide.png", alt: "NOAA tide table predictions for metal detecting beach hunters with 3, 7, or 14 day ranges", label: "Tide Table" },
  { src: "/screenshots/presets.png", alt: "Machine presets for Minelab, XP, Nokta, Garrett, Fisher and more metal detectors", label: "Machine Presets" },
  { src: "/screenshots/detector_list.png", alt: "Metal detector reference library with 61 models across 12 brands", label: "Detector Library" },
  { src: "/screenshots/settings.png", alt: "SweepTrack Pro settings screen with 12 color themes, night vision, and language toggle", label: "Settings & Themes" },
  { src: "/screenshots/more_menu.png", alt: "More menu hub with all SweepTrack Pro tools grouped by category", label: "More Menu" },
];

function get3DClass(index: number, active: number) {
  const diff = index - active;
  if (diff === 0) return "is-active";
  if (diff === -1) return "is-before";
  if (diff === 1) return "is-after";
  return "is-far";
}

export default function Screenshots() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref: sectionRef, visible } = useReveal();
  const activeRef = useRef(activeIndex);

  // Drag to scroll refs
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);

  useEffect(() => { activeRef.current = activeIndex; }, [activeIndex]);

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el || !el.firstElementChild) return;
    const itemWidth = (el.firstElementChild as HTMLElement).offsetWidth + 24;
    el.scrollTo({ left: itemWidth * index, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      // Don't update active index if we're actively dragging, 
      // let it settle visually or calculate dynamically if needed.
      // But it's usually fine since the UI indicator updates.
      const scrollPos = el.scrollLeft;
      const itemWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).offsetWidth + 24 : 280;
      setActiveIndex(Math.round(scrollPos / itemWidth));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      const next = (activeRef.current + 1) % screenshots.length;
      scrollTo(next);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, scrollTo]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    hasDragged.current = false;
    if (scrollRef.current) {
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
      scrollRef.current.style.scrollSnapType = 'none'; // Prevent jitter when dragging
      scrollRef.current.style.cursor = 'grabbing';
    }
    setPaused(true);
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
    setPaused(false);
    if (scrollRef.current) {
      scrollRef.current.style.scrollSnapType = ''; // Re-enable snap
      scrollRef.current.style.cursor = '';
    }
  };

  return (
    <section id="screenshots" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-transparent" />

      <div ref={sectionRef} className={`relative reveal ${visible ? "visible" : ""}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">The App</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Screens. <span className="text-accent accent-underline">No Mockups.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Every screen in the carousel is captured straight from the Android
              app — no mockups, no renders, no Photoshop. Swipe through to see
              how it really looks.
            </p>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="screenshot-perspective flex gap-6 overflow-x-auto py-16 md:py-24 screenshot-scroll snap-x snap-mandatory px-[calc(50%-100px)] md:px-[calc(50%-115px)] cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 3000)}
        >
          {screenshots.map((shot, i) => (
            <button
              key={shot.label}
              onClick={() => {
                if (!hasDragged.current) scrollTo(i);
              }}
              className={`flex-shrink-0 snap-center flex flex-col items-center gap-3 screenshot-3d ${get3DClass(i, activeIndex)}`}
            >
              <div className="phone-frame w-[200px] md:w-[230px] pointer-events-none">
                <Image src={shot.src} alt={shot.alt} width={320} height={693} className="w-full h-auto screenshot-crop" />
              </div>
              <span className={`text-sm font-medium transition-colors ${activeIndex === i ? "text-accent" : "text-muted"} pointer-events-none`}>
                {shot.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`dot-indicator h-2 rounded-full transition-all ${
                activeIndex === i ? "bg-accent w-6" : "bg-white/20 w-2 hover:bg-white/40"
              }`}
              aria-label={`Screenshot ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
