import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for SweepTrack Pro, the GPS tracking app for metal detecting.",
};

export default function TermsOfService() {
  return <LegalPage page="terms" />;
}
