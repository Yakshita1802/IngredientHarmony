// ingredient-harmony-frontend/src/components/Login.js
// Author: Yakshita Rakholiya
// Graduate Student – MS CS
// Pace University - NYC
// Pace ID: U01875270

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Update import

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Update from useHistory to useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here, e.g., send data to the backend

    // Reset form fields
    setEmail('');
    setPassword('');

    // Redirect to image capture page after successful login
    navigate('/image-capture'); // Update from history.push to navigate
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const formStyle = {
    width: '400px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '15px',
    fontSize: '1rem',
    backgroundColor: '#3498db', // Blue color
    color: '#ffffff', // White text color
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={formContainerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Log In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
