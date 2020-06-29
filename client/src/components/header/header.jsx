import React from "react";
import {Link} from "react-router-dom";
import "./header.scss";
import {auth} from "../../firebase/firebase-util";
import {ReactComponent as Logo} from "../../assets/images/shop.svg";
import {connect} from "react-redux";
import Cart from "../cart/cart";
import Drop from "../cart-dropdown/cart-drop";
import {selectHidden} from "../../redux/cart/cartSelector";
import {selectCurrentUser} from "../../redux/user/userSelector";
import {createStructuredSelector} from "reselect";
const Header= ({currentUser,hidden})=>(
<div  className="navigationBar">
  <Link to="/" className="logo" >
  <Logo />  
  </Link>
  <input type="checkbox" className="check" id="navi-toggle" />
  <label for="navi-toggle" className="button">
                <span>&nbsp;</span>
            </label>
     <div className="background"></div>
     <nav>

    <ul className="navigation_list">
    <Link to="/" className="logo" >
  <Logo />  
  <p className="navTitle">Dr Imed</p>
  </Link>
      <li className="item">
      <Link className="link" to="/shop">SHOP</Link>
      </li>
      <li className="item">
      <Link className="link" to="/contact" >CONTACT</Link>   
      </li>
      <li className="item">
      {
        currentUser ? 
      <Link className="link" onClick={ async ()=> await auth.signOut()} to="/">SIGN OUT</Link>   
       :
      <Link className="link" to="/sign"  >SIGN IN</Link>
      }
      </li>
    </ul>
    </nav>
  <div className="cart">
  <Cart className="cart" />
  </div>
       {  hidden &&  <Drop />}
</div>
)
const mapStateToProps = createStructuredSelector(
 {
   currentUser : selectCurrentUser,
   hidden : selectHidden
 }
);



export default connect(mapStateToProps )(Header);