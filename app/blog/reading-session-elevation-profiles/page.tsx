import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "reading-session-elevation-profiles";
const TITLE = "Reading the Elevation Profile of a Session";
const DESCRIPTION =
  "Turn a recorded SweepTrack Pro session into a smoothed elevation chart with ascent, descent, and range, so you can read the terrain you covered after the fact.";
const IMAGE = "/screenshots/history.jpg";
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
          { href: "/blog/understanding-session-statistics", title: "Understanding Your Session Statistics" },
          { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "How to Track Your Sessions with GPS" },
        ]}
      >
          <p>The ground you cover is rarely flat, and the shape of it tells a story. A creek bank, the brow of a hill, the terrace where a house once stood: all of them show up as elevation. SweepTrack Pro can turn any recorded session into an elevation profile, so you can read the terrain you walked after the fact.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Built from your recorded track</h2>
          <p>The profile works from a finished session in your History, not from a live reading or a place you point at on the map. As long as the session has a recorded path, the app takes its GPS track and looks up the elevation along it. Heights come from Open-Meteo, a free elevation service, and the result is cached so opening the same session again is instant.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Smoothed so it reads true</h2>
          <p>Raw GPS altitude is noisy, full of spikes that never happened. Before drawing the chart, the app runs the track through a median filter that removes those jumps, then draws a smooth line and fill. What you see follows the real lay of the land instead of the satellite jitter.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Six numbers under the chart</h2>
          <p>Below the graph are six figures, shown in whichever unit you have set, meters or feet: the minimum and maximum elevation, the range between them, the total ascent and total descent across the whole session, and your average height. Total ascent is the honest measure of how much climbing a flat-looking field actually held.</p>
      </BlogPostFrame>
    </>
  );
}
