// src/components/ExploreWorkSection/ExploreWorkSection.tsx
import React from 'react';
import './ExploreWorkSection.css';

const ExploreWorkSection: React.FC = () => {
  return (
    <div className="explore-section">
      <div className="explore-container">
        <div className="explore-content">
          <h2>EXPLORE OUR WORK</h2>
          <p>
            Explore Our Work And Discover How We Restore And Protect Mangrove Ecosystems. 
            Join Online Or In-Person Projects To Experience Firsthand The Importance Of These 
            Vital Coastal Habitats. Learn About Sustainable Methods For Coastal Environments And The 
            People Who Depend On Them.
          </p>
          <div className="explore-buttons">
            <a href="/our-impact" className="explore-button">Our Impact</a>
            <a href="/restoration-training" className="explore-button">Restoration Training</a>
            <a href="/youth-education" className="explore-button">Youth Education</a>
          </div>
        </div>
        <div className="explore-image">
          <img src="/images/mangrove-ecosystem.jpg" alt="Mangrove ecosystem with roots in water" />
        </div>
      </div>
    </div>
  );
};

export default ExploreWorkSection;