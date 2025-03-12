import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-blue-600">
        Vishnu Bus Transportation
      </h1>
      <div className="mt-5 flex justify-between items-center">
        <div className="flex flex-col w-[450px]">
          <h1 className="text-3xl text-blue-700 font-semibold font-serif mb-5">
            Contact Us
          </h1>
          <div className="">
            <h1>Name: Mr.Ranga Rao Orugu</h1>
            <p>Phone: +91 8978654259</p>
            <p>
              Address: Vishnu Institute Of Technology(VITB), Kovvada,
              Bhimavaram, 534202
            </p>
          </div>
        </div>
        <div>
          <Image src={"/bus1.png"} alt="bus image" width={600} height={400} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
