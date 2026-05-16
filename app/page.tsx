import LandingPage from "@/components/LandingPage";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import { landingMetadata } from "@/lib/landingMetadata";

export const metadata = landingMetadata("en");

export default function Home() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <LandingPage />
    </I18nProvider>
  );
}
