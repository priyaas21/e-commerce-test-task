import React, { useState } from 'react';
import '../assets/css/cartItem.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { removeCartItem } from '../reducers/productReducer';
import { useDispatch } from 'react-redux';

function CartItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQtyIncrement = () => setQuantity(quantity + 1); // will handle increment of product qty

  const handleQtyDecrement = () => {
    // will handle decrememtn of product qty
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleRemoveItem = (product) => {
    try {
      // will remove the selected product from cart list
      dispatch(removeCartItem(product.id));
      toast.error(`${product?.title} is removed from your cart!`);
    } catch (e) {
      console.log('Error in remove item', e);
    }
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
        <div
          onClick={() => handleRemoveItem(product)}
          className="cart-item-quantity-remove"
        >
          Remove Item
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CartItem;
