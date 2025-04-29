import React from 'react';
import './our-team.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import TeamMember from '@/components/TeamMember/TeamMember';

const OurTeam: React.FC = () => {
  // Team members data - in a real app, this could come from an API
  const teamMembers = [
    {
      id: 1,
      name: 'Sithum Sankajith',
      position: 'Project Lead',
      image: '/images/team/sithum.jpg',
      bio: 'Sithum leads our conservation efforts with over 10 years of experience in environmental research and community engagement. He specializes in mangrove ecosystems and sustainable development practices.'
    },
    {
      id: 2,
      name: 'Dasunika Yapabandara',
      position: 'Research Coordinator',
      image: '/images/team/dasunika.jpg',
      bio: 'Dasunika oversees our research initiatives and data collection methodologies. With a background in marine biology, she brings valuable expertise in coastal ecosystem management and restoration techniques.'
    },
    {
      id: 3,
      name: 'Diyana Fernando',
      position: 'Community Outreach Manager',
      image: '/images/team/diyana.jpg',
      bio: 'Diyana manages our relationships with local communities and stakeholders. Her work focuses on education, awareness building, and fostering sustainable practices among coastal populations.'
    },
    {
      id: 4,
      name: 'Ukwaththage Sewmini',
      position: 'Education Program Director',
      image: '/images/team/sewmini.jpg',
      bio: 'Sewmini develops and implements our educational programs for schools and youth groups. Her innovative curriculum design has helped thousands of students understand the importance of mangrove conservation.'
    },
    {
      id: 5,
      name: 'Amaya Dangalla',
      position: 'Communications Specialist',
      image: '/images/team/amaya.jpg',
      bio: 'Amaya handles our media relations, content creation, and digital presence. Her background in environmental journalism helps translate complex conservation topics into engaging stories for diverse audiences.'
    },
    {
      id: 6,
      name: 'Navindya Rajapaksha',
      position: 'Field Operations Manager',
      image: '/images/team/navindya.jpg',
      bio: 'Navindya coordinates our field activities including planting, monitoring, and site assessments. His hands-on approach ensures our restoration efforts are implemented effectively and sustainably.'
    },
    {
      id: 7,
      name: 'Sudarshana Priyashan',
      position: 'Technology Lead',
      image: '/images/team/sudarshana.jpg',
      bio: 'Sudarshana develops technological solutions for conservation challenges. From data management systems to monitoring applications, his work bridges the gap between technology and environmental science.'
    },
    {
      id: 8,
      name: 'Nimmana Dasanayake',
      position: 'Restoration Specialist',
      image: '/images/team/nimmana.jpg',
      bio: 'Nimmana brings expertise in ecological restoration and habitat rehabilitation. His knowledge of native species and planting techniques is crucial to our successful mangrove restoration projects.'
    },
    {
      id: 9,
      name: 'Nawanjana Bandara',
      position: 'Policy Advocate',
      image: '/images/team/nawanjana.jpg',
      bio: 'Nawanjana works on policy development and advocacy to protect mangrove ecosystems. Her efforts help establish legal frameworks and regulations that support conservation at the governmental level.'
    },
    {
      id: 10,
      name: 'Diyath Bandara',
      position: 'Partnerships Coordinator',
      image: '/images/team/diyath.jpg',
      bio: 'Diyath manages our relationships with partner organizations, donors, and institutions. His collaborative approach has established valuable connections that strengthen our conservation impact.'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="team-page">
        {/* Hero Section */}
        <section className="team-hero">
          <img 
            src="/images/team-hero.jpg" 
            alt="Team members kayaking through mangroves" 
            className="team-hero-image"
          />
          <div className="team-hero-overlay">
            <h1>Our Team</h1>
            <p>
              Meet the dedicated professionals working to protect and restore mangrove ecosystems 
              in Sri Lanka through research, education, and community engagement.
            </p>
          </div>
        </section>

        {/* Team Introduction */}
        <section className="team-intro">
          <div className="team-intro-content">
            <h2>Who We Are</h2>
            <p>
              Behind every successful mangrove restoration project is a passionate and dedicated team. 
              Our experts in ecology, community engagement, and technology work hand-in-hand with local 
              communities, bringing advanced conservation practices to life. Get to know the people who 
              are making a difference.
            </p>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="team-members">
          <h2>Meet The Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamMember 
                key={member.id}
                name={member.name}
                position={member.position}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="join-team">
          <div className="join-team-content">
            <h2>Join Our Team</h2>
            <p>
              Passionate about mangrove conservation? Interested in making a difference?
              We're always looking for dedicated individuals to join our mission. Check out
              our current openings or send us your resume for future opportunities.
            </p>
            <a href="/careers" className="join-button">View Opportunities</a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default OurTeam;