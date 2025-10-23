import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Facebook, Youtube, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="bg-gradient-to-b from-[#2F327D] to-[#0A0B1C] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-12">
        {/* Top Section: Logo and Newsletter */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 sm:gap-8 mb-8">
          <img 
            src="/images/Britishway white logo.png" 
            alt="British Way English Academy" 
            className="h-8 xs:h-10 sm:h-12 w-auto max-w-[200px] xs:max-w-[220px] sm:max-w-none"
            loading="lazy"
          />
          <div className="flex items-center bg-white rounded-full overflow-hidden w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              className="px-4 py-2 text-gray-800 w-full sm:w-64 focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 hover:bg-blue-700 transition-colors">
              {/* Removed search icon to match image */}
            </button>
            
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-white/20 mb-8" />
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Our Programmes */}
          <div>
            <h4 className="font-bold text-lg mb-4">OUR PROGRAMMES</h4>
            <ul className="space-y-2 text-blue-200">
              <li><button onClick={() => navigate('/courses')} className="hover:text-white transition-colors">Weekday Diploma</button></li>
              <li><button onClick={() => navigate('/courses')} className="hover:text-white transition-colors">Weekend Diploma</button></li>
              <li><button onClick={() => navigate('/courses')} className="hover:text-white transition-colors">Online Diploma</button></li>
              <li><button onClick={() => navigate('/courses')} className="hover:text-white transition-colors">Kids Class</button></li>
            </ul>
          </div>
          
          {/* Explore More */}
          <div>
            <h4 className="font-bold text-lg mb-4">EXPLORE MORE</h4>
            <ul className="space-y-2 text-blue-200">
              <li><button onClick={() => navigate('/careers')} className="hover:text-white transition-colors">Careers</button></li>
              <li><button onClick={() => navigate('/news-events')} className="hover:text-white transition-colors">News & Events</button></li>
              <li><button onClick={() => navigate('/branches')} className="hover:text-white transition-colors">Branches</button></li>
              <li><button onClick={() => navigate('/testimonials')} className="hover:text-white transition-colors">Testimonials</button></li>
            </ul>
          </div>
          
          {/* Empty column for spacing on md+; hidden on small */}
          <div className="hidden md:block" />
          
          {/* Location and Social Media */}
          <div>
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-4">Location</h4>
              <p className="text-sm text-blue-200">
                2/36, Kandy Road, Nittambuwa, Sri Lanka. (Head Office )
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Join Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                {/* Removed Linkedin to match image */}
              </div>
            </div>
          </div>
        </div>

       {/* Horizontal Line */}
        <hr className="border-white/20 mb-8" />
        
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-blue-200 text-sm">
          <p className="text-center sm:text-left">British Way English Academy © 2025. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => navigate('/courses')} className="hover:text-white transition-colors">Courses</button>
            <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">About Us</button>
            <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;