"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { HiQrCode } from "react-icons/hi2";

const Profile = () => {
  const { user } = useUser();

  return (
    <div>
      <div>
        <h1 className="text-blue-600 font-bold text-5xl font-serif text-center">
          Profile
        </h1>
        <div className="flex justify-around items-center py-10 mt-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-blue-600">
              User Name :{" "}
              <span className="text-black font-normal font-serif">
                {user?.username}
              </span>
            </h2>
            <h2 className="text-xl font-bold text-blue-600">
              First Name :{" "}
              <span className="text-black font-normal font-serif">
                {user?.firstName}
              </span>
            </h2>
            <h2 className="text-xl font-bold text-blue-600">
              Last Name :{" "}
              <span className="text-black font-normal font-serif">
                {user?.lastName}
              </span>
            </h2>
            <h2 className="text-xl font-bold text-blue-600">
              Mobile Number:{" "}
              <span className="text-black font-normal font-serif">
                {user?.primaryPhoneNumber?.phoneNumber}
              </span>
            </h2>
          </div>

          {/* Image Section */}
          <div>
            {user?.imageUrl ? (
              <Image
                src={user.imageUrl}
                alt="User Profile"
                width={150}
                height={150}
                className="rounded-sm"
              />
            ) : (
              <p>No profile image</p>
            )}
          </div>
        </div>
        {/* Buttons Section */}
        <div className="flex justify-around items-center py-10 mt-5">
          <Button className="bg-blue-600 p-2">
            <HiQrCode />
            My QR Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
