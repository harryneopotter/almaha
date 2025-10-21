/**
 * Animation Utilities
 * CSS-based animations to replace jQuery animations
 */

/**
 * CSS class names for animations
 */
export const ANIMATION_CLASSES = {
  // Fade animations
  fadeIn: 'animate-fade-in',
  fadeOut: 'animate-fade-out',
  fadeInUp: 'animate-fade-in-up',
  fadeInDown: 'animate-fade-in-down',
  fadeInLeft: 'animate-fade-in-left',
  fadeInRight: 'animate-fade-in-right',
  
  // Slide animations
  slideIn: 'animate-slide-in',
  slideOut: 'animate-slide-out',
  slideInUp: 'animate-slide-in-up',
  slideInDown: 'animate-slide-in-down',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  
  // Scale animations
  scaleIn: 'animate-scale-in',
  scaleOut: 'animate-scale-out',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  
  // Rotation animations
  rotateIn: 'animate-rotate-in',
  rotateOut: 'animate-rotate-out',
  
  // Special effects
  shake: 'animate-shake',
  wobble: 'animate-wobble',
  flash: 'animate-flash',
  
  // Loading animations
  spin: 'animate-spin',
  ping: 'animate-ping'
};

/**
 * Animation durations
 */
export const ANIMATION_DURATIONS = {
  fast: 'duration-150',
  normal: 'duration-300',
  slow: 'duration-500',
  slower: 'duration-700',
  slowest: 'duration-1000'
};

/**
 * Animation timing functions
 */
export const ANIMATION_TIMING = {
  linear: 'ease-linear',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out'
};

/**
 * Add animation class to element
 * @param {HTMLElement} element - Element to animate
 * @param {string} animationClass - Animation class name
 * @param {string} duration - Animation duration
 * @param {Function} callback - Callback function after animation
 */
export const addAnimation = (element, animationClass, duration = 'normal', callback = null) => {
  if (!element) return;
  
  const durationClass = ANIMATION_DURATIONS[duration] || duration;
  
  element.classList.add(animationClass, durationClass);
  
  if (callback) {
    const handleAnimationEnd = () => {
      element.removeEventListener('animationend', handleAnimationEnd);
      callback();
    };
    element.addEventListener('animationend', handleAnimationEnd);
  }
};

/**
 * Remove animation class from element
 * @param {HTMLElement} element - Element to remove animation from
 * @param {string} animationClass - Animation class name
 */
export const removeAnimation = (element, animationClass) => {
  if (!element) return;
  
  element.classList.remove(animationClass);
  // Remove all duration classes
  Object.values(ANIMATION_DURATIONS).forEach(duration => {
    element.classList.remove(duration);
  });
};

/**
 * Animate element with promise
 * @param {HTMLElement} element - Element to animate
 * @param {string} animationClass - Animation class name
 * @param {string} duration - Animation duration
 * @returns {Promise} Promise that resolves when animation completes
 */
export const animateElement = (element, animationClass, duration = 'normal') => {
  return new Promise((resolve) => {
    addAnimation(element, animationClass, duration, () => {
      removeAnimation(element, animationClass);
      resolve();
    });
  });
};

/**
 * Fade in element
 * @param {HTMLElement} element - Element to fade in
 * @param {string} duration - Animation duration
 * @returns {Promise} Promise that resolves when animation completes
 */
export const fadeIn = (element, duration = 'normal') => {
  if (!element) return Promise.resolve();
  
  element.style.opacity = '0';
  element.style.display = 'block';
  
  return animateElement(element, ANIMATION_CLASSES.fadeIn, duration).then(() => {
    element.style.opacity = '1';
  });
};

/**
 * Fade out element
 * @param {HTMLElement} element - Element to fade out
 * @param {string} duration - Animation duration
 * @returns {Promise} Promise that resolves when animation completes
 */
export const fadeOut = (element, duration = 'normal') => {
  if (!element) return Promise.resolve();
  
  return animateElement(element, ANIMATION_CLASSES.fadeOut, duration).then(() => {
    element.style.display = 'none';
    element.style.opacity = '0';
  });
};

/**
 * Slide down element
 * @param {HTMLElement} element - Element to slide down
 * @param {string} duration - Animation duration
 * @returns {Promise} Promise that resolves when animation completes
 */
export const slideDown = (element, duration = 'normal') => {
  if (!element) return Promise.resolve();
  
  element.style.height = '0px';
  element.style.overflow = 'hidden';
  element.style.display = 'block';
  
  return animateElement(element, ANIMATION_CLASSES.slideInDown, duration).then(() => {
    element.style.height = 'auto';
    element.style.overflow = 'visible';
  });
};

/**
 * Slide up element
 * @param {HTMLElement} element - Element to slide up
 * @param {string} duration - Animation duration
 * @returns {Promise} Promise that resolves when animation completes
 */
export const slideUp = (element, duration = 'normal') => {
  if (!element) return Promise.resolve();
  
  const height = element.offsetHeight;
  element.style.height = `${height}px`;
  element.style.overflow = 'hidden';
  
  return animateElement(element, ANIMATION_CLASSES.slideInUp, duration).then(() => {
    element.style.display = 'none';
    element.style.height = 'auto';
    element.style.overflow = 'visible';
  });
};

