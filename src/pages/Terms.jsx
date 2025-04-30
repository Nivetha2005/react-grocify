import React from 'react';
import { FaUserShield, FaLock, FaSyncAlt } from 'react-icons/fa';

// Lavender-themed styles
const pageStyle = {
  backgroundColor: '#E6E6FA', // Lavender background
  minHeight: '100vh',
  padding: '3rem 1rem',
  fontFamily: 'Segoe UI, sans-serif',
  color: '#2c2f3b',
};

const cardStyle = {
  backgroundColor: '#ffffff', // White card for readability
  borderRadius: '16px',
  padding: '2.5rem',
  maxWidth: '900px',
  margin: '2rem auto',
  boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
};

const headingStyle = {
  fontSize: '2.2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '2rem',
  color: '#4B0082', // Indigo
  fontFamily: 'Pacifico, cursive',
};

const sectionStyle = {
  marginBottom: '2rem',
};

const iconStyle = {
  fontSize: '1.5rem',
  marginRight: '0.75rem',
  verticalAlign: 'middle',
  color: '#6a0dad', // Lavender icon color
};

const subHeading = {
  fontSize: '1.3rem',
  fontWeight: '600',
  margin: '1rem 0',
  display: 'flex',
  alignItems: 'center',
  color: '#2c2f3b',
};

const paragraph = {
  fontSize: '1rem',
  lineHeight: '1.7',
  color: '#2c2f3b',
};

// Component
function Terms() {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Terms & Conditions</h2>

        <p style={paragraph}>
          By using <strong>Grocify</strong>, you agree to the terms outlined here. These rules ensure a safe, secure, and respectful platform for all our users. Please read carefully.
        </p>

        <div style={sectionStyle}>
          <h3 style={subHeading}>
            <FaUserShield style={iconStyle} /> General Use
          </h3>
          <p style={paragraph}>
            You must be at least 18 years old to use Grocify. Unauthorized use or violation of the platform policies may result in suspension or permanent removal of your account.
          </p>
        </div>

        <div style={sectionStyle}>
          <h3 style={subHeading}>
            <FaLock style={iconStyle} /> Privacy
          </h3>
          <p style={paragraph}>
            Your privacy matters to us. We ensure your personal information is protected and never misused. Please refer to our <strong>Privacy Policy</strong> for complete details.
          </p>
        </div>

        <div style={sectionStyle}>
          <h3 style={subHeading}>
            <FaSyncAlt style={iconStyle} /> Amendments
          </h3>
          <p style={paragraph}>
            Grocify may update these terms periodically. All changes will be reflected here. Continued use of the platform confirms your agreement to the latest terms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
