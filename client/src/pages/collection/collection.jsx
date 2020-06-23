import React from 'react';
import "./collection.scss";
import { collectionSelector } from '../../redux/shop/shopSelector';
import {connect} from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item"

const Collection = ({collection})=>{

   const {items , title}= collection ? collection : {items : [] , title : ""};
    return(  
    <div className="collection-page">
    <h2 className="title">{title}</h2>
    <div className="row">
       {  items.map(item=> <CollectionItem key={item.id} space={true} item={item}/>)}
       
    </div>
    </div> 
    
)}
const mapTostate= (state , ownProps) =>(
{    collection : collectionSelector(ownProps.match.params.collectionId)(state)}
)


export default connect(mapTostate)( Collection);