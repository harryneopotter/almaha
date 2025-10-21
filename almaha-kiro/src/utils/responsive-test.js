/**
 * Responsive Design Testing Utilities
 * Validates breakpoints and responsive behavior
 */

// Standard breakpoints matching WordPress theme
export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  desktop: 1200,
  largeDesktop: 1920
};

/**
 * Get current breakpoint based on window width
 * @returns {string} Current breakpoint name
 */
export const getCurrentBreakpoint = () => {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  
  if (width < BREAKPOINTS.tablet) return 'mobile';
  if (width < BREAKPOINTS.desktop) return 'tablet';
  if (width < BREAKPOINTS.largeDesktop) return 'desktop';
  return 'largeDesktop';
};

/**
 * Check if current viewport matches a specific breakpoint
 * @param {string} breakpoint - Breakpoint to check
 * @returns {boolean} Whether current viewport matches breakpoint
 */
export const isBreakpoint = (breakpoint) => {
  return getCurrentBreakpoint() === breakpoint;
};

/**
 * Check if current viewport is mobile
 * @returns {boolean} Whether current viewport is mobile
 */
export const isMobile = () => {
  return isBreakpoint('mobile');
};

/**
 * Check if current viewport is tablet
 * @returns {boolean} Whether current viewport is tablet
 */
export const isTablet = () => {
  return isBreakpoint('tablet');
};

/**
 * Check if current viewport is desktop or larger
 * @returns {boolean} Whether current viewport is desktop or larger
 */
export const isDesktop = () => {
  const current = getCurrentBreakpoint();
  return current === 'desktop' || current === 'largeDesktop';
};

/**
 * Add responsive event listener
 * @param {Function} callback - Function to call on breakpoint change
 * @returns {Function} Cleanup function to remove listener
 */
export const addResponsiveListener = (callback) => {
  if (typeof window === 'undefined') return () => {};
  
  let currentBreakpoint = getCurrentBreakpoint();
  
  const handleResize = () => {
    const newBreakpoint = getCurrentBreakpoint();
    if (newBreakpoint !== currentBreakpoint) {
      currentBreakpoint = newBreakpoint;
      callback(newBreakpoint);
    }
  };
  
  window.addEventListener('resize', handleResize);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
  };
};

/**
 * Test responsive behavior for a component
 * @param {HTMLElement} element - Element to test
 * @returns {Object} Test results
 */
export const testResponsiveBehavior = (element) => {
  if (!element) return { error: 'Element not found' };
  
  const results = {
    mobile: {},
    tablet: {},
    desktop: {},
    largeDesktop: {}
  };
  
  // Test each breakpoint
  Object.keys(BREAKPOINTS).forEach(breakpoint => {
    const width = BREAKPOINTS[breakpoint];
    
    // Simulate viewport width (for testing purposes)
    const originalWidth = window.innerWidth;
    
    // Note: This is a simplified test - in real testing, you'd use tools like Playwright
    results[breakpoint] = {
      width: width,
      computedStyle: window.getComputedStyle(element),
      boundingRect: element.getBoundingClientRect(),
      visible: element.offsetParent !== null
    };
  });
  
  return results;
};

/**
 * Validate responsive design patterns
 * @param {HTMLElement} container - Container element to validate
 * @returns {Array} Array of validation issues
 */
export const validateResponsiveDesign = (container) => {
  const issues = [];
  
  if (!container) {
    issues.push('Container element not found');
    return issues;
  }
  
  // Check for horizontal scrolling on mobile
  if (container.scrollWidth > container.clientWidth) {
    issues.push('Horizontal scrolling detected - content may overflow on mobile');
  }
  
  // Check for proper touch targets on mobile
  const interactiveElements = container.querySelectorAll('button, a, input, select, textarea');
  interactiveElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.height < 44 || rect.width < 44) {
      issues.push(`Interactive element too small for touch: ${element.tagName} (${rect.width}x${rect.height})`);
    }
  });
  
  // Check for proper text sizing
  const textElements = container.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
  textElements.forEach(element => {
    const style = window.getComputedStyle(element);
    const fontSize = parseFloat(style.fontSize);
    if (fontSize < 14) {
      issues.push(`Text too small for mobile: ${element.tagName} (${fontSize}px)`);
    }
  });
  
  // Check for proper spacing
  const sections = container.querySelectorAll('section, .section');
  sections.forEach(section => {
    const style = window.getComputedStyle(section);
    const paddingTop = parseFloat(style.paddingTop);
    const paddingBottom = parseFloat(style.paddingBottom);
    
    if (paddingTop < 16 || paddingBottom < 16) {
      issues.push(`Insufficient section padding: ${section.className || section.tagName}`);
    }
  });
  
  return issues;
};

/**
 * Generate responsive design report
 * @param {HTMLElement} container - Container to analyze
 * @returns {Object} Comprehensive responsive design report
 */
export const generateResponsiveReport = (container) => {
  const report = {
    timestamp: new Date().toISOString(),
    currentBreakpoint: getCurrentBreakpoint(),
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    issues: validateResponsiveDesign(container),
    breakpointTests: {},
    recommendations: []
  };
  
  // Test each breakpoint
  Object.keys(BREAKPOINTS).forEach(breakpoint => {
    report.breakpointTests[breakpoint] = testResponsiveBehavior(container);
  });
  
  // Generate recommendations based on issues
  if (report.issues.length > 0) {
    report.recommendations.push('Review responsive design implementation');
    report.recommendations.push('Test on actual devices for accurate results');
    report.recommendations.push('Consider using CSS Grid and Flexbox for better responsive layouts');
  }
  
  if (report.issues.some(issue => issue.includes('touch'))) {
    report.recommendations.push('Increase touch target sizes to minimum 44x44px');
  }
  
  if (report.issues.some(issue => issue.includes('text'))) {
    report.recommendations.push('Increase font sizes for better mobile readability');
  }
  
  return report;
};

// Export default object with all utilities
export default {
  BREAKPOINTS,
  getCurrentBreakpoint,
  isBreakpoint,
  isMobile,
  isTablet,
  isDesktop,
  addResponsiveListener,
  testResponsiveBehavior,
  validateResponsiveDesign,
  generateResponsiveReport
};