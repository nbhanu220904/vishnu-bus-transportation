"use client";
// import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
// import Link from "next/link";
import React from "react";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl">
            Hello,{" "}
            <span className="font-bold text-blue-700">{user?.fullName}</span>
          </h1>
          <p className="text-md text-gray-500">
            Welcome to the VITB Bus Facility Dashboard
          </p>
        </div>
        {/* <Link href={"/explore-routes"}>
          <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 cursor-pointer px-8">
            Explore Routes
          </Button>
        </Link> */}
      </div>
      <div className="flex justify-between items-center mt-10">
        {/* Heading and Description */}
        <div>
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-4xl md:text-6xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]"
          >
            Welcome to Vishnu Bus Transportation
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
        </div>
        {/* Home Page Image */}
        <Image
          className="rounded-2xl"
          src={"/vishnucollege.jpg"}
          alt="vishnu college"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Dashboard;
