"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "@/dictionaries/en.json";

type Dict = Record<string, string>;

export const LOCALES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ro", label: "Română", flag: "🇷🇴" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "sv", label: "Svenska", flag: "🇸🇪" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "da", label: "Dansk", flag: "🇩🇰" },
  { code: "hu", label: "Magyar", flag: "🇭🇺" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

const loaders: Record<string, () => Promise<{ default: Dict }>> = {
  ro: () => import("@/dictionaries/ro.json"),
  de: () => import("@/dictionaries/de.json"),
  es: () => import("@/dictionaries/es.json"),
  fr: () => import("@/dictionaries/fr.json"),
  nl: () => import("@/dictionaries/nl.json"),
  pl: () => import("@/dictionaries/pl.json"),
  it: () => import("@/dictionaries/it.json"),
  pt: () => import("@/dictionaries/pt.json"),
  sv: () => import("@/dictionaries/sv.json"),
  tr: () => import("@/dictionaries/tr.json"),
  da: () => import("@/dictionaries/da.json"),
  hu: () => import("@/dictionaries/hu.json"),
  ru: () => import("@/dictionaries/ru.json"),
};

const I18nContext = createContext<{
  t: (key: string) => string;
  locale: string;
  setLocale: (l: string) => void;
}>({
  t: (key) => key,
  locale: "en",
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState("en");
  const [dict, setDict] = useState<Dict>(en as Dict);

  useEffect(() => {
    // Priority: 1) manual choice in localStorage, 2) geo-detected cookie, 3) English
    const manual = localStorage.getItem("st-locale");
    const lang = manual || document.cookie.match(/(?:^|; )st-geo-lang=([^;]*)/)?.[1] || "en";
    if (lang !== "en" && lang in loaders) {
      setLocaleState(lang);
      loaders[lang]().then((m) => setDict(m.default as Dict));
    }
  }, []);

  const setLocale = useCallback((l: string) => {
    setLocaleState(l);
    localStorage.setItem("st-locale", l);
    if (l === "en") {
      setDict(en as Dict);
    } else if (l in loaders) {
      loaders[l]().then((m) => setDict(m.default as Dict));
    }
  }, []);

  const t = useCallback(
    (key: string): string => dict[key] || (en as Dict)[key] || key,
    [dict]
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
