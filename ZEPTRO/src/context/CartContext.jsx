import { createContext, useContext, useState } from "react";
import Product from "../pages/Product";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    setCartItem([...cartItem, product]);

    console.log(cartItem);
  };
  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
