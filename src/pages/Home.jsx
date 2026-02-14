import React from "react";
import heroImage from "../assets/echo-solar-panel.jpeg";
import aboutBg from "../assets/about-bg.jpg";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
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

        {/* Right Vertical Button */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="bg-blue-600 text-white px-4 py-10 rounded-l-2xl rotate-180 [writing-mode:vertical-rl] cursor-pointer hover:bg-blue-700 transition">
            Intra Services
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="w-full py-20 bg-gray-100 flex justify-center">
        
        <div className="relative w-[90%] max-w-6xl h-[420px] rounded-3xl overflow-hidden shadow-xl">

          {/* Background Image */}
          <img
            src={aboutBg}
            alt="About Echo Solar"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* White Text Card (Left Bottom) */}
          <div className="absolute bottom-8 left-8  backdrop-blur-md p-8 rounded-2xl max-w-md shadow-lg">

            <h2 className="text-3xl font-bold text-white-900 mb-4">
              About Echo Solar
            </h2>

            <p className="text-white-600 leading-relaxed mb-5">
              Echo Solar is committed to delivering high-quality renewable
              energy solutions that empower communities and industries. Our
              solar pumping systems are designed to provide sustainable,
              reliable, and efficient energy while reducing environmental
              impact.
            </p>

            {/* Read More Button */}
            <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
              Read More
            </button>

          </div>

        </div>

      </section>
      {/* Why Choose Section */}
<section className="w-full py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
      Why Choose Shakti Pumps for Water Management?
    </h2>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
        <div className="text-blue-500 text-4xl mb-4">☀️</div>
        <h3 className="text-xl font-semibold mb-2">
          Pioneers in Solar Pumping
        </h3>
        <p className="text-gray-600">
          Leading the future of sustainable irrigation and water solutions.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
        <div className="text-blue-500 text-4xl mb-4">⚡</div>
        <h3 className="text-xl font-semibold mb-2">
          Energy-Efficient and Cost-Effective
        </h3>
        <p className="text-gray-600">
          Advanced motor technology reduces operational costs.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
        <div className="text-blue-500 text-4xl mb-4">🌍</div>
        <h3 className="text-xl font-semibold mb-2">
          Global Presence
        </h3>
        <p className="text-gray-600">
         our vision to capture all the major countries  in the world
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
        <div className="text-blue-500 text-4xl mb-4">⚙️</div>
        <h3 className="text-xl font-semibold mb-2">
          Innovative R&D
        </h3>
        <p className="text-gray-600">
          Constantly advancing to fulfill modern water management requirements.
        </p>
      </div>

    </div>
  </div>
</section>


    </div>
  );
}
