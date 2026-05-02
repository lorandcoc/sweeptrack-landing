import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "metal-detecting-permission-letter-template";
const TITLE = "Metal Detecting Permission Letter: Free Template + What to Include";
const DESCRIPTION = "Free metal detecting permission letter template. Learn what to include, how to approach landowners, and how to track permissions with expiry dates.";
const IMAGE = "/screenshots/permission_vault.jpg";
const PUBLISHED = "2026-03-18";

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
        category="guides"
        readTime="6 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/how-to-use-old-maps-for-metal-detecting", title: "How to Use Old Maps for Detecting" },
          { href: "/blog/metal-detecting-for-beginners", title: "Metal Detecting for Beginners" },
        ]}
      >
          <p>
            Getting landowner permission is the single most important thing in metal detecting. Without it, you&apos;re trespassing. With it, you&apos;re a welcome guest who might find something incredible. Here&apos;s how to ask, what to put in writing, and how to keep track of it all.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8">Why You Need Written Permission</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Verbal permission can be forgotten or denied later</li>
            <li>If the property changes hands, you have no proof the previous owner said yes</li>
            <li>In the UK, Treasure Act finds require you to prove you had permission to detect</li>
            <li>In many US states, having a written letter protects you if questioned by law enforcement</li>
            <li>It shows the landowner you&apos;re serious and responsible</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">What to Include in a Permission Letter</h2>
          <p>A good detecting permission letter should cover:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Date</strong> — when permission was granted</li>
            <li><strong>Your name and contact info</strong></li>
            <li><strong>Landowner&apos;s name and property address</strong></li>
            <li><strong>What you&apos;re allowed to do</strong> — metal detect, dig small plugs, use the land during specific hours</li>
            <li><strong>What you&apos;ll do in return</strong> — fill all holes, show interesting finds, share a percentage (if agreed), leave the land as you found it</li>
            <li><strong>Duration</strong> — is this a one-time visit or ongoing permission? Include an expiry date.</li>
            <li><strong>Signatures</strong> — both parties sign and date</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Free Template</h2>
          <div className="bg-surface/80 border border-white/10 rounded-xl p-6 text-sm font-mono leading-relaxed">
            <p className="mb-4"><strong>METAL DETECTING PERMISSION AGREEMENT</strong></p>
            <p className="mb-2">Date: _______________</p>
            <p className="mb-4">I, [LANDOWNER NAME], owner of the property located at [PROPERTY ADDRESS], hereby grant permission to [YOUR NAME] to conduct metal detecting activities on the above property.</p>
            <p className="mb-2"><strong>Terms:</strong></p>
            <p className="mb-1">- Detecting is permitted from [START DATE] to [END DATE]</p>
            <p className="mb-1">- All holes will be filled and turf replaced</p>
            <p className="mb-1">- Any significant finds will be shown to the landowner</p>
            <p className="mb-1">- The detectorist will carry this letter while on the property</p>
            <p className="mb-1">- Permission may be revoked at any time by either party</p>
            <p className="mt-4 mb-1">Landowner signature: ___________________ Date: _________</p>
            <p className="mb-1">Detectorist signature: ___________________ Date: _________</p>
          </div>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Approach a Landowner</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Knock on the door</strong> — in person is always better than a phone call or letter</li>
            <li><strong>Be honest</strong> — explain you&apos;re a hobbyist looking for old coins and relics</li>
            <li><strong>Show your detector</strong> — people are curious, not threatened, when they see the equipment</li>
            <li><strong>Offer to show finds</strong> — most landowners are fascinated by what&apos;s under their land</li>
            <li><strong>Bring the letter ready</strong> — shows you&apos;re prepared and professional</li>
            <li><strong>Accept &ldquo;no&rdquo; gracefully</strong> — some people will say no. Thank them and move on.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Tracking Your Permissions</h2>
          <p>
            Once you have a few permissions, keeping track of them becomes important. You need to know which sites are approved, which are expiring, and where the boundaries are. Some detectorists use spreadsheets. Others use sticky notes. Neither is great when you&apos;re standing in a field.
          </p>
          <p>
            A dedicated permission tracker that stores site names, landowner details, expiry dates, boundary maps, and generates PDF letters when you need them is the practical solution.
          </p>
      </BlogPostFrame>
    </>
  );
}
