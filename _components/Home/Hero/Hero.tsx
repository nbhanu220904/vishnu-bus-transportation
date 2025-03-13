import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            {/* Top Box */}
            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white">
              <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-600 md:text-base sm:text-sm text-xs text-white">
                News
              </div>
              <p className="text-xs sm:text-sm">
                We have updated our Term&apos;s and Condition&apos;s Policy
              </p>
            </div>
            {/* Hero Section */}
            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl md:text-6xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]"
            >
              Welcome to VITB Bus Facility
            </h1>
            {/* Description */}
            <p className="text-gray-700">
              At VITB, we are dedicated to providing students and faculty with a
              seamless and efficient transportation experience. Our well-managed
              bus service ensures that your commute to and from campus is safe,
              comfortable, and reliable.
              {/* Stay ahead in the ever-evolving tech landscape by exploring the
              latest technologies and industry trends. Our expertly curated free
              and premium courses are designed to equip you with in-demand
              skills, enhance your problem-solving abilities, and accelerate
              your career growth. Whether you're a beginner or an experienced
              professional, our platform provides the perfect environment to
              learn, innovate, and succeed in the world of software development. */}
            </p>
            {/* Play Store and App Store Images */}
            <div className="flex mt-8 mb-8 items-center space-x-4">
              {/* Google PlayStore */}
              {/* <Image
                src="/gp.png"
                alt="Google Play Store"
                width={150}
                height={150}
                className="object-contain"
              /> */}
              {/* App Store */}
              {/* <Image
                src="/as.png"
                alt="App Store"
                width={150}
                height={150}
                className="object-contain"
              /> */}
            </div>
            <div className="flex justify-center">
              <Link href={"/dashboard"}>
                <button className="md:px-8 md:py-2.5 px-10 py-2 text-white font-semibold text-base bg-blue-600 hover:bg-blue-800 transition-all duration-200 rounded-full cursor-pointer">
                  Get Started &#8594;
                </button>
              </Link>
            </div>
          </div>
          {/* Image Content */}
          <div className="hidden lg:block">
            <Image
              data-aos="fade-up"
              data-aos-delay="200"
              src="/bus1.png" // Correct path (No need for /public)
              alt="Hero Image"
              width={800}
              height={800}
              priority // Optimizes loading
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
