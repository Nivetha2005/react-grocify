import React from 'react';
import { getCart, clearCart } from '../utils/localStorageUtils'; // Utility functions for localStorage
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cart = getCart();  // Get cart items from localStorage
  const navigate = useNavigate();

  // Function to apply category-based discount
  const getDiscountedPrice = (category, price) => {
    const discountRates = {
      Fruits: 0.20,  // 20% off for Fruits
      Vegetables: 0.30,  // 30% off for Vegetables
      Dairy: 0.10,  // 10% off for Dairy
    };

    const discount = discountRates[category] || 0;  // Default to no discount
    const discountedPrice = price - price * discount;

    return discountedPrice > 0 ? discountedPrice : price;  // Ensure the discounted price is returned correctly
  };

  // Calculate total using discounted prices
  const total = cart.reduce((acc, item) => {
    const price = item.originalPrice || 0;  // Fallback to 0 if price is missing
    const discountedPrice = getDiscountedPrice(item.category, price);
    return acc + discountedPrice * item.quantity;
  }, 0);

  const handleOrder = () => {
    clearCart();
    alert('Order placed successfully!');
    navigate('/home');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center" style={{ color: '#6A5ACD' }}>Order Summary</h2>

      <div className="cart-items">
        {cart.length === 0 ? (
          <div className="text-center">
            <p style={{ color: '#9370DB' }}>Your cart is empty</p>
            <button
              className="btn"
              style={{
                backgroundColor: '#6A5ACD',
                color: 'white',
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '5px',
              }}
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          cart.map((item, index) => {
            const price = item.originalPrice || 0;  // Fallback to 0 if price is missing
            const discountedPrice = getDiscountedPrice(item.category, price);

            return (
              <div key={index} className="cart-item mb-3 border-bottom pb-2">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p style={{ color: '#6A5ACD', marginBottom: 0 }}>
                      {item.name} × {item.quantity}
                    </p>
                    <small style={{ color: '#555' }}>
                      {['Fruits', 'Vegetables', 'Dairy'].includes(item.category) && (
                        <>
                          Original: <s>₹{price}</s> | Discounted: ₹{discountedPrice}
                        </>
                      )}
                      {!['Fruits', 'Vegetables', 'Dairy'].includes(item.category) && (
                        <span>Price: ₹{price}</span>
                      )}
                    </small>
                  </div>
                  <p style={{ color: '#9370DB', fontWeight: 'bold' }}>
                    ₹{(discountedPrice * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>

      {cart.length > 0 && (
        <>
          <div className="total text-center mt-4">
            <h4 style={{ color: '#6A5ACD' }}>Total: ₹{total.toFixed(2)}</h4>
          </div>
          <div className="text-center mt-4">
            <button
              className="btn"
              style={{
                backgroundColor: '#6A5ACD',
                color: 'white',
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '5px',
              }}
              onClick={handleOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
