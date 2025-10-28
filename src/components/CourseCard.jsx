import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/course/${course.id}`)}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* Course Image */}
      <div className="h-40 sm:h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Course Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
          {course.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 sm:mb-4 leading-relaxed">
          {course.description}
        </p>
        
        <p className="text-gray-500 text-xs mb-5 sm:mb-6">
          {course.instructor}
        </p>
        
        {/* Enroll Button */}
        <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 mb-2">
          <span className="font-medium">Enroll Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          className="w-full bg-gray-100 text-blue-700 py-2 px-4 rounded-lg font-medium border border-blue-200 hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center space-x-2"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/course/${course.id}`);
          }}
        >
          <span>More Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
