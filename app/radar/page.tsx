import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoonButton from "@/components/ComingSoonButton";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/radar";
const TITLE = "SweepTrack Radar — Free Live Group Positioning for Metal Detecting";
const DESCRIPTION =
  "SweepTrack Radar is a free companion app that puts your whole detecting group on one live map. No account — join with a code or QR. SOS, shared base, waypoints, and guide arrows are free forever. Included free with SweepTrack Pro.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "SweepTrack Radar — see your whole group on one live map",
    description: DESCRIPTION,
    url: URL,
    siteName: "SweepTrack Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SweepTrack Radar — free live group positioning",
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SweepTrack Radar",
  alternateName: ["Live Group Positioning", "Metal Detecting Group Tracker"],
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Metal Detecting",
  operatingSystem: "Android",
  description: DESCRIPTION,
  url: URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    name: "Free",
    description:
      "Join unlimited groups free with the live map, SOS, shared base point, shared waypoints, pings, and guide arrows. Radar Premium adds hosting, faster updates, unlimited saved spots, and GPX track export.",
  },
  author: { "@type": "Organization", name: "Loriba", url: "https://sweeptrack.pro" },
  isRelatedTo: {
    "@type": "SoftwareApplication",
    name: "SweepTrack Pro",
    operatingSystem: "Android",
    url: "https://sweeptrack.pro",
  },
};

/* ─── small presentational helpers ─── */

