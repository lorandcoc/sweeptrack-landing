"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";

const screenshots = [
  { src: "/screenshots/home.png", altKey: "screenshots.alt_livemap", labelKey: "screenshots.shot_livemap" },
  { src: "/screenshots/measure2.jpg", altKey: "screenshots.alt_measure", labelKey: "screenshots.shot_measure" },
  { src: "/screenshots/forecast.png", altKey: "screenshots.alt_forecast", labelKey: "screenshots.shot_forecast" },
  { src: "/screenshots/history.png", altKey: "screenshots.alt_history", labelKey: "screenshots.shot_history" },
  { src: "/screenshots/stats.png", altKey: "screenshots.alt_stats", labelKey: "screenshots.shot_stats" },
  { src: "/screenshots/offline_maps.png", altKey: "screenshots.alt_offline", labelKey: "screenshots.shot_offline" },
  { src: "/screenshots/permission_vault.png", altKey: "screenshots.alt_permission", labelKey: "screenshots.shot_permission" },
  { src: "/screenshots/nearby.png", altKey: "screenshots.alt_nearby", labelKey: "screenshots.shot_nearby" },
  { src: "/screenshots/gallery.png", altKey: "screenshots.alt_gallery", labelKey: "screenshots.shot_gallery" },
  { src: "/screenshots/caliper.png", altKey: "screenshots.alt_caliper", labelKey: "screenshots.shot_caliper" },
  { src: "/screenshots/cloud_backup.png", altKey: "screenshots.alt_backup", labelKey: "screenshots.shot_backup" },
  { src: "/screenshots/night_vision.png", altKey: "screenshots.alt_nightvision", labelKey: "screenshots.shot_nightvision" },
  { src: "/screenshots/tide.png", altKey: "screenshots.alt_tide", labelKey: "screenshots.shot_tide" },
  { src: "/screenshots/presets.png", altKey: "screenshots.alt_presets", labelKey: "screenshots.shot_presets" },
  { src: "/screenshots/detector_list.png", altKey: "screenshots.alt_detectorlib", labelKey: "screenshots.shot_detectorlib" },
  { src: "/screenshots/settings.png", altKey: "screenshots.alt_settings", labelKey: "screenshots.shot_settings" },
  { src: "/screenshots/more_menu.png", altKey: "screenshots.alt_moremenu", labelKey: "screenshots.shot_moremenu" },
];

function get3DClass(index: number, active: number) {
  const diff = index - active;
  if (diff === 0) return "is-active";
  if (diff === -1) return "is-before";
  if (diff === 1) return "is-after";
  return "is-far";
}

export default function Screenshots() {
  const { t } = useI18n();
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
            <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">{t("screenshots.label")}</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              {t("screenshots.heading")} <span className="text-accent accent-underline">{t("screenshots.heading_accent")}</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {t("screenshots.description")}
            </p>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="screenshot-perspective flex gap-6 overflow-x-auto py-16 md:py-24 screenshot-scroll snap-x snap-mandatory px-[calc(50%-80px)] sm:px-[calc(50%-100px)] md:px-[calc(50%-115px)] cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 3000)}
        >
          {screenshots.map((shot, i) => (
            <button
              key={shot.labelKey}
              onClick={() => {
                if (!hasDragged.current) scrollTo(i);
              }}
              className={`flex-shrink-0 snap-center flex flex-col items-center gap-3 screenshot-3d ${get3DClass(i, activeIndex)}`}
            >
              <div className="phone-frame w-[160px] sm:w-[200px] md:w-[230px] pointer-events-none">
                <Image src={shot.src} alt={t(shot.altKey)} width={320} height={693} sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 280px" className="w-full h-auto screenshot-crop" />
              </div>
              <span className={`text-sm font-medium transition-colors ${activeIndex === i ? "text-accent" : "text-muted"} pointer-events-none`}>
                {t(shot.labelKey)}
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
