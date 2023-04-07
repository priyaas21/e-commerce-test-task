import { useState, useEffect } from 'react';
import '../assets/css/cartDetails.css';
import { useSelector } from 'react-redux';
import CartItem from './cartItem';
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
  const cartList = JSON.parse(localStorage.getItem('cartList')) || []; // will take cart data from local storage and if won't available then set [].
  const navigate = useNavigate();
  const [cart, setCart] = useState(cartList);

  useEffect(() => {
    if (cartList !== cart) setCart(cartList);
  }, [cartList]);

  return (
    <>
      {(cart?.length > 0 && (
        <div className="cart-container">
          <h1>Cart Details</h1>
          <h6 className="cart-item-qty">{`Cart item Count - ${cartList.length}`}</h6>
          <h6 onClick={() => navigate('/')}>Add More...</h6>
          <div className="cart-list">
            {cart.map((product) => (
              <CartItem key={product?.id} product={product} />
            ))}
          </div>
        </div>
      )) || (
        <div className="empty-cart">
          <span>Your cart is empty</span>
          <p onClick={() => navigate('/')}>Back to Home</p>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
