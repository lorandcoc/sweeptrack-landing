import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Organize Your Metal Detector Settings and Presets",
  description:
    "Save, name, and share your metal detector settings for different conditions. Tips on managing presets for Minelab, Garrett, XP, Nokta, and more.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tips</p>
        <h1 className="text-3xl font-bold mb-4">How to Organize Your Metal Detector Settings and Presets</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
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
            <li><strong>&ldquo;Competition Mode&rdquo;</strong> — fast recovery, tight discrimination for rally hunts</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Sharing Settings with Others</h2>
          <p>When a hunting buddy asks &ldquo;what settings are you running?&rdquo; — instead of reading numbers off your screen, export the preset as a small JSON file. Send it over chat or email and they import it in one tap. No typos, no miscommunication.</p>
          <p>The exported JSON contains the model name and every field value, so anything forum-friendly works too.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">When to Update Your Presets</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>After a firmware update on your detector — settings may behave differently</li>
            <li>When you find a combination that works well in a new soil type</li>
            <li>When someone shares a setting that outperforms yours on similar ground</li>
            <li>Seasonally — ground conditions change between summer and winter</li>
          </ul>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> gives you 10 detector preset slots with templates for 57 models across 12 brands. Save, name, and share presets as JSON files.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/metal-detecting-for-beginners" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Metal Detecting for Beginners &rarr;</Link>
              <Link href="/blog/how-to-track-metal-detecting-sessions-gps" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Track Your Sessions with GPS &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
