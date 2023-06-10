import { FaCartPlus } from "react-icons/fa";
import { globalContext } from "./Context";
const Navbar = () => {
  const { total } = globalContext();
  return (
    <nav>
      <div className="nav-center">
        <h4>Your Cart</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{total}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
