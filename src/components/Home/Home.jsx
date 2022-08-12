import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Categories from '../Categories/Categories';
import './Home.scss';

export default function Home({ userLogged }) {
  const [token, setToken] = useState('');
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const login = () => {
      const { username, password } = state;

      fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
        .then((res) => res.json())
        .then((json) => setToken(json));
    };

    if (!userLogged) {
      navigate('/login');
    } else {
      login();
      console.log(token);
    }
  }, [navigate, userLogged, state, token]);

  return (
    <div>
      <Categories />
    </div>
  );
}
