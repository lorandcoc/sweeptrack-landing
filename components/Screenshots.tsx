"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/* Exactly eight slides, field-curated. Each carries its label (short name),
 * a benefit caption (why it matters on a Saturday), and a descriptive alt. */
const screenshots = [
  {
    src: "/screenshots/home.jpg",
    altKey: "screenshots.alt_livemap",
    labelKey: "screenshots.shot_livemap",
    capKey: "screenshots.cap_livemap",
  },
  {
    src: "/screenshots/forecast.jpg",
    altKey: "screenshots.alt_forecast",
    labelKey: "screenshots.shot_forecast",
    capKey: "screenshots.cap_forecast",
  },
  {
    src: "/screenshots/measure2.jpg",
    altKey: "screenshots.alt_measure",
    labelKey: "screenshots.shot_measure",
    capKey: "screenshots.cap_measure",
  },
  {
    src: "/screenshots/permission_vault.jpg",
    altKey: "screenshots.alt_permission",
    labelKey: "screenshots.shot_permission",
    capKey: "screenshots.cap_permission",
  },
  {
    src: "/screenshots/radar.jpg",
    altKey: "screenshots.alt_livegroup",
    labelKey: "screenshots.shot_livegroup",
    capKey: "screenshots.cap_livegroup",
  },
  {
    src: "/screenshots/waypoints.jpg",
    altKey: "screenshots.alt_waypoints",
    labelKey: "screenshots.shot_waypoints",
    capKey: "screenshots.cap_waypoints",
  },
  {
    src: "/screenshots/night_vision.jpg",
    altKey: "screenshots.alt_nightvision",
    labelKey: "screenshots.shot_nightvision",
    capKey: "screenshots.cap_nightvision",
  },
  {
    src: "/screenshots/stats.jpg",
    altKey: "screenshots.alt_stats",
    labelKey: "screenshots.shot_stats",
    capKey: "screenshots.cap_stats",
  },
] as const satisfies ReadonlyArray<{
  src: string;
  altKey: TranslationKey;
  labelKey: TranslationKey;
  capKey: TranslationKey;
}>;

const COUNT = screenshots.length;

/* Map a slide's distance from the active index to the 3D pose classes that
 * already live in globals.css. */
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

  // Drag-to-scroll refs.
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);
  // Tracks the "resume autoplay" timer so rapid touch interactions don't stack
  // timers and resume mid-gesture.
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    activeRef.current = activeIndex;
  }, [activeIndex]);

  // Clear any pending resume timer on unmount so a late setTimeout doesn't try
  // to update state on a torn-down tree.
  useEffect(
    () => () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    },
    [],
  );

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el || !el.firstElementChild) return;
    const clamped = Math.max(0, Math.min(index, COUNT - 1));
    const itemWidth = (el.firstElementChild as HTMLElement).offsetWidth + 24;
    el.scrollTo({ left: itemWidth * clamped, behavior: "smooth" });
  }, []);

  // Keep the active index in sync with whatever slide the scroll container has
  // settled on (drag, snap, arrow, or autoplay all funnel through here).
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollPos = el.scrollLeft;
      const itemWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).offsetWidth + 24
        : 280;
      const next = Math.round(scrollPos / itemWidth);
      setActiveIndex(Math.max(0, Math.min(next, COUNT - 1)));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Autoplay ~4s, only while the section is on screen and not paused.
  useEffect(() => {
    if (paused || !visible) return;
    const timer = setInterval(() => {
      const next = (activeRef.current + 1) % COUNT;
      scrollTo(next);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, visible, scrollTo]);

  const goPrev = useCallback(() => {
    scrollTo((activeRef.current - 1 + COUNT) % COUNT);
  }, [scrollTo]);

  const goNext = useCallback(() => {
    scrollTo((activeRef.current + 1) % COUNT);
  }, [scrollTo]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    hasDragged.current = false;
    if (scrollRef.current) {
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
      scrollRef.current.style.scrollSnapType = "none"; // prevent jitter mid-drag
      scrollRef.current.style.cursor = "grabbing";
    }
    setPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) hasDragged.current = true;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setPaused(false);
    if (scrollRef.current) {
      scrollRef.current.style.scrollSnapType = ""; // re-enable snap
      scrollRef.current.style.cursor = "";
    }
  };

  const activeCap = screenshots[activeIndex].capKey;

  return (
    <section id="screenshots" className="py-16 md:py-20 relative overflow-hidden cv-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-transparent" aria-hidden="true" />

      <div ref={sectionRef} className={`relative reveal ${visible ? "visible" : ""}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">
              {t("screenshots.label")}
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              {t("screenshots.heading")}{" "}
              <span className="text-accent accent-underline">{t("screenshots.heading_accent")}</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {t("screenshots.description")}
            </p>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="screenshot-perspective flex gap-6 overflow-x-auto py-16 md:py-24 screenshot-scroll snap-x snap-mandatory px-[calc(50%-80px)] sm:px-[calc(50%-100px)] md:px-[calc(50%-150px)] cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={() => {
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
            setPaused(true);
          }}
          onTouchEnd={() => {
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
            resumeTimer.current = setTimeout(() => setPaused(false), 3000);
          }}
        >
          {screenshots.map((shot, i) => (
            <button
              key={shot.labelKey}
              type="button"
              onClick={() => {
                if (!hasDragged.current) scrollTo(i);
              }}
              aria-label={t(shot.labelKey)}
              aria-current={activeIndex === i ? "true" : undefined}
              className={`flex-shrink-0 snap-center flex flex-col items-center gap-3 screenshot-3d ${get3DClass(i, activeIndex)}`}
            >
              <div className="phone-frame w-[160px] sm:w-[200px] md:w-[230px] aspect-[320/693] pointer-events-none">
                <Image
                  src={shot.src}
                  alt={t(shot.altKey)}
                  width={320}
                  height={693}
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 300px"
                  className="w-full h-auto screenshot-crop"
                />
              </div>
              <span
                className={`text-sm font-medium transition-colors ${activeIndex === i ? "text-accent" : "text-muted"} pointer-events-none`}
              >
                {t(shot.labelKey)}
              </span>
            </button>
          ))}
        </div>

        {/* Benefit caption for the active slide. Keyed so it re-mounts and
            fades on each change. */}
        <p key={activeCap} className="scrx-caption text-sm text-muted text-center max-w-md mx-auto px-6 min-h-[2.5rem]">
          {t(activeCap)}
        </p>

        {/* Chrome: prev / counter / next */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={goPrev}
            aria-label={t("screenshots.prev")}
            className="scrx-arrow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <span className="scrx-counter font-mono text-sm tabular-nums select-none" aria-live="polite">
            <span className="text-accent">{activeIndex + 1}</span>
            <span className="text-muted"> / {COUNT}</span>
          </span>

          <button
            type="button"
            onClick={goNext}
            aria-label={t("screenshots.next")}
            className="scrx-arrow"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
