import { Card } from "@/components/ui/card";
import React from "react";

const features = [
  {
    title: "Seat Booking & QR Code Generation",
    description:
      "Effortlessly book your seat and get a unique QR code instantly after a successful booking.",
  },
  {
    title: "Real-Time Bus Tracking",
    description:
      "Track your bus live with GPS and get estimated time of arrival (ETA) updates.",
  },
  {
    title: "Route Optimization & Scheduling",
    description:
      "View the fastest and most efficient routes along with all available buses and their schedules.",
  },
  {
    title: "Instant Notifications & Alerts",
    description:
      "Receive alerts for bus timings, delays, and route changes, along with trip reminders.",
  },
  {
    title: "User Authentication & Secure Access",
    description:
      "Login securely using Clerk authentication with role-based access for students, staff, and admins.",
  },
  // {
  //   title: "Accessibility & Dark-Themed UI",
  //   description:
  //     "Modern neon blue & electric green theme with mobile-friendly, fully responsive design.",
  // },
  {
    title: "24/7 Support & Helpdesk",
    description:
      "In-app customer support for queries, issue reporting, and instant solutions.",
  },
];

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="p-6 shadow-md rounded-xl border border-gray-200 hover:bg-blue-50 transition-all duration-200 font-serif"
        >
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-gray-600 mt-2">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default Features;
