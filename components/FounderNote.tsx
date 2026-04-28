"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "./useReveal";
import { useI18n } from "@/lib/i18n";

export default function FounderNote() {
  const { ref: revealRef, visible } = useReveal();
  const { t } = useI18n();
  const quote = t("foundernote.quote");

  const quoteRef = useRef<HTMLParagraphElement>(null);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setTyped(quote);
      setDone(true);
      return;
    }

    let started = false;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            let i = 0;
            const step = () => {
              if (cancelled) return;
              setTyped(quote.slice(0, i));
              i++;
              if (i <= quote.length) {
                timer = setTimeout(step, 12);
              } else {
                setDone(true);
              }
            };
            step();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      io.disconnect();
    };
  }, [quote]);

  return (
    <section className="py-16 md:py-20">
      <div ref={revealRef} className={`max-w-3xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="founder-term">
          <div className="founder-term__head">
            <span className="founder-term__dot r" />
            <span className="founder-term__dot y" />
            <span className="founder-term__dot g" />
            <span className="founder-term__title">~/sweeptrack — note-from-the-founder.txt</span>
          </div>
          <div className="founder-term__body">
            <div className="founder-term__avatar" aria-hidden="true">L</div>
            <div>
              <p ref={quoteRef} className="founder-term__quote">
                {typed}
                {done && <span className="founder-term__cursor" aria-hidden="true">▊</span>}
              </p>
              <div className="founder-term__attr">
                <strong>Lorand</strong>
                <span>·</span>
                <a href="https://lorand.cc/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">lorand.cc</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
