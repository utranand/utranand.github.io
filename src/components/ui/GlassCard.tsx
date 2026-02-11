import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useMouseSpotlight } from '../../hooks/useMouseSpotlight';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  span?: 'small' | 'medium' | 'large'; // 1x1, 2x1, 2x2
  image?: {
    src: string;
    alt: string;
  };
}

export default function GlassCard({ children, className = '', span = 'small', image }: GlassCardProps) {
  const {
    elementRef,
    isHovered,
    spotlightStyle,
    cssVariables,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useMouseSpotlight();

  const spanClasses = {
    small: 'col-span-1',
    medium: 'col-span-2 lg:col-span-2',
    large: 'col-span-2 lg:col-span-2 row-span-2',
  };

  return (
    <motion.div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative glass rounded-2xl p-6 overflow-hidden transition-colors duration-300 hover:border-neon-cyan/30 ${spanClasses[span]} ${className}`}
      style={{
        ...(cssVariables as React.CSSProperties),
        boxShadow: `
          inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
          inset 0 -1px 0 0 rgba(255, 255, 255, 0.05),
          0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06)
        `,
      }}
    >
      {/* Mouse Spotlight Effect */}
      {isHovered && (
        <div
          className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-300"
          style={spotlightStyle}
        />
      )}

      {/* Optional Image with Lazy Loading */}
      {image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
