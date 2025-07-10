// src/components/NewsletterSignup.js
import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaCheck } from 'react-icons/fa';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1500);
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-header">
            <div className="newsletter-icon">
              <FaEnvelope />
            </div>
            <h3>Stay Updated</h3>
            <p>Get the latest insights on AI, Cloud, and Technology delivered to your inbox.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="newsletter-input"
                disabled={isLoading || isSubscribed}
              />
              <button 
                type="submit" 
                className={`newsletter-btn ${isLoading ? 'loading' : ''} ${isSubscribed ? 'success' : ''}`}
                disabled={isLoading || isSubscribed}
              >
                {isLoading ? (
                  <div className="loading-dots">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : isSubscribed ? (
                  <FaCheck />
                ) : (
                  <FaPaperPlane />
                )}
              </button>
            </div>
            
            {isSubscribed && (
              <div className="success-message">
                <FaCheck /> Thank you for subscribing!
              </div>
            )}
          </form>
          
          <p className="newsletter-disclaimer">
            No spam, unsubscribe at any time. Privacy policy compliant.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
