import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const footerStyle = {
    background: 'linear-gradient(45deg, #8a2be2, #7a1bc7)', // Lavender gradient background
    color: '#FFFFFF', // White text color
    padding: '15px 0',
  };

  return (
    <footer style={footerStyle} className="text-center">
      <p>&copy; 2025 Grocify</p>
      <Link to="/terms" className="text-light mx-2">Terms</Link> |
      <Link to="/faq" className="text-light mx-2">FAQ</Link> |
      <Link to="/privacy" className="text-light mx-2">Privacy Policy</Link> {/* Added Privacy Policy link */}
    </footer>
  );
}

export default Footer;
