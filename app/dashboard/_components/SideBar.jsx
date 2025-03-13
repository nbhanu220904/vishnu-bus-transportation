"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { Progress } from "@/components/ui/progress";
import {
  HiMiniCreditCard,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlinePower,
  HiOutlineServerStack,
  HiOutlineShieldCheck,
  HiOutlineSquare3Stack3D,
  HiUserCircle,
  HiUserGroup,
} from "react-icons/hi2";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
// import { HiLogout } from "react-icons/hi";

const SideBar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <HiOutlineHomeModern />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Profile",
      icon: <HiUserCircle />,
      path: "/dashboard/profile",
    },
    {
      id: 2,
      name: "Explore Routes",
      icon: <HiOutlineServerStack />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Fee Details",
      icon: <HiMiniCreditCard />,
      path: "/dashboard/fee-details",
    },
    {
      id: 4,
      name: "Features",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/features",
    },
    {
      id: 5,
      name: "Select Seat",
      icon: <HiOutlineAdjustmentsHorizontal />,
      path: "/dashboard/select-seat",
    },
    {
      id: 6,
      name: "About Us",
      icon: <HiUserGroup />,
      path: "/dashboard/about-us",
    },
    {
      id: 7,
      name: "Contact Us",
      icon: <HiOutlinePower />,
      path: "/dashboard/contact-us",
    },
  ];

  const path = usePathname();

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-lg">
      <h1 className="text-2xl md:text-xl font-bold flex flex-col items-center">
        {/* <Image
            src="/logo2.png"
            alt="logo"
            width={200}
            height={200}
            priority
          /> */}
        <span className="text-4xl md:text-5xl lg:text-6xl text-blue-600">
          Vishnu
        </span>
        Bus Transpotation
      </h1>
      <hr className="my-6" />
      <ul className="text-lg">
        {Menu.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className={`flex items-center gap-5 text-gray-600 p-3 mt-4 cursor-pointer hover:bg-blue-50 hover:text-blue-800 rounded-lg ${
                item.path == path && "bg-blue-600 text-white"
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <h2>{item.name}</h2>
            </Link>
          </li>
        ))}
      </ul>

      {/* Progress Component */}
      <div className="absolute bottom-5 w-[80%]">
        <hr className="my-5" />
        <div className="flex justify-between">
          <UserButton />
          <Link href={"/"} className="flex justify-end items-center gap-2">
            <HiOutlinePower />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
