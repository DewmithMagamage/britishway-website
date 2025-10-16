import React, { useState } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Olivia Green",
      image: "/images/Stu 01.png",
      rating: 5,
      text: ".. followed by some bogus content. Aenean commodo ligula egget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
      name: "Sarah Johnson",
      image: "/images/Stu 02.jpeg", 
      rating: 5,
      text: "British Way helped me gain confidence in speaking English. The teachers are amazing and the environment is very supportive."
    },
    {
      name: "Michael Chen",
      image: "/images/Stu 03.jpeg",
      rating: 5,
      text: "The courses are well-structured and practical. I've improved my English significantly since joining British Way."
    }
  ];

  return (
    <section className="py-14 sm:py-16 px-5 sm:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
        <div>
          <h2 className="text-xs sm:text-sm tracking-wide uppercase text-gray-500 mb-1 sm:mb-2">Testimonials</h2>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">What Students Say</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        
        <div className="relative">
          {/* Slider viewport */}
          <div className="overflow-hidden pb-4 px-0 max-w-md mx-auto md:max-w-none">
            {/* Slider track */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full box-border px-0 sm:px-2 flex justify-center">
                  <div className="bg-white rounded-xl p-8 sm:p-6 shadow-lg w-full max-w-md mx-4 min-h-[190px]">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
