"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Rectangle21 from "../public/AboutUs/Rectangle21.png";
import Rectangle22 from "../public/AboutUs/Rectangle22.png";
import Rectangle23 from "../public/AboutUs/Rectangle23.png";
import Ellipse6 from "../public/AboutUs/Ellipse6.png";
import Reviewicon from "../public/AboutUs/Reviewicon.png";

function AboutUs() {
  const reviews = [
    {
      image: Rectangle22,
      title: "Best! I Got The House I Wanted Through Hounter",
      description:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Dianne Russell",
      position: "Manager Director",
      rating: 4.3,
      profileImage: Ellipse6,
    },
    {
      image: Rectangle21,
      title: "Best! I Got The House I Wanted Through Hounter",
      description:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Dianne Russell",
      position: "Manager Director",
      rating: 4.6,
      profileImage: Ellipse6,
    },
    {
      image: Rectangle23,
      title: "Through The House I Wanted Through Hounter",
      description:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "Esther Howa",
      position: "Head of Manchester",
      rating: 4.6,
      profileImage: Ellipse6,
    },
    {
      image: Rectangle22,
      title: "Fantastic Experience with Hounter",
      description:
        "Hounter made it so easy to find my dream home. Great platform to find houses quickly.",
      name: "John Doe",
      position: "Software Engineer",
      rating: 4.7,
      profileImage: Ellipse6,
    },
    {
      image: Rectangle21,
      title: "Amazing Support and Service",
      description:
        "The support team at Hounter is amazing. They helped me every step of the way in finding the right house.",
      name: "Jane Smith",
      position: "Marketing Manager",
      rating: 4.8,
      profileImage: Ellipse6,
    },
    {
      image: Rectangle23,
      title: "Found My Perfect House",
      description:
        "I found my perfect house on Hounter without any hassle. The platform is so intuitive and easy to use.",
      name: "Sarah Lee",
      position: "Designer",
      rating: 5.0,
      profileImage: Ellipse6,
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({
        left: 700 * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="w-14 border-t-2 border-orange-600 bg-orange-600 my-2" />
        <p className="text-orange-500 text-center">See Our Review</p>
        <h1 className="text-center text-3xl pt-5 pb-8">
          What Our User Say About Us
        </h1>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto md:pt-3 lg:pt-6 pb-36 space-x-4 md:space-x-6 lg:space-x-14 custom-scrollbar px-4"
        style={{
          scrollSnapType: "x mandatory",
          paddingLeft: "16px", // Initial padding to prevent first card cutoff
          paddingRight: "16px", // To prevent last card cutoff
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 flex justify-center items-center w-[300px] md:w-[400px] lg:w-[700px]"
            style={{ scrollSnapAlign: "start" }} // Ensure proper snapping
          >
            <Image
              src={review.image}
              alt=""
              className="w-[300px] md:w-[400px] lg:w-[700px] h-[200px] md:h-[300px] lg:h-[378.38px] rounded-xl"
            />
            <div className="absolute bg-white rounded-3xl shadow-lg w-[275px] top-28 md:w-[360px] lg:w-[600px] md:top-48 lg:top-64 items-center px-2 md:px-4 lg:px-10">
              <h1
                className="text-base sm:text-xl py-2
              md:py-4 lg:py-6 font-semibold font-serif"
              >
                {review.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 leading-normal">
                {review.description}
              </p>
              <div className="flex justify-between items-center py-2 md:py-4 lg:py-6">
                <div className="flex mt-2 justify-center items-center">
                  <Image src={review.profileImage} alt="" className="mr-4" />
                  <div>
                    <h2>{review.name}</h2>
                    <p className="text-gray-400 text-sm">{review.position}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Image src={Reviewicon} alt="" className="mx-4" />
                  <h1 className="text-xl font-bold">{review.rating}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <div className="flex items-center gap-4 mt-4">
          {reviews.map((_, index) => (
            <div
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2 h-2 cursor-pointer rounded-full ${
                index === 1 ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
