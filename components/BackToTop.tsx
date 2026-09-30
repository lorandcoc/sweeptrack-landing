"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useI18n } from "@/lib/i18n";

/*
 * Floating "back to the top" button, bottom right. Footer renders it, so it
 * sits inside each page's I18nProvider and appears on every page that has the
 * site footer. It shows once the visitor has scrolled past the first screen,
 * scrolls smoothly (instantly under prefers-reduced-motion), and hands focus
 * to the logo link so keyboard users land at the top too.
 */
const SHOW_AFTER_PX = 700;

export default function BackToTop() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let pending = false;
    const apply = () => {
      pending = false;
      setShow(window.scrollY > SHOW_AFTER_PX);
    };
    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "instant" : "smooth" });
    document.querySelector<HTMLElement>("header a")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label={t("backtotop.label")}
      title={t("backtotop.label")}
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--st-accent-edge)] bg-[#0b0b18]/90 text-accent shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7)] backdrop-blur transition-all duration-300 hover:bg-accent hover:text-[#050510] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={22} strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
