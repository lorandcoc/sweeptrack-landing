# Privacy Policy

**SweepTrack Radar** — Live Group Location Sharing for Metal Detecting

Effective Date: June 8, 2026 · Last Updated: June 8, 2026

Operated by: Coc Lorand Adrian P.F.A., trading as "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Introduction

This Privacy Policy explains how **SweepTrack Radar** ("the App", "Radar") collects, uses, shares, and protects your information.

Unlike our standalone SweepTrack Pro app — which stores its data locally on your device — **SweepTrack Radar is a collaborative app**. Its core purpose is to share your **live location, in real time, with the other members of a group you create or join**, so a detecting party can see one another on a shared map. This Policy is written to be fully transparent about exactly what is shared, with whom, and for how long.

SweepTrack Radar is free to download and use. **Joining a group is always free; creating a group is a Premium feature.** The App requires **no account, no email, and no sign-up** — it uses anonymous authentication only (Section 3.2).

## 2. Data Controller

For the purposes of the EU General Data Protection Regulation (GDPR) and Romanian data protection law (Law 190/2018), the data controller is:

**Coc Lorand Adrian P.F.A.** (trading as Loriba)
CUI: 41299288 · Reg. F24/646/2019
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Data We Collect and Share (Android App)

### 3.1 Data Shared With Other Group Members (the live map)

This is the App's core function. **When you create or join a group, the following data is transmitted to Google's Firebase Realtime Database and made visible, in real time, to every other member of that same group:**

- **Your display name** — a name you choose when you join. It does not have to be your real name.
- **Your precise location** — GPS latitude and longitude, together with accuracy and heading, updated continuously while sharing is active.
- **Your status** — whether you are online, paused, or stationary, and whether you have triggered an **SOS** (including your location at the moment of the SOS).
- **Your device battery level** — so the group can see if a member's phone is about to die.
- **Your map marker color and icon** — so members can tell one another apart on the map.
- **Map items you create** — shared waypoints, pings, and a group base/rally point, each tagged with your display name and coordinates.

**Anyone who has a group's join code or QR code can join that group and see this live map.** Share a code only with people you intend to share your location with.

**Where it goes:** Firebase Realtime Database, operated by Google LLC, on Google's cloud infrastructure. All data is transmitted over an encrypted (TLS) connection, and access is restricted by server-side security rules to members of the same group.

**How long it is kept:** Group location data is **transient**. Each group **automatically expires** (typically within about 12 hours), after which its data is removed. When you **leave a group**, your member entry is deleted. We do **not** keep a long-term history of your movements on our servers.

### 3.2 Anonymous Authentication

To connect to the group backend, the App signs in using **Firebase Anonymous Authentication**. This issues a random, anonymous identifier for your app installation. **It is not linked to your name, email address, phone number, Google account, or any personal identity** — there is no login and no account to create.

### 3.3 Data Stored Locally on Your Device

The following is stored **only on your device** and is **not** uploaded to us or shared with the group unless you explicitly choose to share or export it:

