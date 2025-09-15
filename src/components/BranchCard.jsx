import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const BranchCard = ({ branch }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Branch Map */}
      <div className="h-32 overflow-hidden">
        <iframe
          src={branch.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${branch.name} Location`}
        ></iframe>
      </div>
      
      {/* Branch Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          {branch.name}
        </h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-gray-600">{branch.address}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <p className="text-gray-600">{branch.phone}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <p className="text-gray-600 text-xs break-all">{branch.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
