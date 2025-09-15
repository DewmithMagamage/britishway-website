import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const programmes = [
  { title: "Two Months Diploma", subtitle: "Extended English Language Training in 2 Months", img: "/images/course card.jpg" },
  { title: "Online Diploma", subtitle: "Extended English Language Training in 2 Months", img: "/images/course card.jpg" },
  { title: "Weekend Diploma", subtitle: "Extended English Language Training in 2 Months", img: "/images/course card.jpg" },
  { title: "Kid Class", subtitle: "Extended English Language Training in 2 Months", img: "/images/course card.jpg" },
  { title: "Kid Class", subtitle: "Extended English Language Training in 2 Months", img: "/images/course card.jpg" },
  { title: "Kid Class", subtitle: "Extended English Language Training in 2 Months", img: "/images/course card.jpg" },
];

const Programmes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Show 3 cards at a time
  
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
    <section className="py-20 bg-gradient-to-b from-white via-gray-400 to-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programmes</h2>
          <p className="text-lg text-gray-600">Working together to empower learning and growth.</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg border border-gray-200"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          
          <button 
            onClick={next} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg border border-gray-200"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-16">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                width: `${(programmes.length / cardsToShow) * 100}%`
              }}
            >
              {programmes.map((programme, i) => (
                <div 
                  key={i} 
                  className="min-w-[300px] flex-shrink-0 rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-80">
                    <img 
                      src={programme.img} 
                      alt={programme.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-gray-800">
                      <h3 className="text-2xl font-bold mb-2">{programme.title}</h3>
                      <p className="text-sm opacity-80 mb-4 leading-relaxed">{programme.subtitle}</p>
                      <button className="px-6 py-2 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:bg-gray-800 transition-all duration-300 text-white">
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
            This is where your dreams of perfecting your English language skills come true. British Way English Academy is the best of its kind to bring the prime standards in English Language Skills training.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The range of courses at British Way ensures customised learning opportunities for every student enrolling with us with 20+ years of experience as well as with the dynamic, professional and qualified team of lecturers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programmes;
