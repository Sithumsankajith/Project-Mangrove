"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import '@/components/Resources/Resources.css';

const ResourceDetail = ({ params }) => {
  const [resource, setResource] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { getAuthToken } = useAuth();
  
  useEffect(() => {
    const fetchResource = async () => {
      setIsLoading(true);
      setError('');
      
      try {
        const token = getAuthToken();
        
        const headers = {
          'Content-Type': 'application/json',
        };
        
        // Add authorization header if token exists
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
        
        const response = await fetch(`/api/resources/${params.id}?view=true`, {
          headers
        });
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Resource not found');
          }
          throw new Error('Failed to fetch resource');
        }
        
        const data = await response.json();
        setResource(data.data);
      } catch (err) {
        console.error('Error fetching resource:', err);
        setError(err.message || 'Failed to load resource');
      } finally {
        setIsLoading(false);
      }
    };
    
    if (params.id) {
      fetchResource();
    }
  }, [params.id, getAuthToken]);
  
  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Format language for display
  const formatLanguage = (language) => {
    if (!language) return '';
    
    switch (language) {
      case 'english':
        return 'English';
      case 'sinhala':
        return 'සිංහල';
      case 'tamil':
        return 'தமிழ்';
      default:
        return language.charAt(0).toUpperCase() + language.slice(1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="resource-detail-container">
        {isLoading ? (
          <div className="resource-loading">
            <div className="loader"></div>
            <p>Loading resource...</p>
          </div>
        ) : error ? (
          <div className="resource-error">
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <Link href="/resources" className="back-to-resources">
              Back to Resources
            </Link>
          </div>
        ) : resource ? (
          <>
            <div className="resource-detail-header">
              <Link href="/resources" className="resource-back-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Resources
              </Link>
              
              <h1 className="resource-detail-title">{resource.title}</h1>
              
              <div className="resource-detail-meta">
                <div className="resource-author">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {resource.author ? resource.author.name : 'Project Mangrove'}
                </div>
                
                <div className="resource-date">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {formatDate(resource.createdAt)}
                </div>
                
                <div className="resource-language">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 2V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 17V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {formatLanguage(resource.language)}
                </div>
                
                <div className="resource-views">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {resource.viewCount} {resource.viewCount === 1 ? 'view' : 'views'}
                </div>
              </div>
            </div>
            
            {resource.featuredImage && (
              <img 
                src={resource.featuredImage} 
                alt={resource.title} 
                className="resource-detail-image" 
              />
            )}
            
            {resource.tags && resource.tags.length > 0 && (
              <div className="resource-detail-tags">
                {resource.tags.map((tag, index) => (
                  <span key={index} className="resource-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <div 
              className="resource-detail-content"
              dangerouslySetInnerHTML={{ __html: resource.content }}
            />
            
            {resource.attachments && resource.attachments.length > 0 && (
              <div className="resource-attachments">
                <h3>Attachments</h3>
                <div className="attachment-list">
                  {resource.attachments.map((attachment, index) => (
                    <div key={index} className="attachment-item">
                      <div className="attachment-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="attachment-info">
                        <div className="attachment-name">{attachment.name}</div>
                        <div className="attachment-type">{attachment.type}</div>
                      </div>
                      <a 
                        href={attachment.file} 
                        download
                        className="attachment-download"
                      >
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default ResourceDetail;