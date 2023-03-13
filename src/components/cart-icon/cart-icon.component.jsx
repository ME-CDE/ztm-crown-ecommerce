import React from "react";

import { useCartContext } from "../../contexts/cart.context";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { setIsCartOpen, cartCount,isCartOpen } = useCartContext();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  };

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
