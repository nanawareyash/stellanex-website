"use client";

import DisconnectedToolsIcon from "@/components/svgs/DisconnectedToolsIcon";
import InfrastructureGapIcon from "@/components/svgs/InfrastructureGapIcon";
import IntegrationHellIcon from "@/components/svgs/IntegrationHellIcon";
import SimulationGapIcon from "@/components/svgs/SimulationGapIcon";
import { useEffect, useState } from "react";
import ProblemSectionDesktop from "../../templates/ProblemSectionDesktop";
import ProblemSectionMobile from "../../templates/ProblemSectionMobile";

const problems = [
  {
    icon: DisconnectedToolsIcon,
    title: "Disconnected Tools",
    description: "Too many disconnected tools (CAD, Simulation, Code, Control)",
    details:
      "Engineers juggle multiple tools that don't integrate, causing constant context switching and wasted time.",
    impact: "40% of development time",
    stats: "Engineers spend 2-3 hours daily just on tool switching",
    color: "rgba(239, 68, 68, 0.3)",
  },
  {
    icon: IntegrationHellIcon,
    title: "Integration Hell",
    description: "Endless time wasted integrating systems that don't talk",
    details:
      "Every connection needs custom adapters and maintenance. Plug-and-play becomes months of integration work.",
    impact: "60% of project delays",
    stats: "Average robotics project takes 3x longer due to integration issues",
    color: "rgba(59, 130, 246, 0.3)",
  },
  {
    icon: SimulationGapIcon,
    title: "Simulation Gap",
    description: "Simulation ≠ Reality — most robots never reach deployment",
    details:
      "Simulations miss real-world complexities. The sim-to-real gap kills most promising prototypes.",
    impact: "70% of simulated robots fail in reality",
    stats: "Only 3 out of 10 simulated robots work in real environments",
    color: "rgba(147, 51, 234, 0.3)",
  },
  {
    icon: InfrastructureGapIcon,
    title: "Infrastructure Gap",
    description: "India's robotics ecosystem lacks deep-tech infrastructure",
    details:
      "Limited hardware, expensive testing, and fragmented supply chains make development costly.",
    impact: "5x higher development costs",
    stats:
      "Indian robotics startups face 5x higher infrastructure costs vs. global competitors",
    color: "rgba(16, 185, 129, 0.3)",
  },
];

function ProblemSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if desktop view (>= 1024px)
  useEffect(() => {
    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);

  return (
    <section className="w-full min-h-screen py-16 bg-secondary">
      {/* Desktop: Scroll Animation Container */}
      <div className={`${isDesktop ? "block" : "hidden"}`}>
        <ProblemSectionDesktop problems={problems} />
      </div>

      {/* Mobile/Tablet: Normal Sections */}
      <div className={`${!isDesktop ? "block" : "hidden"}`}>
        <ProblemSectionMobile problems={problems} />
      </div>
    </section>
  );
}

export default ProblemSection;
