import React from "react";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const Events = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  
  // Generate calendar days for February 2025
  const calendarDays = [];
  const daysInMonth = 28; // February 2025 has 28 days
  const firstDayOfWeek = 6; // February 1, 2025 is a Saturday
  
  // Add empty cells for days before the first of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <section className="py-16 px-8 max-w-6xl mx-auto">
      {/* Upcoming Events Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-sm tracking-wide uppercase text-gray-500 mb-2">Upcoming</h2>
            <h3 className="text-3xl font-bold">Events</h3>
          </div>
          <button className="flex items-center text-blue-600 hover:text-blue-700">
            <span className="mr-2">View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-sm text-gray-500 font-medium">21ST NOVEMBER</span>
            </div>
            <h4 className="text-xl font-bold mb-4">AGM 2025</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              On November 21st, 2025, British Way English Academy will host its Annual General Meeting, 
              bringing together our leadership team, staff, and stakeholders to reflect on the year's 
              achievements and outline our vision for the future. The event will serve as a platform 
              to celebrate milestones, strengthen our shared mission, and set strategic goals to further 
              our commitment to excellence in English education across Sri Lanka.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-colors">
              READ MORE
            </button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-semibold">Event Calendar</h4>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium">{currentMonth}</span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <div 
                  key={index} 
                  className={`text-center text-sm py-2 rounded ${
                    day ? 'hover:bg-gray-100 cursor-pointer' : ''
                  }`}
                >
                  {day || ''}
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center text-gray-500 text-sm">
              NO EVENTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
