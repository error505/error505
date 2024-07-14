// src/components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable jsx-a11y/anchor-is-valid */
const Sidebar = ({ isSidebarClosed, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isSidebarClosed ? 'sidebar-closed' : ''}`}>
      <img src="./static/images/1674712595713-plava2.jpg" alt="Igor Iric" className="profile-image" />
      <h2 className="sidebar-title">Igor Iric</h2>
      <p className="subtitle">Hi, my name is Igor Iric and I'm an Azure Solutions Architect Expert & Senior Software engineer.</p>
      <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a href="https://www.linkedin.com/in/igor-iric"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        <a href="https://github.com/error505"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/" className="home-button"><FontAwesomeIcon icon="home" /><span> Home</span></a></li>
          <li><a href="#about" className="about-button"><FontAwesomeIcon icon="user" /><span> About Me</span></a></li>
          <li><a href="#portfolio" className="portfolio-button"><FontAwesomeIcon icon="briefcase" /><span> Portfolio</span></a></li>
          <li><a href="#services" className="service-button"><FontAwesomeIcon icon="dollar-sign" /><span> Services & Pricing</span></a></li>
          <li><a href="#blog" className="blog-button"><FontAwesomeIcon icon="blog" /><span> Blog</span></a></li>
          <li><a href="#contact" className="contact-button"><FontAwesomeIcon icon="envelope" /><span> Contact</span></a></li>
        </ul>
      </nav>
      <button className="close-sidebar" onClick={toggleSidebar}><FontAwesomeIcon icon="x" /></button>
      <button className="open-sidebar" onClick={toggleSidebar}><FontAwesomeIcon icon="bars" /></button>
    </aside>
  );
};

export default Sidebar;
