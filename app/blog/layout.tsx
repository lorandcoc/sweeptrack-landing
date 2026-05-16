import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

export const metadata: Metadata = {
  title: "Guides & Tips",
  description:
    "Metal detecting guides, location tips, detector comparisons, and SweepTrack Pro tutorials. Practical advice for beginners and experienced detectorists.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  // Blog content is English-only; the chrome (Header / Footer / nav strings)
  // ships in English to match. If we ever translate blog content we'll move
  // these routes under [locale]/blog and read locale from params instead.
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </I18nProvider>
  );
}
