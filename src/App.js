import React from 'react';
import {Route, BrowserRouter,Switch,Redirect} from "react-router-dom";
import './App.css';
import {auth} from "./firebase/firebase-util";
import Hompage from "./pages/home-page/hompage.components";
import ShopPage from "./pages/shop-pages/shop-page";
import Header from "./components/header/header";
import Sign from "./pages/sign-in-up/sign-in-up";
import {  creatUsreDocument} from "./firebase/firebase-util";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/userActions";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/userSelector";
import  Checkout  from './pages/checkout/checkout';

class App extends React.Component {

       subscribed = null;
       componentDidMount()  { 
        this.subscribed= auth.onAuthStateChanged(async (user) =>{
                 if(user){
                  const userRef= await creatUsreDocument(user,{});
                  userRef.onSnapshot(userSnap=>{
                   this.props.setCurrentUser(
                            {
                              id : userSnap.id,
                              ...userSnap.data()                          
                            }                
                   );

                  });
              }
                     this.props.setCurrentUser(user);  
       

                     
       })
} 
componentWillUnmount(){
this.subscribed();
}
       render(){

              return( 
                       <BrowserRouter>
                    <Header  />
                    <Switch>
                               <Route exact path="/" component={Hompage} />,
                               <Route  path="/shop" component={ShopPage} />
                               <Route  path="/checkout" component={Checkout}/>
                               <Route  path="/sign" 
                               render={()=>this.props.currentUser ? 
                               <Redirect to="/"/> :
                               <Sign />}

                               />
                               </Switch>
                    </BrowserRouter>            
             ) ;
       }
    
}
const mapStateToProps = createStructuredSelector(
       {
              currentUser : selectCurrentUser
       }
)
const mapDispatchToProps = dispatch => ({
       setCurrentUser: user => dispatch(setCurrentUser(user))
     });
     
     export default connect(
       mapStateToProps,
       mapDispatchToProps
     )(App);