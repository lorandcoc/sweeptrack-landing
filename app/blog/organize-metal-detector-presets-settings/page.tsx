import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "organize-metal-detector-presets-settings";
const TITLE = "How to Organize Your Metal Detector Settings and Presets";
const DESCRIPTION = "Save, name, and share your metal detector settings for different conditions. Tips on managing presets for Minelab, Garrett, XP, Nokta, and more.";
const IMAGE = "/screenshots/presets.png";
const PUBLISHED = "2026-03-24";

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
        category="tips"
        readTime="3 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/metal-detecting-for-beginners", title: "Metal Detecting for Beginners" },
          { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "Track Your Sessions with GPS" },
        ]}
      >
          <p>If you&apos;ve been detecting for a while, you know that one set of settings doesn&apos;t work everywhere. The sensitivity you use in a clean park is completely wrong for a trashy farmstead. The frequency that finds gold jewelry isn&apos;t the same one that finds deep silver coins.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Why Presets Matter</h2>
          <p>Instead of fiddling with your detector for 10 minutes every time you change sites, save your settings as named presets. When you arrive at a new field, load the right preset and start swinging in seconds.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Name Your Presets</h2>
          <p>Name them by what they&apos;re for, not what they do technically:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>&ldquo;Clean Park — Coins&rdquo;</strong> — high discrimination, medium sensitivity</li>
            <li><strong>&ldquo;Trashy Farm — Relics&rdquo;</strong> — low discrimination, iron audio on, slow recovery</li>
            <li><strong>&ldquo;Beach Wet Sand&rdquo;</strong> — salt ground balance, multi-frequency</li>
            <li><strong>&ldquo;Pasture — Deep Silver&rdquo;</strong> — max sensitivity, slow sweep, all metal</li>
            <li><strong>&ldquo;Competition Mode&rdquo;</strong> — fast recovery, tight discrimination for rally events</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Sharing Settings with Others</h2>
          <p>When a detecting buddy asks &ldquo;what settings are you running?&rdquo; — instead of reading numbers off your screen, export the preset as a small JSON file. Send it over chat or email and they import it in one tap. No typos, no miscommunication.</p>
          <p>The exported JSON contains the model name and every field value, so anything forum-friendly works too.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">When to Update Your Presets</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>After a firmware update on your detector — settings may behave differently</li>
            <li>When you find a combination that works well in a new soil type</li>
            <li>When someone shares a setting that outperforms yours on similar ground</li>
            <li>Seasonally — ground conditions change between summer and winter</li>
          </ul>
      </BlogPostFrame>
    </>
  );
}
