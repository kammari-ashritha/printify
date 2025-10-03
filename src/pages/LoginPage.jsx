import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';
import Header from '../components/Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const isLoggedIn = login(email, password);
    if (isLoggedIn) {
      navigate('/account'); // Redirect to account page on successful login
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
    <Header />
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="login-btn">Log In</button>
        </form>
        
          <p className="signup-link">
               Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
      </div>
    </div>
    </>
  );
};

export default LoginPage;