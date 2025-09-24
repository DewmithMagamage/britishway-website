import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, Youtube, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <>
      {/* Header Spacer - Prevents content from going under fixed header */}
      <div className="h-[120px]"></div>
      
      {/* Fixed Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Contact Bar */}
        <div className="bg-gray-900 text-white py-2">
          <div className="max-w-9xl mx-auto px-8 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <span>Have any questions?</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@britishway.lk</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>033 202 4141 / 071 10 100 10</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Navigation Bar */}
        <div className="px-3 py-1">
          <nav className="max-w-7xl mx-auto backdrop-blur-md bg-gray-100/70 rounded-2xl shadow-xl border border-gray-200/50">
            <div className="px-2 py-1">
              <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex items-center">
                  {/* Replace this div with your PNG logo */}
                  <img 
                    src="/images/logo.png" 
                    alt="British Way English Academy" 
                    className="h-10 w-auto mr-3"
                  />
                  {/* Fallback logo if image doesn't load */}
                  <div className="hidden">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">BW</span>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-blue-600">British Way</h1>
                      <p className="text-xs text-gray-600">English Academy</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-6">
                <button 
                  onClick={() => navigate('/')}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    location.pathname === '/' 
                      ? 'text-blue-600 font-semibold bg-gray-200/50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200/30'
                  }`}
                >
                  Home
                </button>
                <span className="text-gray-400">|</span>
                <button 
                  onClick={() => navigate('/courses')}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    location.pathname === '/courses' 
                      ? 'text-blue-600 font-semibold bg-gray-200/50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200/30'
                  }`}
                >
                  Courses
                </button>
                <span className="text-gray-400">|</span>
                <button 
                  onClick={() => navigate('/about')}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    location.pathname === '/about' 
                      ? 'text-blue-600 font-semibold bg-gray-200/50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200/30'
                  }`}
                >
                  About Us
                </button>
                <span className="text-gray-400">|</span>
                <button 
                  onClick={() => navigate('/contact')}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    location.pathname === '/contact' 
                      ? 'text-blue-600 font-semibold bg-gray-200/50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200/30'
                  }`}
                >
                  Contact Us
                </button>
                <span className="text-gray-400">|</span>
                <button 
                  onClick={() => navigate('/news-events')}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    location.pathname === '/news-events' 
                      ? 'text-blue-600 font-semibold bg-gray-200/50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200/30'
                  }`}
                >
                  News and Events
                </button>
                <span className="text-gray-400">|</span>
                <button 
                  onClick={() => navigate('/branches')}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    location.pathname === '/branches' 
                      ? 'text-blue-600 font-semibold bg-gray-200/50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200/30'
                  }`}
                >
                  Branches
                </button>
              </div>
              
              {/* Mobile Menu Button */}
              <button className="md:hidden text-gray-700 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
