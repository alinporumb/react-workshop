import React from "react";
import {getAll} from "../api/products";

class ProductList extends React.Component {
  state = {
    loading : true,
    products : []
  }

  componentDidMount() {
    getAll().then(products => {
      this.setState({
        loading : false,
        products
      });
    });
  }

  render() {
    return this.state.loading
      ? <div>Loading..</div>
      : <div>
        {this.state.products.map(product => {
          return (
            <div key={product.id}>
              <div>Name: {product.name}</div>
              <div>Price: {product.price}</div>
              <button type="button" onClick={() => this.props.addToCart(product)}>Add to Cart</button>
            </div>
          );
        })}
      </div>;
  }
}

export default ProductList;