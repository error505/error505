// src/components/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = '#667eea' }) => {
  const sizeClass = {
    small: 'loading-spinner-small',
    medium: 'loading-spinner-medium',
    large: 'loading-spinner-large'
  };

  return (
    <div className={`loading-spinner-container ${sizeClass[size]}`}>
      <div className="loading-spinner" style={{ borderTopColor: color }}>
        <div className="spinner-dot" style={{ backgroundColor: color }}></div>
        <div className="spinner-dot" style={{ backgroundColor: color }}></div>
        <div className="spinner-dot" style={{ backgroundColor: color }}></div>
      </div>
      <div className="loading-text">Loading amazing content...</div>
    </div>
  );
};

export default LoadingSpinner;
