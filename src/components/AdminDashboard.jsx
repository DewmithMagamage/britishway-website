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
  ArrowRightOnRectangleIcon,
  AcademicCapIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import ExcelJS from "exceljs";
import {
  getCourses, addCourse, updateCourse, deleteCourse,
  getEvents, addEvent, updateEvent, deleteEvent,
  getNews, addNews, updateNews, deleteNews,
  subscribeToCourses, subscribeToEvents, subscribeToNews
} from "../utils/dataStorage";

const AdminDashboard = () => {
  const { formSubmissions, deleteFormSubmission } = useFormContext();
  const [activeTab, setActiveTab] = useState('overview');
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  
  // Modal states
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editingNews, setEditingNews] = useState(null);

  // Form states
  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    instructor: "View More...",
    category: "Full Time Diplomas",
    image: ""
  });
  const [eventForm, setEventForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    image: "",
    type: "free",
    price: "Free",
    status: "active"
  });
  const [newsForm, setNewsForm] = useState({
    title: "",
    date: "",
    description: "",
    image: "",
    featured: false,
    status: "published"
  });

  // Load data from Firebase with real-time updates
  useEffect(() => {
    loadData();
    
    // Subscribe to real-time updates
    const unsubscribeCourses = subscribeToCourses((coursesData) => {
      setCourses(coursesData);
    });
    
    const unsubscribeEvents = subscribeToEvents((eventsData) => {
      setEvents(eventsData);
    });
    
    const unsubscribeNews = subscribeToNews((newsData) => {
      setNews(newsData);
    });
    
    return () => {
      unsubscribeCourses();
      unsubscribeEvents();
      unsubscribeNews();
    };
  }, []);

  const loadData = async () => {
    try {
      const [coursesData, eventsData, newsData] = await Promise.all([
        getCourses(),
        getEvents(),
        getNews()
      ]);
      setCourses(coursesData);
      setEvents(eventsData);
      setNews(newsData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  // Course handlers
  const handleAddCourse = () => {
    setEditingCourse(null);
    setCourseForm({
      title: "",
      description: "",
      instructor: "View More...",
      category: "Full Time Diplomas",
      image: ""
    });
    setShowCourseModal(true);
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setCourseForm({ ...course });
    setShowCourseModal(true);
  };

  const handleSaveCourse = async () => {
    try {
      if (editingCourse) {
        await updateCourse(editingCourse.id, courseForm);
      } else {
        await addCourse(courseForm);
      }
      setShowCourseModal(false);
      setEditingCourse(null);
    } catch (error) {
      console.error('Error saving course:', error);
      alert('Error saving course. Please try again.');
    }
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await deleteCourse(id);
      } catch (error) {
        console.error('Error deleting course:', error);
        alert('Error deleting course. Please try again.');
      }
    }
  };

  // Event handlers
  const handleAddEvent = () => {
    setEditingEvent(null);
    setEventForm({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      image: "",
      type: "free",
      price: "Free",
      status: "active"
    });
    setShowEventModal(true);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    const dateStr = event.date instanceof Date 
      ? event.date.toISOString().split('T')[0] 
      : event.date.split('T')[0];
    setEventForm({ ...event, date: dateStr });
    setShowEventModal(true);
  };

  const handleSaveEvent = async () => {
    try {
      if (editingEvent) {
        await updateEvent(editingEvent.id, eventForm);
      } else {
        await addEvent(eventForm);
      }
      setShowEventModal(false);
      setEditingEvent(null);
    } catch (error) {
      console.error('Error saving event:', error);
      alert('Error saving event. Please try again.');
    }
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await deleteEvent(id);
      } catch (error) {
        console.error('Error deleting event:', error);
        alert('Error deleting event. Please try again.');
      }
    }
  };

  // News handlers
  const handleAddNews = () => {
    setEditingNews(null);
    setNewsForm({
      title: "",
      date: "",
      description: "",
      image: "",
      featured: false,
      status: "published"
    });
    setShowNewsModal(true);
  };

  const handleEditNews = (newsItem) => {
    setEditingNews(newsItem);
    setNewsForm({ ...newsItem });
    setShowNewsModal(true);
  };

  const handleSaveNews = async () => {
    try {
      if (editingNews) {
        await updateNews(editingNews.id, newsForm);
      } else {
        await addNews(newsForm);
      }
      setShowNewsModal(false);
      setEditingNews(null);
    } catch (error) {
      console.error('Error saving news:', error);
      alert('Error saving news. Please try again.');
    }
  };

  const handleDeleteNews = async (id) => {
    if (window.confirm("Are you sure you want to delete this news article?")) {
      try {
        await deleteNews(id);
      } catch (error) {
        console.error('Error deleting news:', error);
        alert('Error deleting news. Please try again.');
      }
    }
  };

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
              <AcademicCapIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Courses</p>
              <p className="text-2xl font-semibold text-gray-900">{courses.length}</p>
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
                  <p className="text-sm text-gray-600">
                    {event.date instanceof Date ? event.date.toLocaleDateString() : event.date} at {event.time}
                  </p>
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

  const CoursesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Courses Management</h2>
        <button
          onClick={handleAddCourse}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Course
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-lg object-cover" src={course.image} alt={course.title} />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{course.title}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {course.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-md">
                  <div className="truncate">{course.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button 
                    onClick={() => handleEditCourse(course)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDeleteCourse(course.id)}
                    className="text-red-600 hover:text-red-900"
                  >
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

  const EventsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Events Management</h2>
        <button
          onClick={handleAddEvent}
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
                  {event.date instanceof Date ? event.date.toLocaleDateString() : event.date} at {event.time}
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
                  <button 
                    onClick={() => handleEditEvent(event)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDeleteEvent(event.id)}
                    className="text-red-600 hover:text-red-900"
                  >
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
          onClick={handleAddNews}
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
                  <button 
                    onClick={() => handleEditNews(newsItem)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDeleteNews(newsItem.id)}
                    className="text-red-600 hover:text-red-900"
                  >
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
                  <button 
                    onClick={() => handleDeleteSubmission(submission.id)}
                    className="text-red-600 hover:text-red-900"
                  >
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

  // Modal Components
  const CourseModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingCourse ? "Edit Course" : "Add New Course"}
          </h2>
          <button onClick={() => setShowCourseModal(false)} className="text-gray-500 hover:text-gray-700">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={courseForm.title}
              onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={courseForm.description}
              onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={courseForm.category}
              onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Full Time Diplomas">Full Time Diplomas</option>
              <option value="Part Time Diplomas">Part Time Diplomas</option>
              <option value="Kids Class">Kids Class</option>
              <option value="Online Courses">Online Courses</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              value={courseForm.image}
              onChange={(e) => setCourseForm({ ...courseForm, image: e.target.value })}
              placeholder="/images/course.jpg"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              onClick={() => setShowCourseModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveCourse}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {editingCourse ? "Update" : "Add"} Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const EventModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingEvent ? "Edit Event" : "Add New Event"}
          </h2>
          <button onClick={() => setShowEventModal(false)} className="text-gray-500 hover:text-gray-700">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={eventForm.title}
              onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={eventForm.date}
                onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input
                type="text"
                value={eventForm.time}
                onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                placeholder="9:30 AM - 12:30 PM"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              value={eventForm.location}
              onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={eventForm.description}
              onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={eventForm.type}
                onChange={(e) => setEventForm({ ...eventForm, type: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="free">Free</option>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
                <option value="course">Course</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <input
                type="text"
                value={eventForm.price}
                onChange={(e) => setEventForm({ ...eventForm, price: e.target.value })}
                placeholder="Free or Rs. 1,000"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              value={eventForm.image}
              onChange={(e) => setEventForm({ ...eventForm, image: e.target.value })}
              placeholder="/images/event.jpg"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={eventForm.status}
              onChange={(e) => setEventForm({ ...eventForm, status: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              onClick={() => setShowEventModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveEvent}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {editingEvent ? "Update" : "Add"} Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const NewsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingNews ? "Edit News" : "Add New News"}
          </h2>
          <button onClick={() => setShowNewsModal(false)} className="text-gray-500 hover:text-gray-700">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={newsForm.title}
              onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="text"
              value={newsForm.date}
              onChange={(e) => setNewsForm({ ...newsForm, date: e.target.value })}
              placeholder="July 21, 2025"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={newsForm.description}
              onChange={(e) => setNewsForm({ ...newsForm, description: e.target.value })}
              rows={6}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              value={newsForm.image}
              onChange={(e) => setNewsForm({ ...newsForm, image: e.target.value })}
              placeholder="/images/news.jpg"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={newsForm.featured}
                  onChange={(e) => setNewsForm({ ...newsForm, featured: e.target.checked })}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">Featured</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={newsForm.status}
                onChange={(e) => setNewsForm({ ...newsForm, status: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              onClick={() => setShowNewsModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveNews}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {editingNews ? "Update" : "Add"} News
            </button>
          </div>
        </div>
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
              <button 
                className="flex items-center px-4 py-2 text-red-600 hover:text-red-900" 
                onClick={() => { 
                  localStorage.removeItem('admin_authed'); 
                  window.location.href = '/admin/login'; 
                }}
              >
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
              { id: 'courses', name: 'Courses', icon: AcademicCapIcon },
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
        {activeTab === 'courses' && <CoursesTab />}
        {activeTab === 'events' && <EventsTab />}
        {activeTab === 'news' && <NewsTab />}
        {activeTab === 'submissions' && <FormSubmissionsTab />}
      </div>

      {/* Modals */}
      {showCourseModal && <CourseModal />}
      {showEventModal && <EventModal />}
      {showNewsModal && <NewsModal />}
    </div>
  );
};

export default AdminDashboard;
