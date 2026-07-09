import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GooglePlayButton, { PLAY_URL } from "@/components/GooglePlayButton";
import SpotlightVault from "@/components/SpotlightVault";
import SpotlightPerimeter from "@/components/SpotlightPerimeter";
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

function Tool({ title, body, tier }: { title: string; body: string; tier: "Free" | "Pro" }) {
  return (
    <div className="rounded-2xl p-5 bg-surface border border-white/[0.07] h-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-base">{title}</h3>
        <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${tier === "Free" ? "text-accent/90 border-accent/30 bg-accent/[0.06]" : "text-amber-300/90 border-amber-400/30 bg-amber-400/[0.06]"}`}>{tier}</span>
      </div>
      <p className="text-muted text-sm leading-relaxed">{body}</p>
    </div>
  );
}

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
              <Tool tier="Free" title="The Vault" body="Every permission with a status color (approved, ask first, denied), landowner details, and the site boundary on the map. Free covers 1 entry; Pro is unlimited." />
              <Tool tier="Pro" title="PDF permission letter" body="Generate a branded A4 request or thank-you letter with a site map, signed by the landowner on your screen." />
              <Tool tier="Free" title="Expiry reminders" body="Add any permit's expiry date to your phone's calendar with one tap, and see what's expiring soon in the forecast." />
              <Tool tier="Pro" title="Perimeter Guard" body="Draw a boundary and get escalating vibration near the edge, plus an alarm if you step outside, even through Do Not Disturb." />
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
