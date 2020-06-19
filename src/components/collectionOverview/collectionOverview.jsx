import React from 'react';
import "./collectionOverview.scss";
import CollectionPreview from "../../components/collection/collection-preview";
import {selectCollectionArray  }from "../../redux/shop/shopSelector";
import {connect} from "react-redux";

const CollectionOverview=({collections})=> (
    <div>
    {console.log(collections)}
         {collections.map(({id,...props}) =>  ( <CollectionPreview key={id} {...props}  />))}
    </div>
)
const mapStateToProps= state =>( {
    collections : selectCollectionArray(state)
})

export default connect(mapStateToProps)(CollectionOverview);