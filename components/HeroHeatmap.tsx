"use client";

import { useEffect, useRef } from "react";

const FIND_COLORS = ["#FFB000", "#00FF6A", "#4285F4", "#FF6B4A", "#FFB000", "#00FF6A"];

type Find = { x: number; y: number; color: string; revealed: boolean; revealedAt: number };

type Props = {
  /** Element whose textContent gets the running revealed-count */
  countTargetSelector?: string;
};

export default function HeroHeatmap({ countTargetSelector }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let finds: Find[] = [];
    let mouseInside = false;
    let mx = -1000;
    let my = -1000;
    let revealedCount = 0;
    const countEl = countTargetSelector
      ? (document.querySelector<HTMLElement>(countTargetSelector) ?? null)
      : null;

    const size = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      finds = [];
      const count = 28;
      for (let i = 0; i < count; i++) {
        finds.push({
          x: (Math.random() * 0.95 + 0.025) * r.width,
          y: (Math.random() * 0.9 + 0.05) * r.height,
          color: FIND_COLORS[i % FIND_COLORS.length],
          revealed: reduced, // pre-reveal on reduced-motion as a static decorative state
          revealedAt: 0,
        });
      }
      if (reduced) {
        revealedCount = finds.length;
        if (countEl) countEl.textContent = String(revealedCount);
      }
    };
    size();
    window.addEventListener("resize", size);

    const localCoords = (clientX: number, clientY: number) => {
      const r = canvas.getBoundingClientRect();
      return { x: clientX - r.left, y: clientY - r.top };
    };

    const onMove = (e: MouseEvent) => {
      if (reduced || isCoarse) return;
      mouseInside = true;
      const p = localCoords(e.clientX, e.clientY);
      mx = p.x;
      my = p.y;
      finds.forEach((f) => {
        if (!f.revealed && Math.hypot(f.x - mx, f.y - my) < 60) {
          f.revealed = true;
          f.revealedAt = performance.now();
          revealedCount++;
          if (countEl) countEl.textContent = String(revealedCount);
        }
      });
    };
    const onLeave = () => {
      mouseInside = false;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const draw = () => {
      const r = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, r.width, r.height);

      // grid backdrop — survey grid feel
      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      ctx.lineWidth = 1;
      const grid = 48;
      for (let x = 0; x < r.width; x += grid) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, r.height);
        ctx.stroke();
      }
      for (let y = 0; y < r.height; y += grid) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(r.width, y);
        ctx.stroke();
      }

      // sweep cone under cursor
      if (mouseInside && !reduced) {
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 90);
        grad.addColorStop(0, "rgba(0,255,106,0.10)");
        grad.addColorStop(1, "rgba(0,255,106,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mx, my, 90, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(0,255,106,0.35)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mx, my, 60, 0, Math.PI * 2);
        ctx.stroke();
      }

      const now = performance.now();
      finds.forEach((f) => {
        if (!f.revealed) return;
        const t = Math.min((now - f.revealedAt) / 600, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        const radius = 6 + ease * 4;
        const ring = 8 + (1 - ease) * 24;

        if (t < 1 && f.revealedAt > 0) {
          const alpha = Math.floor((1 - t) * 200)
            .toString(16)
            .padStart(2, "0");
          ctx.strokeStyle = f.color + alpha;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(f.x, f.y, ring, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.fillStyle = f.color;
        ctx.shadowColor = f.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(f.x, f.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = "#050510";
        ctx.beginPath();
        ctx.arc(f.x, f.y, radius * 0.35, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", size);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [countTargetSelector]);

  return <canvas ref={canvasRef} className="hero-heatmap-canvas" aria-hidden="true" />;
}
