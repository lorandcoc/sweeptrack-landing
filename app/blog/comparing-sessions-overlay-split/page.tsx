import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "comparing-sessions-overlay-split";
const TITLE = "Comparing Sessions: Overlay and Split View";
const DESCRIPTION = "Compare metal detecting sessions side by side or overlaid on the same map with colour-coded paths, blend controls, and map type toggling.";
const IMAGE = "/screenshots/stats.jpg";
const PUBLISHED = "2026-02-10";

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
          { href: "/blog/using-track-overlay", title: "Using Track Overlay" },
          { href: "/blog/understanding-session-statistics", title: "Understanding Your Session Statistics" },
        ]}
      >
          <p>When you detect the same site over multiple visits, comparing sessions shows you how your coverage, finds, and strategy evolved. Session comparison gives you two ways to do this: overlay mode and split view.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Selecting Sessions to Compare</h2>
          <p>Open Map Comparison from the More tab. Browse your past sessions and tap any 2 to 4 sessions you want to compare. The screen updates as you add or remove sessions.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Overlay Mode</h2>
          <p>Overlay stacks all selected sessions onto a single map. Each session&apos;s path gets a distinct colour so you can tell them apart, and the camera frames the combined area automatically. This view is ideal for:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Seeing total coverage across multiple visits</li>
            <li>Identifying gaps between sessions where ground was missed</li>
            <li>Noticing whether find clusters repeat in the same area</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Split View</h2>
          <p>Split view gives every selected session its own mini-map: a left/right split when you pick two sessions, and a grid layout when you pick three or four. Each tile auto-zooms to its session&apos;s path so you can scan all of them at a glance. Use it to compare:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Coverage patterns between two visits to the same field</li>
            <li>Find density across different weather conditions</li>
            <li>How your search strategy changed between sessions</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Blend Slider</h2>
          <p>In overlay mode, the blend slider controls how transparent each path is. Pull it down and paths are nearly see-through, letting the map show through. Push it up and paths are solid and vivid. Adjust this based on how many sessions you&apos;re overlaying &mdash; more sessions need more transparency to avoid a tangle.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Map Type</h2>
          <p>The mode toggle at the top lets you switch the underlying map between satellite and other types. Satellite is usually best for field detecting because you can see hedges and features, while street view helps for park and urban sessions.</p>
      </BlogPostFrame>
    </>
  );
}
