'use client';
import React, { useEffect } from 'react';

export default function SectionHeading({ heading }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const headings = document.querySelectorAll('.scroll-text');
      headings.forEach((text, index) => {
        const speed = index % 2 === 0 ? 0.5 : -0.5;
        const parentRect = text.parentElement.getBoundingClientRect();
        const isVisible =
          parentRect.top < window.innerHeight && parentRect.bottom > 0;
        if (isVisible) {
          text.style.transform = `translateY(${scrolled * speed}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='sticky top-0 py-20 bg-black overflow-hidden z-10'>
      <div className='absolute inset-0 flex flex-col gap-0'>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className='scroll-text whitespace-nowrap text-[120px] font-black'
            style={{
              transform: 'translateY(0)',
              transition: 'transform 0.1s ease-out',
            }}
          >
            <span className='mr-8 text-gray-800'>{heading.toUpperCase()}</span>
            <span
              className='mr-8'
              style={{
                WebkitTextStroke: '2px #333',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {heading.toUpperCase()}
            </span>
            <span className='mr-8 text-gray-800'>{heading.toUpperCase()}</span>
            <span
              className='mr-8'
              style={{
                WebkitTextStroke: '2px #333',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {heading.toUpperCase()}
            </span>
            <span className='mr-8 text-gray-800'>{heading.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
