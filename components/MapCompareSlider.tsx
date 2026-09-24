"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Old map vs today. Both images are real screens from the app over the same
 * ground: the USGS historical layer and the satellite base map. The satellite
 * covers the left of the divider. --mcx-pos (0–100) drives both the clip and
 * the handle in CSS. Drag, click or tap anywhere on the stage, or use the
 * arrow keys on the handle.
 */
export default function MapCompareSlider() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  const moveTo = useCallback((clientX: number) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  // Mouse: drag from anywhere on the stage; listeners live only for the drag.
  useEffect(() => {
    if (!dragging) return;
    const onMouseMove = (e: MouseEvent) => moveTo(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging, moveTo]);

  // Touch: the stage is half a phone screen tall, so it must not trap page
  // scrolling. The first few pixels decide: mostly sideways drags the
  // divider, mostly vertical scrolls the page, and a tap jumps the divider.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let start: { x: number; y: number; mode: "pending" | "drag" | "scroll" } | null = null;

    const onStart = (e: TouchEvent) => {
      const p = e.touches[0];
      start = p ? { x: p.clientX, y: p.clientY, mode: "pending" } : null;
    };
    const onMove = (e: TouchEvent) => {
      const p = e.touches[0];
      if (!start || !p) return;
      if (start.mode === "pending") {
        const dx = Math.abs(p.clientX - start.x);
        const dy = Math.abs(p.clientY - start.y);
        if (dx < 6 && dy < 6) return;
        start.mode = dx > dy ? "drag" : "scroll";
      }
      if (start.mode === "drag") {
        if (e.cancelable) e.preventDefault();
        moveTo(p.clientX);
      }
    };
    const onEnd = () => {
      if (start?.mode === "pending") moveTo(start.x);
      start = null;
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", onEnd);
    el.addEventListener("touchcancel", onEnd);
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("touchcancel", onEnd);
    };
  }, [moveTo]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    let next: number | null = null;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = Math.max(0, pos - 4);
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") next = Math.min(100, pos + 4);
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = 100;
    if (next === null) return;
    e.preventDefault();
    setPos(next);
  };

  return (
    <section id="old-maps" className="st-rule py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16 items-center">
        <div>
          <h2 className="font-display st-h2">{t("mapcompare.heading")}</h2>
          <p className="mt-5 text-muted text-lg leading-relaxed [text-wrap:pretty]">
            {t("mapcompare.description")}
          </p>
          <p className="mt-5 text-sm text-muted/80 leading-relaxed">{t("mapcompare.closing")}</p>
        </div>

        <div
          ref={stageRef}
          className="mcx-stage relative w-full aspect-[4/5] md:aspect-square rounded-xl overflow-hidden cursor-ew-resize select-none border border-white/10 bg-surface"
          style={{ "--mcx-pos": pos } as CSSProperties}
          onMouseDown={(e) => {
            setDragging(true);
            moveTo(e.clientX);
          }}
        >
          <Image
            src="/maps/old_map.jpg"
            alt={t("mapcompare.alt_historical")}
            fill
            sizes="(max-width: 768px) 100vw, 680px"
            className="object-cover pointer-events-none"
            loading="lazy"
          />
          <span className="mcx-label right-3">{t("mapcompare.label_old")}</span>

          <div className="mcx-clip absolute inset-0">
            <Image
              src="/maps/satellite_map.jpg"
              alt={t("mapcompare.alt_modern")}
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              className="object-cover pointer-events-none"
              loading="lazy"
            />
            <span className="mcx-label left-3">{t("mapcompare.label_modern")}</span>
          </div>

          <div
            role="slider"
            tabIndex={0}
            aria-label={t("mapcompare.slider_aria" as TranslationKey)}
            aria-orientation="horizontal"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            onKeyDown={onKeyDown}
            className="mcx-handle absolute inset-y-0 z-10 cursor-ew-resize"
          >
            <span className="mcx-handle__grip" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
