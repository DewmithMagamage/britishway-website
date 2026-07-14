// Data storage utility for courses, events, and news
// Uses Firebase Firestore for production-ready data persistence

import { 
  collection, 
  doc, 
  getDocs, 
  getDoc,
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  onSnapshot,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';

// Default data for initial setup
const defaultCourses = [
  {
    id: "50-day-camp",
    title: "50 Day Camp",
    description: "Intensive English learning program designed for rapid skill development. Perfect for students who want to accelerate their English proficiency in a short time.",
    instructor: "View More...",
    category: "Full Time Diplomas",
    image: "/images/cc2.jpeg"
  },
  {
    id: "weekday-2month",
    title: "Weekday Diploma - 2 Months",
    description: "Comprehensive English diploma program covering all essential language skills. Structured curriculum with practical applications and real-world scenarios.",
    instructor: "View More...",
    category: "Full Time Diplomas",
    image: "/images/cc1.jpeg"
  },
  {
    id: "weekday-3month",
    title: "Weekday Diploma - 3 Months",
    description: "Extended English diploma program with advanced modules and specialized training. Ideal for students seeking comprehensive language mastery.",
    instructor: "View More...",
    category: "Full Time Diplomas",
    image: "/images/cc1.jpeg"
  },
  {
    id: "weekend-diploma",
    title: "Weekend Diploma",
    description: "Flexible weekend program designed for working professionals. Balance your career with English language development through our structured weekend classes.",
    instructor: "View More...",
    category: "Part Time Diplomas",
    image: "/images/cc3.jpeg"
  },
  {
    id: "online-diploma",
    title: "Online English Diploma",
    description: "Modern online learning experience with interactive sessions and digital resources. Learn English from anywhere with our comprehensive online platform.",
    instructor: "View More...",
    category: "Online Courses",
    image: "/images/cc6.jpeg"
  },
  {
    id: "it-english",
    title: "IT + English Diploma",
    description: "Combined program offering both English language skills and IT fundamentals. Perfect for students looking to enhance their career prospects in technology.",
    instructor: "View More...",
    category: "Full Time Diplomas",
    image: "/images/cc5.jpeg"
  },
  {
    id: "kids-class",
    title: "Kids Class",
    description: "Fun and engaging English classes designed specifically for children. Interactive learning methods that make English enjoyable for young learners.",
    instructor: "View More...",
    category: "Kids Class",
    image: "/images/cc4.jpeg"
  },
  {
    id: "night-class",
    title: "Night Class",
    description: "Evening English classes for working adults and students. Flexible timing that fits your busy schedule while maintaining quality education.",
    instructor: "View More...",
    category: "Part Time Diplomas",
    image: "/images/cc7.jpeg"
  }
];

// Helper function to convert Firestore timestamp to Date
const convertTimestamp = (timestamp) => {
  if (!timestamp) return null;
  if (timestamp.toDate) {
    return timestamp.toDate();
  }
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }
  if (typeof timestamp === 'string') {
    return new Date(timestamp);
  }
  return new Date(timestamp);
};

// ==================== COURSES ====================

export const getCourses = async () => {
  try {
    const coursesRef = collection(db, 'courses');
    const q = query(coursesRef, orderBy('title'));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      // Initialize with default courses if collection is empty
      await initializeDefaultCourses();
      return defaultCourses;
    }
    
    const courses = [];
    querySnapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() });
    });
    
    return courses;
  } catch (error) {
    console.error('Error getting courses:', error);
    // Fallback to default courses on error
    return defaultCourses;
  }
};

// Real-time listener for courses
export const subscribeToCourses = (callback) => {
  const coursesRef = collection(db, 'courses');
  const q = query(coursesRef, orderBy('title'));
  
  return onSnapshot(q, (querySnapshot) => {
    const courses = [];
    querySnapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() });
    });
    callback(courses);
  }, (error) => {
    console.error('Error subscribing to courses:', error);
    callback(defaultCourses);
  });
};

const initializeDefaultCourses = async () => {
  try {
    const coursesRef = collection(db, 'courses');
    for (const course of defaultCourses) {
      await addDoc(coursesRef, course);
    }
  } catch (error) {
    console.error('Error initializing default courses:', error);
  }
};

export const addCourse = async (course) => {
  try {
    const coursesRef = collection(db, 'courses');
    const newCourse = {
      ...course,
      createdAt: Timestamp.now()
    };
    const docRef = await addDoc(coursesRef, newCourse);
    return { id: docRef.id, ...newCourse };
  } catch (error) {
    console.error('Error adding course:', error);
    throw error;
  }
};

