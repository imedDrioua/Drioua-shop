import React from "react";
import "./sign-in-up.scss";
import SignIn from "../../components/sign-in/sign-in";
import Signup from "../../components/sign-up/sign-up";
const Sign = ()=>(
    <div className="SignInUp">
       <div className="row">
    <SignIn />
    <Signup />
    </div>
    </div>
 
);


export default Sign ;