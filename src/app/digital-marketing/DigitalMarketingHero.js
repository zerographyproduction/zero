import React from 'react';

export default function DigitalMarketingHero() {
  const videoUrl =
    'https://res.cloudinary.com/dd87wq4wp/video/upload/v1735032382/videos/tdnqr5shd0qfdjn8onv8.mp4';

  return (
    <section className='h-[30vh] sm:h-[40vh] relative flex items-center overflow-hidden'>
      <div className='absolute inset-0 w-full h-full'>
        <video
          className='absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type='video/mp4' />
        </video>
      </div>
    </section>
  );
}
