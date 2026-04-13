"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useReveal } from "./useReveal";

export default function MapCompareSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, visible } = useReveal();

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
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
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
          <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">Interactive Views</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            See the Unseen with <span className="text-accent">Historical Maps</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            Drag the slider to compare modern satellite imagery with historical surveyor maps. Spot the old homesteads, forgotten trails, and prime detecting spots hiding right in your backyard.
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
            // Prevent scrolling while interacting with map
            if (e.cancelable) e.preventDefault();
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* Base Image (Old Map) */}
          <div className="absolute inset-0 w-full h-full bg-surface">
            <Image
              src="/maps/old_map.jpg"
              alt="Historical Map View"
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover pointer-events-none opacity-90"
              priority
            />
            <div className="absolute bottom-4 right-4 bg-[#050510]/80 backdrop-blur px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10 text-white/90">
              1880s Survey Map
            </div>
          </div>

          {/* Top Image (Modern Satellite) */}
          <div 
            className="absolute inset-0 w-full h-full bg-surface"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/maps/satellite_map.jpg"
              alt="Modern Satellite View"
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover pointer-events-none"
              priority
            />
            <div className="absolute bottom-4 left-4 bg-[#050510]/80 backdrop-blur px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10 text-white/90">
              Modern Satellite View
            </div>
          </div>

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
