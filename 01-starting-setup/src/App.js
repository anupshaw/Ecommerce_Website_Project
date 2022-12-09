import Header from "./component/Layout/Header";

// import Products from "./component/Product/Products";
import Footer from "./component/Layout/footer";
import Cart from "./component/Cart/Cart";
import { useContext, useState } from "react";
import CartProvider from "./component/store/cart-Provider";
import Store from "./pages/Store";
import About from "./pages/AboutPage";
import { Redirect, Route } from "react-router-dom";
import ProductSummary from "./component/Product/ProductSummary";
import Home from "./pages/HomePage";
import ContactUs from "./pages/ContactUsPage";
import ProductDetails from "./component/Product/ProductDetails";
import AuthPage from "./pages/AuthPage";
import AuthContext from "./component/store/auth-Context";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const authCtx = useContext(AuthContext);

  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {authCtx.isLoggedIn && cartIsShown && <Cart />}
      <ProductSummary />
      <Route exact path="/">
        {authCtx.isLoggedIn && <Store />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="/about">
        {authCtx.isLoggedIn && <About />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="/home">
        {authCtx.isLoggedIn && <Home />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="/contact">
        {authCtx.isLoggedIn && <ContactUs />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="/ProductDetails/:id">
        {authCtx.isLoggedIn && <ProductDetails />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Footer Description={"The Genrics"}></Footer>
    </CartProvider>
  );
}

export default App;
