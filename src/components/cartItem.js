import React, { useState } from 'react';
import '../assets/css/cartItem.css';

function CartItem({ product }) {
  const [quantity, setQuantity] = useState(1);

  const handleQtyIncrement = () => setQuantity(quantity + 1);

  const handleQtyDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h3 className="cart-item-name">{product?.title}</h3>
        <p className="cart-item-description">{product?.author}</p>
        <p className="cart-item-description">{product?.pages}</p>
        <p className="cart-item-description">{product?.genre}</p>
        <p className="cart-item-description">${product.language}</p>
        <p className="cart-item-description">{product?.format}</p>
        <p className="cart-item-description">{product?.publisher}</p>
        <p className="cart-item-description">{product?.published}</p>
        <p className="cart-item-description">{product?.isbn}</p>
        <p className="cart-item-description">{product?.price}</p>
      </div>
      <div className="cart-item-quantity">
        <button
          className="cart-item-quantity-button"
          onClick={handleQtyDecrement}
        >
          -
        </button>
        <span className="cart-item-quantity-number">{quantity}</span>
        <button
          className="cart-item-quantity-button"
          onClick={handleQtyIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
