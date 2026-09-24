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
- `components/PageSection.tsx`: shared layout blocks for the feature pages (hero, section, item grid, plan comparison, closing)
- `components/Hero.tsx` + `HeroTrackDemo.tsx`: homepage hero, a real screenshot with one sweep drawn over it
- `components/MapCompareSlider.tsx`: historical topo vs satellite comparison (real app screens)
- `components/Spotlight*.tsx` + `SpotlightCopy.tsx`: animated feature diagrams sharing one copy column
- `dictionaries/*.json`: 14 locales; every file must have the same key set

## Design Rules (keep the site from looking generated)
- Headings are left-aligned serif (`font-display`), one color, no trailing period. Never color the last words of a heading green.
- No eyebrow/kicker labels (small uppercase mono text) above headings.
- Green is a signal color: primary buttons, links, the GPS track. No glows or decorative accents.
- Motion only where it shows how the app works (hero track, Spotlight diagrams). No scroll fade-ins, count-ups, typewriters, cursor effects, floating chips, pulsing rings, or orbiting borders.
- Real app screenshots only. `radar.jpg` and `waypoints.jpg` are still "coming soon" placeholders; don't show them.
- No invented details: map pins, stats, and dates must match what the image or app actually shows.
- Copy is plain and specific: no triads ("Plan. Track. Review."), no "not X, but Y", no lines about the page itself, no em dashes.
- Mention Founder's Lifetime at most once per page.

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
