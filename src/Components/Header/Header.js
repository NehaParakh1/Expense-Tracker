
import {Button} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../Store/AuthReducers';
import { Link } from 'react-router-dom';
import { themeActions } from '../Store/ThemeReducer';
import './Header.css';



const Header = () => {
  const dispatch=useDispatch();
  const isLoggedIn=useSelector(state=>state.auth.isAuthenticated)
  const totalAmount=useSelector(state=>state.expense.totalAmount)
  

  const logoutHandler = (e) => {
   dispatch(authActions.logout()) 
  }

  const activatePremiumHandler=()=>{
    dispatch(themeActions.activePremium(true));
  }

    return(
            <>
              <nav className="navbar navbar-expand-lg variant-dark">
                <div className="collapse navbar-collapse justify-content-between">
                  <h2>Expense Tracker</h2>
                  <ul className="navbar-nav mx-auto ">
                  <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
            <li className='nav-item'><Link to='/expenses' className="nav-link">Expenses</Link></li>
                    <li className="nav-item products">Products</li>
                    <li className="nav-item aboutus" >About Us</li>
                  </ul>
                   {isLoggedIn &&<Button className='logout' onClick={logoutHandler}>
                    Logout
                  </Button>}
                  {totalAmount>10000 && isLoggedIn && <Button onClick={activatePremiumHandler}> Premium </Button>}
                </div>
              </nav>
           
            </>
          );
        };
        
        
export default Header;
