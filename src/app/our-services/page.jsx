'use client';
import React, { useState, useRef } from 'react';
import { Camera, Film, Share2, ChevronDown, ChevronUp } from 'lucide-react';

const ServicesPage = () => {
  const [expandedServices, setExpandedServices] = useState(new Set([0]));
  const servicesRef = useRef({});

  const handleServiceClick = (index) => {
    const currentPosition = window.scrollY;
    setExpandedServices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });

    setTimeout(() => {
      window.scrollTo(0, currentPosition);
    }, 0);
  };

  const services = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Expert photography services for every need',
      subServices: [
        {
          title: 'Product Photography',
          description:
            'Your products deserve to shine! We specialize in high-quality product photography that showcases the best features of your items.',
          features: [
            'Studio product photography',
            'E-commerce product shoots',
            'Lifestyle product imagery',
            'Flat lays and detail shots',
            'Custom lighting setups',
            '360° product photography',
          ],
        },
        {
          title: 'Portrait Photography',
          description:
            "Whether it's a solo session, family portrait, or professional headshots, we focus on capturing your true essence.",
          features: [
            'Individual portraits',
            'Family and group photos',
            'Professional headshots',
            'Lifestyle sessions',
          ],
        },
        {
          title: 'Event Photography',
          description:
            'From corporate events to private parties, our team is dedicated to capturing the energy and details of your event.',
          features: [
            'Corporate events',
            'Product launches',
            'Galas and fundraisers',
          ],
        },
        {
          title: 'Real Estate & Architecture',
          description:
            'Sell your property faster with stunning real estate photography.',
          features: [
            'Residential real estate',
            'Commercial properties',
            'Virtual tours',
            'Aerial and drone photography',
          ],
        },
      ],
    },
    {
      icon: Film,
      title: 'Films & Campaigns',
      description: 'Bring your ideas to life with cinematic storytelling',
      subServices: [
        {
          title: 'Film Production',
          description:
            "We specialize in creating captivating films and video campaigns that communicate your brand's message.",
          features: [
            'Brand videos & commercials',
            'Short films & documentaries',
            'Social media video campaigns',
            'Product storytelling videos',
            'Behind-the-scenes & event films',
            'Creative direction & scriptwriting',
          ],
        },
        {
          title: 'Video Editing',
          description:
            'Transform raw footage into polished, professional content.',
          features: [
            'Video editing for commercials, films, and events',
            'Color grading and correction',
            'Audio mixing and sound design',
            'Motion graphics & animation',
            'Music videos & promotional content',
          ],
        },
      ],
    },
    {
      icon: Share2,
      title: 'Digital Marketing',
      description: 'Powered by Adroit Buzz - We Craft Your Digital Strategy',
      subServices: [
        {
          title: 'Search Engine Optimization (SEO)',
          description: "Boost your website's visibility in search results.",
          features: [
            'On-Page SEO optimization',
            'Off-Page SEO & backlink building',
            'Technical SEO',
            'Local SEO optimization',
          ],
        },
        {
          title: 'Social Media Marketing',
          description: 'Build and engage your audience effectively.',
          features: [
            'Social media strategy',
            'Content creation & curation',
            'Paid social campaigns',
            'Community management',
          ],
        },
        {
          title: 'PPC & Advertising',
          description: 'Drive targeted traffic to your website.',
          features: [
            'Google Ads management',
            'Social media advertising',
            'Remarketing campaigns',
            'Performance tracking',
          ],
        },
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-black py-20'>
      <div className='container mx-auto px-4'>
        <h1 className='text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text'>
          Our Services
        </h1>

        <div className='space-y-8 max-w-4xl mx-auto'>
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (servicesRef.current[index] = el)}
              className='bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300'
            >
              <div
                className='flex items-start justify-between cursor-pointer'
                onClick={() => handleServiceClick(index)}
              >
                <div className='flex items-center gap-4'>
                  <service.icon className='w-8 h-8 text-teal-400' />
                  <div>
                    <h2 className='text-2xl font-bold text-white'>
                      {service.title}
                    </h2>
                    <p className='text-gray-400 mt-1'>{service.description}</p>
                  </div>
                </div>
                {expandedServices.has(index) ? (
                  <ChevronUp className='text-gray-400 shrink-0' />
                ) : (
                  <ChevronDown className='text-gray-400 shrink-0' />
                )}
              </div>

              {expandedServices.has(index) && (
                <div className='mt-8 space-y-8 pl-12 animate-fadeIn'>
                  {service.subServices.map((subService, subIndex) => (
                    <div key={subIndex} className='animate-slideDown'>
                      <h3 className='text-xl font-semibold text-teal-400 mb-2'>
                        {subService.title}
                      </h3>
                      <p className='text-gray-300 mb-4'>
                        {subService.description}
                      </p>
                      <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        {subService.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className='text-gray-400 flex items-center gap-2 hover:text-teal-400 transition-colors'
                          >
                            <span className='w-1.5 h-1.5 bg-teal-400 rounded-full'></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
