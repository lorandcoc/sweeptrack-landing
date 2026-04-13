"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "@/dictionaries/en.json";

type Dict = Record<string, string>;

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
    const saved = localStorage.getItem("st-locale");
    if (saved === "ro") {
      setLocaleState("ro");
      import("@/dictionaries/ro.json").then((m) => setDict(m.default as Dict));
    }
  }, []);

  const setLocale = useCallback((l: string) => {
    setLocaleState(l);
    localStorage.setItem("st-locale", l);
    if (l === "ro") {
      import("@/dictionaries/ro.json").then((m) => setDict(m.default as Dict));
    } else {
      setDict(en as Dict);
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
