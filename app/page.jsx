import Footer from "@/components/layouts/Footer";
import HeroSection from "@/components/sections/Home/HeroSection";
import ProblemSection from "@/components/sections/Home/ProblemSection";
import WhyNowSection from "@/components/sections/Home/WhyNowSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyNowSection />
      <ProblemSection />
      <Footer />
    </>
  );
}
