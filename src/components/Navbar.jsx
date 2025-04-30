import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getUser, removeUser } from '../utils/localStorageUtils';

function Navbar() {
  const user = getUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    removeUser(); // Clear user data from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  const handleLogoClick = () => {
    if (user) {
      navigate('/home');
    }
  };

  const lavenderStyle = {
    color: '#E6E6FA',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
    cursor: user ? 'pointer' : 'default',
  };

  const brandStyle = {
    fontFamily: 'Pacifico, cursive',
    fontSize: '1.5rem',
    color: '#E6E6FA',
    letterSpacing: '1px',
  };

  const buttonStyle = {
    backgroundColor: '#7a1bc7',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 20px',
    cursor: 'pointer',
  };

  // Minimal navbar for login/signup pages
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(45deg, #8a2be2, #7a1bc7)' }}>
      <div className="container-fluid">
        <div onClick={handleLogoClick} style={lavenderStyle}>
          <img src="/banner2.png" alt="Logo" style={{ height: '30px' }} />
          <span style={brandStyle}>Grocify</span>
        </div>

        {/* Show full navbar only if user is logged in and not on login/signup */}
        {user && !isAuthPage && (
          <>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <span className="nav-link" onClick={() => navigate('/home')} style={lavenderStyle}>Home</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={() => navigate('/products')} style={lavenderStyle}>Products</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={() => navigate('/cart')} style={lavenderStyle}>Cart</span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={() => navigate('/about')} style={lavenderStyle}>About Us</span>
                </li>
                <li className="nav-item">
                  <button className="btn" style={buttonStyle} onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
