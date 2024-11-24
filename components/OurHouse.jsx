import React from 'react';
import Image from 'next/image';
import Shap2 from '../public/OurHouseimg/Shap2.png';
import Shape1 from '../public/OurHouseimg/Shape1.png';
import Shape3 from '../public/OurHouseimg/Shape3.png';
import Shape4 from '../public/OurHouseimg/Shape4.png';
import Ellipse6 from '../public/OurHouseimg/Ellipse6.png';
import VectorContact from '../public/OurHouseimg/VectorContact.png';
import Rectangle17 from '../public/OurHouseimg/Rectangle17.png';
import Rectangle18 from '../public/OurHouseimg/Rectangle18.png';
import Rectangle19 from '../public/OurHouseimg/Rectangle19.png';
import Rectangle20 from '../public/OurHouseimg/Rectangle20.png';
import Playicon from '../public/OurHouseimg/Playicon.png';
import colorblur1 from '../public/OurHouseimg/colorblur1.png';
import colorblur3 from '../public/OurHouseimg/colorblur3.png';
import Link from 'next/link';

function OurHouse() {
  return (
    <div className="mt-24 mb-32">
      <div className="relative top-[-300px]">
        <Image src={colorblur1} alt=" " className="absolute right-0 z-0" />
        <Image src={colorblur3} alt=" " className="absolute right-0 z-0" />
      </div>
      <div className="w-full px-4 lg:px-10 sm:flex sm:gap-20">
        <div className="w-full lg:pl-2">
          <div className="flex justify-start items-center gap-4">
            <div className="w-8 lg:w-14 border-t-2 border-orange-600 bg-orange-600" />
            <p className="text-orange-600 text-sm font-semibold">
              Ready To Sell!
            </p>
          </div>
          <div className="xl:pl-16">
            <h1 className="text-xl lg:text-3xl py-2 xl:py-4 font-semibold">
              Let's Tour And See Our House!
            </h1>
            <p className="text-sm xl:text-base pt-2 text-gray-600 xl:w-[80%]">
              Houses recommended by our partners that have been created to
              become the home of your dreams!
            </p>
            <h2 className="py-2 xl:py-6 text-gray-600 font-semibold text-lg">
              House Detail
            </h2>
            <div className="flex justify-between pb-2 xl:pb-8">
              <div className="lg:pr-10">
                <h3 className="flex justify-center items-center gap-4 pb-4 lg:pb-8">
                  <Image src={Shape1} alt="" className="" />4 Badrooms
                </h3>
                <h3 className="flex justify-center items-center gap-4">
                  <Image src={Shap2} alt="" className="" />2 Bothrooms
                </h3>
              </div>
              <div className="lg:pr-10">
                <h3 className="flex justify-center items-center gap-4 pb-2 lg:pb-8">
                  <Image src={Shape3} alt="" className="" />1 Carport
                </h3>
                <h3 className="flex justify-center items-center gap-4">
                  <Image src={Shape4} alt="" className="" />2 Floors
                </h3>
              </div>
            </div>
            <div className="w-full h-[1px] mt-2 bg-gray-400"></div>
            <div className="lg:pl-3 flex mt-4 lg:mt-10 lg:gap-2 justify-between items-center">
              <div className="flex gap-2">
                <Image src={Ellipse6} alt="" className="h-12 w-12" />
                <div className="lg:px-4">
                  <h2>Dianne Russell</h2>
                  <p className="text-gray-600">Manager Director</p>
                </div>
              </div>
              <Link href="contact">
                <button className="bg-green-500 flex rounded-full justify-center items-center text-white lg:px-4 lg:py-3 px-2 py-2">
                  <Image
                    src={VectorContact}
                    alt=""
                    className="lg:mr-4 ml-2 mx-3"
                  />{' '}
                  <span className="hidden lg:block">Contact Now</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full mt-6 lg:mt-0 xl:pr-10">
          <div className="w-full relative">
            <Image
              src={Rectangle17}
              alt=" "
              className="lg:w-full relative z-10"
            />
            <div className="absolute bottom-[-10%] left-[-5%] flex z-20 gap-2 lg:gap-8 justify-evenly w-full items-end">
              <Image src={Rectangle18} alt=" " className="" />
              <Image src={Rectangle19} alt=" " className="" />
              <Image src={Rectangle20} alt=" " className="" />
            </div>
            <Image
              src={Playicon}
              alt=" "
              className="absolute bottom-[40%] right-[40%] z-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurHouse;
