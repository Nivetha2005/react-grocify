import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email) {
      alert('Password reset link sent to your email.');
      navigate('/login'); // Redirect to login page
    } else {
      alert('No account found with this email.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f5f3ff' }}>
      <div className="card p-5 shadow-lg" style={{ width: '100%', maxWidth: '400px', border: '1px solid #9370DB' }}>
        <h2 className="text-center mb-4" style={{ color: '#6A5ACD' }}>Forgot Password</h2>

        <input
          type="email"
          className="form-control my-2"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="btn w-100 my-3"
          style={{ backgroundColor: '#9370DB', borderColor: '#9370DB', color: '#fff' }}
          onClick={handleResetPassword}
        >
          Send Reset Link
        </button>

        <div className="text-center">
          <p>
            Remembered your password?{' '}
            <a href="/login" className="text-decoration-none" style={{ color: '#9370DB' }}>
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
