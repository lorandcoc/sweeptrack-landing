import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "using-the-permission-vault";
const TITLE = "Using the Permission Vault to Manage Landowner Permissions";
const DESCRIPTION = "Track your metal detecting permissions with expiry alerts, boundary maps, PDF letter generation, and landowner contact details all in one place.";
const IMAGE = "/screenshots/permission_vault.png";
const PUBLISHED = "2026-04-08";

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
        readTime="5 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/metal-detecting-permission-letter-template", title: "Permission Letter Template" },
          { href: "/blog/setting-up-perimeter-guard", title: "Setting Up Perimeter Guard" },
        ]}
      >
          <p>Keeping track of permissions is one of those things that starts easy and gets complicated fast. One or two sites, you can remember. Ten sites across three counties with different landowners, expiry dates, and conditions? You need a system. The Permission Vault is that system.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Adding a Permission Entry</h2>
          <p>Tap the plus button to create a new entry. Fill in the basics:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Site name</strong> &mdash; something you&apos;ll recognise (e.g., &ldquo;Thompson Farm - North Field&rdquo;)</li>
            <li><strong>Landowner name</strong> &mdash; who gave you permission</li>
            <li><strong>Status</strong> &mdash; green (active), yellow (pending renewal), or red (expired/denied)</li>
            <li><strong>Contact details</strong> &mdash; phone or email so you can reach the owner when you need to renew</li>
            <li><strong>Notes</strong> &mdash; any conditions like &ldquo;avoid the crop field east of the barn&rdquo;</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Drawing the Boundary</h2>
          <p>Each permission entry can have a boundary drawn on a full-screen map. Tap the map icon on the entry, and you&apos;ll get a satellite view where you tap to mark the corners of your permitted area. This boundary feeds directly into Perimeter Guard, so when you&apos;re detecting at this site, your phone vibrates if you stray outside.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Expiry Dates and Calendar Alerts</h2>
          <p>If a permission has a fixed duration (e.g., &ldquo;one year from today&rdquo;), set the expiry date. The app shows a countdown on the entry, and the status automatically shifts to yellow as the date approaches. You can also set a calendar alert that fires a reminder days or weeks before expiry, so you have time to ask the landowner for renewal.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Generating a Permission Letter</h2>
          <p>Need a formal letter to ask a new landowner? The PDF letter generator creates a professional detecting permission request that includes your name, the site details, and the proposed dates. It&apos;s a template you can customise, then export as a PDF to print or email. Having a printed letter makes you look serious and increases your chances of getting a yes.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Import and Export</h2>
          <p>If you switch phones or want to share permission data with a detecting partner, you can export your vault as a backup file and import it on another device. Combined with cloud backup, your permissions are never lost.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Linking to Perimeter Guard</h2>
          <p>The real power comes from the connection between the Permission Vault and Perimeter Guard. When you start a session at a saved site, you can load the boundary directly from the vault entry. No redrawing, no guessing where the edges were.</p>
      </BlogPostFrame>
    </>
  );
}
