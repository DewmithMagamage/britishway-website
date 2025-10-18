import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const programmes = [
  { title: "Two-Month Diploma", subtitle: "Gives You All the Essentials in Learning English and More.", img: "/images/Weekday Diploma copy.jpg" },
  { title: "50 Day Camp", subtitle: "An Outstanding English Knowledge in a Residential Background.", img: "/images/50 Day Residential camp.jpg" },
  { title: "Diploma (Weekend-Based)", subtitle: "Turn your weekends into stepping stones for success.", img: "/images/Weekend Diploma.jpg" },
  { title: "English Classes for Kids", subtitle: "Engaging English Lessons Designed Just for Your Child .", img: "/images/Kids Class.jpg" },
  { title: "IT+English Diploma", subtitle: "Expand your IT Knowledge with English.", img: "/images/IT+English.jpg" },
  { title: "Online Diploma", subtitle: "Master English Anytime, Anywhere.", img: "/images/Online Diploma copy.jpg" },
];

const Programmes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // responsive: 1 (mobile), 2 (tablet), 3 (desktop)
  const CARD_WIDTH = 350;
  const CARD_HEIGHT = 400;
  const CARD_GAP = 24; // Tailwind gap-6

  // Determine cards to show based on viewport width
  useEffect(() => {
    const computeCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) return 1; // mobile
      if (width < 1024) return 2; // tablet
      return 3; // desktop
    };

    const update = () => setCardsToShow(computeCardsToShow());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Clamp index when cardsToShow changes
  useEffect(() => {
    if (currentIndex > Math.max(0, programmes.length - cardsToShow)) {
      setCurrentIndex(0);
    }
  }, [cardsToShow, currentIndex]);
  
  const next = () => {
    setCurrentIndex((prev) => 
      prev + cardsToShow >= programmes.length ? 0 : prev + 1
    );
  };
  
  const prev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? programmes.length - cardsToShow : prev - 1
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-1">What We Offer</h2>
          <p className="text-lg text-gray-600">A range of courses that can meet your educational needs.</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg border border-gray-200"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          
          <button 
            onClick={next} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg border border-gray-200"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-6 sm:px-10 lg:px-16">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (CARD_WIDTH + CARD_GAP)}px)` }}
            >
              {programmes.map((programme, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 rounded-2xl shadow-xl overflow-hidden group cursor-pointer bg-white"
                  style={{ width: `${CARD_WIDTH}px` }}
                >
                  <div className="relative" style={{ height: `${CARD_HEIGHT}px` }}>
                    <img 
                      src={programme.img} 
                      alt={programme.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/30 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-gray-800">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{programme.title}</h3>
                      <p className="text-xs sm:text-sm opacity-80 mb-3 sm:mb-4 leading-relaxed">{programme.subtitle}</p>
                      <button className="px-4 sm:px-6 py-1.5 sm:py-2 text-sm bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:bg-gray-800 transition-all duration-300 text-white">
                        More Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Join us to make your dream of mastering English language a reality! We provide some of the most academically updated and enhanced English courses, tailoring to a wide scope of audience.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
          As long as you have the will to learn, we have the will to show you the way. Our way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programmes;
