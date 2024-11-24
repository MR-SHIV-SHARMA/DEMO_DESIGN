'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Rectangle8 from '../public/Navimg/Rectangle8.png';
import Rectangle9 from '../public/Navimg/Rectangle9.png';
import Vectordownarrow from '../public/Navimg/Vectordownarrow.png';
import Link from 'next/link';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set the current path on the client side
      setCurrentPath(window.location.pathname);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const isActiveLink = (path) => currentPath === path;

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-neutral-300 translate-y-[-10px]'
          : 'bg-transparent'
      } 
     `}
    >
      <div className="flex justify-between items-center px-6 md:px-12 pt-4 pb-2">
        <Link href="/">
          <div className="flex items-center gap-3">
            <div className="text-black relative h-10 w-10">
              <Image
                src={Rectangle8}
                alt=""
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
              <Image
                src={Rectangle9}
                alt=""
                layout="fill"
                objectFit="cover"
                className="absolute z-10 pt-1 pl-1"
              />
            </div>
            <h1 className="text-black font-bold">DEMO</h1>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center ml-auto space-x-6">
          <Link href="/aboutus">
            <div
              className={`text-black border-2 border-white rounded-full px-3 py-1 text-sm ${isActiveLink('/aboutus') ? 'bg-white text-black' : 'text-white'}`}
            >
              About us
            </div>
          </Link>
          <Link href="/article">
            <div
              className={`text-black border-2 border-white rounded-full px-3 py-1 text-sm ${isActiveLink('/article') ? 'bg-white text-black' : 'text-white'}`}
            >
              Article
            </div>
          </Link>
          <Link href="/property">
            <div
              className={`text-black border-2 border-white rounded-full px-3 py-1 text-sm flex justify-center items-center gap-2 ${isActiveLink('/property') ? 'bg-white text-black' : 'text-white'}`}
            >
              Property
              <Image src={Vectordownarrow} alt="" width={12} height={12} />
            </div>
          </Link>
        </div>

        {/* Desktop Sign Up Button */}
        <div className="hidden md:block px-4">
          <Link href="/signup">
            <div className="text-green-600 text-center rounded-full px-6 py-3 bg-green-200 font-semibold">
              Sign Up!
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            <div className="text-black px-4 py-2 font-semibold">
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-300 fixed right-0 h-screen w-[70%] z-50 flex flex-col items-start px-6 py-2 space-y-4 shadow-lg">
          <Link href="/aboutus">
            <div
              className={`text-black border-2 border-white rounded-full px-3 py-1 ${isActiveLink('/aboutus') ? 'bg-white text-black' : 'text-white'}`}
              onClick={toggleMobileMenu}
            >
              About us
            </div>
          </Link>
          <Link href="/article">
            <div
              className={`text-black border-2 border-white rounded-full px-3 py-1 ${isActiveLink('/article') ? 'bg-white text-black' : 'text-white'}`}
              onClick={toggleMobileMenu}
            >
              Article
            </div>
          </Link>
          <Link href="/property">
            <div
              className={`text-black border-2 border-white rounded-full px-3 py-1 ${isActiveLink('/property') ? 'bg-white text-black' : 'text-white'}`}
              onClick={toggleMobileMenu}
            >
              Property
            </div>
          </Link>
          <Link href="/signup">
            <div
              className="text-green-600 text-center rounded-full px-4 py-2 bg-green-200 font-semibold"
              onClick={toggleMobileMenu}
            >
              Sign Up!
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
