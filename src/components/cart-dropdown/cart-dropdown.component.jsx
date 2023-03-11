import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useCartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  const go = useNavigate();
  const { setIsCartOpen, cartItems } = useCartContext();

  const handleClick = () => {
    setIsCartOpen((previous) => !previous);
    go("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })}
        </div>
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}

      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
