import React,{useEffect, lazy, Suspense} from 'react';
import {Route, BrowserRouter,Switch,Redirect} from "react-router-dom";
import './App.css';
import {auth} from "./firebase/firebase-util";
import Header from "./components/header/header";
import {  creatUsreDocument} from "./firebase/firebase-util";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/userActions";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/userSelector";


const App =({setCurrentUser ,currentUser })=>{
       
       const Hompage=lazy(()=>import("./pages/home-page/hompage.components"));
       const ShopPage=lazy(()=>import("./pages/shop-pages/shop-page"));
       const Checkout=lazy(()=>import('./pages/checkout/checkout'));
       const Sign=lazy(()=>import("./pages/sign-in-up/sign-in-up"));
       useEffect(() => {
              let subscribed = null;
              subscribed= auth.onAuthStateChanged(async (user) =>{
                     if(user){
                      const userRef= await creatUsreDocument(user,{});
                      userRef.onSnapshot(userSnap=>{
                       setCurrentUser(
                                {
                                  id : userSnap.id,
                                  ...userSnap.data()                          
                                }                
                       );
    
                      });
                  }
                       setCurrentUser(user);                   
           })
           return ()=>{
                  subscribed();
           }
             
       }, [setCurrentUser]);
      

              return( 
                     <Suspense fallback={<div style={{color : "red"}}>Now loading</div>}>
                       <BrowserRouter>
                    <Header  />
                    <Switch>
                               <Route exact path="/" component={Hompage} />,
                               <Route  path="/shop" component={ShopPage} />
                               <Route  path="/checkout" component={Checkout}/>
                               <Route  path="/sign" 
                               render={()=>currentUser ? 
                               <Redirect to="/"/> :
                               <Sign />}

                               />
                               </Switch>
                    </BrowserRouter> 
                    </Suspense>           
             ) ;
       }
    
const mapStateToProps = createStructuredSelector(
       {
              currentUser : selectCurrentUser,
       }
)
const mapDispatchToProps = dispatch => ({
       setCurrentUser: user => dispatch(setCurrentUser(user))
     });
     
     export default connect(
       mapStateToProps,
       mapDispatchToProps
     )(App);

