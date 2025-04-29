"use client";

import React, { useState } from 'react';
import './TeamMember.css';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, bio }) => {
  const [showBio, setShowBio] = useState(false);
  
  const toggleBio = () => {
    setShowBio(!showBio);
  };
  
  return (
    <div className="team-member">
      <div className="team-member-image-container">
        <img src={image} alt={`${name}, ${position}`} className="team-member-image" />
      </div>
      <div className="team-member-info">
        <h3>{name}</h3>
        <p className="team-member-position">{position}</p>
        <button 
          className="read-bio-button" 
          onClick={toggleBio}
        >
          {showBio ? 'Close Bio' : 'Read Bio'}
        </button>
      </div>
      
      {showBio && (
        <div className="team-member-bio">
          <p>{bio}</p>
        </div>
      )}
    </div>
  );
};

export default TeamMember;