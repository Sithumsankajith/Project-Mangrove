// src/components/Navbar/Navbar.tsx
"use client";

import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <a href="/our-impact" className="nav-link">Our Impact</a>
            <a href="/restoration" className="nav-link">Restoration Training</a>
            <a href="/youth-education" className="nav-link">Youth Education</a>
            <a href="/" className="nav-link">Home</a>
            <a href="/about-us" className="nav-link">About</a>
            <a href="/contact-us" className="nav-link">Contact Us</a>
            <a href="/add-event" className="nav-link-button">Add Event</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;