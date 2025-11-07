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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.4040584500485!2d80.09624097474911!3d7.14691876560543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae302a806b73f91%3A0x2562994dc2d8ab84!2sBritish%20Way%20English%20Academy%20%7C%20Head%20Office!5e1!3m2!1sen!2slk!4v1762486225945!5m2!1sen!2slk"
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
