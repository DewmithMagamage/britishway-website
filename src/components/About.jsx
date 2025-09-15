import React from "react";

const About = () => {
  return (
    <section className="py-16 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-sm tracking-wide uppercase text-gray-500 mb-2">A Bit</h2>
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="text-gray-600 mb-6">
          For over 20 years, British Way English Academy has been Sri Lanka’s largest English training institute, 
          with 14 branches and over 21,000 diplomates annually. Guided by a passionate, qualified team, 
          we believe every student has unlimited potential and we’re here to unlock it.
        </p>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700">Explore More</button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <img src="/images/aboutus.png" alt="About 1" />
      </div>
    </section>
  );
};

export default About;
