import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metal Detecting Laws in the UK",
  description:
    "The UK has one of the best legal frameworks for metal detecting in the world. Here's what you need to know about the Treasure Act, PAS, and landowner permissions.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Location</p>
        <h1 className="text-3xl font-bold mb-4">Metal Detecting Laws in the UK</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 6 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>The United Kingdom is widely considered one of the best countries in the world for metal detecting. The legal framework is clear, the reporting system is well-established, and the hobby is actively encouraged as a way to contribute to archaeological knowledge. But there are rules, and breaking them carries serious consequences.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">The Treasure Act 1996</h2>
          <p>The Treasure Act 1996 (which applies to England, Wales, and Northern Ireland) defines what counts as &ldquo;treasure&rdquo; and requires you to report qualifying finds. Under the Act, treasure includes:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Any metallic object other than a coin that is at least 300 years old and has at least 10% precious metal content</li>
            <li>Any group of two or more metallic objects (coins or otherwise) from the same find that are at least 300 years old</li>
            <li>Any object found in association with a treasure item</li>
          </ul>
          <p>If you find something that qualifies, you are legally required to report it to your local coroner within 14 days. Failure to report is a criminal offense. If a museum wants the item, you and the landowner share a reward based on the item&apos;s market value.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">The Portable Antiquities Scheme (PAS)</h2>
          <p>The PAS is a voluntary recording scheme run by the British Museum. Even if your find doesn&apos;t qualify as treasure, reporting it to your local Finds Liaison Officer (FLO) helps build a national database of archaeological objects. This data is used by researchers, historians, and planners. Reporting to the PAS is encouraged but not legally required for non-treasure finds.</p>
          <p>The PAS is one of the reasons the UK detecting community has such a positive relationship with archaeologists. The system works because detectorists report finds, and the data contributes to public knowledge.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Landowner Permission</h2>
          <p>You must have the landowner&apos;s permission before detecting on any land in the UK. This is non-negotiable. Most experienced detectorists have written agreements that specify:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Permission to detect on specific fields or areas</li>
            <li>How finds will be split (typically 50/50 for any treasure reward)</li>
            <li>Responsibility for reporting treasure finds</li>
            <li>Agreement to follow the Code of Practice for Responsible Metal Detecting</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Scheduled Monuments</h2>
          <p>It is a criminal offense to metal detect on a Scheduled Monument without consent from Historic England (or the equivalent bodies in Scotland, Wales, and Northern Ireland). Scheduled Monuments include ancient burial sites, Roman forts, medieval castles, and thousands of other protected sites. Penalties are severe. Always check whether a site is scheduled before detecting &mdash; the National Heritage List for England has a searchable map.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">The Code of Practice</h2>
          <p>The Code of Practice for Responsible Metal Detecting in England and Wales sets out standards that responsible detectorists follow:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Always get landowner permission</li>
            <li>Record your find locations accurately</li>
            <li>Report all treasure finds within 14 days</li>
            <li>Report non-treasure finds to the PAS</li>
            <li>Leave the land as you found it &mdash; fill all holes</li>
            <li>Do not detect on Scheduled Monuments or protected sites</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Scotland</h2>
          <p>Scotland has a separate legal framework. The Treasure Trove system in Scotland claims all ownerless objects of antiquity for the Crown, regardless of metal content or age. All archaeological finds must be reported to the Treasure Trove Unit. This is broader than the Treasure Act in England and Wales.</p>

          <p className="text-xs text-muted mt-8 p-4 rounded-lg bg-white/[0.02] border border-white/5">
            <strong>Disclaimer:</strong> Laws and regulations change. This article is for general information only and does not constitute legal advice. Always verify current rules with local authorities before detecting at any location.
          </p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> has a permission vault for storing landowner agreements with GPS boundaries, and find logging with photos so you have accurate records for Treasure Act reporting and PAS submissions.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/metal-detecting-permission-letter-template" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Permission Letter Template &rarr;</Link>
              <Link href="/blog/logging-finds-photo-video-audio" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Logging Finds with Photo, Video &amp; Audio &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
