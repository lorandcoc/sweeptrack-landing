import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "using-coin-caliper";
const TITLE = "Using the Coin Caliper to Identify Dirty or Worn Coins";
const DESCRIPTION = "Identify unknown coins by measuring their diameter on screen and matching against a database of known coin sizes, filtered by region and era.";
const IMAGE = "/screenshots/presets.png";

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
        readTime="3 min"
        relatedGuides={[
          { href: "/blog/logging-finds-photo-video-audio", title: "Logging Finds with Photo, Video, and Audio Notes" },
          { href: "/blog/metal-detecting-for-beginners", title: "Metal Detecting for Beginners" },
        ]}
      >
          <p>You pull a coin out of the ground and it&apos;s encrusted, green, and completely unreadable. No date, no face, no denomination. But it still has a measurable diameter, and that diameter narrows down what it could be. The Coin Caliper uses this approach to give you a shortlist of matches right in the field.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">How It Works</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Open the Coin Caliper tool from the More tab</li>
            <li>Place the coin flat on your phone screen</li>
            <li>Adjust the slider until the on-screen circle matches the coin&apos;s edge</li>
            <li>The app reads the diameter and searches its database for coins within 0.5mm of that size</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Matching Results</h2>
          <p>After measuring, you&apos;ll see a list of possible matches. Each result shows the coin name, denomination, country, era, and its official diameter. If a coin is 25.0mm, you might see matches for a UK shilling (23.5mm), a US quarter (24.3mm), and several others close to that range. The closest matches appear first.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Filtering by Region and Era</h2>
          <p>If you know roughly where you&apos;re detecting (and you do), filter the results by region. Detecting in England? Filter to UK coins and the list shrinks dramatically. If you also know the site is medieval, add an era filter and you might be down to two or three possibilities. The fewer candidates, the easier the ID.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Calibrating for Your Screen</h2>
          <p>Different phones have different screen sizes and pixel densities. The first time you use the Coin Caliper, calibrate it using a coin you already know &mdash; a modern coin from your pocket works perfectly. Place it on screen, adjust to match, and confirm the known diameter. This ensures measurements are accurate on your specific device.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Tips for Accurate Measurements</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Clean off loose dirt first &mdash; a crust of soil adds millimetres</li>
            <li>Measure the widest point &mdash; worn coins can be slightly irregular</li>
            <li>If the coin is heavily corroded, account for material loss &mdash; it might be slightly smaller than the original</li>
          </ul>
      </BlogPostFrame>
    </>
  );
}
