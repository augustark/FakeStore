import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.scss';

export default function Categories() {
  const [allCategories, setAllCategories] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setAllCategories(json));
  }, []);

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  const categoryMap = allCategories.map((item, i) => {
    let url = '';

    switch (item) {
      case 'electronics': {
        url =
          'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80';
        break;
      }
      case "men's clothing": {
        url =
          'https://images.unsplash.com/photo-1483118714900-540cf339fd46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
        break;
      }
      case "women's clothing": {
        url =
          'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80';
        break;
      }
      default: {
        url =
          'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80';
        break;
      }
    }

    return (
      <div key={i} className="category-card" onClick={() => handleClick(item)}>
        <h1>{item}</h1>
        <img src={url} alt="" />
      </div>
    );
  });

  return (
    <div className="categories-section">
      <div className="categories">{categoryMap}</div>
    </div>
  );
}
