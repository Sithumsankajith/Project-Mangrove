import React from 'react';
import Link from 'next/link';
import './Resources.css';

const ResourceCard = ({ resource }) => {
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Format resource type for display
  const formatResourceType = (type) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  // Format language for display
  const formatLanguage = (language) => {
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

  // Truncate description
  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className="resource-card">
      <div className="resource-image">
        <img 
          src={resource.featuredImage || '/images/default-resource.jpg'} 
          alt={resource.title} 
        />
        <div className="resource-type-badge">
          {formatResourceType(resource.type)}
        </div>
        <div className="resource-language-badge">
          {formatLanguage(resource.language)}
        </div>
      </div>
      
      <div className="resource-content">
        <h3 className="resource-title">{resource.title}</h3>
        
        <p className="resource-description">
          {truncateDescription(resource.description)}
        </p>
        
        <div className="resource-meta">
          <span className="resource-date">
            {formatDate(resource.createdAt)}
          </span>
          {resource.viewCount > 0 && (
            <span className="resource-views">
              {resource.viewCount} {resource.viewCount === 1 ? 'view' : 'views'}
            </span>
          )}
        </div>
        
        {resource.tags && resource.tags.length > 0 && (
          <div className="resource-tags">
            {resource.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="resource-tag">
                {tag}
              </span>
            ))}
            {resource.tags.length > 3 && (
              <span className="resource-tag-more">
                +{resource.tags.length - 3}
              </span>
            )}
          </div>
        )}
        
        <Link 
          href={`/resources/${resource._id}`} 
          className="resource-link"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;