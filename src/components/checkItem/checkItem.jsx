import React from "react";
import "./checkItem.scss";
import {removeItem,decreaseItem , addItem} from "../../redux/cart/cartActions";
import {connect} from "react-redux";
const CheckItem=({item , removeitem,addItem , decreaseItem})=>{
    const {imageUrl , name , price ,quantity}=item;
    return(
     <div className="checkout-item">
         <div className="image-container">
                <img alt="item" src={imageUrl} />
         </div>
         <span className="name">{name}</span>
         <span className="quantity">
         <div onClick={()=>decreaseItem(item)} className="arrow">&#10094;</div>
         {quantity}
         <div onClick={()=>addItem(item)}  className="arrow">&#10095;</div>
         </span>
         <span className="price">{price}DA</span>
         <div onClick={()=>removeitem(item)} className="remove-button">
          &#10006;
         </div>
     </div>
)}
const mapDispatchToProps=dispatch=>(
    {
        removeitem : item => dispatch(removeItem(item)),
        addItem : item =>dispatch(addItem(item)),
        decreaseItem : item =>dispatch(decreaseItem(item))
    }
);
export default connect(null,mapDispatchToProps)( CheckItem );