import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import { PLAY_URL } from "@/components/GooglePlayButton";

const URL = "https://sweeptrack.pro/clubs";
const TITLE = "SweepTrack for Detecting Clubs: Your Whole Club on One Live Map";
const DESCRIPTION =
  "Run a metal detecting club? With SweepTrack Radar, every member sees the whole group live on one map on dig days, with SOS, a shared base point, and a leave-before-dark countdown. Members join free; the organizer hosts with SweepTrack Pro.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "SweepTrack for detecting clubs: your whole club on one live map",
    description: DESCRIPTION,
    url: URL,
    siteName: "SweepTrack Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SweepTrack for detecting clubs",
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: URL,
  isPartOf: { "@type": "WebSite", name: "SweepTrack Pro", url: "https://sweeptrack.pro" },
  about: {
    "@type": "SoftwareApplication",
    name: "SweepTrack Pro",
    operatingSystem: "Android",
    applicationCategory: "UtilitiesApplication",
    url: "https://sweeptrack.pro",
  },
  publisher: { "@type": "Organization", name: "Loriba", url: "https://sweeptrack.pro" },
};

// Pre-filled inquiry so an officer can tell us about their club in one tap.
const CLUB_MAILTO =
  "mailto:support@sweeptrack.pro" +
  "?subject=" +
  encodeURIComponent("SweepTrack club program: [your club name]") +
  "&body=" +
  encodeURIComponent(
    [
      "Club name:",
      "Region / area:",
      "Approx. members:",
      "Your role (organizer / president / officer):",
      "Do you run group digs or rallies?:",
      "",
      "We'd like to try SweepTrack Radar for our club's dig days.",
    ].join("\n"),
  );

function Step({ n, t, b }: { n: string; t: string; b: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-3xl text-accent/30 mb-2">{n}</div>
      <h3 className="font-bold text-lg mb-2">{t}</h3>
      <p className="text-muted text-sm leading-relaxed max-w-[280px] mx-auto">{b}</p>
    </div>
  );
}

function KitItem({ t, b }: { t: string; b: string }) {
  return (
    <div className="rounded-2xl p-5 bg-surface border border-white/[0.07] h-full">
      <h3 className="font-semibold text-base mb-1.5">{t}</h3>
      <p className="text-muted text-sm leading-relaxed">{b}</p>
    </div>
  );
}

