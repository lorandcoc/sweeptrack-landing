# Privacy Policy

**SweepTrack Pro** — GPS Tracking Application for Metal Detecting

Effective Date: May 12, 2026 · Last Updated: May 26, 2026

Operated by: Coc Lorand Adrian P.F.A., trading as "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Introduction

This Privacy Policy explains how SweepTrack Pro ("the App") and the website at sweeptrack.pro ("the Website") collect, use, store, and protect your information. We are committed to protecting your privacy and ensuring transparency about our data practices.

The App is designed with a **privacy-first architecture**: all detecting data is stored locally on your device, we do not operate backend servers for the App, and we do not collect, transmit, or sell your personal detecting data. The Website operates separately and has its own data practices, described in Section 4.

## 2. Data Controller

For the purposes of the EU General Data Protection Regulation (GDPR) and Romanian data protection law (Law 190/2018), the data controller is:

**Coc Lorand Adrian P.F.A.** (trading as Loriba)
CUI: 41299288 · Reg. F24/646/2019
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Data We Collect (Android App)

### 3.1 Data Stored Locally on Your Device

The following data is created by you and stored **exclusively on your device**. We never have access to this data unless you explicitly share it.

**Location and Session Data:**

- GPS coordinates (latitude, longitude) during active tracking sessions
- Speed, altitude, heading, and accuracy readings from device sensors
- Session metadata: name, date, start/end time, duration, distance, tags
- Path coordinates with timestamps
- Location names (obtained via reverse geocoding)

**Find and Discovery Records:**

- Find type (Treasure, Gold, Coin, Relic, Jewelry, Trash)
- Find location (GPS coordinates at time of logging)
- Optional metadata: name, notes, depth, estimated value, weight
- Media attachments: photographs and audio recordings

**Permission Vault Data:**

- Site names and locations
- Landowner names and contact information
- Permit numbers, issue dates, expiry dates
- Site boundary coordinates (polygon)
- Digital signatures (SVG format)
- Custom tags and notes

**Other Local Data:** Detector preset configurations, app preferences (theme, units, language, map settings), and weather snapshots associated with sessions.

### 3.2 Data Processed Temporarily (Not Stored)

The following data is sent to third-party APIs for real-time functionality and is **not stored by us or by these services beyond the immediate request**:

- Approximate GPS coordinates sent to Open-Meteo for weather forecasts and elevation data
- Approximate GPS coordinates sent to OpenStreetMap/Nominatim for address lookup
- Approximate GPS coordinates sent to Overpass API for nearby historical POI discovery
- Approximate GPS coordinates sent to Wikipedia API for nearby article geosearch
- Tide station identifiers sent to NOAA for tide predictions
- Location search queries sent to Open-Meteo Geocoding for place name search

### 3.3 Data Processed by Third-Party Services

