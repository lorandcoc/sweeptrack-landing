import type { Metadata } from "next";
import { cookies } from "next/headers";
import LegalPage from "@/components/LegalPage";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary, isLocale, type LocaleCode } from "@/lib/getDictionary";

export const metadata: Metadata = {
  title: "SweepTrack Radar Privacy Policy",
  description:
    "Privacy Policy for SweepTrack Radar. Radar shares your live location in real time with the other members of a group you join, via Google Firebase; anonymous sign-in, no account, no analytics, no ads.",
};

async function detectLocale(): Promise<LocaleCode> {
  const store = await cookies();
  const value = store.get("st-geo-lang")?.value;
  return value && isLocale(value) ? value : "en";
}

export default async function RadarPrivacyPolicy() {
  const locale = await detectLocale();
  const dict = getDictionary(locale);
  return (
    <I18nProvider initialLocale={locale} initialDict={dict}>
      <LegalPage page="privacy-radar" />
    </I18nProvider>
  );
}