export default function ClubsPage() {
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
                  For detecting clubs &amp; organizers
                </p>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-5 [text-wrap:balance]">
                  Put your whole club on <span className="text-accent">one live map.</span>
                </h1>
                <p className="text-muted text-base md:text-lg max-w-xl mb-4 md:mx-0 mx-auto leading-relaxed [text-wrap:pretty]">
                  On a club dig or a weekend rally, Radar shows every member live on one shared map: who is where, which
                  way they are heading, and how far out, with one-tap SOS, a shared base point, and a leave-before-dark
                  countdown. Coordinating a big group on open ground has never been simpler or safer.
                </p>
                <p className="text-muted/80 text-sm max-w-xl mb-8 md:mx-0 mx-auto leading-relaxed">
                  You create the group; your members join free with a code or QR. No account to set up, no store to
                  dig through for them, just install and they&apos;re on the map.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                  <a
                    href={CLUB_MAILTO}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg rounded-2xl bg-accent text-[#050510] font-semibold hover:bg-accent-dim transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Tell us about your club
                  </a>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Members join free · Organizer hosts with Pro
                  </span>
                </div>
                <p className="font-mono text-[11px] text-muted/70 mt-4">
                  Free officer setup help · Android · Free member app launching soon
                </p>
              </div>

              {/* Phone visual */}
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
                      alt="SweepTrack Radar showing a whole detecting club live on one map, each member with a name and heading arrow"
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

        {/* Why a club needs it */}
        <section className="py-14 md:py-20 relative">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">Why clubs run on Radar</p>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                A club dig is a lot of people on <span className="text-accent">a lot of ground.</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Radar turns a scattered group into one coordinated, accounted-for team, without anyone shouting across a
                field or losing a new member behind a hedge.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <KitItem t="Nobody gets lost" b="Every member is a live dot with a name and heading. New members and solo wanderers stay accounted for all day." />
              <KitItem t="Safety the group can see" b="One-tap SOS alerts the whole group with the member's location. A shared base point and Retrace get everyone back to the cars." />
              <KitItem t="Coordinate the dig" b="Drop shared waypoints (dig here, found it, rally, hazard) and fire quick pings: look here, regroup, need a hand. The whole field stays on the same page." />
              <KitItem t="Beat the sunset" b="A daylight countdown tells the group when to start packing up, based on how far out each member is from base." />
            </div>
          </div>
        </section>

        {/* How a club gets started */}
        <section className="py-14 md:py-20 relative bg-surface/20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">Your club is on the map in a minute</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                One organizer hosts. Everyone else joins free. That is the whole setup.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Step n="01" t="An organizer hosts" b="A club officer on SweepTrack Pro taps RADAR and starts a group, getting a short code, a QR, and a share link." />
              <Step n="02" t="Members join free" b="Send the code or QR to the club. Members install the free app and join in seconds. No account, no cost, no fuss." />
              <Step n="03" t="The whole club is live" b="Everyone shows up on one shared live map, refreshing about every 30 seconds, with names, heading, distance, and every safety and teamwork tool." />
            </div>
          </div>
        </section>

        {/* The officer kit */}
        <section className="py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                The <span className="text-accent">officer kit</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Tell us about your club and we will set you up so adopting Radar is one decision, not ten. Everything you
                need to bring the whole roster on board.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <KitItem t="A one-pager to forward" b="A clear How our club uses Radar explainer you can drop straight into your group chat or email list." />
              <KitItem t="A join card with QR" b="A printable code-and-QR card to post in your Facebook group or hand out at the next meet." />
              <KitItem t="Paste-in group copy" b="Ready-to-send wording for your group chat so members know exactly what to install and why." />
              <KitItem t="Help for the organizer" b="Members join free; the organizer hosts with SweepTrack Pro. Get in touch and we will help you get set up." />
            </div>
            <div className="text-center mt-10">
              <a
                href={CLUB_MAILTO}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg rounded-2xl bg-accent text-[#050510] font-semibold hover:bg-accent-dim transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Tell us about your club
              </a>
            </div>
          </div>
        </section>

        {/* Members free, organizer hosts */}
        <section className="py-14 md:py-20 bg-surface/20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">Free for the club, Pro for the organizer</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Joining a group and every safety tool are free for good. One organizer hosts the group with SweepTrack
                Pro, which also unlocks the full field toolkit for them.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl p-6 bg-surface border border-white/[0.08]">
                <div className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Every member, free</div>
                <ul className="space-y-2.5">
                  {[
                    "Join the group by code or QR, no account",
                    "Live group map with names and heading arrows",
                    "SOS, shared base point, and Retrace",
                    "Shared waypoints and quick pings",
                    "Leave-before-dark daylight countdown",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span className="text-accent font-bold mt-0.5">&#10003;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sweep-outline rounded-2xl p-6 relative bg-surface">
                <div className="relative z-10">
                  <div className="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-4">
                    The organizer, on Pro
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "Create and host your club's live groups",
                      "The full SweepTrack Pro field toolkit",
                      "Coverage heatmaps and session comparison",
                      "Offline maps and the historical map layer",
                      "Encrypted backup of the club's records you keep",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                        <span className="text-amber-300 mt-0.5">&#9733;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted text-xs leading-relaxed mt-5 pt-4 border-t border-white/[0.07]">
                    Pricing is set in Google Play and shown in the app, with a free trial when Google Play offers one.
                    Talk to us about getting your club organizers set up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy for clubs */}
        <section className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Your club&apos;s spots stay <span className="text-accent">your club&apos;s.</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Detectorists guard their permissions. Radar is built so live location is shared with your group and
                nobody else.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["Visible only to your group", "Live positions are shown only to members who joined with your code. Nothing is public, and a guessed code will not quietly scrape locations."],
                ["No account, ever", "Radar signs in anonymously. No name, email, or phone number required for a member to join the map."],
                ["Built to expire", "Groups expire on their own, and a member's entry drops off the moment they leave. We keep no running history of where the club has been. If a group is abandoned mid-dig, its last shared pins stay locked to the members inside that expired group until it's deleted."],
                ["Shared only while in use", "Radar shares a position only while a member is in a group with the app open. No background tracking, opt-in by design."],
              ].map(([t, b]) => (
                <div key={t} className="rounded-2xl p-5 bg-surface border border-white/[0.07]">
                  <h3 className="font-semibold text-base mb-1.5">{t}</h3>
                  <p className="text-muted text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted text-sm mt-8">
              Read the full{" "}
              <a href="/privacy-radar" className="text-accent hover:underline">SweepTrack Radar privacy policy</a>, or
              see{" "}
              <a href="/radar" className="text-accent hover:underline">how Radar works</a>.
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
                  Bring the whole club <span className="text-accent">on the map.</span>
                </h2>
                <p className="text-muted text-lg max-w-lg mx-auto mb-8">
                  Tell us your club name, where you detect, and how many of you there are. We will help your organizers
                  get set up for the next dig.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={CLUB_MAILTO}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg rounded-2xl bg-accent text-[#050510] font-semibold hover:bg-accent-dim transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Tell us about your club
                  </a>
                  <a
                    href={PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base rounded-2xl border border-white/12 text-foreground font-semibold hover:border-accent/40 transition-colors"
                  >
                    Get SweepTrack Pro
                  </a>
                </div>
                <p className="text-accent/70 text-sm font-medium mt-6">Members join free · Android · by Loriba</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </I18nProvider>
  );
}
