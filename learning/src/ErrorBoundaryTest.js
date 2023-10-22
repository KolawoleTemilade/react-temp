import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const ErrorBoundaryTest = () => {
  // Simulating an error
  const triggerError = () => {
    throw new Error('This is a simulated error for testing the ErrorBoundary.');
  };

  return (
    <div className='errorpage1'>
    <div className='errorpage'>
      <h1>Error Boundary Test Page</h1>
      <button onClick={triggerError}>Trigger Error</button>
      <div className='errorpagebtn1'>
      <Link to= '/' className ='errorpagebtn'>Go Back to Home.</Link>
      </div>
    </div>
    </div>
  );
};

export default ErrorBoundaryTest;
