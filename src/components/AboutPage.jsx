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
      {/* Hero Banner with header overlay */}
      <section className="relative overflow-hidden pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="relative rounded-2xl overflow-hidden min-h-[260px] bg-gray-900">
            <img src="/images/aboutus.png" alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent" />
            <Reveal className="relative z-10 p-8 md:p-12" variant="fade-up">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">About Us</h1>
              <p className="max-w-xl text-xs md:text-sm text-gray-700">
                For over two decades, British Way English Academy has been shaping futures with trusted language education.
              </p>
            </Reveal>
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

      {/* Timeline - Perfect Story Design */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Reveal variant="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Story Of <span className="text-blue-600">British Way</span>
            </h2>
            <p className="text-gray-600 text-lg">Explore British Way history</p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 rounded-full"></div>

          {[
            { 
              year: "2004", 
              title: "The Beginning", 
              description: "The first British Way branch opened in Nittambuwa. The first class only had 7 students. As they say, from small acorns, mighty oak trees grow.",
              side: "left",
              highlight: true
            },
            { 
              year: "2007", 
              title: "Expansion Begins", 
              description: "Kiribathgoda branch opened, marking our first expansion beyond the capital region.",
              side: "right"
            },
            { 
              year: "2009", 
              title: "Coastal Reach", 
              description: "Negombo branch was established, bringing quality English education to the western coast.",
              side: "left"
            },
            { 
              year: "2011", 
              title: "Rapid Growth", 
              description: "Two major branches opened: Kandy in the hill country and Nugegoda in the suburbs, expanding our reach significantly.",
              side: "right"
            },
            { 
              year: "2012", 
              title: "Southern Expansion", 
              description: "Three branches established in the south: Matara, Galle, and Anuradhapura, covering the entire southern region.",
              side: "left"
            },
            { 
              year: "2013", 
              title: "Western Network", 
              description: "Gampaha branch was established, completing our western province coverage.",
              side: "right"
            },
            { 
              year: "2015", 
              title: "Central Highlands", 
              description: "Rathnapura branch opened, extending our services to the central highlands and gem mining regions.",
              side: "left"
            },
            { 
              year: "2016", 
              title: "International Recognition", 
              description: "First MASSCO Award and global recognition at UNESCO's 7th World Scientific Congress in Geneva. A milestone year for excellence.",
              side: "right",
              highlight: true
            },
            { 
              year: "2017", 
              title: "Partnership & Excellence", 
              description: "Thames College joined BWEA family. SLIM Brand Excellence Award and second consecutive MASSCO award for Best English Academy.",
              side: "left"
            },
            { 
              year: "2018", 
              title: "Three-Peat Achievement", 
              description: "Third consecutive MASSCO award. New branches in Bandarawela, Kalutara, and Polonnaruwa, reaching every corner of Sri Lanka.",
              side: "right"
            },
            { 
              year: "2019", 
              title: "Brand of the Year", 
              description: "Brand of the Year at SLIM Brand Excellence. MASSCO award for 4th consecutive time. Three new branches established.",
              side: "left",
              highlight: true
            },
            { 
              year: "2020", 
              title: "Digital Transformation", 
              description: "BWEA International School network launched in Nittambuwa, pioneering digital education during challenging times.",
              side: "right"
            },
            { 
              year: "2021", 
              title: "Online Revolution", 
              description: "Launched comprehensive online learning platform, ensuring uninterrupted education during global challenges.",
              side: "left"
            },
            { 
              year: "2022", 
              title: "21,000+ Graduates", 
              description: "Reached milestone of 21,000+ annual graduates across 16 branches, becoming Sri Lanka's largest English training institute.",
              side: "right",
              highlight: true
            },
            { 
              year: "2023", 
              title: "Innovation Hub", 
              description: "Opened state-of-the-art learning centers with modern technology and innovative teaching methods.",
              side: "left"
            },
            { 
              year: "2024", 
              title: "Future Ready", 
              description: "Launched AI-powered learning tools and personalized education pathways, preparing students for the digital future.",
              side: "right"
            }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100} variant="fade-up">
              <div className="relative flex items-center mb-16">
                {/* Left Content Card */}
                {item.side === 'left' && (
                  <div className="w-6/12 pr-16 text-right">
                    <div className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${item.highlight ? 'border-blue-500' : 'border-gray-300'} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                      <div className="text-blue-600 font-bold text-sm mb-2">{item.title}</div>
                      <div className="text-gray-600 text-sm leading-relaxed">{item.description}</div>
                    </div>
                  </div>
                )}

                {/* Timeline Node - Always in center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${item.highlight ? 'bg-blue-600' : 'bg-blue-400'}`}>
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="mt-2 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="text-sm font-bold text-gray-800">{item.year}</span>
                  </div>
                </div>

                {/* Right Content Card */}
                {item.side === 'right' && (
                  <div className="w-5/16 pl-16 text-left ml-auto">
                    <div className={`bg-white rounded-2xl shadow-lg p-6 border-r-4 ${item.highlight ? 'border-blue-500' : 'border-gray-300'} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                      <div className="text-blue-600 font-bold text-sm mb-2">{item.title}</div>
                      <div className="text-gray-600 text-sm leading-relaxed">{item.description}</div>
                    </div>
                  </div>
                )}

                {/* Empty space for alignment when content is on opposite side */}
                {item.side === 'left' && <div className="w-5/12"></div>}
                {item.side === 'right' && <div className="w-22/5"></div>}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Timeline Summary */}
        <Reveal variant="fade-up" delay={1600}>
          <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Two Decades of Excellence</h3>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              From 7 students in 2004 to over 21,000 graduates annually, British Way English Academy has grown 
              from a single classroom to Sri Lanka's most trusted English education institution. Our journey 
              continues with innovation, excellence, and an unwavering commitment to student success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">16</div>
                <div className="text-gray-600">Branches Nationwide</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">21K+</div>
                <div className="text-gray-600">Annual Graduates</div>
              </div>
            </div>
          </div>
        </Reveal>
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
