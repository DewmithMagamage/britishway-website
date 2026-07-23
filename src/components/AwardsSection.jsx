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
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % awards.length);
  }, [isTransitioning]);

  const prev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
  }, [isTransitioning]);

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
    <section className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="flex flex-col justify-center text-left md:pr-4 lg:pr-8">
          <h2 className="text-4xl md:text-4xl font-bold mb-3 leading-tight">
            Awards and Appreciations
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
            Milestones that reflect our commitment to world-class English education and the trust
            of students across Sri Lanka.
          </p>
        </div>

        <div className="flex flex-col justify-center w-full min-w-0">
          <div className="relative px-9 sm:px-10">
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
                  <div key={index} className="w-full flex-shrink-0 flex justify-center">
                    <article className="w-full max-w-[17rem] sm:max-w-[18rem] bg-white rounded-xl shadow-md border border-gray-100 p-4 md:p-5 text-center">
                      <div className="flex justify-center mb-3">
                        <img
                          src={`/images/${award.image}`}
                          alt={award.name}
                          className="h-30 md:h-40 w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
                        {award.name}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed min-h-[2.75rem]">
                        {award.description}
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={prev}
              disabled={isTransitioning}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md border border-gray-100 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous award"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={isTransitioning}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md border border-gray-100 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next award"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <div className="flex justify-center items-center gap-2 mt-4">
            {awards.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                disabled={isTransitioning}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
                aria-label={`Go to award ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
