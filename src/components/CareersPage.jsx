import React from "react";
import Layout from "./Layout";
import { MapPinIcon, ClockIcon, UserGroupIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

const CareersPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "English Language Instructor",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2+ years",
      description: "We are looking for passionate English language instructors to join our team across various branches.",
      requirements: [
        "Bachelor's degree in English or related field",
        "Teaching experience preferred",
        "Excellent communication skills",
        "Passion for education"
      ]
    },
    {
      id: 2,
      title: "Branch Manager",
      location: "Nugegoda",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead and manage one of our branch operations, ensuring excellent service delivery.",
      requirements: [
        "Master's degree in Management or related field",
        "5+ years management experience",
        "Strong leadership skills",
        "Experience in education sector preferred"
      ]
    },
    {
      id: 3,
      title: "Marketing Coordinator",
      location: "Head Office - Nittambuwa",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop and implement marketing strategies to promote our courses and services.",
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "3+ years marketing experience",
        "Digital marketing skills",
        "Creative thinking and problem-solving"
      ]
    },
    {
      id: 4,
      title: "IT Support Specialist",
      location: "Head Office - Nittambuwa",
      type: "Full-time",
      experience: "2+ years",
      description: "Provide technical support for our IT infrastructure and systems.",
      requirements: [
        "Bachelor's degree in IT or related field",
        "2+ years IT support experience",
        "Knowledge of network administration",
        "Problem-solving skills"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden -mt-24">
          <img 
            src="/images/course card.jpg" 
            alt="Careers" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
          <div className="absolute inset-0 flex items-center z-10">
            <div className="container mx-auto">
              <div className="text-white max-w-2xl px-8 md:px-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-left">Join Our Team</h1>
                <p className="text-lg md:text-xl">
                  Be part of Sri Lanka's leading English education institution. 
                  Help us shape the future of thousands of students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                At British Way English Academy, we believe our people are our greatest asset. 
                Join a team that's passionate about education and making a difference.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Environment</h3>
                <p className="text-gray-600">Work with passionate educators and professionals who share your commitment to excellence.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BriefcaseIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Growth</h3>
                <p className="text-gray-600">Opportunities for professional development and career advancement within our growing organization.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Locations</h3>
                <p className="text-gray-600">Work at any of our 14 branches across Sri Lanka, close to where you live.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
              <p className="text-gray-600 text-lg">Explore our current job opportunities and find your perfect role.</p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <BriefcaseIcon className="h-4 w-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply Now</h2>
              <p className="text-gray-600 text-lg">Ready to join our team? Submit your application below.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Position Applied For *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us why you want to join our team..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors text-lg font-semibold"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;
