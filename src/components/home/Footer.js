// src/components/home/Footer.js

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="modern-footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* About Section - Main Brand */}
          <div className="footer-column footer-brand-section">
            <h4 className="footer-heading">Igor Iric</h4>
            <p className="footer-text">
              Azure Solutions Architect & Full-Stack Developer passionate about creating 
              innovative cloud solutions and modern web applications.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com/in/igor-iric" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/igor-iric" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://twitter.com/igor-iric" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="mailto:igor.iric@example.com" className="social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h5 className="footer-subheading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h5 className="footer-subheading">Services</h5>
            <ul className="footer-links">
              <li><a href="#azure-solutions">Azure Solutions</a></li>
              <li><a href="#web-development">Web Development</a></li>
              <li><a href="#cloud-migration">Cloud Migration</a></li>
              <li><a href="#devops">DevOps & CI/CD</a></li>
              <li><a href="#consulting">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h5 className="footer-subheading">Get In Touch</h5>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@error505.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+49 173 1234567</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Remote Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container px-lg-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="copyright-text">
                © 2024 <span className="brand-name">Igor Iric</span>. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="made-with-love">
                Made with <FaHeart className="heart-icon" /> and passion for technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
