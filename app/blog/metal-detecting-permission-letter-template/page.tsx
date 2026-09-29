import Link from "next/link";
import Image from "next/image";
import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "metal-detecting-permission-letter-template";
const TITLE = "Metal Detecting Permission Letter: Free Printable Template (PDF)";
const DESCRIPTION = "A free printable metal detecting permission form, what it should cover, how to ask a landowner, and what to do after the visit, with notes for the US and UK.";
const IMAGE = "/screenshots/permission_vault.jpg";
const PUBLISHED = "2026-03-18";
const UPDATED = "2026-09-29";
const PDF = "/downloads/metal-detecting-permission-letter.pdf";

export const metadata = blogMeta({ slug: SLUG, title: TITLE, description: DESCRIPTION, publishedDate: PUBLISHED, updatedDate: UPDATED });

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ slug: SLUG, title: TITLE, description: DESCRIPTION, image: IMAGE, publishedDate: PUBLISHED, updatedDate: UPDATED })) }}
      />
      <BlogPostFrame
        title={TITLE}
        category="guides"
        readTime="6 min"
        publishedDate={PUBLISHED}
        updatedDate={UPDATED}
        relatedGuides={[
          { href: "/blog/metal-detecting-laws-in-the-us", title: "Metal Detecting Laws in the US" },
          { href: "/blog/metal-detecting-laws-in-the-uk", title: "Metal Detecting Laws in the UK" },
          { href: "/blog/using-the-permission-vault", title: "Using the Permission Vault to Manage Permissions" },
          { href: "/blog/how-to-use-old-maps-for-metal-detecting", title: "How to Use Old Maps for Metal Detecting" },
        ]}
      >
          <p>
            Most of the best detecting ground is private: farm fields, old house lots, pasture nobody has dug in a century. Getting onto it takes a conversation and a signature. Below is a free permission agreement you can print or copy, what each part is for, and how to ask so the answer is yes more often.
          </p>
          <p>
            <a href={PDF} target="_blank" rel="noopener noreferrer">Download the printable permission form (PDF)</a>. It is one page, US Letter size, and prints fine on A4.
          </p>

          <h2>Why get permission in writing</h2>
          <ul>
            <li><strong>It is the difference between a guest and a trespasser.</strong> On private land, detecting without the owner&apos;s permission is trespassing.</li>
            <li><strong>It settles who owns the finds.</strong> Who owns a find depends on local law, and in many places it is the landowner by default. Agreeing up front avoids an argument over the one good find of the year.</li>
            <li><strong>It protects a Treasure reward.</strong> In England, Wales and Northern Ireland, a reward can be reduced or not paid at all if you were detecting without the landowner&apos;s permission.</li>
            <li><strong>It answers questions for you.</strong> A neighbor, a tenant or a police officer asking what you are doing there gets a signed page instead of your word.</li>
            <li><strong>It survives changes.</strong> Land gets sold, inherited and leased. A dated signature shows who agreed and when.</li>
          </ul>

          <h2>What a permission letter should cover</h2>
          <ul>
            <li>Names and phone numbers of both of you</li>
            <li>The property, the areas you may search, and the ones that are off limits, such as crops, livestock, lawns and gardens</li>
            <li>Start and end dates, or &ldquo;until either of us ends it&rdquo;</li>
            <li>Whether you call or text before each visit</li>
            <li>How you will look after the land: every hole filled, gates left as found, rubbish carried out</li>
            <li>What happens with finds, including an agreed split for anything valuable</li>
            <li>In England, Wales and Northern Ireland, how a Treasure reward will be shared</li>
            <li>Who is responsible for your safety</li>
            <li>Both signatures and the date</li>
          </ul>

          <h2>Free metal detecting permission form</h2>
          <p>
            Copy it into a document, or <a href={PDF} target="_blank" rel="noopener noreferrer">print the PDF</a> and fill it in by hand. Cross out anything that does not apply, and keep a signed copy each.
          </p>
          <div className="post-letter">
            <p className="mb-4"><strong>METAL DETECTING PERMISSION AGREEMENT</strong></p>
            <p className="mb-1">Landowner: ____________________ Phone: ____________</p>
            <p className="mb-1">Property address or description: ____________________</p>
            <p className="mb-1">Detectorist: ____________________ Phone: ____________</p>
            <p className="mb-4">Email: ____________________</p>
            <p className="mb-2"><strong>1. Permission.</strong> The landowner gives the detectorist permission to use a metal detector on the property above and to dig small holes to recover targets.</p>
            <p className="mb-2"><strong>2. Where.</strong> Allowed areas: ____________________. Areas to avoid (crops, livestock, lawns, gardens): ____________________.</p>
            <p className="mb-2"><strong>3. When.</strong> From ________ to ________ (or until either party ends it). The detectorist will call or text before each visit: yes / no.</p>
            <p className="mb-2"><strong>4. Care of the land.</strong> Every hole will be filled and turf replaced. Gates will be left as found. Rubbish that is dug up will be taken away.</p>
            <p className="mb-2"><strong>5. Finds.</strong> All finds will be shown to the landowner. Agreed arrangement for finds of value: ____________________.</p>
            <p className="mb-2"><strong>6. Treasure (England, Wales and Northern Ireland only).</strong> Any find that may be treasure will be reported as the law requires. Any reward will be shared: landowner ______ detectorist ______.</p>
            <p className="mb-2"><strong>7. Safety.</strong> The detectorist is responsible for their own safety and equipment while on the property.</p>
            <p className="mb-4"><strong>8. Ending.</strong> Either party may end this permission at any time.</p>
            <p className="mb-1">Landowner signature: ____________________ Date: ________</p>
            <p className="mb-1">Detectorist signature: ____________________ Date: ________</p>
          </div>

          <h2>How to find out who owns the land</h2>
          <ul>
            <li><strong>In the US,</strong> most county assessor or county GIS websites have a parcel map that shows who owns each lot. Search for your county&apos;s name plus &ldquo;parcel viewer&rdquo;.</li>
            <li><strong>In England and Wales,</strong> HM Land Registry sells a copy of the title register for most land, and it names the owner.</li>
            <li><strong>Farmland is often rented.</strong> The person working the field may be a tenant. Talk to them about the crops, and get the signature from whoever owns the land.</li>
            <li><strong>Ask around.</strong> Neighbors, the local historical society and the farm supply store usually know who owns what.</li>
          </ul>

          <h2>How to ask a landowner</h2>
          <p>
            <strong>Go in person, in daylight, and not at mealtimes.</strong> Farmers are busiest at planting and harvest, so the weeks after harvest and the winter are the best time to ask. Keep it short, and say three things: who you are, what you would like to do, and how you look after the land.
          </p>
          <blockquote>
            &ldquo;Hi, I&apos;m [name], I live over in [town]. My hobby is metal detecting, mostly looking for old coins and things people lost. I&apos;d love to try your [field]. I dig small, neat holes, fill every one, and I&apos;ll show you everything I find. Would that be all right?&rdquo;
          </blockquote>
          <ul>
            <li><strong>Bring the form already filled in with your details,</strong> so saying yes takes one signature.</li>
            <li><strong>Bring a few finds or photos of them.</strong> People are curious, and an old button or coin explains the hobby better than words.</li>
            <li><strong>If they hesitate, make it smaller.</strong> Offer one short visit, or one corner of one field, and a call before you come.</li>
            <li><strong>Take no gracefully.</strong> Thank them and leave your number. People sometimes change their minds once they have seen you around.</li>
          </ul>

          <h2>Asking by letter or email</h2>
          <p>
            When you cannot knock, write a short letter: who you are, where you live, which land you mean, how you look after it, how finds are shared, and your phone number. Enclose the form ready to sign, and a stamped envelope if you are posting it.
          </p>

          <h2>After the visit</h2>
          <ul>
            <li><strong>Show every find,</strong> the junk included. Landowners are often curious about what has been in their ground.</li>
            <li><strong>Leave the land better than you found it.</strong> Holes filled, turf back, rubbish gone.</li>
            <li><strong>Say thank you,</strong> in person or with a short note, and offer them anything they would like to keep.</li>
            <li><strong>Report what the law requires.</strong> In England, Wales and Northern Ireland, possible treasure must be reported to the coroner within 14 days. In England and Wales, the Portable Antiquities Scheme also records other finds.</li>
            <li><strong>Renew before it expires.</strong> A phone call a few weeks ahead keeps a permission alive.</li>
          </ul>

          <h2>Keeping track of your permissions</h2>
          <p>
            With more than a few permissions, the details slip: which fields are allowed, who asked you to call first, which one runs out in March. SweepTrack Pro&apos;s <Link href="/permissions">Permission Vault</Link> stores each landowner&apos;s name, contact, status and expiry date, draws the boundary on the map, and adds the expiry date to your calendar. With Pro it also generates the request letter and a thank-you letter as PDFs, the landowner can sign on your phone screen, and Perimeter Guard vibrates when you get close to the boundary. The free plan holds one permission.
          </p>
          <figure className="post-shot">
            <div className="phone-frame phone-frame--small">
              <Image
                src="/screenshots/permission_vault.jpg"
                alt="The Permission Vault in SweepTrack Pro: an approved permission that expires in 6 days, with its boundary and buttons for Perimeter Guard and Add to Calendar"
                width={720}
                height={1560}
                sizes="256px"
                className="block w-full h-auto"
              />
            </div>
            <figcaption>An approved permission six days from expiry, with Perimeter Guard and the calendar reminder one tap away. <Link href="/blog/using-the-permission-vault">How the Permission Vault works.</Link></figcaption>
          </figure>

          <h2>Common questions</h2>
          <p><strong>Is verbal permission enough?</strong></p>
          <p>
            It can be, but it is easy to forget or dispute, and it records nothing about finds. Writing it down protects both of you.
          </p>
          <p><strong>Can a tenant give permission?</strong></p>
          <p>
            A tenant farmer controls the crops but may not have the right to let you dig. Ask the tenant and get the owner&apos;s signature too.
          </p>
          <p><strong>Do I need permission on public land?</strong></p>
          <p>
            Usually, and it works differently: parks departments, state rules and permits. On US federal land, removing artifacts more than 100 years old without a permit breaks the Archaeological Resources Protection Act. See <Link href="/blog/metal-detecting-laws-in-the-us">the US rules</Link> and <Link href="/blog/metal-detecting-laws-in-the-uk">the UK rules</Link>.
          </p>
          <p><strong>Does a signed letter make everything legal?</strong></p>
          <p>
            It proves the landowner agreed. It does not override the law, so protected sites, scheduled monuments and cemeteries stay off limits whatever the owner says.
          </p>
          <p><strong>Should I offer the landowner a share?</strong></p>
          <p>
            Many detectorists offer a split on anything valuable, and landowners appreciate being asked. Whatever you agree, write it in section 5.
          </p>

          <p className="post-note">
            General information, not legal advice. Laws on trespass, finds and treasure differ by country and state, so check the rules where you detect.
          </p>
      </BlogPostFrame>
    </>
  );
}
