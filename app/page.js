import { Fragment } from "react";

import AboutSection from "@/pages/home/AboutSection";
import ContactSection from "@/pages/home/ContactSection";
import HeroSection from "@/pages/home/HeroSection";
import NewsletterSection from "@/pages/home/NewsletterSection";
import ServicesSection from "@/pages/home/ServicesSection";
import TeamSection from "@/pages/home/TeamSection";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <NewsletterSection />
    </Fragment>
  );
}
