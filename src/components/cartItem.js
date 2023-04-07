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
        <h3 className="cart-item-name">{`${product?.title}`}</h3>
        <p className="cart-item-description">{`Author- ${product?.author}`}</p>
        <p className="cart-item-description">{`No. of pages- ${product?.pages}`}</p>
        <p className="cart-item-description">{`Theme of Book- ${product?.genre}`}</p>
        <p className="cart-item-description">{`Language- ${product.language}`}</p>
        <p className="cart-item-description">{`Format- ${product?.format}`}</p>
        <p className="cart-item-description">{`Publisher- ${product?.publisher}`}</p>
        <p className="cart-item-description">{`Published on- ${product?.published}`}</p>
        <p className="cart-item-description">{`ISBN- ${product?.isbn}`}</p>
        <p className="cart-item-description">{`Price- ${
          quantity * product?.price
        }`}</p>
      </div>
      <div className="cart-item-quantity">
        <span>Qty</span>
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
