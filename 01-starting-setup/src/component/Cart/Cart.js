import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-Context";
console.log("Hi");

const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.cart}>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              id={item.id}
              key={item.id}
              cartItemName={item.item}
              src={item.src}
              cartItemPrice={item.price}
              cartItemAmount={item.amount}
            />
          );
        })}
        <tfoot>
          <tr>
            <td colSpan="3">Total ${cartCtx.totalamount}</td>
          </tr>
        </tfoot>
      </table>
      <button className={classes.btn}>PURCHASE</button>
    </div>
  );
};

export default Cart;
