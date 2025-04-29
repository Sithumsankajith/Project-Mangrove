// src/components/StatsSection/StatsSection.tsx
import React from 'react';
import './StatsSection.css';

const StatsSection: React.FC = () => {
  return (
    <div className="stats-section">
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon globe">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h2>30+ COUNTRIES</h2>
          <p>MANGROVE FORESTS ARE FOUND IN TROPICAL AND SUBTROPICAL REGIONS ACROSS RESTORATION EFFORTS AND EDUCATIONAL WORKSHOPS</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon experience">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
              <path d="M2 17L12 22L22 17"></path>
              <path d="M2 12L12 17L22 12"></path>
            </svg>
          </div>
          <h2>20+ YEARS OF EXPERIENCE</h2>
          <p>DECADES OF DEDICATED WORK IN MANGROVE RESTORATION EFFORTS AND ENVIRONMENTAL RESEARCH</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon students">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
              <path d="M2 12V17L12 22L22 17V12"></path>
              <line x1="12" y1="12" x2="12" y2="22"></line>
            </svg>
          </div>
          <h2>500,000+ STUDENTS</h2>
          <p>EDUCATING THE NEXT GENERATION THROUGH OUR MANGROVE-FOCUSED EDUCATIONAL PROGRAMS</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;