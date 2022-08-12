import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';

export default function ProductCard(props) {
  const { title, price, image } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product', { state: props });
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>$ {price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