**Google Maps SDK:** Your device's location is processed by Google Maps for map display. Subject to [Google's Privacy Policy](https://policies.google.com/privacy).

**Google Sign-In and Google Drive (Optional):** If you enable Google Drive backup, your Google account email is stored locally to identify the authenticated account. Backup data is uploaded to your own Google Drive account. We do not have access to your Google Drive.

**RevenueCat (Subscription Management):** An anonymous, randomly generated app user identifier is used for subscription verification. No personal information is shared. Subject to [RevenueCat's Privacy Policy](https://www.revenuecat.com/privacy).

**Firebase Analytics and Crashlytics (Optional — Disabled by Default):** Two Google Firebase SDKs are integrated in the App, but **both remain dark until you explicitly opt in** via the first-run consent prompt or **Settings → Privacy → Diagnostics**. Until you opt in, no events are sent and no crash reports are uploaded. You can revoke consent at any time; revocation takes effect on the next event. Debug builds never enable Crashlytics.

When enabled:

- **Firebase Analytics** logs eight aggregate event names with non-identifying parameters: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Event payloads **never** include GPS coordinates, addresses, find names, photographs, audio recordings, vault data, or any personally identifying information — only counts, durations, distances, find types (category only), and feature identifiers. The `find_logged` event reports type as a coarse category (`valuable`, `find`, `trash`, `unsorted`) rather than the specific find type, so the aggregate dashboard cannot infer the distribution of valuables an individual user logs.
- **Firebase Crashlytics** uploads crash stack traces with device model, OS version, and app version to help us diagnose bugs. Before any crash or non-fatal error is forwarded to Crashlytics, the App **scrubs coordinate-shaped substrings from the exception message** (e.g. `lat=`/`lon=` patterns, signed decimals with three or more fractional digits) so GPS positions cached in local variables cannot leak through error reporting. Stack frames (class, method, line) are preserved for grouping; runtime values are not. A process-wide uncaught-exception handler applies the same scrubbing to fatal crashes captured automatically by the SDK.

Both services are subject to [Google's Privacy Policy](https://policies.google.com/privacy) and [Firebase Privacy and Security disclosures](https://firebase.google.com/support/privacy).

### 3.4 Data the App Does NOT Collect

- **The App** does not collect your name, email, phone number, or any personal identifiers
- **The App** does not use analytics or crash reporting unless you explicitly opt in (see the Firebase section above; opt-in is off by default and revocable at any time in Settings → Privacy → Diagnostics)
- **The App** does not use advertising frameworks or ad identifiers
- **The App** does not track usage patterns, session frequency, or feature usage
- **The App** does not create user profiles or behavioral fingerprints
- **The App** does not share, sell, rent, or trade any data with third parties
- **The App** does not operate any servers that receive, process, or store your detecting data

Website data practices are covered separately in Section 4.

## 4. Website Data Practices (sweeptrack.pro)

This section covers data practices specific to our website at sweeptrack.pro. The Android App described in Sections 3 and 5–18 operates independently and does not share infrastructure with the Website.

### 4.1 Waitlist Email Collection

When you submit your email through any waitlist form on the Website, we collect:

- **Email address** you provide
- **Timestamp** of signup
- **IP address** (transient) — used for rate-limiting; not stored beyond the duration of the request

**Purpose:** To notify you when SweepTrack Pro launches on Google Play and send pre-launch updates about the product and the Founder's Lifetime offer. We will not use your email for any other purpose, will not share it, and will not sell it.

**Legal basis (GDPR):** Consent (Art. 6(1)(a)) — provided when you submit the form.

**Storage:** Email addresses are stored in a Supabase Postgres database hosted in the EU (Ireland region). Supabase, Inc. acts as our data processor under their standard Data Processing Agreement.

**Email delivery:** Outbound emails are sent via Resend, Inc. (EU region, Ireland) acting as our email service processor under their standard Data Processing Agreement.

**Retention:** Until you unsubscribe, or 12 months after the public launch of SweepTrack Pro on Google Play, whichever comes first.

**Unsubscribe:** Reply "remove" to any email we send, or use the List-Unsubscribe link your email client renders (Gmail and Outlook display this next to the From address).

**Your rights:** Access, rectification, erasure, restriction, portability, and the right to withdraw consent. Email [support@sweeptrack.pro](mailto:support@sweeptrack.pro) to exercise any of these.

### 4.2 Website Analytics

The Website uses:

- **Vercel Analytics** — privacy-respecting analytics that do not use cookies and do not store individual IP addresses. Measures aggregate page views only.
- **Vercel Speed Insights** — Core Web Vitals measurement (page load timing, layout shift, interaction delays) on an aggregated basis.

Both tools are operated by Vercel Inc. and subject to [Vercel's Privacy Policy](https://vercel.com/legal/privacy-policy). They do not collect personally identifiable information and do not create user profiles.

### 4.3 Cookies

The Website does not set first-party cookies for tracking, advertising, or profiling. Vercel Analytics is cookieless by design. A locale preference, if you change it, is stored in your browser's `localStorage` (not a cookie) and is only readable by your own browser.

### 4.4 Hosting and Server Logs

The Website is hosted by Vercel Inc. Vercel may automatically log standard request metadata (IP address, user agent, request path, timestamp) for operational, performance, and security purposes. These logs are retained per Vercel's standard policies and are not used by us for tracking or profiling individuals.

### 4.5 Your Rights for Website Data

The same GDPR, UK GDPR, Australian, Canadian, CCPA, LGPD, and NZ Privacy Act rights described in Section 10 apply equally to your Website-collected data. To exercise any right with respect to your waitlist email, contact [support@sweeptrack.pro](mailto:support@sweeptrack.pro). We will respond within 30 days.

## 5. Legal Basis for Processing (GDPR)

- **GPS/session data, find records, vault entries:** Consent (Art. 6(1)(a)) — you actively initiate these actions
- **API calls (weather, geocoding):** Legitimate interest (Art. 6(1)(f)) — necessary for core functionality
- **Google Drive backup:** Consent (Art. 6(1)(a)) — you explicitly enable and authenticate
- **Subscription verification:** Contract performance (Art. 6(1)(b)) — necessary to provide paid features
- **Firebase Analytics and Crashlytics (optional):** Consent (Art. 6(1)(a)) — opted in via the first-run prompt or Settings, revocable at any time
- **Waitlist email (Website):** Consent (Art. 6(1)(a)) — see Section 4.1

You may withdraw consent at any time by stopping the relevant activity, by uninstalling the App, or by unsubscribing from Website emails.

## 6. How We Use Your Data

All App data processing occurs **locally on your device**. We use App data exclusively to provide the App's features: map display, session tracking, find logging, permission management, weather/tide data, exports, backup, and subscription verification.

Website data (your waitlist email) is used only to send launch and pre-launch communications as described in Section 4.

## 7. Data Storage and Security

**App data:**

- Session and find data stored in a Room (SQLite) database in the App's sandboxed private storage on your device — protected by Android's app-isolation model and the device's user-data encryption at rest
- Sensitive preferences use Android's EncryptedSharedPreferences (AES-256)
- Media files stored in the App's private internal storage, inaccessible to other apps
- Android cloud backup **disabled** (`android:allowBackup="false"`) to prevent unintended data exposure
- Google Drive backups use Google's encrypted APIs (HTTPS/TLS) and exist solely in your account

For the App, we do not operate any servers, databases, or cloud infrastructure that store your detecting data.

**Website data:** Waitlist emails are stored in a Supabase Postgres database hosted in the EU (Ireland). Connections are encrypted (TLS). Access is restricted to administrative purposes only. Outbound email is sent via Resend (EU, Ireland) over TLS. See Section 4.

## 8. Data Retention

**App data:** Local data is retained until you choose to delete it. You can delete individual items within the App, clear all data via Android Settings, or uninstall the App. Google Drive backups persist until you manually delete them from your account.

**Website data:** Waitlist emails are retained until you unsubscribe, or 12 months after public launch, whichever comes first. After that, addresses are deleted from the Supabase database.

## 9. Data Sharing and Disclosure

We do not share, sell, rent, or disclose your personal data to any third party. You may choose to share App data through exports (GPX, KML, CSV, JSON), session share cards, or Google Drive backup — all user-initiated. Website waitlist data is processed only by our named processors (Supabase, Resend) for the purposes described in Section 4.

## 10. Your Rights (GDPR and International)

### GDPR Rights (EU/EEA Residents)

- **Access** — your App data is fully accessible on your device; for Website data, email [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
- **Rectification** — edit all records directly in the App, or email us for Website data corrections
- **Erasure** — delete via in-app deletion or uninstalling; for Website data, unsubscribe or email us
- **Restriction** — control all processing by starting/stopping features
- **Data Portability** — export App data via GPX, KML, CSV, JSON
- **Objection** — stop any feature at any time
- **Withdraw Consent** — at any time without affecting prior processing

### United Kingdom (UK GDPR)

Your rights under the UK GDPR and Data Protection Act 2018 are equivalent to the GDPR rights above. You may contact the [ICO](https://ico.org.uk).

### Australia (Privacy Act 1988)

You have rights under the Australian Privacy Principles (APPs) including access and correction. You may contact the [OAIC](https://www.oaic.gov.au).

### Canada (PIPEDA)

You have rights under PIPEDA and applicable provincial privacy legislation including access, correction, and consent withdrawal. You may contact the [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca).

### California Residents (CCPA/CPRA)

We do **not** sell or share any personal information. We do not use data for cross-context behavioral advertising. You have rights to know, delete, limit sensitive data use, and non-discrimination.

### Brazilian Residents (LGPD)

Equivalent rights under the Lei Geral de Proteção de Dados apply. You may contact the [ANPD](https://www.gov.br/anpd).

### New Zealand (Privacy Act 2020)

You have rights under the Privacy Act 2020 including access and correction. You may contact the [NZ Privacy Commissioner](https://www.privacy.org.nz).

### Other Jurisdictions

Regardless of your location, you have full control over your data. Where local law grants additional privacy rights that cannot be waived by contract, those rights apply.

## 11. Children's Privacy

Neither the App nor the Website is directed at children under 18. The App's intended user is an adult metal detectorist; many features (permission-vault permits, landowner agreements, digital signatures, paid subscriptions) require legal adult status in most jurisdictions. We do not knowingly collect personal information from children under 18. If you believe a child has used the App or Website, you can delete their data by clearing App data, uninstalling, or unsubscribing from the waitlist.

## 12. Permissions Explained (App)

- **ACCESS_FINE_LOCATION** — GPS for path tracking during sessions
- **ACCESS_BACKGROUND_LOCATION** — continue tracking when screen is off
- **CAMERA** — capture photos for find logging
- **RECORD_AUDIO** — record audio notes for finds
- **READ/WRITE_CALENDAR** — write permission vault expiry reminders to your device's local calendar. If you have cloud calendar sync enabled in Android (e.g., Google Calendar sync), those reminder events will sync to your account along with the rest of your calendar — that sync is controlled by your Android settings, not the App
- **INTERNET** — weather, geocoding, tides, maps, subscriptions
- **POST_NOTIFICATIONS** — GPS tracking notification
- **VIBRATE** — perimeter guard boundary alerts

You may revoke any permission at any time through Android Settings.

## 13. Cookies and Tracking

**The App** does not use cookies, web beacons, pixel tags, device fingerprinting, or any other tracking technologies. **The Website** does not set first-party cookies; see Section 4.3 for full Website cookie disclosure.

## 14. International Data Transfers

**App data:** Since all detecting data is stored locally on your device, no international data transfers occur under our control. Third-party API calls may be processed in jurisdictions where those services operate.

**Website data:** Waitlist emails are stored in the EU (Ireland) by Supabase and processed by Resend (EU, Ireland). If you are accessing the Website from outside the EU, your email is transferred to the EU for processing.

## 15. Data Breach Notification

**App:** Since we do not store your detecting data on any server we operate, a data breach affecting App data on our end is not possible. If we become aware of a vulnerability in the App, we will issue an update and notify users through the App or website.

**Website:** Our processors (Supabase, Resend) maintain their own breach notification protocols. In the unlikely event of a breach affecting your waitlist email, we will notify you and the relevant supervisory authority (ANSPDCP) within 72 hours as required by GDPR.

## 16. Changes to This Policy

We may update this Privacy Policy to reflect changes in functionality or applicable laws. The "Last Updated" date will be revised. Material changes will be communicated via the App or website.

## 17. Third-Party Privacy Policies

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [Firebase (Analytics and Crashlytics — opt-in only)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Website hosting + analytics)
- [Supabase](https://supabase.com/privacy) (Website database)
- [Resend](https://resend.com/legal/privacy-policy) (Website email)

## 18. Contact Us

**Coc Lorand Adrian P.F.A.** (trading as Loriba)
CUI: 41299288 · Reg. F24/646/2019
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

For GDPR-related inquiries, you may also contact ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) at [dataprotection.ro](https://www.dataprotection.ro).

---

This Privacy Policy is effective as of May 12, 2026 and applies to all versions of SweepTrack Pro.
