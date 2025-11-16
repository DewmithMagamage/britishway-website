
import React from "react";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-0 pb-12 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-9 items-center">
      <div className="flex flex-col justify-center">
        <h2 className="text-sm tracking-wide uppercase text-gray-500 mb-2">A Bit</h2>
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="text-gray-600 mb-6">
        For over 20 years, British Way English Academy has been the staple of English Training Institutions.
        With over 14 branches Island-wide, and a growing amount of over 21,000 diplomats each passing year, our team of exemplary lecturers and teachers are filled with passion to unlock the unlimited potential of each and every one of our students.
        </p>
        <button
          className="px-4 py-2 w-fit bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
          onClick={() => navigate('/about')}
        >Explore More</button>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/images/aboutus.png"
          alt="About"
          className="w-full max-w-lg h-auto object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

export default About;
