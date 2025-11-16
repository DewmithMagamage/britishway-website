import React from "react";
import Layout from "./Layout";
import { StarIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amasha liyanagen",
      course: "Weekday Diploma",
      branch: "Kiribathgoda",
      rating: 5,
      text: "I’m truly grateful to British Way English Academy, Kiribathgoda branch for helping me improve my English language and building my confidence. Before joining, I found it difficult to communicate fluently, but thanks to their supportive teachers and effective learning methods, I was able to enhance my speaking and writing skills. Today,I’m studying as an undergraduate and working as a freelance presenter.",
      image: "/images/Stuamasha.png"
    },
    {
      id: 2,
      name: "Chalani Tharuka Gamage",
      course: "Weekday Diploma",
      branch: "Matara",
      rating: 5,
      text: "As an AI and Data Science undergraduate at IIT, British Way - Matara Branch has been the bridge that strengthened my communication skills and shaped my professional personality. The interactive sessions, inspiring lecturers, and supportive environment encouraged me to speak confidently and think critically in English. Thanks to British Way, I can now communicate my ideas fluently in both academic and professional settings, opening new opportunities for my future. I now handle the English language more smoothly and confidently than ever before!",
      image: "/images/stuchalani.png"
    },
    {
      id: 3,
      name: "Nisansala Sewwandi",
      course: "50 Day Camp",
      branch: "Nittabuwa",
      rating: 5,
      text: "When I was a child, I had an ambition to become a teacher one day.But after getting older, I realized it is not easy to achieve. Sometimes Ifailed and sometimes I learnt. But after all I wanted to make a freshstart for my whole life. So, I decided to go to British Way EnglishAcademy Nittambuwa Residential Camp.At there I learnt lots of things not only English but also life lessonsand I improved my public speaking skills as well. So yes! British WayEnglish Academy is not just a place for me.it is the place where Ifinally found myself.",
      image: "/images/malshastu.png"
    },
    {
      id: 4,
      name: "Shanuka Thennakoon",
      course: "Weekday Diploma",
      branch: "Gampaha",
      rating: 5,
      text: "I am truly grateful to British Way English Academy, Gampaha, for helping me improve my English skills and confidence. The academy provided excellent training in communication, grammar, and public speaking, which played a big role in my professional growth. The teachers were supportive and always encouraged me to speak fluently and correctly. The knowledge and experience I gained there helped me achieve my dream of working as a banker. I proudly recommend British Way English Academy to anyone who wants to develop their English and succeed in their career.",
      image: "/images/stugampaha.png"
    },
    {
      id: 5,
      name: "Yasashmi Vidanaarachchi",
      course: "Weekday Diploma",
      branch: "Nugegoda",
      rating: 5,
      text: "My love for the English language began in childhood, and at the Nugegoda Branch of British Way English Academy, I discovered the perfect path to fluency. British Way helped me overcome stage fright, build confidence, and master proper grammar through engaging and practical learning experiences. Today, as a lecturer at the same branch, I feel privileged to guide students on the same inspiring journey that once transformed me.",
      image: "/images/Stu 01.jpeg"
    },
    {
      id: 6,
      name: "Chaminda Rathnayake",
      course: "Weekday Diploma",
      branch: "Negombo",
      rating: 5,
      text: "I’m truly grateful to have been a part of the British Way English Academy Negombo family. It wasn’t just an English course — it was a home. The Negombo Branch became one of the most unforgettable milestones in my life. The teachers not only improved my English, but also shaped my confidence and personality. We learned so much more than just language. This journey helped me grow, communicate better, and believe in myself. I highly recommend British Way English Academy Negombo to anyone looking to learn English. Thank you to the Principal, teachers, and staff for everything. Love you so much, British Way Negombo!",
      image: "/images/negambostu.png"
    }
  ];

  const stats = [
    { number: "9,000+", label: "Students Graduated Annually" },
    { number: "95%", label: "Student Satisfaction Rate" },
    { number: "20+", label: "Years of Experience" },
    { number: "14", label: "Branches Nationwide" }
  ];

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden -mt-24">
          <img 
            src="/images/course card.jpg" 
            alt="Testimonials" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
          <div className="absolute inset-0 flex items-center z-10">
            <div className="container mx-auto">
              <div className="text-white max-w-2xl px-8 md:px-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-left">Student Success Stories</h1>
                <p className="text-lg md:text-xl">
                  Hear from our students who have transformed their lives through quality English education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-[#2F327D] to-[#0A0B1C] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our students have to say about their experience at British Way English Academy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <article key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-200">
                  <header className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-sm"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.course} — <span className="font-medium text-gray-700">{testimonial.branch}</span></p>
                    </div>
                  </header>

                  <div className="flex items-center mb-4" aria-hidden>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400 mr-0.5" />
                    ))}
                  </div>

                  <div className="relative mb-4">
                    <ChatBubbleLeftRightIcon className="h-7 w-7 text-blue-100 absolute -top-2 -left-2" />
                    <blockquote className="text-gray-700 italic pl-6 leading-relaxed">“{testimonial.text}”</blockquote>
                  </div>

                  <footer className="mt-4">
                    <button
                      onClick={() => navigate('/courses')}
                      className="text-sm text-blue-600 hover:underline"
                      aria-label={`View courses related to ${testimonial.name}`}
                    >
                      View Courses
                    </button>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
              <p className="text-gray-600 text-lg">Watch our students share their success stories in their own words.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <video
                  controls
                  className="w-full h-full object-cover bg-black"
                  src="/images/hero-bg-video.mp4"
                  poster="/images/Stu 01.png"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Sarah's Success Story</h3>
                  <p className="text-gray-600 text-sm">How British Way helped Sarah achieve her career goals</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <video
                  controls
                  className="w-full h-full object-cover bg-black"
                  src="/images/testimonial02.mp4"
                  poster="/images/Stu 02.jpeg"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Michael's Journey</h3>
                  <p className="text-gray-600 text-sm">From beginner to confident English speaker</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-b from-[#2F327D] to-[#0A0B1C] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Join thousands of students who have transformed their lives through quality English education at British Way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Courses
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TestimonialsPage;
