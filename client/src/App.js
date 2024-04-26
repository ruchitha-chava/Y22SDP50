// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Login from './components/Login';
import Webpage from './components/Webpage';
import Navbar from './components/Navbar';
import Register from './components/Register';
import FormPage from './components/FormPage';
import Logout from './components/Logout';
import ExercisePage from './components/ExercisePage';
import HealthTips from './components/HealthTips';
import HealthyRecipies from './components/HealthyRecipies';
import Inpatient from './components/Inpatient';
import Outpatient from './components/Outpatient';
import './App.css';
import Web1 from './components/Web1';
import Web2 from './components/Web2';
import Web3 from './components/Web3';
import Web5 from './components/Web5';

// Import your other components here
import Hospitals from './components/Hospitals';
import DoctorConsultation from './components/DoctorConsultation';
import Homecare from './components/Homecare';
import Medicines from './components/Medicines';
import HealthInformation from './components/HealthInformation';
import ContactUs from './components/ContactUs';
import ParentComponent from './components/ParentComponent'; // Ensure this path is correct

function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 const handleLogin = () => {
    // Your authentication logic can be added here
    // For simplicity, let's assume a successful login
    setIsLoggedIn(true);
 };
  
 const handleRegister = (userData) => {
    // Handle registration logic here
    console.log('Registering user:', userData);
    // You can send a request to your backend for user registration

    // For simplicity, let's assume a successful registration
    setIsLoggedIn(true);
 };

 return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />
        {/* Header */}
        <ResponsiveAppBar onLoginClick={() => {}} />
        {/* Main content area */}
        <ParentComponent> {/* Wrap the main content with ParentComponent */}
          <div className="Content" style={{ marginTop: '70px' }}>
            {/* Route configuration */}
            <Routes>
              {/* Route for the login page */}
              <Route path="/" element={isLoggedIn ? <Navigate to="/webpage" /> : <Login onLogin={handleLogin} />} />
              {/* Route for the registration page */}
              <Route path="/register" element={<Register onRegister={handleRegister} />} />
              {/* Route for the home page */}
              <Route path="/webpage" element={<Webpage />} />
              {/* Routes for other components */}
              
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="/doctor-consultation" element={<DoctorConsultation />} />
              <Route path="/homecare" element={<Homecare />} />
              <Route path="/medicines" element={<Medicines />} />
              <Route path="/health-information" element={<HealthInformation />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/exercise" element={<ExercisePage />} />
              <Route path="/healthtips" element={<HealthTips />} />
              <Route path="/healthyrecipies" element={<HealthyRecipies />} />
              <Route path="/medicines" element={<Medicines />} />
              <Route path="/inpatient" element={<Inpatient />} />
              <Route path="/outpatient" element={<Outpatient />} />
              <Route path="/web1" element={<Web1 />} />
            <Route path="/web2" element={<Web2 />} />
            <Route path="/web3" element={<Web3 />} />
            <Route path="/web5" element={<Web5 />} />
            </Routes>
          </div>
        </ParentComponent> {/* End of ParentComponent */}
      </div>
    </Router>
 );
}

export default App;