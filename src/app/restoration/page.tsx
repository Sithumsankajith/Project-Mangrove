import React from 'react';
import './restoration.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';

const RestorationTraining: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="restoration-training-page">
        {/* Hero Section */}
        <section className="rt-hero">
          <div className="rt-hero-overlay">
            <h1>Restoration Training Programs</h1>
            <p>Empowering communities with knowledge and skills for effective mangrove conservation and restoration</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="rt-intro">
          <div className="rt-intro-content">
            <h2>Building Restoration Capacity</h2>
            <p>
              Our restoration training programs are designed to equip local communities, conservation practitioners, 
              and stakeholders with the knowledge, skills, and tools necessary to implement effective mangrove 
              restoration projects. Through hands-on experience and expert guidance, participants learn how to 
              restore degraded mangrove ecosystems and monitor their recovery over time.
            </p>
          </div>
          <div className="rt-intro-image">
            <img src="/images/restoration-training-intro.jpg" alt="Trainees learning about mangrove restoration" />
          </div>
        </section>

        {/* Training Approach Section */}
        <section className="rt-approach">
          <h2>Our Training Approach</h2>
          <div className="rt-approach-grid">
            <div className="rt-approach-card">
              <img src="/images/rt-hands-on.jpg" alt="Hands-on training in the field" />
              <h3>Hands-On Approach</h3>
              <p>
                Participants engage in practical, field-based activities that simulate real restoration challenges. 
                Our learning-by-doing methodology ensures skills are truly mastered.
              </p>
            </div>
            <div className="rt-approach-card">
              <img src="/images/rt-ecological.jpg" alt="Ecological assessment activities" />
              <h3>Ecological Assessment</h3>
              <p>
                Learn to evaluate site conditions, identify suitable species, and understand the ecological factors 
                that influence mangrove restoration success.
              </p>
            </div>
            <div className="rt-approach-card">
              <img src="/images/rt-community.jpg" alt="Community involvement session" />
              <h3>Community Involvement</h3>
              <p>
                Discover strategies for engaging local communities in restoration efforts, ensuring project 
                sustainability through shared ownership and benefits.
              </p>
            </div>
            <div className="rt-approach-card">
              <img src="/images/rt-monitoring.jpg" alt="Monitoring mangrove growth" />
              <h3>Long-Term Monitoring</h3>
              <p>
                Develop skills in establishing monitoring protocols to track restoration progress and ecosystem 
                recovery over time, allowing for adaptive management.
              </p>
            </div>
          </div>
        </section>

        {/* Training Process Section */}
        <section className="rt-process">
          <h2>The Training Process</h2>
          <div className="rt-process-timeline">
            <div className="rt-process-step">
              <div className="rt-step-number">1</div>
              <div className="rt-step-content">
                <h3>Site Selection & Analysis</h3>
                <p>
                  Learn to identify suitable restoration sites and analyze environmental conditions including 
                  hydrology, soil composition, and existing vegetation.
                </p>
                <img src="/images/rt-site-selection.jpg" alt="Site selection and analysis" />
              </div>
            </div>
            <div className="rt-process-step">
              <div className="rt-step-number">2</div>
              <div className="rt-step-content">
                <h3>Species Selection</h3>
                <p>
                  Understand how to select appropriate mangrove species based on site conditions, ecological 
                  functions, and community needs.
                </p>
                <img src="/images/rt-species-selection.jpg" alt="Selecting appropriate mangrove species" />
              </div>
            </div>
            <div className="rt-process-step">
              <div className="rt-step-number">3</div>
              <div className="rt-step-content">
                <h3>Propagation Techniques</h3>
                <p>
                  Master various propagation methods, from collecting and raising seedlings to preparing 
                  propagules for direct planting.
                </p>
                <img src="/images/rt-propagation.jpg" alt="Mangrove propagation techniques" />
              </div>
            </div>
            <div className="rt-process-step">
              <div className="rt-step-number">4</div>
              <div className="rt-step-content">
                <h3>Planting & Establishment</h3>
                <p>
                  Practice proper planting techniques and learn post-planting care strategies to ensure 
                  high survival rates.
                </p>
                <img src="/images/rt-planting.jpg" alt="Planting and establishment activities" />
              </div>
            </div>
            <div className="rt-process-step">
              <div className="rt-step-number">5</div>
              <div className="rt-step-content">
                <h3>Monitoring & Adaptive Management</h3>
                <p>
                  Set up monitoring systems and develop strategies for addressing challenges that arise 
                  during the restoration process.
                </p>
                <img src="/images/rt-monitoring-management.jpg" alt="Monitoring and adaptive management" />
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs Section */}
        <section className="rt-programs">
          <h2>Our Training Programs</h2>
          <div className="rt-programs-container">
            <div className="rt-program-card">
              <img src="/images/rt-community-workshop.jpg" alt="Community workshop" />
              <div className="rt-program-content">
                <h3>Community Workshops</h3>
                <p>
                  One-day workshops for community members to learn basic restoration principles and participate 
                  in local restoration efforts.
                </p>
                <ul className="rt-program-details">
                  <li>Duration: 1 day</li>
                  <li>Participants: 20-30</li>
                  <li>Focus: Basic principles and community participation</li>
                </ul>
              </div>
            </div>
            <div className="rt-program-card">
              <img src="/images/rt-practitioner-course.jpg" alt="Practitioner training course" />
              <div className="rt-program-content">
                <h3>Practitioner Training Course</h3>
                <p>
                  Comprehensive five-day course for conservation practitioners looking to implement restoration 
                  projects in their regions.
                </p>
                <ul className="rt-program-details">
                  <li>Duration: 5 days</li>
                  <li>Participants: 15-20</li>
                  <li>Focus: Comprehensive restoration skills</li>
                </ul>
              </div>
            </div>
            <div className="rt-program-card">
              <img src="/images/rt-trainer-program.jpg" alt="Train-the-trainer program" />
              <div className="rt-program-content">
                <h3>Train-the-Trainer Program</h3>
                <p>
                  Intensive two-week program for individuals who will become trainers in their communities 
                  or organizations.
                </p>
                <ul className="rt-program-details">
                  <li>Duration: 2 weeks</li>
                  <li>Participants: 10-12</li>
                  <li>Focus: Advanced restoration techniques and teaching skills</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="rt-success-stories">
          <h2>Success Stories</h2>
          <div className="rt-stories-container">
            <div className="rt-story">
              <img src="/images/rt-success-1.jpg" alt="Before and after mangrove restoration" />
              <div className="rt-story-content">
                <h3>Negombo Lagoon Restoration</h3>
                <p>
                  A community-led restoration effort trained 30 local fishermen who successfully restored 5 hectares 
                  of degraded mangrove habitat, resulting in increased fish populations and improved livelihoods.
                </p>
                <Link href="/success-stories/negombo" className="rt-read-more">Read More</Link>
              </div>
            </div>
            <div className="rt-story">
              <img src="/images/rt-success-2.jpg" alt="Local trainers leading a workshop" />
              <div className="rt-story-content">
                <h3>Train-the-Trainer Impact</h3>
                <p>
                  12 trainers who completed our advanced program have gone on to train over 500 community members, 
                  establishing a network of restoration practitioners across Sri Lanka's coastal regions.
                </p>
                <Link href="/success-stories/trainers" className="rt-read-more">Read More</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Our Work Section - Customized for Restoration Training */}
        <section className="explore-work restoration-explore">
          <h2>Explore Our Work</h2>
          <p>
            As trailblazers in mangrove conservation, we specialize in restoration training and education through 
            hands-on experiential learning. Our training programs incorporate scientific methodologies with 
            practical, field-based approaches for maximum impact and sustainability.
          </p>
          <div className="explore-work-image">
            <img src="/images/rt-explore-work.jpg" alt="Trainees working on mangrove restoration" />
          </div>
          <div className="explore-work-buttons">
            <Link href="/our-impact" className="ew-button">Our Impact</Link>
            <Link href="/youth-education" className="ew-button">Youth Education</Link>
          </div>
        </section>

        {/* Upcoming Training Section */}
        <section className="rt-upcoming">
          <h2>Upcoming Training Opportunities</h2>
          <div className="rt-calendar">
            <div className="rt-event">
              <div className="rt-event-date">
                <span className="rt-month">Apr</span>
                <span className="rt-day">15</span>
                <span className="rt-year">2025</span>
              </div>
              <div className="rt-event-details">
                <h3>Community Workshop - Batticaloa</h3>
                <p>One-day workshop for local community members interested in mangrove restoration.</p>
                <Link href="/events/community-workshop-apr" className="rt-register-btn">Register</Link>
              </div>
            </div>
            <div className="rt-event">
              <div className="rt-event-date">
                <span className="rt-month">May</span>
                <span className="rt-day">10</span>
                <span className="rt-year">2025</span>
              </div>
              <div className="rt-event-details">
                <h3>Practitioner Training Course - Negombo</h3>
                <p>Five-day comprehensive training for conservation practitioners.</p>
                <Link href="/events/practitioner-course-may" className="rt-register-btn">Register</Link>
              </div>
            </div>
            <div className="rt-event">
              <div className="rt-event-date">
                <span className="rt-month">Jun</span>
                <span className="rt-day">5</span>
                <span className="rt-year">2025</span>
              </div>
              <div className="rt-event-details">
                <h3>Train-the-Trainer Program - Colombo</h3>
                <p>Two-week intensive program for future mangrove restoration trainers.</p>
                <Link href="/events/trainer-program-jun" className="rt-register-btn">Register</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="rt-cta">
          <h2>Join Our Restoration Training Programs</h2>
          <p>
            Ready to develop your skills in mangrove restoration? Join one of our upcoming training programs 
            and become part of the global effort to protect and restore these vital ecosystems.
          </p>
          <div className="rt-cta-buttons">
            <Link href="/contact-us" className="rt-cta-button primary">Contact Us</Link>
            <Link href="/register" className="rt-cta-button secondary">Register for Training</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RestorationTraining;