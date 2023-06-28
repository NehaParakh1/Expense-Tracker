import React, {useContext} from 'react';
import Login from './Components/Auth/Login';
import Header from './Components/Header/Header';
import AuthContext from './Components/Store/AuthContext';
import { Route, Switch } from "react-router-dom";
import Welcome from './Components/Pages/Welcome';


function App() {
  const authCtx = useContext(AuthContext)
  return (
  <>
  <Switch>
  <Route path="/" exact>
          <Header />
          {!authCtx.isLoggedIn && <Login />}
        </Route>
        {authCtx.isLoggedIn && <Route path='/welcome'>
          <Welcome/>
        </Route>}
    </Switch>
    </>
  );
}

export default App;
