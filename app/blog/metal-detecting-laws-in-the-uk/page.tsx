import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "metal-detecting-laws-in-the-uk";
const TITLE = "Metal Detecting Laws in the UK";
const DESCRIPTION = "The UK has one of the best legal frameworks for metal detecting. What you need to know about the Treasure Act, PAS, and landowner permissions.";
const IMAGE = "/screenshots/permission_vault.png";

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
        category="location"
        readTime="6 min"
        relatedGuides={[
          { href: "/blog/metal-detecting-permission-letter-template", title: "Permission Letter Template" },
          { href: "/blog/logging-finds-photo-video-audio", title: "Logging Finds with Photo, Video &amp; Audio" },
        ]}
      >
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
      </BlogPostFrame>
    </>
  );
}
