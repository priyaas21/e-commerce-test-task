import { useState, useEffect } from 'react';
import '../assets/css/productDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProductDetails, setCartList } from '../reducers/productReducer';
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
  const { products, cartList } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [prodData, setProdData] = useState(products);

  useEffect(() => {
    try {
      dispatch(getProductDetails());
    } catch (e) {
      console.log('Error in getting product list');
    }
  }, []);

  useEffect(() => {
    if (products !== prodData) setProdData(products);
  }, [products]);

  const addToCart = (product) => {
    const checkExistCartItem = cartList.findIndex((c) => c?.id === product?.id);
    if (checkExistCartItem > -1) {
      toast.error(`${product?.title} is already added to cart!`);
    } else {
      try {
        dispatch(setCartList(product));
        toast.success(`${product?.title} added to cart!`);
      } catch (e) {
        console.log('Error in adding item to cart');
      }
    }
  };
  return (
    <div className="page-container">
      <h1>Product Details</h1>
      <h4>
        {`Cart Items - ${cartList.length}`}
        <span onClick={() => navigate('/cart')}>View Cart</span>
      </h4>
      <div>
        <table className="product-detail-container">
          <thead>
            <tr>
              <th>TITLE</th>
              <th>AUTHOR</th>
              <th>PAGE COUNT</th>
              <th>THEME</th>
              <th>LANGUAGE</th>
              <th>FORMAT</th>
              <th>PUBLISHER</th>
              <th>PUBLISHED ON</th>
              <th>ISBN</th>
              <th>PRICE</th>
              <th>Add item to your Cart</th>
            </tr>
          </thead>
          <tbody>
            {prodData?.length > 0 &&
              prodData.map((item) => (
                <tr key={item?.id}>
                  <td>{item?.title}</td>
                  <td>{item?.author}</td>
                  <td>{item?.pages}</td>
                  <td>{item?.genre}</td>
                  <td>{item?.language}</td>
                  <td>{item?.format}</td>
                  <td>{item?.publisher}</td>
                  <td>{item?.published}</td>
                  <td>{item?.isbn}</td>
                  <td>{item?.price}</td>
                  <td>
                    <button
                      className="add-to-cart"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDetails;
