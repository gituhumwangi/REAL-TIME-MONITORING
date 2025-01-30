import React from 'react';
import Navbar from '../components/Navbar';
import Participation from '../components/Participation';
// import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import EconomicInfo from '../components/EconomicInfo';
import DonorTrends from '../components/DonorTrends';
import Footer from '../components/Footer';
import Hero from '../components/Hero';


const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      <Hero />
      {/* <Participation /> */}
      <AboutUs />
      <EconomicInfo />
      <DonorTrends />
      <Footer />
    </div>
  );
};

export default HomePage;
