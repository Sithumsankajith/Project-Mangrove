"use client";

import React, { useState } from 'react';
import './get-involved.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const GetInvolved = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interests: [],
    experience: '',
    availability: '',
    message: ''
  });
  
  // State for form submission
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Available volunteer interests
  const volunteerInterests = [
    'Planting and Restoration',
    'Educational Programs',
    'Research and Monitoring',
    'Community Outreach',
    'Administrative Support',
    'Fundraising',
    'Event Planning'
  ];
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle checkbox changes for interests
  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, value]
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(interest => interest !== value)
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (formData.interests.length === 0) {
      setError('Please select at least one area of interest');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // For now, just log the data to console and show success message
      console.log('Volunteer data:', formData);
      
      // Set submitted state to true
      setIsSubmitted(true);
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        interests: [],
        experience: '',
        availability: '',
        message: ''
      });
      
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <>
      <Navbar />
      <div className="get-involved-page">
        {/* Hero Section */}
        <section className="gi-hero">
          <div className="gi-hero-content">
            <h1>Get Involved With Project Mangrove</h1>
            <p>Join our community of dedicated volunteers and make a difference in mangrove conservation</p>
          </div>
        </section>
        
        {/* Why Volunteer Section */}
        <section className="gi-why-volunteer">
          <h2>Why Volunteer With Us?</h2>
          <div className="gi-benefits-grid">
            <div className="gi-benefit-card">
              <div className="gi-benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"></path>
                  <path d="M12 8a3 3 0 0 1 0 6 3 3 0 0 1 0-6z"></path>
                </svg>
              </div>
              <h3>Make a Direct Impact</h3>
              <p>Participate in hands-on conservation activities that directly contribute to protecting and restoring vital mangrove ecosystems.</p>
            </div>
            
            <div className="gi-benefit-card">
              <div className="gi-benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3>Build Meaningful Connections</h3>
              <p>Meet like-minded individuals passionate about environmental conservation and build lasting relationships with local communities.</p>
            </div>
            
            <div className="gi-benefit-card">
              <div className="gi-benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>Develop New Skills</h3>
              <p>Gain valuable knowledge and skills in environmental conservation, scientific monitoring, community engagement, and project management.</p>
            </div>
            
            <div className="gi-benefit-card">
              <div className="gi-benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h3>Flexible Opportunities</h3>
              <p>Find volunteer opportunities that match your interests, skills, and availability, whether you can commit to regular activities or one-time events.</p>
            </div>
          </div>
        </section>
        
        {/* Volunteer Opportunities Section */}
        <section className="gi-opportunities">
          <h2>Volunteer Opportunities</h2>
          <div className="gi-opportunities-grid">
            <div className="gi-opportunity-card">
              <img src="/images/planting-volunteers.jpg" alt="Volunteers planting mangrove seedlings" />
              <h3>Mangrove Planting</h3>
              <p>Join community planting events to restore degraded mangrove areas. Learn proper planting techniques and help monitor seedling growth and survival.</p>
            </div>
            
            <div className="gi-opportunity-card">
              <img src="/images/education-volunteers.jpg" alt="Volunteer teaching children about mangroves" />
              <h3>Educational Programs</h3>
              <p>Help develop and deliver educational programs for schools, communities, and visitors about the importance of mangrove ecosystems.</p>
            </div>
            
            <div className="gi-opportunity-card">
              <img src="/images/research-volunteers.jpg" alt="Volunteers collecting data in mangrove forest" />
              <h3>Research & Monitoring</h3>
              <p>Assist with scientific data collection, species surveys, and long-term monitoring of restoration sites to evaluate project success.</p>
            </div>
            
            <div className="gi-opportunity-card">
              <img src="/images/outreach-volunteers.jpg" alt="Volunteers at community outreach event" />
              <h3>Community Outreach</h3>
              <p>Engage with local communities, organize awareness events, and help build support for mangrove conservation initiatives.</p>
            </div>
          </div>
        </section>
        
        {/* Volunteer Form Section */}
        <section id="volunteer-form" className="gi-volunteer-form">
          <div className="gi-form-container">
            {isSubmitted ? (
              <div className="gi-success-message">
                <div className="gi-success-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2>Thank You for Your Interest!</h2>
                <p>Your volunteer application has been submitted successfully. Our team will review your information and contact you shortly with next steps.</p>
                <button 
                  className="gi-reset-button"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <>
                <h2>Volunteer Application</h2>
                <p className="gi-form-intro">
                  Complete the form below to join our volunteer community. We'll match your interests and skills with available opportunities.
                </p>
                
                {error && <div className="gi-error-message">{error}</div>}
                
                <form className="gi-form" onSubmit={handleSubmit}>
                  <div className="gi-form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="gi-form-row">
                    <div className="gi-form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="gi-form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="gi-form-group">
                    <label htmlFor="location">Your Location *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="City, Province/State, Country"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="gi-form-group">
                    <label>Areas of Interest *</label>
                    <div className="gi-checkbox-group">
                      {volunteerInterests.map((interest, index) => (
                        <div key={index} className="gi-checkbox-item">
                          <input
                            type="checkbox"
                            id={`interest-${index}`}
                            name="interests"
                            value={interest}
                            onChange={handleInterestChange}
                            checked={formData.interests.includes(interest)}
                          />
                          <label htmlFor={`interest-${index}`}>{interest}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="gi-form-group">
                    <label htmlFor="experience">Relevant Experience</label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      placeholder="Please describe any relevant experience or skills you have (e.g., environmental work, teaching, community organizing, technical skills)"
                      value={formData.experience}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <div className="gi-form-group">
                    <label htmlFor="availability">Availability *</label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select your availability</option>
                      <option value="weekly">Weekly (Regular commitment)</option>
                      <option value="monthly">Monthly (Regular commitment)</option>
                      <option value="occasional">Occasional (As needed)</option>
                      <option value="one-time">One-time events only</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div className="gi-form-group">
                    <label htmlFor="message">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Any other information you'd like to share with us"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="gi-submit-button"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              </>
            )}
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="gi-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="gi-faq-list">
            <div className="gi-faq-item">
              <h3>Do I need prior experience to volunteer?</h3>
              <p>No prior experience is required for most volunteer opportunities. We provide training and guidance for all activities. Your enthusiasm and willingness to learn are what matter most!</p>
            </div>
            
            <div className="gi-faq-item">
              <h3>How much time do I need to commit?</h3>
              <p>We offer flexible volunteer opportunities to accommodate different schedules. You can participate in one-time events, occasional activities, or commit to regular involvement, depending on your availability.</p>
            </div>
            
            <div className="gi-faq-item">
              <h3>Are there age restrictions for volunteers?</h3>
              <p>Most volunteer activities are open to individuals 18 years and older. However, we do have family-friendly events where younger volunteers can participate when accompanied by a parent or guardian.</p>
            </div>
            
            <div className="gi-faq-item">
              <h3>What should I bring to volunteer events?</h3>
              <p>For field activities, we recommend comfortable clothing appropriate for the weather, closed-toe shoes, sun protection, insect repellent, and water. Specific requirements will be communicated prior to each event.</p>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="gi-cta">
          <h2>Ready to Make a Difference?</h2>
          <p>Join our community of volunteers today and be part of protecting and restoring vital mangrove ecosystems for future generations.</p>
          <a href="#volunteer-form" className="gi-cta-button">Apply Now</a>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GetInvolved;