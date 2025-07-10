// src/components/Sidebar.js
import React from 'react';
import { FaHome, FaUser, FaDollarSign, FaBlog, FaEnvelope, FaFileAlt, FaLinkedin, FaGithub, FaAmazon, FaYoutube, FaUsers, FaCode } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Sidebar = ({ isSidebarClosed, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isSidebarClosed ? 'sidebar-closed' : ''}`}>
      <img src="./static/images/1674712595713-plava2.jpg" alt="Igor Iric" className="profile-image" />
      <h2 className="sidebar-title">Igor Iric</h2>
      <p className="subtitle">Hi, I'm Igor Iric, a Senior AI Cloud Solutions Architect with over 18 years of experience building advanced AI enterprise platforms.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/igor-iric"><FaLinkedin /></a>
        <a href="https://github.com/error505"><FaGithub /></a>
        <a href="https://amzn.eu/d/dKxnIuh" target="_blank" rel="noreferrer"><FaAmazon /></a>
        <a href="https://www.youtube.com/@iric505" target="_blank" rel="noreferrer"><FaYoutube /></a>
      </div>
      <nav className="navigation">
        <ul>
        <li><a href="/error505" className="home-button"><FaHome /><span> Home</span></a></li>
          <li>
            <ScrollLink
              to="what-i-do"
              smooth={true}
              duration={500}
              className="about-button"
            >
              <FaUser />
              <span> About Me</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="projects-button"
            >
              <FaCode />
              <span> Projects</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="service-button"
            >
              <FaDollarSign />
              <span> Services & Pricing</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={500}
              className="testimonials-button"
            >
              <FaUsers />
              <span> Testimonials</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="blog"
              smooth={true}
              duration={500}
              className="blog-button"
            >
              <FaBlog />
              <span> Blog</span>
            </ScrollLink>
          </li>
          <li>
            <Link
              to="/resume"
              className="resume-button"
            >
              <FaFileAlt />
              <span> Resume</span>
            </Link>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="contact-button"
            >
              <FaEnvelope />
              <span> Contact</span>
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
