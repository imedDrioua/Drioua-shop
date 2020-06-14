import React from 'react';
import "./cart-drop.scss";
import Button from "../button/button";
import {connect} from "react-redux";
import { CartItem } from '../cartItem/cartItem';

const Drop = ({items})=>(
    <div className="cart-dropdown">
        <div className="cart-items" >
            {items.map(item => <CartItem key={item.id} item={item}/>) }
        </div>
        <Button classes="btn btn-outline-dark btn-lg">Check</Button>
    </div>
)
const mapStateToProps=({cart : {items}}) =>(
   {items}  
)

export default connect(mapStateToProps)(Drop);