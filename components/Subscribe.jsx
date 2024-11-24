import React from 'react';
import Image from 'next/image';
import Emailimg from '../public/Subscribeimg/Emailimg.png';
import bgimg from '../public/Subscribeimg/bgimg.png';
import left1 from '../public/Subscribeimg/left1.png';
import left2 from '../public/Subscribeimg/left2.png';
import left3 from '../public/Subscribeimg/left3.png';
import left4 from '../public/Subscribeimg/left4.png';
import right1 from '../public/Subscribeimg/right1.png';
import right2 from '../public/Subscribeimg/right2.png';
import right3 from '../public/Subscribeimg/right3.png';
import right4 from '../public/Subscribeimg/right4.png';

function Subscribe() {
  return (
    <div className="relative mx-2 md:ml-12 xl:ml-28 md:mr-12 my-6 flex justify-center items-center">
      <Image src={bgimg} alt="" className="z-0 h-56 sm:h-auto" />
      <Image src={left1} alt="" className="left-[5%] top-[10%] absolute" />
      <Image src={left4} alt="" className="left-[18%] top-[55%] absolute" />
      <Image src={left2} alt="" className="left-[16%] top-[10%] absolute" />
      <Image src={left3} alt="" className="left-[5%] top-[55%] absolute" />
      <Image src={right1} alt="" className="right-[20%] top-[15%] absolute" />
      <Image src={right4} alt="" className="right-[6%] top-[60%] absolute" />
      <Image src={right2} alt="" className="right-[6%] top-[15%] absolute" />
      <Image src={right3} alt="" className="right-[15%] top-[50%] absolute" />
      <div className="absolute flex flex-col justify-center items-center">
        <h1 className="xl:text-[30px] font-semibold xl:w-96 leading-normal bg-slate-600 sm:bg-transparent sm:text-black text-white p-4 sm:p-0 rounded-3xl mb-3 xl:mb-6 flex flex-col text-center">
          <span>Subscribe For More Info</span>
          <span> And Update From Hounter</span>
        </h1>
        <div className="p-1 border border-gray-300 bg-white rounded-full flex justify-between items-center xl:gap-32 xl:w-[500px]">
          <div className="gap-2 xl:gap-4 flex justify-center items-center pl-4 xl:pl-8">
            <Image src={Emailimg} alt="" className="h-4 w-4" />
            <div className="text-xs">
              <input
                type="text"
                placeholder="Your Email here"
                className="py-1 pl-1"
              />
            </div>
          </div>
          <button className="bg-green-700 text-white flex justify-center text-base p-2 items-center xl:gap-3 xl:p-3 rounded-full w-full">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
