// src/components/HeroSection.js
import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="home" className="hero-wrap">
      <div className="hero-mask opacity-8 bg-dark"></div>
      <div className="hero-bg parallax" style={{ backgroundImage: "url('./static/images/intro.jpg')" }}></div>
      <div className="hero-content section d-flex min-vh-100">
        <div className="container my-auto">
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-7 fw-500 text-white mb-2 mb-md-3 fade-in-up">Welcome</p>
              <h2 className="text-16 fw-600 text-white mb-2 mb-md-3 fade-in-up">
                <Typed
                  strings={[
                    "I'm Igor Iric",
                    "I'm a Senior AI Cloud Solutions Architect.",
                    "I'm an AI Solutions Expert.",
                    "I'm a GitHub Book Author.",
                    "I'm an Agentic AI Specialist.",
                    "I'm a Technology Innovator.",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  backDelay={1500}
                  loop
                />
              </h2>
              <p className="text-light mb-4 fade-in-up">based in Frankfurt, Hesse, Germany.</p>
              <Link to="contact" className="signup-button btn-gradient">
                Hire Me
              </Link>
            </div>
          </div>
        </div>
        <Link to="what-i-do" smooth className="scroll-down-arrow text-white">
          <span className="animated">
            <FaChevronDown />
          </span>
        </Link>
      </div>
     
    </section>
  );
};

export default HeroSection;
