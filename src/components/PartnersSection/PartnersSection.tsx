// src/components/PartnersSection/PartnersSection.tsx
import React from 'react';
import './PartnersSection.css';

const PartnersSection: React.FC = () => {
  return (
    <div className="partners-section">
      <div className="partners-container">
        <h2>Our Partners</h2>
        
        <div className="partners-grid">
          <div className="partner-card">
            <img src="/images/ieeesb.png" alt="NSBM Green University IEEE Student Branch" className="partner-logo" />
            <h3>NSBM Green University</h3>
            <p>IEEE Student Branch</p>
          </div>
          
          <div className="partner-card">
            <img src="/images/sight.png" alt="IEEE SIGHT" className="partner-logo" />
            <h3>IEEE SIGHT</h3>
            <p>Special Interest Group on Humanitarian Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;