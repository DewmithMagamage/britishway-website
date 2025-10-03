import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Users, Award, ArrowRight, Search } from "lucide-react";
import Layout from "./Layout";
import { branches } from "../data/branches";

const BranchPage = () => {
  const { branchId } = useParams();
  const navigate = useNavigate();
  
  // Find the branch data from the imported branches array
  const branch = branches.find(b => b.id === branchId) || branches[0];

  return (
    <Layout>
      <main className="w-full">
      {/* Hero Section (unified style) */}
      <section className="relative h-[60vh] overflow-hidden -mt-24">
        <img 
          src={`/images/branches/${branchId}-hero.jpg`} 
          alt={branch.name} 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="text-white max-w-3xl p-8 mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold">{branch.name}</h1>
          </div>
        </div>
      </section>

      {/* Branch Introduction */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{branch.name}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {branch.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src={`/images/branches/${branchId}-gallery-1.jpg`} alt="Gallery 1" className="rounded-xl shadow-md object-cover h-48 w-full" />
            <img src={`/images/branches/${branchId}-gallery-2.jpg`} alt="Gallery 2" className="rounded-xl shadow-md object-cover h-48 w-full" />
            <img src={`/images/branches/${branchId}-gallery-3.jpg`} alt="Gallery 3" className="rounded-xl shadow-md object-cover h-48 w-full" />
            <img src={`/images/branches/${branchId}-gallery-4.jpg`} alt="Gallery 4" className="rounded-xl shadow-md object-cover h-48 w-full" />
            <img src={`/images/branches/${branchId}-gallery-5.jpg`} alt="Gallery 5" className="rounded-xl shadow-md object-cover h-48 w-full" />
            <img src={`/images/branches/${branchId}-gallery-6.jpg`} alt="Gallery 6" className="rounded-xl shadow-md object-cover h-48 w-full" />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Phone className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">PHONE</h3>
            <p className="text-gray-600">{branch.phone}</p>
          </div>
          
          <div className="text-center">
            <Phone className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">LANDLINE</h3>
            <p className="text-gray-600">{branch.landline}</p>
          </div>
          
          <div className="text-center">
            <Mail className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">EMAIL</h3>
            <p className="text-gray-600">{branch.email}</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <MapPin className="w-8 h-8 text-gray-600 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-800 mb-1">ADDRESS</h3>
          <p className="text-gray-600">{branch.address}</p>
          <a 
            href={branch.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            View on Map →
          </a>
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Courses In {branch.name}</h3>
          <p className="text-gray-600 text-lg">Discover courses that inspire growth and success.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/courses/weekend-diploma.jpg" alt="Weekend Diploma" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Weekend Diploma</h4>
              <p className="text-gray-600 text-sm mb-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Super cool tools</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/courses/weekday-2months.jpg" alt="Weekday Diploma 2 Months" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Weekday Diploma - 2 Months</h4>
              <p className="text-gray-600 text-sm mb-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Super cool tools</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/courses/weekday-3months.jpg" alt="Weekday Diploma 3 Months" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Weekday Diploma - 3 Months</h4>
              <p className="text-gray-600 text-sm mb-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Super cool tools</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/courses/online-diploma.jpg" alt="Online English Diploma" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Online English Diploma</h4>
              <p className="text-gray-600 text-sm mb-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Super cool tools</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h3>
          <p className="text-gray-600 text-lg">A glimpse into our journey, achievements, and moments that define us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/images/gallery/graduation-1.jpg" alt="Graduation ceremony" className="rounded-xl shadow-lg object-cover h-80 w-full" />
          <img src="/images/gallery/ceremony-1.jpg" alt="Ceremony event" className="rounded-xl shadow-lg object-cover h-80 w-full" />
          <img src="/images/gallery/audience-1.jpg" alt="Audience" className="rounded-xl shadow-lg object-cover h-80 w-full" />
        </div>
      </section>

      {/* Join Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-gray-50 rounded-2xl">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Join With {branch.name}</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            For over 20 years, British Way English Academy has been Sri Lanka's largest English training institute, 
            with 16 branches and over 21,000 graduates annually. Guided by a passionate, qualified team, 
            we believe every student has unlimited potential and we're here to unlock it.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg font-semibold flex items-center mx-auto">
            REGISTER NOW <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Stay Connected */}
      
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Connected</h3>
        <p className="text-gray-600 mb-8">Stay connected with us through your favorite social platforms.</p>
        
        <div className="flex justify-center space-x-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">Y</span>
          </div>
          <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">I</span>
          </div>
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">W</span>
          </div>
          <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">F</span>
          </div>
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold">T</span>
          </div>
        </div>
      </section>

      {/* Back to Branches */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <button 
          onClick={() => navigate('/branches')}
          className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          ← Back to All Branches
        </button>
      </section>
      </main>
    </Layout>
  );
};

export default BranchPage;
