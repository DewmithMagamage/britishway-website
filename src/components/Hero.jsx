import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const texts = [
    'Build Your Future with Us',
    'Learn English with Experts',
    'Achieve Your Dreams with Us'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setTextIndex((current) => (current + 1) % texts.length);
        setIsVisible(true);
      }, 1000); // Wait for fade out before changing text
    }, 4000); // Total time for each text (3s visible + 1s transition)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/images/herobg.MP4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-end z-10">
        <div className="text-white max-w-xl p-8 mb-16 ml-16 overflow-hidden">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-left">
            <div className="min-h-[40px] md:min-h-[44px]">
              <span 
                className={`inline-block transition-opacity duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {texts[textIndex]}
              </span>
            </div>
          </h1>
          <p className="text-base md:text-lg mb-6 text-gray-200 leading-relaxed text-left max-w-lg">
            Join Sri Lanka's largest English training institute with 20+ years of excellence. 
            At British Way, we empower potential and inspire growth.
          </p>
          <button className="group relative px-6 py-3 bg-blue-600 text-white rounded-lg shadow-xl 
            transition-all duration-300 ease-in-out text-sm font-semibold flex items-center
            hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 border-2 border-transparent
            hover:border-blue-500 animate-borderPulse">
            APPLY NOW
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
