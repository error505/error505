// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  return (
    <header className="mobile-header">
      <a href="#home" className="home-button open-sidebar1">
        <FontAwesomeIcon icon="home" /><span></span>
      </a>
      <a href="#about" className="about-button open-sidebar1">
        <FontAwesomeIcon icon="user" /><span></span>
      </a>
      <a href="#portfolio" className="portfolio-button open-sidebar1">
        <FontAwesomeIcon icon="briefcase" /><span></span>
      </a>
      <a href="#services" className="service-button open-sidebar1">
        <FontAwesomeIcon icon="dollar-sign" /><span></span>
      </a>
      <a href="#blog" className="blog-button open-sidebar1">
        <FontAwesomeIcon icon="blog" /><span></span>
      </a>
      <a href="#contact" className="contact-button open-sidebar1">
        <FontAwesomeIcon icon="envelope" /><span></span>
      </a>
    </header>
  );
};

export default Header;
