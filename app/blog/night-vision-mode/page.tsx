import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import Link from "next/link";

export const metadata = blogMeta({
  slug: "night-vision-mode",
  title: "Night Vision Mode for Dawn and Dusk Detecting",
  description:
    "Use the red-light night vision display to preserve your dark-adapted eyesight during early morning and late evening metal detecting sessions.",
});

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({
          slug: "night-vision-mode",
          title: "Night Vision Mode for Dawn and Dusk Detecting",
          description: "Use the red-light night vision display to preserve your dark-adapted eyesight during early morning and late evening metal detecting sessions.",
        })) }}
      />
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Night Vision Mode for Dawn and Dusk Detecting</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 2 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
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

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> includes a true red-on-black night vision mode that preserves your dark-adapted eyesight for dawn, dusk, and evening detecting sessions.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/how-to-track-metal-detecting-sessions-gps" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Track Your Sessions with GPS &rarr;</Link>
              <Link href="/blog/metal-detecting-for-beginners" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Metal Detecting for Beginners &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
