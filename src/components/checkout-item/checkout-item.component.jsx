import React from "react";
import { useCartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutName,
  CheckoutQuantity,
  CheckoutArrow,
  CheckoutValue,
  CheckoutPrice,
  CheckoutRemoveButton,
} from "./checkout-item.styles.jsx";

const CheckOutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearCartItem } =
    useCartContext();
  const { name, quantity, imageUrl, price } = cartItem;

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };
  const clearHandler = () => {
    clearCartItem(cartItem);
  };
  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt={name} />
      </CheckoutImageContainer>
      <CheckoutName>{name}</CheckoutName>
      <CheckoutQuantity>
        <CheckoutArrow onClick={addItemHandler}>&#10094;</CheckoutArrow>
        <CheckoutValue>{quantity}</CheckoutValue>
        <CheckoutArrow onClick={removeItemHandler}>&#10095;</CheckoutArrow>
      </CheckoutQuantity>
      <CheckoutPrice>${price}</CheckoutPrice>
      <CheckoutRemoveButton onClick={clearHandler}>
        &#10005;
      </CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
