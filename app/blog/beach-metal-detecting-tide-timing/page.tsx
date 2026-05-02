import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "beach-metal-detecting-tide-timing";
const TITLE = "Beach Metal Detecting: Tide Timing & Where to Search";
const DESCRIPTION = "Learn how to time beach metal detecting sessions around low tide, where to search the wet sand, and how tide charts help you find more coins and jewelry.";
const IMAGE = "/screenshots/forecast.jpg";
const PUBLISHED = "2026-01-14";

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
        category="beach"
        readTime="5 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/best-weather-conditions-for-metal-detecting", title: "Best Weather Conditions for Metal Detecting" },
          { href: "/blog/how-to-use-old-maps-for-metal-detecting", title: "How to Use Old Maps for Metal Detecting" },
        ]}
      >
          <p>Beach detecting is where the gold is — literally. Rings, chains, coins, and watches get lost in the sand every day. But the beach only gives them up at the right time. If you show up at high tide, you&apos;re wasting your time.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Why Low Tide Matters</h2>
          <p>At high tide, the water covers the most productive areas. At low tide, the ocean retreats and exposes wet sand that was underwater hours ago. This wet sand zone is where most lost items settle — pulled off swimmers, waders, and beachgoers by waves and currents.</p>
          <p>The lower the tide, the more ground you can access. Spring tides (around full and new moons) produce the lowest lows — these are your best beach days.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">The Three Beach Zones</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Dry sand</strong> — towel line area. Mostly modern coins and cheap jewelry. Easy digging but lots of trash.</li>
            <li><strong>Wet sand / tidal zone</strong> — the area between high and low tide marks. This is where the good stuff is. Rings, chains, old coins pulled from deeper water.</li>
            <li><strong>In the water</strong> — requires waterproof equipment. Highest concentration of gold but hardest to work.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Read a Tide Chart</h2>
          <p>A tide chart shows you the predicted water level for each hour of the day. You want to arrive 1-2 hours before the lowest predicted tide. This gives you maximum time on the exposed wet sand before the water comes back.</p>
          <p>Check for:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Tide height</strong> — lower is better. Anything below 0.5m is excellent.</li>
            <li><strong>Time of low</strong> — plan to be on the beach 1-2 hours before this time.</li>
            <li><strong>Tidal range</strong> — bigger difference between high and low means more exposed sand.</li>
            <li><strong>Storm tides</strong> — after a storm, sand gets churned up and items that were buried deep get exposed. Best detecting conditions.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Where Exactly to Swing</h2>
          <p>Don&apos;t just walk randomly. Focus on:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Cut lines</strong> — where waves have eroded a step in the sand. Items collect along these edges.</li>
            <li><strong>Troughs</strong> — shallow channels between sandbars. Heavy items (gold, lead weights) settle here.</li>
            <li><strong>Near rocks and jetties</strong> — waves push items against solid structures.</li>
            <li><strong>Beach access points</strong> — where people enter the water. Highest density of recent losses.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Timing Your Sessions</h2>
          <p>The best beach detecting window is roughly 2 hours before low tide to 1 hour after. After that, the water starts coming back fast. Always keep an eye on the water — getting caught between incoming tide and a cliff or seawall is dangerous.</p>
      </BlogPostFrame>
    </>
  );
}
