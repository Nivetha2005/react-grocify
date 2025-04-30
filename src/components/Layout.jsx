// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container my-5">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
