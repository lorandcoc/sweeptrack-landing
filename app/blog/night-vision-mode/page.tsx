import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "night-vision-mode";
const TITLE = "Night Vision Mode for Dawn and Dusk Detecting";
const DESCRIPTION = "Use the red-light night vision display to preserve your dark-adapted eyesight during early morning and late evening metal detecting sessions.";
const IMAGE = "/screenshots/night_vision.png";
const PUBLISHED = "2026-03-21";

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
        readTime="2 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "Track Your Sessions with GPS" },
          { href: "/blog/metal-detecting-for-beginners", title: "Metal Detecting for Beginners" },
        ]}
      >
          <p>Dawn and dusk are prime detecting hours &mdash; the ground is cool, parks are empty, and beach targets surface as tides pull back. The problem is that glancing at a bright white screen kills your night vision for minutes. Night Vision mode fixes that.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What It Does</h2>
          <p>When you activate Night Vision, the entire interface switches to red-on-black. Every element &mdash; the map, HUD stats, buttons, text &mdash; shifts to a deep red colour scheme. It&apos;s not just a dimmed screen. The colour spectrum itself changes so that no blue or white light reaches your eyes.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Why Red Light Matters</h2>
          <p>Your eyes use rod cells to see in the dark. Bright white or blue light bleaches the rhodopsin in those cells, and it takes 20&ndash;30 minutes to rebuild. Red light doesn&apos;t break down rhodopsin, so you can check your screen and immediately go back to scanning the ground without losing your dark adaptation. Pilots and astronomers have used red lighting for decades for exactly this reason.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">When to Use It</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Pre-dawn beach sessions</strong> &mdash; get to the beach before sunrise, work the low tide line</li>
            <li><strong>Evening sessions</strong> &mdash; detecting after dinner when the light fades but you want to keep going</li>
            <li><strong>Camping trips</strong> &mdash; checking your session stats around the campfire without blinding yourself</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Toggle It</h2>
          <p>Open Settings and tap the Night Vision toggle. The switch is instant &mdash; the entire UI shifts to red immediately. Toggle it off when daylight returns and you&apos;re back to your chosen colour theme.</p>
      </BlogPostFrame>
    </>
  );
}
