// src/components/WhatIDo.js
import React from 'react';
import { SiMicrosoft, SiGithub } from 'react-icons/si';
import { FaBrain, FaCloud, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const WhatIDo = () => {
  return (
    <section className="what-i-do" id="what-i-do">
        {/* Heading */}
        <div className="heading-container">
          <h2 className='text-light'>About Me</h2>
          <p>Know Me More<span className="heading-separator-line"></span></p>
        </div>
        {/* Heading end */}
      <div className="row gy-5 about-content">
          <h2 className="text-7 fw-600 mb-3">I'm <span className="text-primary">Igor Iric,</span> an AI Solutions Architect</h2>
         <p>
          I have over 18 years of extensive experience in designing, developing, and deploying advanced Agentic AI enterprise-grade platforms primarily on Microsoft Azure. As a Senior AI Cloud Solutions Architect, I specialize in implementing scalable cloud-based AI solutions, leveraging Azure OpenAI, Retrieval-Augmented Generation (RAG), Power BI integration, and advanced analytics. I'm passionate about automating complex workflows and empowering businesses through transformative AI strategies. Author of "GitHub for Next-Generation Coders" and creator of no-code platforms for AI agent development.
          </p>
        </div>
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
