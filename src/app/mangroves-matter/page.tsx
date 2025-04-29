"use client";
import React from 'react';
import './mangrove-matter.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Import EventsMap with no SSR to avoid Leaflet issues
const EventsMap = dynamic(() => import('@/components/EventsMap/EventsMap'), {
  ssr: false,
  loading: () => <div className="map-loading">Loading map...</div>
});

const MangrovesMatter: React.FC = () => {
  // Project locations for the map
  const projectLocations = [
    {
      position: [79.8356, 7.2048] as [number, number],
      name: "Negombo Lagoon Project",
      description: "Mangrove restoration and community education in Negombo lagoon area."
    },
    {
      position: [81.6913, 7.7293] as [number, number],
      name: "Batticaloa Mangrove Forest",
      description: "Replanting effort with local community involvement to restore damaged coastal regions."
    }
  ];

  return (
    <div className="mangroves-matter-page">
      <Navbar />
      
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Mangrove Forests Are Essential And Highly Intricate Ecosystems</h1>
            <p className="hero-description">
              Mangroves Are Vital Ecosystems That Protect Our Coastlines, Support Biodiversity, 
              And Combat Climate Change. As The Impact Of These Ecosystems On Local Communities 
              And The Environment Becomes More Evident, We Are Committed To Researching And 
              Understanding Mangrove Forests To Restore These Critical Habitats.
            </p>
            <Link href="/our-impact" className="hero-btn">Learn More</Link>
          </div>
          <div className="hero-image">
            <img src="/images/rt-explore-work.jpg" alt="Mangrove forest ecosystem" />
          </div>
        </div>
      </section>
      
      <section className="intro-section">
        <p className="intro-text">
          Welcome to our comprehensive guide on mangrove ecosystems. Here you'll discover 
          the incredible importance of these unique coastal forests and learn why their 
          conservation is critical for our planet's future.
        </p>
        <p className="intro-text">
          From their role in carbon sequestration to serving as nurseries for marine life, 
          mangroves provide ecosystem services worth an estimated $1.6 trillion annually.
        </p>
      </section>
      
      <section className="content-section">
        <div className="section-card">
          <div className="section-content">
            <h2>What Are Mangroves?</h2>
            <p>
              Mangroves are salt-tolerant trees and shrubs that grow in intertidal zones of 
              tropical and subtropical coastlines. With specialized root systems and unique 
              adaptations for dealing with saltwater, these remarkable plants create complex 
              ecosystems that straddle the boundary between land and sea.
            </p>
            <p>
              There are approximately 80 different species of mangrove trees worldwide, 
              each with unique adaptations to their specific environmental conditions.
            </p>
          </div>
          <div className="section-image">
            <img src="/images/mangrove-roots.jpg" alt="Mangrove root systems" />
          </div>
        </div>
        
        <div className="section-card reverse">
          <div className="section-image">
            <img src="/images/youth-education.jpg" alt="Mangroves protecting coastline" />
          </div>
          <div className="section-content">
            <h2>Natural Coastal Protection</h2>
            <p>
              Mangrove forests serve as natural barriers against storm surges, tsunamis, and coastal 
              erosion. Their dense root systems trap sediments, reducing erosion and stabilizing 
              shorelines during extreme weather events.
            </p>
            <p>
              Studies have shown that coastal areas with intact mangrove forests suffer substantially 
              less damage during hurricanes and tropical storms compared to areas where mangroves 
              have been removed.
            </p>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <h2>Explore Our Mangrove Conservation Sites</h2>
        <div className="map-container">
          <EventsMap 
            center={[80.77, 7.87]} 
            zoom={7} 
            height="450px" 
            additionalMarkers={projectLocations}
            showAllEvents={false}
          />
        </div>
        <p className="map-description">
          Our active conservation sites focus on restoration, research, and community engagement. 
          Click on the markers to learn more about each project.
        </p>
      </section>
      
      <section className="interactive-section">
        <h2>Mangrove Ecosystem Benefits</h2>
        <div className="interactive-content">
          <div className="infographic-card">
            <h3>Environmental Benefits</h3>
            <ul>
              <li>Carbon sequestration and storage (blue carbon)</li>
              <li>Water filtration and pollution reduction</li>
              <li>Shoreline stabilization and erosion prevention</li>
              <li>Storm and tsunami protection</li>
              <li>Habitat for endangered species</li>
            </ul>
          </div>
          <div className="infographic-card">
            <h3>Community Benefits</h3>
            <ul>
              <li>Sustainable fisheries and food security</li>
              <li>Timber and non-timber forest products</li>
              <li>Ecotourism opportunities</li>
              <li>Cultural and spiritual significance</li>
              <li>Climate change adaptation strategies</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="facts-section">
        <h2>Fascinating Mangrove Facts</h2>
        <div className="facts-card">
          <div className="facts-grid">
            <div className="facts-column">
              <h3>Biodiversity</h3>
              <ul>
                <li>Mangroves provide breeding and nursery grounds for approximately 75% of tropical commercial fish species</li>
                <li>They support unique and specialized wildlife found nowhere else on Earth</li>
                <li>Over 100 bird species rely on mangroves for at least part of their lifecycle</li>
              </ul>
              
              <div className="fact-image">
                <img src="/images/restoration-training.jpg" alt="Wildlife in mangrove ecosystem" />
              </div>
              
              <h3>Adaptation</h3>
              <ul>
                <li>Mangroves can filter up to 90% of the salt in seawater before it reaches their leaves</li>
                <li>Some species excrete excess salt through specialized glands in their leaves</li>
                <li>Aerial roots called pneumatophores allow trees to breathe in oxygen-poor mud</li>
              </ul>
            </div>
            
            <div className="facts-column">
              <h3>Carbon Storage</h3>
              <ul>
                <li>Mangroves sequester carbon at rates up to four times higher than tropical rainforests</li>
                <li>They can store this carbon for thousands of years in their soils</li>
                <li>A single acre of mangrove forest can store about 1,450 pounds of carbon per year</li>
              </ul>
              
              <div className="fact-image wide">
                <img src="/images/youth-education.jpg" alt="Carbon storage in mangrove ecosystem" />
              </div>
              
              <h3>Threats</h3>
              <ul>
                <li>Over 35% of the worlds mangroves have already been destroyed</li>
                <li>Major threats include aquaculture, agriculture, urban development, and rising sea levels</li>
                <li>We lose approximately 1% of remaining mangroves each year</li>
              </ul>
            </div>
          </div>
          
          <div className="ecosystem-section">
            <h3>Complex Ecosystem Interactions</h3>
            <p>
              Mangroves dont exist in isolation. They form part of interconnected coastal ecosystems 
              alongside seagrass beds and coral reefs. This connectivity supports the life cycles of 
              countless marine species and enhances coastal resilience.
            </p>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <h2>
          Help Us Protect These Vital Ecosystems
        </h2>
        <Link href="/get-involved" className="cta-button">
          Get Involved
        </Link>
      </section>
      
      <Footer />
    </div>
  );
};

export default MangrovesMatter;