// ingredient-harmony-frontend/src/components/SignUp.js
// Author: Yakshita Rakholiya
// Graduate Student – MS CS
// Pace University - NYC
// Pace ID: U01875270

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://your-django-backend-url/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          dob,
          email,
          password,
        }),
      });

      if (response.ok) {
        // Successful registration, redirect to login page
        navigate('/login');
      } else {
        const data = await response.json();
        console.error(data); // Log any error messages from the backend
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
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
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
          style={inputStyle}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default SignUp;
