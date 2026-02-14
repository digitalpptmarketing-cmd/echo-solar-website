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
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-50">
      
      {/* Sun Loader */}
      <div className="relative w-32 h-32 mb-8">

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-400 rounded-full"></div>

        <div className="absolute bottom-0 w-full h-2 bg-orange-600"></div>

      </div>

      <h2 className="text-2xl font-semibold">{progress}%</h2>

    </div>
  );
}
