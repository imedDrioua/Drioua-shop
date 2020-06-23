import React from "react";
import Button from "../button/button";
import "./collection-item.scss";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cartActions";
import {toggleCart} from "../../redux/cart/cartActions";
import {selectHidden} from "../../redux/cart/cartSelector";
const CollectionItem = ({item,addItem, toggleCart,hidden,space} )=> 
 { 
     const {imageUrl , name , price }=item;
  return (   
     <div  className="col-md-3" >
     <div className="collection-item " style={space? {marginBottom : 30} :{}} >
      <div className="front side"  style={{backgroundImage: `url(${imageUrl})`} } />
      <div className="back side">
      <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price} DZA</span>
      </div> 
     <Button onClick={()=>{addItem(item); (!hidden) && toggleCart() ;
      }} classes="btn btn-dark btn-lg btn-collection">ADD</Button>
      </div>
      </div>
    </div>
  
    )
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