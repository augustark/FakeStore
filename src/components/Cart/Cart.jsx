import './Cart.scss';

export default function Cart() {
  return (
    <div className="cart">
      <button>Close</button>
      <h3>My Cart</h3>
      <div className="cart-items"></div>
    </div>
  );
}
