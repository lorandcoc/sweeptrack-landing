# Privacy Policy

**SweepTrack Pro** — GPS Tracking Application for Metal Detecting

Effective Date: April 7, 2026 · Last Updated: April 7, 2026

Operated by: Coc Lorand P.F.A., trading as "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Introduction

This Privacy Policy explains how SweepTrack Pro ("the App") collects, uses, stores, and protects your information. We are committed to protecting your privacy and ensuring transparency about our data practices.

SweepTrack Pro is designed with a **privacy-first architecture**: all data is stored locally on your device, we do not operate backend servers, and we do not collect, transmit, or sell your personal data.

## 2. Data Controller

For the purposes of the EU General Data Protection Regulation (GDPR) and Romanian data protection law (Law 190/2018), the data controller is:

**Coc Lorand P.F.A.** (trading as Loriba)
CUI: 41299288 · Reg. F24/646/2019
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Data We Collect

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

### 3.4 Data We Do NOT Collect

- We do **not** collect your name, email, phone number, or any personal identifiers
- We do **not** use analytics, crash reporting, or behavioral tracking SDKs
- We do **not** use advertising frameworks or ad identifiers
- We do **not** track usage patterns, session frequency, or feature usage
- We do **not** create user profiles or behavioral fingerprints
- We do **not** share, sell, rent, or trade any data with third parties
- We do **not** operate any servers that receive, process, or store your data

## 4. Legal Basis for Processing (GDPR)

- **GPS/session data, find records, vault entries:** Consent (Art. 6(1)(a)) — you actively initiate these actions
- **API calls (weather, geocoding):** Legitimate interest (Art. 6(1)(f)) — necessary for core functionality
- **Google Drive backup:** Consent (Art. 6(1)(a)) — you explicitly enable and authenticate
- **Subscription verification:** Contract performance (Art. 6(1)(b)) — necessary to provide paid features

You may withdraw consent at any time by stopping the relevant activity or by uninstalling the App.

## 5. How We Use Your Data

All data processing occurs **locally on your device**. We use your data exclusively to provide the App's features: map display, session tracking, find logging, permission management, weather/tide data, exports, backup, and subscription verification.

## 6. Data Storage and Security

- Session and find data stored in an encrypted Room database on your device
- Sensitive preferences use Android's EncryptedSharedPreferences (AES-256)
- Media files stored in the App's private internal storage, inaccessible to other apps
- Android cloud backup **disabled** (`android:allowBackup="false"`) to prevent unintended data exposure
- Google Drive backups use Google's encrypted APIs (HTTPS/TLS) and exist solely in your account

We do not operate any servers, databases, or cloud infrastructure.

## 7. Data Retention

Local data is retained until you choose to delete it. You can delete individual items within the App, clear all data via Android Settings, or uninstall the App. Google Drive backups persist until you manually delete them from your account.

## 8. Data Sharing and Disclosure

We do not share, sell, rent, or disclose your personal data to any third party. You may choose to share data through exports (GPX, KML, CSV, JSON), session share cards, or Google Drive backup — all user-initiated.

## 9. Your Rights (GDPR and International)

### GDPR Rights (EU/EEA Residents)

- **Access** — your data is fully accessible on your device
- **Rectification** — edit all records directly in the App
- **Erasure** — delete via in-app deletion or uninstalling
- **Restriction** — control all processing by starting/stopping features
- **Data Portability** — export via GPX, KML, CSV, JSON
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

Regardless of your location, you have full control over your data through the App. Where local law grants additional privacy rights that cannot be waived by contract, those rights apply.

## 10. Children's Privacy

The App is not directed at children under 16. We do not knowingly collect personal information from children under 16. If you believe a child has used the App, you can delete their data by clearing App data or uninstalling.

## 11. Permissions Explained

- **ACCESS_FINE_LOCATION** — GPS for path tracking during sessions
- **ACCESS_BACKGROUND_LOCATION** — continue tracking when screen is off
- **CAMERA** — capture photos for find logging
- **RECORD_AUDIO** — record audio notes for finds
- **READ/WRITE_CALENDAR** — permission vault expiry reminders
- **INTERNET** — weather, geocoding, tides, maps, subscriptions
- **POST_NOTIFICATIONS** — GPS tracking notification
- **VIBRATE** — perimeter guard boundary alerts

You may revoke any permission at any time through Android Settings.

## 12. Cookies and Tracking

The App does not use cookies, web beacons, pixel tags, device fingerprinting, or any other tracking technologies.

## 13. International Data Transfers

Since all data is stored locally on your device, no international data transfers occur under our control. Third-party API calls may be processed in jurisdictions where those services operate.

## 14. Data Breach Notification

Since we do not store your data on any server, a data breach on our end is not possible. If we become aware of a vulnerability in the App, we will issue an update and notify users through the App or website.

## 15. Changes to This Policy

We may update this Privacy Policy to reflect changes in functionality or applicable laws. The "Last Updated" date will be revised. Material changes will be communicated via the App or website.

## 16. Third-Party Privacy Policies

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)

## 17. Contact Us

**Coc Lorand P.F.A.** (trading as Loriba)
CUI: 41299288 · Reg. F24/646/2019
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

For GDPR-related inquiries, you may also contact ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) at [dataprotection.ro](https://www.dataprotection.ro).

---

This Privacy Policy is effective as of April 7, 2026 and applies to all versions of SweepTrack Pro.
