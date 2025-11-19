import React, { useState } from "react";
import Layout from "./Layout";
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
      id: "50-day-camp",
      title: "50 Day Camp",
      description: "Intensive English learning program designed for rapid skill development. Perfect for students who want to accelerate their English proficiency in a short time.",
      instructor: "View More...",
      category: "Full Time Diplomas",
      image: "/images/3.png"
    },
    {
      id: "weekday-2month",
      title: "Weekday Diploma - 2 Months",
      description: "Comprehensive English diploma program covering all essential language skills. Structured curriculum with practical applications and real-world scenarios.",
      instructor: "View More...",
      category: "Full Time Diplomas",
      image: "/images/1.png"
    },
    {
      id: "weekday-3month",
      title: "Weekday Diploma - 3 Months",
      description: "Extended English diploma program with advanced modules and specialized training. Ideal for students seeking comprehensive language mastery.",
      instructor: "View More...",
      category: "Full Time Diplomas",
      image: "/images/2.png"
    },
    {
      id: "weekend-diploma",
      title: "Weekend Diploma",
      description: "Flexible weekend program designed for working professionals. Balance your career with English language development through our structured weekend classes.",
      instructor: "View More...",
      category: "Part Time Diplomas",
      image: "/images/4.png"
    },
    {
      id: "online-diploma",
      title: "Online English Diploma",
      description: "Modern online learning experience with interactive sessions and digital resources. Learn English from anywhere with our comprehensive online platform.",
      instructor: "View More...",
      category: "Online Courses",
      image: "/images/5.png"
    },
    {
      id: "it-english",
      title: "IT + English Diploma",
      description: "Combined program offering both English language skills and IT fundamentals. Perfect for students looking to enhance their career prospects in technology.",
      instructor: "View More...",
      category: "Full Time Diplomas",
      image: "/images/6.png"
    },
    {
      id: "kids-class",
      title: "Kids Class",
      description: "Fun and engaging English classes designed specifically for children. Interactive learning methods that make English enjoyable for young learners.",
      instructor: "View More...",
      category: "Kids Class",
      image: "/images/8.png"
    },
    {
      id: "night-class",
      title: "Night Class",
      description: "Evening English classes for working adults and students. Flexible timing that fits your busy schedule while maintaining quality education.",
      instructor: "View More...",
      category: "Part Time Diplomas",
      image: "/images/7.png"
    }
  ];

  const filteredCourses = activeFilter === "All Courses" 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <Layout>
      <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden -mt-24">
        <img 
          src="/images/cover4.jpg" 
          alt="OurCourses" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto">
            <div className="text-white max-w-2xl px-8 md:px-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-left">Explore Our Courses</h1>
              <p className="text-lg md:text-xl">
                Discover a wide range of programs designed to help you master English with confidence. 
                Whether you're a beginner or aiming for advanced fluency, we have the right path for you.
              </p>
            </div>
          </div>
        </div>
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

      </div>
    </Layout>
  );
};

export default CoursesPage;
