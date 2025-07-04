"use client";

import { fadeInUpSmall } from "@/lib/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollTitle = ({ children, className }) => {
  const containerRef = useRef(null);

  // Track scroll progress within this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });

  // Only use opacity transform to avoid flickering
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      className={`w-full text-white text-center h-[100svh] sticky top-0 -z-10 ${
        className || ""
      }`}
    >
      <div className="h-full flex items-center justify-center container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpSmall}
          custom={0.2}
          style={{ opacity }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-5xl will-change-transform transform-gpu"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollTitle;
