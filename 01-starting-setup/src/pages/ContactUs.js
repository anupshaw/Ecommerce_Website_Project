import { useRef } from "react";
import Button from "../component/UI/Button";
import classes from "./ContactUs.module.css";
const ContactUs = () => {
  const userName = useRef();
  const userEmail = useRef();
  const userPhone = useRef();

  const contactSubmitHandler = async (event) => {
    event.preventDefault();
    const userDetails = {
      useName: userName.current.value,
      userEmailID: userEmail.current.value,
      userPhoneNumber: userPhone.current.value,
    };


    const response = await fetch(
      "https://react-http-92751-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    console.log(userDetails);
  };

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={contactSubmitHandler}>
        <label htmlFor="userName">Name</label>
        <input id="userName" type="text" ref={userName} required autofocus></input>
        <label htmlFor="userEmail">Email-Id</label>
        <input id="userEmail" type="email" ref={userEmail} required></input>
        <label htmlFor="userPhone">Phone Number</label>
        <input id="userPhone" type="number" ref={userPhone} required></input>
        <Button className={classes.btn}>Submit</Button>
      </form>
    </div>
  );
};

export default ContactUs;
