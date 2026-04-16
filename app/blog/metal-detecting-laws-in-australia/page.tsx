import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "metal-detecting-laws-in-australia";
const TITLE = "Metal Detecting Laws in Australia";
const DESCRIPTION = "Australian metal detecting laws vary by state. What you need to know about heritage acts, Aboriginal heritage protection, and where you can legally detect.";
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
        readTime="5 min"
        relatedGuides={[
          { href: "/blog/metal-detecting-laws-in-the-us", title: "Metal Detecting Laws in the US" },
          { href: "/blog/metal-detecting-permission-letter-template", title: "Permission Letter Template" },
        ]}
      >
          <p>Australia has some of the most varied metal detecting laws in the world. What&apos;s perfectly legal in one state can carry severe penalties in another. The overlap between metal detecting and gold prospecting adds another layer of complexity. If you&apos;re detecting in Australia, you absolutely must know the rules for the specific state or territory you&apos;re in.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Aboriginal Heritage Protection</h2>
          <p>This is the most important section of this article. Every state and territory in Australia has legislation protecting Aboriginal and Torres Strait Islander heritage sites and objects. Penalties for disturbing Aboriginal heritage can be severe &mdash; including significant fines and imprisonment. These protections apply on all land types, including private land. If you encounter any items or sites that may be of Aboriginal heritage significance, stop immediately and report the find to your state&apos;s heritage authority.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Victoria</h2>
          <p>Victoria is generally considered the most detecting-friendly state in Australia. The Miner&apos;s Right (now called a Fossicking Licence) is available for a small fee and allows you to prospect for gold and other minerals on Crown land and certain other areas. Many detectorists in Victoria focus on goldfield areas from the 1850s gold rush era. State forests and some Crown land are accessible with the appropriate licence. National parks are off-limits.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">New South Wales</h2>
          <p>NSW has stricter heritage protection laws. The Heritage Act 1977 protects archaeological relics on all land, and you need an excavation permit to disturb any relic that is 50 years old or older &mdash; even on private land. This makes casual relic detecting significantly more restricted than in Victoria. Fossicking for gold is allowed in designated fossicking areas with a fossicking licence.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Queensland</h2>
          <p>Queensland has some of the strictest regulations. The Queensland Heritage Act 1992 protects archaeological artifacts, and the Fossicking Act 1994 governs mineral fossicking. You need a fossicking licence to use a metal detector on most land, and detecting is restricted in many areas. National parks, state forests, and heritage-listed areas are generally off-limits.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Western Australia</h2>
          <p>WA has vast areas of Crown land and a long gold mining history. A Miner&apos;s Right allows fossicking on certain Crown land. The Heritage Act 2018 protects heritage places and objects. Detecting on beaches for modern items is generally accepted, but always check local regulations. The remote outback areas of WA can be productive but require serious preparation for safety.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">South Australia, Tasmania, and Territories</h2>
          <p>Each has its own heritage legislation and fossicking rules. South Australia requires a fossicking permit for Crown land. Tasmania has specific rules about detecting in state reserves. The ACT and NT have their own heritage protection frameworks. Research the specific jurisdiction before detecting.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">General Rules Across Australia</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>National parks are off-limits in every state and territory</li>
            <li>Aboriginal heritage is protected everywhere &mdash; severe penalties apply</li>
            <li>Beaches are generally OK for modern items in most states</li>
            <li>Private land requires landowner permission</li>
            <li>Crown land rules vary by state &mdash; check for fossicking licences</li>
            <li>Historical relics (typically 50+ years old) have additional protections in most states</li>
          </ul>

          <p className="text-xs text-muted mt-8 p-4 rounded-lg bg-white/[0.02] border border-white/5">
            <strong>Disclaimer:</strong> Laws and regulations change. This article is for general information only and does not constitute legal advice. Always verify current rules with local authorities before detecting at any location.
          </p>
      </BlogPostFrame>
    </>
  );
}
