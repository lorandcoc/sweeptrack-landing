import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hunt Planner: Your Go/No-Go Briefing Before Every Hunt",
  description:
    "Learn how the Hunt Planner in SweepTrack Pro checks weather, tides, moon phase, and permits to give you a Go, Caution, or Hold Off verdict before you head out detecting.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Hunt Planner: Your Go/No-Go Briefing Before Every Hunt</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 4 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Should you go detecting today? The answer depends on rain, wind, soil conditions, tides, permits, and a dozen other factors. The Hunt Planner pulls all of that together into a single briefing so you can make a fast, informed decision.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What It Checks</h2>
          <p>The planner evaluates multiple data points for your current GPS location (or a location you search for):</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Weather</strong> &mdash; soil moisture, wind speed, rain chance, humidity</li>
            <li><strong>Tides</strong> &mdash; current tide state and timing (if you&apos;re near the coast)</li>
            <li><strong>Moon phase</strong> &mdash; some detectorists swear by it, so it&apos;s there</li>
            <li><strong>Active permits</strong> &mdash; checks your Permission Vault for valid, unexpired permits at or near the location</li>
            <li><strong>Suggested preset</strong> &mdash; recommends a detector preset based on conditions</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">The Verdict System</h2>
          <p>After crunching the numbers, the planner gives you one of three verdicts:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong className="text-green-400">GO (green)</strong> &mdash; conditions are favorable. Score is 60 or above, rain chance is under 40%, wind is under 25 kph, and you have an active permit for the area</li>
            <li><strong className="text-yellow-400">CAUTION (yellow)</strong> &mdash; conditions are borderline. Maybe wind is picking up or rain is likely later. You can go, but be prepared</li>
            <li><strong className="text-red-400">HOLD OFF (red)</strong> &mdash; conditions are poor. Heavy rain, high wind, no valid permit, or a combination of factors that make it not worth the trip</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Using a Different Location</h2>
          <p>By default the planner uses your current GPS coordinates. But if you&apos;re planning a trip to a site across town or in another county, tap the location search and enter the address or place name. The briefing recalculates for that location &mdash; including local weather, coastal proximity for tides, and permit matching.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Making the Most of It</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Check the night before</strong> &mdash; plan tomorrow&apos;s hunt while you can still adjust</li>
            <li><strong>Add permits to the vault</strong> &mdash; the planner can only check permits it knows about</li>
            <li><strong>Don&apos;t ignore CAUTION</strong> &mdash; a borderline day can still be productive if you&apos;re prepared for changing conditions</li>
            <li><strong>Compare locations</strong> &mdash; search two or three sites to see which has the best conditions right now</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Why Not Just Check the Weather App?</h2>
          <p>A weather app tells you the temperature. The Hunt Planner tells you whether the ground will be detectable, whether the wind will make pinpointing miserable, whether you actually have permission, and what settings to run. It&apos;s the difference between raw data and an actionable decision.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> combines weather, tides, moon phase, and permit status into a single pre-hunt briefing with a clear Go / Caution / Hold Off verdict.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/how-to-use-detecting-forecast" className="block text-sm text-foreground/80 hover:text-accent transition-colors">How to Use the Detecting Forecast &rarr;</Link>
              <Link href="/blog/best-weather-conditions-for-metal-detecting" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Best Weather Conditions for Metal Detecting &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
