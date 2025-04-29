"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import './HomeMapSection.css';

// Import EventsMap with no SSR to avoid Leaflet issues
const EventsMap = dynamic(() => import('@/components/EventsMap/EventsMap'), {
  ssr: false,
  loading: () => <div className="home-map-loading">Loading map...</div>
});

const HomeMapSection: React.FC = () => {
  return (
    <section className="home-map-section">
      <div className="home-map-container">
        <div className="home-map-text">
          <h2>Explore Our Conservation Sites</h2>
          <p>
            Discover ongoing mangrove conservation projects and upcoming events across Sri Lanka. 
            Click on the markers to learn more about each location and how you can get involved.
          </p>
        </div>
        <div className="home-map-wrapper">
          <EventsMap 
            center={[80.77, 7.87]}
            zoom={7}
            height="400px"
            showAllEvents={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeMapSection;
