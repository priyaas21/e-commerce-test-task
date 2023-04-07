import ProductDetails from './components/productDetails';
import CartDetails from './components/cartDetails';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductDetails />} />
          <Route path="/cart" element={<CartDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
