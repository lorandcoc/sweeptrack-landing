# SweepTrack Landing — Code Audit (2026-05-16)

Auditing scope: ~4,400 lines of TS/TSX, 957 lines CSS, 14 dictionaries × 484 keys, 31 blog post pages, ~4.5 MB of public assets, the Resend route, the Supabase wiring, and the Next.js 16 proxy. Every finding cites a file and line.

---

## 🔴 CRITICAL — These can hurt launch traffic, SEO, or trust

### 1. RSS feed sets every `<pubDate>` to "now" on every request
[app/blog/feed.xml/route.ts:45](app/blog/feed.xml/route.ts#L45) → `<pubDate>${now}</pubDate>` inside the `posts.map`.

Every post's pubDate is `new Date().toUTCString()` — i.e. the moment the feed was fetched. Combined with `Cache-Control: public, max-age=3600`, that means every hour your RSS feed publishes "31 brand-new posts" to every reader. Subscribers will see the same posts surface as new again and again, and most RSS aggregators will eventually mute or drop the feed. This will also distort any "freshness" signals services compute from your feed.

Fix: hardcode `publishedDate` per post (you already store it in the individual `/blog/<slug>/page.tsx` files as the `PUBLISHED` const — pull from there or replicate it once).

### 2. `hreflang` alternates all point to the same URL — no SEO value, possibly harmful
[app/layout.tsx:120-134](app/layout.tsx#L120-L134)

```ts
languages: {
  "en": "https://sweeptrack.pro",
  "ro": "https://sweeptrack.pro",
  ... 14 entries, all the same root URL
}
```

Google treats this as conflicting hreflang signals (since each locale claims to be the canonical for itself but all share one URL). Either:
- Remove `alternates.languages` entirely (you serve a single client-side translated SPA — there are no localized URLs to advertise), or
- Implement proper per-locale paths (`/de`, `/fr`...) and switch this to real SSR-translated routes.

Current state actively undermines SEO across 13 non-English locales.

### 3. The i18n model is fundamentally not crawler-friendly
[lib/i18n.tsx:54-89](lib/i18n.tsx#L54-L89)

The entire translation system runs client-side in a React effect after mount. Googlebot, Bingbot, social-card scrapers, etc. all see the English `en.json` baseline because the initial HTML is rendered with `locale: "en"`. So:
- All your translated dictionaries (484 keys × 13 languages = ~6,300 strings of work) are effectively invisible to search engines.
- The JSON-LD on `app/page.tsx` is English-only too.
- Geo-proxy + cookie + localStorage logic only changes what users see *client-side*, not what Google indexes.

You won't rank for Spanish/French/Italian metal-detecting queries from this. If multi-locale SEO matters, you need server-side locale resolution → SSR with the right dictionary.

### 4. Supabase anon key + project URL hardcoded and duplicated in two places
[components/ComingSoonButton.tsx:6-8](components/ComingSoonButton.tsx#L6-L8) and [components/CommunityLinks.tsx:8-10](components/CommunityLinks.tsx#L8-L10)

Anon keys are public by design, *but*:
- The project URL `vntuabtcrllroulgqhwf.supabase.co` is also leaked inside [app/api/notify-waitlist/route.ts:165](app/api/notify-waitlist/route.ts#L165) (`https://supabase.com/dashboard/project/vntuabtcrllroulgqhwf/editor` is sent to your own inbox, which is fine, but the same project ref also lives client-side).
- The waitlist table's safety is now 100% RLS-dependent. If you forgot to set `INSERT`-only policy and didn't enable RLS, an attacker can scrape every signup with one anon key request. **Verify RLS is enabled on `waitlist` and the only policy is `insert with check (true)` — and that `select` is denied.** This is the #1 thing to check before launch.
- Keys/URLs are duplicated in two components — drift waiting to happen. Move to one shared module.

### 5. `CommunityLinks` newsletter form has no honeypot
[components/CommunityLinks.tsx:12-90](components/CommunityLinks.tsx#L12-L90)

You spent commit `d8d7ab0` ("Block waitlist spam") adding a honeypot + tighter regex to `ComingSoonButton`, but `NewsletterForm` is a parallel signup path that posts directly to Supabase with **no bot defenses**. Bots that find the community section will spray straight into your table and bypass the protections you just added. Same regex/honeypot needs to be applied here, or this form needs to call the same shared `joinWaitlist` helper.

### 6. Dead social links pointing to `#`
[components/Footer.tsx:34,39](components/Footer.tsx#L34-L39) and [components/CommunityLinks.tsx:143,152](components/CommunityLinks.tsx#L143-L152)

Both TikTok and Reddit cards have `href: "#"` with `target="_blank"`. On the footer they're 4×4 social buttons that open a blank tab on the same page. On the Community section they're full cards with "Most active" badge possibilities and `rel="noopener noreferrer"` to nowhere. Launch-blocker: either remove these two socials or wire them to real handles. Trying to click through one of them will look broken in QA.

### 7. RSS feed and `/blog/page.tsx` and `next.config.ts` redirects all duplicate the post list — and the titles already drift
[app/blog/feed.xml/route.ts:1-33](app/blog/feed.xml/route.ts), [app/blog/page.tsx:8-51](app/blog/page.tsx), [next.config.ts:39-86](next.config.ts), [app/sitemap.ts:6-44](app/sitemap.ts)

Four different sources of truth for blog posts. Title drift already exists:
- "Logging Finds with **Photo, Video, and Audio Notes**" (feed.xml) vs "Logging Finds with **Photos and Audio Notes**" (page.tsx).
- "Share Card: **A Printable Summary of Your Session**" (feed.xml) vs "Share Card: **Show Off Your Session on Social Media**" (page.tsx).

Search engines and RSS readers will index different titles than the canonical pages display. Centralize this into one `posts.ts` module that the index, the feed, the sitemap, and (optionally) per-post `metadata` all import.

---

## 🟠 HIGH — Real user-facing bugs / launch readiness

### 8. Hardcoded English strings inside otherwise-i18n'd components

Visible-to-user English-only text that should run through `t()`:

| File | Line | String |
|------|------|--------|
| [components/StatsBar.tsx:10-14](components/StatsBar.tsx#L10-L14) | entire component | "VAULT / PERMISSIONS · CALENDAR · PDF" etc — **5 headline tiles, all English-only in a 14-language site** |
| [components/ComingSoonButton.tsx:142-144](components/ComingSoonButton.tsx#L142-L144) | privacy line | "Email only. Used to send the launch link. Unsubscribe in one click." |
| [components/CommunityLinks.tsx:70](components/CommunityLinks.tsx#L70) | placeholder | `placeholder="your@email.com"` (other form's placeholder *is* translated) |
| [components/CommunityLinks.tsx:83](components/CommunityLinks.tsx#L83) | privacy line | same as above |
| [components/LanguageToggle.tsx:70](components/LanguageToggle.tsx#L70) | aria-label | `aria-label="Change language"` |
| [components/LanguageToggle.tsx:112](components/LanguageToggle.tsx#L112) | mobile sheet header | "Choose language" |
| [app/not-found.tsx](app/not-found.tsx) | entire page | 404 text |
| [app/error.tsx](app/error.tsx) | entire page | error UI |

StatsBar is the worst — it's a full hero-adjacent section that just speaks English at every Romanian/Spanish/etc visitor.

### 9. `BlogPostFrame` forces `en-US` date format on every locale
[components/BlogPostFrame.tsx:26](components/BlogPostFrame.tsx#L26)

```ts
const formattedDate = new Date(publishedDate).toLocaleDateString("en-US", {...});
```

Should be `toLocaleDateString(locale, ...)` using the locale from `useI18n()`. A German visitor reading a translated page will see "March 21, 2026" instead of "21. März 2026".

### 10. Blog post titles + excerpts + tags are hardcoded English in the index
[app/blog/page.tsx:8-51](app/blog/page.tsx#L8-L51)

Every entry is `title: "How to Use Old Maps..."`, `excerpt: "..."`, `tag: "Guide"`. Non-English visitors see English blog content. If translating 31 post bodies is too much (totally understandable), at minimum hide `/blog` from non-English visitors or render a "available in English only" note — currently the cognitive dissonance of a translated UI shell wrapping English content makes the site feel half-built.

The non-English visitor logic at line 70 only filters `location` posts — every other category still shows English.

### 11. `home.jpg` is 567 KB and loaded with `priority` in the hero
[components/ParallaxPhone.tsx:5-60](components/ParallaxPhone.tsx#L5-L60), [public/screenshots/home.jpg](public/screenshots/home.jpg) (568,034 bytes)

The hero phone is rendered at max 300px wide CSS. A 567 KB JPG for a 300 px-wide phone mockup is ~10× oversized. Combined with `priority` (preloaded, blocks LCP), this is your largest LCP penalty.

Even worse:
- `screenshots/history.jpg` = 382 KB, `measure2.jpg` = 245 KB
- [public/maps/old_map.jpg](public/maps/old_map.jpg) = **2.17 MB** and [public/maps/satellite_map.jpg](public/maps/satellite_map.jpg) = **2.35 MB** for a `max-w-sm` slider (~448 px wide)

`scripts/optimize-screenshots.mjs` claims to make them 720 px wide @ q75, but most of these files are well above that — either the script didn't run on the May 15 batch (commit `2c71e01`) or it failed silently. Re-run it; for the maps, downsize aggressively (they're decoration, not detail). And note: the script requires `sharp` which is not in `package.json` — it's an implicit dependency on the global. Add it as a devDep.

Also: the screenshots are JPG. You already opt into AVIF/WEBP via `next.config.ts`, so the served formats are fine — but the source files themselves don't need to be JPG at 700+ KB.

### 12. The geo proxy can set cookies on `sitemap.xml`, `robots.txt`, `opengraph-image`, and `manifest.webmanifest`
[proxy.ts:67-68](proxy.ts#L67-L68)

The matcher excludes `_next/static`, `_next/image`, `favicon.ico`, `icon.svg`, `screenshots`, `*.png|jpg|webp`, and `api` — but **not** `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `opengraph-image`, or `logo.svg`. Search crawlers fetching `/sitemap.xml` will receive a `Set-Cookie: st-geo-lang=...` header. Some crawlers won't cache cookied responses, and you're spending CPU/setting headers on every Googlebot hit. Tighten the matcher.

### 13. `LanguageToggle` ships *all* country flag SVGs to the client
[components/LanguageToggle.tsx:5](components/LanguageToggle.tsx#L5)

```ts
import * as flagSvgs from "country-flag-icons/string/3x2";
```

Namespace imports of a barrel module **cannot tree-shake** when consumers use `(flagSvgs as Record<...>)[country]` dynamic indexing — bundlers can't statically know which flags you reference. The package has 200+ flag SVGs (~30-80 KB minified). You only use 14. Switch to explicit imports indexed by code:

```ts
import GB from "country-flag-icons/string/3x2/GB";
import RO from "country-flag-icons/string/3x2/RO";
// ...
const flags: Record<string, string> = { GB, RO, ... };
```

### 14. Manifest has only one SVG icon — iOS and many Android launchers want PNGs
[app/manifest.ts:11-17](app/manifest.ts#L11-L17)

```ts
icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }]
```

- iOS Safari ignores SVG for home-screen icons (uses `apple-touch-icon` link, which you don't set in `layout.tsx`).
- Some Android launchers downscale SVG poorly; PWA install prompts want at least a 512×512 PNG and ideally a maskable variant.
- No `apple-touch-icon` link in the root metadata means iOS gets a screenshot of the page.

Add 192×192 and 512×512 PNGs + a maskable variant + `metadata.icons.apple` in `layout.tsx`.

### 15. JSON-LD `featureList` includes "no analytics, no tracking" — but the website ships Vercel Analytics + SpeedInsights
[app/page.tsx:102](app/page.tsx#L102), [app/layout.tsx:3-4,186-187](app/layout.tsx#L3-L4)

The `SoftwareApplication` schema describes the *app*, where this claim is true (per [legal/privacy/en.md](legal/privacy/en.md) the in-app Firebase Analytics is opt-in). But the website itself runs Vercel Analytics. The privacy doc handles this nuance correctly. **However**, [app/privacy/page.tsx:7](app/privacy/page.tsx#L7) `description: "...no analytics, no ads, no tracking."` is wrong for the *site* and contradicts the privacy doc you just translated into 14 languages. Trivial fix; reputational risk if a privacy hawk grabs the meta tag.

### 16. `LegalPage` markdown parser double-applies bold/italic inside `<code>` blocks
[components/LegalPage.tsx:49-113](components/LegalPage.tsx#L49-L113)

Order of operations bug. Inline code is replaced first → `<code>**bold**</code>`. Then the bold regex (`/\*\*(.+?)\*\*/g`) runs on the whole string including the now-`<code>`-wrapped text, producing `<code><strong>bold</strong></code>`. Same for italics. Workaround: substitute code/pre blocks with placeholders, run the rest, re-substitute. Or just use `remark`/`marked` — a hand-rolled markdown parser for legal documents is the wrong place to roll your own (probabilistic of weird edge cases ↑↑↑, and HTML-injection blast radius if a translation ever contains a `<script>`).

Note: the mailto fixup at line 81-88 captures `text` and `after` from the regex but never uses them — dead code.

### 17. `CursorSweepTrail` runs RAF continuously even before any mouse arrives
[components/CursorSweepTrail.tsx:107-109](components/CursorSweepTrail.tsx#L107-L109)

`raf = requestAnimationFrame(tick)` fires on mount and ticks at 60fps for the lifetime of the page — clearing the canvas every frame even when there are zero rings and the cursor hasn't moved. On a tab the user opens but doesn't interact with, you're still burning CPU/battery. Gate the loop on `active || rings.length > 0`, and start it only on first mousemove.

Also a subtle bug: when the page becomes hidden, you cancel RAF, but you don't bump `lastEmit` to "now" on resume — so the very first frame after re-show may immediately emit a stale ring at the old cursor position because `now - lastEmit` is enormous after a long tab-away.

### 18. `MapCompareSlider` re-attaches window listeners on every render while dragging
[components/MapCompareSlider.tsx:35-53](components/MapCompareSlider.tsx#L35-L53)

`handleMouseMove`/`handleTouchMove` are defined inside the component body, so they're new function references on every render. `useEffect` depends on `isDragging` only — but inside the effect those functions are captured fresh each time. While dragging, every `setSliderPosition` re-renders → new handler references → effect cleanup removes old, effect re-adds new. 60+ add/remove pairs per second during a drag. Works, but wasteful and a hazard if anyone ever adds a `useCallback` and forgets to include the right deps. Either:
- Define handlers inside the effect (closure captures the right state), or
- Use a ref for `isDragging`.

Also the `touchmove` listener is `{ passive: true }`, which means you can't `preventDefault()` to stop the page from scrolling while dragging the slider on mobile. Touch users get a scroll-while-drag fight.

### 19. `Screenshots` carousel uses `setInterval` with stale-closure protection that doesn't quite hold
[components/Screenshots.tsx:75-82](components/Screenshots.tsx#L75-L82)

You correctly use `activeRef` to dodge stale closures inside the interval. But the interval re-creates whenever `paused` or `visible` changes — that's the desired behavior. Minor issue: when the user drags, you set `paused = true` on `onTouchStart` and re-enable after 3 s on `onTouchEnd` with a bare `setTimeout` whose ID is never tracked. Rapid touch interactions stack timers; the latest "resume" might fire while a fresh drag is happening. Track the timer ID and clear before setting.

Also `handleMouseUpOrLeave` mutates `scrollRef.current.style.scrollSnapType = ''` after drag. If the user mouses down, drags off-component, then releases outside it — both `MouseLeave` and `MouseUp` fire but you've gated nothing. Stacked state changes here are harmless but messy.

### 20. `Hero` re-flows because locale-based font size switches *after* initial render
[components/Hero.tsx:20-44](components/Hero.tsx#L20-L44)

```ts
const { locale, t } = useI18n();
const isLong = locale !== "en";
```

For a German visitor: server-render emits English-locale CSS classes (smaller font path is `text-3xl ... lg:text-6xl`), client hydrates with `locale="en"`, then the i18n effect runs, switches to `locale="de"`, re-renders with `text-2xl ... lg:text-5xl`. The hero title visibly shrinks ~150ms after paint. That's CLS *and* a "flash of wrong text" simultaneously.

The fix is genuinely structural: SSR the locale. Until then, at minimum, set the `isLong` font sizes as the default and shrink only for `locale === "en"` — same visual content but no shift for the majority of visitors who came in on a non-English geo cookie.

---

## 🟡 MEDIUM — Polish / robustness

### 21. Rate limiter is per-serverless-instance and trivially bypassed
[app/api/notify-waitlist/route.ts:19-21,117-125](app/api/notify-waitlist/route.ts#L19-L21)

`Map<string, number[]>` lives in instance memory. Vercel will route different IPs (and even the same IP after cold starts) to different instances. The "5 per minute per IP" is more like "5 per minute per instance per IP" — i.e. essentially no limit for a determined sender, and you could even allow 5×N requests from one IP simultaneously. For pre-launch this is probably fine, but if waitlist abuse is a real concern, add Upstash/Redis or move rate-limiting to the Supabase side (a `rate_limit` table + a security-definer function).

### 22. Notify-waitlist response leaks success/error per email send
[app/api/notify-waitlist/route.ts:179-183](app/api/notify-waitlist/route.ts#L179-L183)

```ts
return NextResponse.json({
  ok: true,
  notifyError: notifyRes.status === "rejected",
  welcomeError: welcomeRes.status === "rejected",
});
```

You return this even on rate-limit OR honeypot success. The client gets per-side error flags. A bot can probe whether their email survived validation by looking at `welcomeError` — minor info leak. Easier: always return `{ ok: true }` regardless, log internally.

### 23. Resend `from` defaults to `onboarding@resend.dev`
[app/api/notify-waitlist/route.ts:25](app/api/notify-waitlist/route.ts#L25)

If `RESEND_FROM_EMAIL` isn't set, welcome emails come from `onboarding@resend.dev` — which lands in spam at high rates and looks unprofessional ("are you actually Resend?"). Before launch, verify the `sweeptrack.pro` domain in Resend, set the env var to `Lorand <lorand@sweeptrack.pro>` or similar, and add SPF/DKIM/DMARC records. **This single change will lift welcome-email deliverability significantly.**

### 24. Welcome email "List-Unsubscribe" uses mailto without `List-Unsubscribe-Post`
[app/api/notify-waitlist/route.ts:173-175](app/api/notify-waitlist/route.ts#L173-L175)

Gmail/Yahoo now strongly prefer `List-Unsubscribe-Post: List-Unsubscribe=One-Click` for one-click unsubscribe. With only `mailto:`, Gmail won't render the "Unsubscribe" button next to the sender name. Also: your copy says "Unsubscribe in one click" — currently a polite lie. Either downgrade the copy to "Reply 'remove' to unsubscribe" or add a real unsubscribe endpoint and `List-Unsubscribe-Post`.

### 25. Honeypot field's value never resets between submissions
[components/ComingSoonButton.tsx:61,68-77](components/ComingSoonButton.tsx#L61-L77)

After a successful submit, you clear `email` but not `honeypot`. If a bot pre-fills the honeypot once, subsequent legitimate submissions from that same client would also fail. Practically a non-issue (real users won't ever touch the field), but tidy it up.

### 26. `FAQ` JSON-LD is locked to English
[components/FAQ.tsx:9-20](components/FAQ.tsx#L9-L20)

```ts
const faqSchema = { ... mainEntity: faqKeys.map((i) => ({ name: en[`faq.q${i}`], ... }))}
```

Same as the page JSON-LD: structured data for FAQs is English regardless of visitor locale. Either fine (you only want SEO from English queries) or a missed opportunity. Be intentional.

### 27. `Header` mobile menu doesn't trap focus or close on Escape
[components/Header.tsx:118-171](components/Header.tsx#L118-L171)

Mobile menu opens via `setMenuOpen(true)`, closes on link click and scroll. Missing:
- Escape key handler.
- Focus moves into the menu when it opens.
- Focus returns to the toggle on close.
- `aria-hidden`/`inert` on the rest of the page while open.

For a single-page landing this is mild, but for a 14-language site that aspires to launch-ready, WCAG 2.1 keyboard nav is the floor.

### 28. `LanguageToggle` doesn't close on Escape and doesn't restore focus
[components/LanguageToggle.tsx:20-26](components/LanguageToggle.tsx#L20-L26)

Same pattern. Click-outside closes; Escape and focus management are absent. The mobile bottom-sheet has `role="dialog"` and `aria-modal="true"` — those promises imply focus-trap, which you haven't implemented. Either implement it or remove the dialog role.

### 29. `useReveal` triggers on initial mount via the rect check, then the IntersectionObserver fires again
[components/useReveal.ts:26-29](components/useReveal.ts#L26-L29)

```ts
if (rect.top < window.innerHeight && rect.bottom > 0) {
  setVisible(true);
}
```

This is the safety net for "already in viewport on mount", but the observer also fires for the same condition. You'll call `setVisible(true)` twice on the first render for above-the-fold sections (no visible bug since React bails on identical state, but linters and React-strictness will flag it). Either disconnect the observer if the rect check passes, or skip the rect check (modern IntersectionObserver fires immediately for elements already in view).

### 30. `FounderNote` typewriter cursor only shows AFTER typing finishes
[components/FounderNote.tsx:77](components/FounderNote.tsx#L77)

`{done && <span className="founder-term__cursor">▊</span>}` — convention is "cursor blinks while typing, then stays blinking forever" or "cursor blinks always". Showing it only after the type animation completes looks like a bug. Probably want `{(!done || done) && ...}` (i.e. always show during animation too).

### 31. `Screenshots` carousel: `dot-indicator` aria-labels are not translated
[components/Screenshots.tsx:169](components/Screenshots.tsx#L169)

`aria-label={`Screenshot ${i + 1}`}` — every dot reads "Screenshot 1, Screenshot 2..." in English to a Romanian screen reader user. Pull the word from a translation key, or use the per-slide label.

### 32. `sitemap.ts` hardcodes `lastModified: "2026-04-14"` for every URL
[app/sitemap.ts:47-56](app/sitemap.ts#L47-L56)

Every post claims "last modified April 14" even though many blog post `PUBLISHED` constants are different (`night-vision-mode` is 2026-03-21). Search engines de-emphasize sitemaps that obviously lie. Drive `lastModified` from the per-post `PUBLISHED` constant (one more reason to centralize the post list).

### 33. JSON-LD `applicationCategory: "UtilitiesApplication"` may not be what Google's rich-results validator expects
[app/page.tsx:49](app/page.tsx#L49)

Schema.org uses `applicationCategory` as free text but Google specifically wants a member of [a fixed list](https://developers.google.com/search/docs/appearance/structured-data/software-app) — `"UtilitiesApplication"` is one valid value, so this is probably fine. Just verify with Google's Rich Results Test before launch. Also the schema is missing `aggregateRating` and `interactionStatistic` which Google sometimes requires for the App rich-result card to show.

### 34. `next.config.ts` `images.formats` is set but no `remotePatterns`
[next.config.ts:9-11](next.config.ts#L9-L11)

You only serve local images so this is fine, but if you ever embed an external image (Wikipedia thumbnail for a blog post, for example), `next/image` will error without a `remotePatterns`. Set the empty array explicitly to make intent clear, or leave as-is and remember.

### 35. `dev-only` debug files in `/public`
[public/file.svg](public/file.svg), [public/globe.svg](public/globe.svg), [public/next.svg](public/next.svg), [public/vercel.svg](public/vercel.svg), [public/window.svg](public/window.svg)

These are leftovers from `create-next-app`. They get deployed and indexed. Delete them.

### 36. `Hero` HUD chip "Score 96" is hardcoded English
[components/Hero.tsx:102](components/Hero.tsx#L102)

`<span>Score 96</span>` — decorative chip floating around the phone in the hero, English-only in 14-language site. Same with "+1 find · 18 cm" at line 96 ("find" is English). Either translate or drop the chips on small viewports where they show.

### 37. `tsconfig.tsbuildinfo` is in the working tree despite `.gitignore` listing `*.tsbuildinfo`
[tsconfig.tsbuildinfo](tsconfig.tsbuildinfo) (120 KB)

It's tracked (status was clean). Either git was tracking it from before the `.gitignore` rule was added, or the rule is being overridden. Run `git rm --cached tsconfig.tsbuildinfo` once and commit. (Not a runtime issue, just repo hygiene.)

### 38. `<html lang="en">` is hardcoded
[app/layout.tsx:178](app/layout.tsx#L178)

Even visitors browsing in German get `<html lang="en">`. Screen readers will pick the wrong pronunciation engine. With client-side i18n this is hard to fix correctly; with the proxy you could at least read the cookie at request time and set `lang` server-side. Doing nothing here also signals to Google the page is English-only, reinforcing finding #3.

---

## 🟢 LOW — Nits, code smell, future-you-will-thank-you

### 39. `next.config.ts` defines `webpack` and `turbopack` rules for `.md`, but `--turbopack` is the default in Next.js 16
The `webpack(config)` block at [next.config.ts:17-23](next.config.ts#L17-L23) is dead code for normal `next dev` / `next build` in Next 16 unless you opt out of Turbopack. Keep it as fallback, but be aware.

### 40. `LegalPage` shows a skeleton even when the EN dictionary is statically imported and could render instantly
[components/LegalPage.tsx:122-148](components/LegalPage.tsx#L122-L148)

You could SSR English by importing the EN markdown at module scope, then dynamically swap to the user's locale on the client. Currently every page load shows the skeleton briefly even for English visitors.

### 41. `Cell` in `PricingTable` uses `&mdash;` and `&#10003;` HTML entities — works, but `−` and `✓` would be lighter
[components/PricingTable.tsx:104-106](components/PricingTable.tsx#L104-L106). Micro-nit.

### 42. Type definition `pro: boolean | "string"` is awkward
[components/PricingTable.tsx:18-24](components/PricingTable.tsx#L18-L24)

```ts
type FeatureRow = { ...; free: boolean | "string"; freeKey?: string; ... }
```

Using the literal string `"string"` as a discriminator is unusual; a discriminated union is clearer:

```ts
type FeatureRow =
  | { key: string; free: boolean; pro: boolean }
  | { key: string; free: { kind: "text"; tk: TranslationKey }; pro: ... };
```

Works as-is. Just looks odd.

### 43. `FAQ` `faqKeys` count is hardcoded to `10`
[components/FAQ.tsx:7](components/FAQ.tsx#L7). If you add an `faq.q11` to the dictionary, you also have to remember to bump this. Minor.

### 44. `Marquee` has `aria-hidden="true"` on the whole component
[components/Marquee.tsx:27](components/Marquee.tsx#L27). Correct — it's decorative. Just noting it's a deliberate choice.

### 45. `country-flag-icons` import via `dangerouslySetInnerHTML`
[components/LanguageToggle.tsx:8-11](components/LanguageToggle.tsx#L8-L11). The package's SVG strings are trusted, but the pattern is an XSS time-bomb if anyone ever forks/swaps the source. Consider rendering SVGs as React components instead (`country-flag-icons/react/3x2`).

### 46. `BlogPostFrame` `relatedGuides[].title` is hardcoded English
Same pattern as the index. Not a separate fix, just confirms the scope of finding #10.

### 47. `screenshots/measure2.jpg` — the "2" suffix suggests it replaced an old `measure.jpg`
[components/Screenshots.tsx:10](components/Screenshots.tsx#L10) references `measure2.jpg`. Confirm there's no stale `measure.jpg` anywhere. (Quick check: not in `/public/screenshots`. OK.)

### 48. `Header` scroll progress bar reads `scrollHeight` once on mount and recomputes only on resize
[components/Header.tsx:37-65](components/Header.tsx#L37-L65). If lazy-loaded images shift document height after page is interactive, the progress bar will drift. Probably fine in practice given `cv-auto` reserved spaces. Worth knowing.

### 49. Welcome email HTML uses `&middot;` and `&mdash;` entities — fine in HTML, but the plain-text version mixes punctuation inconsistently
Cosmetic. Resend will render both.

### 50. `next-env.d.ts` is tracked in git
The Next.js docs say not to. Auto-regenerated. Same minor hygiene as #37.

---

## Severity summary

| # | Severity | Count | Examples |
|---|----------|------:|----------|
| 🔴 | **CRITICAL** | 7 | RSS dates, hreflang, i18n not crawlable, Supabase key duplication + RLS check, missing honeypot, dead social links, source-of-truth drift |
| 🟠 | **HIGH** | 13 | Hardcoded EN strings in 5 spots, `en-US` date format, 567 KB hero image, 4.5 MB map slider, proxy matcher gaps, flag bundle bloat, no apple-touch-icon, JSON-LD contradicting analytics, markdown parser bug, perf hot loops, locale CLS |
| 🟡 | **MEDIUM** | 18 | Rate limiter weakness, info-leak in API response, Resend deliverability, no Escape/focus in menus, `useReveal` double-fire, sitemap lies, leftover starter assets |
| 🟢 | **LOW** | 12 | Type ergonomics, magic numbers, repo hygiene, `dangerouslySetInnerHTML` patterns |
| | **Total** | **50** | |

## Launch-blocker shortlist

If you only fix these before going live:

1. **#4 — verify Supabase RLS on `waitlist`**. Don't launch without this confirmed.
2. **#1 — RSS pubDates**. One commit, big credibility win.
3. **#5 — honeypot the newsletter form**. You'll get hit otherwise.
4. **#6 — kill or wire up the dead TikTok/Reddit links**.
5. **#11 — re-run the screenshot optimizer + crunch the maps**. Single biggest perf win.
6. **#15** + **#38** — the privacy meta description + the `<html lang>`. Both are five-character changes.
7. **#23 / #24** — verify the `sweeptrack.pro` Resend domain, set `RESEND_FROM_EMAIL`, add SPF/DKIM/DMARC. Welcome emails will otherwise spam-folder.
8. **#8 — translate `StatsBar`** and the 4 inline English strings inside otherwise-translated components.
