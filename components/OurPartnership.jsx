import React from "react";
import Image from "next/image";
import Vectorclock from "../public/OurPartnershipimg/Vectorclock.png";
import Ellipse6 from "../public/OurPartnershipimg/Ellipse6.png";
// import Ellipse7 from "../public/OurPartnershipimg/Ellipse7.png";
// import Ellipse8 from "../public/OurPartnershipimg/Ellipse8.png";
// import Ellipse9 from "../public/OurPartnershipimg/Ellipse9.png";
import Leftimg1 from "../public/OurPartnershipimg/Leftimg1.png";
import Leftimg2 from "../public/OurPartnershipimg/Leftimg2.png";
import Leftimg3 from "../public/OurPartnershipimg/Leftimg3.png";
import Rightimg from "../public/OurPartnershipimg/Rightimg.png";
import colorblur2 from "../public/OurPartnershipimg/colorblur2.png";
import Link from "next/link";

function OurPartnership() {
  return (
    <div className="w-full mt-20 mb-16">
      <div className="relative top-[-220px] -z-40">
        <Image src={colorblur2} alt=" " className="absolute left-0 z-0" />
        <Image src={colorblur2} alt=" " className="absolute left-0 z-0" />
      </div>
      <div className="flex  flex-col justify-center items-center mb-10">
        <div className="w-10 border-t-2 border-orange-600 bg-orange-600 my-2" />
        <p className="text-orange-500 text-center text-xs md:text-sm">
          See Tips And Trick From Our Partnership
        </p>
        <h1 className="text-center md:text-3xl md:pt-5 md:pb-8 pt-3 pb-4 font-bold">
          <span className="block">Find Out More About</span>
          <span className="block">Selling And Buying Homes</span>
        </h1>
        <Link href="article">
          <button className="bg-green-700 text-white flex justify-center items-center gap-3 md:p-3 px-3 py-1 rounded-full">
            More Article
          </button>
        </Link>
      </div>
      <div className="flex flex-col xl:flex-row lg:pl-[73px]">
        <div className="xl:order-2 order-1 xl:pr-12 pb-4 px-4 xl:px-0">
          <Image
            src={Rightimg}
            alt=" "
            className="h-80 w-full lg:w-[700px] rounded-2xl"
          />
          <div>
            <div className="flex mt-6 gap-2 justify-start items-center">
              <Image src={Ellipse6} alt="" />
              <h2>Cameron Williamson</h2>
            </div>
            <h1 className="text-2xl py-4 font-semibold leading-relaxed">
              12 Things To Know Before Buying A House
            </h1>
            <p className="pb-4 text-gray-500 text-sm">
              Want to buy a house but are unsure about what we should know, here
              I will try to explain what we should know and check when we want
              to buy a house
            </p>
            <div className="flex justify-start items-center">
              <Image src={Vectorclock} alt="" className="mr-2" />
              <div className="text-sm text-gray-500">8 min read |</div>
              <div className="pl-1 text-sm text-gray-500">25 apr 2021</div>
            </div>
          </div>
        </div>

        {/* Left side content */}
        <div className="w-full xl:order-1 order-2">
          <div className="sm:flex px-4 xl:px-10">
            <Image
              src={Leftimg1}
              alt=" "
              className="w-full sm:w-auto lg:h-36 rounded-2xl"
            />
            <div className="sm:pl-7 pt-2 sm:pt-0">
              <div className="flex gap-2 justify-start items-center">
                <Image src={Ellipse6} alt="" className="h-8 w-8 mr-2" />
                <h2 className="text-sm text-gray-500">Dianne Russell</h2>
              </div>
              <h1 className="text-base py-4 font-semibold leading-relaxed">
                The Things We Need To Check When We Want To Buy A House
              </h1>
              <div className="flex justify-start items-center">
                <Image src={Vectorclock} alt="" className="mr-2" />
                <div className="text-sm text-gray-500">4 min read |</div>
                <div className="pl-1 text-sm text-gray-500">25 apr 2021</div>
              </div>
            </div>
          </div>
          <div className="sm:flex px-4 xl:px-10 py-4 xl:py-14">
            <Image
              src={Leftimg2}
              alt=" "
              className="w-full sm:w-auto lg:h-36 rounded-2xl"
            />
            <div className="sm:pl-7 pt-2 sm:pt-0">
              <div className="flex gap-2 justify-start items-center">
                <Image src={Ellipse6} alt="" className="h-8 w-8 mr-2" />
                <h2 className="text-sm text-gray-500">Courtney Henry</h2>
              </div>
              <h1 className="text-base py-4 font-semibold leading-relaxed">
                7 Ways To Distinguish The Quality Of The House We Want To Buy
              </h1>
              <div className="flex justify-start items-center">
                <Image src={Vectorclock} alt="" className="mr-2" />
                <div className="text-sm text-gray-500">6 min read |</div>
                <div className="pl-1 text-sm text-gray-500">24 apr 2021</div>
              </div>
            </div>
          </div>
          <div className="sm:flex px-4 xl:px-10">
            <Image
              src={Leftimg3}
              alt=" "
              className="w-full sm:w-auto lg:h-36 rounded-2xl"
            />
            <div className="sm:pl-7 pt-2 sm:pt-0">
              <div className="flex gap-2 justify-start items-center">
                <Image src={Ellipse6} alt="" className="h-8 w-8 mr-2" />
                <h2 className="text-sm text-gray-500">Darlene Robertson</h2>
              </div>
              <h1 className="text-base py-4 font-semibold leading-relaxed">
                The Best Way To Know The Quality Of The House We Want To Buy
              </h1>
              <div className="flex justify-start items-center">
                <Image src={Vectorclock} alt="" className="mr-2" />
                <div className="text-sm text-gray-500">2 min read |</div>
                <div className="pl-1 text-sm text-gray-500">24 apr 2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPartnership;
