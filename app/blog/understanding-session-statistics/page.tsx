import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Understanding Your Session Statistics and Personal Bests",
  description:
    "Learn how to read your metal detecting statistics including session totals, find breakdowns, personal bests, averages, and weather insights.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Understanding Your Session Statistics and Personal Bests</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 4 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
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
          <p>Below the hero stats, a breakdown shows your finds by category: Treasure, Gold, Coin, Relic, Jewelry, and Trash. Each category has a count and a percentage of your total finds. This tells you what kind of targets you&apos;re recovering. A high trash percentage is normal, especially on new sites &mdash; it means you&apos;re digging everything and not missing good signals.</p>

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

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> tracks your detecting statistics automatically, including personal bests, find breakdowns, averages, and weather insights so you can see your progress and optimise your hunts.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/how-to-track-metal-detecting-sessions-gps" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Track Your Sessions with GPS &rarr;</Link>
              <Link href="/blog/comparing-sessions-overlay-split" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Comparing Sessions: Overlay and Split View &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
