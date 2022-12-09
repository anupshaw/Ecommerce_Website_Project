import classes from "./ProductItem.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-Context";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-Context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const addCartItemHandler = () => {
    const enteredAmount = 1;

    cartCtx.addItem({
      id: props.id,
      item: props.item,
      src: props.src,
      price: props.price,
      amount: enteredAmount,
    });
  };

  return (
    <div className={classes.productItem}>
      <div className={classes.itemName}>{props.item}</div>
      <div className={classes.productImage}>
        {authCtx.isLoggedIn && (
          <Link to={`/ProductDetails/:${props.id}`}>
            <img src={props.src} alt="img1" width="300px" height="200px"></img>
          </Link>
        )}
      </div>
      <div className={classes.itemfooter}>
        <div className={classes.price}>${props.price}</div>
        <Button className={classes.itmbtn} onClick={addCartItemHandler}>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
