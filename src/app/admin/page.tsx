"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './admin.css';

// Admin panel component
const AdminPanel = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('events');
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  // Redirect if not authenticated or not admin
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        router.push('/login?redirect=/admin');
      } else if (user && user.role !== 'admin') {
        router.push('/dashboard');
      }
    }
  }, [isAuthenticated, loading, router, user]);

  // Fetch data based on active tab
  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'admin') return;

    const fetchData = async () => {
      setIsLoading(true);
      setError('');

      try {
        let endpoint;
        
        switch (activeTab) {
          case 'events':
            endpoint = '/api/events';
            break;
          case 'users':
            endpoint = '/api/users';
            break;
          case 'contacts':
            endpoint = '/api/contact';
            break;
          default:
            endpoint = '/api/events';
        }

        const response = await fetch(endpoint, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        switch (activeTab) {
          case 'events':
            setEvents(data.data || []);
            break;
          case 'users':
            setUsers(data.data || []);
            break;
          case 'contacts':
            setContacts(data.data || []);
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
  }, [activeTab, isAuthenticated, user]);

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

  // Handle event deletion
  const handleDeleteEvent = async (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        const response = await fetch(`/api/events/${eventId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to delete event');
        }

        // Update events list
        setEvents(events.filter(event => event._id !== eventId));
      } catch (err) {
        console.error('Error deleting event:', err);
        alert('Failed to delete event. Please try again.');
      }
    }
  };

  // Handle user deletion
  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`/api/users/${userId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to delete user');
        }

        // Update users list
        setUsers(users.filter(user => user._id !== userId));
      } catch (err) {
        console.error('Error deleting user:', err);
        alert('Failed to delete user. Please try again.');
      }
    }
  };

  // Handle marking contact as read
  const handleMarkContactRead = async (contactId) => {
    try {
      const response = await fetch(`/api/contact/${contactId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({ isRead: true })
      });

      if (!response.ok) {
        throw new Error('Failed to update contact');
      }

      // Update contacts list
      setContacts(contacts.map(contact => 
        contact._id === contactId ? { ...contact, isRead: true } : contact
      ));
    } catch (err) {
      console.error('Error updating contact:', err);
      alert('Failed to mark contact as read. Please try again.');
    }
  };

  // If still loading or not authenticated, show loading state
  if (loading || !isAuthenticated || (user && user.role !== 'admin')) {
    return (
      <div className="admin-loading">
        <div className="loader"></div>
        <p>Loading admin panel...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <div className="admin-header">
          <h1>Admin Panel</h1>
          <p>Manage events, users, and contact messages</p>
        </div>

        <div className="admin-tabs">
          <button 
            className={`admin-tab ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
          <button 
            className={`admin-tab ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
          <button 
            className={`admin-tab ${activeTab === 'contacts' ? 'active' : ''}`}
            onClick={() => setActiveTab('contacts')}
          >
            Contact Messages
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
                                <span className={`status-badge ${event.status}`}>
                                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                                </span>
                              </td>
                              <td className="action-buttons">
                                <button 
                                  className="view-button"
                                  onClick={() => router.push(`/admin/events/${event._id}`)}
                                >
                                  View
                                </button>
                                <button 
                                  className="edit-button"
                                  onClick={() => router.push(`/admin/events/edit/${event._id}`)}
                                >
                                  Edit
                                </button>
                                <button 
                                  className="delete-button"
                                  onClick={() => handleDeleteEvent(event._id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Users Tab */}
              {activeTab === 'users' && (
                <div className="admin-users">
                  <h2>Users Management</h2>
                  
                  {users.length === 0 ? (
                    <p className="no-data-message">No users found</p>
                  ) : (
                    <div className="admin-table-container">
                      <table className="admin-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Created</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map(user => (
                            <tr key={user._id}>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>
                                <span className={`role-badge ${user.role}`}>
                                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                </span>
                              </td>
                              <td>{formatDate(user.createdAt)}</td>
                              <td className="action-buttons">
                                <button 
                                  className="view-button"
                                  onClick={() => router.push(`/admin/users/${user._id}`)}
                                >
                                  View
                                </button>
                                <button 
                                  className="edit-button"
                                  onClick={() => router.push(`/admin/users/edit/${user._id}`)}
                                >
                                  Edit
                                </button>
                                <button 
                                  className="delete-button"
                                  onClick={() => handleDeleteUser(user._id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Contacts Tab */}
              {activeTab === 'contacts' && (
                <div className="admin-contacts">
                  <h2>Contact Messages</h2>
                  
                  {contacts.length === 0 ? (
                    <p className="no-data-message">No contact messages found</p>
                  ) : (
                    <div className="contact-messages">
                      {contacts.map(contact => (
                        <div 
                          key={contact._id} 
                          className={`contact-card ${!contact.isRead ? 'unread' : ''}`}
                        >
                          <div className="contact-header">
                            <h3>{contact.subject}</h3>
                            {!contact.isRead && (
                              <span className="unread-badge">Unread</span>
                            )}
                          </div>
                          
                          <div className="contact-info">
                            <p><strong>From:</strong> {contact.name} ({contact.email})</p>
                            <p><strong>Date:</strong> {formatDate(contact.createdAt)}</p>
                          </div>
                          
                          <div className="contact-message">
                            <p>{contact.message}</p>
                          </div>
                          
                          <div className="contact-actions">
                            {!contact.isRead && (
                              <button 
                                className="mark-read-button"
                                onClick={() => handleMarkContactRead(contact._id)}
                              >
                                Mark as Read
                              </button>
                            )}
                            <a 
                              href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
                              className="reply-button"
                            >
                              Reply
                            </a>
                          </div>
                        </div>
                      ))}
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