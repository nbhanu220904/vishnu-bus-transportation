import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Why Choose VITB Bus Services?
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/i1.png"
            title="Extensive Route Coverage"
            description="Our buses cover all major areas, ensuring easy and direct access to campus for students and staff."
            linkText="Get Started"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <WhyChooseCard
            image="/i2.png"
            title="Convenient Online Booking"
            description="Reserve your seat anytime, anywhere with our digital booking system. No more long queues or last-minute uncertainty!"
            linkText="Sign Up for Free"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <WhyChooseCard
            image="/i3.png"
            title="Transparent Pricing"
            description="The bus fee is set at ₹30,000/-. Please note that this fee is non-refundable and non-adjustable under any circumstances, ensuring complete transparency."
            linkText="Get The App"
          />
        </div>
        {/* <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/i4.png"
            title="24/7 Customer Support"
            description="Get expert assistance anytime, anywhere with our dedicated support team, ready to help you overcome any learning challenges."
            linkText="Learn More"
          />
        </div> */}
      </div>
    </div>
  );
};

export default WhyChoose;
