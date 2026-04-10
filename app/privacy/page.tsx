import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for SweepTrack Pro. Privacy-first: all data stored locally, no analytics, no ads, no tracking.",
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-semibold text-accent mb-3">{children}</h2>
);
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-semibold text-foreground/90 mb-2 mt-4">{children}</h3>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3">{children}</p>
);
const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc list-inside space-y-1.5 ml-2 mb-3">{children}</ul>
);

export default function PrivacyPolicy() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm"
        >
          &larr; Back to home
        </Link>

        <h1 className="text-3xl font-bold mb-1">Privacy Policy</h1>
        <p className="text-muted text-sm mb-1"><strong>SweepTrack Pro</strong> — GPS Tracking Application for Metal Detecting</p>
        <p className="text-muted text-sm mb-1">Effective Date: April 7, 2026 &middot; Last Updated: April 7, 2026</p>
        <p className="text-muted text-sm mb-1">Operated by: Coc Lorand P.F.A., trading as &ldquo;Loriba&rdquo;</p>
        <p className="text-muted text-sm mb-1">CUI: 41299288 &middot; Reg. F24/646/2019</p>
        <p className="text-muted text-sm mb-10">Website: sweeptrack.pro</p>

        <div className="space-y-8 text-foreground/90 leading-relaxed text-sm">

          <section>
            <H2>1. Introduction</H2>
            <P>This Privacy Policy explains how SweepTrack Pro (&ldquo;the App&rdquo;) collects, uses, stores, and protects your information. We are committed to protecting your privacy and ensuring transparency about our data practices.</P>
            <P>SweepTrack Pro is designed with a <strong>privacy-first architecture</strong>: all data is stored locally on your device, we do not operate backend servers, and we do not collect, transmit, or sell your personal data.</P>
          </section>

          <section>
            <H2>2. Data Controller</H2>
            <P>For the purposes of the EU General Data Protection Regulation (GDPR) and Romanian data protection law (Law 190/2018), the data controller is:</P>
            <P><strong>Coc Lorand P.F.A.</strong> (trading as Loriba)<br />CUI: 41299288 &middot; Reg. F24/646/2019<br />Email: <a href="mailto:support@sweeptrack.pro" className="text-accent hover:underline">support@sweeptrack.pro</a></P>
          </section>

          <section>
            <H2>3. Data We Collect</H2>

            <H3>3.1 Data Stored Locally on Your Device</H3>
            <P>The following data is created by you and stored <strong>exclusively on your device</strong>. We never have access to this data unless you explicitly share it.</P>
            <P><strong>Location and Session Data:</strong></P>
            <UL>
              <li>GPS coordinates (latitude, longitude) during active tracking sessions</li>
              <li>Speed, altitude, heading, and accuracy readings from device sensors</li>
              <li>Session metadata: name, date, start/end time, duration, distance, tags</li>
              <li>Path coordinates with timestamps</li>
              <li>Location names (obtained via reverse geocoding)</li>
            </UL>
            <P><strong>Find and Discovery Records:</strong></P>
            <UL>
              <li>Find type (Treasure, Gold, Coin, Relic, Jewelry, Trash)</li>
              <li>Find location (GPS coordinates at time of logging)</li>
              <li>Optional metadata: name, notes, depth, estimated value, weight</li>
              <li>Media attachments: photographs and audio recordings</li>
            </UL>
            <P><strong>Permission Vault Data:</strong></P>
            <UL>
              <li>Site names and locations</li>
              <li>Landowner names and contact information</li>
              <li>Permit numbers, issue dates, expiry dates</li>
              <li>Site boundary coordinates (polygon)</li>
              <li>Digital signatures (SVG format)</li>
              <li>Custom tags and notes</li>
            </UL>
            <P><strong>Other Local Data:</strong> Detector preset configurations, app preferences (theme, units, language, map settings), and weather snapshots associated with sessions.</P>

            <H3>3.2 Data Processed Temporarily (Not Stored)</H3>
            <P>The following data is sent to third-party APIs for real-time functionality and is <strong>not stored by us or by these services beyond the immediate request</strong>:</P>
            <UL>
              <li>Approximate GPS coordinates sent to Open-Meteo for weather forecasts and elevation data</li>
              <li>Approximate GPS coordinates sent to OpenStreetMap/Nominatim for address lookup</li>
              <li>Approximate GPS coordinates sent to Overpass API for nearby historical POI discovery</li>
              <li>Approximate GPS coordinates sent to Wikipedia API for nearby article geosearch</li>
              <li>Tide station identifiers sent to NOAA for tide predictions</li>
              <li>Location search queries sent to Open-Meteo Geocoding for place name search</li>
            </UL>

            <H3>3.3 Data Processed by Third-Party Services</H3>
            <P><strong>Google Maps SDK:</strong> Your device&apos;s location is processed by Google Maps for map display. Subject to <a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</P>
            <P><strong>Google Sign-In and Google Drive (Optional):</strong> If you enable Google Drive backup, your Google account email is stored locally to identify the authenticated account. Backup data is uploaded to your own Google Drive account. We do not have access to your Google Drive.</P>
            <P><strong>RevenueCat (Subscription Management):</strong> An anonymous, randomly generated app user identifier is used for subscription verification. No personal information is shared. Subject to <a href="https://www.revenuecat.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">RevenueCat&apos;s Privacy Policy</a>.</P>

            <H3>3.4 Data We Do NOT Collect</H3>
            <UL>
              <li>We do <strong>not</strong> collect your name, email, phone number, or any personal identifiers</li>
              <li>We do <strong>not</strong> use analytics, crash reporting, or behavioral tracking SDKs</li>
              <li>We do <strong>not</strong> use advertising frameworks or ad identifiers</li>
              <li>We do <strong>not</strong> track usage patterns, session frequency, or feature usage</li>
              <li>We do <strong>not</strong> create user profiles or behavioral fingerprints</li>
              <li>We do <strong>not</strong> share, sell, rent, or trade any data with third parties</li>
              <li>We do <strong>not</strong> operate any servers that receive, process, or store your data</li>
            </UL>
          </section>

          <section>
            <H2>4. Legal Basis for Processing (GDPR)</H2>
            <UL>
              <li><strong>GPS/session data, find records, vault entries:</strong> Consent (Art. 6(1)(a)) — you actively initiate these actions</li>
              <li><strong>API calls (weather, geocoding):</strong> Legitimate interest (Art. 6(1)(f)) — necessary for core functionality</li>
              <li><strong>Google Drive backup:</strong> Consent (Art. 6(1)(a)) — you explicitly enable and authenticate</li>
              <li><strong>Subscription verification:</strong> Contract performance (Art. 6(1)(b)) — necessary to provide paid features</li>
            </UL>
            <P>You may withdraw consent at any time by stopping the relevant activity or by uninstalling the App.</P>
          </section>

          <section>
            <H2>5. How We Use Your Data</H2>
            <P>All data processing occurs <strong>locally on your device</strong>. We use your data exclusively to provide the App&apos;s features: map display, session tracking, find logging, permission management, weather/tide data, exports, backup, and subscription verification.</P>
          </section>

          <section>
            <H2>6. Data Storage and Security</H2>
            <UL>
              <li>Session and find data stored in an encrypted Room database on your device</li>
              <li>Sensitive preferences use Android&apos;s EncryptedSharedPreferences (AES-256)</li>
              <li>Media files stored in the App&apos;s private internal storage, inaccessible to other apps</li>
              <li>Android cloud backup <strong>disabled</strong> (<code>android:allowBackup=&quot;false&quot;</code>) to prevent unintended data exposure</li>
              <li>Google Drive backups use Google&apos;s encrypted APIs (HTTPS/TLS) and exist solely in your account</li>
            </UL>
            <P>We do not operate any servers, databases, or cloud infrastructure.</P>
          </section>

          <section>
            <H2>7. Data Retention</H2>
            <P>Local data is retained until you choose to delete it. You can delete individual items within the App, clear all data via Android Settings, or uninstall the App. Google Drive backups persist until you manually delete them from your account.</P>
          </section>

          <section>
            <H2>8. Data Sharing and Disclosure</H2>
            <P>We do not share, sell, rent, or disclose your personal data to any third party. You may choose to share data through exports (GPX, KML, CSV, JSON), session share cards, or Google Drive backup — all user-initiated.</P>
          </section>

          <section>
            <H2>9. Your Rights (GDPR and International)</H2>
            <H3>GDPR Rights (EU/EEA Residents)</H3>
            <UL>
              <li><strong>Access</strong> — your data is fully accessible on your device</li>
              <li><strong>Rectification</strong> — edit all records directly in the App</li>
              <li><strong>Erasure</strong> — delete via in-app deletion or uninstalling</li>
              <li><strong>Restriction</strong> — control all processing by starting/stopping features</li>
              <li><strong>Data Portability</strong> — export via GPX, KML, CSV, JSON</li>
              <li><strong>Objection</strong> — stop any feature at any time</li>
              <li><strong>Withdraw Consent</strong> — at any time without affecting prior processing</li>
            </UL>
            <H3>United Kingdom (UK GDPR)</H3>
            <P>Your rights under the UK GDPR and Data Protection Act 2018 are equivalent to the GDPR rights above. You may contact the <a href="https://ico.org.uk" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">ICO</a>.</P>
            <H3>Australia (Privacy Act 1988)</H3>
            <P>You have rights under the Australian Privacy Principles (APPs) including access and correction. You may contact the <a href="https://www.oaic.gov.au" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">OAIC</a>.</P>
            <H3>Canada (PIPEDA)</H3>
            <P>You have rights under PIPEDA and applicable provincial privacy legislation including access, correction, and consent withdrawal. You may contact the <a href="https://www.priv.gc.ca" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Office of the Privacy Commissioner of Canada</a>.</P>
            <H3>California Residents (CCPA/CPRA)</H3>
            <P>We do <strong>not</strong> sell or share any personal information. We do not use data for cross-context behavioral advertising. You have rights to know, delete, limit sensitive data use, and non-discrimination.</P>
            <H3>Brazilian Residents (LGPD)</H3>
            <P>Equivalent rights under the Lei Geral de Protecao de Dados apply. You may contact the <a href="https://www.gov.br/anpd" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">ANPD</a>.</P>
            <H3>New Zealand (Privacy Act 2020)</H3>
            <P>You have rights under the Privacy Act 2020 including access and correction. You may contact the <a href="https://www.privacy.org.nz" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">NZ Privacy Commissioner</a>.</P>
            <H3>Other Jurisdictions</H3>
            <P>Regardless of your location, you have full control over your data through the App. Where local law grants additional privacy rights that cannot be waived by contract, those rights apply.</P>
          </section>

          <section>
            <H2>10. Children&apos;s Privacy</H2>
            <P>The App is not directed at children under 16. We do not knowingly collect personal information from children under 16. If you believe a child has used the App, you can delete their data by clearing App data or uninstalling.</P>
          </section>

          <section>
            <H2>11. Permissions Explained</H2>
            <UL>
              <li><strong>ACCESS_FINE_LOCATION</strong> — GPS for path tracking during sessions</li>
              <li><strong>ACCESS_BACKGROUND_LOCATION</strong> — continue tracking when screen is off</li>
              <li><strong>CAMERA</strong> — capture photos for find logging</li>
              <li><strong>RECORD_AUDIO</strong> — record audio notes for finds</li>
              <li><strong>READ/WRITE_CALENDAR</strong> — permission vault expiry reminders</li>
              <li><strong>INTERNET</strong> — weather, geocoding, tides, maps, subscriptions</li>
              <li><strong>POST_NOTIFICATIONS</strong> — GPS tracking notification</li>
              <li><strong>VIBRATE</strong> — perimeter guard boundary alerts</li>
            </UL>
            <P>You may revoke any permission at any time through Android Settings.</P>
          </section>

          <section>
            <H2>12. Cookies and Tracking</H2>
            <P>The App does not use cookies, web beacons, pixel tags, device fingerprinting, or any other tracking technologies.</P>
          </section>

          <section>
            <H2>13. International Data Transfers</H2>
            <P>Since all data is stored locally on your device, no international data transfers occur under our control. Third-party API calls may be processed in jurisdictions where those services operate.</P>
          </section>

          <section>
            <H2>14. Data Breach Notification</H2>
            <P>Since we do not store your data on any server, a data breach on our end is not possible. If we become aware of a vulnerability in the App, we will issue an update and notify users through the App or website.</P>
          </section>

          <section>
            <H2>15. Changes to This Policy</H2>
            <P>We may update this Privacy Policy to reflect changes in functionality or applicable laws. The &ldquo;Last Updated&rdquo; date will be revised. Material changes will be communicated via the App or website.</P>
          </section>

          <section>
            <H2>16. Third-Party Privacy Policies</H2>
            <UL>
              <li><a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google (Maps, Drive, Sign-In)</a></li>
              <li><a href="https://www.revenuecat.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">RevenueCat</a></li>
              <li><a href="https://open-meteo.com/en/terms" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Open-Meteo</a></li>
              <li><a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">OpenStreetMap</a></li>
              <li><a href="https://foundation.wikimedia.org/wiki/Privacy_policy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
              <li><a href="https://www.noaa.gov/privacy-policy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">NOAA</a></li>
            </UL>
          </section>

          <section>
            <H2>17. Contact Us</H2>
            <P>
              <strong>Coc Lorand P.F.A.</strong> (trading as Loriba)<br />
              CUI: 41299288 &middot; Reg. F24/646/2019<br />
              Email: <a href="mailto:support@sweeptrack.pro" className="text-accent hover:underline">support@sweeptrack.pro</a><br />
              Website: <a href="https://sweeptrack.pro" className="text-accent hover:underline">https://sweeptrack.pro</a>
            </P>
            <P>For GDPR-related inquiries, you may also contact ANSPDCP (Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal) at <a href="https://www.dataprotection.ro" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">dataprotection.ro</a>.</P>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-variant text-center text-muted text-xs">
          This Privacy Policy is effective as of April 7, 2026 and applies to all versions of SweepTrack Pro.
          <br />
          &copy; {new Date().getFullYear()} Coc Lorand P.F.A. All rights reserved.
        </div>
      </article>
    </main>
  );
}
