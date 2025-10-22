import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Users, Award, ArrowRight, Search } from "lucide-react";
import Layout from "./Layout";
import RegistrationPopup from "./RegistrationPopup";
import { branches } from "../data/branches";

const BranchPage = () => {
  const { branchId } = useParams();
  const navigate = useNavigate();
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);
  
  // Find the branch data from the imported branches array
  const branch = branches.find(b => b.id === branchId) || branches[0];

  return (
    <Layout>
      <main className="w-full">
      {/* Hero Section (unified style) */}
      <section className="relative h-[60vh] overflow-hidden -mt-24">
        <img 
          src={`/images/${branchId}-hero.png`} 
          alt={branch.name} 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="text-white max-w-3xl p-8 mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold">{branch.name}</h1>
          </div>
        </div>
      </section>

      {/* Branch Introduction */}
      <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{branch.name}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {branch.description}
            </p>
          </div>

          <div>
            <img src={`/images/nittambuwabranch.png`} alt={`${branch.name} campus`} className="rounded-xl shadow-md object-cover h-64 w-full" />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Phone className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">PHONE</h3>
            <p className="text-gray-600">{branch.phone}</p>
          </div>
          
          <div className="text-center">
            <Phone className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">LANDLINE</h3>
            <p className="text-gray-600">{branch.landline}</p>
          </div>
          
          <div className="text-center">
            <Mail className="w-8 h-8 text-gray-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">EMAIL</h3>
            <p className="text-gray-600">{branch.email}</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <MapPin className="w-8 h-8 text-gray-600 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-800 mb-1">ADDRESS</h3>
          <p className="text-gray-600">{branch.address}</p>
          <a 
            href={branch.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            View on Map →
          </a>
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Courses In {branch.name}</h3>
          <p className="text-gray-600 text-lg">Discover courses that inspire growth and success.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/Weekend Diploma.jpg" alt="Weekend Diploma" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Weekend Diploma</h4>
              <p className="text-gray-600 text-sm mb-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Super cool tools</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/Weekday Diploma copy.jpg" alt="Weekday Diploma 2 Months" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Weekday Diploma - 2 Months</h4>
              <p className="text-gray-600 text-sm mb-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Super cool tools</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/weekday Diploma copy.jpg" alt="Weekday Diploma 3 Months" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Weekday Diploma - 3 Months</h4>
              <p className="text-gray-600 text-sm mb-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Super cool tools</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src="/images/Online Diploma copy.jpg" alt="Online English Diploma" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Online English Diploma</h4>
              <p className="text-gray-600 text-sm mb-4">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform, Super cool tools</p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Grid Layout with Auto-scroll */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h3>
          <p className="text-gray-600 text-lg">A glimpse into our journey, achievements, and moments that define us.</p>
        </div>

        {(() => {
          const galleryTrackRef = useRef(null);
          const rafRef = useRef(null);
          const offsetRef = useRef(0);

          useEffect(() => {
            const track = galleryTrackRef.current;
            if (!track) return;

            const startAnimation = () => {
              const animate = () => {
                offsetRef.current += 0.2; // Very smooth animation
                
                // Calculate the width of one complete set (all images)
                const totalWidth = track.scrollWidth;
                const singleSetWidth = totalWidth / 2; // Since we duplicate
                
                // Reset to beginning when we've scrolled past the first set
                if (offsetRef.current >= singleSetWidth) {
                  offsetRef.current = 0;
                }
                
                track.style.transform = `translateX(-${offsetRef.current}px)`;
                rafRef.current = requestAnimationFrame(animate);
              };
              
              rafRef.current = requestAnimationFrame(animate);
            };

            // Start animation after a delay to ensure images load
            const timer = setTimeout(startAnimation, 2000);

            return () => {
              if (rafRef.current) cancelAnimationFrame(rafRef.current);
              clearTimeout(timer);
            };
          }, []);

          const images = Array.isArray(branch.gallery) && branch.gallery.length > 0
            ? branch.gallery
            : [
                `/images/gallery/graduation-1.jpg`,
                `/images/gallery/ceremony-1.jpg`,
                `/images/gallery/audience-1.jpg`,
              ];

          return (
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 will-change-transform" 
                ref={galleryTrackRef}
                style={{ width: 'max-content' }}
              >
                {/* First set of images */}
                {images.map((src, idx) => (
                  <div key={`first-${idx}`} className="flex-shrink-0">
                    <img
                      src={src}
                      alt={`Gallery ${idx + 1}`}
                      className="rounded-xl shadow-lg object-cover h-56 sm:h-64 md:h-72 lg:h-80 w-auto"
                      loading="lazy"
                      onError={(e) => {
                        console.log(`Failed to load image: ${src}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
                {/* Second set of images for seamless loop */}
                {images.map((src, idx) => (
                  <div key={`second-${idx}`} className="flex-shrink-0">
                    <img
                      src={src}
                      alt={`Gallery ${idx + 1}`}
                      className="rounded-xl shadow-lg object-cover h-56 sm:h-64 md:h-72 lg:h-80 w-auto"
                      loading="lazy"
                      onError={(e) => {
                        console.log(`Failed to load image: ${src}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Join Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-gray-50 rounded-2xl">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Join With {branch.name}</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            For over 20 years, British Way English Academy has been Sri Lanka's largest English training institute, 
            with 16 branches and over 21,000 graduates annually. Guided by a passionate, qualified team, 
            we believe every student has unlimited potential and we're here to unlock it.
          </p>
          <button 
            onClick={() => setShowRegistrationPopup(true)}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg font-semibold flex items-center mx-auto"
          >
            REGISTER NOW <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Connected</h3>
        <p className="text-gray-600 mb-8">Stay connected with us through your favorite social platforms.</p>

        <div className="flex flex-wrap justify-center gap-6">
          {(() => {
            const links = branch.socialLinks || {};
            const iconFor = (key) => {
              switch (key) {
                case 'facebook': return '/images/Facebook.png';
                case 'instagram': return '/images/Instergram.png';
                case 'youtube': return '/images/Youtube.png';
                case 'tiktok': return '/images/Tiktok.png';
                case 'messenger': return '/images/Messenger.png';
                case 'whatsapp': return '/images/Whatsapp.png';
                case 'linkedin': return '/images/Linkedin.png';
                case 'twitter': return '/images/Twitter.png';
                default: return '';
              }
            };
            return Object.entries(links)
              .filter(([, url]) => typeof url === 'string' && url.trim().length > 0)
              .map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer" title={key} className="group hover:scale-110 transition-transform duration-300">
                  <img src={iconFor(key)} alt={key} className="w-10 h-10 object-contain" />
                </a>
              ));
          })()}
        </div>
      </section>

      {/* Back to Branches */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <button 
          onClick={() => navigate('/branches')}
          className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          ← Back to All Branches
        </button>
      </section>
      </main>
      
      {/* Registration Popup */}
      <RegistrationPopup
        isOpen={showRegistrationPopup}
        onClose={() => setShowRegistrationPopup(false)}
        branchName={branch.name}
        branchId={branch.id}
      />
    </Layout>
  );
};

export default BranchPage;
