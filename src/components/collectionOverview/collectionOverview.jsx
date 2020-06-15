import React from 'react';
import "./collectionOverview.scss";
import CollectionPreview from "../../components/collection/collection-preview";
import {selectCollections  }from "../../redux/shop/shopSelector";
import {connect} from "react-redux";

const CollectionOverview=({collections})=> (
    <div>
         {collections.map(({id,...props}) =>  ( <CollectionPreview key={id} {...props}  />))}
    </div>
)
const mapStateToProps= state =>( {
    collections : selectCollections(state)
})

export default connect(mapStateToProps)(CollectionOverview);