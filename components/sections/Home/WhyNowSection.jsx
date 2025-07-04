"use client";

import ScrollRevealText from "@/components/ui/scroll-reveal-text";
import ScrollTitle from "@/components/ui/scroll-title";
import { motion } from "framer-motion";

function WhyNowSection() {
  return (
    <>
      <ScrollTitle className="bg-secondary-background">
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-bold leading-tight text-white"
          style={{
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          Why We&apos;re Building{" "}
          <span className="text-gradient-red">Xypher Engine</span>?
        </motion.h1>
      </ScrollTitle>
      <section className="bg-secondary-background py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* The Problem - Left aligned */}
          <ScrollRevealText
            className="bg-secondary-background my-[50vh]"
            alignment="left"
            textSize="large"
            textClassName="text-gray-300"
            sectionHeight="100vh"
            highlightWords={[
              "robots",
              "India",
              "ROS",
              "Simulation",
              "Firmware",
              "building",
            ]}
          >
            We&apos;ve built robots before — and we know what it&apos;s like to
            fight the stack. You design in one tool — Simulation in another —
            Flash Firmware — Tweak ROS. Pray it works. It&apos;s slow, painful,
            and built for people with infinite time. India has the talent. What
            we need is infrastructure — a system that lets you build faster,
            smarter, and cleaner. So we&apos;re building it. For you, and with
            you.
          </ScrollRevealText>
        </div>
      </section>
    </>
  );
}

export default WhyNowSection;
