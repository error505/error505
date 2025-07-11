// src/components/WhatIDo.js
import React from 'react';
import { SiMicrosoft, SiGithub } from 'react-icons/si';
import { FaBrain, FaCloud, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const WhatIDo = () => {
  const handleDownloadCV = () => {
    // Create a link to download the CV/Resume as PDF
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf'; // You'll need to add your actual CV PDF to the public folder
    link.download = 'Igor_Iric_CV.pdf';
    link.click();
  };

  return (
    <section className="what-i-do" id="what-i-do">
        {/* Heading */}
        <div className="heading-container">
          <h2 className='text-light'>About Me</h2>
          <p>Know Me More<span className="heading-separator-line"></span></p>
        </div>
        {/* Heading end */}
        
        {/* About Me Content */}
        <div className="about-me-section">
          <div className="about-content-wrapper">
            <div className="about-text">
              <h2 className="about-title">I'm <span className="text-primary">Igor Iric,</span> an AI Solutions Architect</h2>
              <p className="about-description">
                I help you build brand for your business at an affordable price. I have over 18 years of extensive experience in designing, developing, and deploying advanced Agentic AI enterprise-grade platforms primarily on Microsoft Azure. As a Senior AI Cloud Solutions Architect, I specialize in implementing scalable cloud-based AI solutions, leveraging Azure OpenAI, Retrieval-Augmented Generation (RAG), Power BI integration, and advanced analytics.
              </p>
              <p className="about-description">
                Delivering work within time and budget which meets client's requirements is our motto. I'm passionate about automating complex workflows and empowering businesses through transformative AI strategies.
              </p>
            </div>
            
            <div className="about-details">
              <div className="personal-info">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Igor Iric</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value text-primary">info@error505.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Age:</span>
                  <span className="info-value">38</span>
                </div>
                <div className="info-item">
                  <span className="info-label">From:</span>
                  <span className="info-value">Frankfurt, Germany</span>
                </div>
              </div>
              
              <button className="download-cv-btn" onClick={handleDownloadCV}>
                Download CV
              </button>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="statistics-section">
            <div className="stat-item">
              <h3 className="stat-number">18+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">250+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">650+</h3>
              <p className="stat-label">Projects Done</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">25K+</h3>
              <p className="stat-label">LinkedIn Followers</p>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
      <div className="services-grid">
        <div className="service">
          <div className="service-icon">
            <SiMicrosoft />
          </div>
          <div className="service-description">
            <h3>Azure AI</h3>
            <p>Azure OpenAI, AI Search, Machine Learning, and Agentic AI Solutions</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <FaBrain />
          </div>
          <div className="service-description">
            <h3>AI & RAG</h3>
            <p>Retrieval-Augmented Generation and Multi-Agent AI Systems</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <SiGithub />
          </div>
          <div className="service-description">
            <h3>GitHub</h3>
            <p>Certified GitHub Partner Trainer and "GitHub for Next-Generation Coders" Author</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <FaChartLine />
          </div>
          <div className="service-description">
            <h3>Power BI</h3>
            <p>Advanced Analytics, Data Visualization, and Business Intelligence</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <FaCloud />
          </div>
          <div className="service-description">
            <h3>Cloud Platforms</h3>
            <p>Multi-cloud expertise: Azure, AWS, GCP architectures</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <FaShieldAlt />
          </div>
          <div className="service-description">
            <h3>Cybersecurity</h3>
            <p>Azure Cybersecurity Architect Expert & Security Operations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
