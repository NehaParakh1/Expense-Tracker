
import {Button} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../Store/AuthReducers';
import { Link } from 'react-router-dom';


const Header = () => {
  const dispatch=useDispatch();
  const isLoggedIn=useSelector(state=>state.auth.isAuthenticated)
  const totalAmount=useSelector(state=>state.expense.totalAmount)
  const logoutHandler = () => {
   dispatch(authActions.logout()) 
  }
    return(
            <>
              <nav className="navbar navbar-expand-lg bg-light variant-dark">
                <div className="collapse navbar-collapse justify-content-between">
                  <h2 className="bg-light">Expense Tracker</h2>
                  <ul className="navbar-nav mx-auto ">
                  <li className="nav-item bg-light "><Link to="/home">Home</Link></li>
            <li className='nnav-item bg-light '><Link to='/expenses'>Expenses</Link></li>
                    <li className="nav-item bg-light">Products</li>
                    <li className="nav-item bg-light" >About Us</li>
                  </ul>
                   {isLoggedIn &&<Button onClick={logoutHandler}>
                    Logout
                  </Button>}
                  {totalAmount>10000 && isLoggedIn && <Button> Premium </Button>}
                </div>
              </nav>
              <hr/>
            </>
          );
        };
        
        
export default Header;
