import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, Youtube, Facebook, Twitter, Instagram, Linkedin, Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  
  return (
    <>
      {/* Fixed Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 mt-0">
        {/* Top Contact Bar (hidden on mobile) */}
        <div className="hidden md:block bg-gray-900 text-white py-2">
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
              <a href="https://youtube.com/@britishwayenglishacademy?si=aeabZxHdfS3QwkBO" className="hover:text-blue-300 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/BritishWayEnglishAcademy.lk" className="hover:text-blue-300 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/britishwaylk?igsh=MWkzc2J6Y3ZqY3B0MQ==" className="hover:text-blue-300 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/school/british-way-english-academy/" className="hover:text-blue-300 transition-colors">
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
              <div className="hidden md:flex items-center space-x-1">
                <button 
                  onClick={() => navigate('/')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out ${
                    location.pathname === '/' 
                      ? 'text-white bg-blue-600 shadow-lg' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => navigate('/courses')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out ${
                    location.pathname === '/courses' 
                      ? 'text-white bg-blue-600 shadow-lg' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Courses
                </button>
                <button 
                  onClick={() => navigate('/about')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out ${
                    location.pathname === '/about' 
                      ? 'text-white bg-blue-600 shadow-lg' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  About Us
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out ${
                    location.pathname === '/contact' 
                      ? 'text-white bg-blue-600 shadow-lg' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => navigate('/news-events')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out ${
                    location.pathname === '/news-events' 
                      ? 'text-white bg-blue-600 shadow-lg' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  News & Events
                </button>
                <button 
                  onClick={() => navigate('/branches')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out ${
                    location.pathname === '/branches' 
                      ? 'text-white bg-blue-600 shadow-lg' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Branches
                </button>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          </nav>
        </div>
        
        {/* Mobile Menu with overlay */}
        <div className={`md:hidden fixed inset-0 z-40 transition-opacity ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300`} 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Slide-down panel */}
          <div 
            id="mobile-menu"
            className={`absolute top-[64px] left-0 right-0 bg-white shadow-xl border-t border-gray-200 rounded-b-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}
          >
            <div className="px-4 py-3 space-y-2">
              <button 
                onClick={() => {
                  navigate('/');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/' 
                    ? 'text-white bg-blue-600' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  navigate('/courses');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/courses' 
                    ? 'text-white bg-blue-600' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Courses
              </button>
              <button 
                onClick={() => {
                  navigate('/about');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/about' 
                    ? 'text-white bg-blue-600' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => {
                  navigate('/contact');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/contact' 
                    ? 'text-white bg-blue-600' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Contact Us
              </button>
              <button 
                onClick={() => {
                  navigate('/news-events');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/news-events' 
                    ? 'text-white bg-blue-600' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                News & Events
              </button>
              <button 
                onClick={() => {
                  navigate('/branches');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/branches' 
                    ? 'text-white bg-blue-600' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Branches
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
