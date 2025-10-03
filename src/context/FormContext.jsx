import React, { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export const FormProvider = ({ children }) => {
  const [formSubmissions, setFormSubmissions] = useState([]);

  // Load form submissions from localStorage on mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('formSubmissions');
    if (savedSubmissions) {
      setFormSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  // Save form submissions to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('formSubmissions', JSON.stringify(formSubmissions));
  }, [formSubmissions]);

  const addFormSubmission = (submission) => {
    const newSubmission = {
      ...submission,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    };
    setFormSubmissions(prev => [...prev, newSubmission]);
  };

  const deleteFormSubmission = (id) => {
    setFormSubmissions(prev => prev.filter(submission => submission.id !== id));
  };

  const value = {
    formSubmissions,
    addFormSubmission,
    deleteFormSubmission
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};





