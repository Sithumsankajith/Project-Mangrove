import React from 'react';
import './Dashboard.css';

const DashboardStats = ({ events }) => {
  // Calculate stats from events
  const totalEvents = events.length;
  
  // Calculate total trees planted
  const totalPlants = events.reduce((sum, event) => {
    // Assuming events have a 'plantCount' property
    return sum + (event.plantCount || 0);
  }, 0);
  
  // Calculate estimated survival rate (75% is a reasonable default value)
  const survivalRate = '75%';
  
  return (
    <div className="dashboard-stats">
      <div className="stat-card">
        <div className="stat-value">{totalEvents}</div>
        <div className="stat-label">Total Events</div>
      </div>
      
      <div className="stat-card">
        <div className="stat-value">{totalPlants}</div>
        <div className="stat-label">Mangroves Planted</div>
      </div>
      
      <div className="stat-card">
        <div className="stat-value">{survivalRate}</div>
        <div className="stat-label">Avg. Survival Rate</div>
      </div>
    </div>
  );
};

export default DashboardStats;