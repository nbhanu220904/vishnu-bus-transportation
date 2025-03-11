import React from "react";
// import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-xl md:text-xl font-bold flex flex-col items-center">
              <span className="text-3xl md:text-3xl lg:text-4xl text-blue-600">
                Vishnu
              </span>
              Bus Transpotation
            </h1>
            {/* Description */}
          </div>
          {/* About Us Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">About Us</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Our Mission</li>
              <li>How It Works</li>
              <li>Success Stories</li>
              <li>Careers</li>
              {/* <li>Popular Campaign</li> */}
            </ul>
          </div>
          {/* Learning & Support Links  */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Learning & Support
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Course Catalog</li>
              <li>FAQs</li>
              <li>Instructor Support</li>
              <li>Community Forum</li>
            </ul>
          </div>
          {/* Policies & Legal Links  */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Policies & Legal
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          {/* Contact Info  */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>📧 Name: Mr.Ranga Rao Orugu</li>
              <li>📞 Phone: +91 8978654259</li>
              <li>📍 Location: Bhimavaram</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
