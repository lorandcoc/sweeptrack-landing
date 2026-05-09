"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n, LOCALES } from "@/lib/i18n";
import * as flagSvgs from "country-flag-icons/string/3x2";

function Flag({ country, className }: { country: string; className?: string }) {
  const svg = (flagSvgs as Record<string, string>)[country];
  if (!svg) return null;
  return <span className={className} dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale) || LOCALES[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when the mobile sheet is open
  useEffect(() => {
    if (!open) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(min-width: 768px)").matches) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function pick(code: string) {
    setLocale(code);
    setOpen(false);
  }

  const localeButton = (l: (typeof LOCALES)[number], onClick: () => void) => (
    <button
      key={l.code}
      onClick={onClick}
      className={`w-full flex items-center gap-2.5 px-3 py-3 md:py-2 text-left text-sm transition-colors ${
        l.code === locale
          ? "text-accent bg-accent/5"
          : "text-muted hover:text-foreground hover:bg-white/[0.04]"
      }`}
    >
      <Flag country={l.country} className="inline-flex [&>svg]:w-5 [&>svg]:h-3.5 [&>svg]:rounded-[1px] shrink-0" />
      <span className="flex-1">{l.label}</span>
      {l.code === locale && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent shrink-0">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </button>
  );

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-muted hover:text-foreground border border-white/[0.06] hover:border-white/[0.12] transition-colors"
        aria-label="Change language"
        aria-expanded={open}
      >
        <Flag country={current.country} className="inline-flex [&>svg]:w-4 [&>svg]:h-3 [&>svg]:rounded-[1px] shrink-0" />
        <span className="uppercase">{current.code}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Desktop: inline dropdown */}
      {open && (
        <div className="hidden md:block absolute right-0 top-full mt-1.5 w-44 rounded-xl border border-white/[0.08] bg-[#0A0A1A]/95 backdrop-blur-xl shadow-2xl z-50 py-1 max-h-[320px] overflow-y-auto overscroll-contain">
          {LOCALES.map((l) => localeButton(l, () => pick(l.code)))}
        </div>
      )}

      {/* Mobile: full-screen backdrop + bottom sheet */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-[100] flex items-end justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-h-[80vh] rounded-t-2xl border-t border-x border-white/[0.08] bg-[#0A0A1A] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
          >
            {/* Drag handle + title */}
            <div className="flex flex-col items-center pt-2 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-white/15 mb-2" />
              <div className="text-xs font-semibold uppercase tracking-wider text-muted px-4 pb-1.5">
                Choose language
              </div>
            </div>
            {/* Scrollable list with overscroll containment so pull-to-refresh doesn't fire */}
            <div className="overflow-y-auto overscroll-contain flex-1 pb-2" style={{ WebkitOverflowScrolling: "touch" }}>
              {LOCALES.map((l) => localeButton(l, () => pick(l.code)))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
