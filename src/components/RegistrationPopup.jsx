import React, { useState } from "react";
import { X, User, Mail, Phone, MapPin, Calendar, GraduationCap } from "lucide-react";
import { useFormContext } from "../context/FormContext";

const RegistrationPopup = ({ isOpen, onClose, branchName, branchId, branches, onBranchSelect }) => {
  const { addFormSubmission } = useFormContext();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
    branch: branchName || "",
    branchId: branchId || ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // For development, you can use a test endpoint or local storage
      // In production, replace with your actual Google Apps Script URL
      const scriptUrl = process.env.REACT_APP_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxEzq5GZ9Z7PpP-QX1R3sVDnx0jgGY9muAqGv5s9GQCLEbR0cdNG5WyJxos4jd1MdrE/exec';
      
      // Create JSON data for Google Apps Script
      const jsonData = {
        name: formData.name,
        phone: formData.phone,
        course: formData.course,
        message: formData.message,
        branch: formData.branch,
        branchId: formData.branchId,
        timestamp: new Date().toISOString(),
        source: 'branch-registration'
      };

      // Submit to Google Sheets via Google Apps Script
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
      });

      // Save to Firebase via FormContext
      await addFormSubmission({
        name: formData.name,
        phone: formData.phone,
        email: '', // Registration popup doesn't have email field
        course: formData.course,
        branch: formData.branch,
        branchId: formData.branchId,
        message: formData.message
      });

      // Check if the submission was successful
      console.log('Form submitted successfully');
      setSubmitStatus('success');
      setFormData({
        name: "",
        phone: "",
        course: "",
        message: "",
        branch: branchName || "",
        branchId: branchId || ""
      });
      
      // Close popup after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 2000);

    } catch (error) {
      console.error('Registration error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-blue-100">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Register with {branchName}</h2>
              <p className="text-blue-100 text-sm mt-1">Join our English learning community</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2 text-blue-600" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2 text-blue-600" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Branch Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-2 text-blue-600" />
              Select Branch *
            </label>
            <select
              name="branch"
              value={formData.branch}
              onChange={(e) => {
                const selectedBranch = branches.find(b => b.name === e.target.value);
                handleInputChange(e);
                if (selectedBranch) {
                  onBranchSelect(selectedBranch);
                  setFormData(prev => ({
                    ...prev,
                    branch: selectedBranch.name,
                    branchId: selectedBranch.id
                  }));
                }
              }}
              required
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80"
            >
              <option value="">Select a branch</option>
              {branches.map((branch) => (
                <option key={branch.id} value={branch.name}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>

          {/* Course Interest */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <GraduationCap className="w-4 h-4 inline mr-2 text-blue-600" />
              Course Interest *
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80"
            >
              <option value="">Select a course</option>
              <option value="Weekday Diploma">Weekday Diploma</option>
              <option value="Weekend Diploma">Weekend Diploma</option>
              <option value="Online Diploma">Online Diploma</option>
              <option value="Kids Class">Kids Class</option>
              <option value="IT+English Diploma">IT+English Diploma</option>
              <option value="Night Class">Night Class</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-2 text-blue-600" />
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none bg-white/80"
              placeholder="Tell us about your learning goals..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                'Register Now'
              )}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-50/90 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center backdrop-blur-sm">
              ✅ Registration successful! We'll contact you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-50/90 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center backdrop-blur-sm">
              ❌ Registration failed. Please try again or contact us directly.
            </div>
          )}
        </form>

        {/* Footer */}
        <div className="bg-blue-50/80 backdrop-blur-sm px-6 py-4 rounded-b-2xl border-t border-blue-100">
          <p className="text-xs text-blue-600 text-center">
            By registering, you agree to our terms and conditions. 
            We'll contact you within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPopup;
