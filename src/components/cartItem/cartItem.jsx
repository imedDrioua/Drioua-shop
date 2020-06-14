import React from 'react';
import "./cartItem.scss";

export const CartItem = ({item : {name , imageUrl , price , quantity}})=>(
    <div className="cart-item">
        <img src ={imageUrl} alt="cart" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} * {price }DA</span>
        </div>
    </div>
)