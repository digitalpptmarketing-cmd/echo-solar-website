import React from "react";

export default function Product () {
  return (
    <div className="w-full bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-20 px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Solar Pump Trolley
        </h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Smart, Portable & Cost-Saving Solar Irrigation Solution
        </p>
      </section>


      {/* PRODUCT INTRO */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE SPACE */}
        <div className="w-full h-[350px] bg-gray-300 rounded-2xl flex items-center justify-center">
          <p className="text-gray-600">Product Image Here</p>
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our Solar Pump Trolley is an advanced portable solar system designed
            to operate agricultural water pumps using direct sunlight. Built for
            modern farmers, it provides reliable irrigation while eliminating
            fuel and electricity costs.
          </p>
        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-10">


          {/* Feature 1 */}
          <FeatureCard
            title="Powerful Solar Pump Operation"
            desc="Runs water pumps ranging from 3 HP to 10 HP directly on solar energy, delivering strong and stable irrigation performance."
          />


          {/* Feature 2 */}
          <FeatureCard
            title="Zero Fuel. Zero Electricity Bill."
            desc="Operates completely on solar power, eliminating diesel and grid electricity dependency and reducing operational costs."
          />


          {/* Feature 3 */}
          <FeatureCard
            title="Fully Portable & Field Ready"
            desc="Easily movable using tractor. Perfect for multiple farm locations and remote areas without electricity."
          />


          {/* Feature 4 */}
          <FeatureCard
            title="Strong & Durable Structure"
            desc="Built with heavy-duty wind resistant frame ensuring stability and long service life."
          />


          {/* Feature 5 */}
          <FeatureCard
            title="Adjustable Solar Panels"
            desc="Panels can be adjusted for maximum sunlight exposure, improving efficiency and energy output."
          />


          {/* Feature 6 */}
          <FeatureCard
            title="Smart Monitoring & Security"
            desc="Live GPS tracking, theft alert notifications, and built-in security camera for 24/7 monitoring."
          />


        </div>
      </section>


      {/* BENEFITS SECTION */}
      <section className="bg-white py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">

        {/* CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Low Maintenance & Eco Friendly
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The Solar Pump Trolley requires minimal maintenance and operates
            silently without pollution. It supports sustainable agriculture and
            helps farmers reduce fuel expenses.
          </p>
        </div>

        {/* IMAGE SPACE */}
        <div className="w-full h-[300px] bg-gray-300 rounded-2xl flex items-center justify-center">
          <p className="text-gray-600">Benefits Image Here</p>
        </div>

      </section>


      {/* IDEAL FOR SECTION */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Ideal For
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <IdealCard text="Agricultural Irrigation" />
          <IdealCard text="Farms Without Electricity" />
          <IdealCard text="Multi-Location Farming" />
          <IdealCard text="Remote Rural Areas" />

        </div>
      </section>

    </div>
  );
}


/* FEATURE CARD COMPONENT */
function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}


/* IDEAL CARD COMPONENT */
function IdealCard({ text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="font-semibold">{text}</p>
    </div>
  );
}
