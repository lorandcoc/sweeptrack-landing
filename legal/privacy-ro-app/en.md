# Privacy Policy

**SweepTrack RO** — GPS Tracking Application for Metal Detecting
**Effective Date:** April 7, 2026
**Last Updated:** July 26, 2026
**Operated by:** Coc Lorand-Adrian P.F.A., trading as "Loriba" ("we," "us," "our")
**CUI:** 41299288
**Reg.:** F24/646/2019
**Website:** sweeptrack.pro

---

## 1. Introduction

This Privacy Policy explains how SweepTrack RO ("the App") collects, uses, stores, and protects your information. We are committed to protecting your privacy and ensuring transparency about our data practices.

SweepTrack RO is designed with a **privacy-first architecture**: all session, find, vault, and media data is stored primarily on your device, we do not operate backend servers that hold this stored core data, and we do not sell or share your data with third parties for marketing purposes. Optional features — diagnostic telemetry (off by default; you choose at first launch), Google Drive backup, the live **Radar** group feature (which shares your live location with other members of a group you choose to join), in-app feedback submission, and permit-expiry calendar reminders — transmit limited data to third-party services only with your explicit action. Each of these is detailed in §3.3 and §4.

---

## 2. Data Controller

For the purposes of the EU General Data Protection Regulation (GDPR) and Romanian data protection law (Law 190/2018), the data controller is:

**Coc Lorand-Adrian P.F.A.** (trading as Loriba)
CUI: 41299288 · Reg. F24/646/2019
Registered address: Com. Băiuț nr. 90, Băiuț 437025, Maramureș, Romania
Email: support@sweeptrack.pro
Website: https://sweeptrack.pro

---

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
- Media attachments: photographs (JPG/PNG), video recordings (MP4), audio recordings (WAV/MP3)

**Waypoints / Map Pins:**
- Map pins you create by long-pressing the map (e.g. to mark an old-map landmark you want to revisit)
- Waypoint location (GPS coordinates of the pin)
- Optional metadata: name, notes, category, and the GPS accuracy recorded when the pin was placed

**Permission Vault Data:**
- Site names and locations
- Landowner names and contact information (phone, email)
- Permit numbers, issue dates, expiry dates
- Site boundary coordinates (polygon)
- Digital signatures (SVG format)
- Custom tags and notes

**Detector Preset Data:**
- Selected detector model and manufacturer
- Your detector model selection and the personal notes you attach to it

**App Preferences:**
- Display theme, measurement units, language preference
- Map settings, path color and width
- Challenge/achievement progress

**Weather Snapshots:**
- Temperature, humidity, wind, precipitation data captured at session start/end
- Associated with specific sessions, stored locally

### 3.2 Data Processed Temporarily (Not Stored)

The following data is sent to third-party APIs for real-time functionality and is **not stored by us or by these services beyond the immediate request**:

- **Approximate GPS coordinates** sent to Open-Meteo for weather forecasts and elevation data
- **Location search queries** sent to Open-Meteo Geocoding for place name search
- **Protected-zone registry sync (no user data sent):** the App's protected-zone layer (RAN / Natura 2000) downloads public archaeological-site registry geometry roughly monthly from the National Heritage Institute's (Institutul National al Patrimoniului) public ArcGIS service at `eism.geo-spatial.ro`. This is a download-only sync of public data — the request contains no location, identifier, or other user data.

Reverse geocoding (turning coordinates into a location name) uses the Android system's built-in Geocoder service provided by your device, not a third-party geocoding API.

### 3.3 Data Processed by Third-Party Services

