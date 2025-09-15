import React from "react";

const JoinCourses = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Courses</h2>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          For over 20 years, British Way English Academy has been Sri Lanka's longest English training institute, 
          with 16 branches and over 21,000 graduates annually. Guided by a passionate, qualified team, we believe 
          every student has unlimited potential and we're here to unlock it.
        </p>
        
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
          REGISTER NOW +
        </button>
      </div>
    </section>
  );
};

export default JoinCourses;