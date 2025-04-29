"use client";
import React, { useState, useEffect } from 'react';
import './add-event.css';
import './leaflet.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamically import Leaflet components (client-side only)
const MapComponent = dynamic(() => import('@/components/Map/MapComponent'), {
  ssr: false,
  loading: () => <div className="map-loading">Loading map...</div>
});

// Define the event data interface
interface EventData {
  eventName: string;
  organizer: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  location: {
    type: string;
    coordinates: [number, number]; // [longitude, latitude]
    address: string;
  };
  description: string;
  plantCount: number;
  plantSpecies: string;
  status: string;
}

// AddEvents component
const AddEvents: React.FC = () => {
  // Get auth context
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  // State to track form input values
  const [formData, setFormData] = useState({
    eventName: '',
    organizer: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    description: '',
    plantCount: 0,
    plantSpecies: 'Mixed',
    status: 'planned'
  });

  // State for location
  const [locationData, setLocationData] = useState({
    coordinates: [80.77, 7.87] as [number, number], // Default center of Sri Lanka
    address: ''
  });

  // State to track form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Pre-fill form with user data if logged in
  useEffect(() => {
    if (user) {
      setFormData(prevData => ({
        ...prevData,
        organizer: user.name || '',
        email: user.email || '',
        phone: user.phone || ''
      }));
    }
  }, [user]);

  // Redirect if not authenticated (after initial loading)
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login?redirect=/add-event');
    }
  }, [isAuthenticated, loading, router]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Handle numeric values
    if (name === 'plantCount') {
      setFormData({
        ...formData,
        [name]: parseInt(value) || 0
      });
    } else {
      // Update the form data state
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle map marker position
  const handleMarkerPosition = (position: [number, number], address: string) => {
    setLocationData({
      coordinates: position,
      address: address
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate location data
    if (!locationData.address) {
      setError('Please select a location on the map');
      return;
    }

    // Set loading state to true
    setIsLoading(true);
    setError('');
    
    // Prepare event data for submission
    const eventData: EventData = {
      ...formData,
      location: {
        type: 'Point',
        coordinates: locationData.coordinates,
        address: locationData.address
      }
    };
    
    try {
      // Submit data to the API
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Add auth token
        },
        body: JSON.stringify(eventData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }
      
      // Set submitted state to true
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        eventName: '',
        organizer: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        date: '',
        time: '',
        description: '',
        plantCount: 0,
        plantSpecies: 'Mixed',
        status: 'planned'
      });
      
      setLocationData({
        coordinates: [80.77, 7.87],
        address: ''
      });
      
    } catch (error) {
      console.error('Submission error:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit event');
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  // If loading auth status, show loading indicator
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="add-events-page">
        <section className="ae-content">
          <h1>Submit Your Event</h1>
          
          {isSubmitted ? (
            // Success message after submission
            <div className="ae-success-message">
              <h2>Thank You!</h2>
              <p>Your event has been submitted successfully. Our team will review it and get back to you soon.</p>
              <button 
                className="ae-submit-another" 
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another Event
              </button>
            </div>
          ) : (
            // Event submission form
            <div className="ae-form-container">
              <h2>Event Submission Form</h2>
              
              {error && <div className="ae-error-message">{error}</div>}
              
              <form className="ae-form" onSubmit={handleSubmit}>
                <div className="ae-form-group">
                  <label htmlFor="eventName">Event Name:</label>
                  <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="ae-form-group">
                  <label htmlFor="organizer">Organizer:</label>
                  <input
                    type="text"
                    id="organizer"
                    name="organizer"
                    value={formData.organizer}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="ae-form-row">
                  <div className="ae-form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="ae-form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="ae-form-row">
                  <div className="ae-form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="ae-form-group">
                    <label htmlFor="time">Time:</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="ae-form-group">
                  <label>Location:</label>
                  <div className="map-instruction">Click on the map to select the event location</div>
                  <div className="map-container">
                    <MapComponent 
                      center={locationData.coordinates} 
                      onMarkerChange={handleMarkerPosition} 
                    />
                  </div>
                  {locationData.address && (
                    <div className="location-display">
                      Selected location: {locationData.address}
                    </div>
                  )}
                </div>
                
                <div className="ae-form-row">
                  <div className="ae-form-group">
                    <label htmlFor="plantCount">Number of Plants:</label>
                    <input
                      type="number"
                      id="plantCount"
                      name="plantCount"
                      value={formData.plantCount}
                      onChange={handleInputChange}
                      min="0"
                    />
                  </div>
                  
                  <div className="ae-form-group">
                    <label htmlFor="plantSpecies">Plant Species:</label>
                    <select
                      id="plantSpecies"
                      name="plantSpecies"
                      value={formData.plantSpecies}
                      onChange={handleInputChange}
                    >
                      <option value="Mixed">Mixed Species</option>
                      <option value="Rhizophora mucronata">Rhizophora mucronata</option>
                      <option value="Avicennia marina">Avicennia marina</option>
                      <option value="Bruguiera gymnorrhiza">Bruguiera gymnorrhiza</option>
                      <option value="Sonneratia alba">Sonneratia alba</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="ae-form-group">
                  <label htmlFor="status">Event Status:</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <option value="planned">Planned</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                
                <div className="ae-form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="ae-submit-button" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          )}
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AddEvents;