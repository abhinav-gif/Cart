import { createContext, useState, useContext } from "react";
import cartItems from "./data";
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [total, setTotal] = useState(4);
  const [cartArray, setCartArray] = useState([...cartItems]);
  const [totalPrice, setTotalPrice] = useState(Number(2199.96));
  return (
    <AppContext.Provider
      value={{
        total,
        setTotal,
        cartArray,
        setCartArray,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const globalContext = () => useContext(AppContext);
