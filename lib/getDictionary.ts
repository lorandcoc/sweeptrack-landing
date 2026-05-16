/**
 * Server-side dictionary resolver. Used by the locale-aware route segments
 * (app/page.tsx for English at `/`, app/[locale]/page.tsx for the other 13)
 * so the initial HTML ships already translated — no FOUT, no English flash.
 *
 * All 14 dictionaries are imported statically so the server has them on hand
 * with zero async work. Each route's bundle only ships the one it renders.
 */

import en from "@/dictionaries/en.json";
import ro from "@/dictionaries/ro.json";
import de from "@/dictionaries/de.json";
import es from "@/dictionaries/es.json";
import fr from "@/dictionaries/fr.json";
import nl from "@/dictionaries/nl.json";
import pl from "@/dictionaries/pl.json";
import it from "@/dictionaries/it.json";
import pt from "@/dictionaries/pt.json";
import sv from "@/dictionaries/sv.json";
import tr from "@/dictionaries/tr.json";
import da from "@/dictionaries/da.json";
import hu from "@/dictionaries/hu.json";
import ru from "@/dictionaries/ru.json";

export type Dict = Record<string, string>;

export const LOCALES = [
  "en", "ro", "de", "es", "fr", "nl", "pl",
  "it", "pt", "sv", "tr", "da", "hu", "ru",
] as const;

export type LocaleCode = (typeof LOCALES)[number];

export const NON_EN_LOCALES = LOCALES.filter((l) => l !== "en");

const dictionaries: Record<LocaleCode, Dict> = {
  en: en as Dict,
  ro: ro as Dict,
  de: de as Dict,
  es: es as Dict,
  fr: fr as Dict,
  nl: nl as Dict,
  pl: pl as Dict,
  it: it as Dict,
  pt: pt as Dict,
  sv: sv as Dict,
  tr: tr as Dict,
  da: da as Dict,
  hu: hu as Dict,
  ru: ru as Dict,
};

export function isLocale(value: string): value is LocaleCode {
  return (LOCALES as readonly string[]).includes(value);
}

export function getDictionary(locale: LocaleCode): Dict {
  return dictionaries[locale];
}

/**
 * Locale URL: English lives at `/`, others at `/<locale>`. Keeping English
 * naked at the root preserves the historical canonical URL.
 */
export function localePath(locale: LocaleCode, suffix: string = ""): string {
  const base = locale === "en" ? "" : `/${locale}`;
  return `${base}${suffix}`;
}

export function localeUrl(locale: LocaleCode, suffix: string = ""): string {
  return `https://sweeptrack.pro${localePath(locale, suffix)}`;
}
