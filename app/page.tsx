import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Screenshots from "@/components/Screenshots";
import Marquee from "@/components/Marquee";
import ThemeShowcase from "@/components/ThemeShowcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Screenshots />
        <Marquee />
        <ThemeShowcase />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
