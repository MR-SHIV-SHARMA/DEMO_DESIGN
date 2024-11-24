'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Ellipse6 from '../public/Featuredimg/Ellipse6.png';
import Vectorh from '../public/Featuredimg/Vectorh.png';
import Vectorv from '../public/Featuredimg/Vectorv.png';
import Vectora from '../public/Featuredimg/Vectora.png';
import Vectorl from '../public/Featuredimg/Vectorl.png';
import Vector from '../public/Featuredimg/Vector.png';
import Imghome from '../public/Featuredimg/Imghome.png';
import Imghome2 from '../public/Featuredimg/Imghome2.png';
import Imghome3 from '../public/Featuredimg/Imghome3.png';

const cardData = [
  {
    image: Imghome,
    title: 'Roselands House',
    price: '$ 30,00,000.00',
    owner: 'Dianne Russell',
    location: 'Manchester, Kentucky',
  },
  {
    image: Imghome2,
    title: 'Palm Harbor',
    price: '$ 45,00,000.00',
    owner: 'Theresa Webb',
    location: 'California, USA',
  },
  {
    image: Imghome3,
    title: 'Beverly Springfield',
    price: '$ 50,00,000.00',
    owner: 'Eleanor Pena',
    location: 'Las Vegas, Nevada',
  },
  {
    image: Imghome,
    title: 'Brentwood Villa',
    price: '$ 25,00,000.00',
    owner: 'Courtney Henry',
    location: 'Miami, Florida',
  },
  {
    image: Imghome2,
    title: 'Palm Harbor',
    price: '$ 45,00,000.00',
    owner: 'Theresa Webb',
    location: 'California, USA',
  },
  {
    image: Imghome3,
    title: 'Beverly Springfield',
    price: '$ 50,00,000.00',
    owner: 'Eleanor Pena',
    location: 'Las Vegas, Nevada',
  },
  // Repeat or add more items up to 20 if needed.
];

function FeaturedHouse() {
  const [activeButton, setActiveButton] = useState('home');
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % cardData.length);
  };

  const handlePrevious = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + cardData.length) % cardData.length
    );
  };

  return (
    <div className="px-4 sm:pl-12 mt-20">
      {/* Recommendation Title Section */}
      <div className="flex justify-start items-center gap-2 sm:gap-4">
        <div className="w-8 sm:w-14 border-t-2 border-orange-600 bg-orange-600" />
        <p className="text-orange-600 text-sm">Our Recommendation</p>
      </div>

      {/* Featured House Header */}
      <div className="sm:flex justify-between items-center lg:px-16 sm:mb-6 sm:pt-4">
        <h1 className="text-xl lg:text-2xl pb-4 sm:p-0">Featured House</h1>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 lg:gap-8">
          {['home', 'villa', 'apartment'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveButton(category)}
              className={`${
                activeButton === category
                  ? 'bg-green-300 border-green-600'
                  : 'border-gray-600'
              } text-gray-600 px-3 lg:px-6 py-1 lg:py-3 rounded-full flex justify-center items-center gap-2 border-[1px]`}
            >
              <Image
                src={
                  category === 'home'
                    ? Vectorh
                    : category === 'villa'
                      ? Vectorv
                      : Vectora
                }
                alt={`${category} Icon`}
              />
              {category}
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="hidden sm:block">
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrevious}
              className="bg-gray-400 text-white flex justify-center items-center gap-3 py-2 lg:py-4 px-4 lg:px-6 rounded-full"
            >
              <Image src={Vectorl} alt="Left Arrow" className="h-4" />
            </button>
            <button
              onClick={handleNext}
              className="bg-green-500 text-white flex justify-center items-center gap-3 py-2 lg:py-4 px-4 lg:px-6 rounded-full"
            >
              <Image src={Vector} alt="Right Arrow" className="h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Houses Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:pl-16 ">
        {cardData
          .slice(startIndex, startIndex + itemsPerPage)
          .map((card, index) => (
            <div
              key={index}
              className="transition-transform duration-500 transform w-full"
            >
              <div className="p-4 lg:p-0 bg-white shadow-md rounded-lg">
                <Image
                  src={card.image}
                  alt="Featured House"
                  className="w-full h-64 sm:h-96 object-cover rounded-lg"
                />
                <h1 className="mt-4 text-lg font-semibold">{card.title}</h1>
                <h3 className="text-sm text-gray-500">{card.price}</h3>
                <div className="flex mt-4 lg:pb-2 gap-2 items-center">
                  <Image
                    src={Ellipse6}
                    alt="Profile"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h2 className="text-sm font-medium">{card.owner}</h2>
                    <p className="text-xs text-gray-400">{card.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FeaturedHouse;
