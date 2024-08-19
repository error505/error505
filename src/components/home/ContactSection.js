// src/components/ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
              {/* Heading */}
       <div className="heading-container">
        <h2 className='text-light'>Contact me</h2>
          <p>Get in Touch<span className="heading-separator-line"></span></p>
        </div>
        {/* Heading end */}

      <div className="get-in-touch-map">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508540.28011556657!2d8.682126551648455!3d50.11092468356758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd09a5d8f3e2ab%3A0x421204a2f6a6f2df!2sFrankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2sus!4v1634773521179!5m2!1sen!2sus"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
      <div className="get-in-touch-grid">
        <div className="get-in-touch-item address">
          <i className="fas fa-map-marker-alt"></i>
          <p>Frankfurt am Main, Germany, Hessen</p>
          <label>Address</label>
        </div>
        <div className="get-in-touch-item phone">
          <i className="fas fa-phone-alt"></i>
          <p>+49173</p>
          <label>Call Us</label>
        </div>
        <div className="get-in-touch-item email">
          <i className="fas fa-envelope"></i>
          <p>email@email.com</p>
          <label>Email Me</label>
        </div>
      </div>
      <div className="contact-form">
        <form action="#" method="POST">
          <input type="text" name="name" placeholder="Your Name *" required />
          <input type="email" name="email" placeholder="Your Email *" required />
          <input type="text" name="subject" placeholder="Your Subject.." />
          <textarea name="message" placeholder="Your message..."></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
