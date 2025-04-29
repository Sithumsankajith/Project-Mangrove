import React from 'react';
import './youth-education.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';

// Define YouthEducation component
const YouthEducation: React.FC = () => {
  return (
    <>
      {/* Include the Navbar component at the top */}
      <Navbar />
      
      <div className="youth-education-page">
        {/* Hero Section */}
        <section className="ye-hero">
          <div className="ye-hero-content">
            <h1>Youth Education</h1>
          </div>
          <div className="ye-hero-image">
            <img src="/images/youth-education-hero.jpg" alt="Aerial view of mangrove forest with waterways" />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="ye-benefits">
          <h2>Benefits Of This Project</h2>
          
          <div className="ye-benefits-container">
            <div className="ye-benefits-column">
              <h3>Environmental Benefits</h3>
              <ul className="ye-benefits-list">
                <li>
                  <strong>Restored Mangrove Ecosystems</strong> And As Natural Barriers Against Storms And Flooding
                </li>
                <li>
                  <strong>Mangroves Provide Habitat And Breeding Grounds</strong> For Biodiversity And Ecologically Significant Marine Species
                </li>
                <li>
                  <strong>Mangroves Sequester Significant Amounts Of Carbon</strong> Through Biological Processes In Both Trees And Soil
                </li>
              </ul>
            </div>
            
            <div className="ye-benefits-divider"></div>
            
            <div className="ye-benefits-column">
              <ul className="ye-benefits-list">
                <li>
                  <strong>Educating Local Populations And Communities</strong> On Sustainable Practices, The Importance of Native Biodiversity, And Improved Livelihoods Through Conservation
                </li>
                <li>
                  <strong>Increased Resilience</strong> And Greater Understanding Of The Importance Of Mangrove Ecosystems Through Innovative And Engaging Community-Based Education Approaches
                </li>
                <li>
                  <strong>Building Long-Term Relationships With Local Communities</strong> With Knowledge And Tools, Empowering Them To Take An Active Role In Conservation Efforts
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Management Section */}
        <section className="ye-data">
          <div className="ye-data-container">
            <div className="ye-data-content">
              <h2>Data And Knowledge Management</h2>
              <ul className="ye-data-list">
                <li>
                  <strong>Regular Collection And Analysis Of Data</strong> On Project Implementation, Status And Progress, Enhances Data Availability, Essential For Effective Adaptive Management
                </li>
                <li>
                  <strong>Access To Information</strong> And Value Knowledge As A Critical Resource For Conservation
                </li>
                <li>
                  <strong>Ability To Incorporate Best Practice Experiences</strong> To Make Evidence-Based Recommendations For Future Projects And Sustainable Solutions
                </li>
              </ul>
            </div>
            
            <div className="ye-data-divider"></div>
            
            <div className="ye-sustainability-content">
              <h2>Long-Term Sustainability</h2>
              <ul className="ye-sustainability-list">
                <li>
                  <strong>The Focus On Best Practices</strong> And Engaging Monitoring Ensures The Long-Term Success And Sustainability Of Our Programs
                </li>
                <li>
                  <strong>By Involving Local Communities</strong> In Monitoring Efforts, The Project Supports Knowledge Transfer And Increases Overall Community Sustainability Of Conservation Effort
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Education Important Section */}
        <section className="ye-why-important">
          <div className="ye-why-content">
            <h2>Why Is Youth Education Important?</h2>
            <p>
              If We Want Mangroves To Thrive For Generations To Come, Education Is Essential. Today's Youth Must Develop A Deeper Understanding And Appreciation Of These Unique Ecosystems. Youth Education Equips The Next Generation With The Knowledge, Skills, And Tools Necessary To Foster A Meaningful Connection With Nature.
            </p>
            <p>
              Youth Brings Fresh Energy Education Programs Foster Curiosity, Creative Thinking, And Ecological Values. Our Youth Education Program Aims To Create The Environmental Leaders Of Tomorrow.
            </p>
            <Link href="/contact-us" className="ye-button">Learn More</Link>
          </div>
          <div className="ye-why-image">
            <img src="/images/youth-education-why.jpg" alt="Children learning about mangroves" />
          </div>
        </section>

        {/* Coastal Education Section */}
        <section className="ye-coastal">
          <div className="ye-coastal-image">
            <img src="/images/coastal-education.jpg" alt="Coastal education activities" />
          </div>
          <div className="ye-coastal-content">
            <h2>What Is The Coastal Education Program?</h2>
            <p>
              Our Coastal Education Program Is An Award-Winning, Innovative Curriculum That Has Reached Thousands Of Students And Teachers. Designed For Students Ages 8-18, The Program Provides Hands-On Activities That Promote Awareness And Understanding The Real Importance Of Healthy Active Coastlines Of Today.
            </p>
            <p>
              Tailored To Each Country, The Program Gives Both Local Educational Goals While Addressing Human Impacts On Coastal Ecosystems. Our Program Includes Classroom Activities, Field Experiences, And Service-Learning Opportunities, Building The Knowledge And Skills Needed To Protect These Vital Ecosystems For The Future.
            </p>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="ye-curriculum">
          <div className="ye-curriculum-content">
            <h2>Why Is Our Curriculum Special?</h2>
            <p>
              Our Participatory Program Immerses Students In An Active, Hands-On Learning Experience. Rather Than Passive Information Transfer, We Engage Students By Creating Discovery And Guided Inquiry. This Method Has Been Proven To Have A Stronger Memory Retention Rate.
            </p>
            <p>
              Core Topics Include, But Are Not Limited To: Mangrove And Watershed Knowledge, Ecology For The Beginner, Water Chemistry, Mangrove Biodiversity, Field Activities, Scientific Investigations, Conducting Research, Data Collection And More.
            </p>
            <p>
              This Dynamic, Elementary Approach Not Only Makes Learning Fun And Engaging For Both Educators And Students, It Creates A Foundation Of Environmental Stewardship. By Teaching The Science And Importance Of Coastal Environments, We Empower Students To Become Passionate Advocates For Marine Conservation.
            </p>
          </div>
          <div className="ye-curriculum-image">
            <img src="/images/curriculum-special.jpg" alt="Students engaging with mangrove curriculum" />
          </div>
        </section>

        {/* Teacher Support Section */}
        <section className="ye-teacher-support">
          <div className="ye-teacher-image">
            <img src="/images/teacher-support.jpg" alt="Teachers being trained on mangrove curriculum" />
          </div>
          <div className="ye-teacher-content">
            <h2>How Do We Support Teachers?</h2>
            <p>
              We Understand That Educators Face Numerous Challenges When Implementing New Environmental Programs. That's Why We Provide A Clear, Practical Approach For The First Time We Introduce Our Approach Into Regular Classroom Environments.
            </p>
            <p>
              Throughout The Process, We Offer Training Workshops, Comprehensive Teaching Materials, And Programs Tailored To Meet Local Needs While Maintaining Core Mission Of Fostering Environmental Stewardship.
            </p>
            <p>
              Recognizing The Importance Of Long-Term Impact, Our Curriculum Is Designed To Be Easily Integrated Into Existing School Programs, Coming With Ready To Use Lesson Plans And Teacher's Guides. We Also Provide A Quiz That Covers Key It Combines Immersive Experience That Bridges Classroom Education With Real-World Applications, Creating A Learning Approach To Conservation.
            </p>
          </div>
        </section>

        {/* Mangroves Info Section */}
        <section className="ye-mangrove-info">
          <div className="ye-mangrove-content">
            <p>
              Mangroves Are Uniquely Adapted Plant Species That Thrive In Intertidal Coastal Zones, Where They Endure Saltwater Exposure, Oxygen-Poor Soils, And Tidal Fluctuations. Their Specialized Root Systems, Including Stilt Roots And Pneumatophores, Allow For Oxygen Uptake In Anaerobic Conditions. Beyond Their Ecological Adaptations, These Biodiverse Ecosystems Serve As Nurseries For Marine Life, Nesting Sites For Birds, And Effective Carbon Sinks. While Also Providing Physical Protection Against Storms And Erosion. Despite Their Value, Mangroves Face Threats From Human Development, Aquaculture, And Resource Exploitation, Leading To Widespread Habitat Loss. Conservation And Restoration Efforts Are Crucial For Maintaining These Vital Ecosystems And The Services They Provide. By Protecting Mangroves, We Ecological Benefits, Ensure Their Role In Climate Regulation, Biodiversity Support, And Coastal Protection, Safeguarding Their Benefits For Both Current And Future Generations.
            </p>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="ye-testimonial">
          <blockquote className="ye-quote">
            "THE MARVELLOUS MANGROVES CURRICULUM HELPS US BUILD ENVIRONMENTAL AWARENESS IN SCHOOLS IN BRAZIL - ONLY THROUGH IN-DEPTH CONSERVATION WILL WE REACH TRUE CONSERVATION"
            <cite>— CLEMENTE COELHO, INSTITUTO BIOMA BRASIL</cite>
          </blockquote>
          <div className="ye-testimonial-dots">
            <span className="ye-dot active"></span>
            <span className="ye-dot"></span>
            <span className="ye-dot"></span>
          </div>
        </section>

        {/* CTA Section */}
        <section className="ye-cta">
          <h2>Interested? Reach Out To Explore How We Can Support Your Educational Efforts.</h2>
          <p>
            Whether You're Looking To Implement Our Educational Program, Access To Educational Resources, Or Ways To Incorporate Mangrove Protection On A Larger Scale.
          </p>
          <div className="ye-cta-buttons">
            <Link href="/contact-us" className="ye-cta-button">CONTACT US</Link>
            <Link href="/resources" className="ye-cta-button">LEARN MORE</Link>
          </div>
        </section>
      </div>
      
      {/* Include the Footer component at the bottom */}
      <Footer />
    </>
  );
};

export default YouthEducation;