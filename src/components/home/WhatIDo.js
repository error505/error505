// src/components/WhatIDo.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhatIDo = () => {
  return (
    <section className="what-i-do" id="what-i-do">
      <div>
        <h1>What I Do</h1>
        <p>
          I have more than 15 years' experience building software for clients
          all over the world...
        </p>
      </div>
      <div className="services-grid">
        <div className="service">
          <div className="service-icon">
            <FontAwesomeIcon icon={['fab', 'microsoft']} />
          </div>
          <div className="service-description">
            <h3>Azure</h3>
            <p>Microsoft Certified: Cybersecurity Architect Expert & Azure Solutions Architect Expert</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <FontAwesomeIcon icon="code" />
          </div>
          <div className="service-description">
            <h3>C# .net</h3>
            <p>More than years of experience working with C# .net</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </div>
          <div className="service-description">
            <h3>GitHub</h3>
            <p>Certified GitHub Partner Trainer and GitHub Book Author</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <FontAwesomeIcon icon={['fab', 'aws']} />
          </div>
          <div className="service-description">
            <h3>AWS</h3>
            <p>Experienced AWS Cloud Architect</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <FontAwesomeIcon icon={['fab', 'react']} />
          </div>
          <div className="service-description">
            <h3>React</h3>
            <p>Frontend Developer using React, Vue, and Angular</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <FontAwesomeIcon icon={['fab', 'google']} />
          </div>
          <div className="service-description">
            <h3>GCP</h3>
            <p>Experienced Google Cloud Platform Architect.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
