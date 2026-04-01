import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Sweep Track Pro",
  description:
    "Terms of Service for Sweep Track Pro, the GPS tracking app for metal detecting.",
};

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

        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted text-sm mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              1. Acceptance
            </h2>
            <p>
              By downloading, installing, or using Sweep Track Pro, you agree to
              be bound by these Terms of Service. If you do not agree to these
              terms, do not use the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              2. Service Description
            </h2>
            <p>
              Sweep Track Pro is a GPS tracking and field companion app for
              metal detecting. Features include session recording, find logging,
              heatmaps, grid search mode, weather forecasts, tide tables,
              detector preset management, permission vault, and offline maps.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              3. Subscription
            </h2>
            <p>
              Certain premium features require a paid subscription managed
              through Google Play. Prices are displayed in the app before
              purchase. Subscriptions auto-renew unless cancelled at least 24
              hours before the end of the current billing period. You can manage
              or cancel subscriptions through Google Play Store settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              4. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                You are responsible for obtaining landowner permission before
                detecting on any property
              </li>
              <li>
                You must comply with all local, state, and federal laws
                regarding metal detecting
              </li>
              <li>You are responsible for filling any holes you dig</li>
              <li>
                GPS accuracy varies by device and conditions and should not be
                relied upon for legal boundary determination
              </li>
              <li>
                You are responsible for maintaining your own backups of session
                data
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              5. Limitation of Liability
            </h2>
            <p className="mb-2">
              Sweep Track Pro is provided &ldquo;as is&rdquo; without warranty
              of any kind. To the fullest extent permitted by law, we are not
              responsible for:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>GPS accuracy or signal availability</li>
              <li>Weather forecast or tide prediction accuracy</li>
              <li>
                Any damage to property or loss of finds during detecting
                activities
              </li>
              <li>
                Any legal issues arising from metal detecting activities
              </li>
              <li>Data loss due to device failure or app malfunction</li>
              <li>
                Perimeter guard boundary accuracy &mdash; the guard feature is
                an aid, not a guarantee
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              6. Intellectual Property
            </h2>
            <p>
              The app, its design, code, and branding are owned by Loriba.
              User-generated content (sessions, finds, photos, and notes)
              remains your property. You grant us no rights over your content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              7. Termination
            </h2>
            <p>
              We may terminate or suspend your access to the app if you violate
              these terms. You may stop using the app at any time by
              uninstalling it and cancelling any active subscription.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              8. Changes to These Terms
            </h2>
            <p>
              We may update these terms from time to time. Changes will be
              reflected on this page with an updated date. Continued use of the
              app after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              9. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of Romania. Any disputes
              shall be resolved in the courts of Romania.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-accent mb-2">
              10. Contact
            </h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a
                href="mailto:support@sweeptrack.pro"
                className="text-accent hover:underline"
              >
                support@sweeptrack.pro
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
