"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ParallaxPhone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsDesktop(mq.matches);

    if (!mq.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (e.clientX - cx) / (window.innerWidth / 2);
      const ny = (e.clientY - cy) / (window.innerHeight / 2);
      const px = Math.max(-12, Math.min(12, -nx * 14));
      const py = Math.max(-8, Math.min(8, -ny * 10));
      el.style.setProperty("--px", `${px}px`);
      el.style.setProperty("--py", `${py}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex justify-center md:justify-end">
      <div
        ref={containerRef}
        className={isDesktop ? "parallax-phone" : ""}
      >
        <div className="relative phone-frame w-[200px] sm:w-[260px] md:w-[300px]">
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
  );
}
