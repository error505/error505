// src/components/Header.js
import React from 'react';
import { FaHome, FaUser, FaDollarSign, FaBlog, FaEnvelope, FaCode, FaCogs } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  return (
    <header className="mobile-header">
      <div className="mobile-nav-container">
        <a href="/error505" className="nav-item home-button" title="Home">
          <FaHome />
          <span>Home</span>
        </a>
        <ScrollLink
          to="what-i-do"
          smooth={true}
          duration={500}
          className="nav-item about-button"
          title="About"
        >
          <FaUser />
          <span>About</span>
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="nav-item skills-button"
          title="Skills"
        >
          <FaCogs />
          <span>Skills</span>
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="nav-item projects-button"
          title="Projects"
        >
          <FaCode />
          <span>Projects</span>
        </ScrollLink>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          className="nav-item services-button"
          title="Services"
        >
          <FaDollarSign />
          <span>Services</span>
        </ScrollLink>
        <ScrollLink
          to="blog"
          smooth={true}
          duration={500}
          className="nav-item blog-button"
          title="Blog"
        >
          <FaBlog />
          <span>Blog</span>
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="nav-item contact-button"
          title="Contact"
        >
          <FaEnvelope />
          <span>Contact</span>
        </ScrollLink>
      </div>
    </header>
  );
};

export default Header;
