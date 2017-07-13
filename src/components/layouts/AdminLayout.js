import React from "react";
import {Link} from "react-router-dom";

const AdminLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/admin">Admin</Link>&nbsp;
        <Link to="/admin/products">Manage-Products</Link>&nbsp;

        <hr/>
        Admin Layout..
        <hr/>
        <WrappedComponent {...props}/>
      </div>
    );
  }
};

export default AdminLayout;