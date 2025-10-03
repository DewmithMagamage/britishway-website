import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Programmes from "./components/Programmes";
import About from "./components/About";
import JoinCourses from "./components/JoinCourses";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import Events from "./components/Events";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <Layout>
      <div className="w-full overflow-hidden bg-white text-gray-900">
        <Hero />
        <Partners />
        <Programmes />
        <About />
        <JoinCourses />
        <Testimonials />
        <News />
        <Events />
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
