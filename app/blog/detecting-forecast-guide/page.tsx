import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Detecting Forecast: Plan Every Hunt by the Numbers",
  description:
    "SweepTrack Pro turns weather into a 0-100 Detecting Score. Check any location up to a week ahead with soil moisture, wind, temperature, and humidity tips.",
  alternates: {
    canonical: "https://sweeptrack.pro/blog/detecting-forecast-guide",
  },
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Detecting Forecast: Plan Every Hunt by the Numbers</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 4 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>The Detecting Forecast is the one screen to open before you leave the house. It pulls live weather for any location, scores it 0 to 100 for detecting conditions, and tells you exactly why the score is what it is. No meteorologist required.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">The Detecting Score</h2>
          <p>At the top of the screen you get a single big number — the Detecting Score — and a one-word verdict:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>80&ndash;100 &mdash; Excellent</strong> — damp soil, calm air, mild temps. Get out there.</li>
            <li><strong>60&ndash;79 &mdash; Good</strong> — solid conditions, worth the trip.</li>
            <li><strong>40&ndash;59 &mdash; Fair</strong> — workable, but you might want to pick your window.</li>
            <li><strong>20&ndash;39 &mdash; Poor</strong> — hard ground, high wind, or cold. Tough session.</li>
            <li><strong>0&ndash;19 &mdash; Bad</strong> — heavy rain, frozen ground, or gale winds. Skip it.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">The Four Conditions That Matter</h2>
          <p>Below the score you see four metrics. These are the real inputs to the score — glance at them to understand why the number is what it is.</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Temperature</strong> — mild is best. Below 5&deg;C the ground hardens and your battery drains fast.</li>
            <li><strong>Wind</strong> — in km/h. Above 25 km/h you start losing faint targets to wind noise even with headphones.</li>
            <li><strong>Soil Moisture</strong> — a decimal value. Above 0.3 is great conductivity; below 0.1 is bone-dry and signals go weak.</li>
            <li><strong>Humidity</strong> — a percentage. Mostly a comfort indicator, but high humidity after rain usually means damp ground.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">7-Day Date Picker</h2>
          <p>A row of chips at the top lets you step through Today, Tomorrow, and the next five days. Tap any day and the whole screen updates — score, conditions, and tips all recalculate for that date. Use it the night before to pick the best day of the weekend, or a few days out to plan a long drive.</p>
          <p className="text-sm text-muted">Forecasts further out are less reliable. The app adds a subtle reminder next to future days that the forecast may change before you arrive.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Any Location, Not Just Here</h2>
          <p>By default the forecast uses your current GPS position. Tap the location card at the top to search any city, address, or place name. Planning a trip two counties over? Check it. Wondering if the beach a hundred miles away is worth the drive? Check that too. A tap on the &ldquo;Use current&rdquo; option puts you back on your GPS fix.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Smart Tips</h2>
          <p>Under the conditions grid the app writes short contextual tips based on what the weather actually looks like. You might see:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><em>Great soil moisture — strong signals</em> — when soil sits above 0.3.</li>
            <li><em>Dry soil — signals may be weaker</em> — when soil drops below 0.1.</li>
            <li><em>High wind — consider sheltered sites</em> — when wind tops 25 km/h.</li>
            <li><em>Cold — battery drains faster</em> — below 5&deg;C.</li>
            <li><em>Rain expected — waterproof gear</em> — when measurable precipitation is in the window.</li>
            <li><em>Conditions are favorable!</em> — any day with a score of 70 or higher.</li>
          </ul>
          <p>Tips only show when they apply, so you won&apos;t see noise on a perfect day.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Field Tips</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>The sweet spot is usually 24&ndash;48 hours after rain — damp but not muddy.</li>
            <li>Check the forecast the night before and set your alarm to a high-score morning.</li>
            <li>Don&apos;t write off a Fair score — if wind is the only drag, a sheltered wood-edge site can still produce.</li>
            <li>In summer, check early morning. Temperature and wind are usually lower and scores are higher.</li>
            <li>Compare two or three sites by searching them one after the other — the one with the best score wins the day.</li>
          </ul>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> calculates the Detecting Forecast live from your GPS position or any searched location, using Open-Meteo data so it works worldwide.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/best-weather-conditions-for-metal-detecting" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Best Weather Conditions for Metal Detecting &rarr;</Link>
              <Link href="/blog/beach-metal-detecting-tide-timing" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Beach Metal Detecting: Tide Timing &rarr;</Link>
              <Link href="/blog/how-to-track-metal-detecting-sessions-gps" className="block text-sm text-foreground/80 hover:text-accent transition-colors">How to Track Your Detecting Sessions with GPS &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
