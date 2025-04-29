"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar';
import DashboardStats from '@/components/Dashboard/DashboardStats';
import EventsList from '@/components/Dashboard/EventsList';
import EventMap from '@/components/Dashboard/EventMap';
import './dashboard.css';

const Dashboard = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, loading, router]);

  // Fetch user's events
  useEffect(() => {
    const fetchEvents = async () => {
      if (!isAuthenticated) return;
      
      try {
        setIsLoading(true);
        const response = await fetch('/api/events');
        
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        
        const data = await response.json();
        setEvents(data.data || []);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchEvents();
  }, [isAuthenticated]);

  // If still loading or not authenticated, show loading state
  if (loading || !isAuthenticated) {
    return (
      <div className="dashboard-loading">
        <div className="loader"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} user={user} />
        
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h1>Welcome, {user.name}</h1>
            <p className="user-role">{user.role === 'ngo' ? 'NGO Representative' : 
                                      user.role === 'researcher' ? 'Researcher' : 
                                      user.role === 'volunteer' ? 'Volunteer' : 'Community Member'}</p>
          </div>
          
          {activeTab === 'overview' && (
            <>
              <DashboardStats events={events} />
              
              <div className="dashboard-recent-events">
                <h2>Recent Events</h2>
                {isLoading ? (
                  <div className="loading-indicator">Loading events...</div>
                ) : events.length > 0 ? (
                  <EventsList events={events.slice(0, 5)} showViewAllButton={true} />
                ) : (
                  <div className="no-events-message">
                    <p>You haven't created any events yet.</p>
                    <button 
                      className="create-event-button"
                      onClick={() => router.push('/add-event')}
                    >
                      Create Your First Event
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
          
          {activeTab === 'events' && (
            <div className="dashboard-all-events">
              <div className="events-header">
                <h2>All Events</h2>
                <button 
                  className="add-event-button"
                  onClick={() => router.push('/add-event')}
                >
                  Add New Event
                </button>
              </div>
              
              {isLoading ? (
                <div className="loading-indicator">Loading events...</div>
              ) : (
                <EventsList events={events} />
              )}
            </div>
          )}
          
          {activeTab === 'map' && (
            <div className="dashboard-map">
              <h2>Event Map</h2>
              <EventMap events={events} isLoading={isLoading} />
            </div>
          )}
          
          {activeTab === 'profile' && (
            <div className="dashboard-profile">
              <h2>Your Profile</h2>
              <div className="profile-card">
                <div className="profile-field">
                  <span className="field-label">Name:</span>
                  <span className="field-value">{user.name}</span>
                </div>
                <div className="profile-field">
                  <span className="field-label">Email:</span>
                  <span className="field-value">{user.email}</span>
                </div>
                <div className="profile-field">
                  <span className="field-label">Role:</span>
                  <span className="field-value">{user.role === 'ngo' ? 'NGO Representative' : 
                                                user.role === 'researcher' ? 'Researcher' : 
                                                user.role === 'volunteer' ? 'Volunteer' : 'Community Member'}</span>
                </div>
                {user.organization && (
                  <div className="profile-field">
                    <span className="field-label">Organization:</span>
                    <span className="field-value">{user.organization}</span>
                  </div>
                )}
                {user.phone && (
                  <div className="profile-field">
                    <span className="field-label">Phone:</span>
                    <span className="field-value">{user.phone}</span>
                  </div>
                )}
                <button className="edit-profile-button">Edit Profile</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;