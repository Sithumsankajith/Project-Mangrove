"use client";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './EventsMap.css';

// Define custom pin icon
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [24, 36],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

// Project location icon (different color)
const projectIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [24, 36],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

// Event interface
interface Event {
  _id: string;
  eventName: string;
  organizer: string;
  date: string;
  time: string;
  location: {
    coordinates: [number, number]; // [longitude, latitude]
    address: string;
  };
  description: string;
}

interface EventsMapProps {
  center?: [number, number]; // Default center [longitude, latitude]
  zoom?: number;
  height?: string;
  width?: string;
  showAllEvents?: boolean;
  additionalMarkers?: {
    position: [number, number];
    name: string;
    description: string;
  }[];
}

const EventsMap: React.FC<EventsMapProps> = ({
  center = [80.77, 7.87], // Default center of Sri Lanka
  zoom = 7,
  height = '500px',
  width = '100%',
  showAllEvents = true,
  additionalMarkers = []
}) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (showAllEvents) {
      const fetchEvents = async () => {
        try {
          setIsLoading(true);
          const response = await fetch('/api/events');
          
          if (!response.ok) {
            throw new Error('Failed to fetch events');
          }
          
          const data = await response.json();
          setEvents(data.data);
        } catch (err) {
          console.error('Error fetching events:', err);
          setError('Failed to load events');
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchEvents();
    } else {
      setIsLoading(false);
    }
  }, [showAllEvents]);

  // Fix for Leaflet's default icon issue
  useEffect(() => {
    // Only run this on the client side
    if (typeof window !== 'undefined') {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/marker-icon-2x.png',
        iconUrl: '/leaflet/marker-icon.png',
        shadowUrl: '/leaflet/marker-shadow.png',
      });
    }
  }, []);

  // Convert center from [longitude, latitude] to [latitude, longitude] for Leaflet
  const leafletCenter: [number, number] = [center[1], center[0]];

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="events-map-container" style={{ height, width }}>
      {isLoading ? (
        <div className="map-loading">Loading map...</div>
      ) : error ? (
        <div className="map-error">{error}</div>
      ) : (
        <MapContainer 
          center={leafletCenter} 
          zoom={zoom} 
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Display database events */}
          {showAllEvents && events.map((event) => (
            <Marker 
              key={event._id}
              position={[event.location.coordinates[1], event.location.coordinates[0]]} // Convert from [lng, lat] to [lat, lng]
              icon={customIcon}
            >
              <Popup className="event-popup">
                <div className="event-popup-content">
                  <h3>{event.eventName}</h3>
                  <p className="event-organizer">Organized by: {event.organizer}</p>
                  <p className="event-date-time">
                    {formatDate(event.date)} at {event.time}
                  </p>
                  <p className="event-location">{event.location.address}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          
          {/* Display additional markers (for static locations like project sites) */}
          {additionalMarkers.map((marker, index) => (
            <Marker 
              key={`additional-${index}`}
              position={[marker.position[1], marker.position[0]]} // Convert from [lng, lat] to [lat, lng]
              icon={projectIcon}
            >
              <Popup className="event-popup">
                <div className="event-popup-content">
                  <h3>{marker.name}</h3>
                  <p>{marker.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default EventsMap;
