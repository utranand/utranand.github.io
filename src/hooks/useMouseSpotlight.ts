import { useState, useRef, useEffect, MouseEvent } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMouseSpotlight() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const pendingPositionRef = useRef<MousePosition | null>(null);

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const newPosition = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    // Store pending position
    pendingPositionRef.current = newPosition;

    // Cancel any pending RAF
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    // Schedule update with RAF for performance
    rafIdRef.current = requestAnimationFrame(() => {
      if (pendingPositionRef.current) {
        setMousePosition(pendingPositionRef.current);
        pendingPositionRef.current = null;
      }
      rafIdRef.current = null;
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Cancel any pending RAF when leaving
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  };

  // Calculate CSS variables (percentage-based for flexibility)
  const cssVariables = elementRef.current
    ? {
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      }
    : {};

  const spotlightStyle = isHovered
    ? {
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 242, 242, 0.15), transparent 40%)`,
      }
    : {};

  return {
    elementRef,
    isHovered,
    spotlightStyle,
    cssVariables,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
}
