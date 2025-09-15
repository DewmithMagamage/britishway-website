import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/images/herovideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build Your Future with Us
          </h1>
          <p className="text-xl md:text-1.5xl mb-8 text-gray-200 leading-relaxed">
            Join Sri Lanka's largest English training institute with 20+ years of excellence, 
            16 branches, and 21,000+ graduates annually. At British Way, we empower potential 
            and inspire growth.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg font-semibold flex items-center mx-auto">
            APPLY NOW
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
