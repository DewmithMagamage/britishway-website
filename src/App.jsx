import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./components/AboutPage";
import BranchesPage from "./components/BranchesPage";
import BranchPage from "./components/BranchPage";
import NewsEventsPage from "./components/NewsEventsPage";
import CoursesPage from "./components/CoursesPage";
import ContactUsPage from "./components/ContactUsPage";

function App() {
  return (
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
  );
}

export default App;
