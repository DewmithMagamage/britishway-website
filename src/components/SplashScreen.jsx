import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 20, 100));
      } else {
        onFinish();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [progress, onFinish]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Logo Container */}
      <div className="w-64 h-64 mb-8 relative">
        <img 
          src="/images/logo.png"
          alt="British Way English Academy"
          className="w-full h-full object-contain animate-zoomIn"
        />
      </div>

      {/* Loading Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;