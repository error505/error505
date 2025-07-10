// src/components/ScrollIndicator.js
import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div 
      className="scroll-indicator-progress"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollTop}%`,
        height: '4px',
        background: 'linear-gradient(90deg, #667eea, #764ba2)',
        zIndex: 1000,
        transition: 'width 0.1s ease-out'
      }}
    />
  );
};

export default ScrollIndicator;
