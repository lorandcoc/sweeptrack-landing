"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";

export default function MapCompareSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, visible } = useReveal();
  const { t } = useI18n();

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const stopDragging = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", stopDragging);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow to make it match the premium look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div ref={ref} className={`max-w-5xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-12">
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">{t("mapcompare.label")}</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {t("mapcompare.heading_prefix")}<span className="text-accent">{t("mapcompare.heading_accent")}</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            {t("mapcompare.description")}
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full max-w-sm mx-auto aspect-[9/16] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl group ring-1 ring-white/5"
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* Base Image (Old Map) */}
          <div className="absolute inset-0 w-full h-full bg-surface">
            <Image
              src="/maps/old_map.jpg"
              alt={t("mapcompare.alt_historical")}
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover pointer-events-none opacity-90"
              loading="lazy"
            />
            <div className="absolute bottom-4 right-4 bg-[#050510]/80 backdrop-blur px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10 text-white/90">
              {t("mapcompare.label_old")}
            </div>
          </div>

          {/* Top Image (Modern Satellite) */}
          <div 
            className="absolute inset-0 w-full h-full bg-surface"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/maps/satellite_map.jpg"
              alt={t("mapcompare.alt_modern")}
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover pointer-events-none"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-[#050510]/80 backdrop-blur px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10 text-white/90">
              {t("mapcompare.label_modern")}
            </div>
          </div>

          {/* Pulsing amber pins (hint at hidden finds) */}
          <span className="map-pin-pulse" style={{ left: "28%", top: "42%" }} aria-hidden="true" />
          <span className="map-pin-pulse" style={{ left: "64%", top: "31%", animationDelay: "0.8s" }} aria-hidden="true" />
          <span className="map-pin-pulse" style={{ left: "41%", top: "68%", animationDelay: "1.6s" }} aria-hidden="true" />

          {/* Drag hint */}
          <span className="map-drag-hint" aria-hidden="true">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            DRAG
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </span>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-accent/80 cursor-ew-resize transition-opacity"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full border-4 border-[#050510] flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050510" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
                <path d="M9 18l6-6-6-6" className="rotate-180 origin-center" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
