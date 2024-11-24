import React from 'react';
import Image from 'next/image';
import Vector_1 from '../public/Homeimg/Vector_1.png';
import Img from '../public/Homeimg/Img.png';
import Vector from '../public/Homeimg/Vector.png';
import traveloka_logo_2 from '../public/Homeimg/traveloka_logo_2.png';
import traveloka_logo_3 from '../public/Homeimg/traveloka_logo_3.png';
import traveloka_logo_4 from '../public/Homeimg/traveloka_logo_4.png';
import traveloka_logo_5 from '../public/Homeimg/traveloka_logo_5.png';
import findtheplacetext from '../public/Homeimg/findtheplacetext.png';
import ColorBlur1 from '../public/Homeimg/ColorBlur1.png';
import ColorBlur2 from '../public/Homeimg/ColorBlur2.png';
import Vector9 from '../public/Homeimg/Vector9.png';
import Vector8 from '../public/Homeimg/Vector8.png';
import Vector7 from '../public/Homeimg/Vector7.png';
import Vector6 from '../public/Homeimg/Vector6.png';
import Vector5 from '../public/Homeimg/Vector5.png';
import Vector4 from '../public/Homeimg/Vector4.png';
import Ellipse6 from '../public/Homeimg/Ellipse6.png';
import Link from 'next/link';

function Home() {
  const data = [
    {
      title: '1k+ People',
      subtitle: 'Successfully Getting Home',
      imgSrc: Ellipse6,
    },
    { title: '56 Houses', subtitle: 'Sold Monthly', imgSrc: Ellipse6 },
    {
      title: '300+ Clients',
      subtitle: 'Happy and Satisfied',
      imgSrc: Ellipse6,
    },
    { title: '150 Houses', subtitle: 'Sold in a Year', imgSrc: Ellipse6 },
    {
      title: '500+ Agents',
      subtitle: 'Involved in Transactions',
      imgSrc: Ellipse6,
    },
    { title: '2000+ Views', subtitle: 'On Our Listings', imgSrc: Ellipse6 },
    {
      title: '80+ Projects',
      subtitle: 'Completed Successfully',
      imgSrc: Ellipse6,
    },
    { title: '1000+ Offers', subtitle: 'Made This Month', imgSrc: Ellipse6 },
    { title: '120+ Cities', subtitle: 'Where We Operate', imgSrc: Ellipse6 },
    { title: '50+ Deals', subtitle: 'Closed Weekly', imgSrc: Ellipse6 },
  ];
  return (
    <div className="w-full">
      <div className="relative">
        <Image src={ColorBlur1} alt="" className="absolute z-[-10]" />
        <Image src={ColorBlur2} alt="" className="absolute z-[-10]" />
      </div>
      <div className="mx-auto flex flex-col lg:flex-row justify-center items-center w-full">
        <div className="text-start mb-6 px-4 md:px-12 flex-1 w-full">
          <Image src={findtheplacetext} alt="" className="mt-32" />
          <p className="text-gray-600 py-6 md:pr-20">
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>
          <div className="md:mt-4 p-1 border border-gray-300 rounded-full flex justify-between items-center xl:mr-24">
            <div className="md:gap-6 gap-2 flex justify-center items-center">
              <Image src={Vector_1} alt="" className="h-4 w-4 ml-1 md:ml-6" />
              <input
                type="text"
                placeholder="Search for the location you want!"
                className="text-xs md:text-sm pl-2 text-gray-600"
              />
            </div>
            <button className="bg-green-600 text-white flex justify-center items-center gap-1 md:gap-3 px-2 md:px-6 py-1 md:py-3 rounded-full">
              search
              <Image src={Vector} alt="" className="h-4" />
            </button>
          </div>
          <p className="text mt-6 text-start text-gray-600">Our Partnership</p>
          <div className="flex justify-start space-x-8">
            <Link href="/#">
              <Image src={traveloka_logo_2} alt="" className="" />
            </Link>
            <Link href="/#">
              <Image src={traveloka_logo_5} alt="" className="" />
            </Link>
            <Link href="/#">
              <Image src={traveloka_logo_3} alt="" className="" />
            </Link>
            <Link href="/#">
              <Image src={traveloka_logo_4} alt="" className="" />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center flex-1 w-full">
          <div className="relative w-full h-screen">
            <Image
              src={Img}
              alt=""
              objectFit="cover"
              className="w-full h-screen"
            />

            <Image
              src={Vector9}
              alt=""
              className="absolute top-[56%] right-[16%] z-10"
            />
            <Image
              src={Vector8}
              alt=""
              className="absolute top-[19%] left-[11%] z-20"
            />
            <Image
              src={Vector7}
              alt=""
              className="absolute top-[50%] left-[50%] z-30"
            />
            <Image
              src={Vector6}
              alt=""
              className="absolute top-[50%] left-[45%] z-40"
            />
            <Image
              src={Vector5}
              alt=""
              className="absolute top-[50%] left-[35%] z-40"
            />
            <Image
              src={Vector4}
              alt=""
              className="absolute top-[28%] right-[17%] z-60"
            />

            <div className="absolute bottom-[5%] left-[5%] w-[calc(100%-5%)] overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4 flex-nowrap">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="h-24 min-w-[240px] bg-white rounded-3xl flex justify-center items-center shadow-md"
                  >
                    {index === 0 && (
                      <>
                        <Image
                          src={item.imgSrc}
                          alt=""
                          className="absolute h-14 w-14 border-white border-2 rounded-full left-4"
                        />
                        <Image
                          src={item.imgSrc}
                          alt=""
                          className="absolute h-14 w-14 border-white border-2 rounded-full left-9 z-10"
                        />
                        <Image
                          src={item.imgSrc}
                          alt=""
                          className="absolute h-14 w-14 border-white border-2 rounded-full left-14 z-20"
                        />
                        <div className="ml-32 relative">
                          <h1 className="font-semibold">{item.title}</h1>
                          <p className="text-xs text-gray-600">
                            {item.subtitle}
                          </p>
                        </div>
                      </>
                    )}
                    {index !== 0 && (
                      <>
                        <Image
                          src={item.imgSrc}
                          alt=""
                          className="h-14 w-14 border-white border-2 rounded-full left-4"
                        />
                        <div className="ml-2 relative">
                          <h1 className="font-semibold">{item.title}</h1>
                          <p className="text-xs text-gray-600">
                            {item.subtitle}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
