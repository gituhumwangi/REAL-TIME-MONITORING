import React from 'react';
import Navbar from '../components/Navbar';
import Participation from '../components/Participation';
// import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import EconomicInfo from '../components/EconomicInfo';
import DonorTrends from '../components/DonorTrends';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Account from '../components/Account';
import About from '../components/About';
import Insights from '../components/Insights';
import SupportCTAEconomic from '../components/SupportCTAEconomic';
import SupportCTATrend from '../components/SupportCTATrend';
import Navbar2 from '../components/Navbar2';
import Trends from '../components/Trends';


const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar2 />
      {/* <HeroSection /> */}
      <Hero />
      {/* <Participation /> */}
      <About />
      <Account />
      {/* <AboutUs /> */}
      <Insights />
      {/* <EconomicInfo /> */}
      <SupportCTAEconomic />
      {/* <DonorTrends /> */}
      <Trends />
      <SupportCTATrend />
      <Footer />
    </div>
  );
};

export default HomePage;
