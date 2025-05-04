"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './admin.css';

// Admin panel component
const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [events, setEvents] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  // Fetch data based on active tab
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError('');

      try {
        let endpoint;
        
        switch (activeTab) {
          case 'events':
            endpoint = '/api/events';
            break;
          case 'volunteers':
            endpoint = '/api/volunteers';
            break;
          default:
            endpoint = '/api/events';
        }

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log('Response data:', data); // Debugging line

        switch (activeTab) {
          case 'events':
            setEvents(data.data || []);
            break;
          case 'volunteers':
            setVolunteers(data.data || []);
            break;
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Handle event status change
  const handleEventStatusChange = async (eventId, newStatus) => {
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        throw new Error('Failed to update event status');
      }

      // Update events list
      setEvents(events.map(event => 
        event._id === eventId ? { ...event, status: newStatus } : event
      ));
    } catch (err) {
      console.error('Error updating event status:', err);
      alert('Failed to update event status. Please try again.');
    }
  };

  // Handle volunteer application status change
  const handleVolunteerStatusChange = async (volunteerId, newStatus) => {
    try {
      const response = await fetch(`/api/volunteers/${volunteerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        throw new Error('Failed to update volunteer application status');
      }

      // Update volunteers list
      setVolunteers(volunteers.map(volunteer => 
        volunteer._id === volunteerId ? { ...volunteer, status: newStatus } : volunteer
      ));
    } catch (err) {
      console.error('Error updating volunteer status:', err);
      alert('Failed to update volunteer application status. Please try again.');
    }
  };

  // Get status badge class
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'pending':
        return 'status-pending';
      case 'approved':
        return 'status-approved';
      case 'rejected':
        return 'status-rejected';
      default:
        return '';
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <div className="admin-header">
          <h1>Admin Panel</h1>
          <p>Manage events and volunteer applications</p>
        </div>

        <div className="admin-tabs">
          <button 
            className={`admin-tab ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
          <button 
            className={`admin-tab ${activeTab === 'volunteers' ? 'active' : ''}`}
            onClick={() => setActiveTab('volunteers')}
          >
            Volunteers
          </button>
        </div>

        <div className="admin-content">
          {error && <div className="admin-error">{error}</div>}

          {isLoading ? (
            <div className="admin-loading-content">
              <div className="loader"></div>
              <p>Loading data...</p>
            </div>
          ) : (
            <>
              {/* Events Tab */}
              {activeTab === 'events' && (
                <div className="admin-events">
                  <h2>Events Management</h2>
                  <div className="admin-filters">
                    <div className="filter-group">
                      <label>Filter by status:</label>
                      <select>
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                  </div>
                  
                  {events.length === 0 ? (
                    <p className="no-data-message">No events found</p>
                  ) : (
                    <div className="admin-table-container">
                      <table className="admin-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Organizer</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {events.map(event => (
                            <tr key={event._id}>
                              <td>{event.eventName}</td>
                              <td>{event.organizer}</td>
                              <td>{formatDate(event.date)}</td>
                              <td>
                                <span className={`status-badge ${getStatusBadgeClass(event.status)}`}>
                                  {event.status ? event.status.charAt(0).toUpperCase() + event.status.slice(1) : 'Pending'}
                                </span>
                              </td>
                              <td className="action-buttons">
                                <button 
                                  className="view-button"
                                  onClick={() => router.push(`/admin/events/${event._id}`)}
                                >
                                  View
                                </button>
                                {event.status === 'pending' && (
                                  <>
                                    <button 
                                      className="approve-button"
                                      onClick={() => handleEventStatusChange(event._id, 'approved')}
                                    >
                                      Approve
                                    </button>
                                    <button 
                                      className="reject-button"
                                      onClick={() => handleEventStatusChange(event._id, 'rejected')}
                                    >
                                      Reject
                                    </button>
                                  </>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Volunteers Tab */}
              {activeTab === 'volunteers' && (
                <div className="admin-volunteers">
                  <h2>Volunteer Applications</h2>
                  <div className="admin-filters">
                    <div className="filter-group">
                      <label>Filter by status:</label>
                      <select>
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                  </div>
                  
                  {volunteers.length === 0 ? (
                    <p className="no-data-message">No volunteer applications found</p>
                  ) : (
                    <div className="admin-table-container">
                      <table className="admin-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Applied On</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {volunteers.map(volunteer => (
                            <tr key={volunteer._id}>
                              <td>{volunteer.name}</td>
                              <td>{volunteer.email}</td>
                              <td>{volunteer.phone}</td>
                              <td>{formatDate(volunteer.createdAt)}</td>
                              <td>
                                <span className={`status-badge ${getStatusBadgeClass(volunteer.status)}`}>
                                  {volunteer.status ? volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1) : 'Pending'}
                                </span>
                              </td>
                              <td className="action-buttons">
                                <button 
                                  className="view-button"
                                  onClick={() => router.push(`/admin/volunteers/${volunteer._id}`)}
                                >
                                  View Details
                                </button>
                                {volunteer.status === 'pending' && (
                                  <>
                                    <button 
                                      className="approve-button"
                                      onClick={() => handleVolunteerStatusChange(volunteer._id, 'approved')}
                                    >
                                      Approve
                                    </button>
                                    <button 
                                      className="reject-button"
                                      onClick={() => handleVolunteerStatusChange(volunteer._id, 'rejected')}
                                    >
                                      Reject
                                    </button>
                                  </>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPanel;