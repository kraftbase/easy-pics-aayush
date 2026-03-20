import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Pricing />
      <Testimonial />
      <FAQSection />
    </main>
  );
}
