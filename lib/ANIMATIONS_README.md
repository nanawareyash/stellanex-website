# Framer Motion Animation Constants

A comprehensive collection of reusable Framer Motion animation variants for the Stellanex website. This library provides consistent, performant animations across the entire application.

## Installation

The animations are already included in your project at `lib/animations.js`. Import the animations you need:

```jsx
import { fadeInUp, slideInFromLeft, hoverScale } from '@/lib/animations';
// or import everything
import animations from '@/lib/animations';
```

## Basic Usage

### Simple Fade In Animation

```jsx
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

function MyComponent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      Content that fades in and slides up
    </motion.div>
  );
}
```

### With Custom Delay

```jsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
  custom={0.3} // 0.3 second delay
>
  Delayed animation
</motion.div>
```

## Animation Categories

### 🎭 Fade Animations

Perfect for content reveals and page loads.

- `fadeIn` - Simple opacity fade
- `fadeInUp` - Fade in with upward movement (80px)
- `fadeInUpShort` - Fade in with short upward movement (40px)
- `fadeInUpSmall` - Fade in with small upward movement (30px)
- `fadeInDown` - Fade in with downward movement
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right

```jsx
<motion.h1
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
  custom={0.2}
>
  Hero Title
</motion.h1>
```

### 🎢 Slide Animations

Great for page transitions and reveals.

- `slideInFromLeft` - Slide in from left edge
- `slideInFromRight` - Slide in from right edge
- `slideInFromTop` - Slide in from top
- `slideInFromBottom` - Slide in from bottom

```jsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={slideInFromLeft}
>
  Sidebar content
</motion.div>
```

### 📏 Scale Animations

Perfect for buttons, cards, and emphasis.

- `scaleIn` - Scale from 0 to 1
- `scaleInSmall` - Scale from 0.8 to 1
- `scaleUp` - Continuous scale animation
- `hoverScale` - Scale on hover

```jsx
<motion.button
  variants={hoverScale}
  initial="rest"
  whileHover="hover"
>
  Interactive Button
</motion.button>
```

### 🌟 Complex Animations

Advanced effects for special elements.

- `bounceVertical` - Continuous vertical bounce
- `floating` - Gentle floating motion
- `scrollIndicator` - Scroll indicator bounce
- `pulseGlow` - Pulsing glow effect
- `morphing` - Shape morphing animation

```jsx
<motion.div
  className="floating-element"
  {...floating}
>
  Floating badge
</motion.div>
```

### 📝 Text Animations

Specialized for text content.

- `textReveal` - Text reveal from bottom
- `letterSpacing` - Letter spacing animation
- `typewriter` - Typewriter effect (function)

```jsx
<motion.p
  initial="hidden"
  animate="visible"
  variants={textReveal}
  custom={0.1}
>
  Revealing text
</motion.p>

{/* Typewriter effect */}
<motion.span
  initial="hidden"
  animate="visible"
  variants={typewriter("Hello World", 0.1)}
>
  Hello World
</motion.span>
```

### 🎯 Stagger Animations

For animating lists and multiple elements.

```jsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={staggerContainer}
>
  {items.map((item, index) => (
    <motion.div key={index} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### 🎨 Hover Effects

Interactive animations for user engagement.

- `hoverScale` - Scale on hover
- `hoverLift` - Lift with shadow
- `hoverGlow` - Glow effect
- `buttonPress` - Button press feedback

```jsx
<motion.card
  variants={hoverLift}
  initial="rest"
  whileHover="hover"
>
  Interactive card
</motion.card>
```

### 🚀 Page Transitions

For smooth page changes.

- `pageTransition` - Standard page transition
- `slidePageTransition` - Sliding page transition

```jsx
<motion.main
  {...pageTransition}
>
  Page content
</motion.main>
```

### ⚙️ Loading Animations

For loading states and progress.

- `spinner` - Rotating spinner
- `loadingDots` - Pulsing dots
- `progressBar` - Progress bar animation

```jsx
<motion.div
  className="spinner"
  {...spinner}
/>

