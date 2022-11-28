import React from "react";
import classes from './footer.module.css';


const Footer = (props) => {
  console.log('footer is running')

  return (
    <div className={classes.footer}>
   <h1>{props.Description}</h1>
  <ul className={classes.footerlist}>
    <li><a href="https://www.youtube.com/">U tube</a></li>
    <li><a href="https://open.spotify.com/">Spotify</a></li>
    <li><a href="https://www.facebook.com/">facebook</a></li>
  </ul>
   </div>
  );
};

export default React.memo(Footer);
