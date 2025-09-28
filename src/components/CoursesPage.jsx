import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Partners from "./Partners";
import Contact from "./Contact";
import JoinCourses from "./JoinCourses";
import CourseCard from "./CourseCard";
import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

const CoursesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Courses");

  const filters = [
    "All Courses",
    "Full Time Diplomas", 
    "Part Time Diplomas",
    "Kids Class",
    "Online Courses"
  ];

  const courses = [
    {
      id: 1,
      title: "50 Day Camp",
      description: "Intensive English learning program designed for rapid skill development. Perfect for students who want to accelerate their English proficiency in a short time.",
      instructor: "Sarah Johnson - Head of Product Customer Platform Expert Instructor",
      category: "Full Time Diplomas",
      image: "/images/course card.jpg"
    },
    {
      id: 2,
      title: "Weekday Diploma - 2 Months",
      description: "Comprehensive English diploma program covering all essential language skills. Structured curriculum with practical applications and real-world scenarios.",
      instructor: "Sarah Johnson - Head of Product Customer Platform Expert Instructor",
      category: "Full Time Diplomas",
      image: "/images/course card.jpg"
    },
    {
      id: 3,
      title: "Weekday Diploma - 3 Months",
      description: "Extended English diploma program with advanced modules and specialized training. Ideal for students seeking comprehensive language mastery.",
      instructor: "Sarah Johnson - Head of Product Customer Platform Expert Instructor",
      category: "Full Time Diplomas",
      image: "/images/course card.jpg"
    },
    {
      id: 4,
      title: "Weekend Diploma",
      description: "Flexible weekend program designed for working professionals. Balance your career with English language development through our structured weekend classes.",
      instructor: "Sarah Johnson - Head of Product Customer Platform Expert Instructor",
      category: "Part Time Diplomas",
      image: "/images/course card.jpg"
    },
    {
      id: 5,
      title: "Online English Diploma",
      description: "Modern online learning experience with interactive sessions and digital resources. Learn English from anywhere with our comprehensive online platform.",
      instructor: "Sarah Johnson - Head of Product Customer Platform Expert Instructor",
      category: "Online Courses",
      image: "/images/course card.jpg"
    },
    {
      id: 6,
      title: "IT + English Diploma",
      description: "Combined program offering both English language skills and IT fundamentals. Perfect for students looking to enhance their career prospects in technology.",
      instructor: "Sarah Johnson - Head of Product Customer Platform Expert Instructor",
      category: "Full Time Diplomas",
      image: "/images/course card.jpg"
    },
    {
      id: 7,
      title: "Kids Class",
      description: "Fun and engaging English classes designed specifically for children. Interactive learning methods that make English enjoyable for young learners.",
      instructor: "Sarah Johnson - Head of Product Customer Platform Expert Instructor",
      category: "Kids Class",
      image: "/images/course card.jpg"
    },
    {
      id: 8,
      title: "Night Class",
      description: "Evening English classes for working adults and students. Flexible timing that fits your busy schedule while maintaining quality education.",
      instructor: "Sarah Johnson - Head of Product Customer Platform Expert Instructor",
      category: "Part Time Diplomas",
      image: "/images/course card.jpg"
    }
  ];

  const filteredCourses = activeFilter === "All Courses" 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Reveal variant="fade-up" className="relative z-10 text-center text-white px-8">
          <h1 className="text-5xl font-bold mb-6">Explore Our Courses</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover a wide range of programs designed to help you master English with confidence. 
            Whether you're a beginner or aiming for advanced fluency, we have the right path for you.
          </p>
        </Reveal>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <Reveal variant="fade-up" className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, i) => (
              <Reveal key={course.id} delay={i*80}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Courses Section */}
      <JoinCourses />

      {/* Our Partners Section */}
      <Partners />

      {/* Contact Us Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CoursesPage;
