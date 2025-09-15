import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

const News = () => {
  return (
    <section className="py-16 px-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-sm tracking-wide uppercase text-gray-500 mb-2">Latest</h2>
          <h3 className="text-3xl font-bold">News</h3>
        </div>
        <button className="flex items-center text-blue-600 hover:text-blue-700">
          <span className="mr-2">View All</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="order-1 md:order-1">
          <img 
            src="/images/course card.jpg" 
            alt="Convocation Ceremony 2025"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
        
        <div className="order-2 md:order-2">
          <div className="flex items-center mb-4">
            <Calendar className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-sm text-gray-500 font-medium">21ST JULY</span>
          </div>
          <h4 className="text-xl font-bold mb-4">CONVOCATION CEREMONY 2025</h4>
          <p className="text-gray-600 mb-6 leading-relaxed">
            On July 21st, 2025, British Way English Academy proudly celebrated its Convocation Ceremony 
            at the BMICH, honoring the achievements of our latest batch of graduates. Surrounded by family, 
            friends, and distinguished guests, the event was a testament to our commitment to empowering 
            students with confidence and skills to succeed globally. The ceremony featured inspiring speeches, 
            award presentations, and performances that showcased the diverse talents of our graduates.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-colors">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
