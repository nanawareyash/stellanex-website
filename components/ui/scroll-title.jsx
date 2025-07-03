"use client";

import { fadeInUpSmall } from "@/lib/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollTitle = ({ children, className }) => {
  const containerRef = useRef(null);
  
  // Track scroll progress within this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Transform scroll progress to opacity - fade out starting at 50% progress
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  
  // Transform scroll progress to scale - shrink along with fade out
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  // Transform scroll progress to y position - move up as we scroll
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -50]);
  
  return (
    <motion.div ref={containerRef} className={`w-full text-white text-center h-[250svh] ${className || ""}`}>
      <div className="h-[100svh] sticky top-0 flex items-center justify-center container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpSmall}
          custom={0.2}
          style={{ opacity, scale, y }}
          className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollTitle;
