import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

// Styles
const containerStyle = {
  backgroundColor: '#E6E6FA',
  color: '#2c2f3b',
  padding: '40px 20px',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
  maxWidth: '900px',
  margin: '50px auto',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '30px',
  textAlign: 'center',
  color: '#4B0082', // Indigo for contrast
  fontFamily: 'Pacifico, cursive', // Stylish font
};

const accordionItemStyle = {
  backgroundColor: '#ffffff',
  border: 'none',
  borderRadius: '8px',
  marginBottom: '15px',
  overflow: 'hidden',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  backgroundColor: '#D8BFD8',
  color: '#2c2f3b',
  fontWeight: 'bold',
  padding: '12px 16px',
};

const bodyStyle = {
  backgroundColor: '#f9f9f9',
  padding: '16px',
  color: '#2c2f3b',
};

// Component
function FAQ() {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Frequently Asked Questions</h2>
      <Accordion flush>
        <Accordion.Item eventKey="0" style={accordionItemStyle}>
          <Accordion.Header style={headerStyle}>How do I order groceries?</Accordion.Header>
          <Accordion.Body style={bodyStyle}>
            Simply browse your desired items, add them to the cart, and proceed to checkout.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" style={accordionItemStyle}>
          <Accordion.Header style={headerStyle}>Is delivery free?</Accordion.Header>
          <Accordion.Body style={bodyStyle}>
            Yes! We offer free delivery on orders above ₹500.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" style={accordionItemStyle}>
          <Accordion.Header style={headerStyle}>What payment methods do you accept?</Accordion.Header>
          <Accordion.Body style={bodyStyle}>
            You can pay using UPI, debit/credit cards, or opt for cash on delivery.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ;
