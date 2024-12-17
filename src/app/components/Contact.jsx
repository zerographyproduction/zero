import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import HorizontalHeading from './HorizontalHeading';

export default function Contact() {
  return (
    <section id='contact' className='bg-black relative overflow-hidden'>
      <HorizontalHeading heading='Contact' />
      <div className='min-h-screen flex items-center relative py-20'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-black'></div>
        <div className='absolute -left-48 top-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-[128px] animate-pulse opacity-30'></div>
        <div className='absolute -right-48 bottom-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] animate-pulse opacity-30'></div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-5xl font-bold text-white mb-6'>
                Let's Create Something Amazing
              </h2>
              <p className='text-xl text-gray-400'>
                Ready to bring your vision to life? Get in touch with us.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-teal-500/30 transition-all duration-300 group'>
                <div className='flex flex-col items-center text-center gap-4'>
                  <div className='bg-teal-500/10 p-4 rounded-lg group-hover:bg-teal-500/20 transition-colors'>
                    <MapPin className='text-teal-400 w-8 h-8 group-hover:scale-110 transition-transform' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-white mb-2'>
                      Visit Us
                    </h3>
                    <p className='text-gray-300'>
                      Delhi Office: G-58, Nairana Vihar,
                      <br />
                      New Delhi - 110025
                    </p>
                    <a
                      href='https://www.google.com/maps/place/Zerography+Production/@28.6311203,77.138212,17z/data=!3m1!4b1!4m6!3m5!1s0x390d121888f102bb:0x37697af2fe415f1e!8m2!3d28.6311203!4d77.1407869!16s%2Fg%2F11dzsp2dxr?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D
                      '
                      target='blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-teal-400 mt-4 hover:text-teal-300 transition-colors'
                    >
                      Get Directions <ExternalLink className='w-4 h-4' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group'>
                <div className='flex flex-col items-center text-center gap-4'>
                  <div className='bg-blue-500/10 p-4 rounded-lg group-hover:bg-blue-500/20 transition-colors'>
                    <Phone className='text-blue-400 w-8 h-8 group-hover:scale-110 transition-transform' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-white mb-2'>
                      Call Us
                    </h3>
                    <a
                      href='tel:+919013218028'
                      className='text-gray-300 block hover:text-blue-400 transition-colors'
                    >
                      +91 9013218028
                    </a>
                    <a
                      href='tel:+919540998320'
                      className='text-gray-300 block hover:text-blue-400 transition-colors'
                    >
                      +91 9540998320
                    </a>
                  </div>
                </div>
              </div>

              <div className='bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-purple-500/30 transition-all duration-300 group'>
                <div className='flex flex-col items-center text-center gap-4'>
                  <div className='bg-purple-500/10 p-4 rounded-lg group-hover:bg-purple-500/20 transition-colors'>
                    <Mail className='text-purple-400 w-8 h-8 group-hover:scale-110 transition-transform' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-white mb-2'>
                      Email Us
                    </h3>
                    <a
                      href='mailto:zerographyproduction@gmail.com'
                      className='text-gray-300 hover:text-purple-400 transition-colors'
                    >
                      zerographyproduction@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
