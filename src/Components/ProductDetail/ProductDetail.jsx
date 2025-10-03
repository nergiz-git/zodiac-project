import React, { useState } from "react";
import { Link, useParams } from "react-router";
import "./ProductDetail.css";
import products from "../../data/products";

const ProductDetail = ({ cartItems, addToCart, removeFromCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [position, setPosition] = useState({ x: 50, y: 50 });

  if (!product) return <h2>Product not found</h2>;

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 50, y: 50 }); // mərkəzə qaytarır
  };

  return (
    <div className="product-detail-page">
      <div className="product-main">
        {/* Şəklin arxasında ağ fon və zoom */}
        <div
          className="image-wrapper"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={product.img}
            alt={product.name}
            className="main-img"
            style={{
              transformOrigin: `${position.x}% ${position.y}%`,
              transform: "scale(1.5)",
            }}
          />
        </div>

        {/* Məhsul məlumatı */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="desc">
            Praesent ullamcorper erat eu mattis commodo. Sed elementum lacinia
            massa eu hendrerit. Vestibulum auctor metus lectus, vitae convallis
            turpis sodales quis.
          </p>

          <div className="add-to-cart-section">
            <input type="number" min="1" defaultValue={1} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>

      <div className="meta">
  {/* Categories */}
  <div className="meta-section">
    <p className="meta-title">Categories:</p>
    <div className="categories">
      {["Astrology", "Crystals", "Mystical"].map((category, index) => (
        <Link key={index} to={`/shop?category=${category}`} className="tag-box">
        {category}
      </Link>
      ))}
    </div>
  </div>

  {/* Tags */}
  <div className="meta-section">
    <p className="meta-title">Tags:</p>
    <div className="tags">
      {["#aroma", "#divination", "#numbers", "#prediction"].map((tag, index) => (
        <Link key={index} to={`/shop?tag=${tag}`} className="tag-box">
        {tag}
      </Link>
      ))}
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Sağda səbət */}
      <div className="cart-sidebar">
        <h3>Cart</h3>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p style={{color:"#BA9A63"}}>
                    {item.quantity} × ${item.price}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>×</button>
              </div>
            ))}
            <p className="subtotal">
              Subtotal: $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
            <Link to="/cart">
              <button className="view-cart">View Cart</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
