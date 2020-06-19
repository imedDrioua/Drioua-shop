import React from "react";
import "./shop-page.scss";
import {Route} from "react-router-dom";
import Collection from "../collection/collection";
import CollectionOverview from "../../components/collectionOverview/collectionOverview";
import {asyncFetching} from "../../redux/shop/shopActions";
import {isFetchingSelector} from "../../redux/shop/shopSelector";
import {connect} from "react-redux";
import WithSpinner from "../../components/spinner/spinner";
const CollectionOverViewSpinner = WithSpinner(CollectionOverview);
const CollectionSpinner = WithSpinner(Collection);
class ShopPage extends React.Component {   
   componentDidMount() {
   this.props.fetchingData();
    }
    render()
         { 
            const {match} =this.props;
       return ( 
            <div className="shop-page">
                 <Route exact path={`${match.path}`} render={props=> <CollectionOverViewSpinner isLoading={this.props.isFetchig} {...props}/> }/> 
                 <Route path={`${match.path}/:collectionId`} render={props=> <CollectionSpinner isLoading={this.props.isFetchig} {...props}/>}/>
            </div>
        );}
}
const mapStateToProps = state =>({
  isFetchig : isFetchingSelector(state)
});
const mapDispatchToProps = dispatch => ({
    fetchingData :()=> dispatch(asyncFetching())
});

export default connect(mapStateToProps , mapDispatchToProps)(ShopPage);

