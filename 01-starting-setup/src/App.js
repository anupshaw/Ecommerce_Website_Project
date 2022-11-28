import Header from "./component/Layout/Header";
import ProductSummary from "./component/Product/ProductSummary";
import Products from "./component/Product/Products";
import Footer from "./component/Layout/footer";
import Cart from "./component/Cart/Cart";
import { useState } from "react";
import CartProvider from "./component/store/cart-Provider";

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

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart />}
      <ProductSummary />
      <Products category={"Music"} items={productsArr} />
      <Products category={'Merch'} items={productsArr} />
      <Footer Description={"The Genrics"}></Footer>
    </CartProvider>
  );
}

export default App;
