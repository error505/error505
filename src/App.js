import React, { useState, useEffect } from 'react';
import './App.css';
import './components/modern-enhancements.css';
import { FaCog, FaArrowUp } from 'react-icons/fa';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/home/Header';
import Sidebar from './components/home/Sidebar';
import WhatIDo from './components/home/WhatIDo';
// import PortfolioSection from './components/home/PortfolioSection';
import PricingSection from './components/pricing/PricingSection';
import BlogSection from './components/blog/BlogSection';
import ContactSection from './components/home/ContactSection';
import BlogPost from './components/blog/BlogPost';
import useScrollIntoView from './hooks/useScrollIntoView';
import BlogList from './components/blog/BlogList';
import Resume from './components/resume/Resume';
import HeroSection from './components/home/HeroSection';
import Footer from './components/home/Footer';
import TestimonialsSection from './components/home/TestimonialsSection';
import ProjectShowcase from './components/home/ProjectShowcase';
import ScrollIndicator from './components/ScrollIndicator';
import SkillsProgress from './components/SkillsProgress';
import ParticleBackground from './components/ParticleBackground';
import NewsletterSignup from './components/NewsletterSignup';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHome, faBriefcase, faDollarSign, faBlog, faEnvelope, faBars, faX, faEye, faFileAlt, faCog, faArrowUp, faCode, faCheck, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faHome, faUser, faBriefcase, faDollarSign, faBlog, faEnvelope, faBars, faX, faEye, faFileAlt, faCog, faArrowUp, faCode, faCheck, faDatabase);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [colorPanelVisible, setColorPanelVisible] = useState(false);

  useEffect(() => {
    // Retrieve stored settings on initial load
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const savedColor = localStorage.getItem('themeColor');

    if (savedDarkMode) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }

    if (savedColor) {
      document.documentElement.style.setProperty('--main-theme-color', savedColor);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark-mode', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  const toggleColorPanel = () => {
    setColorPanelVisible(!colorPanelVisible);
  };

  const changeColor = (color) => {
    document.documentElement.style.setProperty('--main-theme-color', color);
    localStorage.setItem('themeColor', color);
  };

  useScrollIntoView({
    sidebar: [
      '.sidebar .home-button',
      '.sidebar .portfolio-button',
      '.sidebar .about-button',
      '.sidebar .contact-button',
      '.sidebar .blog-button',
      '.sidebar .service-button'
    ],
    header: [
      '.mobile-header .home-button',
      '.mobile-header .portfolio-button',
      '.mobile-header .about-button',
      '.mobile-header .contact-button',
      '.mobile-header .blog-button',
      '.mobile-header .service-button'
    ]
  });

  useEffect(() => {
    const mybutton = document.getElementById('backToTop');
    const scrollFunction = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = 'block';
      } else {
        mybutton.style.display = 'none';
      }
    };

    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <Router>
      <ParticleBackground />
      <ScrollIndicator />
      <div className={isDarkMode ? 'dark-mode' : ''}>
        <Header />
        <Sidebar isSidebarClosed={isSidebarClosed} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Routes>
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/blog/" element={<BlogList />} />
            <Route path="/resume/" element={<Resume />} />
            <Route path="/" element={
              <>
              <HeroSection />
                <WhatIDo />
                <SkillsProgress />
                <ProjectShowcase />
                <BlogSection />
                <PricingSection />
                <TestimonialsSection />
                <NewsletterSignup />
                {/* <PortfolioSection /> */}
                <ContactSection />
                <Footer />
              </>
            } />
          </Routes>
        </div>
        <div id="color-options" className="color-panel" style={{ left: colorPanelVisible ? '20px' : '-300px' }}>
          <h3>Choose Theme Color</h3>
          <div className="color-option" data-color="#667eea" onClick={() => changeColor('#667eea')}></div>
          <div className="color-option" data-color="#764ba2" onClick={() => changeColor('#764ba2')}></div>
          <div className="color-option" data-color="#9b59b6" onClick={() => changeColor('#9b59b6')}></div>
          <div className="color-option" data-color="#5b73e8" onClick={() => changeColor('#5b73e8')}></div>
          <h4>Dark Mode</h4>
          <label className="switch">
            <input type="checkbox" id="dark-mode-toggle" checked={isDarkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
        </div>

        <button id="settings-btn" className="floating-btn" onClick={toggleColorPanel}>
          <FaCog />
        </button>
        <button id="backToTop" title="Go to top" onClick={() => window.scrollTo(0, 0)}>
          <FaArrowUp />
        </button>
      </div>
    </Router>
  );
}

export default App;