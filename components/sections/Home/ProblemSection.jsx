"use client";

import DisconnectedToolsIcon from "@/components/svgs/DisconnectedToolsIcon";
import InfrastructureGapIcon from "@/components/svgs/InfrastructureGapIcon";
import IntegrationHellIcon from "@/components/svgs/IntegrationHellIcon";
import SimulationGapIcon from "@/components/svgs/SimulationGapIcon";
import ScrollTitle from "@/components/ui/scroll-title";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, RotateCcw, TrendingDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const problems = [
  {
    icon: DisconnectedToolsIcon,
    title: "Disconnected Tools",
    description: "Too many disconnected tools (CAD, Simulation, Code, Control)",
    details:
      "Engineers juggle multiple tools that don't integrate, causing constant context switching and wasted time. Engineers spend 2-3 hours daily just on tool switching",
    impact: "40% of development time",
    bgImage: {
      mobile: "/images/problems/disconnected-tools.png",
      desktop: "/images/problems/disconnected-tools.png"
    },
    bgClasses: "bg-cover bg-center sm:bg-bottom",
    gradientClasses: "from-black/80 to-transparent bg-gradient-to-r to-40%"
  },
  {
    icon: IntegrationHellIcon,
    title: "Integration Hell",
    description: "Endless time wasted integrating systems that don't talk",
    details:
      "Every connection needs custom adapters and maintenance. Plug-and-play becomes months of integration work. Average robotics project takes 3x longer due to integration issues",
    impact: "60% of project delays",
    bgImage: {
      mobile: "/images/problems/integration-hell-mobile.png",
      desktop: "/images/problems/integration-hell-desktop.png"
    },
    bgClasses: "bg-cover bg-bottom",
    gradientClasses: "from-black/80 to-transparent bg-gradient-to-r to-40%"
  },
  {
    icon: SimulationGapIcon,
    title: "Simulation Gap",
    description: "Simulation ≠ Reality — most robots never reach deployment",
    details:
      "Simulations miss real-world complexities. The sim-to-real gap kills most promising prototypes. Only 3 out of 10 simulated robots work in real environments",
    impact: "70% of simulated robots fail in reality",
    bgImage: {
      mobile: "/images/problems/simulation-gap-mobile.png",
      desktop: "/images/problems/simulation-gap-desktop.png"
    },
    bgClasses: "bg-cover bg-top",
    gradientClasses: "from-black/80 to-transparent bg-gradient-to-r to-40%"
  },
  {
    icon: InfrastructureGapIcon,
    title: "Infrastructure Gap",
    description: "India's robotics ecosystem lacks deep-tech infrastructure",
    details:
      "Limited hardware, expensive testing, and fragmented supply chains make development costly. Indian robotics startups face 5x higher infrastructure costs vs. global competitors",
    impact: "5x higher development costs",
    bgImage: {
      mobile: "/images/problems/infrastructure-gap-mobile.png",
      desktop: "/images/problems/infrastructure-gap-desktop.png"
    },
    bgClasses: "bg-cover bg-center",
    gradientClasses: "from-black/80 to-transparent bg-gradient-to-r to-40%"
  },
];

const SLIDE_DURATION = 5000;
const PROGRESS_INTERVAL = 100; // Reduced frequency for better performance

