import { useState, useEffect } from 'react';
import '../assets/css/cartDetails.css';
import { useSelector } from 'react-redux';
import CartItem from './cartItem';
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
  const { cartList } = useSelector((state) => state.product);
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
