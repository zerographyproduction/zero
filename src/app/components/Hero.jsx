'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Default to true for SSR

  useEffect(() => {
    // Check for touch device after component mounts
    setIsTouchDevice('ontouchstart' in window);

    const hero = document.querySelector('.hero');
    if (!hero || 'ontouchstart' in window) return;

    const updateCursorPosition = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursorPosition({ x, y });
    };

    hero.addEventListener('mousemove', updateCursorPosition);
    return () => hero.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <section className='hero min-h-screen flex items-center justify-center bg-black relative overflow-hidden animate-nodes'>
      {/* Background Grid Pattern */}
      <div className='absolute inset-0 bg-grid-pattern opacity-5 animate-float'></div>

      {/* Content */}
      <div className='relative z-10 text-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold mb-4'>
          <span className='animate-text-draw block uppercase'>Zerography</span>
        </h1>
        <p className='text-base sm:text-lg md:text-xl mb-8 text-gray-500 animate-fade-in-up'>
Zerography Production is a creative media agency led by Kuldeep Chauhan (Founder) along with creative partners Nitin and Vipin.
Together we deliver films, photography, and branding solutions across India.
©️ 2025 Zerography Production
All rights reserved.        </p>
      </div>

      {/* Light Effect - Only render on non-touch devices */}
      {!isTouchDevice && (
        <div
          className='absolute inset-0 pointer-events-none mix-blend-screen'
          style={{
            background: `radial-gradient(circle 200px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255,0,0,0.3), transparent)`,
            opacity: 0.6,
          }}
        />
      )}

      {/* Animated Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 animate-gradient-xy'></div>

      {/* Shimmer Effect */}
      <div className='absolute inset-0 animate-nodes after:animate-shimmer'></div>
    </section>
  );
}
