import React, {useContext} from 'react';
import Login from './Components/Auth/Login';
import Header from './Components/Header/Header';
import AuthContext from './Components/Store/AuthContext';
import { Route, Switch } from "react-router-dom";
import Welcome from './Components/Pages/Welcome';
import Profile from './Components/Pages/Profile';
import ForgotPassword from './Components/Pages/ForgotPassword';
import Expenses from './Components/Pages/Expenses';

function App() {
  const authCtx = useContext(AuthContext)
  return (
  <>
  <Header/>
  {!authCtx.isLoggedIn && <Login />}
  <Switch>

        <Route path="/home" exact>
          {authCtx.isLoggedIn && <Welcome/>}
        </Route>
        {authCtx.isLoggedIn && <Route path='/expenses'>
          <Expenses/>
        </Route>}
        {authCtx.isLoggedIn && <Route path='/profile'>
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
