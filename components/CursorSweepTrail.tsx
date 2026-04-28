"use client";

import { useEffect, useRef } from "react";

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

    type P = { x: number; y: number; vx: number; vy: number; life: number; size: number };
    const particles: P[] = [];
    let lastX = -1000;
    let lastY = -1000;
    let started = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      if (!started) {
        canvas.style.display = "block";
        started = true;
      }
      const mx = e.clientX * dpr;
      const my = e.clientY * dpr;
      const dx = mx - lastX;
      const dy = my - lastY;
      const dist = Math.hypot(dx, dy);
      if (dist > 4) {
        particles.push({
          x: mx,
          y: my,
          vx: (Math.random() - 0.5) * 0.4 * dpr,
          vy: (Math.random() - 0.5) * 0.4 * dpr,
          life: 1,
          size: (1 + Math.random() * 2) * dpr,
        });
        lastX = mx;
        lastY = my;
        if (particles.length > 80) particles.shift();
      }
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.025;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 106, ${p.life * 0.6})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", size);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="cursor-trail" ref={canvasRef} aria-hidden="true" />;
}
