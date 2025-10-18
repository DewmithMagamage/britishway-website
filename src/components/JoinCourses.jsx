import React from "react";

const JoinCourses = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Start Your Course Today</h2>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Ready to embark on your journey to learn English Language the best way? 
        <br/>Click below and take your first step!
        </p>
        
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
          REGISTER NOW
        </button>
      </div>
    </section>
  );
};

export default JoinCourses;