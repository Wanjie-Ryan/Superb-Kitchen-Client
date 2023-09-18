import React, { useContext, createContext, useState } from "react";

const cartContext = createContext();
// cartContext holds the state and functions related to shopping cart, making them accessible to components within its provider

export function useCart() {
  return useContext(cartContext);
}
// useCart function allows components to easily access the cart state and functions, it uses the useContext hook to retrieve values from the cartContext

export function CartProvider({ children }) {
  //cartProvider acts as a provider for the cart context, it wraps the entire app to make the  cart state and functions available to its child components.
  const [cart, setCart] = useState([]);
  const [cartClicked, setCartClicked] = useState(false);
  //   console.log(cart)
  //initializes the cart state to an empty array, it will store an array of products in the shopping cart

  const addToCart = (product) => {
    setCart([...cart, product]);
    // setCartClicked(true)
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    // setCartClicked(false)
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </cartContext.Provider>
  );
}
