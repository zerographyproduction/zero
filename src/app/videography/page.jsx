'use client';
import React, { useState, useEffect } from 'react';
import HorizontalHeading from '/src/app/components/HorizontalHeading';
import { Play, X, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { CATEGORIES, VIDEO_ITEMS } from './videos';

const YouTubeEmbed = ({ videoId, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center backdrop-blur-sm'>
      <div
        className='absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50'
        onClick={onClose}
      />
      <button
        onClick={onClose}
        className='absolute top-2 sm:top-4 right-2 sm:right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-50'
      >
        <X size={24} />
      </button>
      <div className='relative w-full max-w-[95vw] sm:max-w-[90vw] max-h-[90vh] aspect-video'>
        {isLoading && (
          <div className='absolute inset-0 flex items-center justify-center'>
            <Loader2 className='w-8 h-8 text-white animate-spin' />
          </div>
        )}
        <iframe
          className='w-full h-full rounded-lg shadow-2xl'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

const VideographyIntro = () => (
  <div className='max-w-4xl mx-auto py-6 px-4 sm:px-6'>
    <p className='text-base sm:text-xl text-gray-300 leading-relaxed space-y-2'>
      At ZEROGRAPHY PRODUCTION, we create impactful{' '}
      <span className='text-teal-400 font-medium'>Films & Campaigns</span> that
      tell your brand's story with creativity and style. Whether it's a
      commercial, product video, or social media campaign, we bring your vision
      to life.
      <br className='hidden sm:block' />
      <br className='hidden sm:block' />
      Our <span className='text-teal-400 font-medium'>Video Editing</span>{' '}
      services take your raw footage and transform it into polished,
      professional content. From color grading to sound design and motion
      graphics, we ensure your video is engaging, cohesive, and ready to make an
      impact.
    </p>
  </div>
);

export default function VideographyPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredVideos =
    activeTab === 'all'
      ? VIDEO_ITEMS
      : VIDEO_ITEMS.filter((video) => video.category === activeTab);

  return (
    <div className='min-h-screen bg-black'>
      <HorizontalHeading heading='Films & Campaigns' />
      <VideographyIntro />

      <div className='max-w-[2000px] mx-auto px-4 py-8 sm:py-12'>
        {/* Scrollable Category Navigation */}
        <div className='overflow-x-auto -mx-4 px-4 mb-8 sm:mb-16'>
          <div className='flex whitespace-nowrap sm:flex-wrap gap-2 sm:gap-3 min-w-min sm:justify-center bg-gray-900/30 p-4 rounded-2xl backdrop-blur-sm sticky top-4 z-10'>
            {CATEGORIES.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-teal-500/20 text-teal-400 shadow-lg shadow-teal-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Video Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {filteredVideos.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => !isMobile && setIsHovered(index)}
              onMouseLeave={() => !isMobile && setIsHovered(null)}
              onClick={() => setSelectedVideo(item)}
              className='group relative rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300'
            >
              <div className='aspect-video relative'>
                <Image
                  src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                  alt={item.title}
                  fill
                  className='object-cover transform transition-transform duration-700 group-hover:scale-105'
                />

                {/* Gradient Overlay - Always visible on mobile */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 ${
                    isMobile || isHovered === index
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                />

                {/* Play Button */}
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ${
                    isMobile
                      ? 'scale-100 opacity-100'
                      : isHovered === index
                      ? 'scale-100 opacity-100'
                      : 'scale-90 opacity-0'
                  }`}
                >
                  <div className='bg-white/10 backdrop-blur-sm rounded-full p-3 sm:p-4 group-hover:bg-white/20 transition-all duration-300'>
                    <Play className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                  </div>
                </div>

                {/* Video Info - Always visible on mobile */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform transition-all duration-300 ${
                    isMobile
                      ? 'translate-y-0 opacity-100'
                      : isHovered === index
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                >
                  {/* <h3 className='text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-gray-300 text-sm line-clamp-2'>
                    {item.description}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <YouTubeEmbed
          videoId={selectedVideo.videoId}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}
