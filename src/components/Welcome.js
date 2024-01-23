// ingredient-harmony-frontend/src/components/Welcome.js
// Author: Yakshita Rakholiya
// Graduate Student – MS CS
// Pace University - NYC
// Pace ID: U01875270

import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const titleContainerStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const welcomeStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#3498db', // Blue color
  };

  const harmonyStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#e74c3c', // Red color
  };

  const descriptionStyle = {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#34495e', // Dark gray color
  };

  const menuBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%', // Adjust the width as needed
    marginBottom: '1rem',
  };

  const menuButtonStyle = {
    padding: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#3498db', // Blue color
    color: '#ffffff', // White text color
    border: 'none',
    borderRadius: '5px',
  };

  const quickStartButtonStyle = {
    padding: '15px 30px',
    fontSize: '1.5rem',
    margin: '0.5rem',
    cursor: 'pointer',
    backgroundColor: '#3498db', // Blue color
    color: '#ffffff', // White text color
    border: 'none',
    borderRadius: '5px',
  };

  const rightSideStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '2rem', // Adjust the margin as needed
  };

  const imageStyle = {
    width: '100%', // Adjust the width as needed
    marginBottom: '1rem',
  };

  const imageUrl = 'https://www.uclahealth.org/sites/default/files/styles/landscape_3x2_032000_1280x853/public/images/f9/istock-532238937.jpeg?f=de6021f1&itok=PVakjtDf';

  return (
    <div style={containerStyle}>
      <div style={menuBarStyle}>
        <Link to="/">
          <button style={menuButtonStyle}>Home</button>
        </Link>
        {/* Add more menu buttons here as needed */}
      </div>
      <div style={titleContainerStyle}>
        <h1 style={welcomeStyle}>Welcome</h1>
        <h1 style={harmonyStyle}>Ingredient Harmony!</h1>
      </div>
      <p style={descriptionStyle}>
        "Empowering Culinary Creativity with Advanced AI:
        Crafting a Delightful Cooking Experience by Identifying Ingredients and Offering Personalized Recipe Suggestions.
        Unleash the Power of Technology in Your Kitchen Journey!"
      </p>
      <div style={rightSideStyle}>
        <img src={imageUrl} alt="Food" style={imageStyle} />
        <Link to="/login">
          <button style={quickStartButtonStyle}>Login</button>
        </Link>
        <Link to="/signup">
          <button style={quickStartButtonStyle}>Sign Up</button>
        </Link>
        <Link to="/image-capture">
          <button style={quickStartButtonStyle}>Quick Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
