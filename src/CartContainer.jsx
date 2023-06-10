import CartItem from "./CartItem";
import { globalContext } from "./Context";
const CartContainer = () => {
  const { cartArray, setCartArray, totalPrice, setTotal } = globalContext();
  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${totalPrice}</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => {
            setCartArray([]);
            setTotal(0);
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
