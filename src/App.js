import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleAuthButton from './components/GoogleAuthButton';
import MediaUpload from './components/MediaUpload';
import MediaDisplay from './components/MediaDisplay';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<GoogleAuthButton />} />
        <Route path="/upload" element={<MediaUpload />} />
        <Route path="/media" element={<MediaDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;
