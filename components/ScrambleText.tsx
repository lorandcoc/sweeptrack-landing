"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$!";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function ScrambleText({ text, className = "", delay = 0, speed = 30 }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setTimeout(() => setStarted(true), delay);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started, delay]);

  useEffect(() => {
    if (!started) return;

    const letters = text.split("");
    const totalSteps = letters.length;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const resolved = Math.floor((frame / (totalSteps * 3)) * totalSteps);

      const result = letters
        .map((char, i) => {
          if (char === " ") return " ";
          if (char === "." || char === ",") return char;
          if (i < resolved) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(result);

      if (resolved >= totalSteps) {
        setDisplay(text);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
