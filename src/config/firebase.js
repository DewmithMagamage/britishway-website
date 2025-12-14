// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS_2wWpJ9ssHAFtZaqpTVTSYTaxUj_quI",
  authDomain: "britishway-website.firebaseapp.com",
  projectId: "britishway-website",
  storageBucket: "britishway-website.firebasestorage.app",
  messagingSenderId: "537962975334",
  appId: "1:537962975334:web:ee2e8bce93eb7ca9fa1da7",
  measurementId: "G-MTVENWZ0Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.warn('Analytics initialization failed:', error);
  }
}

export { analytics };
export default app;
