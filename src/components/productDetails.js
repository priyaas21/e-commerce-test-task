import '../assets/css/productDetails.css';
import { PRODUCTS } from '../Utils';

function ProductDetails() {
  return (
    <div className="page-container">
      <h1>Product Details</h1>
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
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((item, index) => (
              <tr key={index}>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductDetails;
