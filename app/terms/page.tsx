import type { Metadata } from "next";
import { cookies } from "next/headers";
import LegalPage from "@/components/LegalPage";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary, isLocale, type LocaleCode } from "@/lib/getDictionary";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for SweepTrack Pro, the GPS tracking app for metal detecting.",
};

async function detectLocale(): Promise<LocaleCode> {
  const store = await cookies();
  const value = store.get("st-geo-lang")?.value;
  return value && isLocale(value) ? value : "en";
}

export default async function TermsOfService() {
  const locale = await detectLocale();
  const dict = getDictionary(locale);
  return (
    <I18nProvider initialLocale={locale} initialDict={dict}>
      <LegalPage page="terms" />
    </I18nProvider>
  );
}
