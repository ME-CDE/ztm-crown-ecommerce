import React, { createContext, useContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  totalValue: 0,
  removeItemFromCart: () => {},
  clearCartItem: () => {},
});

const useCartContext = () => {
  return useContext(CartContext);
};

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

const clearItemHelper = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

const removeItemHelper = (cartItems, cartItemToReduce) => {
  if (cartItemToReduce.quantity === 1) {
    return clearItemHelper(cartItems, cartItemToReduce);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToReduce.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const CART_ACTION_TYPE = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      throw new Error(`Unhandled type in ${type} in userReducer`);
  }
};

const INITIALSTATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalValue: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIALSTATE);
  const { isCartOpen, cartItems, cartCount, totalValue } = state;

  const updateCartItemReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newTotalValue = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalValue: newTotalValue,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addToCartHelper(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const removeItemFromCart = (productToAdd) => {
    const newCartItems = removeItemHelper(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const clearCartItem = (productToAdd) => {
    const newCartItems = clearItemHelper(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    totalValue,
    removeItemFromCart,
    clearCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartProvider, useCartContext };
