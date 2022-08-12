import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './Products.scss';

export default function Products() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  const header = categoryId
    .split(' ')
    .map((l) => l[0].toUpperCase() + l.slice(1))
    .join(' ');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [categoryId]);

  return (
    <div className="category-products">
      <h1>{header}</h1>
      <div className="products">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
