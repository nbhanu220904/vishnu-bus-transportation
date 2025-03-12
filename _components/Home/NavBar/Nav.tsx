"use client";
import { navLinks } from "@/constant/Constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-white shadow-md" : "fixed"
      } w-full transition-all duration-200 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[100%] xl:w-[80%] mx-auto">
        {/* Logo */}
        {/* <Image src="/logo2.png" alt="logo" width={200} height={200} priority /> */}
        <Image src={"/logo.png"} alt="logo" width={70} height={70} />
        <h1 className="text-2xl md:text-xl font-bold flex flex-col items-center">
          <span className="text-4xl md:text-5xl lg:text-6xl text-blue-600">
            Vishnu
          </span>
          Bus Transpotation
        </h1>
        {/* NavLinks */}
        {/* <div className="hidden lg:flex items-center space-x-10">{navLinks.map((link) => return <Link href={link.url} key={link.id}>
                  <p className="nav__link">{ link.label }</p></Link>)}</div> */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p
                className="relative text-base font-medium w-fit block 
                    after:block after:content-[''] after:absolute 
                    after:h-[3px] after:bg-blue-700 after:w-full 
                    after:scale-x-0 hover:after:scale-x-100 
                    after:transition after:duration-300 after:origin-right"
              >
                {link.label}
              </p>
            </Link>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Link href={"/dashboard"}>
            <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-600 hover:bg-blue-800 transition-all duration-200 rounded-full">
              Login/Register
            </button>
          </Link>
          {/* Hamburger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