function Pillar({ title, body, icon }: { title: string; body: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-5 bg-surface border border-white/[0.07] h-full">
      <div className="w-10 h-10 rounded-lg bg-accent/8 flex items-center justify-center text-accent mb-3">{icon}</div>
      <h3 className="font-semibold text-base mb-1.5">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function Check() {
  return <span className="text-accent font-bold">&#10003;</span>;
}
function Lock() {
  return (
    <span className="inline-flex items-center gap-1 text-amber-300/90 text-[11px] font-semibold uppercase tracking-wide">
      Premium
    </span>
  );
}

const freeForever = [
  "Join unlimited groups by code or QR",
  "Live group map with names + heading arrows",
  "Distance & last-seen to every member",
  "SOS that alerts the group with your location",
  "Shared base point (where the car is)",
  "Retrace your route back to the start",
  "Shared waypoints (Dig / Found / Rally / Hazard)",
  "One-tap pings — Look here, Regroup, Dig here, Help",
  "Compass guide arrow + live distance to any target",
  "Daylight “leave before dark” countdown",
  "Up to 10 private saved spots",
];

const premiumExtras = [
  "Create & host your own live groups",
  "Faster 10–15s position updates",
  "Unlimited private saved spots",
  "Export your own track as GPX",
  "Full 12-color marker palette + all marker glyphs",
];

export default function RadarPage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-12 pb-12 md:pt-20 md:pb-16 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <p className="font-mono text-[11px] md:text-xs text-accent/80 tracking-[0.15em] uppercase mb-5">
                  Free companion app · Live group positioning
                </p>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-5 [text-wrap:balance]">
                  See your whole group on <span className="text-accent">one live map.</span>
                </h1>
                <p className="text-muted text-base md:text-lg max-w-xl mb-4 md:mx-0 mx-auto leading-relaxed [text-wrap:pretty]">
                  SweepTrack Radar is a free companion app for detecting trips. One person starts a group; everyone
                  else joins with a code or QR and sees each other move in real time. No account, no email, no sign-up.
                </p>
                <p className="text-muted/80 text-sm max-w-xl mb-8 md:mx-0 mx-auto leading-relaxed">
                  Built to pair with <span className="text-foreground">SweepTrack Pro</span>, which has the same live
                  positioning built in as <span className="text-foreground">Live Group</span>. Already a Pro subscriber?
                  Radar Premium is included free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                  <ComingSoonButton size="large" />
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Free to join · Premium to host
                  </span>
                </div>
                <p className="font-mono text-[11px] text-muted/70 mt-4">Launching soon on Google Play · Android only.</p>
              </div>

              {/* Phone with radar rings */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="radar-rings" aria-hidden="true">
                    <span className="radar-ring" />
                    <span className="radar-ring" />
                    <span className="radar-ring" />
                    <span className="radar-ring" />
                    <span className="radar-pin" />
                  </div>
                  <div className="phone-frame w-[220px] sm:w-[250px] aspect-[320/693] relative z-[1]">
                    <Image
                      src="/screenshots/radar.jpg"
                      alt="SweepTrack Radar live group map showing every member's position, name, and heading arrow in real time"
                      width={320}
                      height={693}
                      priority
                      className="w-full h-auto screenshot-crop"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two apps, one map */}
        <section className="py-14 md:py-20 relative">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">Two apps, one shared map</p>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                A group is only as joinable as its <span className="text-accent">least-equipped member.</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                So positioning lives in both apps, on one shared backend. The host can be on Pro; everyone else can
                join free with Radar. Same map, same group.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="featured-card rounded-2xl p-6 bg-surface border border-white/[0.08]">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-accent/30 text-accent/90 bg-accent/[0.06]">
                  Free companion app
                </span>
                <h3 className="font-display text-xl mt-4 mb-2">SweepTrack Radar</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Lightweight and free. Install it, type a code, and you&apos;re on the group map — with full safety
                  tools and collaboration. Radar Premium adds hosting and power features.
                </p>
              </div>
              <div className="featured-card rounded-2xl p-6 bg-surface border border-white/[0.08]">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-cyan-400/30 text-cyan-300/90 bg-cyan-400/[0.06]">
                  Built into Pro
                </span>
                <h3 className="font-display text-xl mt-4 mb-2">Live Group in SweepTrack Pro</h3>
                <p className="text-muted text-sm leading-relaxed">
                  The same live positioning, folded right onto the Pro map alongside coverage tracking, offline maps,
                  and 45+ tools. Host your own groups and bring friends in on Radar.
                </p>
                <a href="/" className="text-accent text-sm font-medium mt-3 inline-flex items-center gap-1 hover:underline">
                  See SweepTrack Pro &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-14 md:py-20 relative bg-surface/20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">Up and running in under a minute</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { n: "01", t: "Start a group", b: "A Pro or Radar Premium host starts a live group and gets an 8-character code, QR, and share link." },
                { n: "02", t: "Share the code", b: "Send the code or QR to your detecting buddies. They install the free Radar app — no account needed." },
                { n: "03", t: "Everyone’s on the map", b: "Each phone appears as a colored dot with a name and heading arrow, refreshing about every 30 seconds." },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="font-display text-3xl text-accent/30 mb-2">{s.n}</div>
                  <h3 className="font-bold text-lg mb-2">{s.t}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-[280px] mx-auto">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Built for <span className="text-accent">the field</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Pillar
                title="Safety first, always free"
                body="SOS alerts the whole group with your location at a 5-second emergency cadence — even on a free account."
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>}
              />
              <Pillar
                title="Find your way back"
                body="Set a shared base where the car is, Retrace your own route home, and follow a compass guide arrow to anyone."
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polygon points="14.5 9.5 9.5 11.5 9.5 14.5 14.5 12.5" fill="currentColor" stroke="none" /></svg>}
              />
              <Pillar
                title="Work the site together"
                body="Drop shared waypoints, fire one-tap pings (Look here, Regroup, Dig here, Help), and keep the group coordinated."
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 00-8 8c0 4.5 8 12 8 12s8-7.5 8-12a8 8 0 00-8-8z" /></svg>}
              />
              <Pillar
                title="Beat the sunset"
                body="A daylight chip counts down to sunset and nudges you to leave by a safe time, based on your distance to base."
                icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M5 9l-2-1M19 9l2-1M4 14h16M7 18h10" /><path d="M8 14a4 4 0 018 0" /></svg>}
              />
            </div>
          </div>
        </section>

        {/* Free vs Premium */}
        <section className="py-14 md:py-20 bg-surface/20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">Free vs Radar Premium</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Joining a group and every safety tool are free forever. Premium is for the people who host.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl p-6 bg-surface border border-white/[0.08]">
                <div className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Free forever</div>
                <ul className="space-y-2.5">
                  {freeForever.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span className="mt-0.5"><Check /></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sweep-outline rounded-2xl p-6 relative bg-surface">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold uppercase tracking-wider text-amber-300">Radar Premium</div>
                    <Lock />
                  </div>
                  <ul className="space-y-2.5">
                    {premiumExtras.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                        <span className="text-amber-300 mt-0.5">&#9733;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted text-xs leading-relaxed mt-5 pt-4 border-t border-white/[0.07]">
                    Already subscribe to <span className="text-foreground">SweepTrack Pro</span>? Radar Premium is
                    included free — open Pro once on the same phone and it unlocks. No second purchase, no login.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy & trust */}
        <section className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Your location, <span className="text-accent">on your terms</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["No account, ever", "Radar uses anonymous sign-in. No name, email, phone number, or Google account — there's nothing to log into."],
                ["Visible only to your group", "Live positions are readable only by people who joined with your code. Nothing is ever public, and guessing a code can't quietly scrape locations."],
                ["Transient by design", "Groups auto-expire (typically within ~12 hours) and your entry is deleted when you leave. We don't keep a history of your movements."],
                ["While-in-use GPS only", "Radar shares your location only while you're actively in a group with the app open or sharing — no background tracking."],
              ].map(([t, b]) => (
                <div key={t} className="rounded-2xl p-5 bg-surface border border-white/[0.07]">
                  <h3 className="font-semibold text-base mb-1.5">{t}</h3>
                  <p className="text-muted text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted text-sm mt-8">
              Read the full{" "}
              <a href="/privacy-radar" className="text-accent hover:underline">SweepTrack Radar privacy policy</a>.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="relative border border-white/[0.06] rounded-3xl p-10 md:p-14 text-center bg-surface/50 overflow-hidden">
              <div className="radar-rings" aria-hidden="true">
                <span className="radar-ring" />
                <span className="radar-ring" />
                <span className="radar-ring" />
                <span className="radar-ring" />
                <span className="radar-pin" />
              </div>
              <div className="relative z-[2]">
                <h2 className="font-display text-3xl md:text-4xl mb-4">
                  Bring the whole crew <span className="text-accent">on the map.</span>
                </h2>
                <p className="text-muted text-lg max-w-lg mx-auto mb-2">
                  SweepTrack Radar launches free on Google Play. Join the launch list and get the link first.
                </p>
                <p className="text-accent/70 text-sm font-medium mb-8">Free · No account · Android</p>
                <div className="flex justify-center">
                  <ComingSoonButton size="large" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </I18nProvider>
  );
}
