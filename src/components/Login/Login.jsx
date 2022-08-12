import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

//sample:
// johnd
//m38rmF$

export default function Login({ setUserLogged }) {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const [allUsers, setAllUsers] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((json) => setAllUsers(json));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const findUser = allUsers.find(
      (item) =>
        item.username === user.username && item.password === user.password
    );

    if (findUser) {
      setUserLogged(true)
      navigate('/', { replace: true, state: user });
    } else {
      alert('No User found');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          required
        />
        <button>Login</button>
      </form>
    </div>
  );
}
