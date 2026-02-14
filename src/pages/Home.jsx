import React from "react";
import heroImage from "../assets/echo-solar-panel.jpeg";

export default function Home() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20">
        <div className="max-w-3xl text-white">
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Echo Solar Renewable Energy Efficient Solar Pumping Solutions
          </h1>

          <p className="text-lg md:text-xl opacity-90">
            Innovating for Tomorrow, Delivering Excellence Today
          </p>

        </div>
      </div>

      {/* Right Side Vertical Button */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="bg-blue-600 text-white px-4 py-10 rounded-l-2xl rotate-180 [writing-mode:vertical-rl] cursor-pointer hover:bg-blue-700 transition">
          Intra Services
        </div>
      </div>
    </div>
  );
}
