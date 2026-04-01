import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Sweep Track Pro",
  description:
    "Privacy Policy for Sweep Track Pro, the GPS tracking app for metal detecting.",
};

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

        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted text-sm mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              1. Data Collection
            </h2>
            <p>
              Sweep Track Pro collects GPS location data, session recordings,
              and find logs only when you actively use the tracking features.
              This data is stored locally on your device. We do not collect,
              transmit, or store your personal data on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              2. Cloud Backup
            </h2>
            <p>
              If you enable Google Drive backup, your session data is uploaded to{" "}
              <strong>your personal Google Drive account</strong>. We do not have
              access to your Google Drive data. The backup is controlled entirely
              by you and can be deleted at any time from your Drive.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              3. Location Data
            </h2>
            <p>
              GPS coordinates are used solely for tracking your detecting
              sessions, displaying maps, and providing weather, tide, and nearby
              site information. Location data is never shared with third
              parties. Location tracking only runs when you explicitly start a
              session.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              4. Analytics &amp; Subscriptions
            </h2>
            <p>
              We use RevenueCat for subscription management. RevenueCat may
              collect anonymous usage statistics related to purchase events. No
              personal detecting data, GPS coordinates, or session content is
              shared with RevenueCat or any other analytics provider.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              5. Third-Party Services
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong>Google Maps</strong> &mdash; Map display (
                <a
                  href="https://policies.google.com/privacy"
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s privacy policy
                </a>{" "}
                applies)
              </li>
              <li>
                <strong>Open-Meteo</strong> &mdash; Weather data (anonymous
                requests, no API key)
              </li>
              <li>
                <strong>OpenStreetMap</strong> &mdash; Offline map tiles
                (anonymous requests)
              </li>
              <li>
                <strong>NOAA</strong> &mdash; Tide data (anonymous requests)
              </li>
              <li>
                <strong>Supabase</strong> &mdash; Optional leaderboard and
                challenges (device-based ID only, no personal information)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              6. Data Retention
            </h2>
            <p>
              All session data remains on your device until you delete it. Cloud
              backups remain in your Google Drive until you delete them. We do
              not retain any user data on our infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              7. Permissions
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong>Location</strong> &mdash; Required for GPS tracking and
                map features
              </li>
              <li>
                <strong>Calendar</strong> &mdash; Optional, for permit expiry
                reminders
              </li>
              <li>
                <strong>Storage</strong> &mdash; For exporting sessions and
                offline maps
              </li>
              <li>
                <strong>Camera/Microphone</strong> &mdash; Optional, for
                documenting finds
              </li>
              <li>
                <strong>Vibration</strong> &mdash; For perimeter guard alerts
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              8. Children&apos;s Privacy
            </h2>
            <p>
              Sweep Track Pro is not intended for children under 13. We do not
              knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Changes will
              be reflected on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              10. Contact
            </h2>
            <p>
              For privacy concerns, contact us at{" "}
              <a
                href="mailto:privacy@sweeptrack.pro"
                className="text-accent hover:underline"
              >
                privacy@sweeptrack.pro
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-variant text-center text-muted text-xs">
          &copy; {new Date().getFullYear()} Sweep Track Pro by Loriba. All
          rights reserved.
        </div>
      </article>
    </main>
  );
}
