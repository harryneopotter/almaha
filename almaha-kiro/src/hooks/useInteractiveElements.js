/**
 * Interactive Elements Hook
 * Replaces jQuery interactions with React patterns
 */

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook for managing mobile menu toggle
 * @returns {Object} Mobile menu state and handlers
 */
export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);
  
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);
  
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);
  
  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        close();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, close]);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        close();
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, close]);
  
  return {
    isOpen,
    toggle,
    close,
    open
  };
};

/**
 * Hook for managing dropdown menus
 * @param {number} closeDelay - Delay before closing dropdown
 * @returns {Object} Dropdown state and handlers
 */
export const useDropdown = (closeDelay = 300) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  
  const open = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  }, []);
  
  const close = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, closeDelay);
  }, [closeDelay]);
  
  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return {
    isOpen,
    open,
    close,
    toggle
  };
};

/**
 * Hook for managing image slider/carousel
 * @param {Array} slides - Array of slide data
 * @param {number} autoPlayInterval - Auto-play interval in milliseconds
 * @returns {Object} Slider state and handlers
 */
export const useSlider = (slides = [], autoPlayInterval = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);
  
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);
  
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);
  
  const play = useCallback(() => {
    setIsPlaying(true);
  }, []);
  
  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);
  
  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);
  
  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && slides.length > 1) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, nextSlide, autoPlayInterval, slides.length]);
  
  // Pause on hover
  const handleMouseEnter = useCallback(() => {
    if (isPlaying) {
      pause();
    }
  }, [isPlaying, pause]);
  
  const handleMouseLeave = useCallback(() => {
    if (!isPlaying) {
      play();
    }
  }, [isPlaying, play]);
  
  return {
    currentSlide,
    isPlaying,
    nextSlide,
    prevSlide,
    goToSlide,
    play,
    pause,
    toggle,
    handleMouseEnter,
    handleMouseLeave
  };
};

/**
 * Hook for managing modal/popup state
 * @returns {Object} Modal state and handlers
 */
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  
  const open = useCallback((modalData = null) => {
    setData(modalData);
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);
  
  const close = useCallback(() => {
    setIsOpen(false);
    setData(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);
  
  const toggle = useCallback((modalData = null) => {
    if (isOpen) {
      close();
    } else {
      open(modalData);
    }
  }, [isOpen, open, close]);
  
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        close();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, close]);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  return {
    isOpen,
    data,
    open,
    close,
    toggle
  };
};

/**
 * Hook for managing hover effects
 * @returns {Object} Hover state and handlers
 */
export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  
  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave
  };
};

/**
 * Hook for managing scroll-based animations
 * @param {Object} options - Animation options
 * @returns {Object} Animation state and ref
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce && !hasTriggered) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);
  
  return {
    isVisible,
    elementRef
  };
};

/**
 * Hook for managing form field focus states
 * @returns {Object} Focus state and handlers
 */
export const useFocus = () => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  
  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  
  return {
    isFocused,
    handleFocus,
    handleBlur
  };
};

/**
 * Hook for managing accordion/collapsible content
 * @param {boolean} initialState - Initial open/closed state
 * @returns {Object} Accordion state and handlers
 */
export const useAccordion = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [height, setHeight] = useState(initialState ? 'auto' : '0px');
  const contentRef = useRef(null);
  
  const toggle = useCallback(() => {
    setIsOpen(prev => {
      const newState = !prev;
      if (contentRef.current) {
        setHeight(newState ? `${contentRef.current.scrollHeight}px` : '0px');
      }
      return newState;
    });
  }, []);
  
  const open = useCallback(() => {
    setIsOpen(true);
    if (contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, []);
  
  const close = useCallback(() => {
    setIsOpen(false);
    setHeight('0px');
  }, []);
  
  // Update height when content changes
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [isOpen]);
  
  return {
    isOpen,
    height,
    contentRef,
    toggle,
    open,
    close
  };
};

/**
 * Hook for managing smooth scrolling
 * @returns {Function} Scroll to element function
 */
export const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);
  
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  return {
    scrollToElement,
    scrollToTop
  };
};

// Export all hooks
export default {
  useMobileMenu,
  useDropdown,
  useSlider,
  useModal,
  useHover,
  useScrollAnimation,
  useFocus,
  useAccordion,
  useSmoothScroll
};