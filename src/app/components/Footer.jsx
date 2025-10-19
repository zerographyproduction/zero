'use client';
import React from 'react';
import { Twitter, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='min-h-[50vh] lg:min-h-screen bg-black relative flex items-center justify-center overflow-hidden'>
      {/* Background Effects - Responsive sizes */}
      <div className='absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black'></div>
      <div className='absolute -left-24 sm:-left-48 bottom-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-red-500/20 rounded-full mix-blend-screen filter blur-[60px] sm:blur-[120px] animate-pulse'></div>
      <div className='absolute -right-24 sm:-right-48 bottom-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[60px] sm:blur-[120px] animate-pulse'></div>
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[60px] sm:blur-[120px] animate-pulse'></div>

      <div className='container mx-auto px-4 relative z-10 py-12 lg:py-0'>
        <div className='text-center space-y-8'>
          {/* Logo - Responsive text sizes */}
          <div className='mb-8 sm:mb-16'>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent'>
              ZEROGRAPHY
            </h2>
            <p className='text-gray-400 mt-4 text-base sm:text-lg'>
              Capturing Moments, Creating Magic
            </p>
          </div>

          {/* Social Links - Responsive spacing */}
          <div className='flex flex-wrap justify-center gap-4 sm:gap-8'>
            {[
              {
                icon: Instagram,
                href: 'https://www.instagram.com/zerographyproduction?igsh=MTlrM3p5aDB6MnVwYg==',
                color: 'hover:text-pink-500',
              },
              {
                icon: Facebook,
                href: 'https://www.facebook.com/zer0graphy?mibextid=ZbWKwL',
                color: 'hover:text-blue-600',
              },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/zerography-production-221013321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                color: 'hover:text-blue-500',
              },
              {
                icon: Youtube,
                href: 'https://youtube.com/@zerographyfilms?si=tvEQTT7IYJHkoU9j',
                color: 'hover:text-red-500',
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`text-gray-400 transition-all duration-300 hover:scale-110 ${social.color} p-2`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <social.icon className='w-6 h-6 sm:w-8 sm:h-8' />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar - Responsive layout */}
      <div className='absolute bottom-0 left-0 right-0 border-t border-gray-800 backdrop-blur-sm bg-black/50'>
        <div className='container mx-auto px-4 py-4 sm:py-6'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
            <p className='text-gray-400 text-xs sm:text-sm text-center sm:text-left'>
              ©️ 2024 Zerography Production — A creative partnership led by Kuldeep Chauhan with Nitin & Vipin. All rights reserved.
            </p>
            <nav>
              <ul className='flex gap-4 sm:gap-8 flex-wrap justify-center'>
                {['Terms', 'Privacy', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a
                      href='#'
                      className='text-gray-400 text-xs sm:text-sm hover:text-white transition-colors'
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
