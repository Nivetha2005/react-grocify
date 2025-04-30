import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUser, clearCart } from '../utils/localStorageUtils'; // Adjust path as needed

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user and cart data from localStorage
    removeUser();
    clearCart();

    // Redirect to login page after logout
    navigate('/login'); // You can change this to '/home' or wherever you'd like
  };

  React.useEffect(() => {
    handleLogout();
  }, []);

  return <div>Logging out...</div>;
};

export default Logout;
