import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "using-the-tide-table";
const TITLE = "Using the Tide Table to Time Beach Sessions";
const DESCRIPTION =
  "Read high and low tides from the nearest NOAA station inside SweepTrack Pro, so you reach the wet sand and the cuts at the right hour on every beach session.";
const IMAGE = "/screenshots/tide.jpg";
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
        readTime="3 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/beach-metal-detecting-tide-timing", title: "Beach Detecting: Tide Timing and Where to Search" },
          { href: "/blog/detecting-forecast-guide", title: "Detecting Forecast: Plan Every Session by the Numbers" },
        ]}
      >
          <p>On a beach, timing is most of the battle. The wet sand and the cuts that hold heavy targets open up around low tide, and they close again on the way back in. The Tide Table tells you exactly when those windows fall, read from real tide-prediction data rather than a rule of thumb.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Real predictions from the nearest station</h2>
          <p>Tide data comes from NOAA Tides and Currents, the United States tide authority, so coverage is US beaches and heights read in meters against the standard low-water datum. The app finds the nearest prediction station within 200 kilometers of your spot. If you are further inland than that, it tells you plainly instead of quoting a station an ocean away.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Pick your spot, pick your range</h2>
          <p>Set the location three ways: use your current position, type in a latitude and longitude, or pick a point on the map for a beach you are planning to visit. Then choose how far ahead to look with a 3, 7, or 14 day range. Predictions group by day and list each high and low with its time and height.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Built to read at a glance</h2>
          <p>The next high tide is highlighted, so the first thing you see is what is coming rather than what you missed. Past events for the day stay visible but dimmed. The full Tide Table is a Pro feature. The single next-tide reading also appears inside the free Detecting Forecast, so a quick check before you leave the house costs nothing.</p>
      </BlogPostFrame>
    </>
  );
}
