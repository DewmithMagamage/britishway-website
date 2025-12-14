// Firebase service for courses, events, and news
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  onSnapshot,
  Timestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';

// ==================== COURSES SERVICE ====================

export const getCourses = async () => {
  try {
    const coursesRef = collection(db, 'courses');
    const q = query(coursesRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const courses = [];
    querySnapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() });
    });
    return courses;
  } catch (error) {
    console.error('Error getting courses:', error);
    // Fallback to localStorage if Firebase fails
    const stored = localStorage.getItem('britishway_courses');
    return stored ? JSON.parse(stored) : [];
  }
};

export const subscribeToCourses = (callback) => {
  const coursesRef = collection(db, 'courses');
  const q = query(coursesRef, orderBy('createdAt', 'desc'));
  
  return onSnapshot(q, (querySnapshot) => {
    const courses = [];
    querySnapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() });
    });
    callback(courses);
  }, (error) => {
    console.error('Error subscribing to courses:', error);
    // Fallback to localStorage
    const stored = localStorage.getItem('britishway_courses');
    callback(stored ? JSON.parse(stored) : []);
  });
};

export const addCourse = async (courseData) => {
  try {
    const coursesRef = collection(db, 'courses');
    const newCourse = {
      ...courseData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };
    const docRef = await addDoc(coursesRef, newCourse);
    return { id: docRef.id, ...courseData };
  } catch (error) {
    console.error('Error adding course:', error);
    throw error;
  }
};

export const updateCourse = async (id, courseData) => {
  try {
    const courseRef = doc(db, 'courses', id);
    await updateDoc(courseRef, {
      ...courseData,
      updatedAt: Timestamp.now()
    });
    return { id, ...courseData };
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

// ==================== EVENTS SERVICE ====================

export const getEvents = async () => {
  try {
    const eventsRef = collection(db, 'events');
    const q = query(eventsRef, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);
    const events = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      events.push({
        id: doc.id,
        ...data,
        date: data.date?.toDate ? data.date.toDate() : new Date(data.date)
      });
    });
    return events;
  } catch (error) {
    console.error('Error getting events:', error);
    // Fallback to localStorage
    const stored = localStorage.getItem('britishway_events');
    if (stored) {
      const events = JSON.parse(stored);
      return events.map(event => ({
        ...event,
        date: new Date(event.date)
      }));
    }
    return [];
  }
};

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
        date: data.date?.toDate ? data.date.toDate() : new Date(data.date)
      });
    });
    callback(events);
  }, (error) => {
    console.error('Error subscribing to events:', error);
    const stored = localStorage.getItem('britishway_events');
    if (stored) {
      const events = JSON.parse(stored);
      callback(events.map(event => ({
        ...event,
        date: new Date(event.date)
      })));
    } else {
      callback([]);
    }
  });
};

export const addEvent = async (eventData) => {
  try {
    const eventsRef = collection(db, 'events');
    const eventDate = eventData.date instanceof Date 
      ? Timestamp.fromDate(eventData.date) 
      : Timestamp.fromDate(new Date(eventData.date));
    const newEvent = {
      ...eventData,
      date: eventDate,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };
    const docRef = await addDoc(eventsRef, newEvent);
    return { id: docRef.id, ...newEvent, date: eventData.date instanceof Date ? eventData.date : new Date(eventData.date) };
  } catch (error) {
    console.error('Error adding event:', error);
    throw error;
  }
};

export const updateEvent = async (id, eventData) => {
  try {
    const eventRef = doc(db, 'events', id);
    const eventDate = eventData.date instanceof Date 
      ? Timestamp.fromDate(eventData.date) 
      : Timestamp.fromDate(new Date(eventData.date));
    const updateData = {
      ...eventData,
      date: eventDate,
      updatedAt: Timestamp.now()
    };
    await updateDoc(eventRef, updateData);
    return { id, ...eventData, date: eventData.date instanceof Date ? eventData.date : new Date(eventData.date) };
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

// ==================== NEWS SERVICE ====================

export const getNews = async () => {
  try {
    const newsRef = collection(db, 'news');
    const q = query(newsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const news = [];
    querySnapshot.forEach((doc) => {
      news.push({ id: doc.id, ...doc.data() });
    });
    return news;
  } catch (error) {
    console.error('Error getting news:', error);
    // Fallback to localStorage
    const stored = localStorage.getItem('britishway_news');
    return stored ? JSON.parse(stored) : [];
  }
};

export const subscribeToNews = (callback) => {
  const newsRef = collection(db, 'news');
  const q = query(newsRef, orderBy('createdAt', 'desc'));
  
  return onSnapshot(q, (querySnapshot) => {
    const news = [];
    querySnapshot.forEach((doc) => {
      news.push({ id: doc.id, ...doc.data() });
    });
    callback(news);
  }, (error) => {
    console.error('Error subscribing to news:', error);
    const stored = localStorage.getItem('britishway_news');
    callback(stored ? JSON.parse(stored) : []);
  });
};

export const addNews = async (newsData) => {
  try {
    const newsRef = collection(db, 'news');
    const newNews = {
      ...newsData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };
    const docRef = await addDoc(newsRef, newNews);
    return { id: docRef.id, ...newsData };
  } catch (error) {
    console.error('Error adding news:', error);
    throw error;
  }
};

export const updateNews = async (id, newsData) => {
  try {
    const newsRef = doc(db, 'news', id);
    await updateDoc(newsRef, {
      ...newsData,
      updatedAt: Timestamp.now()
    });
    return { id, ...newsData };
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

// ==================== FORM SUBMISSIONS SERVICE ====================

export const getFormSubmissions = async () => {
  try {
    const submissionsRef = collection(db, 'formSubmissions');
    const q = query(submissionsRef, orderBy('submittedAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const submissions = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      submissions.push({
        id: doc.id,
        ...data,
        submittedAt: data.submittedAt?.toDate ? data.submittedAt.toDate().toISOString() : data.submittedAt
      });
    });
    return submissions;
  } catch (error) {
    console.error('Error getting form submissions:', error);
    // Fallback to localStorage if Firebase fails
    const stored = localStorage.getItem('formSubmissions');
    return stored ? JSON.parse(stored) : [];
  }
};

export const subscribeToFormSubmissions = (callback) => {
  const submissionsRef = collection(db, 'formSubmissions');
  const q = query(submissionsRef, orderBy('submittedAt', 'desc'));
  
  return onSnapshot(q, (querySnapshot) => {
    const submissions = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      submissions.push({
        id: doc.id,
        ...data,
        submittedAt: data.submittedAt?.toDate ? data.submittedAt.toDate().toISOString() : data.submittedAt
      });
    });
    callback(submissions);
  }, (error) => {
    console.error('Error subscribing to form submissions:', error);
    // Fallback to localStorage
    const stored = localStorage.getItem('formSubmissions');
    callback(stored ? JSON.parse(stored) : []);
  });
};

export const addFormSubmission = async (submissionData) => {
  try {
    const submissionsRef = collection(db, 'formSubmissions');
    const newSubmission = {
      ...submissionData,
      submittedAt: Timestamp.now(),
      createdAt: Timestamp.now()
    };
    const docRef = await addDoc(submissionsRef, newSubmission);
    return { 
      id: docRef.id, 
      ...submissionData,
      submittedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error adding form submission:', error);
    throw error;
  }
};

export const deleteFormSubmission = async (id) => {
  try {
    const submissionRef = doc(db, 'formSubmissions', id);
    await deleteDoc(submissionRef);
    return true;
  } catch (error) {
    console.error('Error deleting form submission:', error);
    throw error;
  }
};

