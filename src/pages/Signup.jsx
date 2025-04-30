import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);
  const isValidPassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{6,}$/.test(password);

  const handleSignup = () => {
    if (!isValidName(name)) {
      setError('Name should contain only alphabets and spaces.');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Enter a valid email address.');
      return;
    }
    if (!isValidPassword(password)) {
      setError('Password must be at least 6 characters long and include uppercase, lowercase, number, and special character.');
      return;
    }

    const newUser = { name, email, password };
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      setError('User with this email already exists.');
      return;
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify(newUser));

    setError('');
    navigate('/home');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f5f3ff' }}>
      <div className="card p-5 shadow-lg" style={{ width: '100%', maxWidth: '400px', border: '1px solid #9370DB' }}>
        <h2 className="text-center mb-4" style={{ color: '#6A5ACD' }}>Sign Up</h2>

        <input
          type="text"
          className="form-control my-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <div className="text-center">
          <p>
            Already have an account?{' '}
            <a href="/login" className="text-decoration-none" style={{ color: '#9370DB' }}>
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;