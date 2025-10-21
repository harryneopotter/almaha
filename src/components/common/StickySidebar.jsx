/**
 * StickySidebar
 * --------------
 * Simple wrapper that makes its children stick to the viewport after a given offset.
 *
 * Props:
 * - offset (number): distance in pixels from the top when the sidebar becomes fixed. Defaults to 120.
 * - className (string): optional extra classes.
 * - style (object): additional inline styles to merge.
 */
import React, { useEffect, useState } from 'react';

export default function StickySidebar({
  offset = 120,
  className = '',
  style = {},
  children,
  minWidth = 992, // viewport width (in px) from which sticky behaviour becomes active
  ...rest
}) {
  // Determine whether the viewport is wide enough to enable sticky positioning
  const getIsDesktop = () =>
    typeof window !== 'undefined' ? window.innerWidth >= minWidth : false;

  const [isDesktop, setIsDesktop] = useState(getIsDesktop);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(getIsDesktop());
    }

    // Add resize listener only in the browser
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [minWidth]);

  const stickyStyle = isDesktop
    ? { position: 'sticky', top: offset, ...style }
    : { ...style };

  return (
    <div className={className} style={stickyStyle} {...rest}>
      {children}
    </div>
  );
}