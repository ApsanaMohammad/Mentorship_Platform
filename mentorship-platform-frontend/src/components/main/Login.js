import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch('http://localhost:5226/api/Auth/login', { // Make sure the URL is correct
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();

        // Store the token, username, role, and id in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('role', data.role);
        localStorage.setItem('id', data.id);

        // Redirect based on role (mentee or mentor)
        if (data.role === 'mentee') {
          navigate('/mentee');
        } else {
          navigate('/mentor');
        }
      } else {
        const errorData = await response.text();
        setError(errorData);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f7f7f7' }}>
      <div className="card shadow-lg border-0" style={{ width: '30rem', borderRadius: '1.5rem' }}>
        <div className="card-body">
          <h2 className="text-center mb-4" style={{ color: '#343a40' }}>
            <i className="fas fa-sign-in-alt" style={{ fontSize: '2rem', color: '#007bff' }}></i>
            <br />
            <strong>Login</strong>
          </h2>
          <form onSubmit={handleLogin}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{ borderRadius: '1rem' }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{ borderRadius: '1rem' }}
              />
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-lg" style={{ borderRadius: '1rem' }}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
