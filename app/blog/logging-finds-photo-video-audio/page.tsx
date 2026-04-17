import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "logging-finds-photo-video-audio";
const TITLE = "Logging Finds with Photos and Audio Notes";
const DESCRIPTION = "Log metal detecting finds with GPS location, type, depth, value, weight, notes, photos, and audio recordings. Six find categories in SweepTrack Pro.";
const IMAGE = "/screenshots/stats.png";
const PUBLISHED = "2026-03-03";

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
        readTime="3 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/metal-detecting-for-beginners", title: "Metal Detecting for Beginners" },
          { href: "/blog/understanding-session-statistics", title: "Understanding Your Session Statistics" },
        ]}
      >
          <p>A find without a record is just a thing in a bag. Six months later you won&apos;t remember what field it came from, how deep it was, or what signal it gave. Logging your finds as you go builds a complete detecting journal that makes your hobby more rewarding and your data more useful.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">The 6 Find Types</h2>
          <p>When you log a find you pick one of six types. Each one gets its own color on the map and its own tally in your stats:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Treasure</strong> — the catch-all for valuable or interesting finds you can&apos;t neatly slot elsewhere</li>
            <li><strong>Gold</strong> — gold rings, gold coins, anything precious</li>
            <li><strong>Coin</strong> — modern and historic coinage of any metal</li>
            <li><strong>Relic</strong> — buttons, buckles, military brass, tools, and other old iron/copper finds</li>
            <li><strong>Jewelry</strong> — rings, pendants, chains, and other wearables</li>
            <li><strong>Trash</strong> — pull tabs, foil, bottle caps. Worth logging to track site condition.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Quick Pin Drop</h2>
          <p>For a fast log, tap the find button while tracking. It drops a pin at your current GPS position with a timestamp. You can fill in the details later, but the location is captured immediately. This is perfect mid-session when you don&apos;t want to stop swinging.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Full Logging</h2>
          <p>When you have a moment, open the find and add the details:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Name</strong> — what you think it is (e.g. &ldquo;George III halfpenny&rdquo;)</li>
            <li><strong>Depth</strong> — a slider from 0 to 40 cm (or the inches equivalent if you&apos;ve switched units)</li>
            <li><strong>Value</strong> — your best estimate or a known price</li>
            <li><strong>Weight</strong> — in grams, useful for jewelry and gold</li>
            <li><strong>Notes</strong> — free text for context like detector settings, signal behaviour, soil</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Attaching a Photo and an Audio Note</h2>
          <p>Each find can have a photo and an audio recording attached to it:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Photo</strong> — snap the find in the hole, on a cloth, or after a clean. You can also pick an existing image from your gallery.</li>
            <li><strong>Audio note</strong> — tap record and describe the find out loud. Faster than typing with muddy gloves, and stores the raw tone response if you want to replay it.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Edit Anything Later</h2>
          <p>Every field on every find stays editable. Wrong type? Change it. Forgot a note? Add it. Re-shot the photo after cleaning? Replace it. The find detail screen has a mini-map to show the exact recovery spot, plus audio playback and edit buttons.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Why Bother Logging Trash?</h2>
          <p>It might seem pointless, but logging trash tells you about a site. If one corner of a field has 30 pull tabs and zero treasure, that area was probably a picnic spot with modern litter. The opposite corner with fewer signals might be untouched historical ground. Trash data shapes your strategy.</p>
      </BlogPostFrame>
    </>
  );
}
