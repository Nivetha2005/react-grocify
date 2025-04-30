import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Logout from './pages/Logout'; // Import the Logout component

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Navbar />
        <div className="main-content flex-grow-1">
          <Routes>
            {/* Redirect root path to signup */}
            <Route path="/" element={<Navigate to="/signup" replace />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />

            {/* Add the Logout route */}
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
