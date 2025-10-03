import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignupPage.css';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext'; // 1. Import useAuth

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth(); // 2. Get the signup function
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 3. Call the signup function from our context
    const success = signup(fullName, email, password);
    if (success) {
      alert(`Thank you for signing up, ${fullName}! You can now log in.`);
      navigate('/login'); // Redirect to the login page
    }
  };

  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="signup-form-wrapper">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
          <p className="login-link">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;