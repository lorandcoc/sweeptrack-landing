import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GooglePlayButton, { PLAY_URL } from "@/components/GooglePlayButton";
import SpotlightVault from "@/components/SpotlightVault";
import SpotlightPerimeter from "@/components/SpotlightPerimeter";
import InfoCard from "@/components/InfoCard";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/permissions";
const TITLE = "Permissions & Boundaries for Metal Detecting | SweepTrack Pro";
const DESCRIPTION =
  "Keep every landowner permission in one place, generate a signed PDF permission letter, get reminders before permits expire, and set a perimeter alarm that warns you before you cross a boundary. Android.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: "Permissions & Boundaries for metal detecting", description: DESCRIPTION, url: URL, siteName: "SweepTrack Pro", type: "website" },
  twitter: { card: "summary_large_image", title: "Permissions & Boundaries for metal detecting", description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: TITLE, description: DESCRIPTION, isPartOf: { "@type": "WebSite", name: "SweepTrack Pro", url: "https://sweeptrack.pro" }, about: { "@id": "https://sweeptrack.pro/#app" }, mainEntity: { "@id": "https://sweeptrack.pro/#app" }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
      { "@type": "ListItem", position: 2, name: "Permissions & Boundaries", item: URL },
    ] },
  ],
};

const ICON = {
  vault: (<><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><circle cx="12" cy="15" r="1.5" fill="currentColor" stroke="none" /></>),
  letter: (<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" /></>),
  reminder: (<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /><path d="M12 13v3l2 1" /></>),
  perimeter: (<><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></>),
};

export default function PermissionsPage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative pt-12 pb-10 md:pt-20 md:pb-12 overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-mono text-[11px] md:text-xs text-accent/80 tracking-[0.15em] uppercase mb-5">Permissions &amp; Boundaries</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-5 [text-wrap:balance]">
              Protect your access. <span className="text-accent">Avoid the trespass.</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:pretty]">
              Turn a verbal yes into a signed PDF, keep every landowner permission with its expiry and boundary in one
              vault, and let your phone warn you before you ever cross the line you agreed to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <GooglePlayButton />
              <span className="inline-flex items-center gap-2 text-xs font-medium text-muted"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Android · by Loriba</span>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="max-w-6xl mx-auto px-6"><SpotlightVault /></div>
        </section>

        <section className="py-10 md:py-16 bg-surface/20">
          <div className="max-w-6xl mx-auto px-6"><SpotlightPerimeter /></div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-4">Everything a <span className="text-accent">permission</span> needs.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <InfoCard icon={ICON.vault} tier="Free" title="The Vault" body="Every permission with a status color (approved, ask first, denied), landowner details, and the site boundary on the map. Free covers 1 entry; Pro is unlimited." />
              <InfoCard icon={ICON.letter} tier="Pro" title="PDF permission letter" body="Generate a branded A4 request or thank-you letter with a site map, signed by the landowner on your screen." />
              <InfoCard icon={ICON.reminder} tier="Free" title="Expiry reminders" body="Add any permit's expiry date to your phone's calendar with one tap, and see what's expiring soon in the forecast." />
              <InfoCard icon={ICON.perimeter} tier="Pro" title="Perimeter Guard" body="Draw a boundary and get escalating vibration near the edge, plus an alarm if you step outside, even through Do Not Disturb." />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-surface/20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Detect where you&apos;re <span className="text-accent">welcome.</span></h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-8">Keep your permissions straight and your boundaries honest, and you keep your access.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GooglePlayButton />
              <a href="/trust" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base rounded-2xl border border-white/12 text-foreground font-semibold hover:border-accent/40 transition-colors">How your data is handled</a>
            </div>
            <p className="text-accent/70 text-sm font-medium mt-6">Android · by Loriba · <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Google Play</a></p>
          </div>
        </section>
      </main>
      <Footer />
    </I18nProvider>
  );
}
