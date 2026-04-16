import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "best-weather-conditions-for-metal-detecting";
const TITLE = "Best Weather Conditions for Metal Detecting (And When to Stay Home)";
const DESCRIPTION = "Soil moisture, temperature, wind, and barometric pressure all affect metal detecting. Learn the best weather conditions and how forecast scores work.";
const IMAGE = "/screenshots/forecast.png";

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
        category="tips"
        readTime="4 min"
        relatedGuides={[
          { href: "/blog/detecting-forecast-guide", title: "Detecting Forecast: Plan Every Session by the Numbers" },
          { href: "/blog/beach-metal-detecting-tide-timing", title: "Beach Detecting: Tide Timing" },
          { href: "/blog/metal-detecting-for-beginners", title: "Metal Detecting for Beginners" },
        ]}
      >
          <p>
            Not all detecting days are created equal. The weather plays a bigger role in your success than most beginners realize. The right conditions can mean the difference between a pocket full of coins and an empty pouch.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8">Soil Moisture: The #1 Factor</h2>
          <p>
            Moist soil conducts electromagnetic signals better than dry soil. After a rain, your detector&apos;s signal penetrates deeper and reads targets more clearly. This is why many experienced detectorists plan their sessions for the day after rainfall.
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
            Some detectorists swear that falling barometric pressure (before a storm) improves detecting. The theory is that dropping pressure pushes moisture upward in the soil, improving conductivity. Whether this is science or superstition, many experienced detectorists prefer going out as a storm approaches — just make sure you have shelter nearby.
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
      </BlogPostFrame>
    </>
  );
}
