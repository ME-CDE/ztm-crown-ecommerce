import React from "react";
import { useCartContext } from "../../contexts/cart.context";

const CheckOut = () => {
  const {
    cartItems,
    totalValue,
    increaseItemQuantity,
    reduceItemQuantity,
    removeItemFromCart,
  } = useCartContext();
  return (
    <div>
      {cartItems.map((cartItem) => {
        return (
          <div key={cartItem.id}>
            <h1>{cartItem.name}</h1>
            <span>{cartItem.quantity}</span>
            <button onClick={() => increaseItemQuantity(cartItem)}>
              Increase
            </button>
            <button onClick={() => reduceItemQuantity(cartItem)}>
              Decrease
            </button>
            <button onClick={() => removeItemFromCart(cartItem)}>Remove</button>
          </div>
        );
      })}
      <div>${totalValue}</div>
    </div>
  );
};

export default CheckOut;
