import React from "react";
import Button from "../button/button";
import "./collection-item.scss";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cartActions";

const CollectionItem = ({item,addItem} )=> 
 { 
     const {imageUrl , name , price }=item;
  return (   <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`} } />
      <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
      </div> 
     <Button onClick={()=>addItem(item)} classes="btn btn-outline-dark btn-lg btn-collection">ADD</Button>
    </div>)
 }
const mapDispatchToProps= dispatch =>({
    addItem : (item)=> dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);