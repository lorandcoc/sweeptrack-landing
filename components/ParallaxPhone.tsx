"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stars = [
  { top: "8%", left: "12%", dur: "3s", drift: "7s" },
  { top: "15%", left: "85%", dur: "4s", drift: "9s" },
  { top: "25%", left: "5%", dur: "2.5s", drift: "6s" },
  { top: "35%", left: "92%", dur: "3.5s", drift: "10s" },
  { top: "50%", left: "3%", dur: "4.5s", drift: "8s" },
  { top: "60%", left: "88%", dur: "2.8s", drift: "7s" },
  { top: "70%", left: "15%", dur: "3.2s", drift: "9s" },
  { top: "80%", left: "78%", dur: "3.8s", drift: "6s" },
  { top: "20%", left: "50%", dur: "4.2s", drift: "11s" },
  { top: "45%", left: "70%", dur: "2.6s", drift: "8s" },
  { top: "90%", left: "30%", dur: "3.6s", drift: "7s" },
  { top: "5%", left: "60%", dur: "4.8s", drift: "10s" },
];

export default function ParallaxPhone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable parallax on devices with a fine pointer (mouse)
    const mq = window.matchMedia("(pointer: fine)");
    setIsDesktop(mq.matches);

    if (!mq.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      // Normalize to -1..1 range
      const nx = (e.clientX - cx) / (window.innerWidth / 2);
      const ny = (e.clientY - cy) / (window.innerHeight / 2);
      // Clamp and apply (move opposite to cursor)
      const px = Math.max(-12, Math.min(12, -nx * 14));
      const py = Math.max(-8, Math.min(8, -ny * 10));
      el.style.setProperty("--px", `${px}px`);
      el.style.setProperty("--py", `${py}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex justify-center md:justify-end animate-slide-right delay-200">
      <div className="relative animate-float">
        {/* Glow behind phone */}
        <div className="absolute -inset-12 bg-accent/8 blur-[60px] rounded-full" />

        {/* Star field */}
        <div className="star-field">
          {stars.map((s, i) => (
            <span
              key={i}
              style={{
                top: s.top,
                left: s.left,
                "--dur": s.dur,
                "--drift": s.drift,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Parallax wrapper (separate from float to avoid transform collision) */}
        <div
          ref={containerRef}
          className={isDesktop ? "parallax-phone" : ""}
        >
          <div className="relative phone-frame w-[260px] md:w-[300px]">
            <Image
              src="/screenshots/home.png"
              alt="SweepTrack Pro metal detecting app showing GPS satellite map with real-time tracking"
              width={300}
              height={650}
              className="w-full h-auto screenshot-crop"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
