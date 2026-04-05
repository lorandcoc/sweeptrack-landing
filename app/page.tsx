import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAll from "@/components/FeaturesAll";
import HowItWorks from "@/components/HowItWorks";
import Screenshots from "@/components/Screenshots";
import MapCompareSlider from "@/components/MapCompareSlider";
import Tutorials from "@/components/Tutorials";
import Marquee from "@/components/Marquee";
import CommunityLinks from "@/components/CommunityLinks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesAll />
        <HowItWorks />
        <MapCompareSlider />
        <Screenshots />
        <Tutorials />
        <Marquee />
        <CommunityLinks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
