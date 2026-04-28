"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor radar — emits expanding rings from the cursor every ~600ms.
 * Stationary cursor pulses like a metal-detector ping; moving cursor leaves
 * a trail of anchored pings. Cleans up on unmount, skips coarse pointers
 * and reduced-motion.
 */
export default function CursorSweepTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarse || reduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    const size = () => {
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    size();
    window.addEventListener("resize", size);

    type Ring = { x: number; y: number; t0: number };
    const rings: Ring[] = [];

    const RING_DURATION = 2400; // ms
    const RING_START_RADIUS = 12 * dpr;
    const RING_END_RADIUS = 100 * dpr;
    const EMIT_INTERVAL = 600; // ms

    let cursorX = -1000;
    let cursorY = -1000;
    let active = false;
    let started = false;
    let lastEmit = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      cursorX = e.clientX * dpr;
      cursorY = e.clientY * dpr;
      active = true;
      if (!started) {
        canvas.style.display = "block";
        started = true;
      }
    };
    const onLeave = () => { active = false; };
    const onEnter = () => { active = true; };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const tick = (now: number) => {
      ctx.clearRect(0, 0, w, h);

      // emit a new ring at current cursor position on cadence
      if (active && now - lastEmit > EMIT_INTERVAL) {
        rings.push({ x: cursorX, y: cursorY, t0: now });
        lastEmit = now;
        // keep memory bounded
        if (rings.length > 12) rings.shift();
      }

      // render rings — each anchored to its emission point, expanding + fading
      for (let i = rings.length - 1; i >= 0; i--) {
        const r = rings[i];
        const age = (now - r.t0) / RING_DURATION;
        if (age >= 1) {
          rings.splice(i, 1);
          continue;
        }
        const ease = 1 - Math.pow(1 - age, 3);
        const radius = RING_START_RADIUS + ease * (RING_END_RADIUS - RING_START_RADIUS);
        const alpha = (1 - age) * 0.5;
        ctx.strokeStyle = `rgba(0, 255, 106, ${alpha})`;
        ctx.lineWidth = 1.5 * dpr;
        ctx.beginPath();
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // bright center pin at the live cursor position
      if (active) {
        ctx.shadowColor = "#00FF6A";
        ctx.shadowBlur = 14 * dpr;
        ctx.fillStyle = "rgba(0, 255, 106, 0.9)";
        ctx.beginPath();
        ctx.arc(cursorX, cursorY, 4 * dpr, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", size);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="cursor-trail" ref={canvasRef} aria-hidden="true" />;
}
