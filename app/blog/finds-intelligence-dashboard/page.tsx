import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "finds-intelligence-dashboard";
const TITLE = "Finds Intelligence: See What Your Data Is Telling You";
const DESCRIPTION =
  "Finds Intelligence is a SweepTrack Pro dashboard that reads your logged finds and sessions to show where, when, and with which detector you do your best work.";
const IMAGE = "/screenshots/stats.jpg";
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
          { href: "/blog/logging-finds-photo-video-audio", title: "Logging Finds with Photos and Audio Notes" },
          { href: "/blog/understanding-session-statistics", title: "Understanding Your Session Statistics" },
        ]}
      >
          <p>Every find you log carries more than a photo. It carries a place, a time, a value, and the detector that found it. Finds Intelligence reads all of that back and turns it into a picture of how you actually do: where your good ground is, what hour pays off, and which machine earns its keep. It is a Pro dashboard, and it needs no setup. It works from the finds you have already logged.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">The numbers that matter, up top</h2>
          <p>Three figures lead the screen. Total Finds is your running count. Total Value sums what you have logged across every find type. Finds per Hour divides that count by your total time spent recording sessions, so you see a real strike rate instead of a gut feeling.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Hot Zones: where your value comes from</h2>
          <p>The Hot Zones map is a heatmap over satellite imagery, but it is weighted by value, not just count. A single gold ring pulls more weight than a handful of pull tabs, so the map glows where your best finds came from, not where you happened to dig the most. Trash finds and anything logged without a location are left out, and it needs at least two valued finds on the map before it draws.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Patterns over time and across the day</h2>
          <p>Two charts read your history back to you. Value over time stacks your monthly totals as bars across the last twelve months, so a strong spring or a quiet winter shows at a glance. Time of day sorts your finds into all twenty four hours, which is how you learn whether your mornings really do beat your afternoons.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Three ways to break it down</h2>
          <p>One card holds three views of the same finds. By Type splits them into your find categories. By Detector groups them by the preset you were running, so you can compare machines on your own ground rather than on a forum. By Site ranks your top eight session locations. Each view shows both a count and a total value, so the answer is never just how many, but how much.</p>
      </BlogPostFrame>
    </>
  );
}
