import React, { useState } from 'react'
import ProductCard from './components/ProductCard';
import products from './data/products';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <header className="app-header">
        <h1>🛍️ Product Gallery</h1>
        <p>Discover {products.length} amazing products</p>
      </header>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}


export default App;