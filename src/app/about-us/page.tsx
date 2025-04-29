import React from 'react';
import './about.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>Our History</h1>
          </div>
          <div className="about-hero-image">
            <img 
              src="/images/team-photo.jpg" 
              alt="Team members standing in mangrove water holding IEEE SIGHT banner" 
            />
          </div>
        </section>

        {/* History Section */}
        <section className="about-history">
          <div className="about-card">
            <p>
              Mangroves Are One Of The Most Important Ecosystems In The
              World, Providing Protection Against Coastal Erosion, Acting As
              Carbon Sinks, And Supporting Rich Biodiversity. However, Due
              To Deforestation, Climate Change, And Human Activities, These
              Ecosystems Are Rapidly Declining. Project Mangrove Was
              Established To Restore, Protect, And Sustain Mangrove Forests
              Through Data-Driven Solutions, Community Engagement, And
              Educational Programs.
            </p>
          </div>
        </section>

        {/* Technology Section */}
        <section className="about-technology">
          <div className="about-card">
            <p>
              Our Project Goes Beyond Traditional Restoration Efforts By
              Incorporating Technology To Monitor, Analyze, And Sustain
              Mangrove Growth. Through An Innovative Digital Platform, We Aim
              To Bridge The Gap In Post-Planting Care, Data Collection, And
              Knowledge Sharing.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="about-mission-image">
            <img src="/images/mission-image.jpg" alt="People planting mangroves in shallow water" />
          </div>
          <div className="about-mission-content">
            <h2>Our Mission</h2>
            <p>
              Our Mission Is To Protect, Restore, And Sustain Mangrove Ecosystems Through Science-Based Conservation,
              Community Engagement, And Education. By Empowering Local Stakeholders, Fostering Environmental
              Awareness, And Promoting Sustainable Practices, We Aim To Safeguard These Vital Coastal Forests For
              Future Generations.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="about-vision">
          <div className="about-vision-content">
            <h2>Our Vision</h2>
            <p>
              We Envision A World Where Thriving Mangrove Forests Support Resilient Coastal Communities, Rich
              Biodiversity, And A Stable Climate. Through Collaborative Action, Innovation, And Education, We Seek To
              Create A Future Where Mangroves Are Recognized, Valued, And Protected As Essential Ecosystems That
              Benefit All Life On Earth.
            </p>
          </div>
          <div className="about-vision-image">
            <img src="/images/vision-image.jpg" alt="Researcher examining mangrove seedlings" />
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <h2>Meet The Team</h2>
          <div className="about-team-card">
            <p>
              Behind Every Successful Mangrove Restoration Project Is A Passionate And Dedicated Team. Our
              Experts In Ecology, Community Engagement, And Having Boots-On-Ground Work Local
              Communities, Bringing Advanced Technology To Life. Get To Know The People Who Are Making
              A Difference.
            </p>
            <Link href="/our-team" className="about-team-button">See Team</Link>
          </div>
        </section>

        {/* Partners Section */}
        <section className="about-partners">
          <h2>Our Partners</h2>
          
          <div className="partner-card">
            <div className="partner-logo">
              <img src="/images/sight.jpg" alt="IEEE SIGHT Logo" />
            </div>
            <div className="partner-content">
              <p>
                IEEE SIGHT Collaborates On Advancing Community-Based Mangrove Restoration By Integrating Innovative
                Technological Solutions. Their Focus On Applying Engineering Expertise To Address Rural And
                Environmental Challenges Strengthens The Impact Of Conservation Efforts And Supports Sustainable
                Development In Coastal Communities.
              </p>
            </div>
          </div>

          <div className="partner-card">
            <div className="partner-logo">
              <img src="/images/ieeesb.png" alt="NSBM Green University Logo" />
            </div>
            <div className="partner-content">
              <p>
                NSBM Green University Plays An Active Role In Promoting Environmental Education
                And Sustainability Initiatives. Through Research, Student Engagement, And Faculty
                Co-Participation In Restoration Projects, NSBM Contributes To Fostering A Culture
                Of Conservation And Empowering Future Leaders In Environmental Stewardship.
              </p>
            </div>
          </div>
        </section>

        {/* Explore Work Section */}
        <section className="about-explore">
          <div className="about-explore-image">
            <img src="/images/mangrove-roots.jpg" alt="Close-up of mangrove roots in water" />
          </div>
          <div className="about-explore-content">
            <h2>EXPLORE OUR WORK</h2>
            <p>
              Explore Our Work And Discover How We Restore And Protect Mangroves
              Through Community-Based Initiatives, Innovative Restoration
              Training And Education Programs. Our Efforts Aim To Create A
              Sustainable Future For Coastal Environments And The People Who
              Depend On Them.
            </p>
            <div className="about-explore-buttons">
              <Link href="/our-impact" className="explore-button">Our Impact</Link>
              <Link href="/restoration-training" className="explore-button">Restoration Training</Link>
              <Link href="/youth-education" className="explore-button">Youth Education</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;