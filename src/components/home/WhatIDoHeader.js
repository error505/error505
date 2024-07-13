// src/components/WhatIDoHeader.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhatIDoHeader = () => {
  return (
    <section className="what-i-do-header" id="about">
      <div className="cta">
        <h1>Igor Iric</h1>
        <p>
          I have more than 15 years' experience building software for clients
          all over the world. As an experienced Azure Solutions Architect Expert, I am responsible for making key decisions that relate to architecture, development, and continuous improvement of the product development cycle. I have a proven track record of leading and managing teams of highly skilled and motivated developers, and providing training and workshops to enhance their skills.
        </p>
        <div className="cta-buttons">
          <button className="icon-button">
            <FontAwesomeIcon icon="eye" /> View Portfolio
          </button>
          <button className="icon-button">
            <FontAwesomeIcon icon="file-alt" /> View Resume
          </button>
        </div>
      </div>
      <img
        src="./static/images/baner.png"
        alt="Igor's Image"
        className="main-image"
      />
    </section>
  );
};

export default WhatIDoHeader;
