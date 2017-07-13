import React from "react";
import Cart from "../Cart";
import {Link} from "react-router-dom";

const FrontLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/products">Products</Link>&nbsp;
        <Link to="/admin">Admin</Link>&nbsp;

        <hr/>

        <Cart cart={props.cart}/>

        <hr/>
        Front Layout..
        <hr/>
        <WrappedComponent {...props}/>
      </div>
    );
  }
};

export default FrontLayout;