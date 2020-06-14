import React from 'react';
import "./cart.scss"
import {ReactComponent as Bag } from "../../assets/images/bag.svg";
import {connect} from "react-redux";
import {toggleCart} from "../../redux/cart/cartActions";
import {selectCartItemsNumber } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from 'reselect';


const Cart =({toggleCart,somme})=>
   ( <div className="cart-icon" onClick={toggleCart}>
        <Bag className="shopping-icon"  />
        <span className="item-count">{somme}</span>
    </div>)
const mapDispatchToProps = dispatch =>(
 {   
     toggleCart : ()=>dispatch(toggleCart())
    }
)
const mapStateToProps = createStructuredSelector(
    {
        somme : selectCartItemsNumber
    }
)
export default connect(mapStateToProps,mapDispatchToProps)( Cart);