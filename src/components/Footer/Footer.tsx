// src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-icon">
              <img src="./images/logo.png" alt="icon" width="24" height="24" />

              </div>
              <span>PROJECT MANGROVE</span>
            </div>
            <ul className="footer-links">
              <li><a href="/about-us">About</a></li>
              <li><a href="/impact">Impact</a></li>
              <li><a href="/our-team">Our Team</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>PROGRAMS</h3>
            <ul className="footer-links">
              <li><a href="/restoration-training">Restoration Training</a></li>
              <li><a href="/youth-education">Youth Education</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>TOOLS</h3>
            <ul className="footer-links">
              <li><a href="/add-event">Add Event</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>CONNECT</h3>
            <ul className="footer-links">
              <li><a href="/contact-us">Contact Us</a></li>
              <li className="social-links">
                <a href="https://facebook.com" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://twitter.com" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Project Mangrove. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;