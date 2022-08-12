import { IoCartOutline, IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar({ userLogged }) {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        FakeStore
      </Link>
      {userLogged && (
        <>
          <div className="search-btn">
            <input />
            <IoSearch />
          </div>
          <button className="cart-btn">
            <IoCartOutline />
            Cart
            <span className="cart-count">0</span>
          </button>
        </>
      )}
    </div>
  );
}
