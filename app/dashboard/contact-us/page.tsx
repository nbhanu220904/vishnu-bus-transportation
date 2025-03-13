// import Footer from "@/_components/Home/Footer/Footer";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="m-0 w-[100%]">
      <div className="flex flex-col justify-center items-center mx-5 my-3 px-5 py-2.5">
        <h1 className="text-5xl text-blue-600 font-semibold">Contact Us</h1>
        <div className="flex justify-between items-center">
          {/* Contact Details */}
          <div className="flex flex-col p-2 gap-2">
            <h1 className="text-3xl text-blue-700 font-semibold underline font-serif">
              Staff Coordinator
            </h1>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-serif">
                {" "}
                <span className="font-bold">Name : </span>Mr.Ranga Rao Orugu
              </p>
              <p className="text-xl font-serif">
                {" "}
                <span className="font-bold">Mobile No : </span>+91 8978654259
              </p>
              <p className="text-xl font-serif">
                {" "}
                <span className="font-bold">Location : </span>Vishnu Institute
                Of Technology
              </p>
            </div>
            {/* <ul className="mt-5 flex flex-col gap-3">
              <li className="font-5xl"></li>
              <li></li>
              <li></li>
            </ul> */}
          </div>

          {/* Image Section */}
          {/* <div> */}
          <Image
            className="ml-20"
            src={"/bus1.png"}
            alt="bus logo"
            width={500}
            height={300}
          />
          {/* </div> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
