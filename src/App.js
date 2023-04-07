import ProductDetails from './components/productDetails';
import CartDetails from './components/cartDetails';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      {/* <ProductDetails /> */}
      <CartDetails />
    </Provider>
  );
}

export default App;
