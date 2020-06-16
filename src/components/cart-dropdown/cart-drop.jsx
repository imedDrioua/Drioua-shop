import React from 'react';
import "./cart-drop.scss";
import Button from "../button/button";
import {connect} from "react-redux";
import { CartItem } from '../cartItem/cartItem';
import {selectCartItems} from "../../redux/cart/cartSelector";
import {createStructuredSelector} from "reselect";
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../redux/cart/cartActions';

const Drop = ({items,history,dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">

            {items.length ? items.map(item => <CartItem key={item.id} item={item}/>) :
               <span className="emptyMessage">SHOP NOW TO FILL !</span>
            }
        </div>
        <Button onClick={()=>
        {history.push("/checkout");
        dispatch(toggleCart())}
        } classes="btn btn-outline-dark btn-lg">GO TO CHECK</Button>
    </div>
)
const mapStateToProps=createStructuredSelector(
 {  items  : selectCartItems}
)

export default withRouter(connect(mapStateToProps)(Drop));