import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-md bg-white px-7 py-5">
      <Image src="/vishnu.png" alt="logo" width={250} height={200} />
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
