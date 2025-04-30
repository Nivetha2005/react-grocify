import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCart, saveCart } from '../utils/localStorageUtils';
import Swal from 'sweetalert2';

const productList = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 100, originalPrice: 100, image: '/apple.avif' },
  { id: 2, name: 'Banana', category: 'Fruits', price: 30, originalPrice: 30, image: '/banana.avif' },
  { id: 3, name: 'Carrot', category: 'Vegetables', price: 40, originalPrice: 40, image: '/carrot.avif' },
  { id: 4, name: 'Broccoli', category: 'Vegetables', price: 60, originalPrice: 60, image: '/bro.avif' },
  { id: 5, name: 'Milk', category: 'Dairy', price: 50, originalPrice: 50, image: '/milk.avif' },
  { id: 6, name: 'Cheese', category: 'Dairy', price: 120, originalPrice: 120, image: '/cheese.avif' },
  { id: 7, name: 'Orange', category: 'Fruits', price: 70, originalPrice: 70, image: '/ora.avif' },
  { id: 8, name: 'Spinach', category: 'Vegetables', price: 35, originalPrice: 35, image: '/spi.avif' },
  { id: 9, name: 'Yogurt', category: 'Dairy', price: 45, originalPrice: 45, image: '/yo.avif' },
  { id: 10, name: 'Strawberry', category: 'Fruits', price: 120, originalPrice: 120, image: '/straw.avif' },
  { id: 11, name: 'Tomato', category: 'Vegetables', price: 50, originalPrice: 50, image: '/toma.avif' },
  { id: 12, name: 'Bread', category: 'Bakery', price: 40, originalPrice: 40, image: '/bread.avif' },
  { id: 13, name: 'Butter', category: 'Dairy', price: 80, originalPrice: 80, image: '/bu.avif' },
  { id: 14, name: 'Chocolate', category: 'Snacks', price: 150, originalPrice: 150, image: '/choc.avif' },
  { id: 15, name: 'Coffee', category: 'Beverages', price: 200, originalPrice: 200, image: '/cof.avif' },
  { id: 16, name: 'Chips', category: 'Snacks', price: 40, originalPrice: 40, image: '/chips.avif' },
  { id: 17, name: 'Soda', category: 'Beverages', price: 35, originalPrice: 35, image: '/soda.avif' },
  { id: 18, name: 'Paper Clips', category: '', price: 15, originalPrice: 15, image: '/paper.avif' },
  { id: 19, name: 'Notebook', category: '', price: 60, originalPrice: 60, image: '/note.avif' },
  { id: 20, name: 'Pen', category: '', price: 20, originalPrice: 20, image: '/pen.avif' },
];

function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialCategory = location.state?.category || '';

  const [cart, setCart] = useState(getCart());
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(initialCategory);

  const filterProducts = useCallback(() => {
    const filtered = productList.filter((product) =>
      (category ? product.category === category : true) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, category]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    let updatedCart;

    if (existingProductIndex !== -1) {
      updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    saveCart(updatedCart);
    Swal.fire('Success!', `${product.name} added to cart! 🛒`, 'success');
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: '#6A5ACD' }}>Our Products</h2>

      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products..."
            style={{ borderColor: '#9370DB' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-control"
            style={{ borderColor: '#9370DB' }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Snacks">Snacks</option>
            <option value="Beverages">Beverages</option>
          </select>
        </div>
      </div>

      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card" style={{ borderColor: '#6A5ACD' }}>
            <img 
  src={product.image} 
  alt={product.name}
  style={{
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  }} 
/>
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#6A5ACD' }}>{product.name}</h5>
                <p className="card-text">₹{product.price}</p>
                <button
                  className="btn"
                  style={{
                    backgroundColor: '#6A5ACD',
                    color: 'white',
                    padding: '10px 20px',
                    fontSize: '16px',
                    borderRadius: '5px',
                  }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          className="btn"
          style={{
            backgroundColor: '#6A5ACD',
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
          }}
          onClick={goToCart}
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
}

export default Products;
