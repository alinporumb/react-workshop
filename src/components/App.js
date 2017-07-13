import React from "react";
import ProductList from "./ProductList";
import {getAll} from "../api/products";

class App extends React.Component {
  state = {
    products : []
  }

  componentDidMount() {
    getAll().then(products => {
      this.setState({products});
    })
  }

  render() {
    console.log(this.state);

    return <div>
      App..

      <hr/>

      <ProductList products={this.state.products}/>
    </div>;
  }
}

export default App;