// src/components/PricingSection.js
import React from 'react';
import { SiMicrosoft, SiGithub } from 'react-icons/si';
import { FaBrain, FaCode, FaCheck } from 'react-icons/fa';

const PricingSection = () => {
  return (
    <section className="pricing-section" id="service">
      <div className="pricing-card">
        <div className="service-icon">
          <SiMicrosoft />
        </div>
        <h2>Azure AI</h2>
        <ul>
          <li><FaCheck /> Azure OpenAI</li>
          <li><FaCheck /> Agentic AI Solutions</li>
          <li><FaCheck /> RAG Implementation</li>
          <li><FaCheck /> AI Search Integration</li>
        </ul>
        <p className="price">$150</p>
        <p className="users">per hour</p>
        <button className="signup-button">Book</button>
      </div>
      <div className="pricing-card">
        <div className="service-icon">
          <FaBrain />
        </div>
        <h2>AI Consulting</h2>
        <ul>
          <li><FaCheck /> AI Strategy</li>
          <li><FaCheck /> Multi-Agent Systems</li>
          <li><FaCheck /> Power BI Integration</li>
          <li><FaCheck /> AI Process Automation</li>
        </ul>
        <p className="price">$180</p>
        <p className="users">per hour</p>
        <button className="signup-button">Book</button>
      </div>
      <div className="pricing-card">
        <div className="service-icon">
          <SiGithub />
        </div>
        <h2>DevOps & Training</h2>
        <ul>
          <li><FaCheck /> GitHub Actions</li>
          <li><FaCheck /> Azure DevOps</li>
          <li><FaCheck /> GitHub Training</li>
          <li><FaCheck /> Terraform</li>
        </ul>
        <p className="price">$130</p>
        <p className="users">per hour</p>
        <button className="signup-button">Book</button>
      </div>
      <div className="pricing-card">
        <div className="service-icon">
          <FaCode />
        </div>
        <h2>Development</h2>
        <ul>
          <li><FaCheck /> C# .NET</li>
          <li><FaCheck /> Python</li>
          <li><FaCheck /> React</li>
          <li><FaCheck /> TypeScript</li>
        </ul>
        <p className="price">$120</p>
        <p className="users">per hour</p>
        <button className="signup-button">Book</button>
      </div>
    </section>
  );
};

export default PricingSection;
