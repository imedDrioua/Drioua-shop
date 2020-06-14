import React from "react";
import {Link} from "react-router-dom";
import "./header.css";
import {auth} from "../../firebase/firebase-util";
import {ReactComponent as Logo} from "../../assets/images/shop.svg";
import {connect} from "react-redux";
import Cart from "../cart/cart";
import Drop from "../cart-dropdown/cart-drop";
import {selectHidden} from "../../redux/cart/cartSelector";
import {selectCurrentUser} from "../../redux/user/userSelector";
import {createStructuredSelector} from "reselect";
const Header= ({currentUser,hidden})=>(
<nav  className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand" >
  <Logo className="logo" />  
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      <Link className="nav-link " to="/shop">SHOP</Link>
      </li>
      <li className="nav-item ">
      <Link className="nav-link" to="/contact" >Contact</Link>   
      </li>
      <li>
      {
        currentUser ?
        (   <li className="nav-item ">
      <Link className="nav-link " onClick={ async ()=> await auth.signOut()} to="/"  >Sign out</Link>   
      </li>) :
      <Link className="nav-link " to="/sign"  >Sign in</Link>
      }
      </li>
      <li>
       <Cart />
      </li>
    </ul>
       {  hidden &&  <Drop />}
  </div>
</nav>
)
const mapStateToProps = createStructuredSelector(
 { currentUser : selectCurrentUser,
   hidden : selectHidden
 }
);



export default connect(mapStateToProps )(Header);