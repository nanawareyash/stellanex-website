import AboutSection from "@/pages/home/AboutSection";
import ContactSection from "@/pages/home/ContactSection";
import HeroSection from "@/pages/home/HeroSection";
import ServicesSection from "@/pages/home/ServicesSection";
import TeamSection from "@/pages/home/TeamSection";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
    </Fragment>
  );
}
