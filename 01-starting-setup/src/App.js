import Header from "./component/Layout/Header";

// import Products from "./component/Product/Products";
import Footer from "./component/Layout/footer";
import Cart from "./component/Cart/Cart";
import { useState } from "react";
import CartProvider from "./component/store/cart-Provider";
import  Store from "./pages/Store";
import About from "./pages/About";
import {Route} from 'react-router-dom'
import ProductSummary from "./component/Product/ProductSummary";
import Home from "./pages/Home";

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
      <Route path='/' exact>
        <Store />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Footer Description={"The Genrics"}></Footer>
    </CartProvider>
  );
}

export default App;
