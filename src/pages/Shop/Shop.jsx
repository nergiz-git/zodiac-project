import React, { useState } from 'react';
import './Shop.css';
import { Link, useNavigate } from 'react-router';
import Cart from '../Cart/Cart';
import products from "../../data/products";


function Shop({ cartItems, addToCart, removeFromCart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("default");
  const [cart, setCart] = useState([]);
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(450);
  const navigate = useNavigate();



  const productsPerPage = 6;

  // Filter və sort
  const filteredProducts = products.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="shop-container">
      {/* Solda məhsullar */}
      <div className="products-section">
        <div className="sort">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
         


        {/* Məhsullar listi */}
        <div className="products-grid">
          {currentProducts.map((p) => (
            <div key={p.id} className="product-card">
               <Link to={`/product/${p.id}`}>

              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p>${p.price}</p>
              </Link>

              {/* Add to Cart düyməsi */}
              <button onClick={() => addToCart(p)}>Add to Cart</button>

              {/* View Cart düyməsi */}
             <button onClick={() => navigate("/cart")}>View Cart</button>
            </div>
          ))}
      </div>

        {/* Pagination */}
        <div className="pagination">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
       </div>
    </div>

      {/* Sağ sidebar */}
      <div className="sidebar">
        <div className="filter-section">
          <h4>FILTER BY PRICE</h4>
          <p>Price: ${minPrice} — ${maxPrice}</p>
          <input
            type="range"
            min="20"
            max="450"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <input
            type="range"
            min="20"
            max="450"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        

        <div className="cart-section">
          <h4>CART</h4>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.quantity} × ${item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>×</button>
              </div>
            ))
          )}
          <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
          <Link to="/cart">
  <button className="view-cart">View Cart</button>
</Link>
        </div>
      </div>
    </div>
        
  );
}

export default Shop;
