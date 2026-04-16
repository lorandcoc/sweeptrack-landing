import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "metal-detecting-laws-in-the-us";
const TITLE = "Metal Detecting Laws in the US";
const DESCRIPTION = "There";
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
          { href: "/blog/metal-detecting-laws-in-the-uk", title: "Metal Detecting Laws in the UK" },
        ]}
      >
          <p>There is no single federal law that bans metal detecting across the United States. Instead, you&apos;re dealing with a patchwork of federal, state, county, and city regulations that vary wildly depending on where you are. The short version: private land with permission is always safest. Everything else requires research.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Federal Land: ARPA</h2>
          <p>The Archaeological Resources Protection Act (ARPA) of 1979 is the big one. It prohibits the excavation, removal, or damage of archaeological resources on federal or tribal land without a permit. Archaeological resources are defined as items of human origin that are at least 100 years old. Penalties can reach $100,000 in fines and imprisonment for first offenses.</p>
          <p>In practice, this means detecting for modern items (coins, jewelry) on federal land may be technically allowed in some areas, but recovering anything historical is illegal. The line between &ldquo;modern coin&rdquo; and &ldquo;archaeological resource&rdquo; can be blurry in the field.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">National Parks</h2>
          <p>Metal detecting is prohibited in all units of the National Park System. This includes national parks, national monuments, national battlefields, national seashores, and other NPS-managed areas. No exceptions for hobby detecting. Penalties are enforced.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">National Forests</h2>
          <p>National forests are managed by the US Forest Service, not the National Park Service. The rules vary by forest and district. Some national forests allow casual hobby metal detecting in non-sensitive areas. Others restrict or prohibit it entirely. Always check with the specific ranger district before detecting in a national forest.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">BLM Land</h2>
          <p>Bureau of Land Management (BLM) land generally allows casual hobby metal detecting, as long as you&apos;re not disturbing archaeological resources. BLM manages millions of acres of public land, primarily in western states. This can be excellent detecting territory, especially near old mining sites and ghost towns. Verify with the local BLM office before you go.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">State Parks</h2>
          <p>Most state parks prohibit metal detecting. Some states have exceptions or permit systems, but the general rule is: assume state parks are off-limits unless you can confirm otherwise with the specific park&apos;s management.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">County and City Parks</h2>
          <p>This is where it gets truly local. Some counties and cities allow detecting in their parks. Others prohibit it. Some require permits. Some have seasonal restrictions. The only way to know is to contact the specific parks department and ask. Many detectorists have had success getting permission by attending city council meetings or working with parks directors directly.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Beaches</h2>
          <p>Public ocean beaches are generally the most detecting-friendly public land in the US. Most coastal communities allow detecting on public beaches, though some have restrictions on digging tools or hours. Freshwater beaches and lakeshores may have different rules. Always check local ordinances.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Private Land</h2>
          <p>Private land with the landowner&apos;s explicit permission is always the safest and most productive place to detect. There are no federal restrictions on detecting on private land (assuming the land doesn&apos;t contain registered archaeological sites). Get permission in writing, agree on how finds will be handled, and you&apos;re good to go.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">State-by-State Variation</h2>
          <p>Beyond federal law, individual states have their own archaeological protection statutes. Some states are quite permissive (Texas has no state-level ban). Others have strict heritage protection laws (Virginia enforces the Virginia Antiquities Act on state land). Always research the specific state&apos;s rules before detecting there.</p>

          <p className="text-xs text-muted mt-8 p-4 rounded-lg bg-white/[0.02] border border-white/5">
            <strong>Disclaimer:</strong> Laws and regulations change. This article is for general information only and does not constitute legal advice. Always verify current rules with local authorities before detecting at any location.
          </p>
      </BlogPostFrame>
    </>
  );
}
