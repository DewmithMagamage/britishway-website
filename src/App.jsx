import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./components/AboutPage";
import BranchesPage from "./components/BranchesPage";
import BranchPage from "./components/BranchPage";
import NewsEventsPage from "./components/NewsEventsPage";
import CoursesPage from "./components/CoursesPage";
import ContactUsPage from "./components/ContactUsPage";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload any necessary resources here
    // For now, we'll just show the splash screen for a few seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Show splash screen for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/branches" element={<BranchesPage />} />
            <Route path="/branch/:branchId" element={<BranchPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
