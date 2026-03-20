import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import FAQSection from "@/components/FAQSection";
import ReadyToPIXSection from "@/components/ReadyToPIXSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Pricing />
      <Testimonial />
      <FAQSection />
      <ReadyToPIXSection />
      <Footer />
    </main>
  );
}
