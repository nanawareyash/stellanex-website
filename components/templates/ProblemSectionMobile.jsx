"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, memo } from "react";

// Memoized ProblemCard for performance
const ProblemCard = memo(function ProblemCard({ problem, index, total }) {
  return (
    <div className="relative mb-16">
      <div
        className="relative p-6 flex flex-col justify-center gap-8"
        style={{ minHeight: "60vh" }}
      >
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Illustration */}
          <div
            className="relative flex items-center justify-center"
            style={{
              height: "clamp(180px, 30vw, 250px)",
              width: "clamp(180px, 30vw, 250px)",
            }}
          >
            <problem.icon className="w-full h-full text-white opacity-90" />
          </div>
          {/* Number Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="inline-flex items-center justify-center rounded-full border-2"
            style={{
              width: "clamp(4rem, 16vw, 5rem)",
              height: "clamp(4rem, 16vw, 5rem)",
              background: `linear-gradient(135deg, ${problem.color.replace(
                "0.3",
                "0.9"
              )}, ${problem.color.replace("0.3", "0.6")})`,
              borderColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: `0 12px 40px ${problem.color.replace(
                "0.3",
                "0.4"
              )}`,
            }}
          >
            <span
              className="text-white font-black"
              style={{
                fontSize: "clamp(1.25rem, 6vw, 2rem)",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.div>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 max-w-md mx-auto"
          >
            <h3
              className="font-bold text-white leading-tight"
              style={{
                fontSize: "clamp(1.5rem, 6vw, 2.25rem)",
              }}
            >
              {problem.title}
            </h3>
            <p
              className="text-slate-300 leading-relaxed font-medium"
              style={{
                fontSize: "clamp(1rem, 4vw, 1.375rem)",
                lineHeight: "1.6",
              }}
            >
              {problem.description}
            </p>
            <p
              className="text-slate-400 leading-relaxed"
              style={{
                fontSize: "clamp(0.875rem, 3.5vw, 1.125rem)",
                lineHeight: "1.7",
              }}
            >
              {problem.details}
            </p>
          </motion.div>
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4 w-full max-w-sm"
          >
            <div className="p-6 rounded-xl border bg-gray-900/40 backdrop-blur-sm shadow-lg">
              <div
                className="text-white uppercase font-bold tracking-wider mb-3"
                style={{
                  fontSize: "clamp(0.75rem, 3vw, 0.875rem)",
                }}
              >
                Impact
              </div>
              <div
                className="text-gray-200 font-semibold leading-tight"
                style={{ fontSize: "clamp(1rem, 4vw, 1.25rem)" }}
              >
                {problem.impact}
              </div>
            </div>
            <div className="p-6 rounded-xl border bg-gray-900/40 backdrop-blur-sm shadow-lg">
              <div
                className="text-white uppercase font-bold tracking-wider mb-3"
                style={{
                  fontSize: "clamp(0.75rem, 3vw, 0.875rem)",
                }}
              >
                Reality
              </div>
              <div
                className="text-gray-200 font-semibold leading-tight"
                style={{ fontSize: "clamp(1rem, 4vw, 1.25rem)" }}
              >
                {problem.stats}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Separator */}
      {index < total - 1 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center my-20"
        >
          <div className="relative flex items-center">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500/30 to-blue-400/50"></div>
            <div className="relative mx-6">
              <div
                className="w-3 h-3 rotate-45 border border-blue-400/60 bg-gradient-to-br from-blue-400/20 to-purple-500/20 backdrop-blur-sm"
                style={{
                  boxShadow:
                    "0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 10px rgba(147, 51, 234, 0.2)",
                }}
              ></div>
              <div className="absolute inset-0 w-3 h-3 rotate-45 bg-blue-400/10 blur-sm"></div>
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-purple-500/30 to-purple-400/50"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
});

function ProblemSectionMobile({ problems }) {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Only track header height if needed elsewhere
  useEffect(() => {
    if (!headerRef.current) return;
    setHeaderHeight(headerRef.current.offsetHeight);
    // No resize/orientation listeners needed unless headerHeight is used
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Title transforms
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0.9]);
  const titleY = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0, -50]);
  // Content transforms
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.15, 0.25], [50, 0]);
  // Orbs
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-28 h-28 sm:w-36 sm:h-36 rounded-full blur-2xl sm:blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(37, 99, 235, 0.2) 40%, transparent 70%)",
            y: orb1Y,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 sm:w-28 sm:h-28 rounded-full blur-2xl sm:blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, rgba(5, 150, 105, 0.2) 50%, transparent 80%)",
            y: orb2Y,
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/6 w-20 h-20 sm:w-24 sm:h-24 rounded-full blur-xl sm:blur-2xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(147, 51, 234, 0.1) 60%, transparent 80%)",
            y: orb3Y,
          }}
        />
      </div>

      {/* Sticky Title */}
      <motion.div
        className="sticky top-16 w-full flex items-center justify-center z-20"
        style={{
          height: "calc(100svh - 4rem)",
          opacity: titleOpacity,
          scale: titleScale,
          y: titleY,
        }}
      >
        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-bold leading-tight text-white"
            style={{
              fontSize: "clamp(3rem, 12vw, 5rem)",
              textShadow: "0 8px 30px rgba(0,0,0,0.4)",
            }}
          >
            Why Robotics is <span className="text-gradient-red">Stuck</span>?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-slate-300 mt-8 max-w-md mx-auto"
            style={{
              fontSize: "clamp(1.125rem, 4vw, 1.5rem)",
              lineHeight: "1.6",
            }}
          >
            The robotics industry faces fundamental challenges that prevent breakthrough innovations from reaching the real world.
          </motion.p>
        </div>
      </motion.div>

      {/* Spacer */}
      <div style={{ height: "60vh" }} />

      {/* Main Content */}
      <motion.div
        className="relative flex flex-col overflow-hidden z-10"
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        <div className="container mx-auto px-4 relative">
          {/* Compact Header */}
          <motion.div
            ref={headerRef}
            className="text-center pt-8 pb-6 relative z-30 flex-shrink-0"
          >
            <motion.h2
              className="font-bold mb-6 text-center leading-tight text-white"
              style={{
                fontSize: "clamp(2rem, 8vw, 3rem)",
                textShadow: "0 6px 24px rgba(0,0,0,0.4)",
              }}
            >
              Why Robotics is <span className="text-gradient-red">Stuck</span>?
            </motion.h2>
            <motion.p
              className="text-slate-300 max-w-lg mx-auto px-6"
              style={{
                fontSize: "clamp(1rem, 4vw, 1.25rem)",
                lineHeight: "1.6",
              }}
            >
              The robotics industry faces fundamental challenges that prevent breakthrough innovations from reaching the real world.
            </motion.p>
          </motion.div>
          {/* Problems List */}
          <div className="flex-1 space-y-16 pb-16">
            <div className="relative w-full max-w-4xl mx-auto">
              {problems.map((problem, index) => (
                <ProblemCard
                  key={index}
                  problem={problem}
                  index={index}
                  total={problems.length}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProblemSectionMobile;
