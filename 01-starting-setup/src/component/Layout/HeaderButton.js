import classes from './HeaderButton.module.css';

const HeaderButton = () => {
  return (
    <button className={classes.HeaderButton}>
      <h1>Cart</h1>
      <div>0</div>
    </button>
  );
};

export default HeaderButton;
