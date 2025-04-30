import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = users.find((user) => user.email === email && user.password === password);

    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));
      setError('');
      navigate('/home');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f5f3ff' }}>
      <div className="card p-5 shadow-lg" style={{ width: '100%', maxWidth: '400px', border: '1px solid #9370DB' }}>
        <h2 className="text-center mb-4" style={{ color: '#6A5ACD' }}>Login</h2>

        <input
          type="email"
          className="form-control my-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control my-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className="text-danger mb-2">{error}</div>}

        <button
          className="btn w-100 my-3"
          style={{ backgroundColor: '#9370DB', borderColor: '#9370DB', color: '#fff' }}
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="text-center">
          <p>
            Don't have an account?{' '}
            <a href="/signup" className="text-decoration-none" style={{ color: '#9370DB' }}>
              Signup here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
