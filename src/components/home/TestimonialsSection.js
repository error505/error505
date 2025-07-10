// src/components/home/TestimonialsSection.js
import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      content: "Igor's expertise in AI and cloud architecture transformed our business. His agentic AI solutions increased our efficiency by 40%. Highly recommend!",
      rating: 5,
      avatar: "https://via.placeholder.com/80x80/667eea/ffffff?text=SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Developer at InnovateLabs",
      content: "Working with Igor on our Azure migration was seamless. His deep knowledge of both technical and business aspects made the project a huge success.",
      rating: 5,
      avatar: "https://via.placeholder.com/80x80/764ba2/ffffff?text=MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager at CloudFirst",
      content: "Igor's GitHub training sessions were exceptional. Our team's productivity improved significantly after implementing his DevOps best practices.",
      rating: 5,
      avatar: "https://via.placeholder.com/80x80/667eea/ffffff?text=ER"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="heading-container text-center">
          <h2 className="modern-heading">What Clients Say</h2>
          <p className="section-subtitle">Testimonials from satisfied clients</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card fade-in-up">
              <div className="testimonial-header">
                <FaQuoteLeft className="quote-icon" />
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
              
              <p className="testimonial-content">"{testimonial.content}"</p>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="author-avatar"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
