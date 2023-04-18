import { useContext } from 'react';
import {Button} from 'react-bootstrap'
import AuthContext from '../Store/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const authCtx = useContext(AuthContext)
  const logoutHandler = () => {
    authCtx.logout();
  }
    return(
            <>
              <nav className="navbar navbar-expand-lg bg-light variant-dark">
                <div className="collapse navbar-collapse justify-content-between">
                  <h2 className="bg-light">Expense Tracker</h2>
                  <ul className="navbar-nav mx-auto ">
                  <li className="nav-item bg-light"><Link to="/home">Home</Link></li>
                    <li className="nav-item bg-light">Products</li>
                    <li className="nav-item bg-light" >About Us</li>
                  </ul>
                   {authCtx.isLoggedIn &&<Button onClick={logoutHandler}>
                    Logout
                  </Button>}
                </div>
              </nav>
              <hr/>
            </>
          );
        };
        
        
export default Header;
