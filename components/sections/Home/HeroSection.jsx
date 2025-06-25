"use client";

import RoboticArmBlueprint from "@/components/svgs/RoboticArmBlueprint";
import { Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, fadeInUpShort, fadeInUpSmall, scrollIndicator } from "@/lib/animations";

function HeroSection() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section className="w-full min-h-svh flex flex-col items-center justify-center pt-16 relative overflow-clip">
      <motion.div
        className="inset-0 z-[-1] overflow-clip w-full top-16 flex justify-center absolute will-change-transform"
        style={{ y: backgroundY }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          <RoboticArmBlueprint className="text-gray-700/70 mt-auto sm:mt-0 scale-200 sm:scale-150 lg:scale-125 -translate-x-3/4 sm:translate-x-0 sm:h-svw w-svh sm:w-[80%] opacity-20 -translate-y-[50px] lg:-translate-y-1/5 xl:-translate-y-[300px]" />
        </motion.div>
      </motion.div>
      <motion.div
        className="grow flex flex-col items-center text-center justify-center space-y-8 sm:space-y-10 px-4 sm:px-2 will-change-transform"
        style={{ y: textY }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpShort}
          custom={0.1}
          className="inline-flex items-center gap-2 bg-transparent backdrop-blur-2xl border px-4 py-2 rounded-full"
        >
          <Sparkles className="h-4 w-4 text-blue-400" />
          <p className="text-xs sm:text-sm font-medium">
            Build Real Robots. From Idea to Deployment
          </p>
        </motion.div>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUpSmall}
          custom={0.2}
          className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold"
        >
          <span>India&apos;s</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-pink-500">
            Robotics Intelligence
          </span>
          <br />
          <span>Revolution Begins Here</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUpShort}
          custom={0.3}
          className="text-sm sm:text-xl text-gray-300"
        >
          We're building the technology foundation that powers India&apos;s Next-Gen Robotics.<br /> Starting with intelligent software, and moving into real-world hardware.
        </motion.p>
      </motion.div>
      <div className="p-10">
        <div className="w-6 border-2 border-gray-400 flex justify-center rounded-full h-10">
          <motion.div
            className="size-1.5 rounded-full bg-gray-200"
            {...scrollIndicator}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
