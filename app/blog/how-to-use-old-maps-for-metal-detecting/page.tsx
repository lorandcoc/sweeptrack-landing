import Link from "next/link";
import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";
import { MapCompareStage } from "@/components/MapCompareSlider";

const SLUG = "how-to-use-old-maps-for-metal-detecting";
const TITLE = "Old Maps for Metal Detecting: Where to Find Them Free";
const DESCRIPTION = "Where to find old topographic maps, fire insurance maps and aerial photos for free, what to look for on them, and how to turn a vanished farmhouse into a detecting plan.";
const IMAGE = "/maps/old_map.jpg";
const PUBLISHED = "2026-02-28";
const UPDATED = "2026-09-29";

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
        readTime="5 min"
        publishedDate={PUBLISHED}
        updatedDate={UPDATED}
        relatedGuides={[
          { href: "/blog/metal-detecting-permission-letter-template", title: "Metal Detecting Permission Letter: Free Printable Template" },
          { href: "/blog/import-and-georeference-your-own-maps", title: "Import and Align Your Own Maps Over Satellite" },
          { href: "/blog/where-to-metal-detect-near-me", title: "Where to Metal Detect Near Me" },
          { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "How to Track Your Sessions with GPS" },
        ]}
      >
          <p>
            Some of the best detecting spots are places where people lived, worked or gathered that have since disappeared: a farmhouse pulled down decades ago, a country school that closed, a road that was rerouted. Nothing on the ground tells you they were there. Old maps do.
          </p>

          <figure>
            <MapCompareStage className="aspect-square sm:aspect-[4/3]" />
            <figcaption>
              Drag to compare a USGS historical topo with today&apos;s satellite view of the same ground in West Peabody, Massachusetts. Every small black square on the old map is a building. Check each one against what stands there now.
            </figcaption>
          </figure>

          <h2>Where to find old maps for free</h2>
          <ul>
            <li><strong><a href="https://ngmdb.usgs.gov/topoview/" target="_blank" rel="noopener noreferrer">USGS topoView</a> (US).</strong> Every USGS topographic map printed from 1884 to 2006, more than 178,000 maps with all their editions, free to view and download. Start here.</li>
            <li><strong><a href="https://www.loc.gov/collections/sanborn-maps/" target="_blank" rel="noopener noreferrer">Sanborn fire insurance maps</a> (US towns).</strong> Drawn for insurers, they show individual buildings in towns and cities, often with what each one was used for. The Library of Congress has a large collection online.</li>
            <li><strong>County atlases and plat maps (US farmland).</strong> Nineteenth-century county atlases often name each landowner and mark each house. Many are scanned by state libraries and the <a href="https://www.davidrumsey.com/" target="_blank" rel="noopener noreferrer">David Rumsey Map Collection</a>.</li>
            <li><strong><a href="https://earthexplorer.usgs.gov/" target="_blank" rel="noopener noreferrer">USGS EarthExplorer</a> (US aerial photos).</strong> Old aerial photos show buildings, orchards and paths that maps left out. It takes a free account and some patience.</li>
            <li><strong><a href="https://maps.nls.uk/" target="_blank" rel="noopener noreferrer">National Library of Scotland maps</a> (Great Britain).</strong> Ordnance Survey maps of England, Wales and Scotland from the 1800s and 1900s, with a side-by-side view against modern imagery.</li>
            <li><strong><a href="https://mapire.eu/" target="_blank" rel="noopener noreferrer">Mapire</a> (Central and Eastern Europe).</strong> The Habsburg military surveys of the 1700s and 1800s laid over modern maps, covering Austria, Hungary, Czechia, parts of Romania and more.</li>
            <li><strong><a href="https://www.oldmapsonline.org/" target="_blank" rel="noopener noreferrer">Old Maps Online</a> (anywhere).</strong> Searches many map collections at once by place.</li>
          </ul>

          <h2>What to look for on an old topo map</h2>
          <ul>
            <li><strong>Small black squares.</strong> Each one is a building. A square in a field with no house on today&apos;s map is a farmhouse or barn that has gone.</li>
            <li><strong>A square with a flag or a cross.</strong> A flag marks a school, a cross a church. Both were gathering places.</li>
            <li><strong>&ldquo;Cem&rdquo; or crosses inside a boundary.</strong> A cemetery. Leave it alone, but people lived nearby.</li>
            <li><strong>Dashed lines.</strong> Unimproved roads and trails. Many are gone today, and the people who used them dropped things along the way.</li>
            <li><strong>&ldquo;Abandoned&rdquo; beside a rail line.</strong> An old rail grade. Stations, sidings and crossings were busy places.</li>
            <li><strong>Names.</strong> Mill, ford, ferry, springs, &ldquo;Sch&rdquo; for school, &ldquo;P.O.&rdquo; for post office. Each one tells you what used to happen there.</li>
            <li><strong>Contour lines.</strong> Houses usually sat on higher, drier ground within reach of water.</li>
          </ul>

          <h2>Scale and dates</h2>
          <p>
            Many early USGS maps are 15-minute (1:62,500) or 30-minute (1:125,000) sheets, so a building is a tiny symbol and its position can be off by a good distance on the ground. The later 7.5-minute (1:24,000) sheets show far more detail. Use the old maps to find a place and the newer ones to pin it down.
          </p>
          <p>
            The date on a map is when the area was surveyed or the sheet was printed, not when anything on it was built. Compare editions: a house that appears on one sheet and is gone from the next gives you the window when people lived there.
          </p>

          <h2>From old map to detecting plan</h2>
          <ol>
            <li><strong>Pick targets.</strong> Mark every building symbol, crossroads and named place that has no modern counterpart.</li>
            <li><strong>Check today&apos;s ground.</strong> On satellite, open fields and woodland are promising. Anything paved or built over is not.</li>
            <li><strong>Look for signs on the ground.</strong> A cellar hole, cut stone, a well, a clump of trees in an open field, or lilacs and daffodils someone planted a century ago.</li>
            <li><strong>Find the owner and ask.</strong> An old map does not give you permission. See <Link href="/blog/metal-detecting-permission-letter-template">how to ask, with a free permission form</Link>.</li>
            <li><strong>Search in a pattern.</strong> Work outward from where the house stood: the yard, the path to the well, the route to the road. Record where you have been so the next visit starts where this one ended.</li>
          </ol>

          <h2>Old maps in SweepTrack Pro</h2>
          <p>
            In SweepTrack Pro, one tap switches the map to genuine USGS historical topo tiles, covering the US and Romania. An opacity slider fades between the old map and today&apos;s satellite view, so you can see where a vanished building stood relative to the trees and fences in front of you. Download the area before you go and the layer works without a signal.
          </p>
          <p>
            Drop a Waypoint on each promising spot as you find it. The categories include homestead, old well, church, foundation and &ldquo;investigate later&rdquo;, and each waypoint shows its distance and bearing when you are out there. For a map that is not in the USGS set, such as a county plat, an estate map or an old aerial, <Link href="/blog/import-and-georeference-your-own-maps">import it and align it over the satellite map</Link> by hand or with control points.
          </p>
          <p>
            The historical layer and your own map imports are part of Pro. <Link href="/overlays">See how the map overlays work</Link>.
          </p>

          <h2>Rules to keep in mind</h2>
          <ul>
            <li><strong>Old does not mean ownerless.</strong> An abandoned-looking lot still has an owner, and you need their permission.</li>
            <li><strong>Some ground is off limits whatever the map shows.</strong> Cemeteries, protected sites and, in the US, artifacts on federal land. See <Link href="/blog/metal-detecting-laws-in-the-us">the US rules</Link> and <Link href="/blog/metal-detecting-laws-in-the-uk">the UK rules</Link>.</li>
          </ul>

          <h2>Common questions</h2>
          <p><strong>Are old USGS maps really free?</strong></p>
          <p>
            Yes. Every edition in the historical collection can be viewed and downloaded at no cost through topoView.
          </p>
          <p><strong>Which old map is best for metal detecting?</strong></p>
          <p>
            In the US, start with the oldest USGS topo editions for your area, then add Sanborn maps for towns and county atlases for farmland. In Britain, start with the Ordnance Survey maps on the National Library of Scotland site.
          </p>
          <p><strong>How accurate are old maps?</strong></p>
          <p>
            Accurate enough to find the place, rarely accurate enough to find the exact spot. Expect to search around the mark, especially on the early small-scale sheets.
          </p>
      </BlogPostFrame>
    </>
  );
}
