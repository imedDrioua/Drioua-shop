import React from "react";
import Button from "../button/button";
import "./collection-item.scss";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cartActions";
const CollectionItem = ({item,addItem,space} )=> 
 { 
     const {imageUrl , name , price }=item;
  return (   
     <div  className="col-md-3 col-sm-12" >
     <div className="collection-item " style={space? {marginBottom : 30} :{}} >
  
      <div className="front side"  style={{backgroundImage: `url(${imageUrl})`} } />
      <div className="back side">
      <p>Imed dr</p>
      <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price} DZA</span>
      </div> 
     <Button onClick={()=>{addItem(item);
      }} classes="btn btn-dark btn-lg btn-collection">ADD</Button>
      </div>
      </div>
    </div>
  
    )
 }
const mapDispatchToProps= dispatch =>({
    addItem : (item)=> dispatch(addItem(item)),
})


export default connect(null,mapDispatchToProps)(CollectionItem);