import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Use the Detecting Forecast Before Every Hunt",
  description:
    "Learn how the SweepTrack Pro detecting forecast scores soil moisture, wind, temperature, and precipitation to tell you the best time to metal detect.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">How to Use the Detecting Forecast Before Every Hunt</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 4 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Weather affects metal detecting more than most people realise. Damp soil conducts signals better, high wind drowns out faint tones, and frozen ground is nearly impossible to dig. The Detecting Forecast turns all of that into a single score so you can plan your hunts around the conditions that actually matter.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What the Score Means</h2>
          <p>Open the Forecast tab and you&apos;ll see a number from 0 to 100 at the top. That&apos;s your detecting score for the current conditions at your location. Think of it like a traffic light:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>70&ndash;100 (green)</strong> &mdash; excellent conditions, get out there</li>
            <li><strong>40&ndash;69 (yellow)</strong> &mdash; decent conditions, still worth a hunt</li>
            <li><strong>0&ndash;39 (red)</strong> &mdash; poor conditions, you might want to wait</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">How the Score Is Calculated</h2>
          <p>The score is a weighted mix of four weather factors. Each one contributes a different amount because they don&apos;t all affect detecting equally:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Soil moisture (40%)</strong> &mdash; the biggest factor. Light rain in the last 24&ndash;48 hours softens the ground and improves conductivity. Bone-dry or waterlogged soil scores low.</li>
            <li><strong>Wind speed (25%)</strong> &mdash; calm to light breeze is ideal. Once wind gets above 20 mph, it&apos;s hard to hear faint signals even with headphones.</li>
            <li><strong>Temperature (20%)</strong> &mdash; mild temps score highest. Below freezing the ground hardens, above 35&deg;C you overheat and cut sessions short.</li>
            <li><strong>Precipitation (15%)</strong> &mdash; a light drizzle is fine. Heavy rain or thunderstorms push the score down because it&apos;s not safe or comfortable to be in a field.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">The Conditions Grid</h2>
          <p>Below the score you&apos;ll see a grid showing each factor with its current value and a coloured bar. This lets you understand why the score is what it is. If wind is the only red bar, you know conditions would be perfect once it dies down.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Hourly Forecast</h2>
          <p>Swipe horizontally to see the detecting score hour by hour for the next 24 hours. This is useful for picking the best window in your day. Maybe right now scores a 45, but conditions improve to 78 by late afternoon. Plan around it.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">7-Day View</h2>
          <p>Tap the 7-day tab to see daily scores for the coming week. Each day shows the peak detecting score and the conditions summary. Great for planning a weekend trip &mdash; if Saturday scores 85 and Sunday scores 40, you know which day to prioritise.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Practical Tips</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>The best detecting window is usually 24&ndash;48 hours after rain. Soil is moist but not muddy.</li>
            <li>Check the forecast the night before &mdash; if tomorrow morning scores well, set your alarm.</li>
            <li>Don&apos;t ignore yellow scores. A 55 with low wind can be a very productive session.</li>
            <li>In summer, early morning often scores higher because temperature and wind are both lower.</li>
          </ul>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> calculates a real-time detecting forecast based on your GPS location, so you always know whether conditions are worth grabbing your detector.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/best-weather-conditions-for-metal-detecting" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Best Weather Conditions for Metal Detecting &rarr;</Link>
              <Link href="/blog/beach-metal-detecting-tide-timing" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Beach Metal Detecting: Tide Timing &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
