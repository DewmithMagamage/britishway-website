import React from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import Reveal from "./Reveal";

const branches = [
  { name: "Matara Branch", id: "matara" },
  { name: "Galle Branch", id: "galle" },
  { name: "Nugegoda Branch", id: "nugegoda" },
  { name: "Kalutara Branch", id: "kalutara" },
  { name: "Kiribathgoda Branch", id: "kiribathgoda" },
  { name: "Kurunegala Branch", id: "kurunegala" },
  { name: "Gampaha Branch", id: "gampaha" },
  { name: "Nittambuwa Branch", id: "nittambuwa" },
  { name: "Negombo Branch", id: "negombo" },
  { name: "Ratnapura Branch", id: "ratnapura" },
  { name: "Polonnaruwa Branch", id: "polonnaruwa" },
  { name: "Anuradhapura Branch", id: "anura" },
  { name: "Bandarawela Branch", id: "bandarawela" },
  { name: "Kandy Branch", id: "kandy" }
];

const BranchesPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src="/images/course card.jpg" 
          alt="Our Branches" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="text-white max-w-3xl p-8 mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Visit Our Branches</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Find a branch near you and experience our services closer to home. We're proud to serve you across multiple locations with the same commitment and care.
            </p>
          </div>
        </div>
      </section>

      {/* Our Branches Section */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Branches</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            British Way English Academy takes pride in being Sri Lanka's largest and most trusted English training institute, with 14 branches island-wide. Each of our branches is designed to deliver the same standard of excellence in English education, offering modern classrooms, advanced facilities, and a supportive environment for students. With highly qualified lecturers and a consistent teaching methodology, we ensure that no matter which branch you choose, you will experience the same quality learning journey. Our 14 branches make us easily accessible to students across the country, empowering thousands every year to achieve academic, professional, and personal success.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src="/images/branches/gallery-1.jpg" alt="Branch gallery 1" className="rounded-xl shadow-md object-cover h-40 md:h-48 w-full" />
          <img src="/images/branches/gallery-2.jpg" alt="Branch gallery 2" className="rounded-xl shadow-md object-cover h-40 md:h-48 w-full" />
          <img src="/images/branches/gallery-3.jpg" alt="Branch gallery 3" className="rounded-xl shadow-md object-cover h-40 md:h-48 w-full col-span-2" />
        </div>
      </section>

      {/* Find Your Nearest Branch Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Your Nearest Branch</h3>
          <p className="text-gray-600">Get in touch or visit the branch closest to you for personalized support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {branches.map((branch) => (
            <div 
              key={branch.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => navigate(`/branch/${branch.id}`)}
            >
              <h4 className="font-semibold text-gray-900 mb-4">{branch.name}</h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">8:00 am to 5 pm (Daily)</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">071 10 100 10</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">033 202 41 41</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">careers@britishway.lk</span>
                </div>
              </div>
              
              <div className="mt-4 w-8 h-12 bg-gray-200 rounded-lg ml-auto"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect with nearest branch Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with nearest branch</h3>
          <p className="text-gray-600">Connect with us today to explore our courses and find the right path for your future.</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your message"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BranchesPage;