<motion.div
  className="progress-bar"
  initial="hidden"
  animate="visible"
  variants={progressBar}
  custom={75} // 75% progress
/>
```

### 🌄 Parallax Effects

For scroll-based animations.

- `parallaxSlow` - Slow parallax (0.5x speed)
- `parallaxMedium` - Medium parallax (0.3x speed)
- `parallaxFast` - Fast parallax (0.1x speed)

```jsx
function ParallaxElement() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      variants={parallaxSlow}
      animate={scrollY}
    >
      Parallax content
    </motion.div>
  );
}
```

### 🎪 Modal Animations

For overlays and modals.

- `modalOverlay` - Modal backdrop fade
- `modalContent` - Modal content scale and fade

```jsx
<AnimatePresence>
  {isOpen && (
    <>
      <motion.div
        className="modal-overlay"
        variants={modalOverlay}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
      <motion.div
        className="modal-content"
        variants={modalContent}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Modal content
      </motion.div>
    </>
  )}
</AnimatePresence>
```

## Utility Functions

### Create Delayed Animation

```jsx
const delayedFadeIn = createDelayedAnimation(fadeIn, 0.5);
```

### Create Stagger Animation

```jsx
const customStagger = createStaggerAnimation(children, 0.2);
```

## Constants

### Easing Functions

```jsx
import { easings } from '@/lib/animations';

const customAnimation = {
  transition: { ease: easings.bounce }
};
```

Available easings:
- `easeInOut` - [0.4, 0, 0.2, 1]
- `easeOut` - [0, 0, 0.2, 1]
- `easeIn` - [0.4, 0, 1, 1]
- `sharp` - [0.4, 0, 0.6, 1]
- `bounce` - [0.68, -0.55, 0.265, 1.55]

### Duration Constants

```jsx
import { durations } from '@/lib/animations';

const customAnimation = {
  transition: { duration: durations.slow }
};
```

Available durations:
- `fast` - 0.2s
- `normal` - 0.4s
- `slow` - 0.8s
- `verySlow` - 1.2s

## Best Practices

### 1. Use Consistent Delays

```jsx
// Good: Consistent delay pattern
<motion.div variants={fadeInUp} custom={0.1} />
<motion.div variants={fadeInUp} custom={0.2} />
<motion.div variants={fadeInUp} custom={0.3} />
```

### 2. Group Related Animations

```jsx
// Good: Use stagger containers for lists
<motion.div variants={staggerContainer}>
  {items.map((item, i) => (
    <motion.div key={i} variants={staggerItem}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### 3. Optimize Performance

```jsx
// Good: Use layout prop for layout animations
<motion.div
  layout
  variants={scaleIn}
  className="will-change-transform"
>
  Content
</motion.div>
```

### 4. Handle Reduced Motion

```jsx
import { useReducedMotion } from 'framer-motion';

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      variants={shouldReduceMotion ? fadeIn : fadeInUp}
      initial="hidden"
      animate="visible"
    >
      Accessible animation
    </motion.div>
  );
}
```

## Examples from Codebase

### Hero Section

```jsx
// Current implementation in HeroSection.jsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
  custom={0}
>
  <RoboticArmBlueprint />
</motion.div>

<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUpShort}
  custom={0.1}
>
  <Sparkles />
  <p>Build Real Robots</p>
</motion.div>
```

### Scroll Indicator

```jsx
// Animated scroll indicator
<motion.div
  className="size-1.5 rounded-full bg-gray-200"
  {...scrollIndicator}
/>
```

## Contributing

When adding new animations:

1. Follow the naming convention: `animationType[Direction][Modifier]`
2. Include JSDoc comments for complex animations
3. Test across different screen sizes
4. Ensure animations respect user preferences
5. Add examples to this documentation

## Performance Tips

1. Use `will-change-transform` CSS class for animated elements
2. Prefer `transform` and `opacity` properties
3. Use `AnimatePresence` for mount/unmount animations
4. Consider using `useReducedMotion` for accessibility
5. Avoid animating layout properties when possible

## Browser Support

These animations work with all modern browsers that support Framer Motion:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

For older browsers, animations will gracefully degrade to instant state changes.
