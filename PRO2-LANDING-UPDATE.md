# SweepTrack Pro 2.0 — Landing Page Update Brief

> **Purpose:** the SweepTrack Pro Android app was repositioned from a "generous free tracker" to a real freemium model ("Pro 2.0"). The marketing site (`sweeptrack-landing`) and the Google Play listing still describe the **old** free tier ("unlimited sessions, unlimited finds") and must be updated to match, or the app contradicts its own advertising. This doc is the source of truth for that update. Pricing is **unchanged**; only the free/Pro feature split and the new features changed.

---

## 1. The change in one paragraph

The free tier used to be nearly complete (unlimited everything). It's now a usable-but-minimal tier, and the recurring, high-value parts of metal detecting are Pro. Three new Pro features were added (Finds Intelligence, Map Overlays, and a rebuilt paywall). **Existing users who installed before this update are grandfathered** — they keep unlimited sessions and full find records forever. But the landing page sells to **new** downloaders, so the public free-tier copy must reflect the **new-user** limits below.

**Metal-detecting brand rule:** never use "hunt/hunting" language anywhere (it's a *detecting* app). Use detect / detecting / session / detectorist / find.

---

## 2. The authoritative Free vs Pro split (update the pricing table to this)

| Capability | Free (new users) | Pro |
|---|---|---|
| **GPS session recording** | **10 sessions / month** | Unlimited |
| **Find logging** | Basic: type, name, notes, **1 photo** | **Pro records:** value, depth, weight, signal/VDI, soil type, audio notes, video, multi-photo |
| **Waypoints (saved site pins)** | **5** | Unlimited |
| **Data export (GPX / KML / CSV / JSON)** | — (none) | All formats |
| **Tide tables** | — | ✓ |
| **Weather forecast** | Basic (2-day) | Extended / 7-day |
| **Statistics** | Basic lifetime totals | **Advanced:** trends, period deltas, top sites/sessions, insights |
| **Find-density heatmap (Find Search)** | — | ✓ |
| **Finds Intelligence dashboard** *(NEW)* | — | ✓ |
| **Map Overlays / import your own map** *(NEW)* | **1 overlay** (teaser) | Unlimited |
| Detector presets | 1 | Unlimited |
| Permission Vault entries | 1 (no PDF / boundary) | Unlimited + PDF letter + boundary (Vault PRO) |
| Live-session heatmap | — | ✓ |
| Offline map packs | — | ✓ |
| Historical map overlay | — | ✓ |
| Session comparison | — | ✓ |
| Multi-session overlay / back-to-start | — | ✓ |
| Perimeter guard | — | ✓ |
| Night vision | — | ✓ |
| Google Drive backup | — | ✓ |
| Themes | 3 | All 12 |
| Gallery, compass, ruler, measure tool, find search, share card | ✓ | ✓ |

> Everything below the double line in the table (presets through share card) was already split this way in the live site — they're included so the full picture is in one place. The rows that **changed** in Pro 2.0 are the top block (sessions, finds, waypoints, export, tides, forecast, statistics, find-heatmap, Finds Intelligence, Map Overlays).

---

## 3. The three new Pro features (marketing copy starting points)

**Detect without limits** — Pro removes the 10-session/month cap and unlocks the full find record (value, depth, signal, soil, audio & video notes, multi-photo), unlimited waypoints, all-format export, and cloud backup.

**Know where to dig next — Finds Intelligence** — a dashboard that turns your logged finds into insight: finds-per-hour, your most productive time of day, breakdowns by detector / find-type / site, total collection value over time, and a **value-weighted hot-zone map** (a single gold ring outshines a pile of pull-tabs, so it points you at productive ground, not just busy ground).

**Pin your own maps to the ground — Map Overlays** — import a scanned old map, parcel sketch, or aerial photo and align it onto the live satellite map (drag to move, pinch to scale, twist to rotate), then detect with your own reference layer underneath your tracks. Free users get one overlay; Pro is unlimited.

Suggested hero line for the page: **"The free app tracks your detecting. Pro tells you where to dig next."**

---

## 4. Exact edits required

### 4a. `components/LandingPage.tsx` — Free plan JSON-LD `description` (~line 78)
- **From:** `"Core GPS tracking, unlimited sessions, unlimited finds, 1 detector preset, 1 Permission Vault entry, 3 themes"`
- **To:** `"Core GPS tracking, 10 sessions/month, basic find logging, 1 detector preset, 1 Permission Vault entry, 3 themes"`

### 4b. `dictionaries/*.json` (all 14 locales — translate the values)
| Key | Old value | New value |
|---|---|---|
| `pricing.feat_sessions_free` | "Unlimited" | **"10 / month"** |
| `pricing.feat_finds_free` | "Unlimited" | **"Basic"** (records count unlimited; rich fields are Pro) |
| `pricing.feat_export_free` | "JSON" | **"—"** / "None" |
| `statsbar.s1_label` | "Core app · unlimited sessions" | **"Core app · 10 sessions/month free"** |
- `pricing.feat_sessions_pro` / `feat_finds_pro` stay **"Unlimited"**.

### 4c. `components/PricingTable.tsx` — flip these rows `free: true → false`
(find by `key:`; line numbers are approximate)
| Row `key` | Why it's now Pro |
|---|---|
| `depth` (~73) | Pro find records |
| `audio` (~75) | Pro find records |
| `tidetable` (~86) | Tides now Pro |
| `advancedstats` (~106) | Advanced stats now Pro (basic totals stay free) |
- `export` (~118): set `pricing.feat_export_free` → "—" (no longer "JSON").
- `waypoints` (~89): convert to a string row like sessions/finds — free **"Up to 5"**, pro **"Unlimited"** (add 2 dict keys, e.g. `pricing.feat_waypoints_free` / `_pro`).
- `photo` (~74): stays free (1 photo is free); optionally note "multi-photo is Pro".
- **Add a new row:** `{ key: "findsintel", free: false, pro: true }` + `pricing.feat_findsintel` label ("Finds Intelligence dashboard").
- **Add a new row:** `{ key: "mapoverlay", free: "string", freeKey, pro: "string", proKey }` → free "1", pro "Unlimited" (or `free:false`/`pro:true` if you don't want the teaser nuance on the table).

### 4d. Marketing/feature sections
- Add **Finds Intelligence** and **Map Overlays** to any "all features" grid (`FeaturesAll.tsx`) under the `finds` / `map` categories.
- Metadata/SEO descriptions (`lib/landingMetadata.ts`, `app/layout.tsx`) can mention "Finds Intelligence" and "import your own maps" as headline capabilities.
- Optional blog note: the post "Logging Finds with Photos, Videos, and Audio Notes" describes media logging — add a small "Pro" tag since audio/video/multi-photo are now Pro (still available, just on Pro).

### 4e. Google Play Console (manual, outside this repo)
Update the store **long & short description** "free features" wording to match (10 sessions/month; Pro = full find records, advanced export/stats/tides, Finds Intelligence, Map Overlays). **Data Safety form needs no change.**

---

## 5. Pricing reference (UNCHANGED — do not edit)

- **Free** — $0
- **Pro Monthly** — $3.49/month, 14-day free trial
- **Pro Annual** — $19.99/year (save ~52% vs monthly), 14-day free trial
- **Founder's Lifetime** — $39.99 one-time (limited / first 1,000), includes a Founder badge + title

A SweepTrack Pro subscription also includes Radar Premium (the companion live-group app) — unchanged.

---

## 6. Grandfathering note (optional on-page reassurance)

If you want to soften the walk-back for the existing audience, you can add a one-liner like *"Already detecting with SweepTrack? Existing users keep unlimited sessions."* It's true (the app grandfathers pre-2.0 installs on the session cap + find records), but it's optional — the public free-tier copy should still show the new-user limits (10/month) because that's what a fresh download gets.
