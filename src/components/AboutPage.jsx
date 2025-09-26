import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Reveal from "./Reveal";

const Stat = ({ icon, value, label }) => (
  <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white shadow-md">
    <div className="w-9 h-9 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-700 font-bold">
      {icon}
    </div>
    <div>
      <div className="text-xl font-semibold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  </div>
);

const AboutPage = () => {
  const awards = [
    { image: 'Awards IMG.png', name: 'Educational Excellence Award' },
    { image: 'ISO Cetificate.png', name: 'ISO Certification' },
    { image: 'best english academy.png', name: 'Best English Academy' },
    { image: 'massco 2016.png', name: 'MASSCO Award 2016' },
    { image: 'massco 2017.png', name: 'MASSCO Award 2017' },
    { image: 'SLIM.png', name: 'SLIM Brand Excellence' }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src="/images/aboutus.png" 
          alt="About Us" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="text-white max-w-3xl p-8 mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              For over two decades, British Way English Academy has been shaping futures with trusted language education.
            </p>
          </div>
        </div>
      </section>

      {/* Intro + Gallery + Stats */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <Reveal as="div" variant="slide-right">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
            <p>
              This is where your dreams of perfecting your English language skills come true. British Way English Academy is the best of its kind to bring the prime standards in English Language Skills training.
            </p>
            <p>
              The range of courses at British Way ensures customized learning opportunities for every student enrolling with us with 20+ years of experience as well as with the dynamic, professional and qualified team of lecturers.
            </p>
            <p>
              Annually, the 16 branches of the academy around the country produce over 21,000 Diploma holders who are ready to enter the global environment and the job market with the competency in English and other communication skills.
            </p>
          </div>

          {/* Stats pill */}
          <div className="mt-6 rounded-2xl bg-white shadow-lg p-4 grid grid-cols-3 gap-3 max-w-md">
            <Stat icon={"21+"} value="21+" label="Years Of Experience" />
            <Stat icon={"1M"} value="1M" label="Students" />
            <Stat icon={"14"} value="14" label="Branches" />
          </div>
        </Reveal>

        {/* Image collage to match design shapes */}
        <Reveal className="relative w-full flex items-start justify-center" variant="slide-left">
          <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[520px]">
            {/* Main image */}
            <img
              src="/images/course card.jpg"
              alt="Students"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
            {/* Overlay small image bottom-right */}
            <img
              src="/images/Stu 01.png"
              alt="Speaker"
              className="absolute -bottom-6 -right-6 w-28 h-28 object-cover rounded-xl shadow-lg"
            />
            {/* Top small image */}
            <img
              src="/images/Stu 02.jpeg"
              alt="Class"
              className="absolute -top-6 -right-10 w-28 h-20 object-cover rounded-xl shadow-lg"
            />
          </div>
        </Reveal>
      </section>

      {/* Vision & Mission with center divider and ash gradient background */}
      <section className="mt-12 py-16 bg-gradient-to-b from-white via-gray-300 to-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <Reveal className="md:border-r md:border-gray-300 md:pr-12" variant="fade-up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-xs text-gray-500 mb-5">To be the most respected provider of English language training in Asia by 2030</p>
            <p className="text-gray-700 leading-relaxed text-sm">
              We aim to provide world-class English language learning experiences that transform lives, helping learners unlock their full potential in academia and the workplace.
            </p>
          </Reveal>
          <Reveal className="md:pl-12" variant="fade-up" delay={120}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              We deliver affordable, high-quality English language courses through innovative, assessment-driven programmes taught by a highly qualified team. We equip our students with valuable life skills, confidence, and global competencies to realize their dreams.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500" />
            
            {/* Timeline Items */}
            <Reveal>
              <div className="flex items-center justify-between mb-8 relative">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2004</h3>
                    <p className="text-gray-600">The first British Way branch opened in Nittambuwa. The first class only had 7 students. As they say, from small acorns, mighty oak trees grow.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                <div className="w-5/12" />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex items-center justify-between mb-8 relative flex-row-reverse">
                <div className="w-5/12 text-left pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2007</h3>
                    <p className="text-gray-600">Kiribathgoda branch opened.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                <div className="w-5/12" />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex items-center justify-between mb-8 relative">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2009</h3>
                    <p className="text-gray-600">Negombo branch was established.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                <div className="w-5/12" />
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex items-center justify-between mb-8 relative flex-row-reverse">
                <div className="w-5/12 text-left pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2011</h3>
                    <p className="text-gray-600">A busy year! Two branches were opened: Kandy and Nugegoda.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                <div className="w-5/12" />
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center justify-between mb-8 relative">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2012</h3>
                    <p className="text-gray-600">British way went from strength to strength. 3 branches were established: Matara, Galle and Anuradhapura.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                <div className="w-5/12" />
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex items-center justify-between mb-8 relative flex-row-reverse">
                <div className="w-5/12 text-left pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2013</h3>
                    <p className="text-gray-600">Gampaha branch was established.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                <div className="w-5/12" />
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex items-center justify-between mb-8 relative">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2015</h3>
                    <p className="text-gray-600">Rathnapura branch opened.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                <div className="w-5/12" />
              </div>
            </Reveal>

            <Reveal delay={700}>
              <div className="flex items-center justify-between mb-8 relative flex-row-reverse">
                <div className="w-5/12 text-left pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2016</h3>
                    <p className="text-gray-600">Our first Tamil branch in Jaffna opened its doors. Also, NR'S Campus was established in Gampaha.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                <div className="w-5/12" />
              </div>
            </Reveal>

            <Reveal delay={800}>
              <div className="flex items-center justify-between mb-8 relative">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">2016</h3>
                    <p className="text-gray-600">BWEA won the award for the Best English Academy in the world at UNESCO's 7th World Scientific Congress in Geneva. Our first MASSCO Award for Best English Academy came this year.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                <div className="w-5/12" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>



      {/* Awards Infinite Carousel */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <Reveal variant="fade-up">
          <h3 className="text-center text-2xl font-bold text-gray-800 mb-8">Awards and Appreciations</h3>
        </Reveal>
        
        <Reveal variant="fade-up" delay={200}>
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of awards */}
              {awards.map((award, idx) => (
                <div key={`first-${idx}`} className="flex-shrink-0 mx-8">
                  <div className="flex flex-col items-center">
                    <img 
                      src={`/images/${award.image}`} 
                      alt={award.name} 
                      className="h-32 w-auto object-contain hover:scale-110 transition-transform duration-300" 
                    />
                    <p className="mt-2 text-sm font-medium text-gray-700 text-center">{award.name}</p>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {awards.map((award, idx) => (
                <div key={`second-${idx}`} className="flex-shrink-0 mx-8">
                  <div className="flex flex-col items-center">
                    <img 
                      src={`/images/${award.image}`} 
                      alt={award.name} 
                      className="h-32 w-auto object-contain hover:scale-110 transition-transform duration-300" 
                    />
                    <p className="mt-2 text-sm font-medium text-gray-700 text-center">{award.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      

{/* Chairman Message Image */}
<div className="flex justify-center py-20">
  <img
    src="/images/MD Sir.png"
    alt="Message from the Chairman"
    className="w-full max-w-4xl h-auto"
  />
</div>

{/* CEO Message Image */}
<div className="flex justify-center py-20">
  <img
    src="images/CEO.png"
    alt="Message from the Chairman"
    className="w-full max-w-4xl h-auto"
  />
</div>



      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
