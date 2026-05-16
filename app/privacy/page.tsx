import type { Metadata } from "next";
import { cookies } from "next/headers";
import LegalPage from "@/components/LegalPage";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary, isLocale, type LocaleCode } from "@/lib/getDictionary";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for SweepTrack Pro. Data stored locally on your device; the app's analytics and crash reporting are opt-in and off by default. Website uses privacy-respecting Vercel Analytics — no cookies, no personal IPs.",
};

async function detectLocale(): Promise<LocaleCode> {
  const store = await cookies();
  const value = store.get("st-geo-lang")?.value;
  return value && isLocale(value) ? value : "en";
}

export default async function PrivacyPolicy() {
  const locale = await detectLocale();
  const dict = getDictionary(locale);
  return (
    <I18nProvider initialLocale={locale} initialDict={dict}>
      <LegalPage page="privacy" />
    </I18nProvider>
  );
}
