import React from 'react';
import "./checkout.scss";
import {createStructuredSelector} from "reselect";
import { selectCartItems, selectTotalprice } from '../../redux/cart/cartSelector';
import { connect } from 'react-redux';
import CheckItem from '../../components/checkItem/checkItem';
const Checkout=({cartsItems,total})=>(
         <div className="checkout-page">
           <div className="checkout-header">
               <div className="header-block">
                   <span>Product</span>
               </div>
               <div className="header-block">
                   <span>Description</span>
               </div>
               <div className="header-block">
                   <span>Quantity</span>
               </div>
               <div className="header-block">
                   <span>Price</span>
               </div>
               <div className="header-block">
                   <span>Remove</span>
               </div>
          </div>
          
            { cartsItems.map(item => <CheckItem key={item.id}item={item} />)}
          
          <div className="total">
              <span>TOTAL : {total}DA</span>
          </div>
         </div>
)

const mapStateToProps=createStructuredSelector(
    {
        cartsItems : selectCartItems,
        total : selectTotalprice
    }
)
export default connect(mapStateToProps)(Checkout);