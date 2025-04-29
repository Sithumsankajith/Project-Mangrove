import React from 'react';
import { useRouter } from 'next/navigation';
import './Dashboard.css';

const EventsList = ({ events, showViewAllButton = false }) => {
  const router = useRouter();
  
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <div className="events-list">
      {events.map((event) => (
        <div key={event._id} className="event-card">
          <div className="event-header">
            <h3 className="event-name">{event.eventName}</h3>
            <span className="event-date">{formatDate(event.date)}</span>
          </div>
          
          <div className="event-details">
            <div className="event-detail">
              <span className="detail-label">Organizer:</span>
              <span className="detail-value">{event.organizer}</span>
            </div>
            
            <div className="event-detail">
              <span className="detail-label">Time:</span>
              <span className="detail-value">{event.time}</span>
            </div>
            
            <div className="event-detail">
              <span className="detail-label">Location:</span>
              <span className="detail-value">{event.location?.address || 'Address not available'}</span>
            </div>
            
            <div className="event-detail">
              <span className="detail-label">Plants:</span>
              <span className="detail-value">{event.plantCount || 'N/A'}</span>
            </div>
          </div>
          
          <div className="event-actions">
            <button className="event-action-button">
              Edit
            </button>
            <button className="event-action-button">
              View Details
            </button>
          </div>
        </div>
      ))}
      
      {showViewAllButton && events.length > 0 && (
        <button 
          className="view-all-button"
          onClick={() => router.push('/dashboard?tab=events')}
        >
          View All Events
        </button>
      )}
    </div>
  );
};

export default EventsList;