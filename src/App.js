import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUpForm'; 
import ProfilePhotoUploader from './components/ProfilePhotoUploader';
import Cards from './components/Cards'; 
import VerificationEmail from './components/VerificationEmail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/profile" element={<ProfilePhotoUploader />} />
          <Route path="/cards" element={<Cards />} /> 
          <Route path="/VerificationEmail" element={<VerificationEmail />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
