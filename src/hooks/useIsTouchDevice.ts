import { useState, useEffect } from 'react';

/**
 * Hook to detect if the current device is a touch device.
 * Used to disable custom cursor and adjust hover behaviors on mobile.
 */
export const useIsTouchDevice = (): boolean => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-expect-error - msMaxTouchPoints is IE-specific
        navigator.msMaxTouchPoints > 0;

      // Also check for coarse pointer (touch screens)
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

      // Check screen width as additional heuristic
      const isSmallScreen = window.innerWidth < 1024;

      setIsTouchDevice(hasTouch || hasCoarsePointer || isSmallScreen);
    };

    // Check on mount
    checkTouchDevice();

    // Re-check on resize (for devices that can switch modes)
    window.addEventListener('resize', checkTouchDevice);

    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);

  return isTouchDevice;
};

/**
 * Hook to detect if the user prefers reduced motion.
 * Used to disable or simplify animations for accessibility.
 */
export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

export default useIsTouchDevice;
