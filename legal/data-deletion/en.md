# Data Deletion Request

**App:** SweepTrack Pro — GPS Tracking Application for Metal Detecting
**Operated by:** Coc Lorand-Adrian P.F.A., trading as "Loriba"
**Contact:** [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

Last updated: June 4, 2026

---

This page explains exactly how to request that your SweepTrack Pro data is deleted, what gets deleted, and what cannot be deleted by us (because it lives outside our systems).

## 1. How to delete on-device data

All session, find, vault, preset, and media data lives **on your device only**. We do not operate servers that store this data. You can delete it at any time, without contacting us:

- **Delete a single find or session** — open the item inside the App and tap the trash icon. Deletion removes the database row and the associated photos, audio, and video files.
- **Delete a detector preset** — open Arsenal → choose preset → tap the trash icon.
- **Delete a permission vault entry** — open Permission Vault → tap the entry → tap the trash icon.
- **Clear cached files** — Settings → Data → Clear Cache. This removes temporary exports and share-card files. (It does **not** delete your sessions, finds, or vault entries.)
- **Factory reset inside the App** — Settings → Data → **Factory Reset**. This wipes the entire local database, every saved preference (including your permission vault and detector presets), and all stored photo, audio, and video files, then restarts the App fresh — a complete data wipe without leaving SweepTrack.
- **Wipe all App data at once from Android** — Android Settings → Apps → SweepTrack Pro → Storage and cache → **Clear storage**. This deletes every byte the App has stored on your device, including the Room database and all media files.
- **Uninstall the App** — long-press the App icon → Uninstall. Equivalent to "Clear storage" plus removing the App itself.

## 2. How to delete off-device data

A small amount of data is processed off-device, only when you explicitly enable a feature:

### 2.1 Google Drive backup (only if you used it)

If you enabled Google Drive backup, encrypted or unencrypted ZIP archives of your sessions and media live in **your own Google Drive account**, inside a folder called "SweepTrack Backups". We have no access to your Drive — the App is granted only the `drive.file` scope, which can see solely the files it created.

- **Delete from inside the App** — open the App's Google Drive backup screen, select the backup(s) you want to remove, and tap delete. This removes them from your Drive directly.
- **Or delete from Drive yourself** by opening drive.google.com → "SweepTrack Backups" folder → move to trash → empty trash.

### 2.2 Firebase Analytics + Crashlytics (only if you opted in)

Both SDKs are off by default. They only collect data after you explicitly opt in at first run or in Settings → Privacy → Diagnostics.

- **Analytics events** logged by your install are aggregate and non-identifying (see the Privacy Policy §3.3). Once collected they cannot be individually targeted for deletion because there is no personal identifier to query against. **They auto-delete from Google's systems after Firebase's standard retention period.**
- **Crashlytics reports** include device model, OS version, app version, and coordinate-scrubbed stack traces. Email us at the address below to request deletion of crash reports associated with your install.
- **To opt out going forward**, open the App → Settings → Privacy → Diagnostics → turn off the toggle. No new events or crashes will be sent.

### 2.3 RevenueCat subscription data (only if you purchased)

If you bought a subscription or the Founder's Lifetime, RevenueCat holds an anonymous app user ID (a random identifier like `$RCAnonymousID:...`) tied to your purchase. Google Play also holds purchase receipts under its own retention policy.

- Email us at the address below to request deletion of the RevenueCat record. Because that ID is anonymous and is **not** displayed anywhere in the App, include your **Google Play order number** (e.g. `GPA.XXXX-XXXX-XXXX-XXXXX`, found in your Play Store purchase-confirmation email) so we can locate the right record. **Note:** purchase receipts held by Google Play cannot be deleted by us — Google's standard retention applies to those for tax, refund-eligibility, and fraud-prevention reasons.

### 2.4 Email support requests you have sent us

If you have emailed [support@sweeptrack.pro](mailto:support@sweeptrack.pro), we retain those emails to respond to your request and for a reasonable follow-up window. Email us to ask that your support correspondence be deleted.

### 2.5 In-app feedback and bug reports (only if you sent one)

If you used the App's **Feedback / Report a bug** form, your message is sent to our support backend. It includes the optional email address you typed (only if you entered one) plus the basic technical details disclosed in the form before you send: app version, device model, Android version, and language. No GPS location, finds, or media are attached.

- Email us at the address below to request deletion of feedback you submitted; telling us roughly when you sent it helps us find it.

## 3. How to request server-side deletion by email

For anything in §2.1–2.5 above, email:

**[support@sweeptrack.pro](mailto:support@sweeptrack.pro)**

Subject: **Data deletion request — SweepTrack Pro**

Body: tell us which data you want deleted (Drive backups, Crashlytics reports, RevenueCat record, support emails, in-app feedback, or any combination). We will respond within **30 days** as required by GDPR Article 12.

## 4. What we do NOT keep

- We do **not** operate accounts. SweepTrack Pro has no login, no username, no password.
- We do **not** store your name, email, phone number, address, contacts, calendar, browsing history, or any personally identifying information unless you have voluntarily provided it — by emailing us, entering an email in the in-app feedback form (§2.5), or joining the website waitlist (§5).
- We do **not** sell, share, rent, or trade any of your data with third parties for marketing or advertising.

## 5. Website waitlist email (separate from App data)

If you signed up for the SweepTrack Pro waitlist on this website by entering your email, that's stored separately in a Supabase database. To remove that email:

- Click the unsubscribe link in any waitlist email we send you, or
- Reply "remove" to any waitlist email, or
- Email [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 6. Verification

If a deletion request is ambiguous (e.g. multiple installs, multiple Google accounts), we may ask you to confirm by replying from the email address tied to the data. For a subscription or purchase deletion, the Google Play order number from your Play Store purchase-confirmation email lets us locate the matching RevenueCat record. We will not require any document or credential beyond what is necessary to confirm the request.

## 7. Related documents

- [Privacy Policy](https://www.sweeptrack.pro/privacy)
- [Terms of Service](https://www.sweeptrack.pro/terms)
