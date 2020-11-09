import React from "react";
import Calc from "../components/CalcSimple/Calc";

const Homepage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-l from-green-300 to-blue-300">
      <div className="container sm:w-full md:w-full lg:w-1/4 xl:w-1/4 sm:h-screen md:h-auto xl:h-auto">
        <Calc />
      </div>
    </div>
  );
};

export default Homepage;
