import React, {useContext} from 'react';
import Login from './Components/Auth/Login';
import Header from './Components/Header/Header';
//import AuthContext from './Components/Store/AuthContext';
import { Route, Switch } from "react-router-dom";
import Welcome from './Components/Pages/Welcome';
import Profile from './Components/Pages/Profile';
import ForgotPassword from './Components/Pages/ForgotPassword';
import Expenses from './Components/Pages/Expenses';
import { authActions } from './Components/Store/AuthReducers';
import { useSelector } from 'react-redux';

function App() {
 
  const isLoggedIn=useSelector(state=>state.auth.isAuthenticated)
  return (
  <>
  <Header/>
  {!isLoggedIn && <Login />}
  <Switch>

        <Route path="/home" exact>
          {isLoggedIn && <Welcome/>}
        </Route>
        {isLoggedIn && <Route path='/expenses'>
          <Expenses/>
        </Route>}
        {isLoggedIn && <Route path='/profile'>
          <Profile/>
        </Route>}
        <Route path="/forgotpassword">
          <ForgotPassword/>
        </Route>
    </Switch>
    </>
  );
}

export default App;
