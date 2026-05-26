import type { Metadata } from "next";
import { cookies } from "next/headers";
import LegalPage from "@/components/LegalPage";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary, isLocale, type LocaleCode } from "@/lib/getDictionary";

export const metadata: Metadata = {
  title: "Data Deletion Request",
  description:
    "How to delete your SweepTrack Pro data — on-device, Google Drive backups, Firebase opt-in telemetry, RevenueCat subscription records, and waitlist email. Self-service steps plus an email-request path to support@sweeptrack.pro.",
};

async function detectLocale(): Promise<LocaleCode> {
  const store = await cookies();
  const value = store.get("st-geo-lang")?.value;
  return value && isLocale(value) ? value : "en";
}

export default async function DataDeletion() {
  const locale = await detectLocale();
  const dict = getDictionary(locale);
  return (
    <I18nProvider initialLocale={locale} initialDict={dict}>
      <LegalPage page="data-deletion" />
    </I18nProvider>
  );
}
