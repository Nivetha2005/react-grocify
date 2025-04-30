// Save user data to localStorage
export const saveUser = (user) => {
  if (user) {
    localStorage.setItem('user', JSON.stringify(user)); // Save user to localStorage
  }
};

// Retrieve user data from localStorage
export const getUser = () => {
  const user = localStorage.getItem('user'); // Retrieve user from localStorage
  return user ? JSON.parse(user) : null; // Return parsed user object or null if not found
};

// Remove user data from localStorage
export const removeUser = () => {
  localStorage.removeItem('user'); // Remove the user from localStorage
};

// Save cart data to localStorage
export const saveCart = (cart) => {
  if (cart) {
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
  }
};

// Retrieve cart data from localStorage
export const getCart = () => {
  const cart = localStorage.getItem('cart'); // Retrieve cart from localStorage
  return cart ? JSON.parse(cart) : []; // Return parsed cart array, or empty array if not found
};

// Clear cart data from localStorage
export const clearCart = () => {
  localStorage.removeItem('cart'); // Remove the cart from localStorage
};

// Check if user is logged in (based on user data in localStorage)
export const isUserLoggedIn = () => {
  return getUser() !== null; // Return true if user exists in localStorage, otherwise false
};

// Get the current user's email (if logged in)
export const getUserEmail = () => {
  const user = getUser();
  return user ? user.email : null; // Return the user's email or null if not logged in
};
