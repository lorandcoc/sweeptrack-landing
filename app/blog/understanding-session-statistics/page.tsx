import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "understanding-session-statistics";
const TITLE = "Understanding Your Session Statistics";
const DESCRIPTION = "Read your metal detecting statistics: weekly, monthly, or yearly totals; sessions, finds per session, active days, treasure rate, top locations, top sessions, and weather insights.";
const IMAGE = "/screenshots/stats.jpg";
const PUBLISHED = "2026-04-02";

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
          { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "Track Your Sessions with GPS" },
          { href: "/blog/comparing-sessions-overlay-split", title: "Comparing Sessions: Overlay and Split View" },
        ]}
      >
          <p>Numbers tell a story that memory forgets. After 50 sessions, can you remember which one had the most finds? Which sites consistently produce? Whether you find more on damp days or dry ones? Your session statistics answer all of these automatically.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Time Filter</h2>
          <p>At the top of the Statistics screen, three chips switch the entire screen between Weekly, Monthly, and Yearly views. Everything below recalculates instantly. Use Weekly to spot recent momentum, or Yearly to see your long-term progression.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Headline Numbers</h2>
          <p>The first cards give you the totals for the selected period &mdash; sessions, finds per session, active days, and treasure rate &mdash; plus the classic counters underneath: total distance, total finds, and total duration.</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Sessions</strong> &mdash; how many detecting sessions you completed</li>
            <li><strong>Finds / session</strong> &mdash; your average haul per outing</li>
            <li><strong>Active days</strong> &mdash; the number of distinct days you went out</li>
            <li><strong>Treasure rate</strong> &mdash; the share of your finds that fall in the Treasure / Gold / Coin / Relic / Jewelry buckets vs. trash</li>
            <li><strong>Distance, Finds, Duration</strong> &mdash; ground covered, logged finds, and total time spent detecting</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Activity Rhythm</h2>
          <p>A summary line tells you how many sessions you completed across how many active days &mdash; a quick read on whether you&apos;re detecting little and often or in bursts. Pair it with the period filter to spot dry spells or hot streaks.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Weather Insight</h2>
          <p>The Weather Insight card surfaces conditions that correlate with your best finds &mdash; for example, the soil moisture level or temperature where your finds tend to come from. Over enough sessions, real data beats guesswork.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Top Locations</h2>
          <p>A ranked list of the sites that have produced the most for you, with session count and find count per location. Use this to plan return trips to your most reliable spots.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Top Sessions</h2>
          <p>A leaderboard of your single best sessions ranked by find count, with the find count and distance for each. It&apos;s a quick way to identify which days and sites produced the best results, then jump back into a record-breaking session to study its track.</p>
      </BlogPostFrame>
    </>
  );
}
