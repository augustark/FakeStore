import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import './styles.css';

export default function App() {
  const [userLogged, setUserLogged] = useState(false)

  useEffect(() => {}, [])

  return (
    <div className="App">
      <Navbar userLogged={userLogged}/> 
      <Routes>
        <Route path="/" element={<Home userLogged={userLogged} setUserLogged={setUserLogged}/>} />
        <Route path="/login" element={<Login setUserLogged={setUserLogged}/>} />
        <Route path="/products/:categoryId" element={<Products />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
