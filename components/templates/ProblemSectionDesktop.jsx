"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

function ProblemSectionDesktop({ problems }) {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  // Efficiently update heights
  useEffect(() => {
    const updateHeights = () => {
      setHeaderHeight(headerRef.current?.offsetHeight || 0);
      setScreenHeight(window.innerHeight);
    };
    updateHeights();
    window.addEventListener("resize", updateHeights);
    window.addEventListener("orientationchange", updateHeights);
    return () => {
      window.removeEventListener("resize", updateHeights);
      window.removeEventListener("orientationchange", updateHeights);
    };
  }, []);

  // Memoize dynamic height calculation
  const dynamicHeight = useMemo(() => {
    if (!screenHeight) return "280svh";
    const navbarHeight = 64;
    const availableHeight = screenHeight - navbarHeight;
    const contentSections = problems.length;
    const baseMultiplier = screenHeight < 768 ? 1.1 : 1.3;
    const sectionMultiplier = screenHeight < 768 ? 0.3 : 0.4;
    const totalHeight =
      (baseMultiplier + contentSections * sectionMultiplier + 1) * availableHeight;
    return Math.min(totalHeight, screenHeight * 3.5);
  }, [screenHeight, problems.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Title transforms
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0.9]);
  const titleY = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 0, -50]);
  // Content transforms
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.3], [50, 0]);

  // Section transforms - call hooks at top level
  const totalSections = problems.length;
  const contentStartProgress = 0.3;
  const availableProgress = 0.7;
  const sectionDuration = availableProgress / totalSections;
  const sectionTransforms = problems.map((_, i) => {
    const start = contentStartProgress + i * sectionDuration;
    const fadeOutStart = start + sectionDuration * 0.8;
    const fadeOutEnd = Math.min(start + sectionDuration, 0.95);
    const cardStart = 0.6 + i * 0.05;
    const cardEnd = cardStart + 0.1;
    let sectionOpacityTransform;
    if (i === 0) {
      sectionOpacityTransform = useTransform(
        scrollYProgress,
        [start, start + 0.05, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
      );
    } else if (i === totalSections - 1) {
      sectionOpacityTransform = useTransform(
        scrollYProgress,
        [start, start + sectionDuration * 0.1, 0.85, 1],
        [0, 1, 1, 1]
      );
    } else {
      sectionOpacityTransform = useTransform(
        scrollYProgress,
        [start, start + sectionDuration * 0.1, fadeOutStart, fadeOutEnd],
        [0, 1, 1, 0]
      );
    }
    return {
      sectionOpacity: sectionOpacityTransform,
      cardOpacity: useTransform(scrollYProgress, [cardStart, cardEnd], [0, 1]),
      cardY: useTransform(scrollYProgress, [cardStart, cardEnd], [30, 0]),
    };
  });

  // Orbs transforms
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div
      className="relative w-full"
      ref={containerRef}
      style={{
        height: screenHeight > 0 ? `${dynamicHeight}px` : "300svh",
      }}
    >
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
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-40 sm:h-40 rounded-full blur-2xl sm:blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(37, 99, 235, 0.2) 40%, transparent 70%)",
            y: orb1Y,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl sm:blur-3xl opacity-25"
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

      {/* Initial Large Title Screen */}
      <motion.div
        className="sticky top-16 w-full flex items-center justify-center z-20"
        style={{
          height: "calc(100svh - 4rem)",
          opacity: titleOpacity,
          scale: titleScale,
          y: titleY,
        }}
      >
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-bold leading-tight text-white"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Why Robotics is <span className="text-gradient-red">Stuck</span>?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-slate-300 mt-6 text-lg md:text-xl max-w-2xl mx-auto"
          >
            The robotics industry faces fundamental challenges that prevent breakthrough innovations from reaching the real world.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content Sections */}
      <motion.div
        className="sticky top-16 flex flex-col overflow-hidden z-10"
        style={{
          height: "calc(100svh - 4rem)",
          minHeight: "calc(100svh - 4rem)",
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        <div
          className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 h-full flex flex-col relative"
          style={{
            minHeight: "calc(100svh - 4rem)",
          }}
        >
          {/* Compact Header */}
          <motion.div
            ref={headerRef}
            className="text-center pt-4 md:pt-8 pb-2 sm:pb-4 md:pb-6 lg:pb-8 relative z-30 flex-shrink-0"
          >
            <motion.h2
              className="font-bold mb-3 sm:mb-4 md:mb-6 text-center leading-tight text-white"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              Why Robotics is <span className="text-gradient-red">Stuck</span>?
            </motion.h2>
            <motion.p
              className="text-slate-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 md:px-0"
              style={{
                fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
              }}
            >
              The robotics industry faces fundamental challenges that prevent breakthrough innovations from reaching the real world.
            </motion.p>
          </motion.div>

          {/* Sequential Fade Sections */}
          <div
            className="flex-1 flex items-center justify-center min-h-0"
            style={{
              minHeight:
                screenHeight > 0
                  ? `calc(100svh - 4rem - ${headerHeight || 120}px)`
                  : "calc(100svh - 4rem - 120px)",
            }}
          >
            <div
              className="relative w-full max-w-7xl overflow-hidden h-full"
              style={{
                minHeight: "50svh",
              }}
            >
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  style={{
                    opacity: sectionTransforms[index].sectionOpacity,
                    zIndex: 1,
                  }}
                >
                  <div
                    className="relative p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 h-full flex flex-col-reverse justify-center md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 overflow-hidden"
                    style={{
                      minHeight: screenHeight > 0 ? `50svh` : "50svh",
                    }}
                  >
                    <div className="relative">
                      {/* Vertical Strip with Number */}
                      <div className="absolute top-0 z-10">
                        <motion.div
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ scaleY: 1, opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.2,
                            ease: "easeOut",
                          }}
                          className="relative origin-center"
                        >
                          <div
                            className="rounded-full flex items-center justify-center backdrop-blur-sm border-2"
                            style={{
                              width: "clamp(2.5rem, 6vw, 4rem)",
                              height: "clamp(6rem, 15vw, 10rem)",
                              background: `linear-gradient(180deg, ${problem.color.replace(
                                "0.3",
                                "0.9"
                              )}, ${problem.color.replace("0.3", "0.6")})`,
                              borderColor: "rgba(255, 255, 255, 0.2)",
                              boxShadow: `0 0 30px ${problem.color.replace(
                                "0.3",
                                "0.4"
                              )}, inset 0 0 20px rgba(255, 255, 255, 0.1)`,
                            }}
                          >
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                duration: 0.6,
                                delay: index * 0.2 + 0.4,
                                type: "spring",
                                stiffness: 100,
                              }}
                              className="text-center"
                            >
                              <div
                                className="text-white font-black leading-none mb-1"
                                style={{
                                  fontSize: "clamp(1rem, 3vw, 2rem)",
                                }}
                              >
                                {String(index + 1).padStart(2, "0")}
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div
                        className="flex-1 text-center sm:text-left space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-none relative z-10"
                        style={{
                          marginLeft: "clamp(3.5rem, 8vw, 6rem)",
                        }}
                      >
                        <div className="space-y-2 sm:space-y-3 md:space-y-4">
                          <h3
                            className="font-bold text-white leading-tight"
                            style={{
                              fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                            }}
                          >
                            {problem.title}
                          </h3>
                          <p
                            className="text-slate-300 leading-relaxed font-medium"
                            style={{
                              fontSize: "clamp(1.125rem, 2.5vw, 1.75rem)",
                            }}
                          >
                            {problem.description}
                          </p>
                          <p
                            className="text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                            style={{
                              fontSize: "clamp(1rem, 2vw, 1.375rem)",
                            }}
                          >
                            {problem.details}
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
                          <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-xl sm:rounded-2xl border bg-gray-600/10 backdrop-blur-sm">
                            <div
                              className="text-white uppercase font-semibold tracking-widest mb-2"
                              style={{
                                fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
                              }}
                            >
                              Impact
                            </div>
                            <div
                              className="text-gray-300 font-medium leading-tight"
                              style={{
                                fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                              }}
                            >
                              {problem.impact}
                            </div>
                          </div>
                          <div className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-xl sm:rounded-2xl border bg-gray-600/10 backdrop-blur-sm">
                            <div
                              className="text-white uppercase tracking-widest mb-2"
                              style={{
                                fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
                              }}
                            >
                              Reality
                            </div>
                            <div
                              className="text-slate-300 font-medium leading-tight"
                              style={{
                                fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                              }}
                            >
                              {problem.stats}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Illustration */}
                    <div
                      className="mx-auto md:mx-0 relative flex items-center justify-center rounded-lg"
                      style={{
                        height: "clamp(200px, 30vw, 300px)",
                        width: "clamp(200px, 30vw, 300px)",
                        minHeight: "clamp(200px, 30vw, 300px)",
                        minWidth: "clamp(200px, 30vw, 300px)",
                        maxHeight: "400px",
                        maxWidth: "400px",
                      }}
                    >
                      <problem.icon className="w-full h-full text-white opacity-90" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProblemSectionDesktop;
