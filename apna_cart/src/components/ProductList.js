import React from "react";
import Product from "./Product.js";
export default function ProductList(props) {
  return props.productList.map((productItem, i) => {
    return (
      <Product
        product={productItem}
        key={i}
        incrementQuantity={props.incrementQuantity}
        index={i} decrementQuantity = {props.decrementQuantity }
      />
    );
  });
}



 

