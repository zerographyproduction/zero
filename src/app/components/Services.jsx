'use client';
import { useEffect } from 'react';
import { Camera, Film, Share2, Edit3 } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className='py-10 bg-black min-h-screen relative overflow-hidden'>
      <SectionHeading heading='services' />

      {/* Animated background grid */}
      <div className='absolute inset-0 bg-grid-pattern opacity-5 animate-pulse'></div>

      <div className='container mx-auto px-4'>
        {/* Heading Section with enhanced animations */}
        <div className='mb-20 relative fade-in'>
          <div className='absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-teal-400 to-transparent animate-pulse'></div>
          <h2 className='text-6xl font-bold text-white mb-6 tracking-tight transform transition-all duration-700 hover:scale-105'>
            Transform
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 animate-gradient'>
              Your Digital Presence
            </span>
          </h2>
          <p className='text-xl text-gray-400 max-w-2xl ml-auto transform transition-all duration-500'>
            We are an award-winning creative powerhouse, crafting immersive
            brand experiences through cutting-edge content, strategic marketing,
            and innovative technology solutions.
          </p>
        </div>

        {/* Services Grid with consistent styling */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Photography Card */}
          <div className='fade-in group relative bg-gray-900 p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10'>
            <div className='absolute inset-0 bg-gradient-to-br from-teal-400/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity'></div>
            <Camera className='text-teal-400 w-8 h-8 mb-4 transform group-hover:scale-110 transition-transform' />
            <h3 className='text-xl font-semibold text-white mb-3'>
              Photography
            </h3>
            <p className='text-gray-400 leading-relaxed'>
              Professional photography services capturing the essence of your
              brand through expertly crafted product, architectural, and
              lifestyle imagery.
            </p>
          </div>

          {/* Videography Card */}
          <div className='fade-in group relative bg-gray-900 p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity'></div>
            <Film className='text-blue-500 w-8 h-8 mb-4 transform group-hover:scale-110 transition-transform' />
            <h3 className='text-xl font-semibold text-white mb-3'>
              Films & Campaign
            </h3>
            <p className='text-gray-400 leading-relaxed'>
              Compelling video production services bringing your story to life
              through branded content, event coverage, and impactful
              testimonials.
            </p>
          </div>

          {/* Digital Marketing Card */}
          <div className='fade-in group relative bg-gray-900 p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10'>
            <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity'></div>
            <Share2 className='text-purple-500 w-8 h-8 mb-4 transform group-hover:scale-110 transition-transform' />
            <h3 className='text-xl font-semibold text-white mb-3'>
              Digital Marketing
            </h3>
            <p className='text-gray-400 leading-relaxed'>
              Strategic campaigns that drive engagement and growth across
              digital platforms, leveraging cutting-edge marketing solutions.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s ease-out;
        }

        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
