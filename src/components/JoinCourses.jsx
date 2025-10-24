import React, { useState } from "react";
import RegistrationPopup from "./RegistrationPopup";
import { branches } from "../data/branches";

const JoinCourses = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedBranch(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-100 to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Start Your Course Today
        </h2>
        
        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Ready to embark on your journey to learn English Language the best way?
          <br className="hidden sm:block"/>
          Take your first step towards fluency and confidence!
        </p>
        
        <button
          onClick={handleOpenPopup}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold 
                    hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 
                    shadow-lg hover:shadow-xl active:scale-95"
        >
          REGISTER NOW
        </button>

        <RegistrationPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          branchName={selectedBranch?.name || ""}
          branchId={selectedBranch?.id || ""}
          branches={branches}
          onBranchSelect={setSelectedBranch}
        />
      </div>
    </section>
  );
};

export default JoinCourses;