import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getFormSubmissions,
  subscribeToFormSubmissions,
  addFormSubmission as addFormSubmissionToFirebase,
  deleteFormSubmission as deleteFormSubmissionFromFirebase
} from '../services/firebaseService';

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
  const [isLoading, setIsLoading] = useState(true);

  // Load form submissions from Firebase on mount
  useEffect(() => {
    const loadSubmissions = async () => {
      try {
        const submissions = await getFormSubmissions();
        setFormSubmissions(submissions);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading form submissions:', error);
        // Fallback to localStorage if Firebase fails
        const savedSubmissions = localStorage.getItem('formSubmissions');
        if (savedSubmissions) {
          setFormSubmissions(JSON.parse(savedSubmissions));
        }
        setIsLoading(false);
      }
    };

    loadSubmissions();

    // Subscribe to real-time updates
    const unsubscribe = subscribeToFormSubmissions((submissions) => {
      setFormSubmissions(submissions);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const addFormSubmission = async (submission) => {
    try {
      // Add to Firebase
      const newSubmission = await addFormSubmissionToFirebase(submission);
      // Update local state (will also be updated by real-time listener)
      setFormSubmissions(prev => [newSubmission, ...prev]);
      return newSubmission;
    } catch (error) {
      console.error('Error adding form submission:', error);
      // Fallback to localStorage if Firebase fails
      const newSubmission = {
        ...submission,
        id: Date.now(),
        submittedAt: new Date().toISOString()
      };
      setFormSubmissions(prev => [...prev, newSubmission]);
      localStorage.setItem('formSubmissions', JSON.stringify([...formSubmissions, newSubmission]));
      return newSubmission;
    }
  };

  const deleteFormSubmission = async (id) => {
    try {
      // Delete from Firebase
      await deleteFormSubmissionFromFirebase(id);
      // Update local state (will also be updated by real-time listener)
      setFormSubmissions(prev => prev.filter(submission => submission.id !== id));
    } catch (error) {
      console.error('Error deleting form submission:', error);
      // Fallback to localStorage if Firebase fails
      const updated = formSubmissions.filter(submission => submission.id !== id);
      setFormSubmissions(updated);
      localStorage.setItem('formSubmissions', JSON.stringify(updated));
    }
  };

  const value = {
    formSubmissions,
    addFormSubmission,
    deleteFormSubmission,
    isLoading
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};





