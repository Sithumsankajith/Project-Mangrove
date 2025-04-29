// src/components/ImpactSection/ImpactSection.tsx
"use client";

import React, { useState, useEffect } from 'react';
import './ImpactSection.css';
import HomeMapSection from '../HomeMapSection/HomeMapSection';

// Define the interface for our project locations
interface ProjectLocation {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

// Sample data (would be fetched from backend in production)
const sampleLocations: ProjectLocation[] = [
  {
    id: 1,
    name: "Negombo Lagoon Project",
    description: "Mangrove restoration and community education in Negombo lagoon area.",
    latitude: 7.2048,
    longitude: 79.8356
  },
  {
    id: 2,
    name: "Batticaloa Mangrove Forest",
    description: "Replanting effort with local community involvement to restore damaged coastal regions.",
    latitude: 7.7293,
    longitude: 81.6913
  },
  {
    id: 3,
    name: "Jaffna Peninsula Conservation",
    description: "Protecting and expanding the existing mangrove ecosystem along the northern coast.",
    latitude: 9.6612,
    longitude: 80.0255
  },
  {
    id: 4,
    name: "Trincomalee Bay Initiative",
    description: "Youth education program combined with mangrove restoration in one of Sri Lanka's largest natural harbors.",
    latitude: 8.5922,
    longitude: 81.2016
  }
];

const ImpactSection: React.FC = () => {
  const [locations, setLocations] = useState<ProjectLocation[]>(sampleLocations);
  
  // In a real app, you would fetch the data from your backend
  useEffect(() => {
    // Example of how to fetch data (uncomment in real implementation)
    /*
    const fetchProjectLocations = async () => {
      try {
        const response = await fetch('https://your-api.com/project-locations');
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error('Error fetching project locations:', error);
        // Fallback to sample data if the API fails
        setLocations(sampleLocations);
      }
    };

    fetchProjectLocations();
    
    // Set up a polling mechanism to update data periodically
    const intervalId = setInterval(fetchProjectLocations, 60000); // update every minute
    
    return () => clearInterval(intervalId);
    */
  }, []);

  return (
    <div className="impact-section">
      <div className="impact-container">
        <div className="impact-header">
          <div className="impact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
              <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"></path>
              <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"></path>
            </svg>
          </div>
          <h2>Our Impact</h2>
        </div>
        
        <div className="map-container">
          {/* <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2021889.3997237752!2d79.51261121871664!3d7.857178145272454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1616606496375!5m2!1sen!2sus" 
            width="100%" 
            height="500" 
            style={{ border: 0, borderRadius: '12px' }} 
            allowFullScreen 
            loading="lazy"
            title="Sri Lanka Map"
          ></iframe> */}
          <HomeMapSection />
        </div>
        
        <div className="project-locations">
          <h3>Our Project Locations</h3>
          <div className="location-cards">
            {locations.map(location => (
              <div key={location.id} className="location-card">
                <h4>{location.name}</h4>
                <p>{location.description}</p>
                <div className="location-coordinates">
                  <span>Lat: {location.latitude.toFixed(4)}</span>
                  <span>Long: {location.longitude.toFixed(4)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="impact-stats">
          <div className="impact-stat-item">
            <h3>{locations.length}</h3>
            <p>Active Projects</p>
          </div>
          <div className="impact-stat-item">
            <h3>50,000+</h3>
            <p>Mangroves Planted</p>
          </div>
          <div className="impact-stat-item">
            <h3>12+</h3>
            <p>Local Communities Engaged</p>
          </div>
        </div>
        
        <div className="impact-info">
          <p>
            The Word Mangrove Is Derived From The Portuguese Word Mangue Which Means 
            "Tree" And The English Word Grove Which Is Used For Trees And Shrubs That Are 
            Found In Shallow, Sandy Or Muddy Areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;