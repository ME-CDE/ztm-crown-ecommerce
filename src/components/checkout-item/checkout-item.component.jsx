import React from "react";
import { useCartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  const { addItemToCart, reduceItemQuantity, removeItemFromCart } =
    useCartContext();
  const { name, quantity, imageUrl, price } = cartItem;

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const reduceItemHandler = () => {
    reduceItemQuantity(cartItem);
  };
  const clearHandler = () => {
    removeItemFromCart(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={addItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={reduceItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearHandler}>
        &#10005;
      </div>
      {/* <button onClick={() => addItemToCart(cartItem)}>Increase</button>
      <button onClick={() => reduceItemQuantity(cartItem)}>Decrease</button> */}
    </div>
  );
};

export default CheckOutItem;