/**
 * Toggle slide animation
 * @param {HTMLElement} element - Element to toggle
 * @param {string} duration - Animation duration
 * @returns {Promise} Promise that resolves when animation completes
 */
export const slideToggle = (element, duration = 'normal') => {
  if (!element) return Promise.resolve();
  
  const isVisible = element.offsetHeight > 0;
  
  if (isVisible) {
    return slideUp(element, duration);
  } else {
    return slideDown(element, duration);
  }
};

/**
 * Shake element (for error indication)
 * @param {HTMLElement} element - Element to shake
 * @param {string} duration - Animation duration
 * @returns {Promise} Promise that resolves when animation completes
 */
export const shake = (element, duration = 'fast') => {
  if (!element) return Promise.resolve();
  
  return animateElement(element, ANIMATION_CLASSES.shake, duration);
};

/**
 * Pulse element (for attention)
 * @param {HTMLElement} element - Element to pulse
 * @param {string} duration - Animation duration
 * @returns {Promise} Promise that resolves when animation completes
 */
export const pulse = (element, duration = 'normal') => {
  if (!element) return Promise.resolve();
  
  return animateElement(element, ANIMATION_CLASSES.pulse, duration);
};

/**
 * Bounce element
 * @param {HTMLElement} element - Element to bounce
 * @param {string} duration - Animation duration
 * @returns {Promise} Promise that resolves when animation completes
 */
export const bounce = (element, duration = 'normal') => {
  if (!element) return Promise.resolve();
  
  return animateElement(element, ANIMATION_CLASSES.bounce, duration);
};

/**
 * Scale in element
 * @param {HTMLElement} element - Element to scale in
 * @param {string} duration - Animation duration
 * @returns {Promise} Promise that resolves when animation completes
 */
export const scaleIn = (element, duration = 'normal') => {
  if (!element) return Promise.resolve();
  
  element.style.transform = 'scale(0)';
  element.style.display = 'block';
  
  return animateElement(element, ANIMATION_CLASSES.scaleIn, duration).then(() => {
    element.style.transform = 'scale(1)';
  });
};

/**
 * Scale out element
 * @param {HTMLElement} element - Element to scale out
 * @param {string} duration - Animation duration
 * @returns {Promise} Promise that resolves when animation completes
 */
export const scaleOut = (element, duration = 'normal') => {
  if (!element) return Promise.resolve();
  
  return animateElement(element, ANIMATION_CLASSES.scaleOut, duration).then(() => {
    element.style.display = 'none';
    element.style.transform = 'scale(0)';
  });
};

/**
 * Animate number counting
 * @param {HTMLElement} element - Element containing the number
 * @param {number} start - Starting number
 * @param {number} end - Ending number
 * @param {number} duration - Animation duration in milliseconds
 * @param {Function} formatter - Number formatting function
 */
export const animateNumber = (element, start, end, duration = 1000, formatter = null) => {
  if (!element) return;
  
  const startTime = performance.now();
  const difference = end - start;
  
  const updateNumber = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentNumber = start + (difference * easeOut);
    
    const displayNumber = formatter ? formatter(currentNumber) : Math.round(currentNumber);
    element.textContent = displayNumber;
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  };
  
  requestAnimationFrame(updateNumber);
};

/**
 * Stagger animations for multiple elements
 * @param {NodeList|Array} elements - Elements to animate
 * @param {string} animationClass - Animation class name
 * @param {number} staggerDelay - Delay between each element animation
 * @param {string} duration - Animation duration
 * @returns {Promise} Promise that resolves when all animations complete
 */
export const staggerAnimation = (elements, animationClass, staggerDelay = 100, duration = 'normal') => {
  if (!elements || elements.length === 0) return Promise.resolve();
  
  const promises = Array.from(elements).map((element, index) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        animateElement(element, animationClass, duration).then(resolve);
      }, index * staggerDelay);
    });
  });
  
  return Promise.all(promises);
};

/**
 * Create CSS keyframes for custom animations
 * @param {string} name - Animation name
 * @param {Object} keyframes - Keyframes object
 * @returns {string} CSS animation string
 */
export const createKeyframes = (name, keyframes) => {
  let css = `@keyframes ${name} {`;
  
  Object.entries(keyframes).forEach(([percentage, styles]) => {
    css += `${percentage} {`;
    Object.entries(styles).forEach(([property, value]) => {
      css += `${property}: ${value};`;
    });
    css += '}';
  });
  
  css += '}';
  
  // Add to document head
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  
  return name;
};

// Export all animation utilities
export default {
  ANIMATION_CLASSES,
  ANIMATION_DURATIONS,
  ANIMATION_TIMING,
  addAnimation,
  removeAnimation,
  animateElement,
  fadeIn,
  fadeOut,
  slideDown,
  slideUp,
  slideToggle,
  shake,
  pulse,
  bounce,
  scaleIn,
  scaleOut,
  animateNumber,
  staggerAnimation,
  createKeyframes
};