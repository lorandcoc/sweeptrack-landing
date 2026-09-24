import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import { PLAY_URL } from "@/lib/playStore";
import InfoCard, { StepCard } from "@/components/InfoCard";
import { ButtonLink, ItemGrid, PageClosing, PageHero, PageSection, PlanCompare, TextLink } from "@/components/PageSection";

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



export default function ClubsPage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero
          title="Put your whole club on one live map"
          actions={<ButtonLink href={CLUB_MAILTO}>Tell us about your club</ButtonLink>}
          note="Members join free, the organizer hosts with Pro. Android only; the free member app is launching soon."
        >
          <p>
            On a club dig or a weekend rally, Radar shows every member live on one shared map: who is where, which way
            they are heading, and how far out, with one-tap SOS, a shared base point, and a leave-before-dark countdown.
          </p>
          <p className="text-base">
            You create the group, and members join free with a code or QR. There&apos;s no account to set up: they
            install the app and they&apos;re on the map.
          </p>
        </PageHero>

        <PageSection
          title="A club dig is a lot of people on a lot of ground"
          intro="Radar keeps the group accounted for without anyone shouting across a field or losing a new member behind a hedge."
        >
          <ItemGrid>
            <InfoCard title="Nobody gets lost" body="Every member is a live dot with a name and heading. New members and solo wanderers stay accounted for all day." />
            <InfoCard title="Safety the group can see" body="One-tap SOS alerts the whole group with the member's location. A shared base point and Retrace get everyone back to the cars." />
            <InfoCard title="Coordinate the dig" body="Drop shared waypoints (dig here, found it, rally, hazard) and fire quick pings: look here, regroup, need a hand." />
            <InfoCard title="Beat the sunset" body="A daylight countdown tells the group when to start packing up, based on how far out each member is from base." />
          </ItemGrid>
        </PageSection>

        <PageSection title="Your club is on the map in a minute" intro="One organizer hosts. Everyone else joins free. That is the whole setup.">
          <ItemGrid cols={3}>
            <StepCard n="1" title="An organizer hosts" body="A club officer on SweepTrack Pro taps RADAR and starts a group, getting a short code, a QR, and a share link." />
            <StepCard n="2" title="Members join free" body="Send the code or QR to the club. Members install the free app and join in seconds. No account and no cost." />
            <StepCard n="3" title="The whole club is live" body="Everyone shows up on one shared live map, refreshing about every 30 seconds, with names, heading, distance, and every safety and teamwork tool." />
          </ItemGrid>
        </PageSection>

        <PageSection title="The officer kit" intro="Tell us about your club and we'll send what you need to bring the members on board.">
          <ItemGrid>
            <InfoCard title="A one-pager to forward" body="A clear How our club uses Radar explainer you can drop straight into your group chat or email list." />
            <InfoCard title="A join card with QR" body="A printable code-and-QR card to post in your Facebook group or hand out at the next meet." />
            <InfoCard title="Paste-in group copy" body="Ready-to-send wording for your group chat so members know exactly what to install and why." />
            <InfoCard title="Help for the organizer" body="Members join free; the organizer hosts with SweepTrack Pro. Get in touch and we will help you get set up." />
          </ItemGrid>
          <div className="mt-10">
            <ButtonLink href={CLUB_MAILTO}>Tell us about your club</ButtonLink>
          </div>
        </PageSection>

        <PageSection
          title="Free for the club, Pro for the organizer"
          intro="Joining a group and every safety tool are free for good. One organizer hosts the group with SweepTrack Pro, which also unlocks the full field toolkit for them."
        >
          <PlanCompare
            free={{
              label: "Every member, free",
              items: [
                "Join the group by code or QR, no account",
                "Live group map with names and heading arrows",
                "SOS, shared base point, and Retrace",
                "Shared waypoints and quick pings",
                "Leave-before-dark daylight countdown",
              ],
            }}
            paid={{
              label: "The organizer, on Pro",
              items: [
                "Create and host your club's live groups",
                "The full SweepTrack Pro field toolkit",
                "Coverage heatmaps and session comparison",
                "Offline maps and the historical map layer",
                "Encrypted backup of the club's records you keep",
              ],
            }}
            note="Pricing is set in Google Play and shown in the app, with a free trial when Google Play offers one. Talk to us about getting your club organizers set up."
          />
        </PageSection>

        <PageSection
          title="Who can see the club's positions"
          intro="Detectorists guard their permissions. Radar is built so live location is shared with your group and nobody else."
        >
          <div className="max-w-4xl">
            <ItemGrid cols={2}>
              <InfoCard title="Visible only to your group" body="Live positions are shown only to members who joined with your code. Nothing is public, and a guessed code will not quietly scrape locations." />
              <InfoCard title="No account, ever" body="Radar signs in anonymously. No name, email, or phone number required for a member to join the map." />
              <InfoCard title="Built to expire" body="Groups expire on their own, and a member's entry drops off the moment they leave. We keep no running history of where the club has been. If a group is abandoned mid-dig, its last shared pins stay locked to the members inside that expired group until it's deleted." />
              <InfoCard title="Shared only while in use" body="Radar shares a position only while a member is in a group with the app open. No background tracking, opt-in by design." />
            </ItemGrid>
          </div>
          <p className="mt-10 text-muted">
            Read the full <TextLink href="/privacy-radar">SweepTrack Radar privacy policy</TextLink>, or see{" "}
            <TextLink href="/radar">how Radar works</TextLink>.
          </p>
        </PageSection>

        <PageClosing
          title="Before your next club dig"
          actions={
            <>
              <ButtonLink href={CLUB_MAILTO}>Tell us about your club</ButtonLink>
              <TextLink href={PLAY_URL}>Get SweepTrack Pro</TextLink>
            </>
          }
        >
          Tell us your club name, where you detect, and how many of you there are. We will help your organizers get set
          up.
        </PageClosing>
      </main>
      <Footer />
    </I18nProvider>
  );
}
