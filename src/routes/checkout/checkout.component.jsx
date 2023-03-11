import React from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { useCartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems, totalValue } = useCartContext();
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${totalValue}</span>
    </div>
  );
};

export default CheckOut;
