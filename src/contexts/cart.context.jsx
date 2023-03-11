import React, { createContext, useContext, useEffect, useState } from "react";

const addToCartHelper = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemHelper = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

const reduceQuantityHelper = (cartItems, cartItemToReduce) => {
  if (cartItemToReduce.quantity === 1) {
    return removeItemHelper(cartItems, cartItemToReduce);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToReduce.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  totalValue: 0,
  reduceItemQuantity: () => {},
  removeItemFromCart: () => {},
});

const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCardCount] = useState(0);
  const [totalValue, setTotalvalue] = useState(0);

  
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newTotalValue = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalvalue(newTotalValue);
    setCardCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalValue = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalvalue(newTotalValue);
  }, [cartItems]);


  const addItemToCart = (productToAdd) => {
    const newCart = addToCartHelper(cartItems, productToAdd);
    setCartItems(newCart);
  };

  const reduceItemQuantity = (productToAdd) => {
    const newCart = reduceQuantityHelper(cartItems, productToAdd);
    setCartItems(newCart);
  };

  const removeItemFromCart = (productToAdd) => {
    const newCart = removeItemHelper(cartItems, productToAdd);
    setCartItems(newCart);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    totalValue,
    reduceItemQuantity,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartProvider, useCartContext };
