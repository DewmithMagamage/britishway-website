import React from "react";
import { MapPin, Facebook, Youtube, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2F327D] to-[#0A0B1C] text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Top Section: Logo and Newsletter */}
        <div className="flex justify-between items-center mb-8">
          <img 
            src="images/Britishway white logo.png" 
            alt="British Way English Academy" 
            className="h-12 w-auto" 
          />
          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email to get the latest news..."
              className="px-4 py-2 text-gray-800 w-64 focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 hover:bg-blue-700 transition-colors">
              {/* Removed search icon to match image */}
            </button>
            
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-white/20 mb-8" />
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Our Programmes */}
          <div>
            <h4 className="font-bold text-lg mb-4">OUR PROGRAMMES</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Weekday Diploma</li>
              <li>Weekend Diploma</li>
              <li>Online Diploma</li>
              <li>Kids Class</li>
            </ul>
          </div>
          
          {/* Explore More */}
          <div>
            <h4 className="font-bold text-lg mb-4">EXPLORE MORE</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Careers</li>
              <li>News & Events</li>
              <li>Branches</li>
              <li>Testimonials</li>
            </ul>
          </div>
          
          {/* Empty column for spacing */}
          <div></div>
          
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
        <div className="flex justify-between items-center text-blue-200 text-sm">
          <p>British Way English Academy © 2025. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Courses</a>
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;