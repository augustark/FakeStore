import { Link, useLocation } from 'react-router-dom';
import './ProductDetails.scss';

export default function ProductDetails() {
  const { state } = useLocation();

  const { title, price, description, category, image } = state;

  return (
    <div className="product-details">
      <img src={image} alt="" />
      <div className="info">
        <h1>{title}</h1>
        <p className="price">$ {price}</p>
        <p className="desc">{description}</p>
        <Link to={`/products/${category}`}>{category}</Link>
      </div>
    </div>
  );
}
