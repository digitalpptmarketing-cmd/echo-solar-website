import React, { useEffect, useState } from "react";

const products = [
  { id: 1, title: "Sanitary Incinerator Machine", image: "/products/Incinerator.png" },
  { id: 2, title: "Sanitary Vending Machine", image: "/products/vend.png" },
  { id: 3, title: "Waste Collection Tricycle", image: "/products/tfg.png" },
  { id: 4, title: "Tricycle For Advertisement", image: "/products/tfa.png" },
  { id: 5, title: "E-Rickshaw For Garbage Collection", image: "/products/eriksha.png" },
  { id: 6, title: "Tricycle For Handicap", image: "/products/TFH.png" },
];

export default function ProductStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Progress calculation
  const progress = (activeIndex + 1) / products.length;
  const circumference = 2 * Math.PI * 22;
  const offset = circumference - progress * circumference;

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-20 text-gray-800">
          Our Products
        </h2>

        <div className="relative h-[460px] flex items-center justify-center">
          {products.map((product, index) => {
            const isActive = index === activeIndex;
            const isLeft =
              index === (activeIndex - 1 + products.length) % products.length;
            const isRight =
              index === (activeIndex + 1) % products.length;

            let classes = "opacity-0 scale-75";

            if (isActive) {
              classes = "z-30 scale-100 opacity-100";
            } else if (isLeft) {
              classes = "z-20 scale-90 opacity-60 -translate-x-[320px]";
            } else if (isRight) {
              classes = "z-20 scale-90 opacity-60 translate-x-[320px]";
            }

            return (
              <div
                key={product.id}
                className={`absolute transition-all duration-700 ease-in-out ${classes}`}
              >
                <div className="relative w-[720px] h-[400px] rounded-3xl bg-gradient-to-br from-white-500 to-gray-700 shadow-2xl flex items-center justify-center overflow-hidden">

                  {/* Progress Ring (ONLY ACTIVE CARD) */}
                  {isActive && (
                    <div className="absolute top-6 right-6 z-20">
                      <svg width="52" height="52">
                        <circle
                          cx="26"
                          cy="26"
                          r="22"
                          stroke="#ffffff40"
                          strokeWidth="4"
                          fill="none"
                        />
                        <circle
                          cx="26"
                          cy="26"
                          r="22"
                          stroke="#22c55e"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          strokeLinecap="round"
                          className="transition-all duration-700"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[260px] object-contain z-10"
                  />

                  {/* Title */}
                  <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-4">
                    <p className="text-xl font-semibold">
                      {product.title}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
