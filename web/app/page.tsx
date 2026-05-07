import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import DemoSection from "@/components/DemoSection";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import WhyLogBuild from "@/components/WhyLogBuild";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <DemoSection />
        <Features />
        <Pricing />
        <WhyLogBuild />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
