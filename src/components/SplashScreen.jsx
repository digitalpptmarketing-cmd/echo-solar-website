import React, { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // 🌈 Background Color Change (33% gap)
  const getBackgroundColor = () => {
    if (progress <= 33) return "#000000"; // Black
    if (progress <= 66) return "#ff7a00"; // Orange
    return "#83bceb"; // Blue
  };

  return (
    <div
      className="fixed inset-0 overflow-hidden flex items-center justify-center z-50 transition-all duration-700"
      style={{ backgroundColor: getBackgroundColor() }}
    >
   
     

      {/* Sun Rising */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-400"
        style={{
          bottom: `${progress * 0.9}px`,
        }}
      >
        <div className="w-32 h-32  item-center rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-600 shadow-[0_0_90px_rgba(255,170,0,0.9)]" />
      </div>
         {/* Horizon */}
 <div className="absolute bottom-0 left-0 right-0 w-full h-30 bg-[#1a1a1a]" />
      {/* Loading Text */}
      <div className="absolute bottom-16 text-white text-2xl font-light">
        {progress}%
      </div>
    </div>
  );
}
