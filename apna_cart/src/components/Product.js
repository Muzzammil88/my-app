import React from "react";

export default function Product(props) {
  const { product, index, incrementQuantity, decrementQuantity } = props;

  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {product.name}
          <span className="badge bg-secondary">₹{product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => decrementQuantity(index)}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {product.quantity} {/* Display the updated quantity */}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => incrementQuantity(index)}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">{product.quantity * product.price}</div>
      <button className="col-2 btn btn-danger">Remove</button>
    </div>
  );
}
