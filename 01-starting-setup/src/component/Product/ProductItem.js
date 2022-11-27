import classes from "./ProductItem.module.css";
const ProductItem = (props) => {
  return (
    <div className={classes.productItem}>
      <div className={classes.itemName}>{props.item}</div>
      <div className={classes.productImage}>
        <img src={props.src} alt="img1" width='300px' height='200px'></img>
      </div>
      <div className={classes.itemfooter}>
        <div className={classes.price}>${props.price}</div>
        <button className={classes.itmbtn}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductItem;
