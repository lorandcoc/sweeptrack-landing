# SweepTrack Pro Landing Page — Project Guide

## Critical Rules

### ALWAYS Check Git Before Making Changes
Before writing ANY code, run `git log --oneline -10` and `git diff HEAD` to understand what's already been done. Never re-implement existing work. Verify the current state of the codebase first. This is the #1 rule — violating it wastes tokens and time.

## Stack
- Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript
- Deployed to Vercel (auto-deploys from GitHub on push)
- Domain: sweeptrack.pro

## Key Files
- `app/layout.tsx` — Root layout, fonts, metadata, orbs + noise overlay
- `app/page.tsx` — Landing page composition
- `app/globals.css` — All animations, themes, utility classes
- `components/Hero.tsx` — Hero with shimmer text, stats, ParallaxPhone
- `components/Features.tsx` — 3 spotlight + 9 staggered compact cards
- `components/Screenshots.tsx` — Auto-play carousel with 3D perspective
- `components/ThemeShowcase.tsx` — 12 themes + Night Vision with wave animation
- `components/CTA.tsx` — Download CTA with pulse ring + gradient shift
- `components/AnimatedCounter.tsx` — Count-up animation on scroll
- `components/ParallaxPhone.tsx` — Mouse parallax + star field

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
