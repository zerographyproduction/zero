'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import logoImage from '../../assets/zerography_logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 300);
  };

  const services = [
    {
      name: 'Photography',
      path: '/photography',
      subMenu: [],
    },
    {
      name: 'Films & Campaigns',
      path: '/videography',
      subMenu: [],
    },
    {
      name: 'Digital Marketing',
      path: '/digital-marketing',
      subMenu: [],
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-black bg-opacity-80 backdrop-blur-sm'
          : ''
      }`}
    >
      <div className='container mx-auto px-4 sm:px-6 py-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <Link href='/' className='relative z-10'>
            <Image
              src={logoImage}
              alt='Company Logo'
              width={90}
              height={20}
              className='object-contain w-20 sm:w-24'
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:block flex-grow'>
            <ul className='flex justify-center space-x-8'>
              <li>
                <Link
                  href='/'
                  className={`text-white hover:text-teal-300 transition-colors ${
                    pathname === '/' ? 'text-teal-300' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className='relative group'>
                <button
                  className={`text-white hover:text-teal-300 transition-colors flex items-center ${
                    services.some((service) => pathname === service.path)
                      ? 'text-teal-300'
                      : ''
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Portfolio <ChevronDown size={20} className='ml-1' />
                </button>
                {servicesOpen && (
                  <div
                    className='absolute left-0 mt-2 w-48 bg-black bg-opacity-90 backdrop-blur-sm rounded-md shadow-lg py-1 z-50'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {services.map((service, index) => (
                      <div key={index} className='relative group/sub'>
                        <Link
                          href={service.path}
                          className={`block px-4 py-2 text-sm text-white hover:bg-teal-700 flex justify-between items-center ${
                            pathname === service.path ? 'bg-teal-700/50' : ''
                          }`}
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                          {service.subMenu?.length > 0 && (
                            <ChevronRight size={14} />
                          )}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <Link
                  href='/our-services'
                  className={`text-white hover:text-teal-300 transition-colors ${
                    pathname === '/our-services' ? 'text-teal-300' : ''
                  }`}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href='/about-us'
                  className={`text-white hover:text-teal-300 transition-colors ${
                    pathname === '/about-us' ? 'text-teal-300' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/#contact'
                  className={`text-white hover:text-teal-300 transition-colors ${
                    pathname === '/#contact' ? 'text-teal-300' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <button className='hidden lg:block bg-teal-400 text-black px-4 py-2 rounded hover:bg-teal-300 transition-colors'>
            Get a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='lg:hidden p-2 text-white hover:text-teal-300 transition-colors'
            aria-label='Toggle menu'
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[78px] bg-black bg-opacity-90 backdrop-blur-md transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <nav className='container mx-auto px-4 py-4'>
            <ul className='space-y-4 text-center'>
              <li>
                <Link
                  href='/'
                  className={`block text-lg text-white hover:text-teal-300 transition-colors ${
                    pathname === '/' ? 'text-teal-300' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex justify-center items-center text-lg text-white hover:text-teal-300 transition-colors ${
                    services.some((service) => pathname === service.path)
                      ? 'text-teal-300'
                      : ''
                  }`}
                >
                  Portfolio
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`mt-2 space-y-2 transition-all duration-200 ${
                    mobileServicesOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'
                  }`}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.path}
                      className={`block pl-4 py-2 text-white hover:text-teal-300 transition-colors ${
                        pathname === service.path ? 'text-teal-300' : ''
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </li>
              <li>
                <Link
                  href='/our-services'
                  className={`block text-lg text-white hover:text-teal-300 transition-colors ${
                    pathname === '/our-services' ? 'text-teal-300' : ''
                  }`}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href='/about-us'
                  className={`block text-lg text-white hover:text-teal-300 transition-colors ${
                    pathname === '/about-us' ? 'text-teal-300' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/#contact'
                  className={`block text-lg text-white hover:text-teal-300 transition-colors ${
                    pathname === '/#contact' ? 'text-teal-300' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li className='pt-4'>
                <button className='w-full bg-teal-400 text-black px-4 py-2 rounded hover:bg-teal-300 transition-colors text-lg'>
                  Get a Quote
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
