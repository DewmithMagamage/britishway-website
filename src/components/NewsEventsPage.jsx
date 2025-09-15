import React, { useState } from "react";
import { Search, Calendar, ArrowRight, ChevronRight, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import Footer from "./Footer";
import Reveal from "./Reveal";

const NewsEventsPage = () => {
  const [activeTab, setActiveTab] = useState("events");

  const events = [
    {
      id: 1,
      title: "Business English Workshop",
      date: "10th September 2025",
      time: "9.30 am to 12.30 pm",
      location: "Main Conference Hall - British Way Main Office",
      image: "/images/course card.jpg"
    },
    {
      id: 2,
      title: "Business English Workshop",
      date: "10th September 2025",
      time: "9.30 am to 12.30 pm",
      location: "Main Conference Hall - British Way Main Office",
      image: "/images/course card.jpg"
    },
    {
      id: 3,
      title: "Business English Workshop",
      date: "10th September 2025",
      time: "9.30 am to 12.30 pm",
      location: "Main Conference Hall - British Way Main Office",
      image: "/images/course card.jpg"
    },
    {
      id: 4,
      title: "Business English Workshop",
      date: "10th September 2025",
      time: "9.30 am to 12.30 pm",
      location: "Main Conference Hall - British Way Main Office",
      image: "/images/course card.jpg"
    },
    {
      id: 5,
      title: "Business English Workshop",
      date: "10th September 2025",
      time: "9.30 am to 12.30 pm",
      location: "Main Conference Hall - British Way Main Office",
      image: "/images/course card.jpg"
    },
    {
      id: 6,
      title: "Business English Workshop",
      date: "10th September 2025",
      time: "9.30 am to 12.30 pm",
      location: "Main Conference Hall - British Way Main Office",
      image: "/images/course card.jpg"
    }
  ];

  const news = [
    {
      id: 1,
      title: "CONVOCATION CERAMONY 2025",
      date: "21ST JULY",
      description: "On July 21st, 2025, British Way English Academy proudly celebrated its Convocation Ceremony at the BMICH, honoring the achievements of our latest batch of graduates. Surrounded by family, friends, and esteemed colleagues, this event was a testament to our commitment to fostering academic excellence, confidence and skills to succeed globally...",
      image: "/images/Stu 01.png",
      featured: true
    },
    ...events // Same events for news section
  ];

  const CalendarWidget = () => {
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const dates = Array.from({ length: 31 }, (_, i) => i + 1);
    const highlightedDates = [27, 28, 29, 30, 31];

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <div className="text-center mb-4">
          <h3 className="font-semibold text-gray-800">January 2024</h3>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {days.map((day, index) => (
            <div key={index} className="text-center text-xs font-medium text-gray-600 py-1">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {dates.map((date) => (
            <div
              key={date}
              className={`text-center text-sm py-1 rounded ${
                highlightedDates.includes(date)
                  ? 'bg-blue-200 text-blue-800 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {date}
            </div>
          ))}
        </div>
        <div className="mt-3 text-center">
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Clear Date Filter
          </a>
        </div>
      </div>
    );
  };

  const EventCard = ({ event }) => (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{event.title}</h3>
        <div className="space-y-1 text-sm text-gray-600 mb-4">
          <p>{event.date}</p>
          <p>{event.time}</p>
          <p>{event.location}</p>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center">
          Register Now
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );

  // Compact horizontal preview used under News tab
  const NewsCard = ({ news }) => (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex">
      <img
        src={news.image}
        alt={news.title}
        className="w-40 h-28 object-cover"
      />
      <div className="p-4 flex-1">
        <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-1">{news.title}</h3>
        <div className="space-y-1 text-xs text-gray-600 mb-2">
          <p>{news.date}</p>
          <p>Main Conference Hall - British Way Head Office</p>
        </div>
        <button className="text-blue-600 text-xs font-semibold inline-flex items-center">
          Read more
          <ArrowRight className="w-3 h-3 ml-1" />
        </button>
      </div>
    </div>
  );

  // Large feature layout: image left, copy right
  const FeaturedNewsCard = ({ news }) => (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm p-4 md:p-6">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-64 object-cover rounded-xl"
        />
        <div>
          <div className="text-xs tracking-widest text-gray-600 uppercase mb-1">Latest</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{news.title}</h3>
          <div className="text-blue-600 font-semibold text-sm mb-3">{news.date}</div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-5">
            {news.description}
          </p>
          <button className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition-colors">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Custom Header for News & Events Page */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-9xl mx-auto px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <span>News & Event Page</span>
            </div>
            <div className="flex items-center">
              <span>Have any questions?</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@britishwak</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>03:23 550 312 / 07 1010010</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Facebook className="w-4 h-4" />
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
      
      {/* Main Navigation Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="British Way English Academy" 
                className="h-10 w-auto mr-3"
              />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 text-sm">
                Home
              </a>
              <a href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 text-sm">
                Courses
              </a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 text-sm">
                About Us
              </a>
              <a href="/careers" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 text-sm">
                Careers
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 text-sm">
                Contact US
              </a>
              <a href="/news-events" className="text-blue-600 font-semibold px-3 py-1.5 rounded-lg bg-blue-50 text-sm border-b-2 border-blue-600">
                News and Events
              </a>
              <a href="/branches" className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 text-sm">
                Branches
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gray-800 py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Stay Updated</h1>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Catch the latest happenings, news, and events from our community. From big moments that matter - explore what's new and what's next.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Tab Navigation */}
        {/* Toggle buttons styled like the mock */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 rounded-full p-1 inline-flex shadow-inner">
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 py-2 text-sm rounded-full ${
                activeTab === "events" ? 'bg-gray-900 text-white shadow' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`px-6 py-2 text-sm rounded-full ${
                activeTab === "news" ? 'bg-gray-900 text-white shadow' : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              News
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "events" ? (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Events & Activities</h2>
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <CalendarWidget />
                
                {/* Search Events */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search Events"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Filter by */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Filter by</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All</option>
                    <option>Free Events</option>
                    <option>Seminars and Workshops</option>
                  </select>
                </div>

                {/* This Month Summary */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">This Month</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Total Events - 08</li>
                    <li>• Free Events - 02</li>
                    <li>• Seminars and Workshops - 01</li>
                  </ul>
                </div>
              </div>

              {/* Right Content - Events Grid */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-6">
                  {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">News & Updates</h2>
            {/* Top featured banner */}
            <div className="mb-10">
              <Reveal>
                <FeaturedNewsCard news={news[0]} />
              </Reveal>
            </div>
            {/* Compact list grid like preview cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.slice(1).map((newsItem, i) => (
                <Reveal key={newsItem.id} delay={i*80}>
                  <NewsCard news={newsItem} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewsEventsPage;