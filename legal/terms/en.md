# Terms of Service

**SweepTrack Pro** — GPS Tracking Application for Metal Detecting

Effective Date: May 12, 2026 · Last Updated: May 26, 2026

Operated by: Coc Lorand Adrian P.F.A., trading as "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Acceptance of Terms

By downloading, installing, accessing, or using SweepTrack Pro ("the App") or the website at sweeptrack.pro ("the Website"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App or the Website. "We," "us," and "our" refer to Coc Lorand Adrian P.F.A., trading as Loriba.

We reserve the right to modify these Terms at any time. Continued use of the App or Website after changes constitutes acceptance. Material changes will be communicated via the App or our website.

## 2. Description of Service

SweepTrack Pro is a GPS-based tracking and session logging application designed for metal detecting enthusiasts. The App provides:

- Real-time GPS tracking and path recording
- Session logging with distance, speed, altitude, and duration metrics
- Find/discovery logging with photo and audio attachments
- Weather forecasting and detecting condition scoring
- Tide table predictions (U.S. coastal stations via NOAA)
- Nearby historical and archaeological point-of-interest discovery
- Detector preset management for 60+ metal detector models
- Permission vault for managing landowner permissions and site access
- Perimeter guard with boundary alerts
- Offline map downloads
- Google Drive backup and restore
- Session export (GPX, KML, CSV, JSON) and comparison tools
- Calendar heatmap, statistics, and achievement tracking

The Website at sweeptrack.pro provides information about SweepTrack Pro, a pre-launch waitlist, and supporting content.

## 3. Eligibility

You must be at least 18 years of age to use the App or the Website. The App is designed for adult metal detectorists; many features (permission-vault permits, landowner agreements, digital signatures, paid subscriptions) require legal adult status in most jurisdictions, including Romania (OG 43/2000 detector-permit law).

By using the App or Website, you represent and warrant that you have the legal capacity to enter into a binding agreement in your jurisdiction.

## 4. Account and Authentication

The App does not require account creation. An optional Google Sign-In is available solely for the purpose of Google Drive backup and restore functionality.

You are responsible for:

- Maintaining the security of your Google account credentials
- All activity that occurs through your authenticated session
- Ensuring your Google account settings align with your privacy preferences

We do not store your Google account password. Authentication is handled entirely by Google's OAuth system.

## 5. Subscription and Payments

### 5.1 Free Tier

The App offers limited functionality at no cost, including:

- Unlimited sessions
- Up to 5 finds
- 1 detector preset slot
- Access to core tracking and mapping features

### 5.2 Premium Subscription

A premium subscription, managed through the Google Play Store and processed by RevenueCat, Inc., unlocks unlimited finds, sessions, and detector presets, plus advanced features including historical map overlays, offline maps, perimeter guard, cloud backup, and additional tools.

### 5.3 Founder's Lifetime

A limited Founder's Lifetime offer is available to the first 1,000 purchasers through the Google Play in-app purchase mechanism after the App is publicly available on Google Play. The Founder's Lifetime is a one-time payment that grants lifetime access to all Pro features. After 1,000 Founder's Lifetime purchases have been completed, the offer closes permanently and subsequent users access Pro features via the standard subscription described in §5.2.

Joining the pre-launch waitlist does not reserve a Founder's Lifetime slot. The cap is enforced at purchase time on a first-come-first-served basis among installed users.

### 5.4 Billing

- All payments are processed through Google Play Store
- Subscription pricing is displayed at the time of purchase
- Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period
- The Founder's Lifetime is a one-time, non-renewing purchase
- You may manage or cancel your subscription through Google Play Store settings

### 5.5 Refunds

Refund requests are handled by Google Play Store in accordance with their refund policies. We do not process refunds directly.

## 6. User Data and Privacy

### 6.1 Data Collected (App)

The App collects and stores the following data **locally on your device**:

- GPS coordinates, speed, altitude, and heading during active tracking sessions
- Session metadata (name, date, duration, distance, tags)
- Find/discovery records (type, location, name, notes, depth, value, weight)
- Media files (photos and audio recordings) captured within the App
- Permission vault entries (site names, landowner names, contact information, permit details, boundary coordinates, signatures)
- Detector preset configurations
- Weather snapshots associated with sessions
- App preferences (theme, units, language)

### 6.2 Data Storage (App)

- **All App data is stored locally on your device** in an encrypted database and local file storage
- **No App data is transmitted to our servers** — we do not operate backend servers or databases for App functionality
- **Google Drive backup** (optional, user-initiated) stores an encrypted copy of your data in your personal Google Drive account under a "SweepTrack Backups" folder
- Android cloud backup has been disabled to protect your data

Website data practices (waitlist email collection, analytics, hosting) are described separately in §6.7 below and in full detail in our Privacy Policy, Section 4.

### 6.3 Third-Party API Calls (App)

The App makes network requests to the following third-party services for functionality purposes only. No personal or identifying data is sent unless explicitly noted:

- **Google Maps SDK** — Map display
- **Open-Meteo** — Weather data (approximate coordinates sent, no personal info)
- **OpenStreetMap / Nominatim** — Reverse geocoding (coordinates sent, no personal info)
- **Overpass API** — Nearby historical POI queries (coordinates sent, no personal info)
- **Wikipedia API** — Nearby articles (coordinates sent, no personal info)
- **NOAA** — Tide predictions (station ID sent, no personal info)
- **RevenueCat** — Subscription verification (anonymous app user ID, no personal info)

### 6.4 Diagnostic Telemetry — Opt-In Only (App)

The App does **not** include advertising frameworks or behavioral tracking mechanisms, and does not collect or sell App usage data.

Firebase Analytics and Firebase Crashlytics SDKs are present in the App but are **off by default**. Both stay dark until you explicitly opt in via the first-run consent prompt or **Settings → Privacy → Diagnostics**. When (and only when) you opt in: Analytics reports a small set of aggregate event names (`session_started`, `session_ended`, `find_logged`, etc.) with non-identifying parameters; Crashlytics uploads crash stack traces with device model, OS version, and app version. Crash messages are scrubbed of coordinate-shaped substrings before upload so GPS positions cannot leak through error reports. You can revoke consent at any time. Debug builds never enable Crashlytics. Full details in the Privacy Policy, §3.3.

Website analytics (Vercel Analytics, Vercel Speed Insights) are described in §6.7.

### 6.5 Data Deletion

You may delete your App data at any time by deleting individual items within the App, clearing app data through Android settings, uninstalling the App, or deleting Google Drive backups from your account. For Website waitlist data, unsubscribe from emails or contact us at [support@sweeptrack.pro](mailto:support@sweeptrack.pro).

### 6.6 Children's Privacy

We do not knowingly collect personal information from children under 18. If you believe a child has provided us with personal data, please contact us.

### 6.7 Website and Waitlist

The Website at sweeptrack.pro is operated as a marketing and information channel for SweepTrack Pro. By submitting your email through any waitlist form on the Website, you consent to receive:

- A welcome email confirming your signup
- An email when SweepTrack Pro launches on Google Play
- Occasional pre-launch updates about the product and the Founder's Lifetime offer

Emails are stored in a Supabase Postgres database hosted in the EU (Ireland region) and delivered via Resend, Inc. (EU, Ireland). You may unsubscribe at any time by replying "remove" to any email, or by using the List-Unsubscribe link your mail client displays. Email addresses are retained until you unsubscribe or 12 months after public launch, whichever comes first.

The Website also uses Vercel Analytics and Vercel Speed Insights — privacy-respecting tools that do not use cookies and do not store individual IP addresses.

Full details on Website data handling — including legal basis, processors, retention, and your rights — are in our Privacy Policy, Section 4.

## 7. Permitted Use

You agree to use the App only for lawful purposes and in accordance with these Terms. You agree **not** to:

- Use the App for any illegal activity, including trespassing, unauthorized excavation, or violation of cultural heritage protection laws
- Reverse engineer, decompile, or disassemble the App
- Distribute, sublicense, or commercially exploit the App or its content
- Attempt to circumvent subscription verification, premium feature restrictions, or any security measures
- Use automated systems (bots, scrapers) to interact with the App
- Interfere with or disrupt the App's functionality or associated services

## 8. Metal Detecting and Legal Compliance

### 8.1 Your Responsibility

Metal detecting is subject to laws and regulations that vary by country, state, province, and municipality. **You are solely responsible** for obtaining proper permissions, complying with all applicable laws, adhering to cultural heritage and antiquities laws, reporting finds as required by local law, and verifying that detecting is permitted at any location before beginning a session.

### 8.2 Country-Specific Legal Notices

**UK:** Under the Treasure Act 1996, you must report certain finds to your local coroner within 14 days. The App's find logging does not constitute a legal report. You must separately report through the Portable Antiquities Scheme (PAS).

**US:** Metal detecting is prohibited on most federal public land under ARPA (1979), including National Parks, National Forests, and BLM land. Violations can result in fines up to $100,000 and imprisonment. The App does not indicate whether detecting is legal at any location.

**EU:** Many EU countries require government permits for metal detecting. In some countries, detecting without a permit is illegal regardless of land ownership. The App does not determine legal classification of finds under national cultural property law.

**Romania:** Under OG 43/2000, unauthorized use of metal detectors on archaeological sites or protected areas is a criminal offense.

**Australia:** Detecting on Crown land, national parks, Aboriginal heritage sites, and registered heritage places is generally prohibited.

**Canada:** Provincial heritage acts and the Canada National Parks Act restrict or prohibit detecting in various contexts.

### 8.3 Permission Vault Disclaimer

The Permission Vault is a personal organizational tool. It does **not** constitute legal proof of permission, does not create any legal agreement, and does not replace any legally required written consent or permits. Digital signatures are for personal record-keeping only. The PDF letter generator creates a template document only — it has no legal effect unless both parties independently agree to its contents.

### 8.4 Find Classification Disclaimer

Find categories in the App (Treasure, Gold, Coin, etc.) are for personal organization only. The App does **not** determine legal classification, archaeological significance, value, or reporting obligations. The Coin Caliper identifies coins by diameter only and should not be relied upon for authentication, valuation, or legal reporting.

### 8.5 No Legal Advice

Nothing in the App — including the Permission Vault, weather scoring, detecting forecast, nearby sites, historical map overlays, find categorization, or any text — constitutes legal, financial, archaeological, or professional advice of any kind.

## 9. GPS, Location, and Safety

GPS accuracy depends on your device hardware, satellite availability, atmospheric conditions, terrain, and surrounding structures. The App provides location data on an "as-is" basis. We do not guarantee accuracy.

The perimeter guard is an approximate tool and should not be relied upon as a precise boundary indicator or legal property line. The road back indicator shows straight-line distance, not a safe walking route.

**Beach detecting safety:** The tide table provides predictions, not guarantees. Tides can be affected by weather, wind, and local geography in ways not reflected in predictions. Always allow a safety margin and have an escape route. Never rely solely on the App's tide data for safety decisions.

Track overlay and heatmap visualizations are approximate. GPS drift and signal loss may cause tracks to appear offset from actual positions. Gaps may not reflect actual detecting patterns.

## 10. Third-Party Services and Content

The App uses data from Google Maps, OpenStreetMap, Esri, OpenTopoMap, USGS, Open-Meteo, NOAA, and Wikipedia. Map data should **never** be used to determine legal property boundaries or access rights.

**USGS Historical Map Overlay:** Historical maps depict conditions from decades or centuries ago. Features shown may no longer exist or may be on different property. Historical maps do not reflect current boundaries, ownership, or access rights. The presence of a historical feature does not authorize detecting.

**Tide predictions** may not account for storm surge, wind, or local anomalies. **Nearby sites** data is community-contributed and may be inaccurate — the presence of a marker does not authorize detecting. **Offline maps** may become outdated. **Detector presets** are organizational tools, not endorsed by manufacturers.

## 11. Intellectual Property

SweepTrack Pro, including its design, code, graphics, UI components, and branding, is the intellectual property of Coc Lorand Adrian P.F.A. (trading as Loriba). All rights reserved.

You retain ownership of all content you create using the App. We do not claim any rights over your content.

Detector brand names and model names are trademarks of their respective manufacturers. We are not affiliated with, endorsed by, or sponsored by any detector manufacturer.

## 12. Disclaimer of Warranties

THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT.

## 13. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, COC LORAND ADRIAN P.F.A. (TRADING AS LORIBA) SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO: DAMAGES FROM GPS INACCURACY, PROPERTY BOUNDARY DISPUTES, OR TRESPASSING CLAIMS; DAMAGES FROM RELIANCE ON WEATHER, TIDE, OR ENVIRONMENTAL DATA; TIDAL CONDITIONS INCLUDING INJURY OR DROWNING; LEGAL CONSEQUENCES OF DETECTING ACTIVITIES INCLUDING FINES, PROSECUTION, OR CONFISCATION; FAILURE TO COMPLY WITH THE TREASURE ACT 1996, ARPA, OR ANY CULTURAL HERITAGE LAW; RELIANCE ON HISTORICAL MAP OVERLAYS, NEARBY SITES, PERMISSION VAULT, PDF LETTERS, DIGITAL SIGNATURES, COIN CALIPER, OR FIND IDENTIFICATION; PERIMETER GUARD, TRACK OVERLAY, OR HEATMAP INACCURACY; OUTDATED OFFLINE MAPS OR DETECTOR PRESETS; PERSONAL INJURY, DEATH, OR PROPERTY DAMAGE DURING DETECTING ACTIVITIES; OR INTERACTIONS WITH LANDOWNERS, LAW ENFORCEMENT, OR THIRD PARTIES.

In no event shall our total liability exceed the amount you paid for the App in the twelve (12) months preceding the claim.

## 14. Indemnification

You agree to indemnify, defend, and hold harmless Coc Lorand Adrian P.F.A. (trading as Loriba) from any claims, damages, losses, liabilities, costs, and expenses arising from your use of the App, violation of these Terms, violation of any applicable law, or your metal detecting activities.

## 15. Termination

We may terminate or suspend your access to the App at any time, without prior notice, for any reason, including breach of these Terms. Upon termination, your locally stored data remains on your device until you delete it.

## 16. Governing Law and Dispute Resolution

These Terms are governed by the laws of Romania. Any dispute shall first be attempted to be resolved through good-faith negotiation. If not resolved within 30 days, disputes shall be submitted to the competent courts of Romania.

**EU Consumers:** You may also have recourse to the European Online Dispute Resolution platform at [ec.europa.eu/consumers/odr](https://ec.europa.eu/consumers/odr).

**United Kingdom:** These Terms are subject to the UK GDPR and the Data Protection Act 2018. Your statutory consumer rights under UK law are not affected. You may contact the [ICO](https://ico.org.uk).

**Australia:** Nothing in these Terms excludes or modifies any consumer guarantee or right under the Australian Consumer Law. You may contact the [OAIC](https://www.oaic.gov.au).

**Canada:** Your use is subject to PIPEDA and applicable provincial privacy legislation. You may contact the [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca).

**New Zealand:** Your rights under the Consumer Guarantees Act 1993 and Privacy Act 2020 are not limited. You may contact the [NZ Privacy Commissioner](https://www.privacy.org.nz).

**Other jurisdictions:** Your local mandatory consumer protection and data protection rights are not affected by these Terms. Where local law grants rights that cannot be waived by contract, those rights apply.

## 17. General Provisions

These Terms, together with our Privacy Policy, constitute the entire agreement between you and Loriba regarding the App. If any provision is held invalid, the remaining provisions continue in full force. Our failure to enforce any right shall not constitute a waiver.

## 18. Open Source and Third-Party Licenses

The App uses open-source components. Key attributions: Google Maps SDK (Copyright Google LLC), OpenStreetMap (ODbL), OpenTopoMap, Open-Meteo (CC BY 4.0), NOAA (public domain), USGS (public domain), Wikipedia (CC BY-SA 3.0), Jetpack Compose/Room/Hilt (Apache 2.0), RevenueCat SDK (MIT).

## 19. Contact

For questions about these Terms, please contact:

**Coc Lorand Adrian P.F.A.** (trading as Loriba)
CUI: 41299288 · Reg. F24/646/2019
E-Mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

---

These Terms of Service are effective as of May 12, 2026 and apply to all versions of SweepTrack Pro.
