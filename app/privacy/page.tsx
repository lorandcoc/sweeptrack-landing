import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for SweepTrack Pro. Privacy-first: all data stored locally, no analytics, no ads, no tracking.",
};

export default function PrivacyPolicy() {
  return <LegalPage page="privacy" />;
}