**Google Maps SDK:**
- Your device's location is processed by Google Maps for map display
- Subject to [Google's Privacy Policy](https://policies.google.com/privacy)

**Google Sign-In and Google Drive (Optional):**
- If you choose to enable Google Drive backup, your Google account email address is stored locally to identify the authenticated account
- Backup data is uploaded to **your own Google Drive account** in a folder named "SweepTrack Backups"
- We do not have access to your Google Drive or Google account
- Subject to [Google's Privacy Policy](https://policies.google.com/privacy)

**RevenueCat (Subscription Management):**
- For subscription verification the App sends RevenueCat a stable device identifier: the Android SSAID (`Settings.Secure.ANDROID_ID`), transmitted as `device:<identifier>`. It is scoped to this device + app pair, resets on factory reset, and is **not** the Android Advertising ID.
- It is required so your subscription, trial, and any granted access stay attached to the same device across reinstalls and Clear Data — otherwise your purchase would be orphaned.
- No personal information (name, email, location) is shared with RevenueCat
- Subject to [RevenueCat's Privacy Policy](https://www.revenuecat.com/privacy)

**Free-tier usage counter (Firebase):**
- To enforce the free tier's monthly session limit, the App keeps a monthly counter of started sessions — a single integer per month — tied to the device identifier described above, in a Firebase database we operate
- The counter contains no location, tracks, finds, durations, or other content, and is not used for profiling, analytics, or marketing — solely so the free-tier limit cannot be bypassed by clearing the App's data
- Premium and unlimited-access users do not send this counter
- Subject to [Google's Privacy Policy](https://policies.google.com/privacy) (Firebase)

**Firebase Analytics + Crashlytics (Optional Diagnostic Telemetry — opt-in, off by default):**
- The App integrates Google Firebase Analytics and Firebase Crashlytics for optional, anonymous diagnostic and crash reporting. **Both are disabled by default.** No diagnostic, crash, or usage data is collected, transmitted, or stored unless you explicitly opt in.
- You opt in via the in-app diagnostics consent screen or Settings → Diagnostics, and you can withdraw consent at any time from the same screen (which stops further collection).
- When enabled, the App sends anonymous usage events (e.g. which screens/features are used) and crash reports. Before transmission, crash payloads are scrubbed to remove precise GPS coordinates, email addresses, and similar identifiers.
- This data is processed by Google Firebase. Firebase Analytics events are retained by Google for up to 14 months; Firebase Crashlytics crash records typically for 90 days. Subject to [Google's Privacy Policy](https://policies.google.com/privacy).

**Live "Radar" Group Sharing (Optional — opt-in by creating or joining a group):**
- SweepTrack RO includes an optional **Radar** live-group feature that lets a group of detectorists see each other on the map in real time. It is **completely off until you actively create or join a group** using a short group code. If you never create or join a group, **none** of the data below is ever transmitted.
- While you are active in a group, the App shares the following **with the other members of that same group**, in real time, through a **Google Firebase Realtime Database that we operate**:
  - Your **precise live GPS location** (latitude, longitude, accuracy, and heading) while you are in the group
  - A **display name** you enter for the group (you choose it — it may be a nickname; up to 24 characters)
  - Your device's **coarse battery level** (percentage), your online/stationary/paused status, and an optional **SOS/help flag** you can raise
  - An avatar colour/glyph you pick
  - Any **shared waypoints and a shared "base" point** (e.g. where you parked) you choose to place — each carrying its GPS location and your display name
- This data is tied to an **anonymous, randomly generated identifier** (Firebase Anonymous Authentication). We do not link it to your real name, email, or any account, and we do not use it for profiling, analytics, or marketing.
- **Who can see it:** only members who hold the same group code; reads are scoped to the group's member roster.
- **Retention is ephemeral:** your live position stops being shared the moment you leave the group or go offline, your member entry is then removed, and a group's entire contents (members, waypoints, base) are deleted once the last member has left.
- **Free to join, premium to create** — and optional in every case.
- This data is processed by Google Firebase (Realtime Database + Anonymous Authentication). Subject to [Google's Privacy Policy](https://policies.google.com/privacy).

**Google Calendar Provider (Optional):**
- When you set a permit-expiry date in a Permission Vault entry, the App writes a reminder event to your device's primary calendar via Android's Calendar Provider
- If your calendar account syncs to a cloud provider (e.g., a Gmail account synced to Google Calendar), the reminder will sync to that provider
- The reminder title includes the site name you entered for the vault entry
- You can disable this by not granting WRITE_CALENDAR, by selecting a local-only calendar account, or by deleting the reminder from your calendar

**Supabase (Feedback Submission Only):**
- When you submit feedback via Settings → Feedback, the message text and the optional contact field you provide are sent to a Supabase edge function we operate
- Triggered only by you actively pressing Send — never in the background
- The message is delivered to our private inbox and is not made public
- The edge function may store a salted hash of your IP address and user-agent for short-term abuse prevention/rate limiting; it is not used for marketing or profiling
- Subject to [Supabase's Privacy Policy](https://supabase.com/privacy)

### 3.4 Data We Do NOT Collect

We want to be explicit about what we **never** collect:
- We do **not** collect your real name, email address, or phone number — except: (a) the Google email associated with Drive backup if you voluntarily enable it, (b) the optional contact field you may provide when submitting in-app feedback, and (c) the **display name you choose to enter when you create or join a live Radar group**, which is shared with the other members of that group (see §3.3)
- We do **not** use advertising frameworks, ad identifiers, AdMob, IDFA-equivalents, or any monetisation-driven tracking
- We do **not** create user profiles, behavioural fingerprints, or build cross-app tracking signatures
- We do **not** share, sell, rent, or trade your data with third parties for marketing purposes
- We do **not** operate servers that store your saved core app data (your recorded sessions, find data, photos, audio, video, vault entries, permission letters, or detector presets). Two opt-in flows are server-operated: (a) in-app feedback, which receives only the message/contact/device metadata you choose to send; and (b) the live **Radar** group feature, which transmits your live location and chosen display name to a Firebase Realtime Database **only while you are actively in a group**, shares it solely with that group's members, and deletes it when the group empties (see §3.3)
- Even when diagnostic telemetry is opted in (§3.3), the events sent contain only the names of in-app actions ("session_started", "feature_gated", etc.) — no location data, find content, vault content, or personal identifiers are transmitted
- Diagnostic telemetry is **off by default**; you choose at first launch and can revoke at any time in Settings → Diagnostics

---

## 4. Legal Basis for Processing (GDPR)

Under the GDPR, we process data on the following legal bases:

| Data | Legal Basis | Justification |
|------|-------------|---------------|
| GPS/session data | Consent (Art. 6(1)(a)) | You actively start tracking sessions |
| Find records and media | Consent (Art. 6(1)(a)) | You voluntarily create find entries |
| Vault entries | Consent (Art. 6(1)(a)) | You voluntarily enter permission data |
| API calls (weather, geocoding) | Legitimate interest (Art. 6(1)(f)) | Necessary for core App functionality |
| Google Drive backup | Consent (Art. 6(1)(a)) | You explicitly enable and authenticate |
| Subscription verification | Contract performance (Art. 6(1)(b)) | Necessary to provide paid features |
| Diagnostic telemetry (Firebase Analytics + Crashlytics) | Consent (Art. 6(1)(a)) | Only sent if you opt in via the consent screen or Settings → Diagnostics |
| Calendar permit-expiry reminders | Consent (Art. 6(1)(a)) | You grant WRITE_CALENDAR and create a vault entry with an expiry date |
| Feedback submission (Supabase) | Consent (Art. 6(1)(a)) | You actively send feedback via Settings → Feedback |
| Live Radar group sharing (Firebase RTDB) | Consent (Art. 6(1)(a)) | You actively create or join a group; sharing stops when you leave |

You may withdraw consent at any time by stopping the relevant activity (e.g., stopping a session, deleting vault entries, disabling Drive backup) or by uninstalling the App.

---

## 5. How We Use Your Data

All data processing occurs **locally on your device**. We use your data exclusively to:

- Display your tracked path on the map in real time
- Calculate session statistics (distance, speed, altitude, duration)
- Store and display your find/discovery log with media
- Manage your permission vault entries and expiry reminders
- Apply your detector preset settings
- Show weather conditions relevant to your location
- Display nearby historical points of interest
- Generate session exports (GPX, KML, CSV, JSON) when you request them
- Create shareable session cards and QR codes when you request them
- Back up your data to your Google Drive when you explicitly enable this feature
- Verify your subscription status to unlock premium features
- Send anonymous diagnostic events and crash reports to Firebase if you opt in via the diagnostics consent screen or Settings → Diagnostics (off by default)
- Deliver in-app feedback you submit to our private inbox via Supabase, only when you actively press Send

---

## 6. Data Storage and Security

### 6.1 Local Storage
- Session, find, coordinate, and detector-preset data are stored in a Room (SQLite) database located in the App's private application sandbox. Android isolates this directory at the OS level, so the file is inaccessible to other apps on a non-rooted device. The database file itself is not separately encrypted at rest.
- Permission Vault data (landowner names and contacts, permit numbers, signatures, and site notes) is stored in EncryptedSharedPreferences backed by Android Keystore when supported by the device. If Android Keystore or EncryptedSharedPreferences is unavailable, the App may fall back to app-private plaintext SharedPreferences and shows a persistent in-app warning that vault data is not encrypted on that device.
- Sensitive preferences such as the Google Drive account email used for backup are also stored via EncryptedSharedPreferences with a dedicated key alias.
- Drive backups can optionally be passphrase-encrypted before upload (Settings → Drive Backup → Encrypt backups) — see §6.2.
- Media files (photos, audio, video) are stored in the App's private internal storage, inaccessible to other apps without root. They are not separately encrypted at rest.
- Android cloud backup has been **disabled** (`android:allowBackup="false"`) and the Android 12+ data-extraction rules block both cloud-backup and device-transfer paths, to prevent unintended data exposure.

### 6.2 Google Drive Backup (Optional)
- Backup files are JSON archives containing your sessions, finds, waypoints/map pins, detector presets, preferences, and metadata
- Uploaded to your personal Google Drive via Google's encrypted APIs (HTTPS/TLS)
- We do not retain copies — backups exist solely in your Google Drive
- You may delete backups at any time from your Google Drive

### 6.3 No Server-Side Storage of Core App Data
Other than the Supabase edge function used solely to receive in-app feedback messages you actively submit (see Section 3.3) and the Firebase Realtime Database that powers the optional Radar live group sharing while you are in a group (see Section 3.3), we do not operate servers, databases, or cloud infrastructure that store your core App data, such as sessions, GPS tracks, finds, waypoints/map pins, media, vault entries, permission letters, or detector presets. Your core data leaves your device only when:
- When you actively press Send in the in-app Feedback form (your message + optional contact field only)
- When you explicitly initiate a Google Drive backup
- When you explicitly export or share a session file
- When the App makes API calls to third-party services (weather, place-name search) using only approximate coordinates or the search text you enter

---

## 7. Data Retention

### 7.1 Local Data
Data is retained on your device indefinitely until you choose to delete it. You can:
- Delete individual sessions, finds, or vault entries within the App
- Clear all App data via Android Settings > Apps > SweepTrack RO > Clear Data
- Uninstall the App to permanently remove all local data

### 7.2 Google Drive Backups
Backups persist in your Google Drive until you manually delete them. We have no ability to access or delete your Drive backups.

### 7.3 Third-Party Data Retention
- API requests to Open-Meteo and to the National Heritage Institute's public ArcGIS registry (`eism.geo-spatial.ro`) are stateless and not logged by us
- These services have their own retention policies; we recommend reviewing their privacy policies
- RevenueCat retains anonymous subscription records per their privacy policy
- If you opt in to diagnostics, Firebase Analytics events are retained by Google per Google's policies (up to 14 months for default Analytics events); Firebase Crashlytics retains crash records per Google's policies (typically 90 days for default crash data)
- Feedback you submit via the in-app form is retained by us in our private inbox until your message has been addressed; you may request deletion at support@sweeptrack.pro

---

## 8. Data Sharing and Disclosure

### 8.1 We Do Not Share Your Data
We do not share, sell, rent, license, or disclose your personal data to any third party for any purpose.

### 8.2 User-Initiated Sharing
You may choose to share your data through:
- Exporting sessions as GPX, KML, CSV, or JSON files via the system share sheet
- Generating QR codes containing path coordinates
- Creating shareable session summary cards
- Backing up to your own Google Drive account

In all cases, sharing is initiated by you and you control who receives the data.

### 8.3 Legal Requirements
We may be required to disclose information if compelled by law, court order, or governmental request. However, since we do not possess your data (it is stored locally on your device), we have nothing to disclose in practice.

---

## 9. Your Rights (GDPR and International)

### 9.1 GDPR Rights (EU/EEA Residents)
Under the GDPR, you have the right to:

- **Access** — Request a copy of your data (your data is already fully accessible on your device)
- **Rectification** — Correct inaccurate data (you can edit all records directly in the App)
- **Erasure ("Right to be Forgotten")** — Delete your data (available through in-app deletion or uninstalling)
- **Restriction of Processing** — Limit how your data is used (you control all processing by starting/stopping features)
- **Data Portability** — Receive your data in a machine-readable format (available via GPX, KML, CSV, JSON export)
- **Objection** — Object to data processing (you may stop any feature at any time)
- **Withdraw Consent** — Withdraw consent at any time without affecting the lawfulness of prior processing

Since all data is stored locally on your device and we have no access to it, you can exercise all these rights directly without contacting us.

### 9.2 United Kingdom (UK GDPR)
If you are a resident of the United Kingdom, your rights under the UK GDPR (the retained EU law version of the General Data Protection Regulation) and the Data Protection Act 2018 are equivalent to those described in Section 9.1. You may lodge a complaint with the Information Commissioner's Office (ICO) at https://ico.org.uk.

### 9.3 Australia (Privacy Act 1988)
If you are a resident of Australia, you have rights under the Australian Privacy Principles (APPs) in the Privacy Act 1988 (Cth), including the right to access and correct your personal information. Since all data is stored locally on your device, you exercise these rights directly. You may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at https://www.oaic.gov.au.

### 9.4 Canada (PIPEDA)
If you are a resident of Canada, you have rights under the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation (including PIPA in British Columbia and Alberta, and Quebec's Law 25), including the right to access, correct, and withdraw consent for the processing of your personal information. You may file a complaint with the Office of the Privacy Commissioner of Canada at https://www.priv.gc.ca.

### 9.5 California Residents (CCPA/CPRA)
If you are a California resident, you have the right to:
- Know what personal information is collected (described in Section 3)
- Request deletion of personal information (available through in-app deletion)
- Opt out of the sale or sharing of personal information — **we do not sell or share any personal information**
- Limit the use of sensitive personal information — we process location data only during active sessions you initiate
- Non-discrimination for exercising your privacy rights

We do not use your personal information for cross-context behavioral advertising.

### 9.6 Brazilian Residents (LGPD)
If you are a resident of Brazil, you have equivalent rights under the Lei Geral de Protecao de Dados (LGPD), including access, correction, deletion, portability, anonymization, and information about sharing. You may contact the Autoridade Nacional de Protecao de Dados (ANPD) at https://www.gov.br/anpd. The same self-service mechanisms described above apply.

### 9.7 New Zealand (Privacy Act 2020)
If you are a resident of New Zealand, you have rights under the Privacy Act 2020, including the right to access and correct your personal information. You may contact the Office of the Privacy Commissioner at https://www.privacy.org.nz.

### 9.8 Other Jurisdictions
Regardless of your location, you have full control over your data through the App's built-in tools. If your jurisdiction grants additional privacy rights that cannot be waived by contract, we will respect them to the extent applicable. Since all data is stored locally on your device, you can exercise virtually all privacy rights without contacting us.

---

## 10. Children's Privacy

The App is not directed at children under 18 years of age. We do not knowingly collect personal information from children under 18.

If you are a parent or guardian and believe your child has used the App and provided personal information, please contact us at support@sweeptrack.pro. Since all data is stored locally on the child's device, you can delete it by clearing the App's data or uninstalling it.

---

## 11. Permissions Explained

The App requests the following Android permissions. Each is used solely for the stated purpose:

| Permission | Purpose | When Used |
|------------|---------|-----------|
| ACCESS_FINE_LOCATION | High-precision GPS for path tracking | During active sessions and map centering |
| ACCESS_COARSE_LOCATION | Approximate location fallback | When fine location is unavailable |
| CAMERA | Capture photos for find logging | When you tap the photo button in find logger |
| RECORD_AUDIO | Record audio notes for finds | When you tap the audio button in find logger |
| READ_CALENDAR | Read calendar for permission vault reminders | When checking existing reminders |
| WRITE_CALENDAR | Add permit expiry reminders | When you create a vault entry with expiry date |
| INTERNET | Weather, geocoding, maps, subscriptions, Radar group sharing, protected-zone registry sync | When these features are actively used |
| ACCESS_NETWORK_STATE | Detect offline state before network calls | During weather, geocoding, maps, feedback, subscriptions, and backup |
| FOREGROUND_SERVICE | Run the GPS tracker as a foreground service | During active tracking sessions |
| POST_NOTIFICATIONS | GPS tracking notification | During active tracking sessions |
| VIBRATE | Perimeter guard boundary alerts | When guard is active and you approach boundary |
| FOREGROUND_SERVICE_LOCATION | Keep GPS alive during tracking | During active tracking sessions |
| REQUEST_IGNORE_BATTERY_OPTIMIZATIONS | Prevent system from killing GPS tracker | Requested once for reliable background tracking |

You may revoke any permission at any time through Android Settings. Revoking location permissions will disable GPS tracking. Revoking camera/audio permissions will disable media capture in the find logger.

---

## 12. Cookies and Tracking Technologies

The App does not use cookies, web beacons, pixel tags, local storage tokens, device fingerprinting, or any other tracking technologies.

---

## 13. International Data Transfers

Most data is stored locally on your device and never leaves your device under our control. When you use third-party services (Google Maps, Open-Meteo, etc.), or when you opt in to Firebase telemetry, or when you submit in-app feedback, data may be processed in jurisdictions where those services operate — primarily the United States and the European Union. These transfers are governed by each service's own privacy policy and applicable data-protection mechanisms, including Standard Contractual Clauses where required for transfers out of the EEA.

---

## 14. Data Breach Notification

Since we do not store your core App data on our servers, a breach of our systems would not expose sessions, tracks, finds, media, vault entries, permission letters, or detector presets. If we become aware of a breach affecting feedback submissions or a vulnerability in the App that could expose your local data, we will:
- Issue an App update to address the vulnerability as quickly as possible
- Notify affected users through the App or our website
- Comply with applicable breach notification laws (GDPR Article 33/34, where applicable)

---

## 15. Changes to This Policy

We may update this Privacy Policy to reflect changes in the App's functionality or applicable laws. When we do:
- The "Last Updated" date at the top will be revised
- Material changes will be communicated via the App or our website
- Continued use of the App after changes constitutes acceptance

We encourage you to review this Privacy Policy periodically.

---

## 16. Third-Party Service Privacy Policies

For your reference, the privacy policies of third-party services used by the App:

- Google (Maps, Drive, Sign-In): https://policies.google.com/privacy
- Firebase (Analytics, Crashlytics): https://firebase.google.com/support/privacy
- RevenueCat: https://www.revenuecat.com/privacy
- Supabase: https://supabase.com/privacy
- Open-Meteo: https://open-meteo.com/en/terms (open data, no tracking)
- OpenStreetMap: https://wiki.osmfoundation.org/wiki/Privacy_Policy
- Institutul National al Patrimoniului (RAN public registry via eism.geo-spatial.ro): public data, no user data transmitted

---

## 17. Contact Us

If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact:

**Coc Lorand-Adrian P.F.A.** (trading as Loriba)
CUI: 41299288 · Reg. F24/646/2019
Registered address: Com. Băiuț nr. 90, Băiuț 437025, Maramureș, Romania
Email: support@sweeptrack.pro
Website: https://sweeptrack.pro

For GDPR-related inquiries, you may also contact your local Data Protection Authority. In Romania, this is ANSPDCP (Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal) at https://www.dataprotection.ro.

---

*This Privacy Policy is effective as of the date listed above and applies to all versions of SweepTrack RO.*