export const updateCourse = async (id, updatedCourse) => {
  try {
    const courseRef = doc(db, 'courses', id);
    await updateDoc(courseRef, {
      ...updatedCourse,
      updatedAt: Timestamp.now()
    });
    return { id, ...updatedCourse };
  } catch (error) {
    console.error('Error updating course:', error);
    throw error;
  }
};

export const deleteCourse = async (id) => {
  try {
    const courseRef = doc(db, 'courses', id);
    await deleteDoc(courseRef);
    return true;
  } catch (error) {
    console.error('Error deleting course:', error);
    throw error;
  }
};

// ==================== EVENTS ====================

export const getEvents = async () => {
  try {
    const eventsRef = collection(db, 'events');
    const q = query(eventsRef, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return [];
    }
    
    const events = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      events.push({
        id: doc.id,
        ...data,
        date: convertTimestamp(data.date) || new Date(data.date)
      });
    });
    
    return events;
  } catch (error) {
    console.error('Error getting events:', error);
    return [];
  }
};

// Real-time listener for events
export const subscribeToEvents = (callback) => {
  const eventsRef = collection(db, 'events');
  const q = query(eventsRef, orderBy('date', 'desc'));
  
  return onSnapshot(q, (querySnapshot) => {
    const events = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      events.push({
        id: doc.id,
        ...data,
        date: convertTimestamp(data.date) || new Date(data.date)
      });
    });
    callback(events);
  }, (error) => {
    console.error('Error subscribing to events:', error);
    callback([]);
  });
};

export const addEvent = async (event) => {
  try {
    const eventsRef = collection(db, 'events');
    const eventDate = event.date instanceof Date 
      ? Timestamp.fromDate(event.date) 
      : Timestamp.fromDate(new Date(event.date));
    
    const newEvent = {
      ...event,
      date: eventDate,
      status: event.status || "active",
      createdAt: Timestamp.now()
    };
    
    const docRef = await addDoc(eventsRef, newEvent);
    return { 
      id: docRef.id, 
      ...newEvent, 
      date: convertTimestamp(newEvent.date) 
    };
  } catch (error) {
    console.error('Error adding event:', error);
    throw error;
  }
};

export const updateEvent = async (id, updatedEvent) => {
  try {
    const eventRef = doc(db, 'events', id);
    const eventDate = updatedEvent.date instanceof Date 
      ? Timestamp.fromDate(updatedEvent.date) 
      : Timestamp.fromDate(new Date(updatedEvent.date));
    
    await updateDoc(eventRef, {
      ...updatedEvent,
      date: eventDate,
      updatedAt: Timestamp.now()
    });
    
    return { 
      id, 
      ...updatedEvent, 
      date: convertTimestamp(eventDate) 
    };
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    const eventRef = doc(db, 'events', id);
    await deleteDoc(eventRef);
    return true;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};

// ==================== NEWS ====================

export const getNews = async () => {
  try {
    const newsRef = collection(db, 'news');
    const q = query(newsRef, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return [];
    }
    
    const news = [];
    querySnapshot.forEach((doc) => {
      news.push({ id: doc.id, ...doc.data() });
    });
    
    return news;
  } catch (error) {
    console.error('Error getting news:', error);
    return [];
  }
};

// Real-time listener for news
export const subscribeToNews = (callback) => {
  const newsRef = collection(db, 'news');
  const q = query(newsRef, orderBy('date', 'desc'));
  
  return onSnapshot(q, (querySnapshot) => {
    const news = [];
    querySnapshot.forEach((doc) => {
      news.push({ id: doc.id, ...doc.data() });
    });
    callback(news);
  }, (error) => {
    console.error('Error subscribing to news:', error);
    callback([]);
  });
};

export const addNews = async (newsItem) => {
  try {
    const newsRef = collection(db, 'news');
    const newNews = {
      ...newsItem,
      featured: newsItem.featured || false,
      status: newsItem.status || "published",
      createdAt: Timestamp.now()
    };
    const docRef = await addDoc(newsRef, newNews);
    return { id: docRef.id, ...newNews };
  } catch (error) {
    console.error('Error adding news:', error);
    throw error;
  }
};

export const updateNews = async (id, updatedNews) => {
  try {
    const newsRef = doc(db, 'news', id);
    await updateDoc(newsRef, {
      ...updatedNews,
      updatedAt: Timestamp.now()
    });
    return { id, ...updatedNews };
  } catch (error) {
    console.error('Error updating news:', error);
    throw error;
  }
};

export const deleteNews = async (id) => {
  try {
    const newsRef = doc(db, 'news', id);
    await deleteDoc(newsRef);
    return true;
  } catch (error) {
    console.error('Error deleting news:', error);
    throw error;
  }
};
