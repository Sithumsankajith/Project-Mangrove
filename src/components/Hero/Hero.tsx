// src/components/Hero/Hero.tsx
import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title-area">
          {/* <div className="icon-circle">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div> */}
          <h1>Mangrove Forests Are Essential And Highly Intricate Ecosystems</h1>
        </div>
        
        <p className="hero-description">
          Mangroves Are Vital Ecosystems That Protect Our Coastlines, Support Biodiversity, 
          And Combat Climate Change. As The Impact Of These Ecosystems On Local Communities 
          And The Environment Becomes More Evident, We Are Committed To Researching And 
          Understanding Mangrove Forests To Restore These Critical Habitats And Promote A 
          Greener, Healthier Future.
        </p>
        
        <a href="/learn-more" className="learn-more-btn">Learn More</a>
      </div>
      
      <div className="image-gallery">
        <div className="gallery-image">
          <img src="/images/mangrove-planting.jpg" alt="People planting mangrove saplings" />
        </div>
        <div className="gallery-image">
          <img src="/images/mangrove-roots.jpg" alt="Close-up of mangrove roots" />
        </div>
        <div className="gallery-image">
          <img src="/images/education-program.jpg" alt="Educational activities about mangroves" />
        </div>
        <div className="gallery-image">
          <img src="/images/mature-mangrove.jpg" alt="Mature mangrove tree" />
        </div>
      </div>
    </section>
  );
};

export default Hero;