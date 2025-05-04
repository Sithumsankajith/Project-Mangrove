// src/components/Navbar/Navbar.tsx
"use client";

import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleRegisterMenu = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.register-dropdown') && isRegisterOpen) {
        setIsRegisterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isRegisterOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            {/* Using the mangrove logo from the images folder */}
            <img src="/images/logo.png" alt="Mangrove Matter Logo" className="logo-image" />
            <span>Project Mangrove</span>
          </a>
        </div>

        <div className="navbar-links-desktop">
          <a href="/" className="nav-link">Home</a>
          <a href="/mangroves-matter" className="nav-link">Mangroves Matter</a>
          <a href="/our-impact" className="nav-link">Our Impact</a>
          <a href="/restoration" className="nav-link">Restoration Training</a>
          <a href="/youth-education" className="nav-link">Youth Education</a>
          <a href="/about-us" className="nav-link">About</a>
          <a href="/contact-us" className="nav-link">Contact Us</a>
          <a href="/add-event" className="nav-link-button">Add Event</a>
          
          {/* Register dropdown */}
          <div className="register-dropdown">
            <button 
              className="register-toggle"
              onClick={toggleRegisterMenu}
              aria-expanded={isRegisterOpen}
              aria-haspopup="true"
            >
              Sign in
              <svg className={`dropdown-arrow ${isRegisterOpen ? 'open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {isRegisterOpen && (
              <div className="dropdown-menu">
                <a href="/registerr" className="dropdown-item">Sign Up</a>
                <a href="/login" className="dropdown-item">Login</a>
              </div>
            )}
          </div>
          
          
        </div>

        <button 
          className="mobile-menu-button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isMenuOpen && (
          <div className="navbar-links-mobile">
            <a href="/" className="nav-link">Home</a>
            <a href="/mangroves-matter" className="nav-link">Mangroves Matter</a>
            <a href="/our-impact" className="nav-link">Our Impact</a>
            <a href="/restoration" className="nav-link">Restoration Training</a>
            <a href="/youth-education" className="nav-link">Youth Education</a>
            <a href="/about-us" className="nav-link">About</a>
            <a href="/contact-us" className="nav-link">Contact Us</a>
            <a href="/add-event" className="nav-link-button">Add Event</a>
            
            
            {/* Mobile register options */}
            <div className="mobile-register-group">
              <a href="/registerr" className="nav-link">Register Now</a>
              <a href="/login" className="nav-link">Login</a>
            </div>
            
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;