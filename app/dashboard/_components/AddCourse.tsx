"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
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

      {/* Additional Dashboard Data */}
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="p-5 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">
              📅 Book & Manage Your Trips
            </h2>
            <p className="text-gray-500">
              Reserve your seat and modify bookings anytime.
            </p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">📍 Real-Time Bus Tracking</h2>
            <p className="text-gray-500">
              Stay updated with live bus locations and arrival times.
            </p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">💳 Secure Payments</h2>
            <p className="text-gray-500">
              Easily complete transactions and view payment history.
            </p>
          </div>

          <div className="p-5 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">🎫 QR Code</h2>
            <p className="text-gray-500">
              Instantly generate a unique QR code after selecting your seat for
              easy access.
            </p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">🔔 Instant Notifications</h2>
            <p className="text-gray-500">
              Get alerts for bus schedules, route changes, and updates.
            </p>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">🛠 24/7 Support</h2>
            <p className="text-gray-500">
              Reach out for assistance anytime for a smooth commuting
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
