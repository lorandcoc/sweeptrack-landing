# SweepTrack Pro Landing Page — Project Guide

## Critical Rules

### ALWAYS Check Git Before Making Changes
Before writing ANY code, run `git log --oneline -10` and `git diff HEAD` to understand what's already been done. Never re-implement existing work. Verify the current state of the codebase first. This is the #1 rule — violating it wastes tokens and time.

## Stack
- Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript
- Deployed to Vercel (auto-deploys from GitHub on push)
- Domain: sweeptrack.pro

## Key Files
- `app/layout.tsx`: root layout, fonts (Source Serif 4 headings, Inter body, JetBrains Mono for data), metadata
- `components/LandingPage.tsx`: homepage sections + JSON-LD, rendered by `app/page.tsx` and `app/[locale]/page.tsx`
- `app/globals.css`: tokens, heading styles, and the animations the product demos use
- `components/PageSection.tsx` + `InfoCard.tsx` + `Badge.tsx`: shared layout blocks for the feature pages (hero, section, card grid, plan comparison, closing). They read the page colour from `--pa`, which each page sets with `accentStyle()` from `lib/accent.ts` on `<main>`
- `components/FeatureBento.tsx`, `StatsBand.tsx`, `PricingTable.tsx` (plan cards + comparison table): the homepage's feature hierarchy, figures and pricing
- `components/Reveal.tsx`: scroll reveal (`.rv` in `globals.css`); `components/BackToTop.tsx` is rendered by `Footer`
- `components/Hero.tsx` + `HeroTrackDemo.tsx`: homepage hero, a real screenshot with one sweep drawn over it
- `components/MapCompareSlider.tsx`: historical topo vs satellite comparison (real app screens)
- `components/Spotlight*.tsx` + `SpotlightCopy.tsx`: animated feature diagrams sharing one copy column
- `dictionaries/*.json`: 14 locales; every file must have the same key set
- `components/BlogPostFrame.tsx` + `.post-body` in `app/globals.css`: blog posts are plain semantic HTML (`h2`, `h3`, `p`, `ul`/`ol`, `blockquote`, `figure`, `strong`, `em`, links) with no styling classes; the only classes are `.post-note` (asides), `.post-letter` (fill-in templates), `.post-table` (a wrapper around a `table`) and `.post-shot` (a figure holding a phone screenshot). Pass `updatedDate` to the frame, `blogMeta`, `articleJsonLd` and `lib/posts.ts` after a substantial rewrite. `MapCompareStage` from `MapCompareSlider.tsx` embeds the old map vs satellite slider in a post
- `lib/playStore.ts`: Google Play URLs. Links on the site use `useSitePlayUrl()` (client) or `sitePlayUrl("page")` (server) so Play Console attributes installs per page; only JSON-LD uses the bare `PLAY_URL`

## Design Rules
On 2026-09-30 the owner asked for the design of ro.sweeptrack.pro (repo `sweeptrack-ro-site`) to be applied here, replacing the restrained 2026-09-24 look. The two sites share these rules; keep the shared components diffable against the RO ones.
- **Feature hierarchy is visible on the homepage.** The old-map comparison is the flagship section (gold wash, badges, large heading). Then `FeatureBento`: two large image cards (tracking, map overlays), three cards (Finds Intelligence, Radar, permissions), and every other tool as chips linking to /features.
- **One colour per feature, used everywhere:** tracking green `--accent`, maps and overlays gold `--st-gold`, finds cyan `--st-cyan`, Radar blue `--st-sky`, permissions orange `--st-orange`. Pro badges are gold, Free badges green.
- **Pricing is loud:** three plan cards (Free / Pro with an annual-monthly switch / Founder's Lifetime with the turning gold border) above the comparison table. The Free and Pro card lists are built from the comparison rows, so they can't drift from the table. Label the annual plan "Recommended", never "Most popular" (not provable). Prices must match Google Play exactly: $19.99/year, $3.49/month, and Founder's Lifetime $39.99 (confirmed by the owner on 2026-09-30). They live in `pricing.pro_price`, `pricing.price_monthly`, `pricing.founder_price`, `pricing.pro_sublabel`, `pricing.badge_save` and `faq.a8` (all 14 dictionaries) and in the homepage JSON-LD offers; change them together.
- **Motion is welcome where it adds life:** scroll reveal (`Reveal`, below the fold only), hover lift on cards, count-up stats, the gold Founder border, the breathing Pro glow. Every animation must stop under `prefers-reduced-motion`, and revealed content must stay visible without JavaScript.
- Headings stay serif (`font-display`), one color, no trailing period. Small uppercase badges above headings are allowed.
- The desktop nav appears from `xl` (1280px): with six links, the language toggle and the Play button, several locales don't fit below that.
- Real app screenshots only. `radar.jpg` and `waypoints.jpg` are still "coming soon" placeholders; don't show them.
- No invented details: map pins, stats, and dates must match what the image or app actually shows. The `StatsBand` figures (45+ tools, 14 languages, 4 offline sources, $0) repeat claims made elsewhere on the site; change them together.
- Copy is plain and specific: no triads ("Plan. Track. Review."), no "not X, but Y", no lines about the page itself, no em dashes.
- Blog post pages keep their plain editorial style (`.post-body`); only the blog index uses cards.

## Branding
- App name: **SweepTrack Pro** (no space between Sweep and Track)
- Brand: "by Loriba"
- Accent color: #00FF6A (Tactical green)
- Background: #0A0A1A

## Language Rules
- **NEVER use "hunt", "hunting", "hunter", or any hunting-derived language.** This is a metal detecting app, NOT a hunting app. The same applies to Romanian ("vânătoare", "vânător", etc.).
- Use metal-detecting terminology: **session**, **detecting trip**, **dig**, **outing**, **detectorist**, **detecting buddy**, **fellow detectorists**.
- "Bounty Hunter" is acceptable ONLY as a detector brand name.

## Deployment
- GitHub: github.com/lorandcoc/sweeptrack-landing
- Vercel: sweeptrack-landing.vercel.app
- Push to `master` → auto-deploy
