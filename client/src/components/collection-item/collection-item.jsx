import React from "react";
import Button from "../button/button";
import "./collection-item.scss";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cartActions";
import {toggleCart} from "../../redux/cart/cartActions";
import {selectHidden} from "../../redux/cart/cartSelector";
const CollectionItem = ({item,addItem, toggleCart,hidden} )=> 
 { 
     const {imageUrl , name , price }=item;
  return (   <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`} } />
      <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
      </div> 
     <Button onClick={()=>{addItem(item); (!hidden) && toggleCart() ;
      }} classes="btn btn-outline-dark btn-lg btn-collection">ADD</Button>
    </div>)
 }
const mapDispatchToProps= dispatch =>({
    addItem : (item)=> dispatch(addItem(item)),
    toggleCart : ()=>dispatch(toggleCart())
})
const mapStateToProps= state=>(
    {
        hidden : selectHidden(state)
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem);