/**
 * TypeScript definitions for Framer Motion animation constants
 * Provides type safety and IntelliSense support for all animation variants
 */

import { Variants, Transition } from 'framer-motion';

// Base animation variant type
export interface AnimationVariant extends Variants {
  hidden: any;
  visible: any;
}

// Custom animation variant with custom parameter support
export interface CustomAnimationVariant extends Variants {
  hidden: any;
  visible: (custom?: number) => any;
}

// Hover animation variant
export interface HoverAnimationVariant extends Variants {
  rest: any;
  hover: any;
}

// Animate-only variant (for continuous animations)
export interface AnimateVariant {
  animate: any;
}

// Page transition variant
export interface PageTransitionVariant {
  initial: any;
  animate: any;
  exit: any;
  transition?: Transition;
}

// Animation constants types
export interface EasingConstants {
  easeInOut: number[];
  easeOut: number[];
  easeIn: number[];
  sharp: number[];
  bounce: number[];
}

export interface DurationConstants {
  fast: number;
  normal: number;
  slow: number;
  verySlow: number;
}

// Utility function types
export type CreateDelayedAnimation = (
  baseVariant: AnimationVariant | CustomAnimationVariant,
  delay: number
) => AnimationVariant | CustomAnimationVariant;

export type CreateStaggerAnimation = (
  children: any,
  staggerDelay?: number
) => AnimationVariant;

export type TypewriterFunction = (text: string, speed?: number) => AnimationVariant;

// Export all animation types
export declare const fadeIn: CustomAnimationVariant;
export declare const fadeInUp: CustomAnimationVariant;
export declare const fadeInUpShort: CustomAnimationVariant;
export declare const fadeInUpSmall: CustomAnimationVariant;
export declare const fadeInDown: CustomAnimationVariant;
export declare const fadeInLeft: CustomAnimationVariant;
export declare const fadeInRight: CustomAnimationVariant;

export declare const slideInFromLeft: CustomAnimationVariant;
export declare const slideInFromRight: CustomAnimationVariant;
export declare const slideInFromTop: CustomAnimationVariant;
export declare const slideInFromBottom: CustomAnimationVariant;

export declare const scaleIn: CustomAnimationVariant;
export declare const scaleInSmall: CustomAnimationVariant;
export declare const scaleUp: AnimationVariant;

export declare const rotateIn: CustomAnimationVariant;
export declare const rotateOnHover: HoverAnimationVariant;

export declare const bounceVertical: AnimateVariant;
export declare const floating: AnimateVariant;
export declare const scrollIndicator: AnimateVariant;

export declare const staggerContainer: AnimationVariant;
export declare const staggerItem: AnimationVariant;

export declare const hoverScale: HoverAnimationVariant;
export declare const hoverLift: HoverAnimationVariant;
export declare const hoverGlow: HoverAnimationVariant;

export declare const typewriter: TypewriterFunction;
export declare const morphing: AnimateVariant;
export declare const pulseGlow: AnimateVariant;

export declare const pageTransition: PageTransitionVariant;
export declare const slidePageTransition: PageTransitionVariant;

export declare const springBounce: AnimationVariant;
export declare const springSlide: AnimationVariant;

export declare const spinner: AnimateVariant;
export declare const loadingDots: AnimateVariant;
export declare const progressBar: CustomAnimationVariant;

export declare const parallaxSlow: AnimationVariant;
export declare const parallaxMedium: AnimationVariant;
export declare const parallaxFast: AnimationVariant;

export declare const revealFromLeft: AnimationVariant;
export declare const revealFromMask: AnimationVariant;

export declare const gradientShift: AnimateVariant;

export declare const textReveal: CustomAnimationVariant;
export declare const letterSpacing: AnimationVariant;

export declare const buttonPress: HoverAnimationVariant;
export declare const buttonRipple: AnimationVariant;

export declare const modalOverlay: PageTransitionVariant;
export declare const modalContent: PageTransitionVariant;

export declare const createDelayedAnimation: CreateDelayedAnimation;
export declare const createStaggerAnimation: CreateStaggerAnimation;

export declare const easings: EasingConstants;
export declare const durations: DurationConstants;

// Default export interface
interface AnimationConstants {
  // Fade animations
  fadeIn: CustomAnimationVariant;
  fadeInUp: CustomAnimationVariant;
  fadeInUpShort: CustomAnimationVariant;
  fadeInUpSmall: CustomAnimationVariant;
  fadeInDown: CustomAnimationVariant;
  fadeInLeft: CustomAnimationVariant;
  fadeInRight: CustomAnimationVariant;
  
  // Slide animations
  slideInFromLeft: CustomAnimationVariant;
  slideInFromRight: CustomAnimationVariant;
  slideInFromTop: CustomAnimationVariant;
  slideInFromBottom: CustomAnimationVariant;
  
  // Scale animations
  scaleIn: CustomAnimationVariant;
  scaleInSmall: CustomAnimationVariant;
  scaleUp: AnimationVariant;
  
  // Rotation animations
  rotateIn: CustomAnimationVariant;
  rotateOnHover: HoverAnimationVariant;
  
  // Bounce & floating
  bounceVertical: AnimateVariant;
  floating: AnimateVariant;
  scrollIndicator: AnimateVariant;
  
  // Stagger animations
  staggerContainer: AnimationVariant;
  staggerItem: AnimationVariant;
  
  // Hover animations
  hoverScale: HoverAnimationVariant;
  hoverLift: HoverAnimationVariant;
  hoverGlow: HoverAnimationVariant;
  
  // Complex animations
  typewriter: TypewriterFunction;
  morphing: AnimateVariant;
  pulseGlow: AnimateVariant;
  
  // Page transitions
  pageTransition: PageTransitionVariant;
  slidePageTransition: PageTransitionVariant;
  
  // Spring animations
  springBounce: AnimationVariant;
  springSlide: AnimationVariant;
  
  // Loading animations
  spinner: AnimateVariant;
  loadingDots: AnimateVariant;
  progressBar: CustomAnimationVariant;
  
  // Parallax animations
  parallaxSlow: AnimationVariant;
  parallaxMedium: AnimationVariant;
  parallaxFast: AnimationVariant;
  
  // Reveal animations
  revealFromLeft: AnimationVariant;
  revealFromMask: AnimationVariant;
  
  // Gradient animations
  gradientShift: AnimateVariant;
  
  // Text animations
  textReveal: CustomAnimationVariant;
  letterSpacing: AnimationVariant;
  
  // Button animations
  buttonPress: HoverAnimationVariant;
  buttonRipple: AnimationVariant;
  
  // Modal animations
  modalOverlay: PageTransitionVariant;
  modalContent: PageTransitionVariant;
  
  // Utilities
  createDelayedAnimation: CreateDelayedAnimation;
  createStaggerAnimation: CreateStaggerAnimation;
  easings: EasingConstants;
  durations: DurationConstants;
}

declare const animations: AnimationConstants;
export default animations;
