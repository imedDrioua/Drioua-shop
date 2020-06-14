import React from "react";
import "./shop-page.scss";
import Data from "./data";
import CollectionPreview from "../../components/collection/collection-preview"
class ShopPage extends React.Component{
    constructor(){
        super();
        this.state = {
            data : Data
        }
    }
    render(){
        
        return (
            <div>
            {this.state.data.map(({id,...props}) =>  ( <CollectionPreview key={id} {...props}  />))}
            
            </div>
        );
    }
}
export default ShopPage;