import React, { useRef, useState } from "react";
//import AuthContext from "../Store/AuthContext"
import classes from "./Login.module.css";
import { useHistory,Link } from "react-router-dom";
import { authActions } from "../Store/AuthReducers";
import { useDispatch } from "react-redux";

const Login = () => {
    const history = useHistory()
    const dispatch=useDispatch();

  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const conPasswordInputRef = useRef("");
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConPassword = conPasswordInputRef.current.value;
    
    if (!isLogin) {
      if (enteredPassword !== enteredConPassword) {
        return alert("Password and the confirm password is not same");
      }
    }
    
    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCL88vedXWOxULmjMSR9-1BKz0CXh_xbIg";
      console.log('User has successfully Login')
      } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCL88vedXWOxULmjMSR9-1BKz0CXh_xbIg";
      console.log("User has successfully signed up");
    }
    try{

    const res= await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        conpassword: enteredConPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (res.ok) {
      setIsLogin(true);
      const data = await res.json();
      const userEmailId = data.email;
     
     dispatch(authActions.login ({token:data.idToken, email:data.email}));


   
     
      console.log(data.idToken);

      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";

      if (!isLogin) {
        conPasswordInputRef.current.value = "";
        alert("Signup successful");
        history.replace("/home");
      } else {
        alert("Login Successful");
        history.replace("/home");
      }
    } else {
      setIsLoading(false)
      const data = await res.json();
      throw data.error;
    }
  } catch (err) {
    console.log(err.message);
  }
};

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "SignUp"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="conpassword"
            required
            ref={conPasswordInputRef}
          />
        </div>
        <Link to="/forgotpassword">Forgot Password?</Link>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Login;