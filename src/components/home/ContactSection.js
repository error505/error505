// src/components/ContactSection.js
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaGlobe, FaAmazon, FaYoutube, FaCheck, FaSpinner } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Using Formspree - Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xyzjrdzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* Heading */}
      <div className="heading-container">
        <h2 className='text-light'>Contact me</h2>
        <p>Get in Touch<span className="heading-separator-line"></span></p>
      </div>
      {/* Heading end */}
      
      <div className="get-in-touch-grid">
        <div className="get-in-touch-item address">
          <i className=""></i>
          <p>Frankfurt, Hesse, Germany</p>
          <label>Address</label>
        </div>
        <div className="get-in-touch-item phone">
          <i className=""></i>
          <p>+49 (Mobile)</p>
          <label>Call Us</label>
        </div>
        <div className="get-in-touch-item email">
          <i className=""></i>
          <p>info@error505.com</p>
          <label>Email Me</label>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *" 
            required 
            disabled={isSubmitting}
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email *" 
            required 
            disabled={isSubmitting}
          />
          <input 
            type="text" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            placeholder="Your Subject.." 
            disabled={isSubmitting}
          />
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            disabled={isSubmitting}
          ></textarea>
          
          {error && (
            <div className="form-message error-message">
              {error}
            </div>
          )}
          
          {isSubmitted && (
            <div className="form-message success-message">
              <FaCheck /> Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          <p className="text-center mt-4 mb-0">
            <button 
              id="submit-btn" 
              className="btn btn-primary rounded-pill d-inline-flex" 
              type="submit"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="fa-spin" /> Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <FaCheck /> Sent!
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </p>
        </form>
      </div>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/igor-iric" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/error505" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.error505.com" target="_blank" rel="noreferrer"><FaGlobe /></a>
        <a href="https://amzn.eu/d/dKxnIuh" target="_blank" rel="noreferrer"><FaAmazon /></a>
        <a href="https://www.youtube.com/@iric505" target="_blank" rel="noreferrer"><FaYoutube /></a>
      </div>
    </section>
  );
};

export default ContactSection;
