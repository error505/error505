// src/components/NewsletterSignup.js
import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaCheck, FaSpinner } from 'react-icons/fa';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError('');
    
    try {
      // Using Formspree for newsletter signup - Replace 'YOUR_NEWSLETTER_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xyzjrdzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          type: 'newsletter_signup',
          _replyto: email
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        
        // Reset after 5 seconds
        setTimeout(() => setIsSubscribed(false), 5000);
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
                  <FaSpinner className="fa-spin" />
                ) : isSubscribed ? (
                  <FaCheck />
                ) : (
                  <FaPaperPlane />
                )}
              </button>
            </div>
            
            {error && (
              <div className="newsletter-message error-message">
                {error}
              </div>
            )}
            
            {isSubscribed && (
              <div className="newsletter-message success-message">
                <FaCheck /> Successfully subscribed! Welcome to the newsletter.
              </div>
            )}
          </form>
          
          <div className="newsletter-features">
            <div className="feature">
              <FaCheck className="feature-icon" />
              <span>Weekly AI & Cloud insights</span>
            </div>
            <div className="feature">
              <FaCheck className="feature-icon" />
              <span>Latest technology trends</span>
            </div>
            <div className="feature">
              <FaCheck className="feature-icon" />
              <span>No spam, unsubscribe anytime</span>
            </div>
          </div>
          
          <p className="newsletter-disclaimer">
            Privacy policy compliant and secure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
