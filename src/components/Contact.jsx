import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { useFormContext } from "../context/FormContext";

const Contact = () => {
  const { addFormSubmission } = useFormContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
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
      // Add form submission to context
      addFormSubmission(formData);
      
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
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your city"
              />
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
