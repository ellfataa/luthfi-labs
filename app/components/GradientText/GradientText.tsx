'use client';

import React, { useEffect, useRef } from 'react';

interface GradientTextProps {
  colors: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  className?: string;
  children: React.ReactNode;
  animateGradient?: boolean;
  loop?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  colors,
  animationSpeed = 2,
  showBorder = false,
  className = '',
  children,
  animateGradient = false,
  loop = false,
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!animateGradient || !spanRef.current) return;

    let animationFrame: number;
    let degree = 0;

    const animate = () => {
      degree = (degree + animationSpeed) % 360;
      spanRef.current!.style.background = `linear-gradient(${degree}deg, ${colors.join(', ')})`;
      if (loop) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [animateGradient, loop, animationSpeed, colors]);

  return (
    <span
      ref={spanRef}
      className={className}
      style={{
        background: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        border: showBorder ? '1px solid #ccc' : undefined,
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         gradient: {
//           '0%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//           '100%': { backgroundPosition: '0% 50%' },
//         },
//       },
//       animation: {
//         gradient: 'gradient 8s linear infinite'
//       },
//     },
//   },
//   plugins: [],
// };