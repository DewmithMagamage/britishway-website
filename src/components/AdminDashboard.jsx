import React, { useState, useEffect } from "react";
import { useFormContext } from "../context/FormContext";
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  ArrowDownTrayIcon,
  ChartBarIcon,
  UsersIcon,
  CalendarIcon,
  NewspaperIcon,
  CogIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";
import ExcelJS from "exceljs";

const AdminDashboard = () => {
  const { formSubmissions, deleteFormSubmission } = useFormContext();
  const [activeTab, setActiveTab] = useState('overview');
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editingNews, setEditingNews] = useState(null);

  // Sample data - in real app, this would come from API
  useEffect(() => {
    // Load sample data
    setEvents([
      {
        id: 1,
        title: "Business English Workshop",
        date: "2025-02-15",
        time: "9:30 AM - 12:30 PM",
        location: "Main Conference Hall",
        description: "Learn advanced business communication skills",
        image: "/images/course card.jpg",
        status: "active"
      },
      {
        id: 2,
        title: "IELTS Preparation Course",
        date: "2025-02-20",
        time: "2:00 PM - 5:00 PM",
        location: "Room 101",
        description: "Comprehensive IELTS exam preparation",
        image: "/images/course card.jpg",
        status: "active"
      }
    ]);

    setNews([
      {
        id: 1,
        title: "CONVOCATION CEREMONY 2025",
        date: "2025-01-21",
        description: "On July 21st, 2025, British Way English Academy proudly celebrated its Convocation Ceremony at the BMICH...",
        image: "/images/Stu 01.png",
        featured: true,
        status: "published"
      }
    ]);

    // Form submissions are now managed by context
  }, []);

  const handleExportExcel = async () => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Form Submissions");

  if (formSubmissions.length > 0) {
    const headers = Object.keys(formSubmissions[0]);
    worksheet.addRow(headers);

    formSubmissions.forEach((item) => {
      worksheet.addRow(Object.values(item));
    });
  }

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "form_submissions.xlsx";
  a.click();
  window.URL.revokeObjectURL(url);
};

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleDeleteNews = (id) => {
    setNews(news.filter(newsItem => newsItem.id !== id));
  };

  const handleDeleteSubmission = (id) => {
    deleteFormSubmission(id);
  };

  const OverviewTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <UsersIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-semibold text-gray-900">1,247</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CalendarIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Events</p>
              <p className="text-2xl font-semibold text-gray-900">{events.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <NewspaperIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">News Articles</p>
              <p className="text-2xl font-semibold text-gray-900">{news.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <ChartBarIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Form Submissions</p>
              <p className="text-2xl font-semibold text-gray-900">{formSubmissions.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Form Submissions</h3>
          <div className="space-y-3">
            {formSubmissions.slice(0, 5).map((submission) => (
              <div key={submission.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{submission.name}</p>
                  <p className="text-sm text-gray-600">{submission.course} - {submission.branch}</p>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(submission.submittedAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{event.title}</p>
                  <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                </div>
                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const EventsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Events Management</h2>
        <button
          onClick={() => setShowEventModal(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Event
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-lg object-cover" src={event.image} alt={event.title} />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{event.title}</div>
                      <div className="text-sm text-gray-500">{event.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {event.date} at {event.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {event.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    event.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {event.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteEvent(event.id)}>
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const NewsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">News Management</h2>
        <button
          onClick={() => setShowNewsModal(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add News
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Article</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {news.map((newsItem) => (
              <tr key={newsItem.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-lg object-cover" src={newsItem.image} alt={newsItem.title} />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{newsItem.title}</div>
                      <div className="text-sm text-gray-500">{newsItem.description.substring(0, 100)}...</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {newsItem.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    newsItem.featured ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {newsItem.featured ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    newsItem.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {newsItem.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteNews(newsItem.id)}>
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const FormSubmissionsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Form Submissions</h2>
        <button
          onClick={handleExportExcel}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
          Export to Excel
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {formSubmissions.map((submission) => (
              <tr key={submission.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {submission.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {submission.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {submission.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {submission.course}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {submission.branch}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(submission.submittedAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <EyeIcon className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900" onClick={() => handleDeleteSubmission(submission.id)}>
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-6">
        {/* Admin Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Manage your website content and data</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900">
                  <CogIcon className="h-5 w-5 mr-2" />
                  Settings
                </button>
                <button className="flex items-center px-4 py-2 text-red-600 hover:text-red-900" onClick={() => { localStorage.removeItem('admin_authed'); window.location.href = '/admin/login'; }}>
                  <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', name: 'Overview', icon: ChartBarIcon },
                { id: 'events', name: 'Events', icon: CalendarIcon },
                { id: 'news', name: 'News', icon: NewspaperIcon },
                { id: 'submissions', name: 'Form Submissions', icon: UsersIcon }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'events' && <EventsTab />}
          {activeTab === 'news' && <NewsTab />}
          {activeTab === 'submissions' && <FormSubmissionsTab />}
        </div>
      </div>
  );
};

export default AdminDashboard;
