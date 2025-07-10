// src/components/Header.js
import React from 'react';
import { FaHome, FaUser, FaDollarSign, FaBlog, FaEnvelope, FaFileAlt, FaUsers, FaCode } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  return (
    <header className="mobile-header">
      <a href="/error505" className="home-button open-sidebar1">
        <FaHome /><span></span>
      </a>
      <ScrollLink
        to="what-i-do"
        smooth={true}
        duration={500}
        className="about-button open-sidebar1"
      >
        <FaUser />
        <span></span>
      </ScrollLink>
      <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        className="projects-button open-sidebar1"
      >
        <FaCode />
        <span></span>
      </ScrollLink>
      <ScrollLink
        to="services"
        smooth={true}
        duration={500}
        className="services-button open-sidebar1"
      >
        <FaDollarSign />
        <span></span>
      </ScrollLink>
      <ScrollLink
        to="testimonials"
        smooth={true}
        duration={500}
        className="testimonials-button open-sidebar1"
      >
        <FaUsers />
        <span></span>
      </ScrollLink>
      <ScrollLink
        to="blog"
        smooth={true}
        duration={500}
        className="blog-button open-sidebar1"
      >
        <FaBlog />
        <span></span>
      </ScrollLink>
      <Link
        to="/resume"
        className="resume-button open-sidebar1"
      >
        <FaFileAlt />
        <span></span>
      </Link>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        className="contact-button open-sidebar1"
      >
        <FaEnvelope />
        <span></span>
      </ScrollLink>
      <ScrollLink
        to="testimonials"
        smooth={true}
        duration={500}
        className="testimonials-button open-sidebar1"
      >
        <FaUsers />
        <span></span>
      </ScrollLink>
      <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        className="projects-button open-sidebar1"
      >
        <FaCode />
        <span></span>
      </ScrollLink>
    </header>
  );
};

export default Header;