- Your chosen display name and the most recent group code you used
- **Saved spots** — private location markers you keep for yourself
- **Your own track** — the path you walked, used for the on-device "retrace" feature and for the optional GPX export that you trigger yourself (saved through Android's file picker to a location you choose)
- App preferences (units, marker colors, settings)

### 3.4 Data Processed by Third-Party Services

- **Google Maps SDK** — your device's location is processed by Google Maps to display the map. Subject to [Google's Privacy Policy](https://policies.google.com/privacy).
- **Firebase Realtime Database and Firebase Authentication** (Google) — the group backend and anonymous sign-in described above. Subject to [Google's Privacy Policy](https://policies.google.com/privacy) and the [Firebase Privacy and Security disclosures](https://firebase.google.com/support/privacy).
- **RevenueCat (subscription management)** — if you purchase Radar Premium, an anonymous, randomly generated identifier is used to verify your subscription. No personal information is shared. Subject to [RevenueCat's Privacy Policy](https://www.revenuecat.com/privacy).

### 3.5 SweepTrack Pro Cross-Recognition (on-device only)

If you also have our **SweepTrack Pro** app installed and it owns a Premium subscription, Radar can unlock its Premium features for you automatically. This check happens **entirely on your device**: Radar reads a single yes/no "is Premium owned" answer from SweepTrack Pro through a local, on-device channel, and verifies SweepTrack Pro's app signature before trusting it. **No personal data, account, or location is exchanged, and nothing leaves your device** for this feature.

### 3.6 Data the App Does NOT Collect

- Radar contains **no analytics and no crash-reporting SDKs** — we do not track your usage, sessions, or feature use.
- Radar uses **no advertising frameworks and no advertising identifier** (the Android Advertising ID permission is explicitly removed from the App).
- Radar does **not** collect your name, email address, phone number, or any personal identifier.
- Radar does **not** access your location in the background. Location sharing runs **only while you are using the App**, and a visible foreground-service notification is shown the whole time it is active.
- Radar does **not** create user profiles or behavioral fingerprints, and does **not** sell, rent, or trade your data.

## 4. Legal Basis for Processing (GDPR)

- **Sharing your location with a group:** Consent (Art. 6(1)(a)) — you actively choose to create or join a group, and a foreground notification is shown whenever sharing is active. You withdraw consent by leaving the group, stopping sharing, or closing the App.
- **Anonymous authentication:** Legitimate interest (Art. 6(1)(f)) — necessary to operate the group backend securely.
- **Subscription verification:** Contract performance (Art. 6(1)(b)) — necessary to provide paid features.

## 5. How We Use Your Data

We use data solely to operate the App's features: showing group members on a shared live map, delivering SOS alerts, displaying shared waypoints and base points, and verifying a Premium subscription. We do **not** use your data for advertising, profiling, or any secondary purpose.

## 6. Data Storage and Security

- Group data is held in Firebase Realtime Database (Google) and transmitted over TLS. Server-side security rules restrict access to members of the same group.
- Group data is transient and auto-expires (Sections 3.1 and 8).
- Saved spots, your track, and preferences are stored in the App's private, sandboxed storage on your device. Android cloud backup is **disabled** (`allowBackup="false"`) to prevent unintended data exposure.

## 7. Data Retention

- **Group and location data:** transient — deleted when a group expires (typically about 12 hours) and when you leave a group.
- **On-device data (saved spots, your track, preferences):** kept until you delete it within the App or uninstall the App.
- **Subscription identifier:** retained by RevenueCat in accordance with their policy for the duration of the subscription.

## 8. Data Sharing and Disclosure

The defining characteristic of this App is that **your live location and status are shared with the other members of any group you join** — that is the feature you are choosing to use. Apart from that, we do **not** sell, rent, or trade your personal data. We share data only with the service providers necessary to run the App (Google / Firebase, RevenueCat), which act as our processors and only for the purposes described above. You may also choose to export your own track as a GPX file, which is entirely user-initiated.

## 9. Your Rights (GDPR and International)

### GDPR Rights (EU/EEA Residents)

- **Access** — your live group data is visible to you in the App while you are in a group; your on-device data is fully accessible on your device.
- **Rectification** — change your display name and on-device data directly in the App.
- **Erasure** — leave the group to remove your shared entry, and uninstall the App or clear its data to remove on-device data.
- **Restriction** — control all processing by starting and stopping sharing, or by leaving a group.
- **Data Portability** — export your own track via GPX.
- **Objection** — stop sharing at any time.
- **Withdraw Consent** — at any time, without affecting prior processing.

### United Kingdom (UK GDPR)

Your rights under the UK GDPR and Data Protection Act 2018 are equivalent to the GDPR rights above. You may contact the [ICO](https://ico.org.uk).

### Australia (Privacy Act 1988)

You have rights under the Australian Privacy Principles (APPs) including access and correction. You may contact the [OAIC](https://www.oaic.gov.au).

### Canada (PIPEDA)

You have rights under PIPEDA and applicable provincial privacy legislation, including access, correction, and consent withdrawal. You may contact the [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca).

### California Residents (CCPA/CPRA)

We do **not** sell or share your personal information, and we do **not** use data for cross-context behavioral advertising. You have rights to know, delete, limit sensitive-data use, and non-discrimination.

### Brazilian Residents (LGPD)

Equivalent rights under the Lei Geral de Proteção de Dados apply. You may contact the [ANPD](https://www.gov.br/anpd).

### New Zealand (Privacy Act 2020)

You have rights under the Privacy Act 2020 including access and correction. You may contact the [NZ Privacy Commissioner](https://www.privacy.org.nz).

### Other Jurisdictions

Regardless of your location, you retain control over your data: stop sharing, leave the group, or uninstall the App. Where local law grants additional privacy rights that cannot be waived by contract, those rights apply.

## 10. Children's Privacy

SweepTrack Radar is not directed at children under 18. Its intended user is an adult metal detectorist coordinating with a group. We do not knowingly collect personal information from children under 18. If you believe a child has used the App, you can remove their data by leaving any group and clearing the App's data or uninstalling it.

## 11. Permissions Explained (App)

- **ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION** — your GPS position, shared live with your group while sharing is active.
- **FOREGROUND_SERVICE / FOREGROUND_SERVICE_LOCATION** — keeps location sharing running with the screen off, accompanied by a persistent, visible notification. The App deliberately does **not** request background-location access; sharing is **while-in-use only**.
- **POST_NOTIFICATIONS** — the sharing and SOS notifications.
- **CAMERA** — used **solely** to scan a group join-code QR. You can always type the code instead.
- **INTERNET / ACCESS_NETWORK_STATE** — connect to the group backend and detect connectivity before making network calls.
- **REQUEST_IGNORE_BATTERY_OPTIMIZATIONS** — ask the system not to throttle or kill the sharing service during a session.

You may revoke any permission at any time through Android Settings.

## 12. Cookies and Tracking

The App does not use cookies, web beacons, pixel tags, advertising identifiers, device fingerprinting, or any other tracking technology.

## 13. International Data Transfers

Group data and anonymous authentication are processed by Google's Firebase infrastructure, which may process and store data on servers located outside your country, including in the United States. These transfers rely on the safeguards maintained by Google. RevenueCat may likewise process subscription data outside your country. See the third-party policies in Section 16.

## 14. Data Breach Notification

Group location data is transient and access-restricted by server-side rules. If we become aware of a vulnerability in the App, we will issue an update and notify users through the App or website. Our processors (Google / Firebase, RevenueCat) maintain their own breach-notification protocols. Where a reportable breach affects EU residents, we will notify the relevant supervisory authority (ANSPDCP) within 72 hours as required by GDPR.

## 15. Changes to This Policy

We may update this Privacy Policy to reflect changes in functionality or applicable laws. The "Last Updated" date will be revised, and material changes will be communicated via the App or website.

## 16. Third-Party Privacy Policies

- [Google (Maps, Firebase Realtime Database, Firebase Authentication)](https://policies.google.com/privacy)
- [Firebase Privacy and Security](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)

## 17. Contact Us

**Coc Lorand Adrian P.F.A.** (trading as Loriba)
CUI: 41299288 · Reg. F24/646/2019
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

For GDPR-related inquiries, you may also contact ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) at [dataprotection.ro](https://www.dataprotection.ro).

---

This Privacy Policy is effective as of June 8, 2026 and applies to all versions of SweepTrack Radar.
