import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import FeatureHooks from "@/components/FeatureHooks";
import HowItWorks from "@/components/HowItWorks";
import Screenshots from "@/components/Screenshots";
import Tutorials from "@/components/Tutorials";
import Marquee from "@/components/Marquee";
import ThemeShowcase from "@/components/ThemeShowcase";
import CommunityLinks from "@/components/CommunityLinks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <FeatureHooks />
        <FeatureShowcase />
        <Screenshots />
        <Tutorials />
        <Marquee />
        <ThemeShowcase />
        <CommunityLinks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
