import React from "react";

const Cart = (props) => {
  return (
    <div>
      {props.cart.items.length} products
      {props.cart.items.map((item, index) => {
        return (
          <div key={index}>{item.name}</div>
        );
      })}
    </div>
  );
};

export default Cart;