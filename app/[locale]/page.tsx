import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { I18nProvider } from "@/lib/i18n";
import {
  getDictionary,
  isLocale,
  NON_EN_LOCALES,
  type LocaleCode,
} from "@/lib/getDictionary";
import { landingMetadata } from "@/lib/landingMetadata";

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return NON_EN_LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") return {};
  return landingMetadata(locale);
}

export default async function LocaleHome({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  const typed = locale as LocaleCode;
  const dict = getDictionary(typed);
  return (
    <I18nProvider initialLocale={typed} initialDict={dict}>
      <LandingPage />
    </I18nProvider>
  );
}
