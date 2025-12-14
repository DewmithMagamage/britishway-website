import React, { useState, useMemo, useEffect } from "react";
import { Search, Calendar, ArrowRight, ChevronRight, ChevronLeft, Mail, Phone, Facebook, Instagram, Linkedin, Filter, X } from "lucide-react";
import Layout from "./Layout";
import Reveal from "./Reveal";
import StayConnected from "./StayConnected";
import { getEvents, getNews, subscribeToEvents, subscribeToNews } from "../utils/dataStorage";

const NewsEventsPage = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Load events and news from Firebase
    const loadData = async () => {
      try {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:20',message:'loadData entry',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
        // #endregion
        const [allEvents, allNews] = await Promise.all([
          getEvents(),
          getNews()
        ]);
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:26',message:'Data loaded from Firebase',data:{allEventsLength:allEvents.length,allNewsLength:allNews.length,firstEventDateType:allEvents[0]?.date?.constructor?.name,firstEventDateValue:allEvents[0]?.date},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B,E'})}).catch(()=>{});
        // #endregion
        // Filter to only show active events and published news
        const filteredEvents = allEvents.filter(e => !e.status || e.status === 'active');
        const filteredNews = allNews.filter(n => !n.status || n.status === 'published');
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:29',message:'After filtering',data:{filteredEventsLength:filteredEvents.length,filteredNewsLength:filteredNews.length,newsFirstItem:filteredNews[0]?true:false},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        setEvents(filteredEvents);
        setNews(filteredNews);
      } catch (error) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:32',message:'Error loading data',data:{error:error.message,stack:error.stack},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
        // #endregion
        console.error('Error loading data:', error);
      }
    };
    
    loadData();
    
    // Subscribe to real-time updates
    const unsubscribeEvents = subscribeToEvents((eventsData) => {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:38',message:'subscribeToEvents callback',data:{eventsDataLength:eventsData.length,firstEventDateType:eventsData[0]?.date?.constructor?.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      setEvents(eventsData.filter(e => !e.status || e.status === 'active'));
    });
    
    const unsubscribeNews = subscribeToNews((newsData) => {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:42',message:'subscribeToNews callback',data:{newsDataLength:newsData.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      setNews(newsData.filter(n => !n.status || n.status === 'published'));
    });
    
    return () => {
      unsubscribeEvents();
      unsubscribeNews();
    };
  }, []);

  // Log news array state for debugging
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:50',message:'News array state changed',data:{newsLength:news.length,newsFirstItem:news[0]?true:false,newsFirstItemType:news[0]?.constructor?.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
  }, [news]);

  // Filter events based on search term and filter type
  const filteredEvents = useMemo(() => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:52',message:'filteredEvents useMemo entry',data:{eventsLength:events.length,selectedDate:selectedDate?.toISOString()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C,D'})}).catch(()=>{});
    // #endregion
    return events.filter(event => {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:54',message:'Filtering event',data:{eventId:event.id,eventDateType:event.date?.constructor?.name,eventDateIsDate:event.date instanceof Date,eventDateValue:event.date},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B,C'})}).catch(()=>{});
      // #endregion
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === "all" || event.type === filterType;
      let matchesDate = true;
      if (selectedDate) {
        try {
          // #region agent log
          fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:60',message:'Before date comparison',data:{eventDateType:event.date?.constructor?.name,eventDateIsDate:event.date instanceof Date},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
          // #endregion
          matchesDate = event.date.getDate() === selectedDate.getDate() && 
                       event.date.getMonth() === selectedDate.getMonth() && 
                       event.date.getFullYear() === selectedDate.getFullYear();
          // #region agent log
          fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:63',message:'After date comparison',data:{matchesDate},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
          // #endregion
        } catch (dateError) {
          // #region agent log
          fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:66',message:'Date comparison error',data:{error:dateError.message,eventDateType:event.date?.constructor?.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
          // #endregion
          matchesDate = false;
        }
      }
      
      return matchesSearch && matchesFilter && matchesDate;
    });
  }, [events, searchTerm, filterType, selectedDate]);

  // Calendar navigation functions
  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  // Get calendar data
  const getCalendarData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  // Check if a date has events
  const hasEventsOnDate = (day) => {
    if (!day) return false;
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return events.some(event => {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:103',message:'hasEventsOnDate check',data:{day,eventDateType:event.date?.constructor?.name,eventDateIsDate:event.date instanceof Date},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B,C'})}).catch(()=>{});
      // #endregion
      try {
        return event.date.getDate() === day && 
               event.date.getMonth() === currentDate.getMonth() && 
               event.date.getFullYear() === currentDate.getFullYear();
      } catch (dateError) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:108',message:'hasEventsOnDate error',data:{error:dateError.message,eventDateType:event.date?.constructor?.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
        // #endregion
        return false;
      }
    });
  };

  // Get events for a specific date
  const getEventsForDate = (day) => {
    if (!day) return [];
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return events.filter(event => {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:115',message:'getEventsForDate filter',data:{day,eventDateType:event.date?.constructor?.name,eventDateIsDate:event.date instanceof Date},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B,C'})}).catch(()=>{});
      // #endregion
      try {
        return event.date.getDate() === day && 
               event.date.getMonth() === currentDate.getMonth() && 
               event.date.getFullYear() === currentDate.getFullYear();
      } catch (dateError) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:120',message:'getEventsForDate error',data:{error:dateError.message,eventDateType:event.date?.constructor?.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
        // #endregion
        return false;
      }
    });
  };

  // Handle date selection
  const handleDateClick = (day) => {
    if (!day) return;
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(selectedDate && selectedDate.getTime() === date.getTime() ? null : date);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setFilterType("all");
    setSelectedDate(null);
  };

  const CalendarWidget = () => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const calendarDays = getCalendarData();
    const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <h3 className="font-semibold text-gray-800 text-center flex-1">{monthName}</h3>
          <button
            onClick={() => navigateMonth(1)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {days.map((day, index) => (
            <div key={index} className="text-center text-xs font-medium text-gray-600 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => {
            const hasEvents = hasEventsOnDate(day);
            const isSelected = selectedDate && 
              selectedDate.getDate() === day && 
              selectedDate.getMonth() === currentDate.getMonth() && 
              selectedDate.getFullYear() === currentDate.getFullYear();
            const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();

            return (
              <div
                key={index}
                className={`text-center text-sm py-2 rounded cursor-pointer transition-all ${
                  day ? 'hover:bg-gray-100' : ''
                } ${
                  hasEvents ? 'bg-blue-50 text-blue-800 font-medium' : 'text-gray-700'
                } ${
                  isSelected ? 'bg-blue-600 text-white font-bold' : ''
                } ${
                  isToday ? 'ring-2 ring-blue-300' : ''
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day || ''}
                {hasEvents && !isSelected && (
                  <div className="w-1 h-1 bg-blue-500 rounded-full mx-auto mt-1"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Date Events */}
        {selectedDate && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">
              Events on {selectedDate.toLocaleDateString()}
            </h4>
            {getEventsForDate(selectedDate.getDate()).length > 0 ? (
              <div className="space-y-1">
                {getEventsForDate(selectedDate.getDate()).map(event => (
                  <div key={event.id} className="text-xs text-blue-700">
                    • {event.title} ({event.time})
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-blue-600">No events on this date</p>
            )}
          </div>
        )}

        {/* Clear Filters */}
        {(selectedDate || searchTerm || filterType !== "all") && (
          <div className="mt-3 text-center">
            <button
              onClick={clearFilters}
              className="text-blue-600 text-sm hover:underline flex items-center justify-center mx-auto"
            >
              <X className="w-3 h-3 mr-1" />
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    );
  };

  const EventCard = ({ event }) => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:237',message:'EventCard render',data:{eventId:event.id,eventDateType:event.date?.constructor?.name,eventDateIsDate:event.date instanceof Date,eventDateValue:event.date},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B,C'})}).catch(()=>{});
    // #endregion
    let dateString = '';
    try {
      dateString = event.date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:247',message:'EventCard date formatted',data:{dateString},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
    } catch (dateError) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/ff30ee0a-eb10-4559-b853-779dc0ceea0c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'NewsEventsPage.jsx:250',message:'EventCard date error',data:{error:dateError.message,eventDateType:event.date?.constructor?.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      dateString = 'Invalid date';
    }
    return (
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-800 flex-1">{event.title}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${
              event.price === "Free" 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {event.price}
            </span>
          </div>
          <div className="space-y-1 text-sm text-gray-600 mb-4">
            <p className="font-medium">{dateString}</p>
            <p>{event.time}</p>
            <p className="text-xs">{event.location}</p>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center">
            Register Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    );
  };

  // Compact horizontal preview used under News tab
  const NewsCard = ({ news }) => (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-blue-600 text-sm font-semibold mb-2">{news.date}</div>
        <h3 className="font-bold text-gray-800 text-lg mb-3 line-clamp-2">{news.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.description}</p>
        <button className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700 transition-colors">
          Read more
          <ArrowRight className="w-4 h-4 ml-1" />
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
    <Layout>
      <div className="min-h-screen bg-white">

      {/* Hero Section (unified style) */}
      <section className="relative h-[60vh] overflow-hidden -mt-24">
        <img 
          src="/images/course card.jpg" 
          alt="News & Events" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto">
            <div className="text-white max-w-2xl px-8 md:px-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-left">Stay Updated</h1>
              <p className="text-lg md:text-xl">
                Catch the latest happenings, news, and events from our community. From big moments that matter - explore what's new and what's next.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                
                {/* Search and Filter Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Filters</h3>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Filter className="w-4 h-4 mr-1" />
                    {showFilters ? 'Hide' : 'Show'} Filters
                  </button>
                </div>

                <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                  {/* Search Events */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search Events</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search by title or location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Filter by Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                    <select 
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="all">All Events</option>
                      <option value="free">Free Events</option>
                      <option value="workshop">Workshops</option>
                      <option value="seminar">Seminars</option>
                      <option value="course">Courses</option>
                    </select>
                  </div>

                  {/* Active Filters Display */}
                  {(searchTerm || filterType !== "all" || selectedDate) && (
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h4 className="font-medium text-blue-800 mb-2 text-sm">Active Filters:</h4>
                      <div className="space-y-1">
                        {searchTerm && (
                          <div className="flex items-center justify-between text-xs text-blue-700">
                            <span>Search: "{searchTerm}"</span>
                            <button
                              onClick={() => setSearchTerm("")}
                              className="text-blue-500 hover:text-blue-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                        {filterType !== "all" && (
                          <div className="flex items-center justify-between text-xs text-blue-700">
                            <span>Type: {filterType}</span>
                            <button
                              onClick={() => setFilterType("all")}
                              className="text-blue-500 hover:text-blue-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                        {selectedDate && (
                          <div className="flex items-center justify-between text-xs text-blue-700">
                            <span>Date: {selectedDate.toLocaleDateString()}</span>
                            <button
                              onClick={() => setSelectedDate(null)}
                              className="text-blue-500 hover:text-blue-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* This Month Summary */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3">This Month</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Total Events - {events.length}</li>
                      <li>• Free Events - {events.filter(e => e.price === "Free").length}</li>
                      <li>• Workshops - {events.filter(e => e.type === "workshop").length}</li>
                      <li>• Seminars - {events.filter(e => e.type === "seminar").length}</li>
                    </ul>
                  </div>

                  {/* Results Count */}
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-green-800">
                      Showing {filteredEvents.length} of {events.length} events
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Events Grid */}
              <div className="lg:col-span-3">
                {filteredEvents.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
                    <p className="text-gray-600 mb-4">
                      {searchTerm || filterType !== "all" || selectedDate
                        ? "Try adjusting your filters to see more events."
                        : "No events are scheduled at the moment."}
                    </p>
                    {(searchTerm || filterType !== "all" || selectedDate) && (
                      <button
                        onClick={clearFilters}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Clear all filters
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">News & Updates</h2>
            {/* Top featured banner */}
            <div className="mb-10">
              <Reveal>
                {news[0] ? (
                  <FeaturedNewsCard news={news[0]} />
                ) : (
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm p-4 md:p-6">
                    <p className="text-gray-600">No featured news available</p>
                  </div>
                )}
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

      {/* Stay Connected Section */}
      <StayConnected />
      </div>
    </Layout>
  );
};

export default NewsEventsPage;