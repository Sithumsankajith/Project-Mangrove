"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import './Dashboard.css';

// Import EventsMap with no SSR to avoid Leaflet issues
const EventsMap = dynamic(() => import('@/components/EventsMap/EventsMap'), {
  ssr: false,
  loading: () => <div className="loading-indicator">Loading map...</div>
});

const EventMap = ({ events, isLoading }) => {
  // Convert events to marker format required by EventsMap
  const markers = events.map(event => ({
    position: event.location?.coordinates || [80.77, 7.87], // Default to center of Sri Lanka if no coords
    name: event.eventName,
    description: `Organized by ${event.organizer} on ${new Date(event.date).toLocaleDateString()}`
  }));
  
  return (
    <div className="event-map-container">
      {isLoading ? (
        <div className="loading-indicator">Loading map data...</div>
      ) : (
        <EventsMap 
          center={[80.77, 7.87]} // Center of Sri Lanka
          zoom={7}
          height="500px"
          showAllEvents={false}
          additionalMarkers={markers}
        />
      )}
      
      <div className="map-legend">
        <div className="legend-item">
          <div className="legend-marker"></div>
          <span>Your Event</span>
        </div>
      </div>
    </div>
  );
};

export default EventMap;