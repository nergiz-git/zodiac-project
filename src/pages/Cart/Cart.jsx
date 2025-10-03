import React from "react";
import "./Cart.css";

const Cart = ({ cartItems = [], removeFromCart, updateQuantity }) => {
  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };


  return (
    <div className="cart-table">
         <h1>CART</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
            
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
              </td>
              <td className="product-info2">
                <img src={item.img} alt={item.name} />

              </td>
              <td>
                <span>{item.name}</span>
              </td>
              <td className="price">${item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </td>
              <td className="subtotal">{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
   
   
   
      <div className="cart-total">
        <strong>Total: ${getTotal()}</strong>
      </div>
       


    </div>
  );
};

export default Cart;
