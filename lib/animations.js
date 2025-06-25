// Framer Motion Animation Constants
// Comprehensive collection of all animation variants and configurations

// =============================================================================
// FADE ANIMATIONS
// =============================================================================

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: { duration: 1, delay: custom }
  })
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, delay: custom }
  })
};

export const fadeInUpShort = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, delay: custom }
  })
};

export const fadeInUpSmall = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, delay: custom }
  })
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -80 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, delay: custom }
  })
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, delay: custom }
  })
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, delay: custom }
  })
};

// =============================================================================
// SLIDE ANIMATIONS
// =============================================================================

export const slideInFromLeft = {
  hidden: { x: "-100%", opacity: 0 },
  visible: (custom = 0) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom, ease: "easeOut" }
  })
};

export const slideInFromRight = {
  hidden: { x: "100%", opacity: 0 },
  visible: (custom = 0) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom, ease: "easeOut" }
  })
};

export const slideInFromTop = {
  hidden: { y: "-100%", opacity: 0 },
  visible: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom, ease: "easeOut" }
  })
};

export const slideInFromBottom = {
  hidden: { y: "100%", opacity: 0 },
  visible: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom, ease: "easeOut" }
  })
};

// =============================================================================
// SCALE ANIMATIONS
// =============================================================================

export const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: (custom = 0) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, delay: custom, ease: "easeOut" }
  })
};

export const scaleInSmall = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (custom = 0) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, delay: custom, ease: "easeOut" }
  })
};

export const scaleUp = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.1, 1],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

// =============================================================================
// ROTATION ANIMATIONS
// =============================================================================

export const rotateIn = {
  hidden: { rotate: -180, opacity: 0 },
  visible: (custom = 0) => ({
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom }
  })
};

export const rotateOnHover = {
  rest: { rotate: 0 },
  hover: { rotate: 180, transition: { duration: 0.3 } }
};

// =============================================================================
// BOUNCE & FLOATING ANIMATIONS
// =============================================================================

export const bounceVertical = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floating = {
  animate: {
    y: ["-3%", "3%", "-3%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const scrollIndicator = {
  animate: {
    y: [5, 12, 5],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// =============================================================================
// STAGGER ANIMATIONS
// =============================================================================

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// =============================================================================
// HOVER ANIMATIONS
// =============================================================================

export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export const hoverLift = {
  rest: { y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
  hover: { 
    y: -5,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export const hoverGlow = {
  rest: { 
    boxShadow: "0 0 0 rgba(59, 130, 246, 0)" 
  },
  hover: { 
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
    transition: { duration: 0.3 }
  }
};

// =============================================================================
// COMPLEX ANIMATIONS
// =============================================================================

export const typewriter = (text, speed = 0.05) => ({
  hidden: { width: 0 },
  visible: {
    width: "auto",
    transition: {
      duration: text.length * speed,
      ease: "linear"
    }
  }
});

export const morphing = {
  animate: {
    borderRadius: ["20%", "40%", "60%", "40%", "20%"],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(59, 130, 246, 0.7)",
      "0 0 0 10px rgba(59, 130, 246, 0)",
      "0 0 0 0 rgba(59, 130, 246, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// =============================================================================
// PAGE TRANSITIONS
// =============================================================================

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: "easeInOut" }
};

export const slidePageTransition = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.5, ease: "easeInOut" }
};

// =============================================================================
// SPRING ANIMATIONS
// =============================================================================

export const springBounce = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

export const springSlide = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25
    }
  }
};

// =============================================================================
// LOADING ANIMATIONS
// =============================================================================

export const spinner = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const loadingDots = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const progressBar = {
  hidden: { width: 0 },
  visible: (progress = 100) => ({
    width: `${progress}%`,
    transition: { duration: 2, ease: "easeOut" }
  })
};

// =============================================================================
// PARALLAX ANIMATIONS
// =============================================================================

export const parallaxSlow = {
  animate: (scrollY) => ({
    y: scrollY * 0.5,
    transition: { duration: 0 }
  })
};

export const parallaxMedium = {
  animate: (scrollY) => ({
    y: scrollY * 0.3,
    transition: { duration: 0 }
  })
};

export const parallaxFast = {
  animate: (scrollY) => ({
    y: scrollY * 0.1,
    transition: { duration: 0 }
  })
};

// =============================================================================
// REVEAL ANIMATIONS
// =============================================================================

export const revealFromLeft = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const revealFromMask = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.2, ease: "easeInOut" }
  }
};

// =============================================================================
// GRADIENT ANIMATIONS
// =============================================================================

export const gradientShift = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// =============================================================================
// TEXT ANIMATIONS
// =============================================================================

export const textReveal = {
  hidden: { 
    y: "100%",
    opacity: 0 
  },
  visible: (custom = 0) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: "easeOut"
    }
  })
};

export const letterSpacing = {
  hidden: { letterSpacing: "0.1em", opacity: 0 },
  visible: {
    letterSpacing: "0.05em",
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

// =============================================================================
// BUTTON ANIMATIONS
// =============================================================================

export const buttonPress = {
  tap: { scale: 0.95 },
  hover: { scale: 1.05 }
};

export const buttonRipple = {
  initial: { scale: 0, opacity: 1 },
  animate: {
    scale: 4,
    opacity: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// =============================================================================
// MODAL/OVERLAY ANIMATIONS
// =============================================================================

export const modalOverlay = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

export const modalContent = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut",
      delay: 0.1
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: { duration: 0.3 }
  }
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

export const createDelayedAnimation = (baseVariant, delay) => ({
  ...baseVariant,
  visible: {
    ...baseVariant.visible,
    transition: {
      ...baseVariant.visible.transition,
      delay
    }
  }
});

export const createStaggerAnimation = (children, staggerDelay = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.2
    }
  }
});

// =============================================================================
// EASING FUNCTIONS
// =============================================================================

export const easings = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  sharp: [0.4, 0, 0.6, 1],
  bounce: [0.68, -0.55, 0.265, 1.55]
};

// =============================================================================
// DURATION CONSTANTS
// =============================================================================

export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.8,
  verySlow: 1.2
};

// =============================================================================
// DEFAULT EXPORT WITH ALL ANIMATIONS
// =============================================================================

export default {
  // Fade animations
  fadeIn,
  fadeInUp,
  fadeInUpShort,
  fadeInUpSmall,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  
  // Slide animations
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromBottom,
  
  // Scale animations
  scaleIn,
  scaleInSmall,
  scaleUp,
  
  // Rotation animations
  rotateIn,
  rotateOnHover,
  
  // Bounce & floating
  bounceVertical,
  floating,
  scrollIndicator,
  
  // Stagger animations
  staggerContainer,
  staggerItem,
  
  // Hover animations
  hoverScale,
  hoverLift,
  hoverGlow,
  
  // Complex animations
  typewriter,
  morphing,
  pulseGlow,
  
  // Page transitions
  pageTransition,
  slidePageTransition,
  
  // Spring animations
  springBounce,
  springSlide,
  
  // Loading animations
  spinner,
  loadingDots,
  progressBar,
  
  // Parallax animations
  parallaxSlow,
  parallaxMedium,
  parallaxFast,
  
  // Reveal animations
  revealFromLeft,
  revealFromMask,
  
  // Gradient animations
  gradientShift,
  
  // Text animations
  textReveal,
  letterSpacing,
  
  // Button animations
  buttonPress,
  buttonRipple,
  
  // Modal animations
  modalOverlay,
  modalContent,
  
  // Utilities
  createDelayedAnimation,
  createStaggerAnimation,
  easings,
  durations
};
