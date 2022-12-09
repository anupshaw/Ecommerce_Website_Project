import React from "react";
// import ProductSummary from "../component/Product/ProductSummary";
import Products from "../component/Product/Products";
import productsArr from "../Data/DummyData";


const Store = () => {
  return (
    <>
      <Products category={"Music"} items={productsArr} />
      <Products category={"Merch"} items={productsArr} />
    </>
  );
};

export default Store;
