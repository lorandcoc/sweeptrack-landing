import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    publisher: {
      "@type": "Organization",
      name: "SweepTrack Pro",
      url: "https://sweeptrack.pro",
      logo: "https://sweeptrack.pro/icon.svg",
    },
    author: {
      "@type": "Person",
      name: "Lorand",
      url: "https://lorand.cc",
    },
    datePublished: "2026-04-09",
    dateModified: "2026-04-09",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </>
  );
}
