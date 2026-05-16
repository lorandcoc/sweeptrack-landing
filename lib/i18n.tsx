"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import en from "@/dictionaries/en.json";

export type TranslationKey = keyof typeof en;
type Dict = Record<string, string>;

export const LOCALES = [
  { code: "en", label: "English", country: "GB" },
  { code: "ro", label: "Română", country: "RO" },
  { code: "de", label: "Deutsch", country: "DE" },
  { code: "es", label: "Español", country: "ES" },
  { code: "fr", label: "Français", country: "FR" },
  { code: "nl", label: "Nederlands", country: "NL" },
  { code: "pl", label: "Polski", country: "PL" },
  { code: "it", label: "Italiano", country: "IT" },
  { code: "pt", label: "Português", country: "PT" },
  { code: "sv", label: "Svenska", country: "SE" },
  { code: "tr", label: "Türkçe", country: "TR" },
  { code: "da", label: "Dansk", country: "DK" },
  { code: "hu", label: "Magyar", country: "HU" },
  { code: "ru", label: "Русский", country: "RU" },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

const I18nContext = createContext<{
  t: (key: TranslationKey) => string;
  locale: LocaleCode;
  setLocale: (l: LocaleCode) => void;
}>({
  t: (key) => key,
  locale: "en",
  setLocale: () => {},
});

/**
 * The provider is now SSR-driven. Locale + dictionary come from the server
 * route based on URL path (e.g. /de → German dict), so the initial HTML is
 * already translated. The client-side setLocale handler navigates to the
 * matching locale URL — that triggers a fresh SSR render in the right
 * language and updates the cookie so the next visit lands on the same path.
 */
export function I18nProvider({
  children,
  initialLocale,
  initialDict,
}: {
  children: React.ReactNode;
  initialLocale: LocaleCode;
  initialDict: Dict;
}) {
  const [locale] = useState<LocaleCode>(initialLocale);
  const [dict] = useState<Dict>(initialDict);

  // Root layout ships with `<html lang="en">` so the static shell stays
  // statically renderable. Correct the lang here after hydration so screen
  // readers and modern crawlers see the actual content language.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((l: LocaleCode) => {
    if (typeof window === "undefined") return;
    // Persist the choice so it survives across visits and so the proxy
    // doesn't bounce the user back to their geo-detected default.
    document.cookie = `st-geo-lang=${l}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    try {
      localStorage.setItem("st-locale", l);
    } catch {
      // localStorage can throw in private mode / safari ITP; cookie is enough
    }
    // Navigate to the matching locale URL — English at /, others at /<code>.
    // Preserve in-page hash if present.
    const hash = window.location.hash;
    const target = l === "en" ? `/${hash}` : `/${l}${hash}`;
    window.location.href = target;
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => dict[key] || (en as Dict)[key] || key,
    [dict],
  );

  return (
    <I18nContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
