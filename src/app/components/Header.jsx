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

          {/* Desktop Navigation - Hidden */}
          <div className='hidden lg:block flex-grow'></div>
        </div>
      </div>
    </header>
  );
}
