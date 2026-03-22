import Hero from "@/components/Hero";
import USPBanner from "@/components/USPBanner";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <USPBanner />
        <Services />
        <Pricing />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
