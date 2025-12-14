import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useFormContext } from "../context/FormContext";
import { branches } from "../data/branches";

const Contact = () => {
  const { addFormSubmission } = useFormContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    branchId: '',
    message: '',
    course: 'General Inquiry'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For development, you can use a test endpoint or local storage
      // In production, replace with your actual Google Apps Script URL
      const scriptUrl = process.env.REACT_APP_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxEzq5GZ9Z7PpP-QX1R3sVDnx0jgGY9muAqGv5s9GQCLEbR0cdNG5WyJxos4jd1MdrE/exec';
      
      // Create JSON data for Google Apps Script
      const jsonData = {
        name: formData.name,
        phone: formData.phone,
        branch: formData.branch,
        branchId: formData.branchId,
        message: formData.message,
        timestamp: new Date().toISOString(),
        source: 'contact-form'
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

      // Add form submission to Firebase via context
      await addFormSubmission(formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
        course: 'General Inquiry'
      });
      
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Connect with us today to explore our courses and find the right path for your future.
        </p>
      </div>
      
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      <div className="bg-white rounded-xl shadow-lg p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Branch *
              </label>
              <select
                name="branch"
                value={formData.branch}
                onChange={(e) => {
                  const selectedBranch = branches.find(b => b.name === e.target.value);
                  setFormData(prev => ({
                    ...prev,
                    branch: e.target.value,
                    branchId: selectedBranch ? selectedBranch.id : ''
                  }));
                }}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a branch</option>
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.name}>
                    {branch.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your message"
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'SENDING...' : 'SEND'}
            </button>
          </div>
        </form>
      </div>
      
      {/* Contact Details */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <Phone className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">PHONE</h3>
          <p className="text-gray-600">071 10 100 10</p>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <Phone className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">HOT LINE</h3>
          <p className="text-gray-600">033 202 41 41</p>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">EMAIL</h3>
          <p className="text-gray-600">customercare.bwea@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
