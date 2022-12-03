import React from "react";
// import ProductSummary from "../component/Product/ProductSummary";
import Products from "../component/Product/Products";
const productsArr = [
  {
    id: Math.random(),
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: Math.random(),
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: Math.random(),
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: Math.random(),
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Store = () => {
  return (
    <>
      <Products category={"Music"} items={productsArr} />
      <Products category={"Merch"} items={productsArr} />
    </>
  );
};

export default Store;
