'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import kuldeep from '@/assets/team/kuldeep.png';
import mehak from '@/assets/team/mehak.jpg';
import nitin from '@/assets/team/nitin.jpg';
import vipin from '@/assets/team/vipin.png';
import saket from '@/assets/team/saket.jpg';
import user from '@/assets/team/user.png';
import gautam from '@/assets/team/gautam.jpeg';
import { Volume2, VolumeX } from 'lucide-react';

const TeamMemberCard = ({ image, name, role, description }) => (
  <div className='group relative bg-gray-800 rounded-lg overflow-hidden h-[600px] transform transition-all duration-300 hover:-translate-y-2'>
    <div className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

    <div className='relative z-10 h-full flex flex-col'>
      <div className='aspect-square relative w-full mb-4 overflow-hidden'>
        <Image
          src={image}
          alt={name}
          fill
          className='object-cover object-center group-hover:scale-105 transition-transform duration-300'
        />
      </div>

      <div className='flex-grow p-6'>
        <h3 className='text-xl font-bold mb-2'>{name}</h3>
        <p className='text-gray-400 mb-4'>{role}</p>
        <p className='text-sm text-gray-300'>{description}</p>
      </div>
    </div>
  </div>
);

const teamMembers = [
  {
    image: vipin,
    name: 'Vipin Kumar Pal',
    role: 'Director of Photography',
    description:
      'Vipin Kumar Pal, our esteemed Director of Photography, brings over 12 years of unparalleled experience in the film industry. With a keen eye for detail and a passion for visual storytelling, Vipin has mastered the art of capturing moments that leave lasting impressions.',
  },
  {
    image: nitin,
    name: 'Nitin Kumar Pal',
    role: 'Creative Director',
    description:
      'Nitin Kumar Pal, our Creative Director, brings a wealth of experience and innovation to every project he leads. With 10 years in the film industry, Nitin has honed his ability to craft compelling narratives and execute visionary concepts that captivate audiences.',
  },
  {
    image: kuldeep,
    name: 'Kuldeep Chauhan',
    role: 'Post-Production Head',
    description:
      'Kuldeep Chauhan, our Post-Production Head and Founder of ZEROGRAPHY PRODUCTIONS, brings a decade of expertise to the craft of storytelling through editing. With 10 years of experience in the industry, Kuldeep has a proven track record of transforming raw footage into polished, impactful narratives that resonate with audiences.',
  },
  {
    image: mehak,
    name: 'Mehak Malik',
    role: 'Creative Hade',
    description:
      'Mehak Malik, with her exceptional photography skills, crafts images that are both aesthetically stunning and deeply evocative. Her eye for detail ensures every frame communicates the intended message with clarity and style.',
  },
  {
    image: saket,
    name: 'Saket',
    role: 'Video Editing, Motion Graphics, and Animation Expert',
    description:
      'Saket excels in crafting seamless edits that enhance storytelling and keep audiences engaged. His dedication to detail and flair for pacing make him a master of video editing, motion graphics, and animation.',
  },
  {
    image: gautam,
    name: 'Gautam',
    role: 'Photographer',
    description:
      'Gautam, our specialist in architectural photography, brings 8 years of experience capturing the essence of design and structure. With a keen eye for detail and a profound understanding of composition, he transforms spaces into visually compelling narratives.',
  },
  {
    image: user,
    name: 'Parveen',
    role: 'Video Editing, Motion Graphics, and Animation Expert',
    description:
      "Parveen specializes in motion graphics and animation, creating visually dynamic elements that add depth and energy to our projects. His innovative approach ensures every animation is not only visually stunning but also aligned with the project's narrative.",
  },
  {
    image: user,
    name: 'Parth',
    role: 'Content Writer',
    description:
      'Parth, our skilled Content Writer, brings 5 years of experience in crafting compelling and impactful narratives. With a talent for weaving words into engaging stories, Parth plays a vital role in shaping the voice of our brand and projects.',
  },
  {
    image: user,
    name: 'Atharv Singh',
    role: 'Digital Marketing Partner',
    description:
      'Atharv Singh, our dedicated Digital Marketing Partner, brings 5 years of expertise in driving impactful marketing strategies. With a deep understanding of the digital landscape, Atharv specializes in crafting campaigns that amplify brand visibility and engage target audiences effectively.',
  },
];

export default function AboutUsPage() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className='min-h-screen bg-gray-900 text-white py-20'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8'>
          About ZEROGRAPHY PRODUCTIONS
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16'>
          {/* About content */}
          <div className='space-y-6'>
            <p>
              Welcome to ZEROGRAPHY PRODUCTIONS, where creativity meets
              innovation. We are a full-service production house passionate
              about bringing your vision to life. With expertise spanning brand
              films, corporate videos, music videos, film production,
              photography, digital marketing, and video editing, we deliver
              captivating content that resonates with your audience.
            </p>
            <p>
              Our team of skilled professionals blends artistry and technical
              precision to craft stories that inspire and engage. Whether you're
              looking to elevate your brand, create stunning visuals, or execute
              a digital marketing campaign, we are here to transform ideas into
              impactful realities.
            </p>
            <p>
              At ZEROGRAPHY PRODUCTIONS, every project is an art for us. We
              listen, we strategize, and we create — ensuring your unique
              narrative shines through every frame. Let's bring your story to
              the world.
            </p>

            <h2 className='text-2xl font-bold pt-4'>Our Experience</h2>
            <p>
              With over a decade of experience in the industry, our team at
              ZEROGRAPHY PRODUCTIONS has honed the art of storytelling through
              visual and digital media. Over the past 10 years, we have
              partnered with diverse clients across industries, delivering
              exceptional results in brand films, corporate videos, music
              videos, film production, photography, digital marketing, and video
              editing.
            </p>
            <p>
              Our seasoned team combines industry expertise with a passion for
              creativity, ensuring every project reflects professionalism and
              innovation. From concept to execution, we take pride in producing
              content that not only meets but exceeds our clients' expectations.
            </p>
          </div>

          {/* Video section */}
          <div className='flex justify-center items-center'>
            <div className='relative w-full max-w-md'>
              <div className='relative z-10 rounded-lg shadow-xl overflow-hidden'>
                <video
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className='w-full h-full object-cover rounded-lg transform transition-transform duration-700 hover:scale-105'
                >
                  <source
                    src='https://res.cloudinary.com/dd87wq4wp/video/upload/v1734256204/videos/fvmudwegj0o4f7u2rhdt.mp4'
                    type='video/mp4'
                  />
                  Your browser does not support the video tag.
                </video>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className='absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm'
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX className='w-5 h-5' />
                  ) : (
                    <Volume2 className='w-5 h-5' />
                  )}
                </button>

                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent'></div>
              </div>
            </div>
          </div>
        </div>

        <h2 className='text-2xl font-bold mt-20 mb-12'>Meet Our Team</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
