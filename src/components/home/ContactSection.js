// src/components/ContactSection.js
import React, { useState } from 'react';
import { 
  FaLinkedin, 
  FaGithub, 
  FaGlobe, 
  FaCheck, 
  FaSpinner,
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';

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
      <div className="contact-container">
        {/* Heading */}
        <div className="heading-container">
          <h2 className='contact-heading'>Get in Touch</h2>
        </div>
        {/* Heading end */}
        
        <div className="contact-content">
          {/* Address Section */}
          <div className="contact-info">
            <div className="contact-info-section">
              <h3>ADDRESS</h3>
              <div className="address-details">
                <p>Guiollett Str. 22</p>
                <p>Hessen</p>
                <p>Frankfurt, Germany 60329</p>
              </div>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaPhone />
                  <span>+49 (Mobile)</span>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <span>+49 555 545 555</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <span>info@error505.com</span>
                </div>
              </div>
              
              <div className="social-section">
                <h4>FOLLOW ME</h4>
                <div className="social-icons">
                  <a href="https://www.error505.com" target="_blank" rel="noreferrer" title="Website">
                    <FaGlobe />
                  </a>
                  <a href="https://twitter.com/igor_iric" target="_blank" rel="noreferrer" title="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="https://facebook.com/igor.iric" target="_blank" rel="noreferrer" title="Facebook">
                    <FaFacebook />
                  </a>
                  <a href="https://www.linkedin.com/in/igor-iric" target="_blank" rel="noreferrer" title="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/error505" target="_blank" rel="noreferrer" title="GitHub">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h3>SEND US A NOTE</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name" 
                  required 
                  disabled={isSubmitting}
                  className="form-control"
                />
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  required 
                  disabled={isSubmitting}
                  className="form-control"
                />
              </div>
              
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your needs......."
                disabled={isSubmitting}
                className="form-control message-area"
                rows="6"
              ></textarea>
              
              {error && (
                <div className="contact-message error-message">
                  {error}
                </div>
              )}
              
              {isSubmitted && (
                <div className="contact-message success-message">
                  <FaCheck /> Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <button 
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`btn-submit ${isSubmitting ? 'loading' : ''} ${isSubmitted ? 'success' : ''}`}
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
