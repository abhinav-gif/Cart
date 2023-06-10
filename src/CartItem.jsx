import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { globalContext } from "./Context";
import { useState } from "react";

const CartItem = ({ id, img, title, price }) => {
  const {
    totalPrice,
    setTotalPrice,
    cartArray,
    setCartArray,
    total,
    setTotal,
  } = globalContext();
  const [quantity, setQuantity] = useState(1);

  const removeHandler = (id) => {
    const newCartArray = cartArray.filter((item) => item.id !== id);
    setTotalPrice(
      Number(Number(totalPrice - Number(quantity * price)).toFixed(2))
    );
    setTotal(total - quantity);
    setCartArray(newCartArray);
  };
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button
          className="remove-btn"
          type="button"
          onClick={() => removeHandler(id)}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => {
            setQuantity(quantity + 1);
            setTotal(total + 1);
            setTotalPrice(
              Number(Number(totalPrice + Number(price)).toFixed(2))
            );
          }}
        >
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{quantity}</span>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
              setTotal(total - 1);
              setTotalPrice(
                Number(Number(totalPrice - Number(price)).toFixed(2))
              );
            } else {
              removeHandler(id);
            }
          }}
        >
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