function ProblemSection() {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isControllerVisible, setIsControllerVisible] = useState(false);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false); // Track if user has ever interacted

  // Refs for performance optimization
  const intervalRef = useRef();
  const progressRef = useRef(0);
  const currentProblemRef = useRef(0);
  const sectionRef = useRef();
  const sliderRef = useRef();
  const isPlayingRef = useRef(false);
  const isVisibleRef = useRef(false);
  const slideRefs = useRef([]);
  const isAutoScrollingRef = useRef(false);
  const lastUserActionRef = useRef("none"); // 'play', 'pause', 'navigate', 'none'

  // Sync refs with state for performance
  useEffect(() => {
    currentProblemRef.current = currentProblem;
  }, [currentProblem]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    isVisibleRef.current = isSliderVisible;
  }, [isSliderVisible]);

  // Horizontal Intersection Observer for controller visibility and active slide detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible slide
        let mostVisibleEntry = null;
        let maxIntersectionRatio = 0;
        let hasAnyIntersection = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hasAnyIntersection = true;
            if (entry.intersectionRatio > maxIntersectionRatio) {
              maxIntersectionRatio = entry.intersectionRatio;
              mostVisibleEntry = entry;
            }
          }
        });

        // Update controller visibility
        setIsControllerVisible(hasAnyIntersection);

        // Update slider visibility and handle auto-play logic
        const wasVisible = isSliderVisible;
        setIsSliderVisible(hasAnyIntersection);

        // Update current slide based on most visible slide
        if (mostVisibleEntry && !isAutoScrollingRef.current) {
          const slideIndex = slideRefs.current.findIndex(
            (ref) => ref === mostVisibleEntry.target
          );
          if (slideIndex !== -1 && slideIndex !== currentProblem) {
            setCurrentProblem(slideIndex);
            progressRef.current = 0;
            setProgress(0);
          }
        }

        // Smart auto-play logic based on user behavior
        if (hasAnyIntersection && !hasCompleted) {
          // First time becoming visible - auto-start
          if (!wasVisible && !hasUserInteracted) {
            setIsPlaying(true);
            lastUserActionRef.current = "auto-start";
          }
          // Returning to view - only resume if user last action was play or navigate
          else if (!wasVisible && hasUserInteracted) {
            const shouldResume =
              lastUserActionRef.current === "play" ||
              lastUserActionRef.current === "navigate" ||
              lastUserActionRef.current === "auto-start";
            if (shouldResume) {
              setIsPlaying(true);
            }
          }
        } else if (!hasAnyIntersection) {
          // Always pause when leaving viewport
          setIsPlaying(false);
        }
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75, 0.9],
        rootMargin: "0px -10% 0px -10%",
      }
    );

    // Observe all slide elements
    slideRefs.current.forEach((slideRef) => {
      if (slideRef) {
        observer.observe(slideRef);
      }
    });

    return () => {
      slideRefs.current.forEach((slideRef) => {
        if (slideRef) {
          observer.unobserve(slideRef);
        }
      });
    };
  }, []); // Empty dependency array to prevent controller rerendering

  // Optimized auto-play with single interval
  useEffect(() => {
    clearInterval(intervalRef.current);

    if (isPlaying && isSliderVisible) {
      const increment = 100 / (SLIDE_DURATION / PROGRESS_INTERVAL);

      intervalRef.current = setInterval(() => {
        // Use refs to avoid stale closures and reduce state reads
        if (!isPlayingRef.current || !isVisibleRef.current) {
          return;
        }

        const newProgress = progressRef.current + increment;

        if (newProgress >= 100) {
          // Reset progress and advance slide
          progressRef.current = 0;
          const nextProblem = (currentProblemRef.current + 1) % problems.length;

          // Check if we've reached the end (last slide completed)
          if (currentProblemRef.current === problems.length - 1) {
            // Stop the timer and mark as completed
            setHasCompleted(true);
            setIsPlaying(false);
            setProgress(0);
            return;
          }

          // Set auto-scrolling flag to prevent intersection observer conflicts
          isAutoScrollingRef.current = true;

          // Actually scroll to the next slide
          if (sliderRef.current) {
            const slideWidth = sliderRef.current.scrollWidth / problems.length;
            const targetScrollLeft = slideWidth * nextProblem;

            sliderRef.current.scrollTo({
              left: targetScrollLeft,
              behavior: "smooth",
            });

            // Clear the auto-scrolling flag after scroll completes
            setTimeout(() => {
              isAutoScrollingRef.current = false;
            }, 800); // Match with smooth scroll duration
          }

          // Batch state updates
          setProgress(0);
          setCurrentProblem(nextProblem);
        } else {
          // Update progress
          progressRef.current = newProgress;
          setProgress(newProgress);
        }
      }, PROGRESS_INTERVAL);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPlaying, isSliderVisible]);

  // Reset progress when visibility or play state changes
  useEffect(() => {
    progressRef.current = 0;
    setProgress(0);
  }, [isPlaying, isSliderVisible]);

  // Memoized callbacks for better performance
  const handlePlayPause = useCallback(() => {
    setHasUserInteracted(true);

    if (hasCompleted) {
      // Restart from beginning
      setHasCompleted(false);
      setCurrentProblem(0);
      currentProblemRef.current = 0;
      progressRef.current = 0;
      setProgress(0);
      setIsPlaying(true);
      lastUserActionRef.current = "play";

      // Scroll to first slide
      if (sliderRef.current) {
        isAutoScrollingRef.current = true;
        sliderRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        setTimeout(() => {
          isAutoScrollingRef.current = false;
        }, 800);
      }
    } else {
      // Normal play/pause toggle
      const newPlayingState = !isPlaying;
      setIsPlaying(newPlayingState);
      lastUserActionRef.current = newPlayingState ? "play" : "pause";
    }
  }, [hasCompleted, isPlaying]);

  const goToProblem = useCallback(
    (idx) => {
      if (idx !== currentProblem && sliderRef.current) {
        setHasUserInteracted(true);

        // Reset completion state when manually navigating
        setHasCompleted(false);
        lastUserActionRef.current = "navigate";

        // Immediately update the controller state
        setCurrentProblem(idx);
        progressRef.current = 0;
        setProgress(0);
        currentProblemRef.current = idx;

        // Set auto-scrolling flag to prevent intersection observer conflicts
        isAutoScrollingRef.current = true;

        const slideWidth = sliderRef.current.scrollWidth / problems.length;
        const targetScrollLeft = slideWidth * idx;

        sliderRef.current.scrollTo({
          left: targetScrollLeft,
          behavior: "smooth",
        });

        // Auto-resume playing after navigation (user intent to continue)
        setIsPlaying(true);

        // Clear the auto-scrolling flag after scroll completes
        setTimeout(() => {
          isAutoScrollingRef.current = false;
        }, 800);
      }
    },
    [currentProblem]
  );

  return (
    <>
      <style jsx>{`
        .problem-card {
          background-image: var(--bg-mobile);
        }
        
        @media (min-width: 640px) {
          .problem-card {
            background-image: var(--bg-desktop);
          }
        }
      `}</style>
      <ScrollTitle className="bg-secondary">
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
      </ScrollTitle>
      <section
        ref={sectionRef}
        className="relative w-full min-h-screen py-16 bg-secondary overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-8 h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-48 relative z-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              The Four Critical Problems
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
              The robotics industry faces fundamental challenges that prevent
              breakthrough innovations from reaching the real world.
            </p>
          </motion.div>
        </div>

        {/* Full width slider container */}
        <div
          className="relative w-full overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory"
          ref={sliderRef}
        >
          <div
            className="flex"
            style={{
              width: `${problems.length * 100}vw`,
            }}
          >
            {problems.map((problem, index) => {
              return (
                <div
                  key={index}
                  ref={(el) => (slideRefs.current[index] = el)}
                  className="flex-shrink-0 px-4 snap-center"
                  style={{ width: "100vw" }}
                >
                  <div className="w-full max-w-7xl mx-auto">
                    <div 
                      className={`problem-card relative h-[calc(100svh-7rem)] sm:h-[calc(100svh-15rem)] overflow-hidden flex flex-col-reverse sm:flex-row items-center rounded-2xl w-full bg-no-repeat border ${problem.bgClasses}`}
                      style={{
                        '--bg-mobile': `url('${problem.bgImage.mobile}')`,
                        '--bg-desktop': `url('${problem.bgImage.desktop}')`
                      }}
                    >
                      <div className="absolute top-0 left-0 p-4 sm:p-8 z-10 flex flex-col">
                        <span className="text-transparent font-black text-[4rem] sm:text-[15rem] text-stroke leading-none">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className={`w-full h-full ${problem.gradientClasses} flex flex-col justify-end sm:p-8`}>
                        <div className="text-white space-y-3 sm:space-y-4 w-full sm:max-w-2/3 bg-white/5 backdrop-blur-md rounded-xl px-4 py-2 sm:p-6 border">
                          <h3 className="text-2xl md:text-4xl font-bold leading-tight">
                            {problem.title}
                          </h3>
                          <p className="text-slate-300 text-lg leading-relaxed">
                            {problem.description}
                          </p>
                          <p className="text-slate-400 text-sm">
                            {problem.details}
                          </p>
                          <div className="flex flex-nowrap items-center gap-2 w-fit font-semibold pt-2 bg-red-500/10 backdrop-blur-sm rounded-full px-4 py-2 text-red-500">
                            <TrendingDown className="size-4" />
                            <span className="text-wrap">{problem.impact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controller remains in the section for proper z-index */}
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <AnimatePresence mode="wait">
              {isControllerVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.4 },
                    y: { duration: 0.5 },
                  }}
                  className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="flex gap-3 items-center h-[50px]">
                    <button
                      onClick={handlePlayPause}
                      className="h-full aspect-square flex justify-center items-center rounded-full cursor-pointer shadow-2xl border border-white/20 bg-white/40 backdrop-blur-2xl"
                    >
                      {hasCompleted ? (
                        <RotateCcw className="w-5 h-5 text-white" />
                      ) : isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      )}
                    </button>
                    <div className="h-full px-5 rounded-full bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20 flex items-center justify-between w-[175px]">
                      {problems.map((problem, index) => (
                        <button
                          key={index}
                          onClick={() => goToProblem(index)}
                          className="relative group cursor-pointer"
                          title={problem.title}
                          tabIndex={0}
                          aria-label={`Go to ${problem.title}`}
                        >
                          <div
                            className={`h-2 bg-white/20 rounded-full overflow-hidden transition-all duration-500 group-hover:scale-110 ${
                              currentProblem === index
                                ? "w-8 bg-white/30"
                                : "w-2"
                            }`}
                          >
                            <motion.div
                              className="h-full rounded-full bg-white"
                              animate={{
                                width:
                                  currentProblem === index
                                    ? `${progress}%`
                                    : "0%",
                              }}
                              transition={{
                                duration: currentProblem === index ? 0.1 : 0.4,
                                ease:
                                  currentProblem === index
                                    ? "linear"
                                    : "easeInOut",
                              }}
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <ScrollTitle className="bg-secondary">
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-bold leading-tight text-red-500"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          These problem cost billions annually!
        </motion.h1>
      </ScrollTitle>
      <ScrollTitle className="bg-secondary">
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
          We&apos;re fixing this from the{" "}
          <span className="text-gradient-red">ground-up</span>.
        </motion.h1>
      </ScrollTitle>
    </>
  );
}

export default ProblemSection;
