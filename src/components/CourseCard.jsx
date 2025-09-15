import React from "react";
import { ArrowRight } from "lucide-react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Course Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {course.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {course.description}
        </p>
        
        <p className="text-gray-500 text-xs mb-6">
          {course.instructor}
        </p>
        
        {/* Enroll Button */}
        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2">
          <span className="font-medium">Enroll Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
