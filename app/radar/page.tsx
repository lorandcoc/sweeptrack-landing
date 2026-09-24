import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoonButton from "@/components/ComingSoonButton";
import RadarGroupDemo from "@/components/RadarGroupDemo";
import InfoCard, { StepCard } from "@/components/InfoCard";
import { ItemGrid, PageClosing, PageHero, PageSection, PlanCompare, TextLink } from "@/components/PageSection";
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


export default function RadarPage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero
          title="See your whole group on one live map"
          actions={<ComingSoonButton />}
          note="Free to join, Premium to host. Launching soon on Google Play, Android only."
        >
          <p>
            SweepTrack Radar is a free companion app for detecting trips. One person starts a group, everyone else joins
            with a code or QR, and you watch each other move in real time. No account to set up.
          </p>
          <p className="text-base">
            Radar is also built into <span className="text-foreground">SweepTrack Pro</span>: it&apos;s the RADAR button,
            one of the four controls on the home map. The free app is how everyone else joins the same group. Already on
            Pro? Radar Premium comes free.
          </p>
        </PageHero>

        <PageSection title="Watch a group move, ping, and call for help">
          <div className="rgx2-stage">
            <RadarGroupDemo />
          </div>
          <p className="mt-8 max-w-2xl text-muted leading-relaxed">
            Also on the map: 11 member icons, everyone&apos;s battery level, breadcrumb trails, GPS accuracy rings, private
            saved spots, and a ghost mode that pauses sharing.
          </p>
        </PageSection>

        <PageSection
          title="Your friends don't need Pro to show up"
          intro="Radar lives in both apps, and they share one map. The host can be on Pro. Everyone else joins free with the Radar app. Same group, same map."
        >
          <div className="max-w-4xl">
            <ItemGrid cols={2}>
              <InfoCard tier="Free" title="SweepTrack Radar" body="Free and light. Install it, type a code, and you're on the group map with every safety and teamwork tool. Radar Premium adds hosting and a few extras." />
              <InfoCard title="Radar, built into SweepTrack Pro" body="Radar is the RADAR button on the Pro home map, one of four controls, right next to coverage tracking, offline maps, and 45+ tools. Host your own groups and bring friends in on the free app." />
            </ItemGrid>
          </div>
          <p className="mt-8">
            <TextLink href="/">About SweepTrack Pro</TextLink>
          </p>
        </PageSection>

        <PageSection title="Up and running in under a minute">
          <ItemGrid cols={3}>
            <StepCard n="1" title="Start a group" body="A Pro or Radar Premium host taps RADAR, starts a group, and gets an 8-character code, QR, and share link." />
            <StepCard n="2" title="Share the code" body="Send the code or QR to your detecting buddies. They install the free Radar app, no account needed." />
            <StepCard n="3" title="Everyone's on the map" body="Each phone shows up as a colored dot with a name and heading arrow, updating every 30 seconds or so." />
          </ItemGrid>
        </PageSection>

        <PageSection title="What it does on a dig">
          <ItemGrid>
            <InfoCard title="Safety first, always free" body="SOS alerts the whole group with your location, updating every 5 seconds in an emergency. Works even on a free account." />
            <InfoCard title="Find your way back" body="Set a shared base where the car is, Retrace your own route home, and follow a compass guide arrow to anyone." />
            <InfoCard title="Work the site together" body="Drop shared waypoints, fire off quick pings (Look here, Regroup, Need a hand), and keep everyone on the same page." />
            <InfoCard title="Beat the sunset" body="A daylight chip counts down to sunset and tells you when to head back, based on how far you are from base." />
          </ItemGrid>
        </PageSection>

        <PageSection title="Free and Radar Premium" intro="Joining a group and every safety tool are free for good. Premium is for the people who host.">
          <PlanCompare
            free={{ label: "Free forever", items: freeForever }}
            paid={{ label: "Radar Premium", items: premiumExtras }}
            note={
              <>
                Already subscribe to <span className="text-foreground">SweepTrack Pro</span>? Radar Premium comes free.
                Open Pro once on the same phone and it unlocks. No second purchase, no login.
              </>
            }
          />
        </PageSection>

        <PageSection title="Who can see your location">
          <ItemGrid>
            <InfoCard title="No account, ever" body="Radar signs in anonymously. No name, email, phone number, or Google account. There's nothing to log into." />
            <InfoCard title="Visible only to your group" body="Live positions are only visible to people who joined with your code. Nothing is public, and guessing a code won't quietly scrape locations." />
            <InfoCard title="Built to expire" body="Groups expire on their own, usually within about 12 hours, and your entry is deleted the moment you leave. If a group is abandoned without anyone leaving, the last shared positions stay in that expired group until it's deleted. Full details are in the privacy policy." />
            <InfoCard title="While-in-use GPS only" body="Radar shares your location only while you're in a group with the app open. No background tracking." />
          </ItemGrid>
          <p className="mt-10 text-muted">
            Read the full <TextLink href="/privacy-radar">SweepTrack Radar privacy policy</TextLink>, or see how it
            works <TextLink href="/clubs">for detecting clubs</TextLink>.
          </p>
        </PageSection>

        <PageClosing title="Get the link when it launches" actions={<ComingSoonButton size="large" />}>
          SweepTrack Radar launches free on Google Play. Join the test with your email and you get the link first. No
          account, and Android only for now.
        </PageClosing>
      </main>
      <Footer />
    </I18nProvider>
  );
}
