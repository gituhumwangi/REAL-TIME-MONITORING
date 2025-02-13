import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DonorSignup from './components/signup/DonorSignup';
import IASignup from './components/signup/IASignup';
import BeneficiarySignup from './components/signup/BeneficiarySignup';
import DonorLogin from './components/login/DonorLogin';
import IAPage from './pages/IAPage';
// import OnboardBeneficiary from './components/ia_dashboard/OnboardBeneficiary';
import OnboardBeneficiary from './components/ia_dashboard/OnboardBeneficiary'
import Participation from './components/Participation';
import IALogin from './components/login/IALogin';
import { AuthProvider } from './hooks/AuthContext'; // Corrected import
import DSidebar from './components/donor_dashboard/DSidebar';
import Project_profile from './components/donor_dashboard/Project_profile';
import IA_profile from './components/donor_dashboard/IA_profile';
import Personal_profile from './components/donor_dashboard/Personal_profile';
import Dashboard from './components/donor_dashboard/Dashboard';
import KPIs from './components/donor_dashboard/KPIs';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <AuthProvider> {/* Wrapping the app with AuthProvider to share the context */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup/donor" element={<DonorSignup />} />
          <Route path="/participation" element={<Participation />} />
          <Route path="/signup/ia" element={<IASignup />} />
          <Route path="/signup/beneficiary" element={<BeneficiarySignup />} />
          <Route path="/login/donor" element={<DonorLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/iapage" element={<IAPage />} />
          <Route path="/ia_dashboard/onboard" element={<OnboardBeneficiary />} />
          <Route path="/login/ialogin" element={<IALogin />} />
          <Route path='/donor/sidebar' element={<DSidebar />}></Route>
          <Route path="project_profile" element={<Project_profile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ia_profile" element={<IA_profile />} />
          <Route path='personal_profile' element={<Personal_profile />}></Route>
          <Route path='kpis' element={KPIs}></Route>
          {/* <Route path='aboutus' element={<AboutUs />}></Route> */}
          {/* <Route path='economicinfo' element={<EconomicInfo />}></Route> */}
          {/* <Route path='donortrends' element={<DonorTrends />}></Route> */}
          {/* <Route path='/' element={<HeroSection></HeroSection>}></Route> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
