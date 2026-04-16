import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "understanding-session-statistics";
const TITLE = "Understanding Your Session Statistics and Personal Bests";
const DESCRIPTION = "Learn how to read your metal detecting statistics including session totals, find breakdowns, personal bests, averages, and weather insights.";
const IMAGE = "/screenshots/stats.png";

export const metadata = blogMeta({ slug: SLUG, title: TITLE, description: DESCRIPTION });

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ slug: SLUG, title: TITLE, description: DESCRIPTION, image: IMAGE })) }}
      />
      <BlogPostFrame
        title={TITLE}
        category="tutorials"
        readTime="4 min"
        relatedGuides={[
          { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "Track Your Sessions with GPS" },
          { href: "/blog/comparing-sessions-overlay-split", title: "Comparing Sessions: Overlay and Split View" },
        ]}
      >
          <p>Numbers tell a story that memory forgets. After 50 sessions, can you remember which one had the most finds? Which month you walked the furthest? Whether you find more on rainy days or dry ones? Your session statistics answer all of these automatically.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Time Filters</h2>
          <p>At the top of the Statistics screen you can filter by time period: all time, this year, this month, this week, or a custom date range. Everything below updates instantly. Use the weekly view to check your progress, or zoom out to all-time for the big picture.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Hero Stats</h2>
          <p>The four big numbers at the top give you the headline summary for your selected period:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Sessions</strong> &mdash; how many detecting sessions you completed</li>
            <li><strong>Finds</strong> &mdash; total number of logged finds</li>
            <li><strong>Distance</strong> &mdash; total ground covered in km or miles</li>
            <li><strong>Duration</strong> &mdash; total time spent detecting</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Find Breakdown</h2>
          <p>Below the hero stats, a stacked bar breaks your total finds down by type with a color-coded legend. Each segment is proportional to its share of the total. This tells you what kind of targets you&apos;re recovering. A high trash percentage is normal, especially on new sites — it means you&apos;re digging everything and not missing good signals.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Averages</h2>
          <p>The averages section tells you what a typical session looks like: average finds per session, average distance per session, and average duration. These are useful benchmarks. If your average finds per session suddenly drops, maybe you need to try a new site or adjust your detector settings.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Personal Bests</h2>
          <p>Your personal records across all time:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Most finds in a session</strong> &mdash; your best single-session haul</li>
            <li><strong>Longest distance</strong> &mdash; the most ground covered in one session</li>
            <li><strong>Longest session</strong> &mdash; your marathon detecting record</li>
          </ul>
          <p>Each one shows the date and session so you can go back and look at the track and finds from that record-breaking session.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Top Sessions Ranking</h2>
          <p>A ranked list of your best sessions by finds count. This leaderboard shows your top performers with date, site, and find count. It&apos;s a quick way to identify which sites and conditions produce the best results.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Weather Insights</h2>
          <p>If you&apos;ve been detecting across different weather conditions, the statistics screen shows whether you find more on certain types of days. Over time, this data reveals patterns &mdash; maybe you consistently find more after two days of rain, or on overcast mornings. Real data beats guesswork.</p>
      </BlogPostFrame>
    </>
  );
}
