import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { ArrowLeft } from "lucide-react";

const courseData = {
  "50-day-camp": {
    title: "50 Day Camp",
    subtitle: "Intensive English Diploma",
    image: "/images/50 Day Residential camp.jpg",
    courseDuration: "50 Days",
    minimumAge: "Over 16",
    courseHours: "200 hours",
    courseStructure: "Intensive General English",
    description: [
      "This 50-day intensive Diploma is designed for rapid English language acquisition, providing an immersive learning experience that fast-tracks your progress.",
      "Our teaching approach focuses on critical thinking and practical application, incorporating real-life scenarios and interactive learning methodologies.",
      "This accelerated program combines comprehensive language skills with practical communication exercises, ensuring students develop confidence in English usage across all contexts."
    ]
  },
  "weekday-2month": {
    title: "Weekday Diploma",
    subtitle: "Two Month English Diploma",
    image: "/images/Weekday Diploma copy.jpg",
    courseDuration: "2 Months",
    minimumAge: "Over 16",
    courseHours: "320 hours",
    courseStructure: "General English",
    description: [
      "This 2-month Diploma is considered a professional language qualification certificate that is recognized and accepted by all top-rated companies as well as foreign employment agencies in Sri Lanka.",
      "This English course is much more than reciting words in a classroom. Its teaching approach focuses on critical thinking, as well as group and project work - all drawn from real-life experiences not only by learning the language, but also learning how to use it in everyday life guided by well-qualified foreign & local English teachers maintaining a high-quality teaching adopting a unique teaching methodology.",
      "This fast-track program is not just about memorizing words or grammar rules - it's about learning how to use English in real-life situations. The course emphasizes critical thinking, interactive group activities, and project-based learning, ensuring students develop practical communication skills."
    ]
  },
  "weekday-3month": {
    title: "Weekday Diploma",
    subtitle: "Three Month English Diploma",
    image: "/images/weekday Diploma copy.jpg",
    courseDuration: "3 Months",
    minimumAge: "Over 16",
    courseHours: "480 hours",
    courseStructure: "Comprehensive General English",
    description: [
      "Our 3-month Weekday Diploma offers a comprehensive English language learning experience, perfect for those seeking in-depth language mastery.",
      "The program combines theoretical knowledge with extensive practical application, featuring regular assessments and personalized feedback to ensure steady progress.",
      "Students benefit from our proven methodology that emphasizes all four key language skills: speaking, listening, reading, and writing, complemented by real-world applications and cultural understanding."
    ]
  },
  "weekend-diploma": {
    title: "Weekend Diploma",
    subtitle: "Weekend English Course",
    image: "/images/Weekend Diploma.jpg",
    courseDuration: "6 Months",
    minimumAge: "Over 16",
    courseHours: "240 hours",
    courseStructure: "Flexible General English",
    description: [
      "Our Weekend Diploma is specially designed for working professionals and students who need a flexible learning schedule without compromising on quality.",
      "The course delivers the same high-quality content as our weekday programs, adapted to fit weekend scheduling while maintaining our interactive and practical approach to language learning.",
      "Perfect for those balancing work or studies with English language learning, this program ensures comprehensive coverage of all essential language skills with convenient weekend scheduling."
    ]
  },
  "night-class": {
    title: "Night Class",
    subtitle: "Evening English Course",
    image: "/images/course card.jpg",
    courseDuration: "4 Months",
    minimumAge: "Over 16",
    courseHours: "160 hours",
    courseStructure: "Evening General English",
    description: [
      "Our Evening English course is tailored for busy professionals and students who prefer to study after work or regular school hours.",
      "The program maintains our high teaching standards while offering the flexibility of evening classes, perfect for those with daytime commitments.",
      "Students receive comprehensive language training with a focus on practical communication skills and business English applications."
    ]
  },
  "online-diploma": {
    title: "Online Diploma",
    subtitle: "Virtual English Course",
    image: "/images/Online Diploma copy.jpg",
    courseDuration: "3 Months",
    minimumAge: "Over 16",
    courseHours: "Virtual Learning",
    courseStructure: "Online Interactive English",
    description: [
      "Our Online Diploma brings British Way's excellence in English education to the digital sphere, offering flexibility and convenience without compromising on quality.",
      "The course utilizes cutting-edge virtual learning tools and interactive sessions to ensure engaging and effective language learning from anywhere.",
      "Students benefit from our proven methodology adapted for online delivery, with regular live sessions, interactive materials, and continuous assessment."
    ]
  },
  "it-english": {
    title: "IT + English Course",
    subtitle: "Combined Skills Diploma",
    image: "/images/IT+English.jpg",
    courseDuration: "4 Months",
    minimumAge: "Over 16",
    courseHours: "400 hours",
    courseStructure: "IT & English Combined",
    description: [
      "This unique program combines essential IT skills with comprehensive English language training, preparing students for the modern workplace.",
      "Students learn both technical IT skills and professional English communication, making them more competitive in the technology sector.",
      "The course covers fundamental IT concepts while developing the English language skills needed in the technology industry."
    ]
  },
  "kids-class": {
    title: "Kids Class",
    subtitle: "Young Learners Program",
    image: "/images/Kids Class.jpg",
    courseDuration: "3 Months",
    minimumAge: "Ages 8-15",
    courseHours: "120 hours",
    courseStructure: "Child-Focused Learning",
    description: [
      "Our Kids Class is specially designed to make English learning fun and engaging for young learners, using age-appropriate methods and materials.",
      "The program incorporates games, activities, and interactive learning techniques to keep children engaged while building their language skills.",
      "Young students develop confidence in English through a supportive environment that encourages participation and creativity."
    ]
  }
};

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseData[courseId];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden -mt-24">
          <img 
            src={course.image}
            alt={course.title} 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
          <div className="absolute inset-0 flex items-center z-10">
            <div className="container mx-auto">
              <div className="text-white max-w-2xl px-8 md:px-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-left">{course.title}</h1>
                <p className="text-xl md:text-2xl font-light">{course.subtitle}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            {/* Back to Courses Button */}
            <div className="mb-8">
              <button
                onClick={() => navigate('/courses')}
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Courses
              </button>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">{course.title}</h2>
              
              {/* Course Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Course Length</p>
                  <p className="text-lg font-semibold">{course.courseDuration}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Minimum Age</p>
                  <p className="text-lg font-semibold">{course.minimumAge}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Course Hours</p>
                  <p className="text-lg font-semibold">{course.courseHours}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Course Structure</p>
                  <p className="text-lg font-semibold">{course.courseStructure}</p>
                </div>
              </div>

              {/* Course Image Gallery */}
              <div className="grid grid-cols-3 gap-4 mb-16">
                <div className="col-span-2">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
                <div className="grid grid-rows-2 gap-4">
                  <img 
                    src="/images/Stu 01.png"
                    alt="Course activity"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <img 
                    src="/images/Stu 02.jpeg"
                    alt="Course activity"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Course Details */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Details</h3>
                <div className="space-y-4">
                  {course.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Apply Section */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">APPLY FOR</h2>
                <h3 className="text-xl text-gray-600 mb-2">{course.courseDuration.toUpperCase()} ENGLISH DIPLOMA</h3>
                <p className="text-sm text-gray-500 mb-6">Register Online get early bird course fee</p>
              </div>

              {/* Registration Form */}
              <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Branch *</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a branch</option>
                      <option value="nugegoda">Nugegoda</option>
                      <option value="kandy">Kandy</option>
                      <option value="galle">Galle</option>
                      <option value="kurunegala">Kurunegala</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    REGISTER NOW →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CourseDetailPage;