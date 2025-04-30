// src/pages/Products.js

import React, { useState, useEffect } from 'react';
import { getCart, saveCart } from '../utils/localStorageUtils';
import Navbar from '../components/Navbar';
import Swal from 'sweetalert2';

const productList = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 100, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Banana', category: 'Fruits', price: 30, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Carrot', category: 'Vegetables', price: 40, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Broccoli', category: 'Vegetables', price: 60, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Milk', category: 'Dairy', price: 50, image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Cheese', category: 'Dairy', price: 120, image: 'https://via.placeholder.com/150' },
];

function Products() {
  const [cart, setCart] = useState(getCart());
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    setFilteredProducts(productList.filter((product) =>
      (category ? product.category === category : true) &&
      (product.name.toLowerCase().includes(search.toLowerCase()))
    ));
  }, [search, category]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    saveCart(newCart);
    Swal.fire('Added!', `${product.name} has been added to your cart.`, 'success');
  };

  return (
    <div>
      <Navbar onSearch={(term) => setSearch(term)} />
      <div className="container mt-5">
        <h2>Products</h2>

        <div className="d-flex justify-content-between my-3">
          <select className="form-select w-25" onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="">All Categories</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Dairy">Dairy</option>
          </select>
        </div>

        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card shadow">
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">₹{product.price}</p>
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
