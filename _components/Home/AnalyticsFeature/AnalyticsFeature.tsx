import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const AnalyticsFeature = () => {
  return (
    <div className="pt-10 pb-16">
      {/* Define Grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text Content */}
        <div className="p-6">
          <h1 className="text-base font-semibold text-indigo-700">
            Audience Tracking & Insights
          </h1>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            {/* Empower Learning with Data-Driven Insights & Smart Analytics */}
            Hassle-Free Booking & Payment
          </h1>
          <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
            Booking your bus seat is quick and effortless! Simply log in to the
            Student / Faculty Portal to manage your transport bookings and
            payments in just a few clicks. Whether it’s for daily commutes or
            special trips, our intuitive platform makes the process smooth and
            hassle-free.
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Extensive Route Coverage
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Convenient Online Booking
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Transparent Pricing
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Comfortable Travel Experience
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Real-Time Tracking & Notifications
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Priority Seating for Faculty & Special Needs
            </li>
          </ul>
          <button className="mt-8 px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-blue-600 transition-all duration-200 hover:text-white">
            Explore Routes &rarr;
          </button>
        </div>

        {/* Image Content */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          // data-aos-delay="100"
        >
          <Image
            src="/bus5.png"
            alt="Analytics Image"
            width={550}
            height={550}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsFeature;
