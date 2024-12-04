import React from 'react'
import OnboardBeneficiary from '../components/ia_dashboard/OnboardBeneficiary'
import IASignup from '../components/signup/IASignup'
import IALogin from '../components/login/IALogin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const IAPage = () => {
  return (
    <div>
        <OnboardBeneficiary />
        <IASignup />
        <IALogin />
        <Route path="/login/ialogin" element={<IALogin />} />
    </div>
  )
}

export default IAPage