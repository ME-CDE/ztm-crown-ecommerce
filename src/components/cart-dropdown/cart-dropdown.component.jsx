import React from "react";
import Button from "../button/button.component";

import { useCartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  const { setIsCartOpen } = useCartContext();

  const handleClick = () => {
    setIsCartOpen((previous) => !previous);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
