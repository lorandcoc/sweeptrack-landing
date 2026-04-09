import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Generating Permission Request and Thank-You Letters",
  description:
    "Learn how to generate professional permission request and thank-you letters in SweepTrack Pro using your Permission Vault entries, ready to copy or share as PDF.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Generating Permission Request and Thank-You Letters</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Asking a landowner for permission is nerve-wracking enough without having to write a letter from scratch. And sending a thank-you after a hunt is the kind of thing you know you should do but rarely get around to. SweepTrack Pro handles both with a simple letter generator tied to your Permission Vault.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Two Letter Types</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Permission Request</strong> &mdash; a polite, professional letter asking a landowner for detecting permission. Covers who you are, what you do, insurance mention, and how you&apos;ll leave the land</li>
            <li><strong>Thank You</strong> &mdash; a follow-up letter thanking the landowner after detecting. Mentions your respect for the property and invites continued access</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Generate a Letter</h2>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>Open the <strong>Permission Vault</strong></li>
            <li>Select the vault entry for the site (it must have a <strong>landowner name</strong> set)</li>
            <li>Tap the letter generation option</li>
            <li>Enter <strong>your name</strong> as the sender</li>
            <li>Choose the letter type: <strong>Request</strong> or <strong>Thank You</strong></li>
            <li>The letter generates instantly with professional formatting</li>
          </ol>

          <h2 className="text-xl font-semibold text-accent mt-8">What You Get</h2>
          <p>The generated letter is a complete, ready-to-send text. It addresses the landowner by name, introduces you, explains metal detecting in plain terms, and maintains a respectful, professional tone throughout. No jargon, no pushy language &mdash; just a clear, courteous message.</p>
          <p>From the preview you can:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Copy to clipboard</strong> &mdash; paste into an email, text message, or word processor</li>
            <li><strong>Share as PDF</strong> &mdash; generate a formatted PDF and send it via any app on your phone</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">The Owner Name Requirement</h2>
          <p>The generator needs a landowner name to personalize the letter. If your vault entry doesn&apos;t have one, you&apos;ll be prompted to add it first. Generic &ldquo;To whom it may concern&rdquo; letters don&apos;t get permissions &mdash; personalized ones do.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Why This Matters</h2>
          <p>Permissions are the lifeblood of the hobby. A well-written request letter dramatically increases your chances of getting a &ldquo;yes.&rdquo; A thank-you letter ensures you get invited back. Most detectorists do neither because it feels like too much effort. With the generator, it takes 30 seconds.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> generates professional permission request and thank-you letters from your vault entries, ready to copy or share as PDF in seconds.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/using-the-permission-vault" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Using the Permission Vault &rarr;</Link>
              <Link href="/blog/metal-detecting-permission-letter-template" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Metal Detecting Permission Letter Template &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
