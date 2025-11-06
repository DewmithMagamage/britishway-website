import React, { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartXRef = useRef(null);
  const touchDeltaXRef = useRef(0);
  const slideIntervalRef = useRef(null);

  const next = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    // Auto-advance slides
    slideIntervalRef.current = setInterval(next, 5000);
    return () => clearInterval(slideIntervalRef.current);
  }, []);

  const handleTouchStart = (e) => {
    clearInterval(slideIntervalRef.current);
    touchStartXRef.current = e.touches[0].clientX;
    touchDeltaXRef.current = 0;
  };

  const handleTouchMove = (e) => {
    if (touchStartXRef.current === null) return;
    touchDeltaXRef.current = e.touches[0].clientX - touchStartXRef.current;
  };

  const handleTouchEnd = () => {
    const delta = touchDeltaXRef.current;
    const threshold = 40;
    if (Math.abs(delta) > threshold) {
      if (delta < 0) next(); else prev();
    }
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
    // Restart auto-advance
    slideIntervalRef.current = setInterval(next, 5000);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };
  
  const testimonials = [
    {
      name: "Amasha Liyanage",
      image: "/images/Stuamasha.png",
      rating: 5,
      text: "Today, as an undergraduate and freelance presenter, I credit British Way English Academy for shaping my confidence, fluency, and path to success."
    },
    {
      name: "Chalani Tharuka Gamage",
      image: "/images/stuchalani.png", 
      rating: 5,
      text: "As an AI and Data Science undergraduate, British Way English Academy helped me communicate with greater fluency and confidence."
    },
    {
      name: "Michael Chen",
      image: "/images/Stu 03.jpeg",
      rating: 5,
      text: "The courses are well-structured and practical. I've improved my English significantly since joining British Way."
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h3 className="text-3xl font-bold mb-1">What Our Students Say</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Discover how British Way English Academy has transformed the lives of our students
          through quality education and dedicated support.
        </p>
      </div>

      <div className="relative">
        {/* Main slider container */}
        <div 
          className="overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-4 sm:px-6"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-xl mx-auto transform transition-transform duration-300 hover:scale-[1.02]">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-blue-100"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:block">
          <button
            onClick={prev}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={next}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => !isTransitioning && setCurrentIndex(index)}
              disabled={isTransitioning}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
