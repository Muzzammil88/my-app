// import React from 'react';
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";
import Footer from "./components/footer";

function App() {
  // Initial product list with three products
  const productList = [
    {
      price: 100000,
      name: "IPhone 10 max",
      quantity: 0,
    },
    {
      price: 20000,
      name: "Redmi Note 10 max",
      quantity: 0,
    },
    {
      price: 25000,
      name: "Sumsung Galaxy S12",
      quantity: 0,
    },
  ];

  // State variables
  const [productListState, setProductListState] = useState(productList);
  const [totalAmountState, setTotalAmountState] = useState(0);

  // Function to increment the quantity of a product
  const incrementQuantity = (index) => {
    let newProductList = [...productListState];
    newProductList[index].quantity++;
    setProductListState(newProductList);

    let newTotalAmount = totalAmountState + newProductList[index].price;
    setTotalAmountState(newTotalAmount);
  };

  // Function to decrement the quantity of a product
  const decrementQuantity = (index) => {
    let newProductList = [...productListState];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      setProductListState(newProductList);

      let newTotalAmount = totalAmountState - newProductList[index].price;
      setTotalAmountState(newTotalAmount);
    }
  };

  // Function to reset the quantities and the total amount
  const resetQuantity = () => {
    let newProductList = productListState.map((product) => ({
      ...product,
      quantity: 0,
    }));

    setProductListState(newProductList);
    setTotalAmountState(0);
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <ProductList
          productList={productListState}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      <Footer totalAmountState={totalAmountState} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;

