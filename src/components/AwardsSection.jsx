import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { awards } from "../data/awards";

const AwardsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartXRef = useRef(null);
  const touchDeltaXRef = useRef(0);
  const slideIntervalRef = useRef(null);

  const next = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % awards.length);
  }, []);

  const prev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
  }, []);

  useEffect(() => {
    slideIntervalRef.current = setInterval(next, 5000);
    return () => clearInterval(slideIntervalRef.current);
  }, [next]);

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
      if (delta < 0) next();
      else prev();
    }
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
    slideIntervalRef.current = setInterval(next, 5000);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const goTo = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-gray-50">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl font-bold mb-1">Awards and Appreciations</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Milestones that reflect our commitment to world-class English education and the trust of
          students across Sri Lanka.
        </p>
      </div>

      <div className="relative">
        <div
          className="overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {awards.map((award, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4 sm:px-6">
                <article className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-2xl mx-auto text-center transform transition-transform duration-300 hover:scale-[1.02]">
                  <div className="flex justify-center mb-6">
                    <img
                      src={`/images/${award.image}`}
                      alt={award.name}
                      className="h-28 md:h-36 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    {award.name}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {award.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={prev}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous award"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next award"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="flex justify-center items-center space-x-2 mt-8">
          {awards.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              disabled={isTransitioning}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-2.5"
              }`}
              aria-label={`Go to award ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
