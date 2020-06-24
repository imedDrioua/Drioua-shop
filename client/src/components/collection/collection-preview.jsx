import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item";
import {
    withRouter } from "react-router-dom";


const CollectionPreview = ({title , items,history})=>(
    <div className="collection-preview">
        <h1 onClick={()=> history.push(`/shop/${title.toLowerCase()}`)} className="title">{title}</h1>
        <div className="row">
            {
                items.filter((item , index)=>(index < 4)).map(item=> (<CollectionItem key={item.id} space={true} item={item} />))
            }
        </div>
    </div>
);
export default withRouter (CollectionPreview);
  
