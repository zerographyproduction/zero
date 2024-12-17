'use client';
import React, { useEffect, useCallback } from 'react';

export default function HorizontalHeading({ heading }) {
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const headings = document.querySelectorAll('.scroll-text-horizontal');
    const scrollSpeed = window.innerWidth < 768 ? 0.2 : 0.5; // Reduced speed on mobile

    headings[0].style.transform = `translateX(${scrolled * scrollSpeed}px)`;
    headings[1].style.transform = `translateX(${scrolled * -scrollSpeed}px)`;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className='py-0 bg-black overflow-hidden'>
      <div className='flex flex-col gap-1'>
        {/* First row */}
        <div
          className='scroll-text-horizontal whitespace-nowrap font-black leading-none
            text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]
            transition-transform duration-100 ease-out'
          style={{ transform: 'translateX(0)' }}
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <React.Fragment key={`top-${index}`}>
              <span
                style={
                  index % 2 === 1
                    ? {
                        WebkitTextStroke: '1px #333',
                        '@media (min-width: 768px)': {
                          WebkitTextStroke: '2px #333',
                        },
                        WebkitTextFillColor: 'transparent',
                      }
                    : {}
                }
                className={
                  index % 2 === 0
                    ? 'text-gray-800 mr-2 sm:mr-4 md:mr-6 lg:mr-8'
                    : 'mr-2 sm:mr-4 md:mr-6 lg:mr-8'
                }
              >
                {heading.toUpperCase()}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Second row */}
        <div
          className='scroll-text-horizontal whitespace-nowrap font-black leading-none
            text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px]
            transition-transform duration-100 ease-out'
          style={{ transform: 'translateX(0)' }}
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <React.Fragment key={`bottom-${index}`}>
              <span
                style={
                  index % 2 === 0
                    ? {
                        WebkitTextStroke: '1px #333',
                        '@media (min-width: 768px)': {
                          WebkitTextStroke: '2px #333',
                        },
                        WebkitTextFillColor: 'transparent',
                      }
                    : {}
                }
                className={
                  index % 2 === 1
                    ? 'text-gray-800 mr-2 sm:mr-4 md:mr-6 lg:mr-8'
                    : 'mr-2 sm:mr-4 md:mr-6 lg:mr-8'
                }
              >
                {heading.toUpperCase()}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
