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
          <nav className='hidden lg:flex items-center space-x-8'>
            <Link
              href='/'
              className='text-white hover:text-gray-300 transition-colors'
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className='relative'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className='text-white hover:text-gray-300 transition-colors flex items-center space-x-1'>
                <span>Services</span>
                <ChevronDown className='w-4 h-4' />
              </button>
              {servicesOpen && (
                <div className='absolute top-full left-0 mt-2 w-56 bg-black bg-opacity-90 backdrop-blur-sm rounded-lg shadow-xl py-2'>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.path}
                      className='block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 transition-colors'
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href='/about'
              className='text-white hover:text-gray-300 transition-colors'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='text-white hover:text-gray-300 transition-colors'
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='lg:hidden text-white z-50'
          >
            {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className='lg:hidden mt-4 pb-4'>
            <div className='flex flex-col space-y-4'>
              <Link
                href='/'
                className='text-white hover:text-gray-300 transition-colors'
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className='text-white hover:text-gray-300 transition-colors flex items-center justify-between w-full'
                >
                  <span>Services</span>
                  {mobileServicesOpen ? (
                    <ChevronDown className='w-4 h-4' />
                  ) : (
                    <ChevronRight className='w-4 h-4' />
                  )}
                </button>
                {mobileServicesOpen && (
                  <div className='ml-4 mt-2 space-y-2'>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.path}
                        className='block text-gray-300 hover:text-white transition-colors'
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href='/about'
                className='text-white hover:text-gray-300 transition-colors'
              >
                About
              </Link>
              <Link
                href='/contact'
                className='text-white hover:text-gray-300 transition-colors'
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
