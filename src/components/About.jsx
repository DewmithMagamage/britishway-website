
import React from "react";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-sm tracking-wide uppercase text-gray-500 mb-2">A Bit</h2>
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="text-gray-600 mb-6">
        For over 20 years, British Way English Academy has been the staple of English Training Institutions.
        With over 14 branches Island-wide, and a growing amount of over 21,000 diplomats each passing year, our team of exemplary lecturers and teachers are filled with passion to unlock the unlimited potential of each and every one of our students.
        </p>
        <button
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700"
          onClick={() => navigate('/about')}
        >Explore More</button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <img src="/images/aboutus.png" alt="About 1" />
      </div>
    </section>
  );
};

export default About;
