// src/components/ProgramsSection/ProgramsSection.tsx
import React from 'react';
import './ProgramsSection.css';

const ProgramsSection: React.FC = () => {
  return (
    <div className="programs-section">
      <div className="programs-container">
        <div className="programs-header">
          <h2>Explore Our Programs</h2>
          <p>
            As Trailblazers In Mangrove Conservation, MAP Specializes In Restoration Training And 
            Education Through Hands-On Experiential Learning With 20+ Years Of Experience. We Integrate Scientific Approach With Real-World Experience.
          </p>
        </div>
        
        <div className="programs-cards">
          <div className="program-card">
            <img src="/images/restoration-training.jpg" alt="Restoration Training" className="program-image" />
            <div className="program-content">
              <h3>Restoration Training</h3>
              <ul>
                <li>Effective Restoration Strategies</li>
                <li>Hands-On Approach</li>
                <li>Ecological Assessment</li>
                <li>Community Involvement</li>
                <li>Step-By-Step Guidance</li>
                <li>Long-Term Monitoring</li>
                <li>Ecosystem-Level Training Sessions For Long-Term Success</li>
              </ul>
              <a href="/restoration-training" className="program-link">Learn More</a>
            </div>
          </div>
          
          <div className="program-card">
            <img src="/images/youth-education.jpg" alt="Youth Education" className="program-image" />
            <div className="program-content">
              <h3>Youth Education</h3>
              <ul>
                <li>Inspiring The Next Generation</li>
                <li>Key To Ensuring That Long Term Conservation Goals</li>
                <li>Age-Appropriate Programs</li>
                <li>Hands-On Activities</li>
                <li>Local Ecology Focused</li>
                <li>Educational Strategies To Safeguard These Vital Ecosystems</li>
              </ul>
              <a href="/youth-education" className="program-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;