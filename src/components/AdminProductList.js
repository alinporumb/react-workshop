import React from "react";
import {getAll} from "../api/products";
import {Link} from "react-router-dom";

class AdminProductList extends React.Component {
  state = {
    products : [],
    loading : true
  }

  componentDidMount() {
    getAll().then(products => {
      this.setState({
        products,
        loading : false
      });
    });
  }

  render() {
    return this.state.loading
      ? <div>Loading..</div>
      : <div>
        <Link to={`${this.props.match.path}/add`}>
          <button>Add Product</button>
        </Link>
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {this.state.products.map(product => {
            return (
              <tr key={product.id}>
                <td><Link to={`${this.props.match.path}/${product.id}`}>{product.name}</Link></td>
                <td>{product.price}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>;
  }
}

export default AdminProductList;