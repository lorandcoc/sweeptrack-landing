import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Weather Conditions for Metal Detecting (And When to Stay Home)",
  description:
    "Soil moisture, temperature, wind, and barometric pressure all affect metal detecting. Learn the best weather conditions and how forecast scores work.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">
          &larr; Back to blog
        </Link>

        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tips</p>
        <h1 className="text-3xl font-bold mb-4">Best Weather Conditions for Metal Detecting (And When to Stay Home)</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 4 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>
            Not all detecting days are created equal. The weather plays a bigger role in your success than most beginners realize. The right conditions can mean the difference between a pocket full of coins and an empty pouch.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8">Soil Moisture: The #1 Factor</h2>
          <p>
            Moist soil conducts electromagnetic signals better than dry soil. After a rain, your detector&apos;s signal penetrates deeper and reads targets more clearly. This is why many experienced detectorists plan their hunts for the day after rainfall.
          </p>
          <p>
            Too wet is also a problem — standing water and saturated mud can false signal and make digging miserable. The sweet spot is 40-70% soil moisture.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8">Temperature</h2>
          <p>
            Moderate temperatures (10-22&deg;C / 50-72&deg;F) are ideal. In extreme cold, the ground freezes and becomes impenetrable. In extreme heat, you&apos;ll overheat before you find anything, and dry soil reduces signal depth.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8">Wind</h2>
          <p>
            Light wind is fine. Strong wind (above 30 km/h) creates problems — it shakes your coil, causes false signals on some detectors, and makes pinpointing difficult. High winds also make it hard to hear subtle audio tones.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8">Barometric Pressure</h2>
          <p>
            Some detectorists swear that falling barometric pressure (before a storm) improves detecting. The theory is that dropping pressure pushes moisture upward in the soil, improving conductivity. Whether this is science or superstition, many experienced hunters prefer detecting as a storm approaches — just make sure you have shelter nearby.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8">When to Stay Home</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Ground is frozen solid</li>
            <li>Active thunderstorm (you&apos;re holding a metal pole in an open field)</li>
            <li>Sustained winds above 40 km/h</li>
            <li>Zero soil moisture after weeks of drought — your depth will be severely reduced</li>
            <li>Extreme heat (&gt;35&deg;C / 95&deg;F) — heat exhaustion is real</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">How a Detecting Forecast Works</h2>
          <p>
            A detecting forecast takes the variables that matter most — soil moisture, temperature, wind speed, humidity, and precipitation — and combines them into a single Detecting Score from 0 to 100.
          </p>
          <p>
            A score above 80 is Excellent. 60&ndash;79 is Good, 40&ndash;59 is Fair, 20&ndash;39 is Poor, and below 20 is Bad. It&apos;s a one-number read on whether today is worth loading the truck.
          </p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> includes a built-in Detecting Forecast with a 0-100 Detecting Score, soil moisture, wind, temperature, humidity, contextual tips, and a 7-day outlook for any location you search.
              {" "}<Link href="/blog/detecting-forecast-guide" className="text-accent hover:underline">Full guide &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/detecting-forecast-guide" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Detecting Forecast: Plan Every Hunt by the Numbers &rarr;</Link>
              <Link href="/blog/beach-metal-detecting-tide-timing" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Beach Detecting: Tide Timing &rarr;</Link>
              <Link href="/blog/metal-detecting-for-beginners" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Metal Detecting for Beginners &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
