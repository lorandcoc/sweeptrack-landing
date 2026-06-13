"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/* Three named targets pinned over the historical layer. x/y are % of the
   stage; x doubles as the legibility threshold — a pin's chip fades in once
   the divider sits left of the pin and the old map is exposed beneath it
   (the satellite layer covers the LEFT side of the divider). */
const PINS: { key: TranslationKey; x: number; y: number; delay: string }[] = [
  { key: "mapcompare.pin1", x: 28, y: 42, delay: "0s" },
  { key: "mapcompare.pin2", x: 64, y: 31, delay: "0.8s" },
  { key: "mapcompare.pin3", x: 41, y: 68, delay: "1.6s" },
];

/* Auto-demo choreography: divider sweeps 50 → 78 → 30 → 50 (~3.5s total)
   the first time the stage scrolls into view, then hands control to the
   user. Entries are [target %, transition duration ms, start offset ms].
   The motion itself is a CSS transition on the registered --mcx-pos custom
   property (see globals.css), driven by these state steps — no rAF. */
const DEMO_STEPS: [number, number, number][] = [
  [78, 1100, 150],
  [30, 1400, 1300],
  [50, 950, 2750],
];
const DEMO_END_MS = 3750;

export default function MapCompareSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  // demo.ms is the CSS transition duration for the current divider glide.
  const [demo, setDemo] = useState<{ active: boolean; ms: number }>({ active: false, ms: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<number[]>([]);
  const interactedRef = useRef(false);
  const { ref, visible } = useReveal();
  const { t } = useI18n();

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  // Any pointer/keyboard interaction kills the auto-demo immediately and
  // permanently (interactedRef also blocks a demo that hasn't started yet).
  const cancelDemo = useCallback(() => {
    interactedRef.current = true;
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
    setDemo((d) => (d.active ? { active: false, ms: 0 } : d));
    setHasInteracted(true);
  }, []);

  // Tapping/clicking a pin glides the divider just left of it so the old
  // map (and the pin's chip) is revealed — also the keyboard path, since
  // Enter/Space on the pin button fires click.
  const revealPin = useCallback(
    (x: number) => {
      cancelDemo();
      setDemo({ active: true, ms: 420 });
      setSliderPosition(Math.max(0, Math.min(100, x - 14)));
      timersRef.current.push(window.setTimeout(() => setDemo({ active: false, ms: 0 }), 440));
    },
    [cancelDemo]
  );

  // Auto-demo: own observer on the stage (not the section wrapper) so the
  // sweep only plays once the stage itself is actually on screen. Reduced
  // motion skips the demo entirely — the static 50% split stays legible.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (interactedRef.current) return;
        DEMO_STEPS.forEach(([target, ms, at]) => {
          timersRef.current.push(
            window.setTimeout(() => {
              setDemo({ active: true, ms });
              setSliderPosition(target);
            }, at)
          );
        });
        timersRef.current.push(
          window.setTimeout(() => setDemo({ active: false, ms: 0 }), DEMO_END_MS)
        );
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      timersRef.current.forEach((id) => window.clearTimeout(id));
      timersRef.current = [];
    };
  }, []);

  // Listener attach/detach lives inside the effect so the handler references
  // are stable for the lifetime of a drag — previous version recreated them
  // on every setSliderPosition (which re-rendered, made new closures, and
  // forced the effect's cleanup-and-reattach path to run 60+ times a second).
  //
  // touchmove uses `passive: false` so we can call preventDefault and stop
  // the page from scrolling while the user drags the slider on mobile.
  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        e.preventDefault();
        handleMove(e.touches[0].clientX);
      }
    };
    const onUp = () => setIsDragging(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onUp);
    window.addEventListener("touchcancel", onUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
      window.removeEventListener("touchcancel", onUp);
    };
  }, [isDragging]);

  const onHandleKeyDown = (e: React.KeyboardEvent) => {
    let next: number | null = null;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = Math.max(0, sliderPosition - 4);
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") next = Math.min(100, sliderPosition + 4);
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = 100;
    if (next === null) return;
    e.preventDefault();
    cancelDemo();
    setSliderPosition(next);
  };

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

        {/*
          The stage. --mcx-pos (registered @property, 0–100) is the single
          source of truth for the divider: the satellite clip-path, the
          handle position, and each chip's legibility all derive from it in
          CSS. During the auto-demo (and pin-glides) a transition on the
          custom property animates everything in lockstep; while dragging
          the transition is removed so the divider tracks the pointer 1:1.
          Mobile keeps the 9:16 phone crop; md+ widens to a 16:10 landscape
          crop so the old survey reads as a map.
        */}
        <div
          ref={containerRef}
          className="mcx-stage relative w-full max-w-sm md:max-w-none mx-auto aspect-[9/16] md:aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl group ring-1 ring-white/5"
          style={{
            "--mcx-pos": sliderPosition,
            transition: demo.active ? `--mcx-pos ${demo.ms}ms var(--st-ease)` : undefined,
          } as CSSProperties}
          onMouseDown={(e) => {
            cancelDemo();
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            cancelDemo();
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
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover object-center pointer-events-none opacity-90"
              loading="lazy"
            />
            <div className="absolute bottom-4 right-4 bg-[#050510]/80 backdrop-blur px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10 text-white/90">
              {t("mapcompare.label_old")}
            </div>
          </div>

          {/* Top Image (Modern Satellite) — clipped from the right by --mcx-pos */}
          <div className="mcx-clip absolute inset-0 w-full h-full bg-surface">
            <Image
              src="/maps/satellite_map.jpg"
              alt={t("mapcompare.alt_modern")}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover object-center pointer-events-none"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-[#050510]/80 backdrop-blur px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10 text-white/90">
              {t("mapcompare.label_modern")}
            </div>
          </div>

          {/* Named amber pins — chip names the target; legible while the
              historical layer is exposed past the pin, on hover/focus, or
              after a tap glides the divider clear of it. */}
          {PINS.map((p) => (
            <button
              key={p.key}
              type="button"
              className="mcx-pin"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                "--mcx-px": p.x,
                "--mcx-delay": p.delay,
              } as CSSProperties}
              aria-label={t(p.key)}
              onClick={() => revealPin(p.x)}
            >
              <span className="mcx-pin__dot" aria-hidden="true" />
              <span className="mcx-chip" aria-hidden="true">{t(p.key)}</span>
            </button>
          ))}

          {/* Drag hint — fades out after the first real interaction */}
          <span className={`map-drag-hint mcx-hint ${hasInteracted ? "mcx-hint--off" : ""}`} aria-hidden="true">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            DRAG
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </span>

          {/* Slider Handle — keyboard-operable slider */}
          <div
            role="slider"
            tabIndex={0}
            aria-label={t("mapcompare.slider_aria" as TranslationKey)}
            aria-orientation="horizontal"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            onKeyDown={onHandleKeyDown}
            className="mcx-handle absolute top-0 bottom-0 w-1 bg-accent/80 cursor-ew-resize z-10"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full border-4 border-[#050510] flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050510" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
                <path d="M9 18l6-6-6-6" className="rotate-180 origin-center" />
              </svg>
            </div>
          </div>
        </div>

        {/* Closing micro-caption */}
        <div className="mt-10 text-center">
          <div className="accent-rule" aria-hidden="true" />
          <p className="font-mono text-sm text-muted max-w-xl mx-auto leading-relaxed">
            {t("mapcompare.closing")}
          </p>
        </div>
      </div>
    </section>
  );
}
