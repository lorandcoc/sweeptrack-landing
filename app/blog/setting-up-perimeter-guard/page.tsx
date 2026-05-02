import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "setting-up-perimeter-guard";
const TITLE = "Setting Up Perimeter Guard: Stay Within Your Permitted Zone";
const DESCRIPTION = "Learn how to draw boundary zones on the map and get vibration alerts when you approach the edge of your permitted metal detecting area.";
const IMAGE = "/screenshots/permission_vault.jpg";
const PUBLISHED = "2026-03-27";

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
          { href: "/blog/using-the-permission-vault", title: "Using the Permission Vault" },
          { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "Track Your Sessions with GPS" },
        ]}
      >
          <p>When a landowner gives you permission to detect on a specific field, you need to stay in that field. Walk too far and you&apos;re on someone else&apos;s land without permission. Perimeter Guard solves this by drawing a virtual fence on the map and buzzing your phone as you approach the edge.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Drawing a Boundary</h2>
          <p>Open the map and tap the Perimeter Guard icon. The map switches to boundary drawing mode:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Tap on the map to place corner points around your permitted area</li>
            <li>Each tap adds a point and connects it to the previous one</li>
            <li>Use the undo button if you misplace a point</li>
            <li>When you&apos;re done, tap the checkmark &mdash; the shape closes automatically</li>
          </ul>
          <p>Zoom in on satellite view first so you can follow field boundaries, hedgerows, and fences accurately.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">How the Alerts Work</h2>
          <p>Once you activate Perimeter Guard, it watches your GPS position and gives you four levels of warning as you approach the boundary:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Green zone</strong> &mdash; you&apos;re well inside the boundary, no alerts</li>
            <li><strong>Yellow zone</strong> &mdash; you&apos;re getting close, a gentle vibration nudges you</li>
            <li><strong>Orange zone</strong> &mdash; you&apos;re very close to the edge, stronger vibration</li>
            <li><strong>Red zone</strong> &mdash; you&apos;ve crossed the boundary, continuous vibration</li>
          </ul>
          <p>You don&apos;t need to stare at the screen. The vibration pattern tells you everything. Just swing your detector and let your phone do the watching.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Linking to the Permission Vault</h2>
          <p>If you&apos;ve already saved a permission entry in the Permission Vault for this site, you can link the boundary to it. This means the boundary is stored alongside your permission details &mdash; next time you visit the same site, load the permission and the boundary comes with it.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Clearing or Editing Boundaries</h2>
          <p>Tap the Perimeter Guard icon again while a boundary is active to see your options. You can clear the current boundary and draw a new one, or deactivate monitoring temporarily without deleting the shape. If your permission area changes, just redraw it.</p>
      </BlogPostFrame>
    </>
  );
}
