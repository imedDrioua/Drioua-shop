import React from "react";
import "./shop-page.scss";
import {Route} from "react-router-dom";
import Collection from "../collection/collection";
import CollectionOverview from "../../components/collectionOverview/collectionOverview";

const ShopPage =({match})=>{   
        return (
            <div className="shop-page">
                 <Route exact path={`${match.path}`} component={CollectionOverview}/>
                 <Route path={`${match.path}/:collectionId`} component={Collection}/>
            </div>
        );
}


export default ShopPage;