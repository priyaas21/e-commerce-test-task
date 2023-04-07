import { useState, useEffect } from 'react';
import '../assets/css/cartDetails.css';
import { useSelector } from 'react-redux';
import CartItem from './cartItem';

function ProductDetails() {
  const { cartList } = useSelector((state) => state.product);

  const [cart, setCart] = useState(cartList);

  useEffect(() => {
    if (cartList !== cart) setCart(cartList);
  }, [cartList]);

  return (
    <div className="cart-container">
      <h1>Cart Details</h1>
      <div className="cart-list">
        {cart.map((product) => (
          <CartItem key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
