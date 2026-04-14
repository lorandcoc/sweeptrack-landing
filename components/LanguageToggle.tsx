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

      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-44 rounded-xl border border-white/[0.08] bg-[#0A0A1A]/95 backdrop-blur-xl shadow-2xl z-50 py-1 max-h-[320px] overflow-y-auto">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors ${
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
          ))}
        </div>
      )}
    </div>
  );
}
