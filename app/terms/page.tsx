import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for SweepTrack Pro, the GPS tracking app for metal detecting.",
};

/* Reusable section styles */
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

export default function TermsOfService() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm"
        >
          &larr; Back to home
        </Link>

        <h1 className="text-3xl font-bold mb-1">Terms of Service</h1>
        <p className="text-muted text-sm mb-1"><strong>SweepTrack Pro</strong> — GPS Tracking Application for Metal Detecting</p>
        <p className="text-muted text-sm mb-1">Effective Date: April 7, 2026 &middot; Last Updated: April 7, 2026</p>
        <p className="text-muted text-sm mb-1">Operated by: Coc Lorand P.F.A., trading as &ldquo;Loriba&rdquo;</p>
        <p className="text-muted text-sm mb-1">CUI: 41299288 &middot; Reg. F24/646/2019</p>
        <p className="text-muted text-sm mb-10">Website: sweeptrack.pro</p>

        <div className="space-y-8 text-foreground/90 leading-relaxed text-sm">

          <section>
            <H2>1. Acceptance of Terms</H2>
            <P>By downloading, installing, accessing, or using SweepTrack Pro (&ldquo;the App&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the App. &ldquo;We,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to Coc Lorand P.F.A., trading as Loriba.</P>
            <P>We reserve the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance. Material changes will be communicated via the App or our website.</P>
          </section>

          <section>
            <H2>2. Description of Service</H2>
            <P>SweepTrack Pro is a GPS-based tracking and session logging application designed for metal detecting enthusiasts. The App provides:</P>
            <UL>
              <li>Real-time GPS tracking and path recording</li>
              <li>Session logging with distance, speed, altitude, and duration metrics</li>
              <li>Find/discovery logging with photo, video, and audio attachments</li>
              <li>Weather forecasting and detecting condition scoring</li>
              <li>Tide table predictions (U.S. coastal stations via NOAA)</li>
              <li>Nearby historical and archaeological point-of-interest discovery</li>
              <li>Detector preset management for 60+ metal detector models</li>
              <li>Permission vault for managing landowner permissions and site access</li>
              <li>Perimeter guard with boundary alerts</li>
              <li>Offline map downloads</li>
              <li>Google Drive backup and restore</li>
              <li>Session export (GPX, KML, CSV, JSON) and comparison tools</li>
              <li>Calendar heatmap, statistics, and achievement tracking</li>
            </UL>
          </section>

          <section>
            <H2>3. Eligibility</H2>
            <P>You must be at least 16 years of age to use this App. If you are under 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.</P>
            <P>By using the App, you represent and warrant that you have the legal capacity to enter into a binding agreement in your jurisdiction.</P>
          </section>

          <section>
            <H2>4. Account and Authentication</H2>
            <P>The App does not require account creation. An optional Google Sign-In is available solely for the purpose of Google Drive backup and restore functionality.</P>
            <P>You are responsible for:</P>
            <UL>
              <li>Maintaining the security of your Google account credentials</li>
              <li>All activity that occurs through your authenticated session</li>
              <li>Ensuring your Google account settings align with your privacy preferences</li>
            </UL>
            <P>We do not store your Google account password. Authentication is handled entirely by Google&apos;s OAuth system.</P>
          </section>

          <section>
            <H2>5. Subscription and Payments</H2>
            <H3>5.1 Free Tier</H3>
            <P>The App offers limited functionality at no cost, including:</P>
            <UL>
              <li>Up to 5 finds per session</li>
              <li>Up to 10 sessions in history</li>
              <li>1 detector preset slot</li>
              <li>Access to core tracking and mapping features</li>
            </UL>
            <H3>5.2 Premium Subscription</H3>
            <P>A premium subscription, managed through the Google Play Store and processed by RevenueCat, Inc., unlocks unlimited finds, sessions, and detector presets, plus advanced features including historical map overlays, offline maps, perimeter guard, cloud backup, and additional tools.</P>
            <H3>5.3 Billing</H3>
            <UL>
              <li>All payments are processed through Google Play Store</li>
              <li>Subscription pricing is displayed at the time of purchase</li>
              <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period</li>
              <li>You may manage or cancel your subscription through Google Play Store settings</li>
            </UL>
            <H3>5.4 Refunds</H3>
            <P>Refund requests are handled by Google Play Store in accordance with their refund policies. We do not process refunds directly.</P>
          </section>

          <section>
            <H2>6. User Data and Privacy</H2>
            <H3>6.1 Data Collected</H3>
            <P>The App collects and stores the following data <strong>locally on your device</strong>:</P>
            <UL>
              <li>GPS coordinates, speed, altitude, and heading during active tracking sessions</li>
              <li>Session metadata (name, date, duration, distance, tags)</li>
              <li>Find/discovery records (type, location, name, notes, depth, value, weight)</li>
              <li>Media files (photos, videos, audio recordings) captured within the App</li>
              <li>Permission vault entries (site names, landowner names, contact information, permit details, boundary coordinates, signatures)</li>
              <li>Detector preset configurations</li>
              <li>Weather snapshots associated with sessions</li>
              <li>App preferences (theme, units, language)</li>
            </UL>
            <H3>6.2 Data Storage</H3>
            <UL>
              <li><strong>All data is stored locally on your device</strong> in an encrypted database and local file storage</li>
              <li><strong>No data is transmitted to our servers</strong> — we do not operate any backend servers or databases</li>
              <li><strong>Google Drive backup</strong> (optional, user-initiated) stores an encrypted copy of your data in your personal Google Drive account under a &ldquo;SweepTrack Backups&rdquo; folder</li>
              <li>Android cloud backup has been disabled to protect your data</li>
            </UL>
            <H3>6.3 Third-Party API Calls</H3>
            <P>The App makes network requests to the following third-party services for functionality purposes only. No personal or identifying data is sent unless explicitly noted:</P>
            <UL>
              <li><strong>Google Maps SDK</strong> — Map display</li>
              <li><strong>Open-Meteo</strong> — Weather data (approximate coordinates sent, no personal info)</li>
              <li><strong>OpenStreetMap / Nominatim</strong> — Reverse geocoding (coordinates sent, no personal info)</li>
              <li><strong>Overpass API</strong> — Nearby historical POI queries (coordinates sent, no personal info)</li>
              <li><strong>Wikipedia API</strong> — Nearby articles (coordinates sent, no personal info)</li>
              <li><strong>NOAA</strong> — Tide predictions (station ID sent, no personal info)</li>
              <li><strong>RevenueCat</strong> — Subscription verification (anonymous app user ID, no personal info)</li>
            </UL>
            <H3>6.4 No Analytics or Tracking</H3>
            <P>The App does <strong>not</strong> include any analytics SDKs, crash reporting tools, advertising frameworks, or behavioral tracking mechanisms. We do not collect, transmit, or sell any usage data.</P>
            <H3>6.5 Data Deletion</H3>
            <P>You may delete your data at any time by deleting individual items within the App, clearing app data through Android settings, uninstalling the App, or deleting Google Drive backups from your account.</P>
            <H3>6.6 Children&apos;s Privacy</H3>
            <P>We do not knowingly collect personal information from children under 16. If you believe a child has provided us with personal data, please contact us.</P>
          </section>

          <section>
            <H2>7. Permitted Use</H2>
            <P>You agree to use the App only for lawful purposes and in accordance with these Terms. You agree <strong>not</strong> to:</P>
            <UL>
              <li>Use the App for any illegal activity, including trespassing, unauthorized excavation, or violation of cultural heritage protection laws</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Distribute, sublicense, or commercially exploit the App or its content</li>
              <li>Attempt to circumvent subscription verification, premium feature restrictions, or any security measures</li>
              <li>Use automated systems (bots, scrapers) to interact with the App</li>
              <li>Interfere with or disrupt the App&apos;s functionality or associated services</li>
            </UL>
          </section>

          <section>
            <H2>8. Metal Detecting and Legal Compliance</H2>
            <H3>8.1 Your Responsibility</H3>
            <P>Metal detecting is subject to laws and regulations that vary by country, state, province, and municipality. <strong>You are solely responsible</strong> for obtaining proper permissions, complying with all applicable laws, adhering to cultural heritage and antiquities laws, and reporting finds as required by local law.</P>
            <H3>8.2 Permission Vault Disclaimer</H3>
            <P>The Permission Vault feature is a personal organizational tool. It does <strong>not</strong> constitute legal proof of permission, does not create any legal agreement between you and landowners, and does not replace any legally required written consent or permits.</P>
            <H3>8.3 No Legal Advice</H3>
            <P>Nothing in the App, including the Permission Vault, weather scoring, or detecting tips, constitutes legal advice.</P>
          </section>

          <section>
            <H2>9. GPS, Location, and Safety</H2>
            <P>GPS accuracy depends on your device hardware, satellite availability, atmospheric conditions, terrain, and surrounding structures. The App provides location data on an &ldquo;as-is&rdquo; basis. We do not guarantee accuracy of GPS data, distance measurements, altitude readings, or speed calculations.</P>
            <P>When a session is active, the App uses a foreground service to track your location in the background. A persistent notification is displayed. You may stop tracking at any time.</P>
            <P>Do not operate the App in a manner that endangers yourself or others. The perimeter guard feature is an approximate tool and should not be relied upon as a precise boundary indicator.</P>
          </section>

          <section>
            <H2>10. Third-Party Services and Content</H2>
            <P>The App uses map data from Google Maps, OpenStreetMap, Esri, OpenTopoMap, and USGS. Weather data from Open-Meteo. Tide predictions from NOAA. Historical POI data from OpenStreetMap and Wikipedia. All subject to their respective terms and licenses.</P>
            <P>We do not guarantee the accuracy, completeness, or currency of any third-party data.</P>
          </section>

          <section>
            <H2>11. Intellectual Property</H2>
            <P>SweepTrack Pro, including its design, code, graphics, UI components, and branding, is the intellectual property of Loriba. All rights reserved.</P>
            <P>You retain ownership of all content you create using the App. We do not claim any rights over your content.</P>
            <P>Detector brand names and model names are trademarks of their respective manufacturers. We are not affiliated with, endorsed by, or sponsored by any detector manufacturer.</P>
          </section>

          <section>
            <H2>12. Disclaimer of Warranties</H2>
            <p className="uppercase text-xs tracking-wide mb-3">THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT.</p>
          </section>

          <section>
            <H2>13. Limitation of Liability</H2>
            <p className="uppercase text-xs tracking-wide mb-3">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LORIBA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, ANY LOSS OF PROFITS, DATA, USE, OR GOODWILL, OR DAMAGES ARISING FROM GPS INACCURACY, RELIANCE ON WEATHER OR TIDE DATA, LOSS OF DATA, UNAUTHORIZED ACCESS, OR LEGAL CONSEQUENCES OF METAL DETECTING ACTIVITIES.</p>
            <P>In no event shall our total liability exceed the amount you paid for the App in the twelve (12) months preceding the claim.</P>
          </section>

          <section>
            <H2>14. Indemnification</H2>
            <P>You agree to indemnify, defend, and hold harmless Loriba from any claims, damages, losses, liabilities, costs, and expenses arising from your use of the App, violation of these Terms, violation of any applicable law, or your metal detecting activities.</P>
          </section>

          <section>
            <H2>15. Termination</H2>
            <P>We may terminate or suspend your access to the App at any time, without prior notice, for any reason, including breach of these Terms. Upon termination, your locally stored data remains on your device until you delete it.</P>
          </section>

          <section>
            <H2>16. Governing Law and Dispute Resolution</H2>
            <P>These Terms are governed by the laws of Romania. Any dispute shall first be attempted to be resolved through good-faith negotiation. If not resolved within 30 days, disputes shall be submitted to the competent courts of Romania.</P>
            <P>EU consumers may also have recourse to the European Online Dispute Resolution platform at <a href="https://ec.europa.eu/consumers/odr" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.</P>
          </section>

          <section>
            <H2>17. General Provisions</H2>
            <P>These Terms, together with our Privacy Policy, constitute the entire agreement between you and Loriba regarding the App. If any provision is held invalid, the remaining provisions continue in full force. Our failure to enforce any right shall not constitute a waiver.</P>
          </section>

          <section>
            <H2>18. Open Source and Third-Party Licenses</H2>
            <P>The App uses open-source components. Key attributions: Google Maps SDK (Copyright Google LLC), OpenStreetMap (ODbL), OpenTopoMap, Open-Meteo (CC BY 4.0), NOAA (public domain), USGS (public domain), Wikipedia (CC BY-SA 3.0), Jetpack Compose/Room/Hilt (Apache 2.0), RevenueCat SDK (MIT).</P>
          </section>

          <section>
            <H2>19. Contact</H2>
            <P>For questions about these Terms, please contact:</P>
            <P>
              <strong>Coc Lorand P.F.A.</strong> (trading as Loriba)<br />
              CUI: 41299288 &middot; Reg. F24/646/2019<br />
              Email: <a href="mailto:support@sweeptrack.pro" className="text-accent hover:underline">support@sweeptrack.pro</a><br />
              Website: <a href="https://sweeptrack.pro" className="text-accent hover:underline">https://sweeptrack.pro</a>
            </P>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-variant text-center text-muted text-xs">
          These Terms of Service are effective as of April 7, 2026 and apply to all versions of SweepTrack Pro.
          <br />
          &copy; {new Date().getFullYear()} Loriba. All rights reserved.
        </div>
      </article>
    </main>
  );
}
