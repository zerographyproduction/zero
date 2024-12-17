'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import adanifoundation from '@/assets/clients/adanifoundation.jpeg';
import arrivae from '@/assets/clients/arrivae.png';
import ashiana from '@/assets/clients/ashiana.png';
import beastlife from '@/assets/clients/beastlife.png';
import freefire from '@/assets/clients/freefire.png';
import ffmotionpictures from '@/assets/clients/ftmotionpictures.png';
import hcltbi from '@/assets/clients/hcl-tbi.jpg';
import historytv18 from '@/assets/clients/history18.png';
import honda from '@/assets/clients/honda.jpg';
import idbi from '@/assets/clients/idbi.jpg';
import hushpuppies from '@/assets/clients/hushpuppies.jpeg';
import imi from '@/assets/clients/imi.png';
import indigo from '@/assets/clients/indigo.png';
import infinix from '@/assets/clients/infinix.jpg';
import itel from '@/assets/clients/itel.jpg';
import jumpinheights from '@/assets/clients/jumpinheights.jpeg';
import makemytrip from '@/assets/clients/makemytrip.png';
import marutisuzuki from '@/assets/clients/marutisuzuki.jpg';
import mns from '@/assets/clients/mns.jpeg';
import mountaindew from '@/assets/clients/mountaindew.jpeg';
import muhfaad from '@/assets/clients/muhfaad.jpeg';
import nandoes from '@/assets/clients/nandos.png';
import nationalgeographic from '@/assets/clients/national-geographic.png';
import peters from '@/assets/clients/peters.png';
import piagio from '@/assets/clients/piagio.png';
import ppvtpp from '@/assets/clients/PPVTPP.jpg';
import rajputana from '@/assets/clients/rajputana.jpg';
import renault from '@/assets/clients/renault.jpg';
import samsung from '@/assets/clients/samsung.png';
import tatamotors from '@/assets/clients/tatamotors.png';
import tseries from '@/assets/clients/tseries.jpg';
import tvf from '@/assets/clients/tvf.png';
import tvs from '@/assets/clients/tvs.png';
import waycool from '@/assets/clients/waycool.jpg';
import whitehill from '@/assets/clients/whitehill.jpeg';
import winzo from '@/assets/clients/winzo.jpeg';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The product photos you did for our online store were amazing. The details and lighting made all the difference. We've already seen a boost in sales!",
    author: 'Soniya Khatri',
    role: 'Owner of Pure Farms',
  },
  {
    text: 'We hired ZEROGRAPHY PRODUCTION for a corporate event, and the photos exceeded our expectations. They really captured the energy and spirit of the day.',
    author: 'Ripul Agarwal',
    role: 'CEO, AVR EVENTS',
  },
];

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const clients = [
    { name: 'Adani Foundation', image: adanifoundation },
    { name: 'Arrivae', image: arrivae },
    { name: 'Ashiana', image: ashiana },
    { name: 'Beast Life', image: beastlife },
    { name: 'Free Fire', image: freefire },
    { name: 'FT Motion Pictures', image: ffmotionpictures },
    { name: 'HCL TBI', image: hcltbi },
    { name: 'History TV18', image: historytv18 },
    { name: 'Honda', image: honda },
    { name: 'IDBI', image: idbi },
    { name: 'Hush Puppies', image: hushpuppies },
    { name: 'IMI', image: imi },
    { name: 'IndiGo', image: indigo },
    { name: 'Infinix', image: infinix },
    { name: 'iTel', image: itel },
    { name: 'Jumpin Heights', image: jumpinheights },
    { name: 'MakeMyTrip', image: makemytrip },
    { name: 'Maruti Suzuki', image: marutisuzuki },
    { name: 'MNS', image: mns },
    { name: 'Mountain Dew', image: mountaindew },
    { name: 'Muhfaad', image: muhfaad },
    { name: "Nando's", image: nandoes },
    { name: 'National Geographic', image: nationalgeographic },
    { name: 'Peters', image: peters },
    { name: 'Piaggio', image: piagio },
    { name: 'PPVTPP', image: ppvtpp },
    { name: 'Rajputana', image: rajputana },
    { name: 'Renault', image: renault },
    { name: 'Samsung', image: samsung },
    { name: 'Tata Motors', image: tatamotors },
    { name: 'T-Series', image: tseries },
    { name: 'TVF', image: tvf },
    { name: 'TVS', image: tvs },
    { name: 'WayCool', image: waycool },
    { name: 'White Hill', image: whitehill },
    { name: 'WinZo', image: winzo },
  ];

  useEffect(() => {
    setIsVisible(true);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, options);

    const elements = document.querySelectorAll('.client-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderClientGrid = (clientsList) => (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
      {clientsList.map((client, index) => (
        <div
          key={index}
          className='client-card opacity-0 transform translate-y-4 transition-all duration-500 hover:scale-105'
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className='bg-[#fff] backdrop-blur-sm rounded-lg p-4 flex items-center justify-center group hover:bg-white transition-all duration-300 border border-gray-200/30'>
            <Image
              src={client.image}
              alt={client.name}
              width={120}
              height={60}
              className='w-auto h-12 object-contain group-hover:brightness-110 transition-all duration-300'
              unoptimized
              priority={index < 12}
            />
          </div>
          <p className='text-center text-gray-400 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {client.name}
          </p>
        </div>
      ))}
    </div>
  );

  const midPoint = Math.ceil(clients.length / 2);
  const firstHalf = clients.slice(0, midPoint);
  const secondHalf = clients.slice(midPoint);

  return (
    <section className='relative min-h-screen bg-black py-20 px-4 overflow-hidden'>
      {/* Enhanced Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent animate-pulse'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] animate-[float_20s_linear_infinite]'></div>

      {/* Title with Animation */}
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className='text-6xl font-bold bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent animate-gradient'>
          Our Trusted Partners
        </h2>
        <p className='text-gray-400 mt-4 text-lg'>
          Collaborating with industry leaders to create exceptional content
        </p>
      </div>

      <div className='container mx-auto max-w-7xl'>
        {renderClientGrid(firstHalf)}

        <div className='max-w-4xl mx-auto my-20'>
          <div className='relative bg-gray-900/30 rounded-2xl p-12 backdrop-blur-sm border border-purple-500/20'>
            {/* Decorative quote icon */}
            <div className='absolute -top-6 -left-6'>
              <div className='bg-purple-500/20 p-4 rounded-full'>
                <Quote className='w-8 h-8 text-purple-400' />
              </div>
            </div>

            {/* Testimonials */}
            <div className='relative h-48'>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute w-full transition-all duration-500 ${
                    index === activeTestimonial
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <p className='text-xl text-gray-300 italic mb-6'>
                    {testimonial.text}
                  </p>
                  <div className='flex flex-col'>
                    <span className='text-purple-400 font-semibold'>
                      {testimonial.author}
                    </span>
                    <span className='text-gray-500 text-sm'>
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Navigation Dots */}
            <div className='flex justify-center gap-2 mt-8'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-purple-400 w-6'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {renderClientGrid(secondHalf)}
      </div>
    </section>
  );
}
