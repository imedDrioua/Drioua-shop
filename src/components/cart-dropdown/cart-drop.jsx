import React from 'react';
import "./cart-drop.scss";
import Button from "../button/button";

const Drop = ()=>(
    <div className="cart-dropdown">
        <div className="cart-items" />
        <Button classes="btn btn-outline-dark btn-lg">Check</Button>
    </div>
)
export default Drop;