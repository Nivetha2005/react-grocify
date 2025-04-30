import React from 'react';

const aboutStyle = {
  background: 'linear-gradient(to right, #8a2be2, #7a1bc7)',
  color: '#E6E6FA',
  minHeight: '100vh',
  padding: '3rem',
  fontFamily: 'Segoe UI, sans-serif',
};

const sectionStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: '2rem',
  marginBottom: '2rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
};

const textStyle = {
  flex: 1,
};

const imageStyle = {
  width: '300px',
  height: 'auto',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
};

function About() {
  return (
    <div style={aboutStyle}>
      <h1 style={{ textAlign: 'center', fontFamily: 'Pacifico, cursive', marginBottom: '2rem' }}>About Grocify</h1>

      <div style={sectionStyle}>
        <img src="/team.avif" alt="Team" style={imageStyle} />
        <div style={textStyle}>
          <h2>Who We Are</h2>
          <p>
            Grocify is a team of passionate people on a mission to simplify grocery shopping using technology. With a user-friendly
            interface and personalized suggestions, we bring freshness to your fingertips.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={textStyle}>
          <h2>What We Do</h2>
          <p>
            We deliver convenience. From browsing your favorite items to managing your cart and checking out – Grocify makes your grocery
            journey smooth and fast.
          </p>
        </div>
        <img src="/mission.avif" alt="Mission" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <img src="/vision.jpg" alt="Vision" style={imageStyle} />
        <div style={textStyle}>
          <h2>Why Grocify?</h2>
          <p>
            Our vibrant interface, real-time features, and love for lavender set us apart. Whether you’re stocking up or shopping on the
            go, Grocify is your best friend in the grocery world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
