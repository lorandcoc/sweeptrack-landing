# SweepTrack Field Band — QR Funnel

The tracked link that every embroidered band, share card, and ambassador code
points at. Zero backend: install attribution rides on Google Play's own
`referrer` param, web-side scan counts ride on GA4.

## How it works

```
band QR  ──▶  https://sweeptrack.pro/b/{CODE}
                     │  fires GA4 event "band_scan" { band_code: CODE }
                     ▼
   https://play.google.com/store/apps/details?id=com.sweeptrack.native
       &referrer=utm_source%3Dband%26utm_medium%3Dqr%26utm_campaign%3D{CODE}
                     │  Play Install Referrer delivers the campaign to Play Console
                     ▼
            install ──▶ RevenueCat conversion
```

Files: `app/b/[code]/page.tsx`, `app/b/[code]/BandRedirect.tsx`, `app/b/page.tsx`,
helper `lib/playStore.ts`. Pages are `noindex`. A bare `/b` (URL trimmed off a
band) falls back to campaign `BAND_GENERIC`. No-JS scanners get a `<meta refresh>`.

## Code scheme

Codes are free-form `[A-Z0-9_-]`, max 32 chars, auto-upper-cased. Keep them
human-readable so you can eyeball Play/GA reports. Suggested convention:

| Audience            | Pattern            | Example        |
|---------------------|--------------------|----------------|
| Association batch   | `ASSOC{nn}`        | `ASSOC07`      |
| Seeded creator      | `YT-{handle}`      | `YT-HOOVERBOYS`|
| Earned (in-app)     | `EARN-{username}`  | `EARN-LORAND`  |
| Ambassador          | `AMB-{name}`       | `AMB-MARIA`    |
| Event / dig         | `DIG-{place}-{mm}` | `DIG-CLUJ-06`  |

One code per band (or per ambassador, who hands out a small batch) keeps
attribution meaningful. There's no registry to maintain — a code "exists" the
moment you print it; keep your own list (a spreadsheet) of code → who got it.

## Generate the printable QR (no repo deps)

```bash
# PNG for the embroidery/print supplier, high error-correction (survives a
# stitched/curved surface), quiet-zone margin, ~1200px.
npx qrcode "https://sweeptrack.pro/b/ASSOC07" -e H -m 2 -w 1200 -o assoc07.png
```

Or batch from a list:

```bash
while read code; do
  npx qrcode "https://sweeptrack.pro/b/$code" -e H -m 2 -w 1200 -o "qr-$code.png"
done < codes.txt
```

Tip: a single generic `https://sweeptrack.pro/b/BAND` QR is fine for the *first*
embroidery run (one art file) — you still get total band installs in Play
Console. Move to per-code QRs (stickers on the back of each band, or per
ambassador) once you want to compare who drives installs.

## Read the numbers

- **Installs per code (the real KPI):** Play Console → *Acquisition → Acquisition
  reports* (or *Store performance → Traffic sources*), filter/group by
  `utm_campaign`. This is server-truth from Google — it works even if the GA web
  event is missed.
- **Scans (clicks) per code:** GA4 → *Reports → Engagement → Events → `band_scan`*.
  Register `band_code` (and `campaign`) as **custom dimensions** in GA4 Admin to
  break scans down by code.
- **Conversions:** RevenueCat dashboard (Founder / annual / monthly), cross-
  referenced with the install spike from a band drop.
- **Loop ROI:** `revenue attributed to band codes ÷ band cost`. At ~€3/band, even
  one install that later subscribes pays the band back many times.

## Test before a batch

1. Visit `https://sweeptrack.pro/b/TESTCODE` on a phone → confirm the brand splash
   then the Play listing opens.
2. Check GA4 Realtime for the `band_scan` event with `band_code = TESTCODE`.
3. After install, confirm the campaign shows in Play Console acquisition (allow a
   day for Play to aggregate).
4. Only then order the embroidered run.
