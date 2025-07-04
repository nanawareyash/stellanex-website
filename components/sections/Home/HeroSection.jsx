"use client";

import RoboticArmBlueprint from "@/components/svgs/RoboticArmBlueprint";
import { Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  fadeInUp,
  fadeInUpShort,
  fadeInUpSmall,
  scrollIndicator,
} from "@/lib/animations";

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
            Unifying India&apos;s Robotics Future
          </p>
        </motion.div>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUpSmall}
          custom={0.2}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl"
        >
          Design, Simulate, and Deploy Real Robots with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-pink-500">
            One Intelligent System
          </span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUpShort}
          custom={0.3}
          className="text-lg sm:text-xl text-gray-300 max-w-4xl"
        >
          We&apos;re building Xypher Engine — a unified robotics stack designed
          for builders like you. Start with intelligent software. Deploy into
          the real world. No duct tape, no guesswork.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpShort}
          custom={0.4}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 text-white font-semibold rounded-full cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300">
            Join Waitlist
          </button>
          <button className="px-8 py-3 border border-gray-400 text-gray-300 font-semibold rounded-full cursor-pointer hover:bg-gray-800 hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </motion.div>
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
