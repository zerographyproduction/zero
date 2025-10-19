'use client';
import React, { useEffect } from 'react';
import aboutBg from '/src/assets/about-bg.jpg';
import Image from 'next/image';

export default function About() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className='relative min-h-screen flex items-center py-20 overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={aboutBg}
          alt='About background'
          fill
          className='object-cover'
          style={{
            filter: 'brightness(0.3)',
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/70 to-gray-900/70 z-1'></div>

      {/* Enhanced neon light effect */}
      <div
        className='absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-[800px] rounded-full opacity-70'
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(45, 212, 191, 0.1), rgba(45, 212, 191, 0.3))',
          filter: 'blur(80px)',
          animation: 'pulse 4s infinite',
        }}
      ></div>

      <div className='container mx-auto px-4 relative'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='fade-up text-7xl font-bold mb-12 bg-gradient-to-r from-teal-400 via-white to-teal-400 bg-clip-text text-transparent tracking-tight text-right'>
            About Us
          </h2>

          <div className='space-y-8 relative'>
            {/* Vertical line accent */}
            <div className='absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-teal-400 via-teal-500 to-transparent opacity-50'></div>

            <p className='fade-up text-3xl font-light text-gray-200 leading-relaxed pl-6'>
              <span className='text-teal-400 font-medium'>
                ZEROGRAPHY PRODUCTIONS
              </span>{' '}
              is a dynamic media production house with headquarters in Mumbai
              and Delhi, offering comprehensive creative solutions to clients
              worldwide.
            </p>

            <p className='fade-up text-xl text-gray-300 leading-relaxed pl-6'>
              We specialize in crafting compelling stories through innovative
              visual content, ensuring each project resonates with its audience.
            </p>

            <p className='fade-up text-xl text-gray-300 leading-relaxed pl-6'>
              Trust us for innovative and compelling content that resonates
              worldwide.
            </p>

            <p className='fade-up text-xl text-gray-300 leading-relaxed pl-6'>
              Founded by Kuldeep Chauhan, Zerography Production is a registered creative production firm (GST Registered).
The agency is powered by a passionate core team — Nitin pal , Vipin pal , and Kuldeep Chauhan— combining expertise in direction, cinematography, and production management.
Together, the trio brings unique vision and craftsmanship to every project, ensuring high-end visual storytelling for brands, weddings, and films.
            </p>

            <div className='fade-up flex gap-12 pt-12'>
              <div className='text-center group'>
                <div className='text-5xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform'>
                  10+
                </div>
                <div className='text-gray-300'>Years Experience</div>
              </div>
              <div className='text-center group'>
                <div className='text-5xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform'>
                  500+
                </div>
                <div className='text-gray-300'>Projects Completed</div>
              </div>
              <div className='text-center group'>
                <div className='text-5xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform'>
                  2
                </div>
                <div className='text-gray-300'>Major Locations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
