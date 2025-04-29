"use client";
import React from 'react';
import './our-impact.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Import EventsMap with no SSR to avoid Leaflet issues
const EventsMap = dynamic(() => import('@/components/EventsMap/EventsMap'), {
  ssr: false,
  loading: () => <div className="loading-map">Loading map...</div>
});

const OurImpact: React.FC = () => {
  // Project locations for the map
  const projectLocations = [
    {
      position: [79.8356, 7.2048] as [number, number], // [longitude, latitude]
      name: "Negombo Lagoon Project",
      description: "Mangrove restoration and community education in Negombo lagoon area."
    },
    {
      position: [81.6913, 7.7293] as [number, number],
      name: "Batticaloa Mangrove Forest",
      description: "Replanting effort with local community involvement to restore damaged coastal regions."
    },
    {
      position: [80.0255, 9.6612] as [number, number],
      name: "Jaffna Peninsula Conservation",
      description: "Protecting and expanding the existing mangrove ecosystem along the northern coast."
    },
    {
      position: [81.2016, 8.5922] as [number, number],
      name: "Trincomalee Bay Initiative",
      description: "Youth education program combined with mangrove restoration in one of Sri Lanka's largest natural harbors."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="our-impact-page">
        {/* Hero Section with Tiger in Mangroves */}
        {/* <section className="impact-hero">
          <div className="impact-hero-overlay">
            <h1>Mangrove Wildlife: From Forests to Marine Systems, Mangrove Habitats In Regions Like South Asia Harbor These Iconic Tigers Primarily In Swampy And Subtropical Regions. As Mangrove Trees Provide Cover And Breeding Opportunities, There Are Approximately 30 Tigers Living In The Sundarbans, The World's Largest Mangrove Forest, Stretching Between Bangladesh And India.</h1>
          </div>
        </section> */}

        {/* Objectives Section */}
        <section className="objectives-section">
          <h2>The Primary Objectives Of The Mangrove Project Are</h2>
          <ul className="objectives-list">
            <li>To Conserve And Restore Mangrove Ecosystems.</li>
            <li>To Raise Awareness About The Importance Of Mangroves.</li>
            <li>To Educate Communities And Stakeholders On Sustainable Practices.</li>
            <li>To Collaborate With Various Organizations For Improved Conservation Efforts.</li>
          </ul>
          <div className="mangrove-image-small">
            <img src="/images/mangrove-roots.jpg" alt="Mangrove Roots" />
          </div>
        </section>

        {/* Overview Section */}
        <section className="content-section">
          <h2>OVERVIEW</h2>
          <p>
            There Are Approximately 80 Species Of Mangrove Trees, 60 Of Which Thrive In Low Oxygen Salt Water-Rich Muddy Waters Along The Coastlines. To
            Overcome These Harsh Conditions, Mangrove Trees Have Developed Various Root Types, Ranging From Stilt Roots, Prop Roots, Knee Roots, To
            Pneumatophores. These Specialized Roots Not Only Provide Stability Against Waves And Shifting Sediments But Also Enable The Trees To Respire In
            A Fog Of Swamp Gas Emanating From The Soil. Forming Dense Coastal Vegetation, Having An Hold On The Muddy Substrate, Additionally, Mangrove Forests
            Trap Sediments From Rivers And Coastal Areas, Effectively Cleaning Water And Protecting Coastal Habitats From Destructive Runoff For Mangrove
            Ecosystems To Thrive, They Need Appropriate Water Conditions Like Brackish Water, Stable Climate, And Nutrient-Rich Intertidal Zones.
          </p>
          <div className="image-gallery">
            <img src="/images/mangrove-overview.jpg" alt="Mangrove Overview" className="section-image" />
          </div>
        </section>

        {/* Biology Section */}
        <section className="content-section">
          <h2>BIOLOGY</h2>
          <p>
            According To Hogarth (2015), Approximately 70 Species Across 20 Genera From 16 Families Are Classified As
            True Mangroves, Which Are Plant Species Occurring Exclusively In Mangrove Habitats And Possessing
            Specialized Adaptations For This Environment. These Adaptations Include Mechanisms For Salt Exclusion Or
            Excretion, Aerial Breathing Roots, And Vivipary Or Cryptovivipary. Additionally, There Are About 60 Species
            Of Mangrove Associates, Which Are Plants That Can Occur In Other Habitat Types But Are Also Commonly Found
            In Mangrove Forests, Particularly Within The Landward Margins.
          </p>
          <div className="image-gallery">
            <img src="/images/mangrove-biology.jpg" alt="Mangrove Biology" className="section-image" />
          </div>
        </section>

        {/* Map Section*/}
        <section className="map-section">
          <h2>Our Project Locations</h2>
          <div className="map-container">
            <EventsMap 
              center={[80.77, 7.87]} 
              zoom={7} 
              height="450px" 
              additionalMarkers={projectLocations}
              showAllEvents={true}
            />
          </div>
        </section>

        {/* Project Locations */}
        <section className="project-locations">
          <div className="project-cards">
            <div className="project-card">
              <h3>Negombo Lagoon Project</h3>
              <p>Mangrove restoration and community education in Negombo lagoon area.</p>
              <div className="project-coordinates">
                <span>Lat: 7.2048</span>
                <span>Long: 79.8356</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Batticaloa Mangrove Forest</h3>
              <p>Replanting effort with local community involvement to restore damaged coastal regions.</p>
              <div className="project-coordinates">
                <span>Lat: 7.7293</span>
                <span>Long: 81.6913</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Jaffna Peninsula Conservation</h3>
              <p>Protecting and expanding the existing mangrove ecosystem along the northern coast.</p>
              <div className="project-coordinates">
                <span>Lat: 9.6612</span>
                <span>Long: 80.0255</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Trincomalee Bay Initiative</h3>
              <p>Youth education program combined with mangrove restoration in one of Sri Lanka's largest natural harbors.</p>
              <div className="project-coordinates">
                <span>Lat: 8.5922</span>
                <span>Long: 81.2016</span>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="impact-stats">
          <div className="stats-container">
            <div className="stat-card">
              <h3>4</h3>
              <p>Active Projects</p>
            </div>
            <div className="stat-card">
              <h3>50,000+</h3>
              <p>Mangroves Planted</p>
            </div>
            <div className="stat-card">
              <h3>12+</h3>
              <p>Local Communities Engaged</p>
            </div>
          </div>
        </section>

        {/* Adaptation Section */}
        <section className="content-section adaptation-section">
          <h2>ADAPTATION TO OXYGEN-POOR ENVIRONMENTS</h2>
          <p>
            The Red Mangrove (Rhizophora Mangle) Thrives In The Most Frequently Flooded Areas, Using Stilt-Like Prop Roots
            Growing From The Trunk And Branches To Create Additional Support In The Unstable Soft Mud. In Contrast, The Black
            Mangrove (Avicennia Germinans) Grows In Higher Areas Flooded Only During High Tides. From The Soil Around These
            Trees, Pneumatophores (Specialized Aerial Roots) Extend Up To 20 CM (8 In) To Facilitate Oxygen Intake For The
            Roots. Pneumatophores Typically Reach Heights Of 30 To 30 CM (12 In). Though Some Species Can Grow Over 40
            Meters (131 Ft) Tall, Most Mature Mangroves Are Under 10 Meters (33 Ft). Pneumatophores Connect To Extensive
            Cable Roots Below The Soil Surface.
          </p>
          <div className="image-gallery">
            <img src="/images/mangrove-adaptation.jpg" alt="Mangrove Adaptation" className="section-image" />
          </div>
        </section>

        {/* Distribution Section */}
        <section className="content-section">
          <h2>DISTRIBUTION</h2>
          <p>
            Mangrove Ecosystems, Composed Of Marine In Waterways Are Found Along Tropical Coastlines, With Around 80
            True Mangrove Species Globally. These Salt-Tolerant Trees Predominantly Concentrate In The Intertidal Zones Of
            Low, Flat, Subtropical Or Tropical Coastlines, Mangroves Extend Along Three-Quarters Of The World's Tropical And Subtropical
            Coastlines, Spanning Approximately 15.2 Million Hectares Worldwide As Of 2018. Asia Is Home To The Largest
            Mangrove Area, Representing About 42% Of The Global Total, Followed By Africa (21%), North And Central America (15%),
            Oceania (12%), And South America (11%).
          </p>
          <div className="distribution-maps">
            <div className="map-container">
              <img src="/images/world-distribution.jpg" alt="World Distribution of Mangroves" className="map-image" />
              <p className="map-caption">Global Distribution of All Mangroves And Mangrove Hotspots</p>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="content-section sustainability-section">
          <h2>SUSTAINABILITY</h2>
          <div className="sustainability-grid">
            <div className="sustainability-card">
              <h3>Post-Planting Care And Monitoring</h3>
              <p>
                By Establishing Regular Maintenance And Monitoring, The Project
                Ensures The Long-Term Success Of Planted Mangroves And
                Overall Program Effectiveness.
              </p>
            </div>
            <div className="sustainability-card">
              <h3>Robust Data Management</h3>
              <p>
                The Creation Of A Specialized Database And Monitoring System
                Allows For Detailed Assessment And Site-Specific Improvement,
                Supporting Environmental And Related Decision-Making.
              </p>
            </div>
            <div className="sustainability-card">
              <h3>Community Education And Engagement</h3>
              <p>
                The Projects Focus On Educating Local Communities And
                Stakeholders About Mangrove Conservation Is Critical For
                Ensuring The Longevity Of Successful Conservation Efforts.
              </p>
            </div>
            <div className="sustainability-card">
              <h3>Collaborative Approach</h3>
              <p>
                By Working With Various Organizations, Government Bodies,
                Educational Institutions, And Community Leaders, The Project
                Leverages Collective Expertise For Greater Impact.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-action Section */}
        <section className="call-to-action">
          <h2>Join Our Conservation Efforts</h2>
          <p>Help us protect and restore these vital ecosystems for future generations.</p>
          <div className="cta-buttons">
            <Link href="/get-involved" className="cta-button primary">Get Involved</Link>
            <Link href="/donate" className="cta-button secondary">Donate</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default OurImpact;