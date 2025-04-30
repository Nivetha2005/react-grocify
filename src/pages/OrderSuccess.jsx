// src/pages/OrderSuccess.js

import React from 'react';
import { Link } from 'react-router-dom';

function OrderSuccess() {
  return (
    <div className="container mt-5 text-center" style={{ color: '#6A5ACD' }}>
      <h2 style={{ color: '#6A5ACD' }}>Your order has been placed successfully!</h2>
      <p style={{ color: '#9370DB' }}>Thank you for shopping with GroceryCart. We will deliver your items soon!</p>
      <Link
        to="/products"
        className="btn"
        style={{
          backgroundColor: '#6A5ACD',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default OrderSuccess;
