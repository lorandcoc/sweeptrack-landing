"use client";

import { useI18n } from "@/lib/i18n";

export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "ro" : "en")}
      className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-muted hover:text-foreground border border-white/[0.06] hover:border-white/[0.12] transition-colors"
      aria-label={`Switch to ${locale === "en" ? "Romanian" : "English"}`}
    >
      <span className={locale === "en" ? "text-foreground" : "text-muted/50"}>EN</span>
      <span className="text-white/20">/</span>
      <span className={locale === "ro" ? "text-foreground" : "text-muted/50"}>RO</span>
    </button>
  );
}
