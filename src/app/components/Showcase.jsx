'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from 'lucide-react';

const videos = [
  'https://res.cloudinary.com/dd87wq4wp/video/upload/v1731844006/12657735_1920_1080_30fps.mp4',
];

export default function VideoShowcase() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef(videos.map(() => React.createRef()));
  const containerRef = useRef(null);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const playVideo = (index) => {
    videoRefs.current.forEach((ref, i) => {
      if (ref.current) {
        if (i === index) {
          ref.current.currentTime = 0;
          ref.current.play().catch((error) => {
            console.error('Video playback failed:', error);
          });
          ref.current.classList.remove('opacity-0');
          ref.current.classList.add('opacity-100');
        } else {
          ref.current.pause();
          ref.current.classList.remove('opacity-100');
          ref.current.classList.add('opacity-0');
        }
      }
    });
  };

  useEffect(() => {
    const handleVideoEnd = () => {
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      setCurrentVideoIndex(nextIndex);
      playVideo(nextIndex);
    };

    const handleLoadedData = () => {
      setIsLoading(false);
    };

    videoRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.addEventListener('ended', handleVideoEnd);
        ref.current.addEventListener('loadeddata', handleLoadedData);
      }
    });

    return () => {
      videoRefs.current.forEach((ref) => {
        if (ref.current) {
          ref.current.removeEventListener('ended', handleVideoEnd);
          ref.current.removeEventListener('loadeddata', handleLoadedData);
        }
      });
    };
  }, [currentVideoIndex]);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    videoRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.muted = newMutedState;
      }
    });
  };

  const handlePrev = () => {
    const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    setCurrentVideoIndex(prevIndex);
    playVideo(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
    playVideo(nextIndex);
  };

  return (
    <section
      ref={containerRef}
      className='relative w-full overflow-hidden bg-gray-900'
      style={{ height: isMobile ? '60vh' : '100vh' }}
    >
      {/* Videos */}
      {videos.map((video, index) => (
        <video
          key={index}
          ref={videoRefs.current[index]}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay={index === currentVideoIndex}
          muted={isMuted}
          loop={false}
          playsInline
          poster='/api/placeholder/1920/1080'
        >
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ))}

      {/* Video Controls */}
      <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Navigation Controls (if multiple videos) */}
          {videos.length > 1 && (
            <div className='flex space-x-4'>
              <button
                onClick={handlePrev}
                className='bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all'
                aria-label='Previous video'
              >
                <ChevronLeft size={isMobile ? 20 : 24} />
              </button>
              <button
                onClick={handleNext}
                className='bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all'
                aria-label='Next video'
              >
                <ChevronRight size={isMobile ? 20 : 24} />
              </button>
            </div>
          )}

          {/* Mute Toggle */}
          <button
            onClick={toggleMute}
            className='bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all'
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX size={isMobile ? 20 : 24} />
            ) : (
              <Volume2 size={isMobile ? 20 : 24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Touch Areas */}
      {isMobile && videos.length > 1 && (
        <>
          <div
            className='absolute left-0 top-0 bottom-0 w-1/3'
            onClick={handlePrev}
          />
          <div
            className='absolute right-0 top-0 bottom-0 w-1/3'
            onClick={handleNext}
          />
        </>
      )}
    </section>
  );
}
