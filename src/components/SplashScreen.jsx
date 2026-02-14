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

  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center z-50">

      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2f] via-[#183b6b] to-[#ff914d] transition-all duration-1000"></div>

      {/* Horizon */}
      <div className="absolute bottom-0 w-full h-36 bg-[#1a1a1a]"></div>

      {/* Sun */}
      <div
        className="absolute left-1/2 -translate-x-1/2 transition-all duration-300"
        style={{
          bottom: `${progress * 0.6}px`,
        }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-600 shadow-[0_0_80px_rgba(255,170,0,0.8)]"></div>
      </div>

      {/* Loading Text */}
      <div className="absolute bottom-16 text-white text-2xl tracking-widest font-light">
        {progress}%
      </div>
    </div>
  );
}
