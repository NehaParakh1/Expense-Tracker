import React, {useContext} from 'react';
import Login from './Components/Auth/Login';
import Header from './Components/Header/Header';
import AuthContext from './Components/Store/AuthContext';

function App() {
  const authCtx = useContext(AuthContext)
  return (
  <>
    <Header/>
    {!authCtx.isLoggedIn && <Login/>}
    </>
  );
}

export default App;
