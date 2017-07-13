import React from "react";
import {get, save} from "../api/products";

class AdminProductForm extends React.Component {
  state = {
    loading : true,
    product : {}
  }

  componentDidMount() {
    const product_id = this.props.match.params.product_id;
    if (product_id && product_id !== 'add') {
      get(product_id).then(product => {
        this.setState({
          product,
          loading : false
        })
      });
    } else {
      this.setState({loading : false});
    }
  }

  changeHandler = (field, value) => {
    this.setState({
      product : {
        ...this.state.product,
        [field] : value
      }
    });
  }

  submitHandler = (e) => {
    this.setState({loading : true});
    e.preventDefault();
    save(this.state.product).then(() => {
      this.props.history.push('/admin/products');
    });
  }

  render() {
    const {product} = this.state;

    return this.state.loading
      ? <div>Loading..</div>
      : <form onSubmit={this.submitHandler}>
        <input type="text" placeholder="Name" value={product.name || ''}
               onChange={e => this.changeHandler('name', e.target.value)}/>

        <input type="number" placeholder="Price" value={product.price || ''}
               onChange={e => this.changeHandler('price', e.target.value)}/>

        <button type="submit">Save</button>
      </form>;
  }
}

export default AdminProductForm;