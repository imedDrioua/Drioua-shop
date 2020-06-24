import React, {useState} from "react";
import "./sign-in.scss";
import InputForm from "../../components/form-input/form-input";
import Button from "../../components/button/button";
import {signInWithGoogle} from "../../firebase/firebase-util";
import {auth} from "../../firebase/firebase-util";
const  SignIn = ()=>{
   const [userCred , setUserCred] = useState(
   {email : "",
    password : ""}
   );
    const  handlChange = (event)=>{
        const {name , value} = event.target;
         setUserCred({
             ...userCred ,
             [name] : value
         })
    }
    const  handlSubmit= async (event)=> {
      
    event.preventDefault();
    const {email , password } = userCred;
    await auth.signInWithEmailAndPassword(email , password);
    setUserCred(
       {
        email : "",
        password : ""
       } 
    )
    }
    const {email , password}=userCred;
        return (
            <div className="col-sm-12 col-lg-6" >
            <div className="sign-in">
                <h1>Sign in</h1>
                <h3>I already have an account</h3>
                <form >
                    <InputForm 
                    label="email"
                    name="email"
                    handlchange={handlChange}
                    type="email" 
                    value={email} 
                 />
                    <InputForm 
                    label="paassword"
                    name="password"
                    handlchange={handlChange}
                    type="password" 
                    value={password} 
                     />
                  <Button type="submit" classes={"btn btn-lg btn-dark"} onClick={handlSubmit} >Sign In </Button>
                  <Button type="button" classes={"btn btn-lg btn-primary"} onClick={()=>signInWithGoogle()} >Sign In with Google</Button>                               
                 </form>
            </div>
            </div>
        )
    }

export default SignIn;