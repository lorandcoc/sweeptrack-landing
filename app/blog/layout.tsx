import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Guides & Tips",
  description:
    "Metal detecting guides, location tips, detector comparisons, and SweepTrack Pro tutorials. Practical advice for beginners and experienced hunters.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </>
  );
}
