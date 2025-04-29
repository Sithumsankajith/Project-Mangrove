"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { useAuth } from '@/contexts/AuthContext';
import ResourceCard from '@/components/Resources/ResourceCard';
import './resources.css';

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeLanguage, setActiveLanguage] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { getAuthToken } = useAuth();

  // Fetch resources on component mount
  useEffect(() => {
    const fetchResources = async () => {
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
        
        const response = await fetch('/api/resources', {
          headers
        });

        if (!response.ok) {
          throw new Error('Failed to fetch resources');
        }

        const data = await response.json();
        setResources(data.data || []);
        setFilteredResources(data.data || []);
      } catch (err) {
        console.error('Error fetching resources:', err);
        setError('Failed to load resources. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchResources();
  }, [getAuthToken]);

  // Filter resources when filter or search changes
  useEffect(() => {
    let filtered = [...resources];
    
    // Apply type filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(resource => resource.type === activeFilter);
    }
    
    // Apply language filter
    if (activeLanguage !== 'all') {
      filtered = filtered.filter(resource => resource.language === activeLanguage);
    }
    
    // Apply search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(resource => 
        resource.title.toLowerCase().includes(query) || 
        resource.description.toLowerCase().includes(query) ||
        (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }
    
    setFilteredResources(filtered);
  }, [activeFilter, activeLanguage, searchQuery, resources]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Format resource type for display
  const formatResourceType = (type) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <>
      <Navbar />
      <div className="resources-page">
        <div className="resources-hero">
          <div className="resources-hero-content">
            <h1>Mangrove Knowledge Hub</h1>
            <p>
              Access educational resources, guides, species information, and research materials
              to support mangrove conservation and restoration efforts.
            </p>
          </div>
        </div>

        <div className="resources-container">
          <div className="resources-filters">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
            
            <div className="filter-tabs">
              <button 
                className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-tab ${activeFilter === 'guide' ? 'active' : ''}`}
                onClick={() => setActiveFilter('guide')}
              >
                Guides
              </button>
              <button 
                className={`filter-tab ${activeFilter === 'species' ? 'active' : ''}`}
                onClick={() => setActiveFilter('species')}
              >
                Species
              </button>
              <button 
                className={`filter-tab ${activeFilter === 'article' ? 'active' : ''}`}
                onClick={() => setActiveFilter('article')}
              >
                Articles
              </button>
              <button 
                className={`filter-tab ${activeFilter === 'research' ? 'active' : ''}`}
                onClick={() => setActiveFilter('research')}
              >
                Research
              </button>
              <button 
                className={`filter-tab ${activeFilter === 'video' ? 'active' : ''}`}
                onClick={() => setActiveFilter('video')}
              >
                Videos
              </button>
            </div>
            
            <div className="language-filter">
              <span>Language:</span>
              <button 
                className={`language-button ${activeLanguage === 'all' ? 'active' : ''}`}
                onClick={() => setActiveLanguage('all')}
              >
                All
              </button>
              <button 
                className={`language-button ${activeLanguage === 'english' ? 'active' : ''}`}
                onClick={() => setActiveLanguage('english')}
              >
                English
              </button>
              <button 
                className={`language-button ${activeLanguage === 'sinhala' ? 'active' : ''}`}
                onClick={() => setActiveLanguage('sinhala')}
              >
                Sinhala
              </button>
              <button 
                className={`language-button ${activeLanguage === 'tamil' ? 'active' : ''}`}
                onClick={() => setActiveLanguage('tamil')}
              >
                Tamil
              </button>
            </div>
          </div>

          <div className="resources-content">
            {isLoading ? (
              <div className="resources-loading">
                <div className="loader"></div>
                <p>Loading resources...</p>
              </div>
            ) : error ? (
              <div className="resources-error">
                <p>{error}</p>
                <button 
                  className="retry-button"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </button>
              </div>
            ) : filteredResources.length === 0 ? (
              <div className="no-resources">
                <h3>No resources found</h3>
                <p>
                  {searchQuery 
                    ? `No results found for "${searchQuery}". Try a different search term or remove filters.` 
                    : 'No resources available for the selected filters.'}
                </p>
                {(activeFilter !== 'all' || activeLanguage !== 'all' || searchQuery) && (
                  <button 
                    className="clear-filters"
                    onClick={() => {
                      setActiveFilter('all');
                      setActiveLanguage('all');
                      setSearchQuery('');
                    }}
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            ) : (
              <div className="resources-grid">
                {filteredResources.map((resource) => (
                  <ResourceCard 
                    key={resource._id} 
                    resource={resource} 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResourcesPage;