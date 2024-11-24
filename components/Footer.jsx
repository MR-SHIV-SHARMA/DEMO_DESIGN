import React from 'react';
import Image from 'next/image';
import Rectangle8 from '../public/Navimg/Rectangle8.png';
import Rectangle9 from '../public/Navimg/Rectangle9.png';
import brandico_facebook from '../public/Footerimg/brandico_facebook.png';
import twitter from '../public/Footerimg/twitter.png';
import instagram from '../public/Footerimg/instagram.png';
import colorblur1 from '../public/Footerimg/colorblur1.png';
import colorblur2 from '../public/Footerimg/colorblur2.png';
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative overflow-x-hidden">
      <Image
        src={colorblur1}
        alt=" "
        className="absolute right-0 bottom-0 z-[-10] "
      />
      <Image
        src={colorblur2}
        alt=" "
        className="absolute right-0 bottom-0 z-[-10] "
      />
      <div className="flex flex-col sm:flex-row justify-between px-6 sm:pl-20 sm:gap-10 py-6 sm:py-14 space-y-4 sm:space-y-0">
        <div className="sm:w-1/3">
          <h2 className="text-lg font-semibold mb-4">
            <div className="flex items-center gap-3">
              <div className="text-black relative h-10 w-10">
                <Image
                  src={Rectangle8}
                  alt="Logo"
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
                <Image
                  src={Rectangle9}
                  alt="Logo"
                  layout="fill"
                  objectFit="cover"
                  className="absolute z-10 pt-1 pl-1"
                />
              </div>
              <h1 className="text-black font-bold">DEMO</h1>
            </div>
          </h2>
          <p className="text-gray-400 space-y-1 text-sm">
            <span className="block">
              We provide information about properties such
            </span>
            <span className="block">
              as houses, villas, and apartments to help people
            </span>
            <span className="block">find their dream home</span>
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="https://facebook.com">
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <Image src={brandico_facebook} alt="Facebook" />
              </button>
            </Link>
            <Link href="https://twitter.com">
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <Image src={twitter} alt="Twitter" />
              </button>
            </Link>
            <Link href="https://instagram.com">
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <Image src={instagram} alt="Instagram" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex space-x-4 sm:space-x-20">
          <div className="w-full sm:w-auto">
            <h2 className="text-sm sm:text-lg font-semibold mb-4">Property</h2>
            <ul className="text-gray-400 space-y-1 sm:space-y-4 text-xs sm:text-sm">
              <li>
                <Link href="/House">House</Link>
              </li>
              <li>
                <Link href="/Apartment">Apartment</Link>
              </li>
              <li>
                <Link href="/Villa">Villa</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h2 className="text-sm sm:text-lg font-semibold mb-4">Article</h2>
            <ul className="text-gray-400 space-y-1 sm:space-y-4 text-xs sm:text-sm">
              <li>
                <Link href="/NewArticle">New Article</Link>
              </li>
              <li>
                <Link href="/PopularArticle">Popular Article</Link>
              </li>
              <li>
                <Link href="/MostRead">Most Read</Link>
              </li>
              <li>
                <Link href="/Tips">Tips & Tricks</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h2 className="text-sm sm:text-lg font-semibold mb-4">Contact</h2>
            <ul className="text-gray-400 space-y-1 sm:space-y-4 text-xs sm:text-sm">
              <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
              <li>3887123628</li>
              <li>
                <Link href="mailto:info@demo.com">info@demo.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
