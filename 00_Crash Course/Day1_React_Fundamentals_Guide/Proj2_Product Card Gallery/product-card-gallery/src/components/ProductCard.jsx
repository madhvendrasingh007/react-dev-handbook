// src/components/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  // Destructure product properties for easier access
  const {
    name,
    price,
    originalPrice,
    image,
    category,
    rating,
    inStock,
    onSale,
    description
  } = product;

  // Calculate discount percentage
  const discount = onSale 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">

      {/* Product Image Container */}
      <div className="product-image-container">
        <img 
          src={image} 
          alt={name}
          className="product-image"
        />

        {/* Sale Badge - Only show if onSale is true */}
        {onSale && (
          <div className="sale-badge">
            -{discount}% OFF
          </div>
        )}

        {/* Out of Stock Overlay */}
        {!inStock && (
          <div className="out-of-stock-overlay">
            <span>Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info Section */}
      <div className="product-info">

        {/* Category */}
        <span className="product-category">{category}</span>

        {/* Product Name */}
        <h3 className="product-name">{name}</h3>

        {/* Description */}
        <p className="product-description">{description}</p>

        {/* Rating */}
        <div className="product-rating">
          <span className="stars">{'⭐'.repeat(Math.floor(rating))}</span>
          <span className="rating-number">({rating})</span>
        </div>

        {/* Price Section */}
        <div className="product-price">
          <span className="current-price">${price}</span>
          {onSale && (
            <span className="original-price">${originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button 
          className={`add-to-cart-btn ${!inStock ? 'disabled' : ''}`}
          disabled={!inStock}
        >
          {inStock ? '🛒 Add to Cart' : '❌ Unavailable'}
        </button>

      </div>

    </div>
  );
}

export default ProductCard;