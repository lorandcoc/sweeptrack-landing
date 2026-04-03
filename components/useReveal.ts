"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "50px 0px" }
    );

    observer.observe(el);

    // Safety fallback: if element is already in viewport on mount, reveal it
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
