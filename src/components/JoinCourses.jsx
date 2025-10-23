import React, { useState } from "react";
import RegistrationPopup from "./RegistrationPopup";
import { branches } from "../data/branches";

const JoinCourses = () => {
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("");

  const handleRegisterClick = () => {
    setShowRegistrationPopup(true);
  };

  const handleClosePopup = () => {
    setShowRegistrationPopup(false);
    setSelectedBranch("");
  };

  return (
    <>
      <section className="py-16 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/90 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Start Your Course Today</h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Ready to embark on your journey to learn English Language the best way? 
          <br/>Click below and take your first step!
          </p>
          
          <button 
            onClick={handleRegisterClick}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            REGISTER NOW
          </button>
        </div>
      </section>

      {/* Registration Popup with Branch Selection */}
      <RegistrationPopup
        isOpen={showRegistrationPopup}
        onClose={handleClosePopup}
        branchName={selectedBranch ? branches.find(b => b.id === selectedBranch)?.name || "" : ""}
        branchId={selectedBranch}
        showBranchSelector={true}
        branches={branches}
      />
    </>
  );
};

export default JoinCourses;