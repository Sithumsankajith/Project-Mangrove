// src/pages/Home/Home.tsx
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import StatsSection from '@/components/StatsSection/StatsSection';
import ProgramsSection from '@/components/ProgramsSection/ProgramsSection';
import ImpactSection from '@/components/ImpactSection/ImpactSection';
import PartnersSection from '@/components/PartnersSection/PartnersSection';
import ExploreWorkSection from '@/components/ExploreWorkSection/ExploreWorkSection';
import Footer from '@/components/Footer/Footer';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <StatsSection />
      <ProgramsSection />
      <ImpactSection />
      <PartnersSection />
      <ExploreWorkSection />
      <Footer />
    </div>
  );
};

export default Home;