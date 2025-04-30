import React, { useEffect } from 'react';
import { getUser } from '../utils/localStorageUtils'; // Import the getUser function
import { useNavigate } from 'react-router-dom';

function Home() {
  const user = getUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/signup');
    }
  }, [user, navigate]);

  const handleCategoryClick = (category) => {
    navigate('/products', { state: { category } });
  };

  return (
    <div className="container-fluid px-0" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Banner */}
      <div style={{ position: 'relative', width: '100%' }}>
        <img
          src="/canva.png"
          alt="Grocify Banner"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '450px',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(65%)',
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#FDF6E3',
          textAlign: 'center',
          textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
        }}>
          <h1 style={{
            fontWeight: 'bold',
            fontSize: '2.8rem',
            color: '#FAF3E0',
            fontFamily: "'Pacifico', cursive"
          }}>
            Welcome to Grocify 🛒
          </h1>
          <h2 style={{ color: '#E6E6FA' }}>
            Hi, {user ? user.name : 'Guest'}!
          </h2>

          <p style={{ fontSize: '1.2rem', color: '#F8F8FF' }}>
            One Stop Shop for Freshness and Savings!
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="container my-5">
        <div className="row">
          {/* Fruits */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/fruite.jpg"
                className="card-img-top"
                alt="Fruits"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Fresh Fruits (20% off)</h5>
                <p className="card-text">Delicious and juicy fruits picked fresh every day!</p>
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: '#9370DB', borderColor: '#9370DB' }}
                  onClick={() => handleCategoryClick('Fruits')}
                >
                  Shop Fruits
                </button>
              </div>
            </div>
          </div>

          {/* Vegetables */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/vegi.jpg"
                className="card-img-top"
                alt="Vegetables"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Organic Vegetables (30% off)</h5>
                <p className="card-text">Healthy and farm-fresh veggies straight to your kitchen!</p>
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: '#9370DB', borderColor: '#9370DB' }}
                  onClick={() => handleCategoryClick('Vegetables')}
                >
                  Shop Veggies
                </button>
              </div>
            </div>
          </div>

          {/* Dairy */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/diary.jpg"
                className="card-img-top"
                alt="Dairy"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Dairy Products (10% off)</h5>
                <p className="card-text">Pure and fresh milk, cheese, butter and more!</p>
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: '#9370DB', borderColor: '#9370DB' }}
                  onClick={() => handleCategoryClick('Dairy')}
                >
                  Shop Dairy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-4">
          <button
            className="btn"
            style={{
              border: '2px solid #9370DB',
              color: '#9370DB',
              fontWeight: 'bold',
              padding: '10px 20px',
              transition: 'all 0.3s ease',
              backgroundColor: 'transparent',
              borderRadius: '8px',
            }}
            onClick={() => navigate('/products')}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#E6E6FA';   // lavender
              e.target.style.color = '#4B0082';             // indigo
              e.target.style.borderColor = '#BA55D3';       // orchid
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#9370DB';             // medium purple
              e.target.style.borderColor = '#9370DB';
            }}
          >
            View More →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
