import classes from "./ProductItem.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-Context";
import Button from "../UI/Button";

const ProductItem = (props) => {

const cartCtx=useContext(CartContext)

const addCartItemHandler=()=>{
  const enteredAmount=1;

  cartCtx.addItem({
    id:props.id,
    item:props.item,
    src:props.src,
    price:props.price,
    amount:enteredAmount
  })
}

  return (
    <div className={classes.productItem}>
      <div className={classes.itemName}>{props.item}</div>
      <div className={classes.productImage}>
        <img src={props.src} alt="img1" width='300px' height='200px'></img>
      </div>
      <div className={classes.itemfooter}>
        <div className={classes.price}>${props.price}</div>
        <Button className={classes.itmbtn} onClick={addCartItemHandler}>ADD TO CART</Button>
      </div>
    </div>
  );
};

export default ProductItem;
