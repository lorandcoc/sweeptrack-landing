# assetlinks.json — Digital Asset Links for `https://sweeptrack.pro`

`assetlinks.json` cannot carry comments, so provenance and the remaining action
live here.

## Current statement: `com.sweeptrack.radar` (SweepTrack Radar)

Grants `delegate_permission/common.handle_all_urls` so Android App Links
(`https://sweeptrack.pro/r/{CODE}` invite links) open the Radar app directly
once the app ships a verified `https` intent-filter.

Fingerprints currently listed (source: Radar repo `CONSOLE-SETUP.md` §1):

| # | Certificate | SHA-256 |
|---|---|---|
| 1 | **Upload/release key** (`radar-release.jks`) | `0A:E9:38:BB:D3:15:F8:79:0C:40:97:40:3D:72:38:FB:46:1D:9A:57:58:4F:73:67:D3:29:98:4E:6A:3F:5B:70` |
| 2 | **Local debug key** (`~/.android/debug.keystore`) | `A4:82:1D:9B:25:C5:60:51:F9:D8:F4:37:A5:38:86:11:F1:B3:58:08:00:8D:E2:FF:5F:31:41:99:98:0F:33:75` |

These cover **sideloaded/internal builds (upload key)** and **local debug
builds** — enough to test App Links verification end-to-end before launch.

## ⚠ REQUIRED BEFORE PRODUCTION: add Google's app-signing certificate

Production installs from Google Play are **re-signed by Google** (Play App
Signing), so neither fingerprint above matches what real users run. Without
Google's certificate, App Links verification **fails for every Play install**
and invite links fall back to the browser interstitial.

After Play App Signing enrollment:

1. Play Console → **Test and release → Setup → App integrity → App signing**.
2. Copy the **App signing key certificate** SHA-256 fingerprint.
3. **Append** it to the `sha256_cert_fingerprints` array for
   `com.sweeptrack.radar` in `assetlinks.json` (do not remove the existing
   entries).
4. Redeploy the site, then verify with:

   ```
   https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://sweeptrack.pro&relation=delegate_permission/common.handle_all_urls
   ```

   and on-device: `adb shell pm verify-app-links --re-verify com.sweeptrack.radar`
   (then `adb shell pm get-app-links com.sweeptrack.radar` should show
   `sweeptrack.pro: verified`).

## Adding other apps later

`assetlinks.json` is a JSON **array of statements** — append a new
`{ relation, target }` object per app (e.g. `com.sweeptrack.native` if Pro ever
handles `https` links); never replace the file wholesale.
