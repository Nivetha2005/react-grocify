import React from 'react';

// Lavender theme styles
const containerStyle = {
  backgroundColor: '#E6E6FA', // Lavender background
  color: '#2c2f3b', // Dark text
  padding: '40px 30px',
  borderRadius: '12px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  maxWidth: '900px',
  margin: '50px auto',
};

const headingStyle = {
  fontSize: '2.2rem',
  fontWeight: 'bold',
  marginBottom: '30px',
  textAlign: 'center',
  color: '#4B0082', // Indigo for contrast
  fontFamily: 'Pacifico, cursive', // Stylish font
};

const subheadingStyle = {
  fontSize: '1.4rem',
  fontWeight: '600',
  marginTop: '25px',
  marginBottom: '10px',
  color: '#6a0dad', // Deep lavender subheading
};

const paragraphStyle = {
  fontSize: '1rem',
  lineHeight: '1.8',
  marginBottom: '20px',
  color: '#2c2f3b',
};

// Component
function Privacy() {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Privacy Policy</h2>

      <p style={paragraphStyle}>
        At GroceryCart, we value your privacy and are dedicated to safeguarding the information you share with us.
        This policy outlines how we collect, use, and protect your data.
      </p>

      <h3 style={subheadingStyle}>Information Collection</h3>
      <p style={paragraphStyle}>
        We collect details such as your name, email, phone number, payment method, and delivery address when you sign up, place an order, or fill a form.
      </p>

      <h3 style={subheadingStyle}>How We Use Your Information</h3>
      <p style={paragraphStyle}>
        Your information helps us to process orders, improve customer support, personalize your shopping experience,
        and send order updates. We do not sell your data to third parties.
      </p>

      <h3 style={subheadingStyle}>Data Security</h3>
      <p style={paragraphStyle}>
        We apply modern security measures to protect your personal data. However, while we aim to protect your data, no
        system is 100% secure.
      </p>

      <h3 style={subheadingStyle}>Cookies</h3>
      <p style={paragraphStyle}>
        Our site uses cookies to better understand your preferences and enhance your experience. You can disable cookies
        via browser settings, though it may affect functionality.
      </p>

      <h3 style={subheadingStyle}>Changes to This Policy</h3>
      <p style={paragraphStyle}>
        We may update our Privacy Policy occasionally. All changes will be posted on this page with the updated revision date.
      </p>
    </div>
  );
}

export default Privacy;
