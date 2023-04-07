import ProductDetails from './components/productDetails';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ProductDetails />
    </Provider>
  );
}

export default App;
