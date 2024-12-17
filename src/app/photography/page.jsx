'use client';
import React, { useState, useEffect } from 'react';
import HorizontalHeading from '/src/app/components/HorizontalHeading';
import Image from 'next/image';
import { Eye, X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { PHOTO_ITEMS } from './photos';

const CategoryButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
      active
        ? 'bg-teal-500/20 text-teal-400 shadow-lg shadow-teal-500/10'
        : 'text-gray-400 hover:text-white hover:bg-gray-800'
    }`}
  >
    {children}
  </button>
);

const PhotographyDescription = () => (
  <div className='max-w-4xl mx-auto py-6 px-4 sm:px-6'>
    <p className='text-base sm:text-xl text-gray-300 leading-relaxed space-y-2'>
      At ZEROGRAPHY PRODUCTION, we offer expert photography services for every
      need:
      <br className='hidden sm:block' />
      <span className='block mt-4'>
        <span className='text-teal-400 font-medium'>Product Photography</span> -
        High-quality images that showcase your products perfectly.
      </span>
      <span className='block mt-2'>
        <span className='text-teal-400 font-medium'>Event Photography</span> -
        Capturing memorable moments at corporate and private events.
      </span>
      <span className='block mt-2'>
        <span className='text-teal-400 font-medium'>Portrait Photography</span>{' '}
        - Professional headshots and personalized portraits that bring out your
        best.
      </span>
      <span className='block mt-2'>
        <span className='text-teal-400 font-medium'>
          Architectural Photography
        </span>{' '}
        - Stunning shots that highlight the beauty and detail of architectural
        projects.
      </span>
    </p>
  </div>
);

export default function PhotographyPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    'all',
    ...new Set(PHOTO_ITEMS.map((item) => item.category)),
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredPhotos =
    activeTab === 'all'
      ? PHOTO_ITEMS
      : PHOTO_ITEMS.filter((photo) => photo.category === activeTab);

  const handleImageLoad = (imageUrl) => {
    setLoadedImages((prev) => new Set([...prev, imageUrl]));
  };

  const handlePrevImage = (e) => {
    e?.stopPropagation();
    const newIndex =
      (selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const handleNextImage = (e) => {
    e?.stopPropagation();
    const newIndex = (selectedIndex + 1) % filteredPhotos.length;
    setSelectedIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, selectedIndex]);

  return (
    <div className='min-h-screen bg-black'>
      {/* Loading Screen */}
      {isLoading && (
        <div className='fixed inset-0 z-50 bg-black flex flex-col items-center justify-center'>
          <div className='relative'>
            <Loader2 className='w-12 h-12 text-teal-500 animate-spin' />
            <div className='absolute inset-0 animate-pulse bg-teal-500/20 rounded-full blur-xl'></div>
          </div>
          <p className='mt-4 text-gray-400 text-sm font-light tracking-wider'>
            Loading Gallery
          </p>
        </div>
      )}

      <HorizontalHeading heading='Photography' />
      <PhotographyDescription />

      <div className='max-w-[2000px] mx-auto px-4 py-8'>
        {/* Category Navigation - Scrollable on mobile */}
        <div className='overflow-x-auto pb-4 mb-8'>
          <div className='flex justify-start sm:justify-center gap-2 sm:gap-3 min-w-min bg-gray-900/50 p-4 rounded-2xl backdrop-blur-sm sticky top-4 z-10'>
            {categories.map((category) => (
              <CategoryButton
                key={category}
                active={activeTab === category}
                onClick={() => setActiveTab(category)}
              >
                {category === 'all' ? 'All Photos' : category}
              </CategoryButton>
            ))}
          </div>
        </div>

        {/* Image Grid - Responsive columns */}
        <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'>
          {filteredPhotos.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedPhoto(item);
                setSelectedIndex(index);
              }}
              className='relative break-inside-avoid group cursor-pointer mb-4'
            >
              <div className='relative overflow-hidden rounded-lg bg-gray-900/50'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={800}
                  className={`w-full transition-all duration-500 ${
                    loadedImages.has(item.image)
                      ? 'opacity-100 filter brightness-90 group-hover:brightness-110 group-hover:scale-105'
                      : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(item.image)}
                  loading='lazy'
                  quality={75}
                  style={{ display: 'block' }}
                />
                {!loadedImages.has(item.image) && (
                  <div className='absolute inset-0 animate-pulse bg-gray-800'></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal - Responsive sizing and controls */}
        {selectedPhoto && (
          <div
            className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm'
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Navigation Controls */}
            {!isMobile && (
              <>
                <button
                  onClick={handlePrevImage}
                  className='absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 hover:bg-white/10 rounded-full'
                  aria-label='Previous image'
                >
                  <ChevronLeft size={isMobile ? 32 : 48} />
                </button>
                <button
                  onClick={handleNextImage}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 hover:bg-white/10 rounded-full'
                  aria-label='Next image'
                >
                  <ChevronRight size={isMobile ? 32 : 48} />
                </button>
              </>
            )}

            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className='absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-4 hover:bg-white/10 rounded-full'
              aria-label='Close modal'
            >
              <X size={24} />
            </button>

            {/* Image Container */}
            <div className='relative max-w-[90vw] max-h-[90vh] flex items-center justify-center'>
              <div className='relative'>
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  width={1920}
                  height={1080}
                  className='max-h-[90vh] w-auto rounded-lg shadow-2xl'
                  onClick={(e) => e.stopPropagation()}
                  priority
                  quality={90}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Mobile Touch Areas */}
            {isMobile && (
              <>
                <div
                  className='absolute left-0 top-0 bottom-0 w-1/3'
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                />
                <div
                  className='absolute right-0 top-0 bottom-0 w-1/3'
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
