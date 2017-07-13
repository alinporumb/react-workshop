import React from "react";
import {Redirect} from "react-router-dom";

const Protect = (token) => (WrappedComponent) => {
  return (props) => !token
    ? <Redirect to="/login"/>
    : <WrappedComponent {...props}/>;
};

export default Protect;