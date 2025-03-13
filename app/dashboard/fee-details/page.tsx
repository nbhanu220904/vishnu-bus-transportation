import React from "react";

const busData = [
  { id: 1, routeNumber: "1", busRoutes: "NARSAPURAM", annualBusFee: "30000/-" },
  { id: 2, routeNumber: "1", busRoutes: "PALAKOLLU", annualBusFee: "27000/-" },
  {
    id: 3,
    routeNumber: "1",
    busRoutes: "VEERAVASARAM",
    annualBusFee: "22000/-",
  },
  { id: 4, routeNumber: "2", busRoutes: "NARSAPURAM", annualBusFee: "29000/-" },
  { id: 5, routeNumber: "2", busRoutes: "MOGALTUR", annualBusFee: "27000/-" },
  { id: 6, routeNumber: "2", busRoutes: "KALIPATNAM", annualBusFee: "25000/-" },
  {
    id: 7,
    routeNumber: "2",
    busRoutes: "GOLLAVANITIPPA",
    annualBusFee: "22000/-",
  },
  { id: 8, routeNumber: "3", busRoutes: "KIKALURU", annualBusFee: "28000/-" },
  { id: 9, routeNumber: "3", busRoutes: "AKIVEEDU", annualBusFee: "25000/-" },
  { id: 10, routeNumber: "3", busRoutes: "UNDI", annualBusFee: "22000/-" },
  {
    id: 11,
    routeNumber: "4",
    busRoutes: "NARAYANAPURAM",
    annualBusFee: "30000/-",
  },
  {
    id: 12,
    routeNumber: "4",
    busRoutes: "GANAPAVARAM",
    annualBusFee: "26000/-",
  },
  { id: 13, routeNumber: "4", busRoutes: "UNDI", annualBusFee: "22000/-" },
  {
    id: 14,
    routeNumber: "5",
    busRoutes: "TADEPALLIGUDEM",
    annualBusFee: "22000/-",
  },
  { id: 15, routeNumber: "5", busRoutes: "PIPPARA", annualBusFee: "22000/-" },
  {
    id: 16,
    routeNumber: "5",
    busRoutes: "GARAGAPARRU",
    annualBusFee: "22000/-",
  },
  { id: 17, routeNumber: "6", busRoutes: "TANUKU", annualBusFee: "22000/-" },
  { id: 18, routeNumber: "6", busRoutes: "ATHILI", annualBusFee: "22000/-" },
  { id: 19, routeNumber: "6", busRoutes: "KORUKOLLU", annualBusFee: "22000/-" },
  { id: 20, routeNumber: "7", busRoutes: "PENUGONDA", annualBusFee: "22000/-" },
  {
    id: 21,
    routeNumber: "7",
    busRoutes: "PENUMANTRA",
    annualBusFee: "22000/-",
  },
  { id: 22, routeNumber: "7", busRoutes: "NAVUDURU", annualBusFee: "22000/-" },
  {
    id: 23,
    routeNumber: "7",
    busRoutes: "VEERAVASARAM",
    annualBusFee: "22000/-",
  },
];

const FeeDetails = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Bus Fee Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 border">Bus Number</th>
              <th className="py-2 px-4 border">Bus Routes</th>
              <th className="py-2 px-4 border">Annual Bus Fee</th>
            </tr>
          </thead>
          <tbody>
            {busData.map((bus, index) => (
              <tr
                key={`${bus.id}-${index}`}
                className="hover:bg-gray-100 text-center"
              >
                <td className="py-2 px-4 border">{bus.routeNumber}</td>
                <td className="py-2 px-4 border">{bus.busRoutes}</td>
                <td className="py-2 px-4 border">{bus.annualBusFee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeDetails;
