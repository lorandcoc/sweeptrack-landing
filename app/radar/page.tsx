import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoonButton from "@/components/ComingSoonButton";
import RadarGroupDemo from "@/components/RadarGroupDemo";
import InfoCard, { StepCard } from "@/components/InfoCard";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/radar";
const TITLE = "SweepTrack Radar: Free Real-Time Group Map for Metal Detecting";
const DESCRIPTION =
  "SweepTrack Radar is a free companion app that puts your whole detecting group on one live map. No account needed, just a code or QR. SOS, shared base, waypoints, and guide arrows are free for good. It comes free with SweepTrack Pro.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: "SweepTrack Radar: see your whole group on one live map", description: DESCRIPTION, url: URL, siteName: "SweepTrack Pro", type: "website" },
  twitter: { card: "summary_large_image", title: "SweepTrack Radar: free real-time group map", description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SweepTrack Radar",
  alternateName: ["Radar", "live group positioning", "Metal Detecting Group Tracker"],
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
  isRelatedTo: { "@type": "SoftwareApplication", name: "SweepTrack Pro", operatingSystem: "Android", url: "https://sweeptrack.pro" },
};

const ICON = {
  companion: (<><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 18h4" /></>),
  pro: (<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>),
  shield: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>),
  compass: (<><circle cx="12" cy="12" r="9" /><polygon points="14.5 9.5 9.5 11.5 9.5 14.5 14.5 12.5" fill="currentColor" stroke="none" /></>),
  users: (<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></>),
  sunset: (<><path d="M17 18a5 5 0 0 0-10 0" /><path d="M12 2v7m0 0l3-3m-3 3L9 6" /><path d="M2 18h2M20 18h2M2 22h20" /></>),
  anon: (<><circle cx="12" cy="8" r="4" /><path d="M5.5 20a7 7 0 0 1 13 0" /></>),
  eye: (<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  pin: (<><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
};

const RADAR_VIOLET = "#A78BFA";

const freeForever = [
  "Join unlimited groups by code or QR",
  "Live group map with names + heading arrows",
  "Distance & last-seen to every member",
  "SOS that alerts the group with your location",
  "Shared base point (where the car is)",
  "Retrace your route back to the start",
  "Shared waypoints (Dig / Found / Rally / Hazard)",
  "Quick pings: Look here, Regroup, Need a hand",
  "Compass guide arrow + live distance to any target",
  "Daylight leave-before-dark countdown",
  "Up to 10 private saved spots",
];

const premiumExtras = [
  "Create & host your own live groups",
  "Faster 10-15s position updates",
  "Unlimited private saved spots",
  "Export your own track as GPX",
  "Full 12-color marker palette + all marker glyphs",
];

const moreChips = ["11 member icons", "Everyone's battery level", "Breadcrumb trails", "GPS accuracy rings", "Private saved spots", "Ghost mode to pause sharing"];

export default function RadarPage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-12 pb-8 md:pt-20 md:pb-10 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <p className="font-mono text-[11px] md:text-xs text-accent/80 tracking-[0.15em] uppercase mb-5">Radar · the free companion app</p>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-5 [text-wrap:balance]">
                  See your whole group on <span className="text-accent">one live map.</span>
                </h1>
                <p className="text-muted text-base md:text-lg max-w-xl mb-4 md:mx-0 mx-auto leading-relaxed [text-wrap:pretty]">
                  SweepTrack Radar is a free companion app for detecting trips. One person starts a group, everyone else
                  joins with a code or QR, and you watch each other move in real time. No account to set up.
                </p>
                <p className="text-muted/80 text-sm max-w-xl mb-8 md:mx-0 mx-auto leading-relaxed">
                  Radar is also built into <span className="text-foreground">SweepTrack Pro</span>. It&apos;s the{" "}
                  <span className="text-foreground">RADAR</span> button, one of the four controls on the home map. The
                  free app is how everyone else joins the same group. Already on Pro? Radar Premium comes free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                  <ComingSoonButton size="large" />
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-muted"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Free to join · Premium to host</span>
                </div>
                <p className="font-mono text-[11px] text-muted/70 mt-4">Launching soon on Google Play · Android only.</p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="radar-rings" aria-hidden="true"><span className="radar-ring" /><span className="radar-ring" /><span className="radar-ring" /><span className="radar-ring" /><span className="radar-pin" /></div>
                  <div className="phone-frame w-[220px] sm:w-[250px] aspect-[320/693] relative z-[1]">
                    <Image src="/screenshots/radar.jpg" alt="SweepTrack Radar live group map showing every member's position, name, and heading arrow in real time" width={320} height={693} priority className="w-full h-auto screenshot-crop" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live demo centerpiece */}
        <section className="pb-14 md:pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-8">
              <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">Live, on one map</p>
              <h2 className="font-display text-2xl md:text-3xl">Watch a group move, ping, and call for help.</h2>
            </div>
            <div className="rgx2-stage"><RadarGroupDemo /></div>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {moreChips.map((c) => (
                <span key={c} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium bg-white/[0.03] border border-white/[0.08] text-white/75">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Two apps, one map */}
        <section className="py-14 md:py-20 bg-surface/20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">Two apps, one shared map</p>
              <h2 className="font-display text-3xl md:text-4xl mb-4">Your friends don&apos;t need Pro to <span className="text-accent">show up.</span></h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">Radar lives in both apps, and they share one map. The host can be on Pro. Everyone else joins free with the Radar app. Same group, same map.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <InfoCard icon={ICON.companion} tier="Free" accent={RADAR_VIOLET} title="SweepTrack Radar" body="Free and light. Install it, type a code, and you're on the group map with every safety and teamwork tool. Radar Premium adds hosting and a few extras." />
              <InfoCard icon={ICON.pro} title="Radar, built into SweepTrack Pro" body="Radar is the RADAR button on the Pro home map, one of four controls, right next to coverage tracking, offline maps, and 45+ tools. Host your own groups and bring friends in on the free app." />
            </div>
            <p className="text-center mt-5"><a href="/" className="text-accent text-sm font-medium inline-flex items-center gap-1 hover:underline">See SweepTrack Pro &rarr;</a></p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">Up and running in under a minute</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              <StepCard n="01" accent={RADAR_VIOLET} title="Start a group" body="A Pro or Radar Premium host taps RADAR, starts a group, and gets an 8-character code, QR, and share link." />
              <StepCard n="02" accent={RADAR_VIOLET} title="Share the code" body="Send the code or QR to your detecting buddies. They install the free Radar app, no account needed." />
              <StepCard n="03" accent={RADAR_VIOLET} title="Everyone's on the map" body="Each phone shows up as a colored dot with a name and heading arrow, updating every 30 seconds or so." />
            </div>
          </div>
        </section>

        {/* Field pillars */}
        <section className="py-14 md:py-20 bg-surface/20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">Built for <span className="text-accent">the field</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <InfoCard icon={ICON.shield} title="Safety first, always free" body="SOS alerts the whole group with your location, updating every 5 seconds in an emergency. Works even on a free account." />
              <InfoCard icon={ICON.compass} title="Find your way back" body="Set a shared base where the car is, Retrace your own route home, and follow a compass guide arrow to anyone." />
              <InfoCard icon={ICON.users} title="Work the site together" body="Drop shared waypoints, fire off quick pings (Look here, Regroup, Need a hand), and keep everyone on the same page." />
              <InfoCard icon={ICON.sunset} title="Beat the sunset" body="A daylight chip counts down to sunset and tells you when to head back, based on how far you are from base." />
            </div>
          </div>
        </section>

        {/* Free vs Premium */}
        <section className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">Free vs Radar Premium</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">Joining a group and every safety tool are free for good. Premium is for the people who host.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl p-6 bg-surface border border-white/[0.08]">
                <div className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Free forever</div>
                <ul className="space-y-2.5">
                  {freeForever.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/80"><span className="text-accent font-bold mt-0.5">&#10003;</span><span>{f}</span></li>
                  ))}
                </ul>
              </div>
              <div className="sweep-outline rounded-2xl p-6 relative bg-surface">
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold uppercase tracking-wider text-amber-300">Radar Premium</div>
                    <span className="inline-flex items-center gap-1 text-amber-300/90 text-[11px] font-semibold uppercase tracking-wide">Premium</span>
                  </div>
                  <ul className="space-y-2.5">
                    {premiumExtras.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/80"><span className="text-amber-300 mt-0.5">&#9733;</span><span>{f}</span></li>
                    ))}
                  </ul>
                  <p className="text-muted text-xs leading-relaxed mt-5 pt-4 border-t border-white/[0.07]">
                    Already subscribe to <span className="text-foreground">SweepTrack Pro</span>? Radar Premium comes free. Open Pro once on the same phone and it unlocks. No second purchase, no login.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section className="py-14 md:py-20 bg-surface/20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-4">Your location stays <span className="text-accent">yours.</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <InfoCard icon={ICON.anon} title="No account, ever" body="Radar signs in anonymously. No name, email, phone number, or Google account. There's nothing to log into." />
              <InfoCard icon={ICON.eye} title="Visible only to your group" body="Live positions are only visible to people who joined with your code. Nothing is public, and guessing a code won't quietly scrape locations." />
              <InfoCard icon={ICON.clock} title="Built to expire" body="Groups expire on their own, usually within about 12 hours, and your entry is deleted the moment you leave. If a group is abandoned without anyone leaving, the last shared positions stay in that expired group until it's deleted. Full details are in the privacy policy." />
              <InfoCard icon={ICON.pin} title="While-in-use GPS only" body="Radar shares your location only while you're in a group with the app open. No background tracking." />
            </div>
            <p className="text-center text-muted text-sm mt-8">Read the full <a href="/privacy-radar" className="text-accent hover:underline">SweepTrack Radar privacy policy</a>, or see it <a href="/clubs" className="text-accent hover:underline">for detecting clubs</a>.</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="relative border border-white/[0.06] rounded-3xl p-10 md:p-14 text-center bg-surface/50 overflow-hidden">
              <div className="radar-rings" aria-hidden="true"><span className="radar-ring" /><span className="radar-ring" /><span className="radar-ring" /><span className="radar-ring" /><span className="radar-pin" /></div>
              <div className="relative z-[2]">
                <h2 className="font-display text-3xl md:text-4xl mb-4">Bring the whole crew <span className="text-accent">on the map.</span></h2>
                <p className="text-muted text-lg max-w-lg mx-auto mb-2">SweepTrack Radar launches free on Google Play. Join the launch list and get the link first.</p>
                <p className="text-accent/70 text-sm font-medium mb-8">Free · No account · Android</p>
                <div className="flex justify-center"><ComingSoonButton size="large" /></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </I18nProvider>
  );
}
