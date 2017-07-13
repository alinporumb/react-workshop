import React from "react";

const ProductListItem = (props) => {
  return <div>
    <div>Name: {props.product.name}</div>
    <div>Price: {props.product.price}</div>
  </div>;
}

const ProductList = (props) => {
  const products = props.products.map((product) => {
    return <ProductListItem product={product}/>
  });

  return <div>
    {products}
  </div>;
}

export default ProductList;