import React, { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onFinish(), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-50">

      {/* SKY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020024] via-[#090979] to-[#ff7e00] transition-all duration-1000"></div>

      {/* HORIZON */}
      <div className="absolute bottom-0 w-full h-32 bg-[#2c2c2c]"></div>

      {/* SUN */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: `${progress * 0.5}px`, // sun rises with percentage
        }}
      >
        {/* Glow */}
        <div className="absolute w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-70"></div>

        {/* Sun core */}
        <div className="relative w-28 h-28 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full shadow-[0_0_60px_rgba(255,200,0,0.9)]"></div>

        {/* Rays */}
        <div className="absolute inset-0 animate-spin-slow">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-16 bg-yellow-300 opacity-60 left-1/2 top-1/2 origin-bottom"
              style={{
                transform: `rotate(${i * 45}deg) translateX(-50%)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* LOADING TEXT */}
      <div className="absolute bottom-20 text-white text-2xl font-semibold">
        Loading {progress}%
      </div>
    </div>
  );
}
