import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let initialToken = localStorage.getItem("token");
  let localEmail=localStorage.getItem('email');

  const [token, setToken] = useState(initialToken);
  const[email, setEmail]=useState(localEmail)

  const userIsLoggedIn = !!token;

  const loginHandler = (token,email) => {
    console.log(token)
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem('email',email);
    setEmail(email);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    console.log(token)
  };

  const contextValue = {
    token: token,
    email:email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;