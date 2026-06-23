import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "detecting-as-a-group-with-radar";
const TITLE = "Detecting as a Group: Live Positions with Radar";
const DESCRIPTION =
  "Radar puts your whole detecting group on one live map inside SweepTrack Pro, with distance to every member, shared waypoints, an SOS, and a shared base point.";
const IMAGE = "/screenshots/radar.jpg";
const PUBLISHED = "2026-06-24";

export const metadata = blogMeta({ slug: SLUG, title: TITLE, description: DESCRIPTION, publishedDate: PUBLISHED });

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ slug: SLUG, title: TITLE, description: DESCRIPTION, image: IMAGE, publishedDate: PUBLISHED })) }}
      />
      <BlogPostFrame
        title={TITLE}
        category="guides"
        readTime="4 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "How to Track Your Sessions with GPS" },
          { href: "/blog/setting-up-perimeter-guard", title: "Setting Up Perimeter Guard" },
        ]}
      >
          <p>Detecting with friends usually means a lot of looking up and waving across a field. Radar replaces that with one live map the whole group shares. You see each other move in real time, with distance and direction to every member, plus the safety tools that matter once a group spreads out over open ground. Radar is built into SweepTrack Pro today, reached from the Live Group control on the map.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Join in seconds, with no account</h2>
          <p>One person starts a group and shares an eight character code or a QR. Everyone else joins by typing the code or scanning it. There is no account, no email, and no sign-up. You join anonymously, and your spot on the map is visible only to the people who have the code.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">See the whole group at a glance</h2>
          <p>Each member shows on the map as a marker with their name and a heading arrow, so you know not just where someone is but which way they are facing. The list gives you distance to each person and a last-seen status: live, lagging after about 45 seconds without an update, and stale after 90. You always know whether the dot on the screen is current.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Tools for working a site together</h2>
          <p>A shared base point marks where the car is, so nobody has to remember the way out. Drop shared waypoints the group can all see, tagged Dig, Found, Rally, or Hazard. Fire a quick ping when words are too slow: Look here, Regroup, Dig here, or Help. You can also retrace your own route back to the start and watch a daylight countdown that tells you when to head back before dark.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Safety, and your privacy</h2>
          <p>SOS is the one that counts. Trigger it and the whole group is alerted with your location, and your position keeps updating while the emergency is active, even with the phone in your pocket and the app off screen. That works because Radar runs as a foreground service while you are in a group. It does not ask for always-on background location, it does not track you between trips, and the moment you leave a group your entry is removed. Groups expire on their own after about twelve hours.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Free to join, Pro to host</h2>
          <p>Joining a group is free, with the live map and every safety tool included. Position updates run every 15, 30, or 60 seconds, set to 30 by default. Hosting your own group requires Pro. A free standalone SweepTrack Radar app, for buddies who do not run Pro, is launching soon on Google Play, and Pro subscribers will unlock its premium tier automatically.</p>
      </BlogPostFrame>
    </>
  );
}
