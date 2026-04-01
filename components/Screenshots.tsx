"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useReveal } from "./useReveal";

const screenshots = [
  { src: "/screenshots/home.png", alt: "GPS Map with Satellite View and HUD", label: "Live Map & HUD" },
  { src: "/screenshots/more.png", alt: "Tools and Features Menu", label: "Detection Tools" },
  { src: "/screenshots/challenges.png", alt: "Personal Challenges and XP System", label: "Challenges & XP" },
  { src: "/screenshots/stats.png", alt: "Session Statistics Dashboard", label: "Statistics" },
  { src: "/screenshots/history.png", alt: "Session History with Calendar Heatmap", label: "Session History" },
];

export default function Screenshots() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, visible } = useReveal();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const itemWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).offsetWidth + 24
        : 280;
      setActiveIndex(Math.round(scrollLeft / itemWidth));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el || !el.firstElementChild) return;
    const itemWidth = (el.firstElementChild as HTMLElement).offsetWidth + 24;
    el.scrollTo({ left: itemWidth * index, behavior: "smooth" });
  };

  return (
    <section id="screenshots" className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-transparent" />

      <div ref={sectionRef} className={`relative reveal ${visible ? "visible" : ""}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Screenshots</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See It in <span className="text-accent">Action</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A sleek dark interface designed for outdoor use. Every screen
              optimized for sunlight readability.
            </p>
          </div>
        </div>

        {/* Screenshot carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 screenshot-scroll snap-x snap-mandatory px-[max(1.5rem,calc((100vw-1100px)/2))]"
        >
          {screenshots.map((shot, i) => (
            <button
              key={shot.label}
              onClick={() => scrollTo(i)}
              className={`flex-shrink-0 snap-center flex flex-col items-center gap-3 transition-all duration-300 ${
                activeIndex === i ? "scale-100 opacity-100" : "scale-[0.94] opacity-60"
              }`}
            >
              <div className="phone-frame w-[220px] md:w-[250px]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={250}
                  height={541}
                  className="w-full h-auto screenshot-crop"
                />
              </div>
              <span className={`text-sm font-medium transition-colors ${
                activeIndex === i ? "text-accent" : "text-muted"
              }`}>
                {shot.label}
              </span>
            </button>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`dot-indicator h-2 rounded-full transition-all ${
                activeIndex === i
                  ? "bg-accent w-6"
                  : "bg-white/20 w-2 hover:bg-white/40"
              }`}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
