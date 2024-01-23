// ingredient-harmony-frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
import Login from './components/Login'; // Add the import for Login
import ImageCapture from './components/ImageCapture'; // Add the import for ImageCapture

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/image-capture" element={<ImageCapture />} /> {/* Add the route for ImageCapture */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
