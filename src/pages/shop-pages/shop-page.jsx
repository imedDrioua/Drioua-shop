import React from "react";
import "./shop-page.scss";
import {Route} from "react-router-dom";
import Collection from "../collection/collection";
import CollectionOverview from "../../components/collectionOverview/collectionOverview";
import {firestore} from "../../firebase/firebase-util";
import {addData} from "../../redux/shop/shopActions";
import {connect} from "react-redux";
import WithSpinner from "../../components/spinner/spinner";
const CollectionOverViewSpinner = WithSpinner(CollectionOverview);
const CollectionSpinner = WithSpinner(Collection);
class ShopPage extends React.Component {   
  state={
    loading : true
  }
   componentDidMount  ()  {
       const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot=> {
      const data=createCollections(snapshot);
      this.props.addData(data);
      this.setState({
        loading : false
      })
    });

    }
    render()
         { 
            const {match} =this.props;
       return ( 
            <div className="shop-page">
                 <Route exact path={`${match.path}`} render={props=> <CollectionOverViewSpinner isLoading={this.state.loading} {...props}/> }/> 
                 <Route path={`${match.path}/:collectionId`}render={props=> <CollectionSpinner isLoading={this.state.loading} {...props}/>}/>
            </div>
        );}
}
const mapDispatchToProps = dispatch => ({
    addData :data =>dispatch(addData(data))
});

export default connect(null , mapDispatchToProps)(ShopPage);

const createCollections=snapShot=>{
  const dataArray = snapShot.docs.map(doc =>{
      const {title , items}= doc.data();
      return ({
          title,
          routeName : encodeURI(title.toLowerCase()),
          id : doc.id,
          items
      })
  });
  return dataArray.reduce((acc , collection)=>
{  acc[collection.title.toLowerCase()] = collection;
  return acc;
},{})

}