import Link from "next/link";
import Image from "next/image";
import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "beach-metal-detecting-tide-timing";
const TITLE = "Beach Metal Detecting: The Best Tide Times and Where to Search";
const DESCRIPTION = "When to go (low tide, minus tides, after storms), how to read a tide table, and where to swing on the beach, plus the settings that keep a detector quiet on wet salt sand.";
const IMAGE = "/screenshots/forecast.jpg";
const PUBLISHED = "2026-01-14";
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
        category="beach"
        readTime="5 min"
        publishedDate={PUBLISHED}
        updatedDate={UPDATED}
        relatedGuides={[
          { href: "/blog/using-the-tide-table", title: "Using the Tide Table to Time Beach Sessions" },
          { href: "/blog/best-metal-detectors-under-500", title: "Best Metal Detectors Under $500 in 2026" },
          { href: "/blog/best-weather-conditions-for-metal-detecting", title: "Best Weather Conditions for Metal Detecting" },
          { href: "/blog/best-places-to-metal-detect-in-florida", title: "Best Places to Metal Detect in Florida" },
        ]}
      >
          <p>
            Beaches lose rings, coins and chains every day, and the sea keeps moving them around. When you go matters as much as where: the same stretch of sand can be covered at high tide and full of targets a few hours later.
          </p>

          <h2>The short answer</h2>
          <ul>
            <li><strong>Go on a falling tide.</strong> Detect from about two hours before low tide until an hour or two after.</li>
            <li><strong>Pick the lowest tides of the month.</strong> They come around the new and full moon.</li>
            <li><strong>Go after storms.</strong> Strong onshore waves strip sand away and uncover older, heavier finds.</li>
            <li><strong>Go early.</strong> Before the crowds and, on beaches that are raked, before the cleaning machines, especially after busy weekends and holidays.</li>
          </ul>

          <h2>How tides work, in one minute</h2>
          <p>
            Most coasts get two high tides and two low tides a day, about 12 hours and 25 minutes apart, so low tide comes roughly 50 minutes later each day. Parts of the Gulf of Mexico get only one high and one low a day.
          </p>
          <p>
            The range between high and low changes through the month. Around the new and full moon, spring tides bring the highest highs and the lowest lows. Around the quarter moons, neap tides move much less water, and much less beach comes out of the sea.
          </p>
          <p>
            On US tide tables, heights are measured from mean lower low water (MLLW), the average of each day&apos;s lower low tide. A low shown below zero, called a minus tide, drops further than usual and uncovers sand that most low tides never reach. Those are the days to be there.
          </p>

          <figure className="post-shot">
            <div className="phone-frame phone-frame--small">
              <Image
                src="/screenshots/tide.jpg"
                alt="The Tide Table in SweepTrack Pro for the Wilmington, North Carolina NOAA station, showing two low tides of minus 0.08 meters on the same day"
                width={1440}
                height={3120}
                sizes="256px"
                className="block w-full h-auto"
              />
            </div>
            <figcaption>The nearest NOAA station in the app&apos;s Tide Table. Both lows that day were below zero, a minus tide.</figcaption>
          </figure>

          <h2>How to read a tide table for detecting</h2>
          <ul>
            <li><strong>Use the nearest station.</strong> Times shift along a coast and up estuaries, sometimes by an hour or more.</li>
            <li><strong>Scan the next week or two for the lowest lows,</strong> ideally minus tides.</li>
            <li><strong>Check the clock.</strong> A minus tide at 2 a.m. is less use than a slightly higher low at 8 a.m.</li>
            <li><strong>Arrive about two hours before low.</strong> Follow the water out, then work back up the beach as it returns.</li>
            <li><strong>Outside the US, compare against the station&apos;s usual lows.</strong> Other countries measure from their own chart datum. In the UK it sits close to the lowest possible tide, so heights rarely go below zero, and the smallest numbers of the month are your days.</li>
          </ul>
          <p>
            Free sources: <a href="https://tidesandcurrents.noaa.gov/" target="_blank" rel="noopener noreferrer">NOAA Tides &amp; Currents</a> in the US and <a href="https://easytide.admiralty.co.uk/" target="_blank" rel="noopener noreferrer">ADMIRALTY EasyTide</a> in the UK.
          </p>

          <h2>Storms, seasons and moving sand</h2>
          <p>
            Gentle summer waves tend to carry sand onto the beach and bury things deeper. Storm waves and strong onshore winds strip it away, uncovering older layers where coins and heavy jewelry have settled. That is why fall and winter are usually the best seasons for older finds, while summer is best for fresh losses in the dry sand.
          </p>
          <p>After a storm, look for:</p>
          <ul>
            <li><strong>Cuts.</strong> Steep steps in the sand where waves have eaten into the beach. Heavy items collect along the base.</li>
            <li><strong>Exposed clay, gravel or hard-packed sand.</strong> An older surface with less sand on top.</li>
            <li><strong>Dark streaks of black sand.</strong> Heavy mineral sand left behind when lighter sand washes out. Heavy targets tend to settle in the same places, though the black sand itself can make a detector noisy.</li>
          </ul>

          <h2>Where to swing</h2>
          <ul>
            <li><strong>The towel line.</strong> Dry sand where people sit. Fresh losses and a lot of trash, and the easiest digging.</li>
            <li><strong>The wet sand.</strong> Between the high and low tide lines. Rings and chains lost in the water get pushed up here, and low tide lets you reach them.</li>
            <li><strong>The low tide line and troughs.</strong> Shallow channels near the water where heavy items settle.</li>
            <li><strong>In the water.</strong> Knee to waist deep where swimmers stand. It needs a submersible detector and extra care.</li>
            <li><strong>Where people gather.</strong> Stairs and paths onto the beach, lifeguard stands, volleyball courts, and the sand around jetties and piers.</li>
          </ul>
          <p>
            Work in lanes parallel to the water and overlap your swings. On a long beach it is easy to lose track of which stretch you have covered, so record your path. SweepTrack Pro draws it on the map as you walk, and <Link href="/coverage">tracking is free</Link>.
          </p>

          <h2>Detector settings for wet salt sand</h2>
          <p>
            Wet salt sand conducts, and a single-frequency detector can chatter and false on it. Simultaneous multi-frequency and pulse induction detectors handle it much better. See <Link href="/blog/best-metal-detectors-under-500">the submersible multi-frequency detectors under $500</Link>. Whatever you use:
          </p>
          <ul>
            <li>Choose the beach mode if your detector has one.</li>
            <li>Ground balance on clean wet sand, and again when you move between dry and wet sand.</li>
            <li>Lower the sensitivity until the noise settles, rather than chasing faint signals through the chatter.</li>
            <li>Use a sand scoop. A long-handled one saves your back in the wet zone.</li>
          </ul>

          <h2>Stay safe</h2>
          <ul>
            <li><strong>Watch the tide coming back,</strong> especially below cliffs and seawalls, and on sandbars with a channel between you and the shore.</li>
            <li><strong>Never turn your back on heavy surf,</strong> and stay out of rip currents. A calm-looking gap in the breaking waves often marks one.</li>
            <li><strong>Tell someone where you are going</strong> if you detect alone at dawn or dusk.</li>
          </ul>

          <h2>Beach rules</h2>
          <p>
            Many public beaches allow detecting, but not all. In the US, some state parks require a permit or ban it, and it is not allowed in national parks, which include the national seashores. In the UK, much of the foreshore has an owner, often the Crown Estate or a local council, so check before you go. See <Link href="/blog/metal-detecting-laws-in-the-us">the US rules</Link> and <Link href="/blog/metal-detecting-laws-in-the-uk">the UK rules</Link>.
          </p>

          <h2>Tides in SweepTrack Pro</h2>
          <p>
            With Pro, the <Link href="/blog/using-the-tide-table">Tide Table</Link> shows highs and lows from the nearest NOAA station for the next 3, 7 or 14 days, so you can spot a minus tide before you leave home, and the Detecting Forecast scores conditions for any location up to seven days ahead. Both need a connection to load, and the Tide Table covers US coasts. Your GPS track works offline.
          </p>

          <h2>Common questions</h2>
          <p><strong>Is high tide ever worth it?</strong></p>
          <p>
            For the dry sand, yes. Detect the towel line at the end of a busy day, when the beach empties.
          </p>
          <p><strong>What is the best time of year?</strong></p>
          <p>
            Fall and winter storm seasons for older, deeper finds. Summer for fresh losses where people sat.
          </p>
          <p><strong>Do I need a waterproof detector?</strong></p>
          <p>
            For the wet sand and the water, yes, and it should be submersible, not only weatherproof. The dry sand is fine with any detector.
          </p>
      </BlogPostFrame>
    </>
  );
}
