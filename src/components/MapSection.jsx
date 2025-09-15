import React from "react";
import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Our Google Location</h2>
          <div className="flex items-center justify-center space-x-2 text-blue-600 mb-6">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">British Way English Academy - Nittambuwa (Head Office)</span>
          </div>
          <p className="text-gray-600 text-lg">213/B, Kandy Road, Nittambuwa</p>
        </div>
        
        {/* Google Map */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96">
            <iframe
              src="https://maps.google.com/maps?q=Nittambuwa,Sri+Lanka&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="British Way English Academy Head Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
