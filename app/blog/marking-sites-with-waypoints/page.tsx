import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "marking-sites-with-waypoints";
const TITLE = "Marking Sites with Waypoints You Can Navigate Back To";
const DESCRIPTION =
  "Drop, categorize, and navigate back to named map pins for promising sites in SweepTrack Pro, separate from any recorded session, with GPX, KML, and CSV export.";
const IMAGE = "/screenshots/waypoints.jpg";
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
        category="tutorials"
        readTime="4 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/where-to-metal-detect-near-me", title: "Where to Metal Detect Near Me" },
          { href: "/blog/using-the-permission-vault", title: "Using the Permission Vault to Manage Permissions" },
        ]}
      >
          <p>Some spots are worth remembering long before you dig them. An old foundation you spotted from the road, a church corner you want permission for, a promising rise you ran out of daylight on. Waypoints let you mark any of them as a named pin and find your way back later, whether or not you were recording a session at the time.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Eleven kinds of pin</h2>
          <p>A waypoint is sorted into one of eleven categories, each with a colored marker so the map reads at a glance: Historical Building, Old Well, Bridge, Battlefield, Homestead, Church, Foundation, Trail, Permission Reference, Investigate Later, and Other. The category is not just a label. It is how you tell a confirmed homestead from a maybe-later lead without opening every pin.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Drop one in two taps</h2>
          <p>There are two ways to mark a spot. Long-press an empty part of the map to drop a pin exactly where your finger lands, or open the Waypoints list and use Add, which starts from your current GPS position. Either way you can give it a name, write notes, and set its category. The list then shows how far each waypoint is from where you are standing.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Navigate back, share, or export</h2>
          <p>Open a waypoint and you can show it on the home map, hand it to your phone&apos;s navigation app to walk or drive straight to it, share it, edit it, or delete it. When you want the whole set somewhere else, export all of them or just the ones you select to GPX, KML, or CSV through the share sheet. Those are the same formats your mapping software and GPS units already read.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Yours to keep</h2>
          <p>Waypoints live above any single session. Delete the session you dropped one in and the waypoint stays put. The free plan keeps up to five at a time, and Pro lifts the cap for the detectorist who is building a real map of leads.</p>
      </BlogPostFrame>
    </>
  );
}
