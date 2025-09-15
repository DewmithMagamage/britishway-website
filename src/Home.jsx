import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Programmes from "./components/Programmes";
import About from "./components/About";
import JoinCourses from "./components/JoinCourses";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-white text-gray-900">
      <Header />
      <Hero />
      <Partners />
      <Programmes />
      <About />
      <JoinCourses />
      <Testimonials />
      <News />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
