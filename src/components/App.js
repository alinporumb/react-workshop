import React from "react";
import Protect from "./hoc/Protect";
import FrontLayout from "./layouts/FrontLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./Home";
import Login from "./Login";
import ProductList from "./ProductList";
import Admin from "./Admin";
import AdminProductList from "./AdminProductList";
import AdminProductForm from "./AdminProductForm";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {pipe} from "../lib/utils";

class App extends React.Component {
  state = {
    token : null,
    cart : {
      items : []
    }
  }

  addToCart = (item) => {
    this.setState({
      cart : {
        items : [
          ...this.state.cart.items,
          item
        ]
      }
    });
  }

  onLogin = (credentials) => {
    console.log(credentials);
    this.setState({
      token : true
    });
  }

  render() {
    const front = pipe(
      FrontLayout
    );

    const admin = pipe(
      Protect(this.state.token),
      AdminLayout
    );

    return (
      <BrowserRouter>
        <div>
          App..

          <Route exact path="/" render={props => front(Home)({
            cart : this.state.cart
          })}/>

          <Route path="/login" render={props => {
            return !this.state.token
              ? <Login {...props} onLogin={this.onLogin}/>
              : <Redirect to="/admin"/>
          }}/>

          <Route path="/products" render={props => front(ProductList)({
            ...props,
            cart : this.state.cart,
            addToCart : this.addToCart
          })}/>

          <Route exact path="/admin" render={admin(Admin)}/>

          <Route exact path="/admin/products" render={admin(AdminProductList)}/>

          <Route path="/admin/products/:product_id" render={admin(AdminProductForm)}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;